# Resonance

Resonance is an experimental game design paradigm and laboratory for tabletop role-playing games.

The published site is built with the shared [`resonance-site-template`](https://github.com/aleascript/resonance-site-template) and keeps English and French sources side by side.

## Content

```text
docs/
├── en/
│   ├── index.md
│   ├── principles.md
│   └── experiments.md
└── fr/
    ├── index.md
    ├── principles.md
    └── experiments.md
```

The current site is intentionally a foundation rather than a complete manifesto. It establishes Resonance as the experimental paradigm, then points to the projects that emerge from it.

## Local development

Use Node.js 24, then:

```bash
npm install
npm run start:en
npm run start:fr
```

Validate both locales with:

```bash
npm run check
```
