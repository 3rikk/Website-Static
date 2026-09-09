/*
 * Edit this list to update the timeline. Entries can be in any order.
 *
 * English and German lists are provided below. Add another locale key to
 * create a further translated CV. It is selected with the same `?lang=<locale>`
 * URL parameter as the rest of the site copy in site-content.js.
 *
 * Date formats:
 *   'Sep 2023 — Present'  |  'Mar 2021 — Aug 2023'
 *   '2020 — 2023'         |  'Jun 2022'
 *   'März 2020 – Juli 2022' | '2. Juni 2024 – 23. Juni 2024'
 *
 * Add an optional tag (or category) to create a compact secondary entry:
 *   { type: 'work', tag: 'internship', ... }
 *   { type: 'work', tag: 'volunteer', ... }
 *   { type: 'education', tag: 'extracurricular', ... }
 * Shorthand is also supported: type: 'internship', 'volunteer', or
 * 'extracurricular'.
 * A tag determines its timeline side and renders the entry narrower.
 *
 * Optional detail fields for the popup:
 *   details: 'Longer text. Separate paragraphs with a blank line.',
 *   images: [{ src: 'images/project.jpg', alt: 'Describe the image' }],
 */
const cvEntriesByLocale = {
  en: [
  // WORK EXPERIENCE
  {
    type: 'work',
    date: 'Nov 2023 — 16. Aug 2026',
    title: 'Chillers Bar & Restaurant',
    organisation: 'Service Staff (Mini-job)',
    location: 'Nuremberg, Germany',
    description: 'I worked as service staff at Chillers Bar & Restaurant for around three years. My responsibilities included serving guests, taking orders, and helping to ensure the restaurant ran smoothly. This role strengthened my customer-service skills and taught me to work effectively in a dynamic environment.'
  },
  {
    type: 'work',
    date: 'May 2023 — Oct 2023',
    title: 'Restaurant Zum Spiesgesellen',
    organisation: 'Service Staff (Part-time)',
    location: 'Nuremberg, Germany',
    description: 'I worked as service staff at Restaurant Zum Spiesgesellen.'
  },

  // INTERNSHIPS & VOLUNTEERING
  {
    type: 'volunteer',
    date: '18. Aug 2026 - 21. Sep 2026',
    title: 'English Spoken Café Findikzade & Kadıköy',
    organisation: 'Teacher',
    location: 'Istanbul, Turkey',
    description: 'I volunteered as a teacher at the English Spoken Cafés in Findikzade and Kadıköy, Istanbul, where I helped students improve their English speaking skills through interactive lessons and conversation practice.\n\nMy students were from various backgrounds and ages, and I tailored my teaching methods to meet their individual needs. I was responsible for planning interactive, intuitive and engaging lessons with a duration of two hours each on average, for group sizes ranging from 2 to 10. Finding ways to keep these mixed groups enganged and highly educational especially in evening lessons when many students were tired, posed challenges. I pursued a model where students did the majority of the talking in order to strengthen their skills, while i would correct mistakes, steer topics, ask questions and teach neccessary vocabulary. While initially difficult, I was able to adapt and provide effective lessons, which taught me a range of skills regarding not only teaching english itself but also being able to work with the needs of various people and being able to hold conversations in any situation. \n\nAside from this I put a lot of effort into integrating with the local community and understanding local day to day life. This experience allowed me to significantly develop my communication and teaching skills.'
  },
  {
    type: 'extracurricular',
    date: 'Jul 2025 - Jul 2025',
    title: 'Debla Cursos de Español',
    organisation: 'Spanish Language Course through Erasmus+',
    location: 'Málaga, Spain',
    description: ''
  },
  {
    type: 'internship',
    date: '2. June 2024 - 23. June 2024',
    title: 'Irish College of English',
    organisation: 'International Internship through Erasmus+',
    location: 'Dublin, Ireland',
    description: 'I participated in an Erasmus+ internship at the Irish College of English in Malahide, Dublin.',
    details: 'The college specialises both adult courses and junior summer camp programmes, both aimed to help foreign students or adults improve their English skills while learning more about Irish, and indirectly Anglosphere culture.\n\nI was tasked with a variety of responsibilities, including making marketing material for events to be posted on the company social media accounts, and assisting with organisatory tasks, though my main responsibility was to take student groups, both adult and junior, on tours to various locations in the wider Dublin region, during which I was not only responsible for transportation and managment but also had conversations with the students in english to help improve their conversational skills. This experience allowed me to develop my communication and teaching skills while contributing to and integrating with the local community.',
    images: [
      {
        src: 'images/ice-dublin-group.jpeg',
        alt: 'One of my groups of students at the Irish College of English in Dublin'
      }
    ]
  },
  {
    type: 'internship',
    date: '26. Feb 2024 - 17. May 2024',
    title: 'Kontron AIS',
    organisation: '90763 Fürth',
    location: 'Fürth, Germany',
    description: 'B2B Sales & Warehousing – Internship during vocational training at FOS Fürth'
  },
  {
    type: 'internship',
    date: '18. Sep 2023 — 21. Jan 2024',
    title: 'Righthead (Webhelp Group)',
    organisation: '90402 Nuremberg',
    location: 'Nuremberg, Germany',
    description: 'Personnel Services – Internship during vocational training at FOS Fürth'
  },
  {
    type: 'internship',
    date: 'Oct 2022 — Jan 2023',
    title: 'Hattech Carstyling Co. KG',
    organisation: '97318 Kitzingen',
    location: 'Kitzingen, Germany',
    description: 'Automotive Mechatronics – Internship during vocational training at FOS Kitzingen'
  },

  // EDUCATION
  {
    type: 'education',
    date: 'Oct 2026 — Present',
    title: 'Friedrich-Alexander University Erlangen–Nuremberg',
    organisation: 'Economics',
    location: 'Nuremberg, Germany',
    description: "Bachelor's degree in Economics with a focus on Economics and Data Science. Expected graduation: 2029"
  },
  {
    type: 'education',
    date: 'Sep 2023 — Jul 2026',
    title: 'Staatliche Fachoberschule Fürth',
    organisation: 'International Business',
    location: 'Fürth, Germany',
    description: 'General higher education entrance qualification, completed on 11 July 2026 with an overall grade average of 2.3.'
  },
  {
    type: 'education',
    date: 'Sep 2022 — Mar 2023',
    title: 'Staatliche Fachoberschule Kitzingen',
    organisation: 'Engineering',
    location: 'Kitzingen, Germany',
    description: 'Studied Engineering at the Fachoberschule.'
  },
  {
    type: 'education',
    date: 'Mar 2020 — Jul 2022',
    title: 'Staatliche Realschule Kitzingen',
    organisation: 'Track IIA (French)',
    location: 'Kitzingen, Germany',
    description: 'Obtained the German Realschule leaving certificate in 2022.'
  },
  {
    type: 'education',
    date: 'Sep 2018 — Feb 2020',
    title: 'Armin-Knab-Gymnasium Kitzingen',
    organisation: 'Gymnasium',
    location: 'Kitzingen, Germany',
    description: 'Attended school until moving to Germany.'
  },
  {
    type: 'education',
    date: 'Sep 2016 — Jul 2018',
    title: "Gunnersbury Boys' School",
    organisation: 'Secondary school',
    location: 'London, UK',
    description: 'Attended school in London.'
  },
  {
    type: 'education',
    date: 'Sep 2009 — Jul 2016',
    title: 'Westminster Cathedral R.C. Primary School',
    organisation: 'Primary school',
    location: 'London, UK',
    description: 'Primary education in London.'
  }
  ],
  de: [
    // BERUFLICHER WERDEGANG
    {
      type: 'work',
      date: 'Nov. 2023 – 16. Aug. 2026',
      title: 'Chillers Bar & Restaurant',
      organisation: 'Servicekraft (Minijob)',
    location: 'Nuremberg, Germany',
      description: 'Bei Chillers Bar & Restaurant war ich etwa drei Jahre als Servicekraft tätig. Zu meinen Aufgaben gehörten die Betreuung der Gäste, die Aufnahme von Bestellungen und die Unterstützung eines reibungslosen Ablaufs im Restaurant. Diese Position hat meine Fähigkeiten im Kundenservice gestärkt und mich gelehrt, effektiv in einem dynamischen Umfeld zu arbeiten.'
    },
    {
      type: 'work',
      date: 'Mai 2023 – Okt. 2023',
      title: 'Restaurant Zum Spiesgesellen',
      organisation: 'Servicekraft (Teilzeit)',
      location: 'Nürnberg, Deutschland',
      description: 'Bei Restaurant Zum Spiesgesellen war ich als Servicekraft tätig.'
    },

    // PRAKTIKA & EHRENAMTLICHE TÄTIGKEITEN
    {
      type: 'volunteer',
      date: '18. Aug. 2026 – 21. Sep. 2026',
      title: 'English Spoken Café Findikzade & Kadıköy',
      organisation: 'Lehrer',
      location: 'Istanbul, Türkei',
      description: 'Ich engagierte mich ehrenamtlich als Lehrer in den English Spoken Cafés in Findikzade und Kadıköy in Istanbul. Dort half ich Lernenden durch interaktiven Unterricht und Gesprächsübungen dabei, ihre Englischkenntnisse zu verbessern. Meine Schülerinnen und Schüler hatten unterschiedliche Hintergründe und Altersgruppen, sodass ich meine Lehrmethoden an ihre individuellen Bedürfnisse anpasste. Diese Erfahrung hat meine Kommunikations- und Lehrfähigkeiten weiterentwickelt und mir ermöglicht, einen Beitrag zur lokalen Gemeinschaft zu leisten und mich in sie zu integrieren.'
    },
    {
      type: 'extracurricular',
      date: 'Juli 2025 – Juli 2025',
      title: 'Debla Cursos de Español',
      organisation: 'Spanisch-Sprachkurs im Rahmen von Erasmus+',
      location: 'Málaga, Spanien',
      description: ''
    },
    {
      type: 'internship',
      date: '2. Juni 2024 – 23. Juni 2024',
      title: 'Irish College of English',
      organisation: 'Auslandspraktikum durch Erasmus+',
      location: 'Dublin, Irland',
      description: 'Ich absolvierte ein Erasmus+-Auslandspraktikum am Irish College of English in Malahide, Dublin.',
      details: 'Das College bietet sowohl Kurse für Erwachsene als auch Sommerprogramme für jüngere Teilnehmende an. Beide richten sich an ausländische Schülerinnen, Schüler und Erwachsene, die ihre Englischkenntnisse verbessern und gleichzeitig mehr über die irische und indirekt auch die anglophone Kultur erfahren möchten.\n\nZu meinen Aufgaben gehörten unter anderem die Erstellung von Marketingmaterial für Veranstaltungen zur Veröffentlichung auf den Social-Media-Kanälen des Unternehmens sowie die Unterstützung bei organisatorischen Aufgaben. Meine Hauptaufgabe war jedoch die Begleitung von Gruppen erwachsener und jüngerer Lernender auf Ausflügen zu verschiedenen Orten in der Region Dublin. Dabei war ich nicht nur für die Organisation der An- und Abreise verantwortlich, sondern führte auch Gespräche auf Englisch mit den Teilnehmenden, um ihre Konversationsfähigkeiten zu fördern. Diese Erfahrung hat meine Kommunikations- und Organisationsfähigkeiten weiterentwickelt und mir ermöglicht, einen Beitrag zur lokalen Gemeinschaft zu leisten und mich in sie zu integrieren.',
      images: [
        {
          src: 'images/ice-dublin-group.jpeg',
          alt: 'Eine meiner Gruppen von Lernenden am Irish College of English in Dublin'
        }
      ]
    },
    {
      type: 'internship',
      date: '26. Feb. 2024 – 17. Mai 2024',
      title: 'Kontron AIS',
      organisation: '90763 Fürth',
      location: 'Fürth, Deutschland',
      description: 'B2B-Vertrieb & Lager – Praktikum während der Ausbildung an der FOS Fürth'
    },
    {
      type: 'internship',
      date: '18. Sep. 2023 – 21. Jan. 2024',
      title: 'Righthead (Webhelp Group)',
      organisation: '90402 Nürnberg',
      location: 'Nürnberg, Deutschland',
      description: 'Personaldienstleistung – Praktikum während der Ausbildung an der FOS Fürth'
    },
    {
      type: 'internship',
      date: 'Okt. 2022 – Jan. 2023',
      title: 'Hattech Carstyling Co. KG',
      organisation: '97318 Kitzingen',
      location: 'Kitzingen, Deutschland',
      description: 'KFZ-Mechatronik – Praktikum während der Ausbildung an der FOS Kitzingen'
    },

    // SCHULISCHER WERDEGANG
    {
      type: 'education',
      date: 'Okt. 2026 – Heute',
      title: 'Friedrich-Alexander-Universität Erlangen-Nürnberg',
      organisation: 'Wirtschaftswissenschaften',
      location: 'Nürnberg, Deutschland',
      description: 'Bachelorstudium der Wirtschaftswissenschaften mit Schwerpunkt auf Volkswirtschaftslehre und Data Science. Voraussichtlicher Abschluss: 2029.'
    },
    {
      type: 'education',
      date: 'Sep. 2023 – Juli 2026',
      title: 'Staatliche Fachoberschule Fürth',
      organisation: 'Internationale Wirtschaft',
      location: 'Fürth, Deutschland',
      description: 'Allgemeine Hochschulreife, Abschluss am 11.07.2026 mit einem Notendurchschnitt von 2,3.'
    },
    {
      type: 'education',
      date: 'Sep. 2022 – März 2023',
      title: 'Staatliche Fachoberschule Kitzingen',
      organisation: 'Technik',
      location: 'Kitzingen, Deutschland',
      description: 'Ausbildung an der Fachoberschule im Bereich Technik.'
    },
    {
      type: 'education',
      date: 'März 2020 – Juli 2022',
      title: 'Staatliche Realschule Kitzingen',
      organisation: 'Zweig IIA (Französisch)',
      location: 'Kitzingen, Deutschland',
      description: 'Realschulabschluss 2022 erworben.'
    },
    {
      type: 'education',
      date: 'Sep. 2018 – Feb. 2020',
      title: 'Armin-Knab-Gymnasium Kitzingen',
      organisation: 'Gymnasium',
      location: 'Kitzingen, Deutschland',
      description: 'Schulbesuch bis zum Umzug nach Deutschland.'
    },
    {
      type: 'education',
      date: 'Sep. 2016 – Juli 2018',
      title: "Gunnersbury Boys' School",
      organisation: 'Sekundarschule',
      location: 'London, Vereinigtes Königreich',
      description: 'Schulbesuch in London.'
    },
    {
      type: 'education',
      date: 'Sep. 2009 – Juli 2016',
      title: 'Westminster Cathedral R.C. Primary School',
      organisation: 'Grundschule',
      location: 'London, Vereinigtes Königreich',
      description: 'Grundschulbildung in London.'
    }
  ],
};

const cvEntries = cvEntriesByLocale[siteLocale] || cvEntriesByLocale.en;
