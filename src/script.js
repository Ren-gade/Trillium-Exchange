const toggle = document.getElementById("darkModeToggle");

// Set initial icon
if (document.body.classList.contains("dark-mode")) {
  toggle.textContent = "☀️";
} else {
  toggle.textContent = "🌙";
}

toggle.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");

  // Switch icon
  if (document.body.classList.contains("dark-mode")) {
    toggle.textContent = "☀️"; // light mode icon
  } else {
    toggle.textContent = "🌙"; // dark mode icon
  }
});
