# Prestige Realty - Real Estate Lead Capture Landing Page

A responsive, multi-file real estate landing page built with vanilla HTML, CSS, and JavaScript. Designed as a portfolio project and deployable on GitHub Pages with zero build tools or dependencies.

> Built by **Ayomide Adesina** -> Frontend & Backend Developer

---

## Live Demo

> [Click here](https://ayomide-ade.github.io/Prestige-realty/)

---

## About Me

Hi, I'm Ayomide, a junior full-stack developer with a passion for building clean, functional web experiences. I work across the full stack, from crafting pixel-precise interfaces in HTML, CSS, and JavaScript to building server-side logic with Node.js and Python, backed by MySQL databases.

This project is a demonstration of my frontend skills specifically my ability to build structured, well-designed, and responsive user interfaces without relying on frameworks or libraries.

**What I work with:**

| Layer | Technologies |
|---|---|
| Frontend | HTML5, CSS3, JavaScript (ES6+) |
| Backend | Node.js, Python |
| Database | MySQL |

---

## About This Project

**Prestige Realty** is a real estate lead capture landing page built entirely from scratch to demonstrate what I can produce with core frontend skills with no frameworks, no build tools, just clean and organised code.

The goal was to show that I understand not just how to write HTML, CSS, and JavaScript, but how to structure a project properly, separating concerns across multiple files the way a real production codebase would be organised.

### What This Project Demonstrates

- Writing semantic, accessible HTML with ARIA attributes
- Organising CSS across multiple files with a clear cascade strategy
- Using CSS custom properties to maintain a consistent design system (colours, spacing, easing, and timing tokens)
- Building responsive layouts with CSS Grid and Flexbox
- Creating smooth, GPU-composited animations and micro-interactions with pure CSS
- Accessibility-first focus management with `:focus-visible` throughout
- Writing clean, readable JavaScript without jQuery or any library
- Client-side form validation with inline per-field error messages
- Using the `IntersectionObserver` API for scroll-triggered reveals
- Mobile nav panel with body scroll lock, keyboard trap, and `aria-expanded` handling
- Structuring a project for real-world deployment on GitHub Pages

---

## Project Structure

```
prestige-realty/
├── index.html              # Page structure and content
│
├── css/
│   ├── base.css            # Design tokens, reset, typography, keyframes
│   ├── layout.css          # Section scaffolding and grid structure (no breakpoints)
│   ├── components.css      # All UI components - nav, hero, cards, form, modal, footer
│   ├── utilities.css       # Utility classes - .eyebrow, .reveal, .sr-only, .fade-up
│   └── responsive.css      # All breakpoints, loaded last (overrides cascade)
│
├── js/
│   ├── nav.js              # Scroll effect, mobile hamburger, panel open/close, focus trap
│   ├── form.js             # Form validation and submit handler
│   ├── reveal.js           # IntersectionObserver scroll reveal + wishlist toggle
│   └── modal.js            # Property card modal open/close
│
└── assets/
    ├── IKOYI.webp
    ├── ABUJA.jpg
    ├── VI.avif
    └── img.jpg             # Agent photo
```

---

## CSS Architecture

The stylesheet is split into five files loaded in a deliberate cascade order:

| File | Purpose |
|---|---|
| `base.css` | Design tokens (colours, fonts, spacing, easing), CSS reset, global typography, keyframe animations |
| `layout.css` | Section scaffolding - grid structure, spacing, and positioning with no media queries |
| `components.css` | Every UI component: nav, hero, cards, form, modal, agent section, footer |
| `utilities.css` | Small reusable classes: `.eyebrow`, `.reveal`, `.fade-up`, `.sr-only` |
| `responsive.css` | All `@media` breakpoints in one place, loaded last to guarantee cascade wins |

Breakpoints: `900px` (tablet), `800px` (wide tablet), `560px` (mobile), `400px` (small mobile).

---

## Features

- Responsive across desktop, tablet, and mobile
- Mobile side panel with smooth slide-in animation, backdrop, body scroll lock, and Escape key support
- CSS-only hero image zoom animation (`slowZoom` keyframe)
- Scroll-triggered section reveals via `IntersectionObserver`
- Form validation with per-field inline error messages
- Animated button hover sweep (CSS `scaleX`, no JS)
- Property card save/wishlist toggle
- Property detail modal with keyboard close support
- Accessible focus management - `:focus-visible` on every interactive element
- GPU-composited hover transitions (`backface-visibility`, `will-change` on hover only)
- `prefers-reduced-motion` support - animations disabled for users who prefer it

---

## Running Locally

No installs needed. Just open the file in a browser.

```bash
git clone https://github.com/Ayomide-Ade/Prestige-realty
cd prestige-realty
open index.html
```

Or use the **Live Server** extension in VS Code for live reload during development.

---

## Deployment

Hosted on GitHub Pages. To deploy your own copy:

1. Push to a GitHub repository
2. Go to **Settings → Pages**
3. Set branch to `main`, folder to `/` (root)
4. Save - live in under a minute

---

## Get in Touch

If you're a recruiter, client, or fellow developer and you'd like to work together or discuss this project, feel free to reach out.

- **Email:** ayoa88463@gmail.com

---

## License

© 2026 Ayomide Adesina. All rights reserved.

This repository is publicly visible for portfolio purposes only. The code, design, and assets may not be copied, reused, or redistributed without explicit written permission from the author. See [LICENSE](./LICENSE) for full terms.
