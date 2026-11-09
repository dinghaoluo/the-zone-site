# the zone

This is a visual companion to Thomas Pynchon's *Gravity's Rainbow* (1973).

## current live pages

- **network**: character and lexical networks, episode densities, and cast transitions
- **glossary**: critical terms and phrases in the novel
- **reference**: bibliography and source notes
- **methods**: calculations, display choices, and limitations

The homepage contains the section index and the episode word-count plot. Network and Methods remain works in progress.

## forthcoming pages

Episodes, Language, and Terrain are coming, but are not ready yet. The homepage shows their greyed-out previews.

## repo boundary

Network requests its datasets in the browser; its three heavier figures load as they approach the viewport. The build generates a compact cast-transition JSON file from the full CSVs in `public/data/network/`. Text extraction, analysis, and the much larger result archive are in the private repo `../the-zone`. The source files and counting conventions are recorded in `data/provenance.md`.

## local checks

`npm run check` checks Astro and TypeScript. `npm test` builds the site before running the data, search, and generated-page checks; the build runs outside the test environment so that deployed links retain the `/the-zone-site/` base.
