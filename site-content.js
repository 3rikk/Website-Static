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
      privacyLabel: 'Privacy',
      manageCookies: 'Cookie settings',
    },
    consent: {
      heading: 'Your privacy choices',
      description: 'With your permission, this site uses Microsoft Clarity to understand how visitors use it. You can change your choice at any time.',
      learnMore: 'Read the privacy policy',
      reject: 'Reject analytics',
      accept: 'Accept analytics',
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
        title: 'Erik Kunz - Portfolio',
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
          { title: 'Portpass - Passport and Visa Management', description: 'This side project of mine is an open source website which lets you graphically view the power of your passports, visas, residency permits and more in a sleek, modern UI.', image: 'images/projects/portpass-banner.png', alt: 'Portpass banner', href: 'https://portpass.erik-kunz.com' },
          { title: 'Water Distribution Failures and Civilian Impact: The Case of Lebanon', description: "Read my paper on the causes and effects of Lebanon's failing water distribution amidst war, corruption and climate change.", image: 'images/projects/seminararbeit.png', alt: 'Cover image for seminar paper on water distribution in Lebanon', href: 'files/lebanon-water-crisis.pdf' },
          { title: 'This Portfolio Website', description: 'View the source code of this actively developed website, which I consider a hobby project, on GitHub.', image: 'images/projects/website-code.png', alt: 'Source code for this portfolio website', href: 'https://github.com/3rikk/Website-Static/' },
          { title: 'Web development project', description: 'Replace this with the challenge, your contribution and the outcome of a digital project.', image: 'images/projects/web-development.png', alt: 'Abstract web-development workspace', href: '#', hidden: true },
        ],
      },
      about: {
        title: 'Erik Kunz — About Me',
        heading: 'About Me',
        eyebrow: 'A little introduction',
        intro: 'An economics student with an interest in data, international business and design.',
        storyLabel: 'The person behind the timeline',
        factsLabel: 'Profile details',
        portraitAlt: 'Portrait of Erik Kunz',
        facts: [
          { label: 'Based in', value: 'Nuremberg, Germany' },
          { label: 'Studies', value: 'Economics' },
          { label: 'Focus', value: 'Data Science & IBS' },
        ],
        paragraphs: [
          'I am an economics student specialising in Data Science and IBS from London, currently living and studying in Nuremberg, Germany.',
          'This website acts as a playground for me to experiment with web design and development, which is a hobby of mine. The page is a static Cloudflare page, deployed with a Cloudflare Worker that auto-builds and updates the site when the GitHub source is updated. I work with Visual Studio Code and tend to live-commit updates as I work, hence the frequent and small commits. It is not based on a template but is custom-coded with the help of OpenAI Codex and Claude Code, as well as my own understanding of web development to refine and evaluate the code. ',
        ],
        paragraphBreaks: [2, 1],
      },
      privacy: {
        title: 'Erik Kunz — Privacy',
        description: 'Privacy information for erik-kunz.com.',
        eyebrow: 'Privacy',
        heading: 'Privacy & cookies',
        updated: 'Last updated: 11 September 2026',
        sections: [
          { heading: 'Controller', paragraphs: ['Erik Kunz, Äussere Bayreuther Strasse 100, 90491 Nürnberg, Germany. Email: contact@erik-kunz.com.'] },
          { heading: 'Website delivery', paragraphs: ['When you visit this website, the hosting provider processes technical connection data such as your IP address, browser information and requested pages in server logs. This is necessary to deliver and secure the website.', 'If you dismiss the Hire Me notice, we store a strictly necessary first-party preference cookie for 48 hours so the notice does not reappear during that period.'] },
          { heading: 'Analytics — Microsoft Clarity', paragraphs: ['With your consent, we use Microsoft Clarity to understand how visitors use the website and improve its usability. Clarity records interaction data such as page views, clicks, scrolling, mouse movement, device and browser information, and may create session recordings and heatmaps. It uses first- and third-party cookies and pseudonymous identifiers.', 'The legal basis is your consent. You may refuse or withdraw consent at any time through Cookie settings in the footer. Refusal does not affect use of the website. Microsoft processes Clarity data in Azure. Clarity recordings are generally retained for 30 days; aggregated click and heatmap data, and selected sessions, may be retained for up to nine months.'] },
          { heading: 'Contact by email', paragraphs: ['If you contact us by email, we process the information you provide to respond to your enquiry. We retain it only as long as needed for that purpose or to meet legal obligations.'] },
          { heading: 'Your rights', paragraphs: ['Subject to applicable law, you may request access, correction, deletion, restriction of processing, data portability, or object to processing. Where processing is based on consent, you can withdraw it at any time without affecting processing already carried out. You may also lodge a complaint with a data-protection supervisory authority.'] },
        ],
        microsoftPrivacyLabel: 'Microsoft Privacy Statement',
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
      privacyLabel: 'Datenschutz',
      manageCookies: 'Cookie-Einstellungen',
    },
    consent: {
      heading: 'Ihre Datenschutzwahl',
      description: 'Mit Ihrer Einwilligung verwendet diese Website Microsoft Clarity, um zu verstehen, wie Besucher sie nutzen. Sie können Ihre Wahl jederzeit ändern.',
      learnMore: 'Datenschutzerklärung lesen',
      reject: 'Analyse ablehnen',
      accept: 'Analyse akzeptieren',
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
        title: 'Erik Kunz — Portfolio',
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
          { title: 'Portpass - Pass- und Visaverwaltung', description: 'Dieses Nebenprojekt von mir ist eine Open-Source-Website, die die Möglichkeiten Ihrer Reisepässe, Visa, Aufenthaltstitel und mehr in einer eleganten, modernen Benutzeroberfläche grafisch darstellt.', image: 'images/projects/portpass-banner.png', alt: 'Portpass-Banner', href: 'https://portpass.erik-kunz.com' },
          { title: 'Water Distribution Failures and Civilian Impact: The Case of Lebanon', description: 'Lesen Sie meine Seminararbeit über die Ursachen und Auswirkungen der zusammenbrechenden Wasserversorgung im Libanon inmitten von Krieg, Korruption und Klimawandel. Die Arbeit ist nur auf Englisch verfügbar.', image: 'images/projects/seminararbeit.png', alt: 'Titelbild der Seminararbeit zur Wasserversorgung im Libanon', href: 'files/lebanon-water-crisis.pdf' },
          { title: 'Diese Portfolio-Website', description: 'Sehen Sie sich den Quellcode dieser aktiv entwickelten Website, die für mich ein Hobbyprojekt ist, auf GitHub an.', image: 'images/projects/website-code.png', alt: 'Quellcode dieser Portfolio-Website', href: 'https://github.com/3rikk/Website-Static/' },
          { title: 'Webentwicklungsprojekt', description: 'Ersetzen Sie dies durch Herausforderung, Beitrag und Ergebnis eines digitalen Projekts.', image: 'images/projects/web-development.png', alt: 'Abstrakter Arbeitsplatz zur Webentwicklung', href: '#', hidden: true },
        ],
      },
      about: {
        title: 'Erik Kunz — Über mich',
        heading: 'Über mich',
        eyebrow: 'Eine kurze Vorstellung',
        intro: 'Wirtschaftsstudent mit Interesse an Daten, internationalem Business und den Details, die aus einer guten Erfahrung eine besondere machen.',
        storyLabel: 'Die Person hinter dem Zeitstrahl',
        factsLabel: 'Profilangaben',
        portraitAlt: 'Porträt von Erik Kunz',
        facts: [
          { label: 'Standort', value: 'Nürnberg, Deutschland' },
          { label: 'Studium', value: 'Wirtschaftswissenschaften' },
          { label: 'Schwerpunkt', value: 'Data Science & IBS' },
        ],
        paragraphs: [
          'Ich bin Wirtschaftswissenschaftsstudent mit den Schwerpunkten Data Science und International Business Studies. Ich stamme aus London und lebe und studiere derzeit in Nürnberg, Deutschland.',
          'Diese Website ist ein Spielplatz für meine Experimente mit Webdesign und Webentwicklung – einem meiner Hobbys. Sie ist eine statische Cloudflare-Seite, die mit einem Cloudflare Worker bereitgestellt wird. Dieser erstellt und aktualisiert die Website automatisch, wenn die GitHub-Quelle aktualisiert wird. Ich arbeite mit Visual Studio Code und committe Änderungen häufig direkt während der Arbeit, daher die vielen kleinen Commits. Sie basiert nicht auf einer Vorlage, sondern wurde mit Unterstützung von OpenAI Codex und Claude Code sowie meinem eigenen Verständnis von Webentwicklung individuell programmiert, überarbeitet und bewertet.',
        ],
        paragraphBreaks: [2, 1],
      },
      privacy: {
        title: 'Erik Kunz — Datenschutz',
        description: 'Datenschutzhinweise für erik-kunz.com.',
        eyebrow: 'Datenschutz',
        heading: 'Datenschutz & Cookies',
        updated: 'Stand: 11. September 2026',
        sections: [
          { heading: 'Verantwortlicher', paragraphs: ['Erik Kunz, Äussere Bayreuther Strasse 100, 90491 Nürnberg, Deutschland. E-Mail: contact@erik-kunz.com.'] },
          { heading: 'Bereitstellung der Website', paragraphs: ['Beim Besuch dieser Website verarbeitet der Hosting-Anbieter technische Verbindungsdaten wie IP-Adresse, Browserinformationen und aufgerufene Seiten in Server-Logs. Dies ist für die Bereitstellung und Sicherheit der Website erforderlich.', 'Wenn Sie den Hinweis „Hire Me!“ schließen, speichern wir für 48 Stunden ein technisch notwendiges First-Party-Präferenz-Cookie, damit der Hinweis in diesem Zeitraum nicht erneut erscheint.'] },
          { heading: 'Analyse — Microsoft Clarity', paragraphs: ['Mit Ihrer Einwilligung nutzen wir Microsoft Clarity, um zu verstehen, wie Besucher die Website nutzen und ihre Bedienbarkeit zu verbessern. Clarity erfasst Interaktionsdaten wie Seitenaufrufe, Klicks, Scrollen, Mausbewegungen, Geräte- und Browserinformationen und kann Sitzungsaufzeichnungen sowie Heatmaps erstellen. Dabei werden First- und Third-Party-Cookies und pseudonyme Kennungen verwendet.', 'Rechtsgrundlage ist Ihre Einwilligung. Sie können sie jederzeit über Cookie-Einstellungen im Footer verweigern oder widerrufen. Die Nutzung der Website bleibt dadurch uneingeschränkt möglich. Microsoft verarbeitet Clarity-Daten in Azure. Aufzeichnungen werden in der Regel 30 Tage gespeichert; aggregierte Klick- und Heatmap-Daten sowie ausgewählte Sitzungen können bis zu neun Monate gespeichert werden.'] },
          { heading: 'Kontakt per E-Mail', paragraphs: ['Wenn Sie uns per E-Mail kontaktieren, verarbeiten wir Ihre Angaben zur Bearbeitung Ihrer Anfrage. Wir speichern sie nur so lange, wie es dafür oder zur Erfüllung gesetzlicher Pflichten erforderlich ist.'] },
          { heading: 'Ihre Rechte', paragraphs: ['Sie können nach Maßgabe der gesetzlichen Voraussetzungen Auskunft, Berichtigung, Löschung, Einschränkung der Verarbeitung, Datenübertragbarkeit oder Widerspruch verlangen. Bei einer Verarbeitung auf Grundlage Ihrer Einwilligung können Sie diese jederzeit mit Wirkung für die Zukunft widerrufen. Außerdem können Sie sich bei einer Datenschutzaufsichtsbehörde beschweren.'] },
        ],
        microsoftPrivacyLabel: 'Microsoft-Datenschutzerklärung',
      },
    },
  },
};

const explicitSiteLocale = new URLSearchParams(window.location.search).get('lang');
const browserLanguages = navigator.languages?.length ? navigator.languages : [navigator.language];
const browserSiteLocale = browserLanguages
  .map((language) => String(language || '').toLowerCase().split('-')[0])
  .find((language) => siteContentByLocale[language]);
const siteLocale = siteContentByLocale[explicitSiteLocale] ? explicitSiteLocale : (browserSiteLocale || 'en');
const siteText = siteContentByLocale[siteLocale];
