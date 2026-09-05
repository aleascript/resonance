# Resonance publications

Resonance publishes the current EN/FR corpus as versioned PDF editions alongside the Docusaurus site.

## Local build

Use Node.js 24 (minimum supported runtime: 22.12).

```bash
npm install
npm run typecheck
npm run build
npm run publication:build
```

Generated publication assets are written to `dist/publications/`:

- `resonance-en.pdf`
- `resonance-fr.pdf`
- `publications.json`

To prepare the website with those generated downloads:

```bash
npm run publication:site
```

This copies the publication corpus to `build/downloads/`. The localized `/publications/` page reads the shared deployment-root `downloads/publications.json` manifest rather than a locale-relative path.

## Publication configuration

`publications.config.mjs` is the editorial source of truth for book composition. Publication order is explicit and independent from the Docusaurus sidebar.

The current Resonance edition contains, in order:

1. `index.md`
2. `principles.md`
3. `design-axes.md`
4. `experiments.md`

The same composition is declared separately for EN and FR.

The PDF theme lives in `publication/theme.css`. It intentionally follows Resonance's restrained monochrome laboratory/manifesto identity instead of the visual identity of a derived game.

## Version and revision

Repository-wide publication versions use Semantic Versioning and Git tags (`vX.Y.Z`). Editorial `revision` is separate publication metadata and currently remains `Draft`.

When no release tag exists yet, the production workflow uses `release.initialVersion` from `publications.config.mjs` and creates `v0.1.0` directly on the merged `main` commit. It does not push a technical bootstrap tag.

After the first release, the release policy is:

- `fix:` → patch
- `feat:` → minor
- breaking change → major
- `docs:`, `chore:`, `ci:`, `build:`, `test:`, `style:`, `refactor:`, `perf:` → no release

The npm package remains private and is not published.

## CI and release workflow

`.github/workflows/deploy-pages.yml` performs three distinct jobs:

- pull requests: typecheck, localized site build, EN/FR PDF build, validation artifact upload, Semantic Release dry-run;
- production release on `main`: initial release bootstrap or Semantic Release, generation of release assets, and site preparation;
- GitHub Pages deployment from the prepared `build/` directory.

The PR dry-run may create a temporary local `v0.0.0` tag inside the CI checkout only to give Semantic Release a baseline when the repository has no real release yet. That tag is never pushed and is not a publication version.

## Builder behavior

`tools/build-publications.mjs` comes from the shared `resonance-site-template` publication builder. In particular it:

- synthesizes a Markdown H1 from frontmatter `title` when a source page has no explicit H1;
- rewrites root-relative Markdown and HTML image paths such as `/img/...` so copied static assets resolve inside portable publication builds;
- converts supported Docusaurus admonitions for publication output;
- generates the publication manifest and version metadata;
- preserves optional license and lineage metadata on the cover.

Resonance deliberately has no `designedWith` or `poweredBy` lineage metadata.

## Validation before merge

A publication migration is not complete merely because the generator exits successfully. Review the CI-produced EN and FR PDFs for:

- cover and identity;
- contents page;
- chapter and page breaks;
- typography and hierarchy;
- admonitions;
- embedded images, especially the root-relative image on the Resonance home page;
- version, revision, license and absence of lineage metadata.

Also verify that the localized `/publications/` catalogue loads the shared deployment-root manifest and exposes the correct PDF asset for each locale.
