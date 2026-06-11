const injectFooter = () => {
  if (document.querySelector('.site-footer')) return;

  const footerHtml = `
    <footer class="footer site-footer">
      <div>Impressum: Erik Kunz · Rangierbahnhof-Ausfahrbahnhof 1 · 90469 Nürnberg</div>
      <div>&copy; 2026</div>
    </footer>`;

  const mount = document.querySelector('.page') || document.body;
  mount.insertAdjacentHTML('beforeend', footerHtml);
};

const initFooter = () => {
  injectFooter();
};

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initFooter);
} else {
  initFooter();
}
