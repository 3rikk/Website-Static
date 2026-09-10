/* Analytics remain off until a visitor actively chooses to enable them. */
const consentStorageKey = 'erik-kunz-cookie-consent';
const consentLifetime = 180 * 24 * 60 * 60 * 1000;
const clarityProjectId = 'ygccy3cyfy';

const getConsent = () => {
  try {
    const saved = JSON.parse(localStorage.getItem(consentStorageKey));
    if (!saved || Date.now() - saved.updatedAt > consentLifetime) return null;
    return saved.choice;
  } catch {
    return null;
  }
};

const saveConsent = (choice) => {
  localStorage.setItem(consentStorageKey, JSON.stringify({ choice, updatedAt: Date.now() }));
};

const loadClarity = () => {
  if (window.clarity || document.querySelector('[data-clarity-loader]')) return;
  window.clarity = window.clarity || function clarityQueue() { (window.clarity.q = window.clarity.q || []).push(arguments); };
  const script = document.createElement('script');
  script.async = true;
  script.src = `https://www.clarity.ms/tag/${clarityProjectId}`;
  script.dataset.clarityLoader = '';
  document.head.append(script);
};

const removeBanner = () => document.querySelector('.cookie-banner')?.remove();

const showBanner = () => {
  removeBanner();
  const copy = siteText.consent;
  const banner = document.createElement('aside');
  banner.className = 'cookie-banner';
  banner.setAttribute('role', 'dialog');
  banner.setAttribute('aria-label', copy.heading);
  banner.innerHTML = `<div><strong>${copy.heading}</strong><p>${copy.description}</p><a href="${localeHref('privacy.html')}">${copy.learnMore}</a></div><div class="cookie-banner__actions"><button type="button" data-consent="denied">${copy.reject}</button><button type="button" data-consent="granted">${copy.accept}</button></div>`;
  banner.querySelectorAll('[data-consent]').forEach((button) => button.addEventListener('click', () => {
    const choice = button.dataset.consent;
    saveConsent(choice);
    if (choice === 'granted') loadClarity();
    removeBanner();
  }));
  document.body.append(banner);
};

document.addEventListener('click', (event) => {
  if (event.target.closest('[data-cookie-settings]')) showBanner();
});

if (getConsent() === 'granted') loadClarity();
else if (!getConsent()) showBanner();
