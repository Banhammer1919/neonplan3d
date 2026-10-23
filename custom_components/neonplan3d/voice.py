"""Assist asks the house: the service `neonplan3d.ask` and the intent `NeonPlanAsk`.

A sentence said to Assist (a voice satellite, the Assist dialog, an automation) is handed to the open NeonPlan
views: the first one that understands it answers, shows the place and, when asked to, speaks. The sentences
Assist recognises come from `custom_sentences/<lang>/neonplan3d.yaml`, which is written only when an admin picks
the sentences in the voice settings (never on setup, never over a file the user changed, removed with the
integration); the user may add their own sentences to the same intent in another file.
"""

from __future__ import annotations

import asyncio
import hashlib
import logging
from pathlib import Path
from typing import Any, ClassVar
import uuid

from homeassistant.core import HomeAssistant, ServiceCall, ServiceResponse, SupportsResponse
from homeassistant.helpers import config_validation as cv
from homeassistant.helpers import intent
from homeassistant.helpers.dispatcher import async_dispatcher_send
from homeassistant.helpers.storage import Store
import voluptuous as vol

from .const import DATA_ASK, DATA_VOICE, DOMAIN, SIGNAL_ASK, STORAGE_KEY_VOICE

_LOGGER = logging.getLogger(__name__)

SERVICE_ASK = "ask"
INTENT_ASK = "NeonPlanAsk"
# a view answers within a moment; a voice satellite waits for Assist, so the wait stays short
ANSWER_TIMEOUT = 6.0
SENTENCES_FILE = "neonplan3d.yaml"

ASK_SCHEMA = vol.Schema(
    {
        vol.Required("text"): vol.All(cv.string, vol.Length(min=1, max=300)),
        vol.Optional("screen"): vol.All(cv.string, vol.Length(max=60)),
        vol.Optional("speak", default=False): cv.boolean,
    }
)

# what Assist says when no view answers, by the language of Home Assistant
_NO_SCREEN = {
    "de": "Kein NeonPlan-Bildschirm ist gerade offen.",
    "en": "No NeonPlan screen is open right now.",
}
_NOT_UNDERSTOOD = {
    "de": "Das hat NeonPlan nicht verstanden.",
    "en": "NeonPlan did not understand that.",
}

# which sentences Assist hands to NeonPlan: only the distinct ones (default), every question, or none at all
SENTENCE_MODES = ("distinct", "all", "off")
DEFAULT_SENTENCE_MODE = "off"

# the distinct sentences: nobody says them to Home Assistant itself, so they never take a sentence meant for it
_DISTINCT = {
    "de": [
        "zeig[e] [mir] [mal] [bitte] {text}",
        "geh[e] [mal] (in|ins|in die|in den|auf|aufs|auf die|auf den|zu|zum|zur) {text}",
        "(frag|frage) das haus {text}",
        "(haus|neonplan|neon plan) {text}",
        "gute nacht",
        "guten morgen",
        "was kannst du [alles]",
    ],
    "en": [
        "show [me] {text}",
        "go to [the] {text}",
        "ask the house {text}",
        "(house|neonplan|neon plan) {text}",
        "good night",
        "good morning",
        "what can you do",
    ],
}

