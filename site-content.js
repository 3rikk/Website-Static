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
      { label: 'CV as PDF', href: 'lebenslauf.pdf' },
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
      internship: 'Internship',
      volunteer: 'Volunteer',
      education: 'Education',
      extracurricular: 'Extracurricular',
    },
    timeline: {
      workColumn: 'Work, internships & volunteering',
      educationColumn: 'Education',
      categoryLabel: 'Timeline category',
      filterLabel: 'Filter timeline entries',
      timelineLabel: 'Work and education timeline',
      viewDetails: 'View details',
      detailsFor: 'View details for',
      closeDetails: 'Close details',
      start: 'Start',
      end: 'End',
      editNote: 'Entries are maintained in',
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
      },
      about: {
        title: 'Erik Kunz — About Me',
        heading: 'About Me',
        paragraphs: [
          'I am an economics student specialising in Data Science and IBS from London, currently living and studying in Nuremberg, Germany.',
          'This website currently serves as a placeholder, though in the future it will become a digital portfolio of my work and projects.',
          'It also acts as a playground for me to experiment with web design and development, which is a hobby of mine. The page is a static Cloudflare page, deployed with a Cloudflare Worker that auto-builds and updates the site when the GitHub source is updated. I work with Visual Studio Code and tend to live-commit updates as I work, hence the frequent and small commits.',
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
      { label: 'Lebenslauf als PDF', href: 'lebenslauf.pdf' },
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
      internship: 'Praktikum',
      volunteer: 'Ehrenamt',
      education: 'Bildung',
      extracurricular: 'Außerschulisch',
    },
    timeline: {
      workColumn: 'Berufserfahrung, Praktika & Ehrenamt',
      educationColumn: 'Bildung',
      categoryLabel: 'Bereich im Zeitstrahl',
      filterLabel: 'Einträge im Zeitstrahl filtern',
      timelineLabel: 'Zeitstrahl zu Berufserfahrung und Bildung',
      viewDetails: 'Details ansehen',
      detailsFor: 'Details ansehen für',
      closeDetails: 'Details schließen',
      start: 'Beginn',
      end: 'Ende',
      editNote: 'Einträge werden gepflegt in',
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
