# AGENTS.md — F1 Journal

## 1. Project purpose
F1 Journal is an independent, fan-made educational website introducing Formula 1 through four content collections: teams, drivers, circuits, and beginner guides. The site is designed to be extended over time by adding structured content without rebuilding the layout.

This is not an official Formula 1 product. Do not imply affiliation with Formula 1, the FIA, teams, drivers, or sponsors.

## 2. Tech stack and runtime
- Use semantic HTML5, plain CSS, and vanilla JavaScript.
- Do not introduce a framework, package manager, build step, server, database, or API unless the project owner explicitly requests it.
- The site must remain deployable as a static GitHub Pages site.
- Keep all paths relative so the project works in a repository subpath.
- Existing entry point is `index.html`.

## 3. Design system
- Visual direction: motorsport editorial magazine; bold, precise, high contrast.
- Core palette: near-black `#101114`, off-white `#f5f5f2`, racing red `#e10600`, muted grey `#777980`.
- Use red only for emphasis, active details, and key accents.
- Display typography: Barlow Condensed; body typography: DM Sans. Keep sensible system fallbacks.
- Use strong uppercase section headings, small letter-spaced eyebrow labels, generous whitespace, and consistent card patterns.
- Maintain responsive layouts: desktop grids should collapse to one column on narrow screens; navigation must remain usable on mobile.
- Do not add emoji to the interface unless explicitly requested.
- Preserve the existing visual language when adding content. Do not create a one-off visual style for a single item.

## 4. Project structure
- `index.html`: page structure, navigation, section containers, metadata.
- `css/style.css`: all visual styles, tokens, responsive rules.
- `js/data.js`: content records only; no DOM manipulation.
- `js/app.js`: rendering, search, navigation interactions.
- `assets/images/`: locally stored, licensed or user-provided image assets.
- `AGENTS.md`: project rules and maintenance instructions.
- `README.md`: project overview, local preview, deployment and contribution notes.

Do not create duplicate files such as `style-new.css` or `data-final.js`. Extend the existing files unless a new content type genuinely requires a new module.

## 5. Content data schema
Add records to `window.F1_DATA` in `js/data.js`. Keep the following fields:

### Team
`{ name, country, category, color, description }`
- `name`: public team/constructor name.
- `country`: country association, written consistently.
- `category`: normally `Constructor`.
- `color`: valid CSS hex color.
- `description`: concise, factual, neutral introduction.

### Driver
`{ name, number, team, country, note }`
- `number`: string, to preserve formatting.
- `team`: must match a team name used by the site or its display name.
- `note`: short factual profile; avoid unsupported superlatives.

### Circuit
`{ name, location, character }`
- `character`: 2–4 short characteristics separated by ` · `.

### Guide article
`{ title, category, body }`
- `category`: short topic label.
- `body`: beginner-friendly explanation in 1–3 sentences.

## 6. Adding or editing content
When asked to add content:
1. Read this file first.
2. Identify the correct collection in `js/data.js`.
3. Verify names, current affiliations, statistics, and season-sensitive details against reliable sources. Prefer official Formula 1, FIA, team, or circuit websites.
4. Add only the requested records; do not rewrite unrelated records.
5. Follow the exact schema and keep the existing array/object style.
6. Check spelling, duplicate names, missing fields, and references to existing team names.
7. Preview the page and confirm the new record appears in the intended section.
8. Confirm search still works and the mobile layout remains usable.

When asked to add a new page or content type:
1. Explain briefly why the existing four collections are insufficient.
2. Reuse the same typography, colors, spacing, and card conventions.
3. Add a clearly named renderer in `js/app.js` and a matching container in `index.html`.
4. Keep content records in `js/data.js`; do not hard-code content into the renderer.
5. Update this file and `README.md` with the new structure and schema.

## 7. Accuracy, sources and image use
- Formula 1 information changes by season. Always identify the relevant season when presenting current teams, drivers, regulations, calendars, or standings.
- Never invent race results, statistics, driver numbers, team affiliations, or quotes.
- If a fact cannot be verified, omit it or label it clearly as historical/general context.
- Add a short source link in the relevant content when detailed factual claims are introduced.
- Use only images that are licensed for reuse, user-provided, or otherwise permitted. Record attribution when required.
- Do not download or hotlink copyrighted F1 broadcast photography or official logos without permission.
- Do not use Formula 1 trademarks or team logos in a way that implies endorsement.

## 8. Code quality and safety
- Prefer small, readable functions and descriptive variable names.
- Use semantic elements and accessible labels for controls.
- Escape or safely handle user-controlled text before inserting it into HTML. Do not introduce arbitrary executable HTML from content records.
- Avoid inline styles except for data-driven accent colors already used by the card components.
- Do not remove existing search, navigation, or responsive behavior when making changes.
- Avoid unnecessary dependencies and external scripts.

## 9. Required checks before completion
- `index.html` loads with no missing local files.
- Team search filters results and displays the correct count.
- All four content sections render when data exists.
- Navigation anchors lead to the correct sections.
- Mobile navigation opens, closes, and remains readable.
- No horizontal overflow at mobile widths.
- New content follows the schema and has no obvious duplicates.
- GitHub Pages paths use relative references and the published page loads successfully.

## 10. Definition of done
A change is complete only when the requested content is present, the design remains consistent, the relevant interactions still work, and the checks above have been completed. Report any check that could not be performed; never claim a test or deployment succeeded without verifying it.
