/* Sitewide footer. Its copy lives in site-content.js. */
const injectFooter = () => {
  if (document.querySelector('.site-footer')) return;

  const footer = document.createElement('footer');
  footer.className = 'footer site-footer';
  [siteText.footer.address, siteText.footer.copyright].forEach((text) => {
    const item = document.createElement('div');
    item.textContent = text;
    footer.append(item);
  });
  const links = document.createElement('div');
  const privacy = document.createElement('a');
  privacy.href = localeHref('privacy.html');
  privacy.textContent = siteText.footer.privacyLabel;
  const settings = document.createElement('button');
  settings.type = 'button';
  settings.className = 'cookie-settings-link';
  settings.dataset.cookieSettings = '';
  settings.textContent = siteText.footer.manageCookies;
  links.append(privacy, document.createTextNode(' · '), settings);
  footer.append(links);

  const mount = document.querySelector('.page') || document.body;
  mount.append(footer);
};

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', injectFooter);
} else {
  injectFooter();
}
