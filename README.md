# davidsmv.github.io

Personal portfolio website for David Martínez — Data Scientist. Built as a static site deployed on [GitHub Pages](https://davidsmv.github.io).

## Overview

The site showcases projects, blog posts, book reviews, and contact information across five pages:

- **Home** (`index.html`) — About section (from `data/PROFILE.md`), featured projects, latest blog post, and most recent book review
- **Projects** (`projects.html`) — Full project list with GitHub README previews
- **Blog** (`blog.html`) — All blog posts
- **Books** (`books.html`) — Book reviews sourced from Goodreads
- **Contact** (`contact.html`) — Links to WhatsApp, Email, LinkedIn, GitHub, Goodreads, Medium, and Substack

## How It Works

Content is managed through JavaScript data files — no build step required:

| File | What to edit |
|---|---|
| `data/projects.js` | Add or update projects |
| `data/blogs.js` | Add or update blog posts |
| `data/books.js` | Add or update book reviews (paste Goodreads HTML) |
| `data/contact.js` | Add or update contact/social links |
| `data/PROFILE.md` | Edit the "About Me" bio (rendered as Markdown) |

The rendering logic in `js/scripts.js` reads these data files and populates each page. HTML pages are thin shells that call render functions like `renderProjects('container-id', limit)`.

## Running Locally

Open `index.html` in a browser, or serve the directory with any static server:

```bash
# Python
python -m http.server 8000

# Node.js (npx)
npx serve .
```

> A local server is needed for features that fetch files at runtime (e.g., README previews, PROFILE.md).

## Tech Stack

- HTML, CSS, vanilla JavaScript — no frameworks or bundlers
- [marked.js](https://github.com/markedjs/marked) (CDN) — Markdown rendering
- [Font Awesome 6](https://fontawesome.com/) (CDN) — Icons
- Google Tag Manager — Analytics