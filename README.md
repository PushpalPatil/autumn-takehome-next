# Autumn — Homepage

A single-page homepage for [Autumn](https://www.autumnplatform.com/), built for the Design Engineer take-home: one site that works for sales and recruiting, with Autumn's search engine marketing front and center, designed for the owner-operator of a hidden-gem independent hotel.

## Stack

- **Next.js 16** (App Router, `output: "export"` — fully static, no server)
- **React 19**, **TypeScript**
- **Tailwind CSS 4** over a small set of design tokens (`app/globals.css`)
- **Fraunces + Instrument Sans** via `next/font` (self-hosted at build)
- No animation libraries — all motion is hand-rolled CSS keyframes/transitions with a small amount of orchestration in client components

## Run it

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # static export to ./out
```

## The two motion elements

1. **The fog reveal (hero)** — fog banks sweep the dawn scene and reveal the pitch, setting the emotional register ("this is for you") before a word is read.
2. **The SEM demo (hero, right)** — a traveler's search types itself out, the inn rises to the top spot, and a "Booked direct" confirmation lands: the entire offering explained without prose, for a reader who may not know what Google Ads are.

Section transitions (the card deal-in, the services ring assembly, the tip tour) are entrance staging, deliberately subordinate to the two elements above. Everything is gated behind `prefers-reduced-motion` and degrades to complete static layouts without JavaScript.

## Honest notes

- **All social proof is fabricated**, as the brief invites: fictional properties, plausible numbers. Two sourced images that carried real hotels' names were excluded on principle — no invented stats are attributed to any real business.
- **The Flagship application form is a demo stub** — the brief asks for the entry point only, so submission shows a client-side confirmation; nothing is sent or stored.
- **Placeholder imagery** was curated via [cosmos.so](https://cosmos.so) for demo purposes only.
- **Brand assets** (the leaf + wordmark) are Autumn's own, taken from findautumn.com for this redesign exercise.
- Built with AI tooling in the loop (Claude Code), as I'd work on the job.
