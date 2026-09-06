# Resonance

Resonance is a game design R&D laboratory for tabletop role-playing games and adjacent forms of play.

Its central research problem is:

> **How can simple, generative play devices make complex fictional experiences accessible without reducing them in order to make them playable?**

Or, more compactly:

> **Do not simplify the world. Simplify the way into it.**

Resonance distinguishes **generative complexity** from **complication of practice**. It studies how rules, materials, roles, procedures, and fictional structures can reduce entry burden without merely transferring that burden to another participant or impoverishing the fiction.

The current laboratory has produced:

- [Regard](https://github.com/aleascript/regard), a playable TTRPG framework;
- [Glorantha Perspectives](https://github.com/aleascript/glorantha-perspectives) and [Scooby-Doo](https://github.com/aleascript/scooby-doo), games built with Regard;
- [Unmind](https://github.com/aleascript/unmind), a game developed directly from Resonance without Regard.

These projects are results **and experiments**. None of their mechanics defines Resonance by itself.

> **Today, Resonance is the laboratory. The Game Factory is a hypothesis the laboratory is trying to test.**

## Documentation

The published site is built with the shared [`resonance-site-template`](https://github.com/aleascript/resonance-site-template) and keeps English and French sources side by side.

Core documentation includes:

- `principles.md` — current working commitments;
- `research-fields.md` — research fields derived from the central problem;
- `simplicity-complexity.md` — generative simplicity, complication, and complexity;
- `accessibility.md` — accessibility and burden distribution;
- `otherness.md` — access to fictional alterity (WIP);
- `situation.md` — Situation, Vector, and the blank page (WIP);
- `design-axes.md` — analytical lenses, not defining axioms;
- `experiments.md` — the current internal experimental corpus;
- `comparisons.md` — external and historical comparative cases.

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
