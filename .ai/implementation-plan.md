# Implementation Plan — Smakologia Landing Page

## Phase 1: Project Initialization & Tooling
1. Initialize Astro 5 + TypeScript (`strict`) project in the repository root.
2. Configure Tailwind CSS v4 (`@tailwindcss/vite`) and `@astrojs/sitemap`.
3. Install `schema-dts` for compile-time typed JSON-LD structured data and self-hosted fonts (`@fontsource-variable/plus-jakarta-sans`, `@fontsource-variable/Fraunces` or `@fontsource/lora`).
4. Set up Cloudflare Pages static assets (`public/_redirects`, `public/_headers`, `public/robots.txt`, favicons, OpenGraph cover).

## Phase 2: Central Configuration & SEO Engine
1. Create `src/config/site.ts` containing all strongly-typed business data:
   - NAP details (`ul. Gzichowska 121, 42-500 Będzin`, `(+48) 881 221 129`, `smakoologia@gmail.com`)
   - Toggleable `bookingUrl` (`dietdoctor.pl` integration ready to enable with a single flag)
   - Specialist profile ("O mnie") & credentials
   - Specializations (Dietetyka kliniczna, Psychodietetyka, Redukcja masy ciała, Współpraca stacjonarna i online)
   - 3-step Smakologia methodology (Chęć zmiany -> Praca nad sobą -> Meta!)
   - Editable Cennik (Price list) packages and prices
   - Local SEO commute data (DK86 exit proximity to Katowice, Sosnowiec, Chorzów, Dąbrowa Górnicza, Siewierz)
   - FAQ items (used both in UI and `FAQPage` JSON-LD)
2. Build `src/components/SEOHead.astro` and `src/utils/jsonLd.ts`:
   - Complete meta tags, canonical URL, OpenGraph (`pl_PL`), geo tags (`PL-24`, Będzin coordinates)
   - Type-safe JSON-LD `@graph` combining `Dietitian`, `MedicalBusiness`, `LocalBusiness`, `Person`, `WebSite`, `OfferCatalog`, and `FAQPage`.

## Phase 3: UI Components & Design System (100% A11y & Performance)
1. Define WCAG AAA/AA compliant color tokens and typography in `src/styles/global.css` (sage green, warm cream, terracotta, deep charcoal).
2. Implement semantic, zero-JS components:
   - `Header.astro`: Accessible sticky navigation with skip-link (`Przejdź do głównej treści`), mobile `<details>` menu (zero-JS interactive), and click-to-call CTA.
   - `Hero.astro`: High-converting hero with `<h1>`, local + online badges, primary/secondary CTAs, and optimized visual composition.
   - `About.astro`: Solo specialist ("O mnie") presentation with clinical & psychodietetic credentials and core philosophy.
   - `Specializations.astro`: Detailed breakdown of Clinical Dietetics, Psychodietetics, Weight Loss, and In-person/Online formats.
   - `Process.astro`: The signature 3-step Smakologia journey (*Chęć zmiany*, *Praca nad sobą*, *Meta!*).
   - `Pricing.astro`: Editable Cennik cards with clear inclusions and direct contact CTAs.
   - `LocalReach.astro` & `Contact.astro`: NAP cards, DK86 highway access highlights from Katowice/Sosnowiec/Chorzów/Dąbrowa Górnicza/Siewierz, and zero-JS interactive map card linking to Google Maps directions.
   - `Faq.astro`: Native `<details>`/`<summary>` accessible accordion matching `FAQPage` schema.
   - `Footer.astro`: Local SEO summary, quick links, and copyright.

## Phase 4: Build Verification & Lighthouse / Accessibility Audit
1. Run `astro check` and `pnpm run build` to verify static output and TypeScript types.
2. Start local preview server and inspect rendered layout, responsive breakpoints, accessibility tree, and SEO metadata.
