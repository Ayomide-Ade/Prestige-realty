# Prestige Realty — Real Estate Lead Capture Landing Page

A responsive, multi-file real estate landing page built with vanilla HTML, CSS, and JavaScript. Designed as a portfolio project and deployable on GitHub Pages with zero build tools or dependencies.

---

## Live Demo

> Deploy to GitHub Pages and paste your URL here.

---

## Preview

The page includes four sections:

- **Hero** — full-screen split layout with animated headline and property stats
- **Lead Capture Form** — validated consultation request form with success state
- **Featured Listings** — property cards with hover effects and a save/wishlist toggle
- **Footer** — multi-column links with social icons

---

## Project Structure

```
prestige-realty/
├── index.html              # Main HTML — structure and content only
│
├── css/
│   ├── variables.css       # Design tokens: colours, fonts, spacing, shadows
│   ├── base.css            # CSS reset + shared/reusable elements (buttons, eyebrow labels)
│   ├── nav.css             # Fixed navigation bar
│   ├── hero.css            # Full-screen hero section
│   ├── form.css            # Lead capture form & success state
│   ├── listings.css        # Property cards grid
│   ├── footer.css          # Site footer
│   ├── animations.css      # Keyframes + scroll-reveal utility class
│   └── responsive.css      # All media queries (tablet, mobile, small)
│
└── js/
    ├── nav.js              # Scroll shadow effect + mobile hamburger menu
    ├── form.js             # Client-side form validation + submit handler
    └── reveal.js           # IntersectionObserver scroll reveals + card save toggle
```

Each file has a single responsibility — changing the colour scheme only requires editing `variables.css`, and all breakpoints live in one place (`responsive.css`).

---

## Getting Started

No build step, no package manager, no frameworks. Just open the file.

```bash
# Clone the repo
git clone https://github.com/YOUR_USERNAME/prestige-realty.git

# Open locally
cd prestige-realty
open index.html        # macOS
start index.html       # Windows
xdg-open index.html    # Linux
```

Or use the VS Code **Live Server** extension for auto-reload during development.

---

## Customisation

### Change Colours / Fonts

All design tokens are in `css/variables.css`. Edit the `:root` block:

```css
:root {
  --gold: #c9a84c; /* accent colour */
  --charcoal: #1c1c1a; /* primary dark */
  --cream: #f5f0e8; /* light background */
  --rust: #9b4f2a; /* italic highlight */
}
```

### Update Property Listings

Edit the `<article class="card">` blocks inside the `#listings` section in `index.html`. Swap out the Unsplash image URLs, prices, and addresses.

### Connect the Form to a Real Backend

The form currently simulates a submission with a 1.2 s delay. To wire it up to a real service, open `js/form.js` and replace the `setTimeout` block with a `fetch()` call. A commented-out example using [Formspree](https://formspree.io) is already included in the file.

---

## Features

- Responsive layout — works on desktop, tablet, and mobile
- Mobile hamburger menu with animated open/close
- Smooth scroll navigation with fixed nav offset
- Hero image slow-zoom animation (CSS only)
- Scroll-triggered reveal animations via `IntersectionObserver`
- Inline form validation with per-field error messages
- Animated gold sweep on the submit button (CSS only)
- Save/wishlist ♡ toggle on property cards
- Graceful fallback for browsers without `IntersectionObserver`

---

## Technologies

| Technology                          | Usage                                                          |
| ----------------------------------- | -------------------------------------------------------------- |
| HTML5                               | Semantic structure                                             |
| CSS3                                | Layout (Grid, Flexbox), custom properties, keyframe animations |
| Vanilla JavaScript (ES5-compatible) | DOM interaction, form validation, scroll behaviour             |
| Google Fonts                        | Cormorant Garamond (display) + DM Sans (body)                  |
| Unsplash                            | Placeholder property images                                    |

No frameworks. No npm. No build tools.

---

## Browser Support

Works in all modern browsers. JavaScript is written in ES5-compatible syntax (no arrow functions, no `const`/`let` in older targets) for maximum compatibility.

---

## License

© 2026 [Your Name]. All rights reserved.

This project is displayed publicly for portfolio purposes only. The source code, design, and assets may **not** be copied, modified, redistributed, or used — in whole or in part — for any purpose without explicit written permission from the author.

See [LICENSE](./LICENSE) for full terms.

---

_Built with HTML, CSS, and JavaScript — no frameworks required._
