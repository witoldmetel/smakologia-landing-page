# Product Requirements Document (PRD) — Smakologia Landing Page

## 1. Project Summary
**Smakologia** (`smakologia.com`) is the professional website for a Clinical Dietitian and Psychodietitian (Dietetyk kliniczny i psychodietetyk) based in Będzin, Poland, offering both in-person consultations in Będzin and online consultations across Poland. The previous WordPress website is offline; this project rebuilds the web presence as an ultra-fast, conversion-oriented, single-page landing page engineered for top Google rankings in Będzin and the Silesian Metropolis (Zagłębie & Górny Śląsk) and 100% Lighthouse scores.

## 2. Business & Existing Brand Facts (Extracted from Archive)
- **Brand Name:** Smakologia
- **Domain:** `https://smakologia.com`
- **Specialization:** Dietetyk kliniczny i psychodietetyk (Clinical Dietitian & Psychodietitian)
- **Consultation Formats:** Stacjonarnie w gabinecie w Będzinie oraz konsultacje online
- **Brand Positioning:** Solo specialist ("O mnie") — empathetic, partnership-driven approach ("Tworzymy razem zespół, w którym Ty jesteś dyrektorem, a ja Twoim wsparciem")
- **Office Address:** ul. Gzichowska 121, 42-500 Będzin, Poland
- **Location Advantage:** Located right by the DK86 highway exit (zjazd z drogi krajowej 86), offering fast, convenient access from:
  - Będzin
  - Katowice
  - Sosnowiec
  - Chorzów
  - Dąbrowa Górnicza
  - Siewierz
- **Phone:** `(+48) 881 221 129` (`tel:+48881221129`)
- **Email:** `smakoologia@gmail.com` (`mailto:smakoologia@gmail.com`)
- **Social Media:**
  - **Facebook:** `https://www.facebook.com/Smakologiadietetyk`
  - **Instagram:** `https://www.instagram.com/smakoologia/`
- **External Booking Reference:** Optional link/CTA to `dietdoctor.pl` (configurable via `src/config/site.ts`; direct contact active by default)

## 3. Visual Identity & Design System
- **Color Palette:** Warm, modern clinical & natural palette:
  - Primary Sage / Botanical Green (`#2D5A43` / `#1E4330` — high-contrast WCAG AAA compliant)
  - Warm Cream / Alabaster Background (`#FAF7F2` / `#F3EDE2`)
  - Terracotta / Warm Clay Accent (`#C85A32` / `#A8431F`)
  - Deep Charcoal Slate Text (`#1C2520`)
- **Brand Assets:** Recovered Smakologia brand marks and high-efficiency vector/AVIF/WebP imagery.

## 4. Target Audience
1. **Clinical Nutrition Patients:** Individuals dealing with diet-related medical conditions (e.g., insulin resistance, hypothyroidism/Hashimoto's, PCOS, GI disorders, cardiovascular/metabolic conditions) needing evidence-based clinical meal plans.
2. **Psychodietetics Clients:** People struggling with eating disorders, emotional eating, yo-yo dieting, or unhealthy relationships with food who want sustainable habit change without restrictive dieting.
3. **Weight Management & Lifestyle Clients:** Residents of Będzin, Sosnowiec, Katowice, Dąbrowa Górnicza, Chorzów, and Siewierz (plus online clients) looking for realistic, tasty, personalized nutrition plans.

## 5. Information Architecture (Single-Page Sections)
1. **Sticky Header & Navigation (`#top`)**
   - Smakologia logo
   - Anchor links: *O mnie*, *Specjalizacje*, *Jak pracujemy*, *Cennik*, *FAQ*, *Kontakt*
   - Primary CTA button: `Zadzwoń: 881 221 129` (plus optional `Umów wizytę` link when `dietdoctor.pl` URL is enabled)
2. **Hero Section (`#hero`)**
   - Primary SEO H1 targeting core keywords: *Dietetyk kliniczny i psychodietetyk w Będzinie oraz online*
   - Value proposition emphasizing sustainable habit change, clinical expertise, and tasty individualized menus
   - Primary CTA (Click-to-call / Contact scroll) & Secondary CTA (Poznaj proces współpracy)
   - Trust badges (Dietetyka kliniczna, Psychodietetyka, Gabinet przy DK86 w Będzinie + Online)
3. **About Me Section (`#o-mnie`)**
   - Personal introduction, education, clinical & psychodietetic approach
   - Core philosophy adapted from original site: *"Odpowiednie jedzenie może zdziałać cuda"* — combining medical knowledge with psychological support
4. **Areas of Support / Specializations (`#specjalizacje`)**
   - **Dietetyka kliniczna:** Diet therapy in chronic and metabolic diseases
   - **Psychodietetyka:** Overcoming eating disorders, emotional eating, and building healthy habits
   - **Redukcja masy ciała i zmiana nawyków:** Sustainable weight loss without starvation or giving up favorite flavors
   - **Konsultacje stacjonarne (Będzin) i Online:** Flexible support tailored to the patient's lifestyle
5. **3-Step Process Section (`#jak-pracujemy`)**
   - Adapted from the original Smakologia 3-step journey:
     1. **Chęć zmiany:** Initial consultation, health & lifestyle interview, setting realistic goals ("Wszystko zaczyna się w Twojej głowie!")
     2. **Praca nad sobą:** Tailored, delicious menu and ongoing psychodietetic partnership ("Ty jesteś dyrektorem, ja Twoim prywatnym asystentem")
     3. **Meta!:** Achieving lasting health, body composition, and food freedom ("Zdrowa i dobra dieta sprawiła, że udało się nam i udało się Tobie!")
6. **Price List Section (`#cennik`)**
   - Transparent pricing cards with editable placeholder prices in `src/config/site.ts` (First clinical/psychodietetic consultation, Follow-up consultation, Individual 7/14-day nutrition plan, Comprehensive cooperation package)
7. **Local SEO & FAQ Section (`#faq`)**
   - Frequently asked questions about the first visit, preparation, online vs. in-person consultations in Będzin, and travel from Katowice/Sosnowiec/Dąbrowa Górnicza via DK86
   - Marked up with `FAQPage` JSON-LD schema for Google search rich results
8. **Location & Direct Contact Section (`#kontakt`)**
   - Clear NAP (Name, Address, Phone, Email) cards with one-tap `tel:` and `mailto:` actions
   - Highlight of the `ul. Gzichowska 121, 42-500 Będzin` location near the DK86 exit with travel times from Chorzów, Katowice, Sosnowiec, Dąbrowa Górnicza, and Siewierz
   - Zero-JS interactive map card & direct Google Maps route button
9. **Footer**
   - Copyright, privacy notice, quick navigation, and local SEO keyword reinforcement

## 6. SEO & Non-Functional Requirements
- **Lighthouse Targets:** 100 Performance, 100 Accessibility, 100 Best Practices, 100 SEO on both Mobile and Desktop.
- **Core Web Vitals:** LCP < 1.0s, INP < 50ms, CLS = 0.00.
- **URL Redirects:** Legacy paths from the archived site (`/strona-glowna/kontakt-dietetyk-bedzin/`, `/strona-glowna/`) must 301-redirect cleanly to the new page so backlinks and historical Google index signals are preserved.
- **Zero Cookie Banner Friction:** Use cookie-free analytics and a click-to-open Google Maps link/facade so no third-party tracking cookies are loaded on page view.
