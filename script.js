// Theme toggle script

function toggleTheme() {
  const body = document.body;
  const isDark = body.classList.contains('dark');
  body.classList.toggle('dark', !isDark);
  body.classList.toggle('light', isDark);
  // store preference
  localStorage.setItem('theme', !isDark ? 'dark' : 'light');
}

// On page load, apply saved theme or default to light
document.addEventListener('DOMContentLoaded', () => {
  const savedTheme = localStorage.getItem('theme');
  if (savedTheme === 'dark') {
    document.body.classList.add('dark');
  } else {
    document.body.classList.add('light');
  }
});