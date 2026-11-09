# source record

Home, Glossary, and Reference read the four source files in `src/data/` at
build time. Network requests its datasets in the browser; the cast
transitions, lexical density map, and lexical atlas load as they
approach the viewport. Fonts, browser icons, and the 3D renderer are local.

## homepage

- `src/data/episodeWordCounts.ts`
  - 73 episode word counts and the four Part lengths.
  - Matches all 73 rows of `../the-zone/01_text_extraction/outputs/episode_metadata.csv`.
  - The extraction script counts whitespace-separated items in the episode paragraphs, for a total of 333,369.
  - Used by the homepage word-count plot and the Episodes preview.
- `src/data/homepageLanguageSummary.ts`
  - Reviewed totals and legible counts for German, French, transliterated
    Russian, Herero/Nama, and Latin.
  - The fuller reviewed export is held at
    `../the-zone-site-new-pages/public/data/language/episode-summary.csv`.
  - Used only by the Language preview on the homepage.

## network

- `public/data/network/nodes.csv`, `edges.csv`, and `part-activity.json`
  - 130 connected characters, 1,959 weighted co-presence edges, and activity by Part.
  - Used by the Character atlas and Co-occurrence matrix; the heatmap also reads the character colours.
- `public/data/network/character-through-episodes/figure3_ordered_trajectories.csv`
  - 1,460 observations: twenty characters across 73 episodes, with raw mention counts, lexical-token denominators, and densities.
- `public/data/network/character-through-episodes/adjacent_episode_distances.csv` and `character_transition_contributions.csv`
  - 72 adjacent episode comparisons and 130 character contributions per comparison.
  - The build derives `dist/data/cast-transitions.json` from these two CSVs for Cast transitions. It retains all 72 display values and flags, the names of the three largest divergence terms in each direction, and whether other contributing terms remain.
  - The browser loads the compact JSON; the full CSVs remain available at their original URLs.
- `public/data/network/lexical-through-episodes/`
  - `cohort_terms.csv` identifies the sixteen exact forms; `episode_density.csv` retains all 1,168 observations.
  - `peak_quotes.json` supplies the quotations for density peaks; `manifest.json` records the counting unit and corpus hash.
- `public/data/network/lexical-proximity.json`
  - 507 retained words and 1,287 selected edges, including the 505-edge opening display forest.
  - Used by the Lexical atlas and the expandable evidence tables in Methods.
  - Its source hash matches the lexical-density manifest: `50fb81b4771b4f8885628ba1bfbbed5f3bef0f4b29c2f08c6c93fd133f43a4bc`.

The Network denominators contain 327,676 lexical tokens from the OCR-corrected
episode corpus. The tokeniser counts Unicode-letter sequences with internal
apostrophes and lexical hyphens retained; the homepage retains the extraction's
whitespace counts. Episode 1.11 has 624 whitespace items in the homepage series
and 611 lexical tokens in Network.

## glossary and reference

- `src/data/glossaryFocusEntries.ts`
  - 268 curated entries with quotations, definitions, historical notes,
    recurrence notes, and cross-references.
  - Prepared for the public site from the Glossary handoff in the publication
    archive.
- `src/data/references.json`
  - 34 bibliography records.
  - The public face uses each record's title, creator, year, category, note,
    and URL. Format, host, access, and tag fields remain available for search
    and source checking without appearing as extra labels on the page.
  - The fuller internal record is held in
    `../the-zone/05_publication/site_exports/the-zone-site-unused-2026-07-28/`.

## fonts and browser icons

- `public/fonts.css` declares the local site fonts.
- `public/fonts/MajorMonoDisplay-Regular.ttf` is used for the title and site
  mark.
- `public/fonts/mononoki/mononoki-Regular.ttf` is used for small interface labels and episode identifiers.
- `public/fonts/newsreader/` is used for the homepage subtitle.
- The four files in `public/fonts/piazzolla/` are used for prose,
  quotations, labels, controls, and reference titles.
- `public/fonts/FacultyGlyphic-Regular.ttf` is used for headings.
- `public/zone-favicon-light.svg` and `public/zone-favicon-dark.svg` are the
  theme-specific browser icons.
- `public/vendor/3d-force-graph/` contains the pinned 1.80.0 renderer;
  its source, bundle hash, and third-party notices are recorded there.

## unavailable pages

Episodes, Language, and Terrain remain outside the active build.
