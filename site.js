/* Shared page rendering. Text is supplied exclusively by site-content.js. */
const setText = (selector, value) => {
  const element = document.querySelector(selector);
  if (element) element.textContent = value;
  return element;
};

const createLink = (href, label) => {
  const link = document.createElement('a');
  link.href = href;
  link.textContent = label;
  return link;
};

const localeHref = (href) => {
  if (siteLocale === 'en' || href.endsWith('.pdf')) return href;
  const [path, fragment] = href.split('#');
  const separator = path.includes('?') ? '&' : '?';
  return `${path}${separator}lang=${encodeURIComponent(siteLocale)}${fragment ? `#${fragment}` : ''}`;
};

const languageSwitchHref = (targetLocale) => {
  const url = new URL(window.location.href);
  if (targetLocale === 'en') url.searchParams.delete('lang');
  else url.searchParams.set('lang', targetLocale);
  return `${url.pathname}${url.search}${url.hash}`;
};

const renderHome = () => {
  const copy = siteText.pages.home;
  setText('#intro-eyebrow', copy.eyebrow);
  setText('#intro-title', siteText.site.name);
  setText('#intro-description', copy.intro);
  const portrait = document.querySelector('.intro-portrait');
  if (portrait) {
    portrait.src = siteText.site.profileImage;
    portrait.alt = siteText.site.name;
  }
  const contact = document.querySelector('#intro-contact');
  if (contact) {
    contact.replaceChildren(document.createTextNode(copy.contactPrefix), document.createElement('br'), createLink(`mailto:${siteText.site.email}`, siteText.site.email));
  }
  const scrollPrompt = document.querySelector('.scroll-prompt');
  if (scrollPrompt) {
    scrollPrompt.setAttribute('aria-label', copy.scrollLabel);
    scrollPrompt.querySelector('span').textContent = copy.scrollPrompt;
  }
  setText('#cv-eyebrow', copy.cvEyebrow);
  setText('#cv-title-text', copy.cvTitle);
  setText('#cv-title-emphasis', copy.cvTitleEmphasis);
  setText('#cv-description', copy.cvDescription);
  const timeline = document.querySelector('#timeline');
  if (timeline) timeline.setAttribute('aria-label', siteText.timeline.timelineLabel);

  const key = document.querySelector('#timeline-key');
  if (key) {
    key.setAttribute('aria-label', siteText.timeline.categoryLabel);
    key.replaceChildren();
    [['work', siteText.timeline.workColumn, true], ['education', siteText.timeline.educationColumn, false]].forEach(([type, label, selected]) => {
      const button = document.createElement('button');
      button.className = `${type}-key`;
      button.type = 'button';
      button.setAttribute('aria-controls', 'timeline');
      button.setAttribute('aria-pressed', String(selected));
      button.textContent = label;
      key.append(button);
    });
  }
  const filters = document.querySelector('#timeline-filters');
  if (filters) {
    filters.setAttribute('aria-label', siteText.timeline.filterLabel);
    filters.replaceChildren();
    ['hireme', 'work', 'internship', 'volunteer', 'education', 'extracurricular'].forEach((tag) => {
      const button = document.createElement('button');
      const tick = document.createElement('span');
      tick.setAttribute('aria-hidden', 'true');
      button.className = `timeline-filter filter-${tag}`;
      button.type = 'button';
      button.dataset.filter = tag;
      button.setAttribute('aria-pressed', 'true');
      button.append(tick, document.createTextNode(siteText.tags[tag]));
      filters.append(button);
    });
  }
  const traditionalCvNote = document.querySelector('#traditional-cv-note');
  if (traditionalCvNote) {
    traditionalCvNote.replaceChildren(document.createTextNode(copy.traditionalCvPrefix), createLink(`mailto:${siteText.site.email}`, siteText.site.email));
  }
};

const renderAbout = () => {
  const copy = siteText.pages.about;
  setText('#about-title', copy.heading);
  const body = document.querySelector('#about-copy');
  if (body) {
    const item = document.createElement('p');
    item.className = 'lead';
    copy.paragraphs.forEach((paragraph, index) => {
      item.append(document.createTextNode(paragraph));
      const breakCount = copy.paragraphBreaks?.[index] || 0;
      for (let count = 0; count < breakCount; count += 1) item.append(document.createElement('br'));
    });
    body.replaceChildren(item);
  }
};

const renderProjects = () => {
  const copy = siteText.pages.projects;
  setText('#projects-eyebrow', copy.eyebrow);
  setText('#projects-title', copy.title);
  setText('#projects-description', copy.description);
  const grid = document.querySelector('#project-grid');
  if (!grid) return;
  grid.replaceChildren(...copy.tiles.filter((project) => !project.hidden).map((project) => {
    const tile = document.createElement('a');
    tile.className = 'project-tile';
    tile.href = project.href || '#';
    const image = document.createElement('img');
    image.className = 'project-tile__image';
    image.src = project.image;
    image.alt = project.alt;
    const content = document.createElement('span');
    content.className = 'project-tile__content';
    const title = document.createElement('strong');
    title.textContent = project.title;
    const description = document.createElement('span');
    description.textContent = project.description;
    const prompt = document.createElement('span');
    prompt.className = 'project-tile__prompt';
    prompt.textContent = copy.viewProject;
    content.append(title, description, prompt);
    tile.append(image, content);
    return tile;
  }));
};

const renderPrivacy = () => {
  const copy = siteText.pages.privacy;
  setText('#privacy-eyebrow', copy.eyebrow);
  setText('#privacy-title', copy.heading);
  setText('#privacy-updated', copy.updated);
  const content = document.querySelector('#privacy-content');
  if (!content) return;
  content.replaceChildren(...copy.sections.map((section) => {
    const element = document.createElement('section');
    const heading = document.createElement('h2');
    heading.textContent = section.heading;
    element.append(heading, ...section.paragraphs.map((paragraph) => {
      const text = document.createElement('p');
      text.textContent = paragraph;
      return text;
    }));
    return element;
  }));
  const microsoft = document.createElement('p');
  const link = createLink('https://privacy.microsoft.com/en-gb/privacystatement', copy.microsoftPrivacyLabel);
  link.target = '_blank';
  link.rel = 'noopener noreferrer';
  microsoft.append(link);
  content.append(microsoft);
};

const page = document.body.dataset.page;
const pageCopy = siteText.pages[page];
document.documentElement.lang = siteText.language;
if (pageCopy?.title) document.title = pageCopy.title;
const description = document.querySelector('meta[name="description"]');
if (description && pageCopy?.description) description.content = pageCopy.description;
if (page === 'home') renderHome();
if (page === 'about') renderAbout();
if (page === 'projects') renderProjects();
if (page === 'privacy') renderPrivacy();
