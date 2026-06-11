const injectMenu = () => {
  if (document.getElementById('menu-toggle')) return;

  const menuHtml = `
    <input type="checkbox" id="menu-toggle" class="menu-toggle">
    <div class="top">
      <div>Erik Kunz</div>
      <label for="menu-toggle" class="menu-button">Menu
        <div class="menu-icon"><span></span><span></span><span></span></div>
      </label>
    </div>
    <div class="menu-overlay" aria-hidden="true">
      <label for="menu-toggle" class="menu-backdrop"></label>
      <nav class="menu-list">
        <a href="index.html">Home</a>
        <a href="lebenslauf.pdf">CV</a>
        <a href="about.html">About Me</a>
      </nav>
    </div>`;

  const mount = document.querySelector('.page') || document.body;
  mount.insertAdjacentHTML('afterbegin', menuHtml);
};

const initMenu = () => {
  injectMenu();
};

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initMenu);
} else {
  initMenu();
}
