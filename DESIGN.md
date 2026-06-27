# DESIGN.md — Barber Room Design System

## Aesthetic

Industrial / street / graffiti-neon. Corrugated sheet metal meets spray-can culture.
Think: the barber shop wall in the photo — cold steel, hot neon, rough edges.

## Color Tokens

| Token                  | Value     | Role                         |
| ---------------------- | --------- | ---------------------------- |
| `--metal-bg`           | `#8a6245` | Page base (warm Corten rust) |
| `--metal-light`        | `#a87855` | Stripe highlight             |
| `--metal-shadow`       | `#5a3820` | Stripe shadow                |
| `--metal-deep`         | `#3a2210` | Deeper shadow                |
| `--surface-card`       | `#111318` | Barber card bg (dark pocket) |
| `--surface-card-edge`  | `#1e232c` | Card border/edge             |
| `--text-primary`       | `#1a1a1a` | Main text on metal           |
| `--text-secondary`     | `#3a3a3a` | Secondary on metal           |
| `--text-muted`         | `#6a6a6a` | Muted on metal               |
| `--text-on-card`       | `#e8e4dc` | Primary text on dark card    |
| `--text-on-card-muted` | `#9a9488` | Muted text on card           |
| `--neon-yellow`        | `#fff700` | Neon sign yellow             |
| `--neon-glow`          | `#ff2200` | Red neon glow                |
| `--accent-yellow`      | `#f5f07a` | Softer yellow for UI         |
| `--accent-red`         | `#ff2200` | Bright red accent            |

## Typography

- **Display / headings:** `TT Octosquares Trial` (self-hosted, Variable woff) — ExtraBold (800), geometric condensed uppercase
- **Body:** `system-ui, sans-serif` — clean, neutral, lets metal/neon shine
- **Kicker / labels:** uppercase, `letter-spacing: 0.15em`, small size

## Neon Effect

```css
.neon-text {
  color: var(--neon-yellow);
  text-shadow:
    0 0 7px #fff,
    0 0 10px #fff,
    0 0 21px #fff,
    0 0 42px var(--neon-glow),
    0 0 82px var(--neon-glow),
    0 0 92px var(--neon-glow),
    0 0 102px var(--neon-glow),
    0 0 151px var(--neon-glow);
}
```

## Metal Background

CSS-only corrugated steel via `repeating-linear-gradient` vertical stripes

- SVG `feTurbulence` fractalNoise grain overlay at 8% opacity.

## Motion

- **Neon flicker:** 8s loop, power-cut at ~19%, ~54% — opacity drops to 0.08, then surges
- **Carousel 3D:** `perspective: 1200px`, `transform-style: preserve-3d`
  - Center: `scale(1) rotateY(0deg)` opacity 1
  - Sides: `scale(0.82) rotateY(±40deg)` opacity 0.55, `filter: blur(1px)`
  - Transition: `0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94)`
- **Scroll reveal:** `.reveal` → `.reveal.in` via IntersectionObserver
  - `opacity 0→1, translateY(24px→0)` over 900ms expo-out

## Layout

- Max width: `1400px`
- Container: `mx-auto max-w-[1400px] px-6 md:px-10`
- 8-point spacing system
