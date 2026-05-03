# source record

The built site reads source files from `src/data/`, together with local
fonts and browser icons from `public/`. The pages make no runtime request for
dataset files.

## homepage

- `src/data/episodeWordCounts.ts`
  - 73 episode word counts and the four Part lengths.
  - Derived from the corrected episode texts in the working analysis archive.
  - Used by the homepage word-count plot and the Episodes preview.

## reference

- `src/data/references.json`
  - Bibliography records.
  - The public face uses each record's title, creator, year, category, note,
    and URL. Format, host, access, and tag fields remain available for search
    and source checking without appearing as extra labels on the page.

## fonts and browser icons

- `public/fonts.css` declares the local site fonts.
- `public/fonts/MajorMonoDisplay-Regular.ttf` is used for the title and site
  mark.
- `public/fonts/mononoki/mononoki-Regular.ttf` is used for labels and controls.
- `public/fonts/reforma2018-gris-italica-ro.ttf` is used for the italic
  homepage subtitle.
- The four files in `public/fonts/reforma2018-*.ttf` are used for prose,
  quotations, and reference titles.
- `public/fonts/FacultyGlyphic-Regular.ttf` is used for headings.
- `public/zone-favicon-light.svg` and `public/zone-favicon-dark.svg` are the
  theme-specific browser icons.
