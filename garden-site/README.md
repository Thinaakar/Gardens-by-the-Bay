# Gardens by the Bay

Next.js 14 (App Router) starter inspired by the Gardens by the Bay visitor site structure. Built with TypeScript and Tailwind CSS.

## Getting started

```bash
cd garden-site
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Scripts

| Command       | Description              |
|---------------|--------------------------|
| `npm run dev` | Start development server |
| `npm run build` | Production build       |
| `npm run start` | Start production server|
| `npm run lint`  | Run ESLint (if configured) |

## Project structure

- `app/` — App Router pages and root layout (Header + Footer)
- `components/` — UI: layout, home sections, shared primitives, attraction blocks
- `lib/` — TypeScript types, static data, utilities
- `public/` — Images, icons, fonts

## Key routes

- `/` — Homepage
- `/about-us/*` — About, story, history, sustainability
- `/things-to-do/*` — Attractions, theatre, events, dine & shop
- `/plan-your-visit/*` — Hours, maps, amenities, app
- `/learn-with-us/*` — Schools programmes and learning resources
- Plus membership, promotions, venue booking, support, careers, FAQ, contact, legal

## Customisation notes

1. Swap Unsplash placeholder images for local files under `public/images/`.
2. Update copy in `lib/data/` and page components.
3. Replace logo at `public/images/logo/logo.svg` if needed (app name is Gardens by the Bay).
4. Theme colours live in `tailwind.config.ts` under `theme.extend.colors.garden`.

## Stack

- Next.js 14 (App Router)
- React 18
- TypeScript (strict)
- Tailwind CSS 3
