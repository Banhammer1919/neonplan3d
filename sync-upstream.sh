#!/usr/bin/env bash
# Holt Upstream-Änderungen von Mastershort/neonplan3d, merged sie in unseren Fork,
# baut das Frontend neu und pusht. Bei Konflikten bricht das Skript ab.
set -euo pipefail
cd "$(dirname "$0")"
git fetch upstream --tags
git merge --no-edit upstream/main
( cd frontend && npm ci --no-audit --no-fund --silent && npm run build )
git add -A custom_components site
git diff --cached --quiet || git commit -q -m "Rebuild bundles after upstream merge"
git push origin main
echo "Fork aktuell. In HA: HACS -> NeonPlan 3D -> Update, dann HA neu starten."
