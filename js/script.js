// Toggle navbar menu
const menuToggle = document.getElementById('menu-toggle');
const navLinks = document.getElementById('nav-links');
menuToggle.addEventListener('click', () => {
  navLinks.classList.toggle('show');
});

// Theme switcher
const themeSwitcher = document.getElementById('theme-switcher');
themeSwitcher.addEventListener('click', () => {
  document.body.classList.toggle('dark-mode');
});
