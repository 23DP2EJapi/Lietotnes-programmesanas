const body = document.body;
const toggle = document.getElementById('themeToggle');

if (toggle) {
  toggle.addEventListener('click', () => {
    body.classList.toggle('dark-mode');
    toggle.querySelector('span:last-child').textContent = body.classList.contains('dark-mode') ? 'Light mode' : 'Dark mode';
  });
}
