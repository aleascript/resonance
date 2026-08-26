#!/bin/bash
set -euo pipefail

SCRIPT_DIR="$(cd "$(dirname "$0")" && pwd)"
PROJECT_DIR="$(dirname "$SCRIPT_DIR")"
TEMPLATE="$SCRIPT_DIR/template-resonance.tex"
METADATA="$SCRIPT_DIR/srd-metadata.conf"
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

if [ ! -f "$METADATA" ]; then
    echo "Erreur: Fichier de métadonnées non trouvé: $METADATA" >&2
    exit 1
fi

# shellcheck source=srd-metadata.conf
source "$METADATA"

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

# Détecter la langue depuis le chemin source
if echo "$SOURCE" | grep -q "content/fr/"; then
    LANG="fr"
    BABEL_LANG="french"
elif echo "$SOURCE" | grep -q "content/en/"; then
    LANG="en"
    BABEL_LANG="english"
else
    LANG="fr"
    BABEL_LANG="french"
fi

TMPFILE=$(mktemp /tmp/resonance-XXXXXX.md)
trap "rm -f $TMPFILE" EXIT

awk 'BEGIN{c=0;skip=0} /^---$/{c++; if(c==1){skip=1;next} if(c==2){skip=0;next}} !skip' "$SOURCE" | sed '/!\[.*\](\.\.\/assets\/.*\.png)/d' > "$TMPFILE"

sed -i "s|/content/assets/|${PROJECT_DIR}/content/assets/|g" "$TMPFILE"
sed -i "s|\.\./assets/|${PROJECT_DIR}/content/assets/|g" "$TMPFILE"

# Construire les options Pandoc
PANDOC_OPTS=(
    --pdf-engine=xelatex
    --template="$TEMPLATE"
    -V "lang=$LANG"
    -V "babel-lang=$BABEL_LANG"
    -V "author=$AUTHOR"
    -V "version=$VERSION"
    -V "mail=$MAIL"
    --resource-path="$PROJECT_DIR"
    --toc
    --toc-depth=2
)

# Ajouter le flag pour l'en-tête bilingue
if [ "$LANG" = "en" ]; then
    PANDOC_OPTS+=(-V "lang-en=true")
fi

echo "Génération du PDF: $OUTPUT"
pandoc "$TMPFILE" "${PANDOC_OPTS[@]}" -o "$OUTPUT"

echo "PDF généré: $OUTPUT"
