const toggle = document.getElementById("darkModeToggle");
const icon = document.getElementById("siteIcon");

const savedDarkMode = localStorage.getItem("darkMode") === "true";
if (savedDarkMode) document.body.classList.add("dark-mode");

function updateIcon() {
  if (!toggle) return;
  if (document.body.classList.contains("dark-mode")) {
    toggle.textContent = "☀️";
    if (icon) icon.src = "img/trillium-dark.png";
  } else {
    toggle.textContent = "🌙";
    if (icon) icon.src = "img/trillium-light.png";
  }
}

updateIcon();

if (toggle) {
  toggle.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");
    localStorage.setItem(
      "darkMode",
      document.body.classList.contains("dark-mode"),
    );
    updateIcon();
  });
}

const menuToggle = document.getElementById("menuToggle");
const sidebar = document.getElementById("sidebar");

if (menuToggle && sidebar) {
  menuToggle.addEventListener("click", (e) => {
    e.stopPropagation();
    sidebar.classList.toggle("open");
  });

  document.addEventListener("click", (e) => {
    if (!sidebar.contains(e.target) && !menuToggle.contains(e.target)) {
      sidebar.classList.remove("open");
    }
  });
}
