# F1 Journal

**Beyond the Race. Explore the World of Formula 1.**

F1 Journal is an independent, fan-made Formula 1 knowledge website. It introduces teams, drivers, circuits and beginner concepts through a consistent editorial design.

## Features
- Responsive single-page layout
- Team search
- Structured content stored separately from rendering logic
- Reusable cards for teams, drivers, circuits and guide articles
- Project development rules in `AGENTS.md`

## Project structure
```text
f1-journal/
├── index.html
├── AGENTS.md
├── README.md
├── css/style.css
└── js/
    ├── app.js
    └── data.js
```

## Preview locally
Open `index.html` in a modern browser. No build step or dependencies are required.

## Publish with GitHub Pages
1. Create a public GitHub repository named `f1-journal`.
2. Upload the project files and folders to the repository root.
3. Open **Settings → Pages**.
4. Choose **Deploy from a branch**, select `main` and `/(root)`, then save.
5. Wait for GitHub Pages to publish the site.

## Extend the project
Read `AGENTS.md` before changing the project. Add or update content in `js/data.js` using the documented schema. Keep rendering logic in `js/app.js` and design rules in `css/style.css`.

## Disclaimer
This is an independent educational project and is not affiliated with Formula 1, the FIA, or any racing team. Season-sensitive information should be verified against official sources before publication.
