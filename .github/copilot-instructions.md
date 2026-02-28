# Copilot Instructions

## Architecture

This is a static personal portfolio site deployed via GitHub Pages. There is no build system, bundler, or package manager — all files are served directly.

### Data-driven rendering pattern

Content is separated from presentation using a data/rendering split:

- **Data files** (`data/*.js`) — Each declares a global array (`projectsData`, `blogData`, `bookData`, `contactData`) consumed by the rendering layer. `data/PROFILE.md` is fetched at runtime and rendered as markdown.
- **Rendering engine** (`js/scripts.js`) — Contains `render*()` functions that take a container ID and an optional `limit` parameter. Each HTML page calls these functions with appropriate limits (e.g., `index.html` shows 2 projects, `projects.html` shows all).
- **Pages** (`index.html`, `projects.html`, `blog.html`, `books.html`, `contact.html`) — Thin shells that load the relevant data files, `js/scripts.js`, and call render functions in an inline `<script>` block.

To add new content (project, blog post, book review), edit the corresponding `data/*.js` file — do not modify `js/scripts.js` or HTML pages.

### External dependencies (loaded via CDN)

- **marked.js** — Markdown parsing (used for project READMEs and `PROFILE.md`)
- **Font Awesome 6** — Icons throughout the site

### Key conventions

- CSS uses custom properties defined in `:root` in `styles.css` (`--primary-color`, `--accent-color`, etc.). Use these variables instead of hardcoded colors.
- Projects can use either a `readmeUrl` (fetched and rendered as markdown) or a manual `description`. When `readmeUrl` is set, the README becomes the project description.
- Book reviews use raw `goodreadsHtml` — pasted Goodreads embed HTML that gets cleaned up at render time (removing "View all my reviews" links).
- The nav bar highlights the current page by inlining `style="color: var(--accent-color);"` on the active link.
- Google Tag Manager (`GTM-K4HP3RM`) is included in every page's `<head>` and `<body>`.
