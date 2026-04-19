# Texcoco Data Science

Free, no-nonsense data science education — from the math that powers every model to the engineering that makes it work. Made by **Sam Villa-Smith, PhD**.

## Stack

- **Framework:** Next.js 14 (App Router, fully static export)
- **Deployment:** Vercel (CDN-only, zero serverless functions)
- **Styling:** Global CSS with CSS custom properties
- **Fonts:** Google Fonts — Cormorant Garamond, JetBrains Mono, Outfit

## Languages

The site ships in three languages toggled via flag buttons in the navbar:

| Flag | Language |
|------|----------|
| 🇺🇸  | English  |
| 🇲🇽  | Español  |
| 🇯🇵  | 日本語    |

All translations live in `src/i18n.js` (UI copy) and `src/data.js` (section/card content). No routing changes on language switch — purely client-side state.

## Project Structure

```
src/
  app/
    layout.jsx      # Root layout — fonts, LanguageProvider
    page.jsx        # Homepage
    globals.css     # All styles
  components/       # Navbar, Hero, ContentSection, Card, Philosophy, Footer
  context/
    LanguageContext.jsx  # useState-based EN/ES/JA provider
  i18n.js           # UI string translations
  data.js           # Section and card content (EN/ES/JA)
public/
  crash-course.html
  math/             # Static math reference pages (served directly, no Next.js)
  nav.css
```

## Development

```bash
npm install
npm run dev
```

## Deployment

`output: 'export'` in `next.config.js` forces a full static build — Vercel serves it from CDN with **zero function invocations**. Push to `main` and Vercel deploys automatically.

The static HTML pages under `public/` are passed through by Vercel's CDN directly, independent of Next.js entirely.
