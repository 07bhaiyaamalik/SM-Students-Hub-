const themeToggle = document.getElementById("themeToggle");
const searchInput = document.getElementById("searchInput");
const cards = [...document.querySelectorAll(".resource-card")];
const emptyState = document.getElementById("emptyState");
const searchMessage = document.getElementById("searchMessage");
const installButton = document.getElementById("installButton");
const toast = document.getElementById("toast");
const menuToggle = document.getElementById("menuToggle");
const mainNav = document.getElementById("mainNav");

document.getElementById("year").textContent = new Date().getFullYear();

function showToast(message) {
  toast.textContent = message;
  toast.classList.add("show");
  window.setTimeout(() => toast.classList.remove("show"), 2400);
}

// Remember the selected appearance on this device.
const savedTheme = localStorage.getItem("sm-hub-theme");
if (savedTheme === "light") document.body.classList.add("light");
themeToggle.textContent = document.body.classList.contains("light") ? "☾" : "☀";

themeToggle.addEventListener("click", () => {
  document.body.classList.toggle("light");
  const isLight = document.body.classList.contains("light");
  localStorage.setItem("sm-hub-theme", isLight ? "light" : "dark");
  themeToggle.textContent = isLight ? "☾" : "☀";
});

searchInput.addEventListener("input", () => {
  const query = searchInput.value.trim().toLowerCase();
  let shown = 0;
  cards.forEach(card => {
    const searchable = (card.dataset.search + " " + card.innerText).toLowerCase();
    const matches = searchable.includes(query);
    card.hidden = !matches;
    if (matches) shown++;
  });
  emptyState.hidden = shown !== 0;
  searchMessage.textContent = query ? `${shown} ${shown === 1 ? "category" : "categories"} found` : "";
});

menuToggle.addEventListener("click", () => {
  const isOpen = mainNav.classList.toggle("open");
  menuToggle.setAttribute("aria-expanded", String(isOpen));
});
mainNav.querySelectorAll("a").forEach(link => link.addEventListener("click", () => mainNav.classList.remove("open")));

// Register the service worker only on a secure origin (HTTPS or localhost).
if ("serviceWorker" in navigator && location.protocol !== "file:") {
  window.addEventListener("load", () => {
    navigator.serviceWorker.register("./service-worker.js")
      .then(() => console.log("SM Students Hub offline support is ready."))
      .catch(error => console.error("Service worker registration failed:", error));
  });
}

// Show the browser's native install prompt when it is available.
let installPrompt = null;
window.addEventListener("beforeinstallprompt", event => {
  event.preventDefault();
  installPrompt = event;
  installButton.hidden = false;
});
installButton.addEventListener("click", async () => {
  if (!installPrompt) {
    showToast("Use your browser menu and choose Install app or Add to Home screen.");
    return;
  }
  installPrompt.prompt();
  await installPrompt.userChoice;
  installPrompt = null;
  installButton.hidden = true;
});
window.addEventListener("appinstalled", () => {
  installButton.hidden = true;
  showToast("SM Students Hub has been installed!");
});
