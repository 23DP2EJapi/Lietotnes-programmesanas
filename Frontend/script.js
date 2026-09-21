const body = document.body;
const toggle = document.getElementById('themeToggle');

const updateToggleLabel = () => {
  const label = toggle?.querySelector('span:last-child');
  if (!label) return;
  label.textContent = body.classList.contains('dark-mode') ? 'Light mode' : 'Dark mode';
};

const applyTheme = (darkMode) => {
  body.classList.toggle('dark-mode', darkMode);
  localStorage.setItem('pennyswise-theme', darkMode ? 'dark' : 'light');
  updateToggleLabel();
};

const savedTheme = localStorage.getItem('pennyswise-theme');
if (savedTheme === 'dark') {
  applyTheme(true);
} else {
  applyTheme(false);
}

if (toggle) {
  toggle.addEventListener('click', () => {
    applyTheme(!body.classList.contains('dark-mode'));
  });
}
