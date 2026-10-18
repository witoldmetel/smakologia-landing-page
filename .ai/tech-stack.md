# Tech Stack Specification — Smakologia Landing Page

## 1. Overview & Architectural Goals
- **Primary Goal:** Maximize local and organic Google SEO visibility ("Dietetyk Będzin", "Dietetyk kliniczny Będzin", "Psychodietetyk Będzin / Śląsk") and achieve **100% across all four Google Lighthouse categories** (Performance, Accessibility, Best Practices, SEO).
- **Architecture:** Static Site Generation (SSG) with Zero-JS by default.
- **Page Structure:** Single-page landing page with semantic anchor sections and 301 redirects from legacy WordPress URLs.

## 2. Core Stack (2026 Standard)
- **Language:** TypeScript 5.x (`strict: true`)
- **Framework:** Astro 5.x (Static output mode)
- **Styling:** Tailwind CSS v4 (`@tailwindcss/vite`) with custom CSS design tokens
- **Icons:** `astro-icon` with Iconify (`@iconify-json/lucide`) — inline optimized SVGs with zero runtime overhead
- **Typography:** Self-hosted variable fonts (`Plus Jakarta Sans` / `Inter` / `Lora`) via `@fontsource-variable/*` or Astro Fonts API with `font-display: swap` and preloaded critical Latin/Latin-Ext subsets (Polish diacritics: ą, ć, ę, ł, ń, ó, ś, ź, ż)
- **Images:** `astro:assets` using `sharp` at build time for automatic `AVIF` + `WebP` generation, responsive `srcset`, lazy loading below the fold, and `fetchpriority="high"` on the Hero image

## 3. SEO & Structured Data Stack
- **Metadata & Canonical Tags:** Custom typed `<SEOHead />` component managing title, meta description, canonical URL, OpenGraph (`og:locale="pl_PL"`), Twitter Cards, and geo meta tags
- **Structured Data (JSON-LD):** `schema-dts` for compile-time type-checked Schema.org graphs:
  - `Dietitian` / `MedicalBusiness` / `LocalBusiness` (NAP: Name, Address, Phone, GeoCoordinates for `ul. Gzichowska 121, 42-500 Będzin`, `areaServed`: Będzin, Katowice, Sosnowiec, Chorzów, Dąbrowa Górnicza, Siewierz)
  - `Person` (Specialist credentials: Clinical Dietitian & Psychodietitian)
  - `FAQPage` (Rich snippet Q&A for common patient questions)
  - `WebSite` & `BreadcrumbList`
- **Sitemap & Robots:** `@astrojs/sitemap` + static `robots.txt` pointing to `https://smakologia.com/sitemap-index.xml`
- **Legacy URL Preservation:** Static `_redirects` file configuring permanent `301` redirects from old WordPress URLs (e.g., `/strona-glowna/kontakt-dietetyk-bedzin/` -> `/#kontakt`)

## 4. Accessibility (WCAG 2.2 AA / 100% Lighthouse Accessibility)
- Semantic HTML5 landmarks (`<header>`, `<main>`, `<section aria-labelledby="...">`, `<footer>`, `<nav>`)
- Strict heading hierarchy (`<h1>` -> `<h2>` -> `<h3>` with no skipped levels)
- Minimum color contrast ratio of `4.5:1` for body text and `3:1` for large text/UI components
- Keyboard navigation support: visible `:focus-visible` rings, "Przejdź do głównej treści" (Skip to main content) link, accessible mobile navigation disclosure (`aria-expanded`, `aria-controls`)
- Native HTML `<details>` / `<summary>` for the FAQ accordion (100% accessible without client-side JS)

## 5. Quality Assurance & Automated Auditing
- **Linter & Formatter:** `@biomejs/biome` v2.5+ (fast Rust-based linting and formatting for `.ts`, `.astro`, `.css`, and `.json`, including `a11y` rules)
- **Type & Template Checking:** `astro check` (`@astrojs/check` + `typescript`) for full `.astro` template & frontmatter verification
- **Unused Code & Dependency Detection:** `knip` (`pnpm run check-unused-files`)
- **Zero-Friction Git & CI Workflow:** No Husky/pre-commit hooks slowing down local commits; automatic formatting on save via `.vscode/settings.json` (`biomejs.biome`) and automated quality gate in `.github/workflows/ci.yml` (`lint`, `check-unused-files`, `check`, `build`).
- **HTML & A11y Validation:** `@axe-core/playwright` and `pa11y` for automated WCAG 2.2 checks
- **Performance & SEO Gate:** `@lhci/cli` (Lighthouse CI) configured to assert `1.0` (100%) minimum scores for Performance, Accessibility, Best Practices, and SEO

## 6. Hosting, Deployment & Analytics (0 PLN Budget)
- **Hosting & CDN:** Cloudflare Pages (Free Tier — allows commercial use, unlimited static bandwidth, Warsaw edge PoP, automatic HTTPS/SSL, HTTP/3)
- **CI/CD:** Automatic GitHub -> Cloudflare Pages deployment on push to `main`, plus Preview URLs for pull requests
- **Analytics:** Cloudflare Web Analytics (free, cookie-free, GDPR/RODO compliant without requiring an intrusive cookie banner) + Google Search Console + Google Business Profile integration
