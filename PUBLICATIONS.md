# Resonance publications

Resonance builds the current EN/FR corpus as versioned PDF editions with Vivliostyle.

These PDFs are **release artifacts**, not a section of the public Docusaurus site. They are intended in particular to provide a portable snapshot of the corpus that can be attached to a GitHub Release and reused when the website itself is inconvenient or unavailable to a reader or tool.

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

They are not copied into the Docusaurus `build/` directory.

## Publication configuration

`publications.config.mjs` is the editorial source of truth for book composition. Publication order is explicit and independent from the Docusaurus sidebar.

The current publication follows the same broad movement as the site:

1. home;
2. Questioning / Questionner;
3. Trying / Essayer;
4. Learning / Apprendre;
5. Others / Les autres.

All Markdown pages in each locale are included because the publication is configured as a complete corpus.

The PDF theme lives in `publication/theme.css`. It intentionally follows Resonance's restrained monochrome laboratory identity rather than the visual identity of a derived game.

## Version and revision

Repository-wide publication versions use Semantic Versioning and Git tags (`vX.Y.Z`). Editorial `revision` is separate publication metadata and currently remains `Draft`.

When no release tag exists yet, the production workflow uses `release.initialVersion` from `publications.config.mjs` and creates the initial GitHub Release directly on the merged `main` commit.

After the first release, the release policy is:

- `fix:` → patch
- `feat:` → minor
- breaking change → major
- `docs:`, `chore:`, `ci:`, `build:`, `test:`, `style:`, `refactor:`, `perf:` → no release

The npm package remains private and is not published.

## CI and release workflow

`.github/workflows/deploy-pages.yml` keeps site deployment and publication distribution separate:

- pull requests: typecheck, localized site build, EN/FR PDF build, validation artifact upload, Semantic Release dry-run;
- production release on `main`: generate the publication assets and attach them to the GitHub Release when a release is created;
- GitHub Pages: deploy only the Docusaurus site.

The PR validation PDFs remain available as GitHub Actions artifacts for review, but the public website does not expose a publication catalogue or downloadable PDF directory.

## Builder behavior

`tools/build-publications.mjs` comes from the shared `resonance-site-template` publication builder. In particular it:

- synthesizes a Markdown H1 from frontmatter `title` when a source page has no explicit H1;
- rewrites root-relative Markdown and HTML image paths so copied static assets resolve inside portable publication builds;
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
- embedded images;
- version, revision, license and absence of lineage metadata.

The important distribution check is now the GitHub Release asset set, not a page on the Resonance website.
