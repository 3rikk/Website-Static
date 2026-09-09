/* Sitewide navigation. Labels and links live in site-content.js. */
const injectMenu = () => {
  if (document.querySelector('.site-header')) return;

  const header = document.createElement('header');
  header.className = 'top site-header';
  const home = document.createElement('a');
  home.className = 'site-home';
  home.href = localeHref('index.html');
  home.textContent = siteText.site.name;

  const nav = document.createElement('nav');
  nav.id = 'site-navigation';
  nav.className = 'menu-tabs';
  nav.setAttribute('aria-label', siteText.navigationLabel);
  siteText.navigation.forEach(({ href, label }) => {
    const link = document.createElement('a');
    link.href = localeHref(href);
    link.textContent = label;
    nav.append(link);
  });
  const languageSwitch = document.createElement('a');
  languageSwitch.className = 'language-switcher';
  languageSwitch.href = languageSwitchHref(siteText.languageSwitch.target);
  languageSwitch.setAttribute('aria-label', siteText.languageSwitch.ariaLabel);
  languageSwitch.textContent = siteText.languageSwitch.label;
  nav.append(languageSwitch);

  const menuToggle = document.createElement('button');
  menuToggle.className = 'mobile-menu-toggle';
  menuToggle.type = 'button';
  menuToggle.setAttribute('aria-controls', nav.id);
  menuToggle.setAttribute('aria-expanded', 'false');
  menuToggle.setAttribute('aria-label', siteText.mobileMenu.openLabel);
  for (let index = 0; index < 3; index += 1) menuToggle.append(document.createElement('span'));

  const closeMenu = () => {
    header.classList.remove('is-menu-open');
    menuToggle.setAttribute('aria-expanded', 'false');
    menuToggle.setAttribute('aria-label', siteText.mobileMenu.openLabel);
  };
  menuToggle.addEventListener('click', () => {
    const isOpen = header.classList.toggle('is-menu-open');
    menuToggle.setAttribute('aria-expanded', String(isOpen));
    menuToggle.setAttribute('aria-label', isOpen ? siteText.mobileMenu.closeLabel : siteText.mobileMenu.openLabel);
  });
  nav.querySelectorAll('a').forEach((link) => link.addEventListener('click', closeMenu));
  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') closeMenu();
  });

  header.append(home, menuToggle, nav);
  const mount = document.querySelector('.page') || document.body;
  mount.prepend(header);
};

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', injectMenu);
} else {
  injectMenu();
}
