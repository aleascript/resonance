# Résonance

Le Principe de Résonance — un système cognitif et diégétique pour les jeux de rôle sur table.

## Site

Le site est généré par Jekyll et hébergé sur GitHub Pages.

### Développement local

```bash
bundle install
bundle exec jekyll serve
```

Le site est accessible sur `http://localhost:4000/resonance/`.

### Génération des PDFs

Les PDFs sont générés automatiquement lors des commits grâce au pre-commit hook.

Pour installer les hooks :

```bash
bash tools/install-hooks.sh
```

Génération manuelle :

```bash
bash tools/generate-pdf.sh content/fr/index.md srd/resonance-fr.pdf
```

### Dépendances

- Ruby + Bundler
- Pandoc
- LaTeX (texlive-xetex, texlive-lang-french)