# the questions: handy, but some of them Home Assistant answers itself ("which windows are open", #641), so
# they go to NeonPlan only with the setting "all"
_QUESTIONS = {
    "de": [
        "wo (ist|sind|steht|stehen) {text}",
        "was ist [alles|gerade|denn] offen",
        "ist [irgend]was offen",
        "welche (fenster|türen) sind [noch] offen",
        "ist (ein|das) fenster (im|in der|in dem|auf dem|auf der) {text} offen",
        "wo ist es (kalt|warm|zu kalt|zu warm)",
        "was (zieht|verbraucht|braucht) [gerade|denn] [den] strom",
        "was macht die (solaranlage|solar|pv|pv-anlage|photovoltaik)",
        "wie voll ist (der|die) (akku|batterie|speicher)",
        "sind die (rollläden|rolläden|jalousien|rollos) (unten|oben|zu|offen)",
        "ist (die|das) {text} (abgeschlossen|verschlossen|zu|offen|an|aus|ein)",
        "läuft (die|der|das) {text}",
        "was läuft [gerade|noch|alles]",
        "was (steht|ist) heute an",
        "wie (ist|wird) das wetter [heute|morgen]",
    ],
    "en": [
        "where (is|are) [the] {text}",
        "what is open",
        "is anything open",
        "which (windows|doors) are [still] open",
        "is a window open in the {text}",
        "where is it (cold|warm|too cold|too warm)",
        "what is (drawing|using) power",
        "what is the solar doing",
        "how full is the battery",
        "are the (blinds|shutters) (down|up|closed|open)",
        "is the {text} (locked|unlocked|closed|open|on|off)",
        "is the {text} running",
        "what is running",
        "what is on today",
        "what is the weather [like] [today|tomorrow]",
    ],
}


def sentences_of(language: str, mode: str = DEFAULT_SENTENCE_MODE) -> list[str]:
    """The sentences of a language in a mode (none for "off")."""
    if mode == "off":
        return []
    return _DISTINCT[language] + (_QUESTIONS[language] if mode == "all" else [])


def sentences_yaml(language: str, mode: str = DEFAULT_SENTENCE_MODE) -> str:
    """The custom sentences file of a language (written by hand: the file stays readable for the user)."""
    lines = [
        "# Written by NeonPlan 3D: the sentences Assist hands to the open NeonPlan views (the first one that",
        "# understands answers). Put your own sentences for NeonPlanAsk into another file.",
        "# Which sentences stand here is set in the editor: ⚙ Settings → Voice control → Sentences for Assist.",
        "# Changed by hand, the file is never overwritten; removing the integration removes it.",
        f'language: "{language}"',
        "intents:",
        f"  {INTENT_ASK}:",
        "    data:",
        "      - sentences:",
    ]
    lines += [f'          - "{s}"' for s in sentences_of(language, mode)]
    lines += ["lists:", "  text:", "    wildcard: true", ""]
    return "\n".join(lines)


def _sha(text: str) -> str:
    return hashlib.sha256(text.encode("utf-8")).hexdigest()


def _path(config_dir: Path, language: str) -> Path:
    return config_dir / "custom_sentences" / language / SENTENCES_FILE


def _ours(text: str) -> bool:
    """A file NeonPlan wrote (in any mode, by any version): the user has not changed it."""
    return any(text == sentences_yaml(language, mode) for language in _DISTINCT for mode in ("distinct", "all")) or (
        text.startswith("# Written by NeonPlan 3D") and text in _old_files()
    )


# the file as 1.22.0 - 1.23 wrote it (the header without the line about changed files): still ours
_CHANGED_LINE = "# Changed by hand, the file is never overwritten; removing the integration removes it.\n"
_SETTINGS_LINE = (
    "# Which sentences stand here is set in the editor: ⚙ Settings → Voice control → Sentences for Assist.\n"
)


# the second header line as 1.22.0 - 1.24.0 wrote it
_OLD_SECOND_LINE = (
    "# understands answers). Rewritten on every start: put your own sentences for NeonPlanAsk into another file.\n"
)
_NEW_SECOND_LINE = "# understands answers). Put your own sentences for NeonPlanAsk into another file.\n"


def _old_files() -> tuple[str, ...]:
    out = []
    for language in _DISTINCT:
        for mode in ("distinct", "all"):
            old = sentences_yaml(language, mode).replace(_NEW_SECOND_LINE, _OLD_SECOND_LINE)
            # 1.24.0
            out.append(old)
            # 1.22.1 - 1.23 (without the line about changed files), 1.22.0 (without the settings line too)
            text = old.replace(_CHANGED_LINE, "")
            out.append(text)
            out.append(text.replace(_SETTINGS_LINE, ""))
    return tuple(out)


