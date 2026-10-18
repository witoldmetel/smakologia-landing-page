# Smakologia — Dietetyk Kliniczny i Psychodietetyk (Będzin / Śląsk & Online)

[![CI Quality Gate](https://github.com/witoldmetel/smakologia-landing-page/actions/workflows/ci.yml/badge.svg)](https://github.com/witoldmetel/smakologia-landing-page/actions/workflows/ci.yml)
[![Lighthouse & SEO Audit](https://github.com/witoldmetel/smakologia-landing-page/actions/workflows/lighthouse.yml/badge.svg)](https://github.com/witoldmetel/smakologia-landing-page/actions/workflows/lighthouse.yml)
[![Deploy to GitHub Pages](https://github.com/witoldmetel/smakologia-landing-page/actions/workflows/deploy-pages.yml/badge.svg)](https://github.com/witoldmetel/smakologia-landing-page/actions/workflows/deploy-pages.yml)

[![Lighthouse SEO](https://img.shields.io/badge/Lighthouse_SEO-100%2F100-22c55e?logo=lighthouse&logoColor=white)](https://pagespeed.web.dev/analysis?url=https%3A%2F%2Fwitoldmetel.github.io%2Fsmakologia-landing-page%2F)
[![Lighthouse Performance](https://img.shields.io/badge/Performance-100%2F100-22c55e?logo=pagespeedinsights&logoColor=white)](https://pagespeed.web.dev/analysis?url=https%3A%2F%2Fwitoldmetel.github.io%2Fsmakologia-landing-page%2F)
[![WCAG 2.2 AA Accessibility](https://img.shields.io/badge/Accessibility_(WCAG_2.2_AA)-100%2F100-22c55e?logo=w3c&logoColor=white)](https://pagespeed.web.dev/analysis?url=https%3A%2F%2Fwitoldmetel.github.io%2Fsmakologia-landing-page%2F)
[![Best Practices](https://img.shields.io/badge/Best_Practices-100%2F100-22c55e?logo=googlechrome&logoColor=white)](https://pagespeed.web.dev/analysis?url=https%3A%2F%2Fwitoldmetel.github.io%2Fsmakologia-landing-page%2F)
[![Google Rich Results](https://img.shields.io/badge/Google_Rich_Results-Validate_Live-4285F4?logo=google&logoColor=white)](https://search.google.com/test/rich-results?url=https%3A%2F%2Fwitoldmetel.github.io%2Fsmakologia-landing-page%2F)
[![Schema.org JSON-LD](https://img.shields.io/badge/Schema.org_JSON--LD-Validated-1E4330?logo=json&logoColor=white)](https://validator.schema.org/#url=https%3A%2F%2Fwitoldmetel.github.io%2Fsmakologia-landing-page%2F)

Official landing page for **Smakologia** (`smakologia.com`) — a clinical dietitian and psychodietitian practice located in **Będzin (`ul. Gzichowska 121, 42-500 Będzin`)**, right next to the **DK86** highway exit (convenient access from Katowice, Sosnowiec, Chorzów, Dąbrowa Górnicza, and Siewierz), offering both in-person and online consultations.

---

## SEO, Google Robots & Core Web Vitals Architecture

This repository is engineered with an **SEO-first, zero-JavaScript-by-default static architecture** designed for maximum search engine visibility and instant page loads:

- **Automated Lighthouse & SEO CI Gate (`.github/workflows/lighthouse.yml`)** — Every push and pull request is automatically audited by Google Lighthouse CI (`lighthouserc.json`) and custom Node assertions to enforce:
  - **100/100 SEO**, **100/100 Accessibility**, **100/100 Best Practices**, and **98–100/100 Performance**
  - Valid `robots.txt` (`Allow: /` + `Sitemap` directive)
  - Auto-generated XML sitemaps (`sitemap-index.xml` & `sitemap-0.xml` with `pl-PL` locale metadata)
  - Strict `<link rel="canonical">`, OpenGraph (`og:*`), Twitter Cards, and regional Geo meta tags (`geo.region="PL-24"`, `geo.placename="Będzin"`, coordinates)
- **Rich Schema.org JSON-LD `@graph` (`src/utils/jsonLd.ts`)** — Type-safe structured data (`schema-dts`) combining `WebSite`, `MedicalBusiness`, `DietNutrition`, `LocalBusiness`, `Person`, `OfferCatalog` (price list), `WebPage`, and `FAQPage` with `areaServed` covering Będzin and the Upper Silesian & Zagłębie Metropolis.
- **301 Legacy URL Redirects (`public/_redirects`)** — Preserves SEO equity from legacy indexed subpages (`/kontakt`, `/o-mnie`, `/oferta`, `/cennik`, `/psychodietetyk`) by redirecting them to their corresponding semantic section anchors.

### Quick Live SEO & Robots Verification Links

| Tool | Staging (`github.io`) | Production (`smakologia.com`) |
| :--- | :--- | :--- |
| **Google PageSpeed Insights** | [Analyze Staging](https://pagespeed.web.dev/analysis?url=https%3A%2F%2Fwitoldmetel.github.io%2Fsmakologia-landing-page%2F) | [Analyze Production](https://pagespeed.web.dev/analysis?url=https%3A%2F%2Fsmakologia.com%2F) |
| **Google Rich Results Test** | [Test Staging](https://search.google.com/test/rich-results?url=https%3A%2F%2Fwitoldmetel.github.io%2Fsmakologia-landing-page%2F) | [Test Production](https://search.google.com/test/rich-results?url=https%3A%2F%2Fsmakologia.com%2F) |
| **Schema.org Validator** | [Validate Staging](https://validator.schema.org/#url=https%3A%2F%2Fwitoldmetel.github.io%2Fsmakologia-landing-page%2F) | [Validate Production](https://validator.schema.org/#url=https%3A%2F%2Fsmakologia.com%2F) |

---

## Tech Stack

- **Framework:** [Astro 7](https://astro.build/) (`output: 'static'`, zero client-side JS overhead, `astro:assets` WebP optimization)
- **Styling:** [Tailwind CSS v4](https://tailwindcss.com/) + self-hosted variable fonts (`Plus Jakarta Sans` & `Fraunces`)
- **Language & Type Safety:** TypeScript 6 + `schema-dts`
- **Code Quality:** [Biome](https://biomejs.dev/) (linter & formatter) + [Knip](https://knip.dev/) (unused files/dependencies detector)
- **Package Manager:** `pnpm`

---

## Updating Content (Price List, Contact, Booking Link)

All site copy, contact details, social media links, commute times, FAQs, and the **Cennik** (Price List) are centralized in a single strongly-typed file:

- `src/config/site.ts`

To enable the external `dietdoctor.pl` online booking buttons across the page, set `booking.enabled = true` and provide `booking.dietDoctorUrl` in `src/config/site.ts`.

---

## Commands

| Command | Description |
| :--- | :--- |
| `pnpm install` | Install dependencies |
| `pnpm run dev` | Start local development server at `http://localhost:4321` |
| `pnpm run build` | Build production static site into `./dist` |
| `pnpm run preview` | Preview the built production site locally |
| `pnpm run check` | Run Astro & TypeScript diagnostics (`astro check`) |
| `pnpm run lint` | Check code quality with Biome |
| `pnpm run lint:fix` | Auto-fix linting and formatting issues with Biome |
| `pnpm run check-unused-files` | Detect unused files, exports, and dependencies with Knip |
