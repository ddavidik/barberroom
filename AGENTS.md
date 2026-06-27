# AGENTS.md — Barber Room

## Skills

Always load `caveman` and `frontend-design` skills before any output.

## Communication

Default to `caveman-full` style (ultra-compressed). Grammar optional.

## Aesthetic

Commit to the **industrial / street / graffiti-neon** aesthetic:

- Sheet metal corrugated grey background (CSS-only, light mode)
- Neon yellow `#fff700` + bright red glow `#ff2200` accents
- `TT Octosquares Trial` font (self-hosted, Variable woff) for headings — ExtraBold (800)
- Czech user-facing text, content in JSON files

## Code

- Always use `bunx` not `npx`
- Comments in English
- Named exports, no default exports (except route files which TanStack requires)
- Arrow functions
- Tailwind v4 — no config file, CSS custom properties for tokens
- Conventional Commits, terse style

## Content

- All copy in `content/site.json` and `content/barbers.json`
- i18n-ready structure (MVP+)

## Design System

→ See `DESIGN.md`

## MVP+ Backlog

- Gallery per barber (pop-up or route)
- EN/CS language toggle
- Background removal on barber photos (use remove.bg)
