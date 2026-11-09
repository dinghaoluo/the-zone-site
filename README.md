# the zone

This is a visual companion to Thomas Pynchon's *Gravity's Rainbow* (1973).

## current live pages

- **network**: character atlas, co-occurrence matrix, mention heatmap, cast transitions, lexical density map, and lexical atlas
- **glossary**: important terms and phrases in the novel (inspired by Pynchon Wiki's page-by-page companion)
- **reference**: bibliography and source notes
- **methods**

## forthcoming pages

Episodes, Language, and Terrain are coming, but are not ready yet.

## repo boundary

Text extraction, analysis, and the much larger result archive are in the private repo `../the-zone`. 

The source files and conventions are recorded in `data/provenance.md`.

## local checks

`npm run check` checks Astro and TypeScript. `npm test` builds the site before running the data, search, and generated-page checks; the build runs outside the test environment so that deployed links retain the `/the-zone-site/` base.