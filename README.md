# Senan Jayasinghe - Portfolio

A personal developer portfolio built to showcase full-stack, AI/ML, and data science work designed around a dark, code-editor-inspired visual language rather than a generic template look.

**Live site:** [senan-portfolio-five.vercel.app](https://senan-portfolio-five.vercel.app/)

---

## Overview

This portfolio moves away from typical AI-generated template patterns (gradient heroes, icon-in-box cards, generic copy) in favor of a monochrome navy palette, a recurring "developer-as-code" motif (`about.ts`, `message.ts`, `footer.ts` code cards), and deliberate micro-interactions across every section.

---

## Tech Stack

- **Framework:** React + Vite
- **Styling:** Tailwind CSS
- **Icons:** [lucide-react](https://lucide.dev/)
- **Fonts:** Space Grotesk (headings), Inter (body), JetBrains Mono (labels/code)
- **Deployment:** Vercel

---

## Design System

### Color Palette

| Hex | Role |
|---|---|
| `#06141B` | Page background |
| `#11212D` | Card / surface background |
| `#253745` | Borders, dividers |
| `#4A5C6A` | Decorative/muted elements (borders, placeholders, code punctuation) |
| `#9BA8AB` | Body text, readable labels |
| `#CCD0CF` | Headings, primary emphasis, active states |

> Note: readable text/labels use `#9BA8AB` or `#CCD0CF` for WCAG AA contrast. `#4A5C6A` is reserved for decorative elements only (borders, placeholders, punctuation) — not body copy.

### Typography

- **Space Grotesk** — headings, name, section titles
- **Inter** — body copy, buttons, nav links
- **JetBrains Mono** — labels, tags, code-card content, eyebrow text

---

## Sections

1. **Header** — Sticky nav with backdrop blur on scroll, animated `</>` logo mark (blinking cursor effect), outlined Resume button.
2. **Hero** — Two-column layout with oversized "SJ" watermark, floating photo + tech-tag bubbles, primary CTA and social links.
3. **About** — Bio paragraphs paired with an `about.ts` code card (typewriter-animated on scroll into view).
4. **Skills** — Horizontal category rows (Languages, Frameworks, AI/ML, Data & Infra, Tools) with icon-labeled tag pills.
5. **Projects** — Project grid with hover-zoom screenshots, GitHub/live-link overlay buttons, and a blurred "coming soon" state for in-progress work.
6. **Contact** — Info list (email, location) plus a `message.ts` styled contact form with live input fields.
7. **Footer** — Name, quick links, social icons, and an `[ open_to_work ]` status tag with a blinking cursor.

---

## Key Interactions

- Sticky header with `backdrop-filter: blur()` and soft shadow fade (no hard border)
- Typewriter animation on code-card sections (`about.ts`, `message.ts`)
- Independent floating animations on hero photo and tag bubbles (staggered delays)
- Hover-zoom + overlay reveal on project cards; blur + "coming soon" state for unfinished projects
- Consistent lift-and-brighten hover pattern across buttons, icons, and pills (`translateY(-2px)` + border/color transition)

---

## Getting Started

```bash
# Clone the repository
git clone <repo-url>
cd portfolio

# Install dependencies
npm install

# Run the dev server
npm run dev

# Build for production
npm run build
```

---

## Project Structure

```
src/
├── components/
│   ├── Header.tsx
│   ├── Hero.tsx
│   ├── About.tsx
│   ├── Skills.tsx
│   ├── Projects.tsx
│   ├── Contact.tsx
│   └── Footer.tsx
├── App.tsx
└── main.tsx
public/
└── project/        # project screenshots
```

---


---

© 2026 Senan Jayasinghe. All rights reserved.
