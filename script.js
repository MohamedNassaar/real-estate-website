const form = document.getElementById("search-form");
const cards = [...document.querySelectorAll(".property-card")];
const emptyState = document.getElementById("empty-state");
const toast = document.getElementById("toast");
let toastTimer;

function showToast(message) {
  toast.textContent = message;
  toast.classList.add("show");
  window.clearTimeout(toastTimer);
  toastTimer = window.setTimeout(() => toast.classList.remove("show"), 2800);
}

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const location = document.getElementById("location").value;
  const type = document.getElementById("type").value;
  const budget = document.getElementById("budget").value;
  let visible = 0;

  cards.forEach((card) => {
    const matches = (location === "all" || card.dataset.location === location)
      && (type === "all" || card.dataset.type === type)
      && (budget === "all" || Number(card.dataset.price) <= Number(budget));
    card.hidden = !matches;
    if (matches) visible += 1;
  });

  emptyState.style.display = visible ? "none" : "block";
  document.getElementById("properties").scrollIntoView({ behavior: "smooth" });
  if (visible) showToast(`${visible} ${visible === 1 ? "home" : "homes"} to explore`);
});

document.querySelectorAll(".heart").forEach((button) => {
  button.addEventListener("click", () => {
    const saved = button.getAttribute("aria-pressed") !== "true";
    button.setAttribute("aria-pressed", String(saved));
    button.textContent = saved ? "♥" : "♡";
    showToast(saved ? "Home saved to your favourites" : "Home removed from your favourites");
  });
});

document.querySelectorAll("[data-rent-link]").forEach((link) => {
  link.addEventListener("click", (event) => {
    event.preventDefault();
    showToast("Speak with our team about rental homes in Dubai.");
  });
});

const menuToggle = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");
menuToggle.addEventListener("click", () => {
  const isOpen = navLinks.classList.toggle("open");
  menuToggle.setAttribute("aria-expanded", String(isOpen));
});
navLinks.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    navLinks.classList.remove("open");
    menuToggle.setAttribute("aria-expanded", "false");
  });
});
document.getElementById("year").textContent = new Date().getFullYear();
