# Erik Kunz — Portfolio Website

A static, bilingual personal portfolio with an interactive CV timeline, project gallery, and system-matching dark mode.

## Pages

- `index.html` — home page and interactive work/education timeline
- `projects.html` — editable project tiles
- `about.html` — short personal introduction

## Edit content

- `site-content.js` holds shared copy, navigation, project tiles, and English/German translations.
- `cv-entries.js` holds English and German timeline entries.
- `images/` holds the profile photo, project headers, and entry images.
- `style.css` contains the complete visual design and responsive layout.

Project tiles are defined in `site-content.js`. Update a tile's `title`, `description`, `image`, `alt`, and `href` to publish a new project.

## Preview locally

Serve the folder with any static-file server, for example:

```sh
python3 -m http.server
```

Then open `http://localhost:8000` in a browser. Use `?lang=de` to view the German locale.
