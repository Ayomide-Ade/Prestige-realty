# Prestige Realty  Real Estate Lead Capture Landing Page

A responsive, multi-file real estate landing page built with vanilla HTML, CSS, and JavaScript. Designed as a portfolio project and deployable on GitHub Pages with zero build tools or dependencies.

> Built by **Ayomide Adesina**  Frontend & Backend Developer

---

## Live Demo

> [Click here](https://ayomide-ade.github.io/Prestige-realty/)

---

## About Me

Hi, I'm Ayomide  a junior full-stack developer with a passion for building clean, functional web experiences. I work across the full stack, from crafting pixel-precise interfaces in HTML, CSS, and JavaScript to building server-side logic with Node.js and Python, backed by MySQL databases.

This project is a demonstration of my frontend skills  specifically my ability to build structured, well-designed, and responsive user interfaces without relying on frameworks or libraries.

**What I work with:**

| Layer | Technologies |
|---|---|
| Frontend | HTML5, CSS3, JavaScript (ES6+) |
| Backend | Node.js, Python |
| Database | MySQL |

---

## About This Project

**Prestige Realty** is a real estate lead capture landing page. It was built entirely from scratch to demonstrate what I can produce with core frontend skills  no frameworks, no build tools, just clean and organised code.

The goal was to show that I understand not just how to write HTML, CSS, and JavaScript, but how to structure a project properly  separating concerns across multiple files the way a real production codebase would be organised.

### What This Project Demonstrates

- Writing semantic, accessible HTML
- Organising CSS across multiple files using a clear naming convention
- Using CSS custom properties (variables) to maintain a consistent design system
- Building responsive layouts with CSS Grid and Flexbox
- Creating smooth animations and micro-interactions with pure CSS
- Writing clean, readable JavaScript without jQuery or any library
- Client-side form validation with helpful inline error messages
- Using the `IntersectionObserver` API for scroll-triggered animations
- Structuring a project for real-world deployment on GitHub Pages

---

## Project Structure

```
prestige-realty/
├── index.html              # Page structure and content
│
├── css/
│   ├── variables.css       # Design tokens  colours, fonts, spacing
│   ├── base.css            # Reset + shared reusable styles
│   ├── nav.css             # Navigation bar
│   ├── hero.css            # Hero section
│   ├── form.css            # Lead capture form
│   ├── listings.css        # Property cards
│   ├── footer.css          # Footer
│   ├── animations.css      # Keyframes + scroll reveal class
│   └── responsive.css      # All media queries in one place
│
└── js/
    ├── nav.js              # Scroll effect + mobile hamburger menu
    ├── form.js             # Form validation + submit handler
    └── reveal.js           # Scroll reveal + wishlist toggle
```

---

## Features

- Responsive across desktop, tablet, and mobile
- Mobile hamburger menu with smooth open/close animation
- CSS-only hero image zoom animation
- Scroll-triggered section reveals via `IntersectionObserver`
- Form validation with per-field inline error messages
- Animated button hover effect (CSS sweep, no JS)
- Property card save/wishlist toggle
- Smooth scroll with fixed nav offset compensation

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
4. Save  live in under a minute

---

## Get in Touch

If you're a recruiter, client, or fellow developer and you'd like to work together or discuss this project, feel free to reach out.

- **GitHub:** [https://github.com/Ayomide-Ade](https://github.com/Ayomide-Ade)
- **Email:** ayoa88463@gmail.com

---

## License

© 2026 Ayomide Adesina. All rights reserved.

This repository is publicly visible for portfolio purposes only. The code, design, and assets may not be copied, reused, or redistributed without explicit written permission from the author. See [LICENSE](./LICENSE) for full terms.