#!/bin/bash
set -euo pipefail

SCRIPT_DIR="$(cd "$(dirname "$0")" && pwd)"
PROJECT_DIR="$(dirname "$SCRIPT_DIR")"
HOOKS_DIR="$PROJECT_DIR/git-hooks"

if [ ! -d "$HOOKS_DIR" ]; then
    echo "Erreur: Répertoire git-hooks non trouvé: $HOOKS_DIR" >&2
    exit 1
fi

git -C "$PROJECT_DIR" config core.hooksPath "$HOOKS_DIR"

echo "Hooks Git installés depuis: $HOOKS_DIR"
echo "Le pre-commit hook générera automatiquement les PDFs lors des commits."
