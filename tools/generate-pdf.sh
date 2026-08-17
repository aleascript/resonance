#!/bin/bash
set -euo pipefail

SCRIPT_DIR="$(cd "$(dirname "$0")" && pwd)"
PROJECT_DIR="$(dirname "$SCRIPT_DIR")"
TEMPLATE="$SCRIPT_DIR/template-resonance.tex"
SRD_DIR="$PROJECT_DIR/srd"

if [ $# -lt 1 ]; then
    echo "Usage: $0 <fichier-source.md> [output.pdf]" >&2
    echo "Exemple: $0 content/fr/index.md srd/resonance-fr.pdf" >&2
    exit 1
fi

SOURCE="$1"

if [ ! -f "$SOURCE" ]; then
    echo "Erreur: Fichier source non trouvé: $SOURCE" >&2
    exit 1
fi

if [ ! -f "$TEMPLATE" ]; then
    echo "Erreur: Template LaTeX non trouvé: $TEMPLATE" >&2
    exit 1
fi

if [ $# -ge 2 ]; then
    OUTPUT="$2"
else
    if echo "$SOURCE" | grep -q "content/fr/"; then
        OUTPUT="$SRD_DIR/resonance-fr.pdf"
    elif echo "$SOURCE" | grep -q "content/en/"; then
        OUTPUT="$SRD_DIR/resonance-en.pdf"
    else
        OUTPUT="$SRD_DIR/resonance.pdf"
    fi
fi

mkdir -p "$(dirname "$OUTPUT")"

TMPFILE=$(mktemp /tmp/resonance-XXXXXX.md)
trap "rm -f $TMPFILE" EXIT

sed '/^---$/,/^---$/d' "$SOURCE" | sed '/!\[.*\](\.\.\/assets\/.*\.png)/d' > "$TMPFILE"

sed -i "s|/content/assets/|${PROJECT_DIR}/content/assets/|g" "$TMPFILE"
sed -i "s|\.\./assets/|${PROJECT_DIR}/content/assets/|g" "$TMPFILE"

IMAGE_PATH="${PROJECT_DIR}/content/assets/resonance.png"

echo "Génération du PDF: $OUTPUT"
pandoc "$TMPFILE" \
    --pdf-engine=xelatex \
    -V template="$TEMPLATE" \
    -V image_path="$IMAGE_PATH" \
    -V lang=fr \
    --resource-path="$PROJECT_DIR" \
    --toc \
    --toc-depth=2 \
    -o "$OUTPUT"

echo "PDF généré: $OUTPUT"