def write_sentences(config_dir: Path, mode: str, written: dict[str, str]) -> tuple[dict[str, str], list[str], bool]:
    """Writes the sentence files for a mode (removes them for "off") - never over a file the user changed.

    `written`: the hash of what NeonPlan last wrote per language. Returns the new hashes, the languages whose
    file was left alone because the user changed it, and whether any file changed (Assist then reloads).
    """
    hashes = dict(written)
    kept: list[str] = []
    changed = False
    for language in _DISTINCT:
        path = _path(config_dir, language)
        try:
            current: str | None = path.read_text(encoding="utf-8")
        except OSError:
            current = None
        if current is not None and _sha(current) != written.get(language) and not _ours(current):
            # the user wrote or changed this file: it stays as it is
            kept.append(language)
            continue
        if mode == "off":
            if current is not None:
                path.unlink()
                changed = True
            hashes.pop(language, None)
            continue
        text = sentences_yaml(language, mode)
        if current != text:
            path.parent.mkdir(parents=True, exist_ok=True)
            path.write_text(text, encoding="utf-8")
            changed = True
        hashes[language] = _sha(text)
    return hashes, kept, changed


def remove_sentences(config_dir: Path, written: dict[str, str]) -> None:
    """Removes the files NeonPlan wrote (and the user did not change) when the integration is removed."""
    for language in _DISTINCT:
        path = _path(config_dir, language)
        try:
            current = path.read_text(encoding="utf-8")
        except OSError:
            continue
        if _sha(current) == written.get(language) or _ours(current):
            path.unlink()


class VoiceSettings:
    """The voice settings of the installation (.storage/neonplan3d.voice): which sentences Assist hands on, and the
    hash of each sentence file NeonPlan wrote (so a file the user changed is never overwritten). Nothing is written
    on setup: only when an admin picks the sentences in the voice settings."""

    def __init__(self, hass: HomeAssistant) -> None:
        self.hass = hass
        self._store: Store[dict[str, Any]] = Store(hass, 1, STORAGE_KEY_VOICE)
        self.sentences = DEFAULT_SENTENCE_MODE
        self.written: dict[str, str] = {}

    async def async_load(self) -> None:
        data = await self._store.async_load() or {}
        mode = data.get("sentences")
        if mode in SENTENCE_MODES:
            self.sentences = mode
        written = data.get("written")
        if isinstance(written, dict):
            self.written = {str(k): str(v) for k, v in written.items()}
        elif mode in SENTENCE_MODES and mode != "off":
            # stored by 1.22.1 - 1.23 (no hashes yet): the files there are ours as long as they match
            self.written = await self.hass.async_add_executor_job(self._adopt)

    def _adopt(self) -> dict[str, str]:
        out: dict[str, str] = {}
        for language in _DISTINCT:
            try:
                text = _path(Path(self.hass.config.config_dir), language).read_text(encoding="utf-8")
            except OSError:
                continue
            if _ours(text):
                out[language] = _sha(text)
        return out

    async def async_set_sentences(self, mode: str) -> list[str]:
        """An admin picked the sentences: writes (or removes) the files, Assist reloads them. Returns the
        languages whose file was left alone because the user changed it."""
        if mode not in SENTENCE_MODES:
            raise ValueError(mode)
        try:
            hashes, kept, changed = await self.hass.async_add_executor_job(
                write_sentences, Path(self.hass.config.config_dir), mode, self.written
            )
        except OSError:
            _LOGGER.warning("Could not write the Assist sentences", exc_info=True)
            raise
        self.sentences = mode
        self.written = hashes
        await self._store.async_save({"sentences": mode, "written": hashes})
        # Assist reads custom sentences at its start: a changed file is loaded now
        if changed and self.hass.services.has_service("conversation", "reload"):
            await self.hass.services.async_call("conversation", "reload", {}, blocking=False)
        return kept


async def async_remove_sentences(hass: HomeAssistant) -> None:
    """The integration is removed: the sentence files NeonPlan wrote go with it."""
    settings = VoiceSettings(hass)
    await settings.async_load()
    if not settings.written:
        return
    await hass.async_add_executor_job(remove_sentences, Path(hass.config.config_dir), settings.written)
    await settings._store.async_remove()


