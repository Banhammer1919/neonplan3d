// How often the 3D view draws on the tablet level (weak wall tablets: old Fire tablets in Fully Kiosk or Silk).

/** Tablet level: decorative animations (energy flow, solar fields, sound rings, pool water, robots, pets) draw about 5 frames a second. */
export const LOW_DECOR_MS = 200;
/** Tablet level: decorative animations rest this long after the last touch (or the start of a new animation). */
export const DECOR_REST_MS = 30_000;

/**
 * Delay until the next frame of a decorative animation: the animation's own interval on a normal device; on the
 * tablet level at least `lowMs`, and null (rest, no frame) once nobody touched the view for DECOR_REST_MS.
 */
export function decorDelay(ms: number, low: boolean, idleMs: number, lowMs = LOW_DECOR_MS): number | null {
  if (!low) return ms;
  if (idleMs >= DECOR_REST_MS) return null;
  return Math.max(ms, lowMs);
}

/**
 * A device that gets the tablet level on its own ("auto"): little memory, few cores, or an Amazon Fire tablet –
 * Silk, or a Fire's model code (KFTRWI, KFMAWI …) in an Android user agent (Fully Kiosk and other WebViews), whose
 * eight slow cores would pass the core count.
 */
export function lowEndDevice(ua: string, memory: number | undefined, cores: number | undefined): boolean {
  const mem = memory ?? 8;
  const n = cores || 8;
  if (mem <= 3 || n <= 4) return true;
  if (/\bSilk\b/.test(ua)) return true;
  return /Android/.test(ua) && /\bKF[A-Z]{2,5}\b/.test(ua);
}

/** Tablet level: a change of measured values alone (power, temperature …) reaches the 3D view at most this often. */
export const SENSOR_SYNC_MS = 2000;

/** How long a sensor-only change waits on the tablet level, given the time since the last sync (0: show it now). */
export function lowSyncDelay(sinceLast: number): number {
  return Math.max(0, SENSOR_SYNC_MS - sinceLast);
}
