# Publication migration handoff — Resonance

This file is an execution prompt for a future ChatGPT conversation. The PR containing it is intentionally **not the implementation**.

When resuming work, use the current branch of this PR as the implementation branch. Once the migration is complete and validated, remove this handoff file before the final merge.

## Goal

Add the full publication and release pipeline to **Resonance**, using the current `aleascript/resonance-site-template` as the generic baseline and `aleascript/regard` as the first production reference.

The result must publish the existing EN/FR Resonance corpus as:

- PDF — mandatory;
- a `/publications/` catalogue page;
- GitHub Release assets for PDF, and `publications.json`;
- a Semantic Release based repository-wide publication version.

Do not use this migration to rewrite or expand the current Resonance design material.

## First: inspect current sources, do not assume

Before changing anything:

1. Read the current `main` of:
   - `aleascript/resonance`;
   - `aleascript/resonance-site-template`;
   - `aleascript/regard`.
2. Compare the publication implementation in Regard with the template. Regard has already exposed generic fixes that may not yet have been upstreamed.
3. In particular, verify whether the template builder already contains the generic fixes used by Regard for:
   - creating a Markdown H1 from frontmatter when a page has no explicit H1;
   - rewriting root-relative Markdown/HTML image paths such as `/img/...` for portable PDF output.
4. If a generic fix still exists only in Regard, prefer upstreaming it to `resonance-site-template` first, then consume the updated template here.

This is especially important for Resonance because the current `docs/en/index.md` contains a root-relative image such as `/img/site/resonance_proposals_medium.svg`.

Do not cherry-pick the historical template PR sequence. Port the **current learned state** intentionally.

## Current Resonance facts to preserve

Current project metadata in `site.config.ts`:

- title: `Resonance`;
- tagline: `An experimental game design paradigm for tabletop role-playing games`;
- author: `AleaScript`;
- locales: EN + FR, English default;
- license metadata: CC BY 4.0;
- lineage: none (`designedWith: null`, `poweredBy: null`);
- current logo/favicon: `img/site/resonance-mode-maitre-icon-100.png`;
- visual identity: monochrome / near-monochrome, restrained, experimental, high-contrast, deliberately less “game UI” and more manifesto/laboratory.

Do not make the PDF look like Regard or another derived game. Resonance is the laboratory/paradigm itself.

## Publication composition

Do not derive publication order dynamically from the Docusaurus sidebar. Encode it explicitly in `publications.config.mjs`.

Use the current editorial order as the initial intent unless the source has changed by execution time:

1. `docs/<locale>/index.md`
2. `docs/<locale>/principles.md`
3. `docs/<locale>/design-axes.md`
4. `docs/<locale>/experiments.md`

The current EN source frontmatter uses positions 1, 2 and 3 for the first three pages, and the publication should make the final order explicit rather than relying on navigation metadata.

Web navigation and book composition must remain independent after migration.

## Resonance publication identity

Use the current Resonance visual language rather than the template demo identity. The existing Resonance logo is suitable for a cover, but inspect the current static assets and use the project’s latest chosen identity.

The PDF should feel like an experimental design manifesto/laboratory document: clean, black/white or restrained neutral palette, strong hierarchy, generous whitespace, and no decorative simulation of a traditional RPG rulebook unless the project itself has moved in that direction.

A5 is a reasonable starting point if it produces a readable manifesto-like edition, but validate the actual output rather than hard-coding the choice from precedent.

## Infrastructure to port

Use the latest template/Regard implementation as reference for all publication infrastructure, including at minimum:

- `publications.config.mjs`;
- publication CSS/theme and cover support;
- `tools/build-publications.mjs` and release/copy helpers;
- the `/publications/` Docusaurus page;
- `deploymentBaseUrl` handling so localized pages load the shared deployment-root `/downloads/publications.json` rather than `/fr/downloads/...`;
- package scripts and Vivliostyle / Semantic Release dependencies;
- `.releaserc.json`;
- PR validation and Semantic Release dry-run;
- production release + Pages deployment workflow;
- publication artifacts;
- `PUBLICATIONS.md` or the current equivalent documentation from the template.

Preserve Resonance-specific CSS, Root components, identity assets and `site.config.ts` values unless a generic migration requires a careful merge.

The existing `docusaurus.config.ts` still has `pages: false`; enable pages as part of the migration.

## Navigation requirement learned from Regard

The publication catalogue must be easy to discover.

Ensure `Publications` is:

- visible in the main navbar;
- visible in the docs/Contents menu without being buried after the entire corpus — preferably promoted near the top;
- correct in both EN and FR.

Do not repeat the earlier Regard state where the link technically existed but was practically invisible without scrolling.

## Versioning and release behavior

At the time this handoff was created, the Resonance repository has no GitHub Releases. Re-check this at implementation time.

If there is still no real `vX.Y.Z` baseline:

- set `release.initialVersion` to `0.1.0`;
- merge the implementation with a release-triggering Conventional Commit such as `feat: add publication and release pipeline`;
- the first production run should create real `v0.1.0` directly on the merged `main` commit;
- never push a technical `v0.0.0` bootstrap tag.

After the first release, use Semantic Release normally:

- `fix:` → patch;
- `feat:` → minor;
- breaking change → major;
- `docs:`, `chore:`, `ci:`, `build:`, `test:`, `style:`, `refactor:`, `perf:` → no release under the current policy.

The npm package remains private/unpublished. Version is release-level; editorial `revision` is separate.

## Expected publication metadata

Use current project metadata rather than inventing parallel values:

- output name: `resonance`;
- title: `Resonance`;
- author: `AleaScript`;
- license: current CC BY 4.0 metadata;
- lineage: none;
- cover: use the current Resonance identity asset(s), not an obsolete logo;
- initial editorial revision may remain `Draft` if that is still appropriate at implementation time.

## Validation before merge

Do not merge merely because Vivliostyle exits successfully.

The implementation conversation must:

1. run typecheck and localized Docusaurus builds;
2. build PDF for EN and FR;
3. inspect the generated PDFs visually, including cover, TOC, page breaks, typography, admonitions and images;
4. specifically verify the root-relative Resonance logo/image renders correctly in the publication;
5. make the actual EN/FR PDF artifacts available for review before merge;
6. verify PR Semantic Release dry-run behavior and confirm no PR release is created;
7. after merge, verify the real GitHub Release, assets, manifest version and Pages deployment;
8. verify the exact deployed Pages artifact if direct live HTTP checks are ambiguous;
9. confirm localized `/publications/` uses the shared deployment-root downloads path.

Any generic issue discovered here should be upstreamed to `resonance-site-template` rather than solved only inside Resonance.

## Completion condition

The migration is complete when Resonance has a production-quality EN/FR publication pipeline, a discoverable publication catalogue, a visually coherent Resonance edition, correct release semantics, and no local workaround that belongs in the shared template.

Before final merge, delete `PUBLICATION_MIGRATION_PROMPT.md` from this branch.