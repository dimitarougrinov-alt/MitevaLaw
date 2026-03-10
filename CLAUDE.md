# CLAUDE.md

This file provides guidance to Claude Code when working with this repository.

## Commands

```bash
npm run dev      # Start dev server at http://localhost:3000
npm run build    # Production build
npm run start    # Start production server
```

## Project Overview

This is a static informational website for **Ani Miteva Attorney at Law** — a Bulgarian lawyer specialising in international tax law, financial law and bioethics. Ani Miteva is also an amateur climber — this is reflected in the brand tagline and essence: *"Every legal challenge is a summit. And every summit can be reached."*

## Site Structure

| Route key | BG URL | EN URL | Purpose |
|-----------|--------|--------|---------|
| `/` | `/` | `/en/` | Homepage — hero, credentials, about snippet, practice areas, CTA |
| `/about` | `/za-mene` | `/en/about` | Full biography, education, experience, memberships |
| `/practice` | `/praktiki` | `/en/practice` | Practice areas — tax, financial, admin, bioethics |
| `/academic` | `/akademichna-deynost` | `/en/academic-activity` | Academic position, teaching, publications |
| `/contact` | `/kontakti` | `/en/contact` | Contact information (email display only, no form) |

## Tech Stack

- **Next.js 16** App Router, TypeScript, `src/` directory
- **MUI v7** — theme in `src/theme/theme.ts`, providers in `src/components/providers/ThemeRegistry.tsx`
- **next-intl v4** — routing in `src/i18n/routing.ts`, navigation exports in `src/i18n/navigation.ts`
- Two locales: **bg** (default, no prefix) and **en** (prefixed `/en/...`)

## Design System

**Color palette** (alpine sky + glacier blue — mountain/law theme):
- Primary: `#1B3050` (midnight alpine navy)
- Secondary/accent: `#5299C8` (alpine sky / glacier lake blue)
- Background default: `#EFF3F8` (cool morning mist)
- Paper: `#FFFFFF`
- Text primary: `#111C2D`, Text secondary: `#3E577A`
- Divider: `#C8D6E8`

**Typography:**
- Headings: Cormorant Garamond (`var(--font-cormorant)`)
- Body: DM Sans (`var(--font-dm-sans)`)

**Logo:** Inline SVG component at `src/components/ui/Logo.tsx` — mountain peaks + "ANI MITEVA" + "ATTORNEY AT LAW"

## Key Architecture Notes

### ⚠️ CRITICAL — Root layout at `src/app/layout.tsx`
Minimal pass-through only — real layout is in `[locale]/layout.tsx`.

### i18n Middleware — `src/middleware.ts`
- Standard Next.js `middleware.ts` with default export (`createMiddleware(routing)`)
- Matcher covers `/`, `/(bg|en)/:path*`, and the generic catch-all

### MUI v7
- Use `palette.mode` not `palette.type`
- Grid v2: use `size={{ xs: 12, md: 6 }}` (not `item xs={12}`)
- Separate selectors in `styleOverrides`

### i18n
- Always import `Link`, `useRouter`, `usePathname` from `@/i18n/navigation`
- Translations in `src/messages/bg.json` and `src/messages/en.json`

## Photos

Located in `public/images/`:
- `ani-1.jpg` — portrait photo (used on About page)
- `ani-2.jpg` — photo used in hero
- `ani-3.jpg` — photo used in About snippet on homepage

## Content

Ani Miteva:
- Sofia Bar Association member (since 2018)
- Ph.D. in Law (Financial Law), Sofia University (2018)
- MASIT, University of Lausanne (2013–2014)
- Senior Assistant, Department of Administrative Law Sciences, Sofia University (since 2019)
- Over 30 academic publications; monograph: "Discrimination in International Tax Law"
- Languages: Bulgarian, English, French
- IFA, UNESCO Bioethics Network, NAHPM member
