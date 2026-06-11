# Story Bank

A personal vault for story-related ideas — scenes, characters, dialogue snippets, visuals, and more.

## How to use

**Option A — Open directly in your browser (simplest):**
Just open `index.html` in any modern browser. No server or install needed.

**Option B — Serve locally (recommended for PWA features):**
```bash
# Python 3
python3 -m http.server 8080

# Node.js (npx)
npx serve .

# Then open: http://localhost:8080
```

## Features

- **Ideas** — Add, edit, and delete ideas with a Title, Description, Type, and Tags
- **Types** — Story, Scene, Character, Dialogue, Visual, Other (colour-coded)
- **Search** — Full-text search across title and description
- **Filters** — Filter by type and tag
- **Groups** — Organise ideas into named groups; supports nested sub-groups
- **Sequencing** — Reorder ideas and sub-groups within a group using Up/Down buttons
- **Version history** — Every edit saves a snapshot; restore any previous version
- **Export** — Export a single idea, an entire group (with nested content), or a full backup as JSON
- **Import** — Restore from a backup file with Merge or Replace modes
- **Dark / Light mode** — Follows system preference; togglable in the header
- **PWA / Offline** — Installable as a home-screen app; works offline after first load (when served over HTTPS)

## Data storage

All data lives in your browser's **localStorage** under the key `storyBankData`. Nothing is sent to any server. To move your data between devices, use the Export and Import buttons.

## Deploying

The project is static — just upload the folder contents to any host:

| Host | Steps |
|------|-------|
| **GitHub Pages** | Push to a repo → Settings → Pages → select branch/root |
| **Netlify** | Drag-and-drop the folder at app.netlify.com/drop |
| **Vercel** | `npx vercel` inside the folder, or connect the GitHub repo |

No build step required for any of these.

## File structure

```
story-bank/
├── index.html        — app shell and all modal templates
├── style.css         — complete CSS (variables, dark mode, layout)
├── app.js            — all JavaScript (storage, rendering, events)
├── manifest.json     — PWA manifest
├── service-worker.js — offline caching (activates only over HTTPS)
├── icons/
│   ├── favicon.svg   — browser tab icon
│   ├── icon-192.svg  — PWA home-screen icon
│   └── icon-512.svg  — PWA splash icon
└── README.md
```

## Browser support

Works in all modern browsers (Chrome, Firefox, Safari, Edge). Requires ES2020 support (available everywhere since 2020).