class AskBroker:
    """Hands a sentence to the views and waits for the first answer."""

    def __init__(self, hass: HomeAssistant) -> None:
        self.hass = hass
        self._pending: dict[str, asyncio.Future[dict[str, Any]]] = {}

    async def ask(self, text: str, screen: str | None, speak: bool) -> dict[str, Any] | None:
        """The answer of the first view ({"text", "answered"}), None when no view is open or none answered in time."""
        ask_id = uuid.uuid4().hex
        future: asyncio.Future[dict[str, Any]] = self.hass.loop.create_future()
        self._pending[ask_id] = future
        try:
            ask = {"ask_id": ask_id, "text": text, "screen": screen, "speak": speak}
            async_dispatcher_send(self.hass, SIGNAL_ASK, ask)
            async with asyncio.timeout(ANSWER_TIMEOUT):
                return await future
        except TimeoutError:
            return None
        finally:
            self._pending.pop(ask_id, None)

    def answer(self, ask_id: str, text: str, answered: bool) -> bool:
        """A view's answer; only the first one counts. False when the question is unknown (or answered already)."""
        future = self._pending.get(ask_id)
        if future is None or future.done():
            return False
        future.set_result({"text": text, "answered": answered})
        return True


class AskIntentHandler(intent.IntentHandler):
    """Assist's "show me the living room" and the questions the modules answer."""

    intent_type = INTENT_ASK
    description = "Shows a place or device in NeonPlan 3D or asks the house a question (the open NeonPlan views answer)"
    slot_schema: ClassVar[dict] = {vol.Optional("text"): cv.string}

    def __init__(self, broker: AskBroker) -> None:
        self.broker = broker

    async def async_handle(self, intent_obj: intent.Intent) -> intent.IntentResponse:
        slots = self.async_validate_slots(intent_obj.slots)
        # the views understand the whole sentence ("show the living room"); the wildcard alone is the fallback
        text = (intent_obj.text_input or str(slots.get("text", {}).get("value") or "")).strip()
        if not text:
            raise intent.InvalidSlotInfo("no sentence")
        language = (intent_obj.language or intent_obj.hass.config.language or "en").split("-")[0]
        answer = await self.broker.ask(text, None, False)
        response = intent_obj.create_response()
        if answer is None:
            response.async_set_speech(_NO_SCREEN.get(language, _NO_SCREEN["en"]))
        elif not answer["answered"]:
            response.async_set_speech(_NOT_UNDERSTOOD.get(language, _NOT_UNDERSTOOD["en"]))
        else:
            response.async_set_speech(answer["text"])
        return response


async def async_setup_voice(hass: HomeAssistant) -> None:
    """Registers the service and the intent and writes the sentences Assist understands."""
    broker = AskBroker(hass)
    hass.data[DATA_ASK] = broker

    async def handle_ask(call: ServiceCall) -> ServiceResponse:
        answer = await broker.ask(call.data["text"], call.data.get("screen"), call.data["speak"])
        if answer is None:
            return {"answered": False, "answer": "", "screen_open": False}
        return {"answered": answer["answered"], "answer": answer["text"], "screen_open": True}

    hass.services.async_register(
        DOMAIN, SERVICE_ASK, handle_ask, schema=ASK_SCHEMA, supports_response=SupportsResponse.OPTIONAL
    )
    intent.async_register(hass, AskIntentHandler(broker))

    # the sentence files are written only when an admin picks them in the voice settings (never on setup)
    settings = VoiceSettings(hass)
    await settings.async_load()
    hass.data[DATA_VOICE] = settings


def async_unload_voice(hass: HomeAssistant) -> None:
    """Service and intent go with the integration."""
    hass.services.async_remove(DOMAIN, SERVICE_ASK)
    intent.async_remove(hass, INTENT_ASK)
    hass.data.pop(DATA_ASK, None)
    hass.data.pop(DATA_VOICE, None)
