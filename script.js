// Save theme to localStorage and apply it
function saveTheme(theme) {
  localStorage.setItem('preferredTheme', theme);
  applyTheme(theme);
}

// Apply the theme by changing the body's class
function applyTheme(theme) {
  document.body.className = ''; // Remove all classes
  if (theme) {
    document.body.classList.add(theme);
  }
}

// Load saved theme on page load
window.onload = function () {
  const savedTheme = localStorage.getItem('preferredTheme');
  if (savedTheme) {
    applyTheme(savedTheme);
    document.getElementById('themeSelector').value = savedTheme;
  }
};

// Trigger animation on button click
document.getElementById('animateBtn').addEventListener('click', () => {
  const btn = document.getElementById('animateBtn');
  btn.classList.remove('bounce'); // Reset
  void btn.offsetWidth;           // Trigger reflow
  btn.classList.add('bounce');
});

// Save theme on change
document.getElementById('themeSelector').addEventListener('change', (e) => {
  saveTheme(e.target.value);
});
