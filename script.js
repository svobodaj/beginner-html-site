const themeToggle = document.getElementById('theme-toggle');

themeToggle.addEventListener('click', () => {
  const isDark = document.documentElement.classList.toggle('dark-mode');
  themeToggle.textContent = isDark
    ? 'Switch to light mode'
    : 'Switch to dark mode';
});
