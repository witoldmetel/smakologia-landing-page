interface NavItem {
  label: string;
  href: string;
}

interface SpecializationItem {
  id: string;
  badge: string;
  title: string;
  description: string;
  conditions: string[];
  iconName: 'clinical' | 'psycho' | 'weight' | 'hybrid';
}

interface ProcessStep {
  stepNumber: string;
  badge: string;
  title: string;
  quote: string;
  description: string;
  deliverables: string[];
}

interface PricingItem {
  id: string;
  name: string;
  subtitle: string;
  price: string;
  duration: string;
  featured?: boolean;
  badge?: string;
  features: string[];
}

interface CommuteCity {
  city: string;
  driveTime: string;
  routeNote: string;
}

interface FaqItem {
  question: string;
  answer: string;
}

interface SocialLink {
  platform: 'Facebook' | 'Instagram';
  label: string;
  handle: string;
  url: string;
}

export const siteConfig = {
  brandName: 'Smakologia',
  legalName: 'Smakologia — Poradnia Dietetyki Klinicznej i Psychodietetyki',
  siteUrl: 'https://smakologia.com',
  locale: 'pl_PL',
  language: 'pl',
  specialist: {
    namePlaceholder: 'Dietetyk kliniczny i psychodietetyk',
    roleTitle: 'Dietetyk kliniczny i psychodietetyk',
    shortBio:
      'Pomagam pacjentom z chorobami dietozależnymi, zaburzeniami odżywiania oraz osobom, które chcą trwale zmienić nawyki żywieniowe i zredukować masę ciała bez restrykcyjnych zakazów.',
    philosophyQuote: 'Odpowiednie jedzenie może zdziałać cuda.',
    storyParagraphs: [
      'W Smakologii łączę wiedzę z zakresu dietetyki klinicznej z empatycznym podejściem psychodietetycznym. Posiadam doświadczenie w tworzeniu indywidualnych ścieżek żywieniowych, dzięki którym moi Pacjenci osiągają swoje cele zdrowotne i sylwetkowe.',
      'Wierzę (i wiem z praktyki gabinetowej), że zdrowa relacja z jedzeniem oraz dopasowany do Twojego stylu życia jadłospis są kluczem do trwałych efektów — bez poczucia winy, głodówek i efektu jo-jo.',
    ],
    highlights: [
      {
        label: 'Indywidualne podejście',
        value: '100% dopasowania',
        detail: 'Jadłospisy tworzone na bazie Twoich ulubionych smaków, wyników badań i budżetu czasowego.',
      },
      {
        label: 'Forma współpracy',
        value: 'Będzin i Online',
        detail: 'Wizyty stacjonarne w gabinecie przy DK86 w Będzinie oraz wygodne konsultacje online.',
      },
      {
        label: 'Kompleksowe wsparcie',
        value: 'Klinika + Psychologia',
        detail: 'Połączenie rzetelnej dietoterapii medycznej ze wsparciem psychodietetycznym.',
      },
    ],
  },
  seo: {
    title: 'Smakologia — Dietetyk Kliniczny i Psychodietetyk Będzin, Katowice i Online',
    description:
      'Indywidualna opieka dietetyka klinicznego i psychodietetyka w Będzinie (ul. Gzichowska 121, przy DK86 — szybki dojazd z Katowic, Sosnowca, Chorzowa i Dąbrowy Górniczej) oraz online. Zdrowa dieta bez wyrzeczeń.',
    keywords: [
      'dietetyk Będzin',
      'dietetyk kliniczny Będzin',
      'psychodietetyk Będzin',
      'dietetyk Katowice',
      'dietetyk Sosnowiec',
      'dietetyk Dąbrowa Górnicza',
      'dietetyk Chorzów',
      'dietetyk Siewierz',
      'Smakologia',
      'odchudzanie Będzin',
      'dietetyk online',
    ],
  },
  contact: {
    phoneDisplay: '(+48) 881 22 11 29',
    phoneHref: 'tel:+48881221129',
    phoneE164: '+48881221129',
    email: 'smakoologia@gmail.com',
    emailHref: 'mailto:smakoologia@gmail.com',
    address: {
      streetAddress: 'ul. Gzichowska 121',
      postalCode: '42-500',
      addressLocality: 'Będzin',
      addressRegion: 'Śląskie',
      addressCountry: 'PL',
      fullDisplay: 'ul. Gzichowska 121, 42-500 Będzin',
      locationHighlight:
        'Położenie gabinetu przy zjeździe z drogi krajowej 86 zapewnia dogodny dojazd z Chorzowa, Katowic, Sosnowca, Dąbrowy Górniczej i Siewierza.',
    },
    geo: {
      latitude: 50.3308,
      longitude: 19.1246,
    },
    googleMapsDirectionsUrl:
      'https://www.google.com/maps/search/?api=1&query=ul.+Gzichowska+121,+42-500+B%C4%99dzin',
    openingHoursSpecification: [
      {
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
        opens: '09:00',
        closes: '19:00',
      },
    ],
    openingHoursDisplay: 'Poniedziałek – Piątek: po wcześniejszym umówieniu wizyty telefonicznie lub mailowo',
  },
  socials: {
    facebook: 'https://www.facebook.com/Smakologiadietetyk',
    instagram: 'https://www.instagram.com/smakoologia/',
    items: [
      {
        platform: 'Facebook',
        label: 'Smakologia na Facebooku',
        handle: '@Smakologiadietetyk',
        url: 'https://www.facebook.com/Smakologiadietetyk',
      },
      {
        platform: 'Instagram',
        label: 'Smakologia na Instagramie',
        handle: '@smakoologia',
        url: 'https://www.instagram.com/smakoologia/',
      },
    ] satisfies SocialLink[],
  },
  booking: {
    enabled: false,
    providerName: 'DietDoctor',
    url: 'https://dietdoctor.pl',
    ctaLabel: 'Umów wizytę online',
  },
  navigation: [
    { label: 'O mnie', href: '#o-mnie' },
    { label: 'Specjalizacje', href: '#specjalizacje' },
    { label: 'Jak pracujemy', href: '#jak-pracujemy' },
    { label: 'Cennik', href: '#cennik' },
    { label: 'Dojazd', href: '#dojazd' },
    { label: 'FAQ', href: '#faq' },
    { label: 'Kontakt', href: '#kontakt' },
  ] satisfies NavItem[],
  specializations: [
    {
      id: 'dietetyka-kliniczna',
      badge: 'Wsparcie medyczne',
      title: 'Dietetyka kliniczna w jednostkach chorobowych',
      description:
        'Bezpieczna, oparta na badaniach naukowych i wynikach laboratoryjnych dietoterapia wspierająca leczenie przewlekłych schorzeń oraz poprawę samopoczucia.',
      conditions: [
        'Insulinooporność, cukrzyca typu 2 i zaburzenia gospodarki węglowodanowej',
        'Choroby tarczycy (niedoczynność tarczycy, choroba Hashimoto)',
        'Zaburzenia hormonalne (PCOS, endometrioza)',
        'Dolegliwości żołądkowo-jelitowe (IBS, SIBO, refluks, wzdęcia)',
        'Nadciśnienie tętnicze, hipercholesterolemia i profilaktyka sercowo-naczyniowa',
      ],
      iconName: 'clinical',
    },
    {
      id: 'psychodietetyka',
      badge: 'Zdrowa relacja z jedzeniem',
      title: 'Psychodietetyka i trwała zmiana nawyków',
      description:
        'Praca nad przyczynami trudności z utrzymaniem diety. Skupiamy się na emocjach, przekonaniach i stopniowym budowaniu zdrowych nawyków bez presji.',
      conditions: [
        'Zajadanie stresu, napięcia i trudnych emocji',
        'Zaburzenia odżywiania i kompulsywne objadanie się',
        'Błędne koło restrykcji żywieniowych i efektu jo-jo',
        'Poczucie winy po posiłkach i myślenie czarno-białe ("wszystko albo nic")',
        'Budowanie uważnego jedzenia i elastyczności żywieniowej',
      ],
      iconName: 'psycho',
    },
    {
      id: 'redukcja-masy-ciala',
      badge: 'Skuteczna sylwetka',
      title: 'Zdrowa redukcja masy ciała bez głodówek',
      description:
        'Smaczne, sycące menu ułożone z produktów dostępnych w każdym sklepie. Chudniesz we własnym tempie, jedząc posiłki, które naprawdę lubisz.',
      conditions: [
        'Redukcja tkanki tłuszczowej z zachowaniem energii i dobrego nastroju',
        'Szybkie i proste w przygotowaniu posiłki dopasowane do pracy zmianowej lub biurowej',
        'Jadłospisy dla par i całych rodzin (jeden obiad dla wszystkich domowników)',
        'Edukacja żywieniowa pozwalająca utrzymać masę ciała po zakończeniu współpracy',
      ],
      iconName: 'weight',
    },
    {
      id: 'stacjonarnie-i-online',
      badge: 'Elastyczna forma',
      title: 'Gabinet w Będzinie (DK86) oraz konsultacje online',
      description:
        'Wybierz formę spotkań dopasowaną do Twojego grafiku: bezpośrednie spotkanie z analizą składu ciała w Będzinie lub pełnowartościowa konsultacja zdalna.',
      conditions: [
        'Gabinet stacjonarny: ul. Gzichowska 121, 42-500 Będzin (tuż przy zjeździe z trasy DK86)',
        'Dogodny dojazd z Katowic, Sosnowca, Chorzowa, Dąbrowy Górniczej i Siewierza',
        'Konsultacje online (wideo lub telefon) dla pacjentów z całej Polski i z zagranicy',
        'Stały kontakt i modyfikacja planu w trakcie współpracy',
      ],
      iconName: 'hybrid',
    },
  ] satisfies SpecializationItem[],
  processSteps: [
    {
      stepNumber: '01',
      badge: 'Etap 1',
      title: 'Chęć zmiany',
      quote: 'Wszystko zaczyna się w Twojej głowie!',
      description:
        'Jeżeli pomyślałeś o zmianie, jesteś na dobrej drodze do sukcesu! Podczas pierwszego spotkania poznaję Twój stan zdrowia, dotychczasowy styl życia, preferencje smakowe oraz cele. Teraz pomóż mi ułożyć zdrowe menu, idealne dla Ciebie.',
      deliverables: [
        'Szczegółowy wywiad zdrowotno-żywieniowy i psychodietetyczny',
        'Analiza wyników badań laboratoryjnych oraz dotychczasowego jadłospisu',
        'Ustalenie realnych, mierzalnych i bezpiecznych celów współpracy',
      ],
    },
    {
      stepNumber: '02',
      badge: 'Etap 2',
      title: 'Praca nad sobą',
      quote: 'Tworzymy razem naszą małą "firmę", w której to TY jesteś dyrektorem!',
      description:
        'Ja, jako Twój prywatny asystent, dokładam wszelkich starań, aby wyniki naszej wspólnej pracy były dla Ciebie w pełni satysfakcjonujące. Otrzymujesz spersonalizowany plan żywieniowy i wsparcie na każdym kroku wdrażania nowych nawyków.',
      deliverables: [
        'Indywidualny jadłospis z prostymi przepisami i listą zakupów',
        'Wskazówki psychodietetyczne pomagające radzić sobie w trudniejszych momentach',
        'Regularne konsultacje kontrolne i elastyczne dopasowywanie menu',
      ],
    },
    {
      stepNumber: '03',
      badge: 'Etap 3',
      title: 'Meta!',
      quote: 'Ufff, wreszcie na mecie. Zdrowa i dobra dieta sprawiła, że udało się nam i udało się Tobie!',
      description:
        'Osiągasz wyznaczony cel zdrowotny i sylwetkowy, ale przede wszystkim zyskujesz wiedzę oraz swobodę w samodzielnym komponowaniu posiłków. Kończysz współpracę z trwałymi nawykami, które zostają z Tobą na lata.',
      deliverables: [
        'Stabilizacja uzyskanej masy ciała i poprawa wyników badań',
        'Samodzielność w komponowaniu codziennego menu bez liczenia każdej kalorii',
        'Trwała zmiana relacji z jedzeniem bez obawy o efekt jo-jo',
      ],
    },
  ] satisfies ProcessStep[],
  pricing: [
    {
      id: ' pierwsza-konsultacja',
      name: 'Pierwsza konsultacja dietetyczna / psychodietetyczna',
      subtitle: 'Kompleksowa diagnoza i plan działania (stacjonarnie w Będzinie lub online)',
      price: '180 zł',
      duration: 'ok. 60 min',
      features: [
        'Szczegółowy wywiad zdrowotny, żywieniowy i psychodietetyczny',
        'Analiza wyników badań laboratoryjnych i przyjmowanych leków/suplementów',
        'Pomiar i analiza składu ciała (w gabinecie w Będzinie)',
        ' pisemne zalecenia żywieniowe oraz plan dalszego postępowania',
      ],
    },
    {
      id: 'pakiet-wspolpracy',
      name: 'Konsultacja + Indywidualny jadłospis 7- lub 14-dniowy',
      subtitle: 'Kompleksowy start ze spersonalizowanym menu dopasowanym do Twoich smaków',
      price: '350 zł',
      duration: 'Jadłospis + konsultacja',
      featured: true,
      badge: 'Najczęściej wybierany',
      features: [
        'Pełna pierwsza konsultacja (w gabinecie przy DK86 lub online)',
        'Indywidualny jadłospis ułożony z prostych, smacznych i dostępnych produktów',
        'Wygodna lista zakupów oraz system zamienników produktów',
        'Uwzględnienie jednostek chorobowych, alergii i budżetu czasowego',
      ],
    },
    {
      id: 'wizyta-kontrolna',
      name: 'Konsultacja kontrolna / psychodietetyczna',
      subtitle: 'Regularne wsparcie, monitorowanie postępów i praca nad nawykami',
      price: '140 zł',
      duration: 'ok. 30–45 min',
      features: [
        'Omówienie dotychczasowych efektów, samopoczucia i ewentualnych trudności',
        'Kontrolna analiza składu ciała i obwodów',
        'Praca nad wyzwaniami psychodietetycznymi i motywacją',
        'Modyfikacja zaleceń lub aktualizacja planu żywieniowego',
      ],
    },
  ] satisfies PricingItem[],
  pricingDisclaimer:
    'Podane ceny mają charakter orientacyjny. Dokładny zakres współpracy dobieramy indywidualnie podczas rozmowy telefonicznej lub pierwszego spotkania.',
  commuteCities: [
    {
      city: 'Będzin (Centrum / Gzichów)',
      driveTime: '3–5 min',
      routeNote: 'Gabinet przy ul. Gzichowskiej 121, bezpośredni zjazd z trasy DK86',
    },
    {
      city: 'Sosnowiec',
      driveTime: '8–12 min',
      routeNote: 'Szybki dojazd drogą krajową nr 86 bez stania w miejskich korkach',
    },
    {
      city: 'Dąbrowa Górnicza',
      driveTime: '10–14 min',
      routeNote: 'Wygodne połączenie przez Będzin lub trasę DK86 / DK94',
    },
    {
      city: 'Katowice',
      driveTime: '12–16 min',
      routeNote: 'Bezpośredni dojazd trasą DK86 (zjazd w Będzinie tuż przy gabinecie)',
    },
    {
      city: 'Chorzów / Siemianowice Śl.',
      driveTime: '15–20 min',
      routeNote: 'Sprawny dojazd przez Katowice lub obwodnicę do węzła DK86',
    },
    {
      city: 'Siewierz / Czeladź',
      driveTime: '7–15 min',
      routeNote: 'Bezpośrednia trasa drogą krajową nr 86 w kierunku Katowic/Będzina',
    },
  ] satisfies CommuteCity[],
  faqs: [
    {
      question: 'Jak przygotować się do pierwszej wizyty u dietetyka w Będzinie lub online?',
      answer:
        'Przed pierwszym spotkaniem warto przygotować aktualne wyniki badań krwi (np. morfologia, profil lipidowy, glukoza i insulina na czczo, TSH, próby wątrobowe — jeśli je posiadasz), listę przyjmowanych leków i suplementów oraz spisać z 2–3 dni wszystko, co zjadasz i wypijasz. Podczas rozmowy telefonicznej przy umawianiu wizyty podpowiem Ci dokładnie, co będzie przydatne w Twoim przypadku.',
    },
    {
      question: 'Gdzie dokładnie znajduje się gabinet Smakologia i jak wygląda dojazd?',
      answer:
        'Gabinet mieści się w Będzinie przy ul. Gzichowskiej 121 (42-500 Będzin). Lokalizacja bezpośrednio przy zjeździe z drogi krajowej nr 86 (DK86) gwarantuje szybki i bezproblemowy dojazd nie tylko mieszkańcom Będzina, ale także osobom z Katowic, Sosnowca, Chorzowa, Dąbrowy Górniczej, Czeladzi i Siewierza.',
    },
    {
      question: 'Czy układane jadłospisy wymagają spędzania wielu godzin w kuchni i drogich produktów?',
      answer:
        'Zdecydowanie nie! W Smakologii to Ty jesteś dyrektorem naszej współpracy. Jadłospis układam na bazie produktów łatwo dostępnych w popularnych sklepach, uwzględniając Twoje ulubione smaki, możliwości finansowe oraz czas, jaki chcesz poświęcać na gotowanie.',
    },
    {
      question: 'Czym różni się konsultacja u psychodietetyka od zwykłej wizyty dietetycznej?',
      answer:
        'Tradycyjna dieta często skupia się wyłącznie na tabeli kalorii, pomijając to, dlaczego sięgamy po jedzenie pod wpływem stresu, zmęczenia czy emocji. Jako dietetyk kliniczny i psychodietetyk łączę medyczne dopasowanie posiłków z pracą nad nawykami, motywacją i relacją z jedzeniem — dzięki czemu efekty są trwałe, a dieta nie kojarzy się z karą.',
    },
    {
      question: 'Czy mogę skorzystać z konsultacji online, jeśli nie mogę dojechać do gabinetu w Będzinie?',
      answer:
        'Tak, prowadzę pełnowartościowe konsultacje online (telefonicznie lub przez wideorozmowę). Otrzymujesz dokładnie takie samo wsparcie, analizę badań i spersonalizowany jadłospis jak pacjenci stacjonarni.',
    },
    {
      question: 'Jak mogę umówić się na wizytę w poradni Smakologia?',
      answer:
        'Aby umówić dogodny termin wizyty stacjonarnej lub online, zadzwoń bezpośrednio pod numer (+48) 881 22 11 29 lub napisz wiadomość e-mail na adres smakoologia@gmail.com. Wspólnie wybierzemy najlepszy termin spotkania.',
    },
  ] satisfies FaqItem[],
} as const;
