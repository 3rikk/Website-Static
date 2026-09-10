/*
 * Site copy and locale configuration.
 *
 * English and German are provided below. Add another locale by copying one
 * of these objects and visit it with `?lang=<locale>`.
 * CV entries are kept in cv-entries.js under the same locale key.
 */
const siteContentByLocale = {
  en: {
    language: 'en',
    site: {
      name: 'Erik Kunz',
      email: 'contact@erik-kunz.com',
      cvEntriesFile: 'cv-entries.js',
      profileImage: 'images/profile.jpg',
    },
    navigation: [
      { label: 'Home', href: 'index.html' },
      { label: 'Interactive CV', href: 'index.html#cv' },
      { label: 'Projects', href: 'projects.html' },
      { label: 'About Me', href: 'about.html' },
    ],
    navigationLabel: 'Primary navigation',
    mobileMenu: {
      openLabel: 'Open navigation',
      closeLabel: 'Close navigation',
    },
    languageSwitch: {
      label: 'DE',
      target: 'de',
      ariaLabel: 'Switch to German',
    },
    footer: {
      address: 'Impressum: Erik Kunz · Äussere Bayreuther Strasse 100 · 90491 Nürnberg',
      copyright: '© 2026',
    },
    tags: {
      work: 'Work',
      hireme: 'Hire Me!',
      internship: 'Internship',
      volunteer: 'Volunteer',
      education: 'Education',
      extracurricular: 'Extracurricular',
    },
    timeline: {
      workColumn: 'Work, internships & volunteering',
      educationColumn: 'Education & Extracurricular',
      categoryLabel: 'Timeline category',
      filterLabel: 'Filter timeline entries',
      timelineLabel: 'Work and education timeline',
      viewDetails: 'View details',
      detailsFor: 'View details for',
      closeDetails: 'Close details',
      dismissHireMe: 'Dismiss Hire Me notice',
      start: 'Start',
      end: 'End',
    },
    pages: {
      home: {
        title: 'Erik Kunz — CV',
        description: 'Erik Kunz — work and education timeline.',
        eyebrow: 'Curriculum vitae',
        intro: 'Welcome to my interactive portfolio. This page serves to visualise my experience and education to give you a thorough impression of my background and skills.',
        contactPrefix: 'You can contact me at ',
        scrollLabel: 'Scroll to curriculum vitae',
        scrollPrompt: 'Explore my path',
        cvEyebrow: 'Selected experience',
        cvTitle: 'Work & education,',
        cvTitleEmphasis: 'side by side.',
        cvDescription: 'Follow the timeline or select an entry to reveal more.',
        traditionalCvPrefix: 'Prefer a traditional CV? Request one by email: ',
      },
      projects: {
        title: 'Selected projects',
        description: 'A growing collection of my work.',
        eyebrow: 'Portfolio',
        viewProject: 'View project →',
        tiles: [
          { title: 'Water Distribution Failures and Civilian Impact: The Case of Lebanon', description: "Read my paper on the causes and effects of Lebanon's failing water distribution amidst war, corruption and climate change.", image: 'images/projects/seminararbeit.png', alt: 'Cover image for seminar paper on water distribution in Lebanon', href: 'files/lebanon-water-crisis.pdf' },
          { title: 'This Portfolio Website', description: 'View the source code of this actively developed website, which I consider a hobby project, on GitHub.', image: 'images/projects/website-code.png', alt: 'Source code for this portfolio website', href: 'https://github.com/3rikk/Website-Static/' },
          { title: 'Web development project', description: 'Replace this with the challenge, your contribution and the outcome of a digital project.', image: 'images/projects/web-development.png', alt: 'Abstract web-development workspace', href: '#', hidden: true },
        ],
      },
      about: {
        title: 'Erik Kunz — About Me',
        heading: 'About Me',
        paragraphs: [
          'I am an economics student specialising in Data Science and IBS from London, currently living and studying in Nuremberg, Germany.',
          'This website acts as a playground for me to experiment with web design and development, which is a hobby of mine. The page is a static Cloudflare page, deployed with a Cloudflare Worker that auto-builds and updates the site when the GitHub source is updated. I work with Visual Studio Code and tend to live-commit updates as I work, hence the frequent and small commits. It is not based on a template but is custom-coded with the help of OpenAI Codex and Claude Code, as well as my own understanding of web development to refine and evaluate the code. ',
        ],
        paragraphBreaks: [2, 1],
      },
    },
  },
  de: {
    language: 'de',
    site: {
      name: 'Erik Kunz',
      email: 'contact@erik-kunz.com',
      cvEntriesFile: 'cv-entries.js',
      profileImage: 'images/profile.jpg',
    },
    navigation: [
      { label: 'Startseite', href: 'index.html' },
      { label: 'Interaktiver Lebenslauf', href: 'index.html#cv' },
      { label: 'Projekte', href: 'projects.html' },
      { label: 'Über mich', href: 'about.html' },
    ],
    navigationLabel: 'Hauptnavigation',
    mobileMenu: {
      openLabel: 'Navigation öffnen',
      closeLabel: 'Navigation schließen',
    },
    languageSwitch: {
      label: 'EN',
      target: 'en',
      ariaLabel: 'Zur englischen Version wechseln',
    },
    footer: {
      address: 'Impressum: Erik Kunz · Äussere Bayreuther Strasse 100 · 90491 Nürnberg',
      copyright: '© 2026',
    },
    tags: {
      work: 'Berufserfahrung',
      hireme: 'Hire Me!',
      internship: 'Praktikum',
      volunteer: 'Ehrenamt',
      education: 'Bildung',
      extracurricular: 'Außerschulisch',
    },
    timeline: {
      workColumn: 'Berufserfahrung, Praktika & Ehrenamt',
      educationColumn: 'Bildung & Außerschulisch',
      categoryLabel: 'Bereich im Zeitstrahl',
      filterLabel: 'Einträge im Zeitstrahl filtern',
      timelineLabel: 'Zeitstrahl zu Berufserfahrung und Bildung',
      viewDetails: 'Details ansehen',
      detailsFor: 'Details ansehen für',
      closeDetails: 'Details schließen',
      dismissHireMe: 'Hinweis „Hire Me!“ schließen',
      start: 'Beginn',
      end: 'Ende',
    },
    pages: {
      home: {
        title: 'Erik Kunz — Lebenslauf',
        description: 'Erik Kunz — Zeitstrahl zu Berufserfahrung und Bildung.',
        eyebrow: 'Lebenslauf',
        intro: 'Willkommen in meinem interaktiven Portfolio. Diese Seite veranschaulicht meine Erfahrung und Ausbildung und vermittelt einen umfassenden Eindruck meines Hintergrunds und meiner Fähigkeiten.',
        contactPrefix: 'Sie erreichen mich unter ',
        scrollLabel: 'Zum Lebenslauf scrollen',
        scrollPrompt: 'Meinen Weg entdecken',
        cvEyebrow: 'Ausgewählte Stationen',
        cvTitle: 'Beruf & Bildung,',
        cvTitleEmphasis: 'nebeneinander.',
        cvDescription: 'Folgen Sie dem Zeitstrahl oder wählen Sie einen Eintrag für weitere Informationen.',
        traditionalCvPrefix: 'Sie möchten einen klassischen Lebenslauf? Fordern Sie ihn per E-Mail an: ',
      },
      projects: {
        title: 'Ausgewählte Projekte',
        description: 'Eine wachsende Sammlung von Arbeiten.',
        eyebrow: 'Portfolio',
        viewProject: 'Projekt ansehen →',
        tiles: [
          { title: 'Water Distribution Failures and Civilian Impact: The Case of Lebanon', description: 'Lesen Sie meine Seminararbeit über die Ursachen und Auswirkungen der zusammenbrechenden Wasserversorgung im Libanon inmitten von Krieg, Korruption und Klimawandel. Die Arbeit ist nur auf Englisch verfügbar.', image: 'images/projects/seminararbeit.png', alt: 'Titelbild der Seminararbeit zur Wasserversorgung im Libanon', href: 'files/lebanon-water-crisis.pdf' },
          { title: 'Diese Portfolio-Website', description: 'Sehen Sie sich den Quellcode dieser aktiv entwickelten Website, die für mich ein Hobbyprojekt ist, auf GitHub an.', image: 'images/projects/website-code.png', alt: 'Quellcode dieser Portfolio-Website', href: 'https://github.com/3rikk/Website-Static/' },
          { title: 'Webentwicklungsprojekt', description: 'Ersetzen Sie dies durch Herausforderung, Beitrag und Ergebnis eines digitalen Projekts.', image: 'images/projects/web-development.png', alt: 'Abstrakter Arbeitsplatz zur Webentwicklung', href: '#', hidden: true },
        ],
      },
      about: {
        title: 'Erik Kunz — Über mich',
        heading: 'Über mich',
        paragraphs: [
          'Ich bin Wirtschaftswissenschaftsstudent mit den Schwerpunkten Data Science und International Business Studies. Ich stamme aus London und lebe und studiere derzeit in Nürnberg, Deutschland.',
          'Diese Website dient derzeit als Platzhalter, soll sich künftig jedoch zu einem digitalen Portfolio meiner Arbeiten und Projekte entwickeln.',
          'Sie ist außerdem ein Spielplatz für meine Experimente mit Webdesign und Webentwicklung – ein Hobby von mir. Die Seite ist eine statische Cloudflare-Seite, die mit einem Cloudflare Worker bereitgestellt wird. Dieser erstellt und aktualisiert die Website automatisch, wenn die GitHub-Quelle aktualisiert wird. Ich arbeite mit Visual Studio Code und committe Änderungen häufig direkt während der Arbeit, daher die vielen kleinen Commits.',
        ],
        paragraphBreaks: [2, 1],
      },
    },
  },
};

const requestedSiteLocale = new URLSearchParams(window.location.search).get('lang') || document.documentElement.lang || 'en';
const siteLocale = siteContentByLocale[requestedSiteLocale] ? requestedSiteLocale : 'en';
const siteText = siteContentByLocale[siteLocale];
