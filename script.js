const searchForm = document.getElementById('search-form');
const propertyCards = [...document.querySelectorAll('.property-card')];
const emptyState = document.getElementById('empty-state');
const resultsCount = document.getElementById('results-count');
const toast = document.getElementById('toast');
const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');
const propertyDialog = document.getElementById('property-dialog');
let toastTimer;

function showToast(message) {
  toast.textContent = message;
  toast.classList.add('show');
  window.clearTimeout(toastTimer);
  toastTimer = window.setTimeout(() => toast.classList.remove('show'), 2600);
}

function applyFilters({ scroll = false } = {}) {
  const location = document.getElementById('location').value;
  const type = document.getElementById('type').value;
  const budget = document.getElementById('budget').value;
  let visible = 0;

  propertyCards.forEach((card) => {
    const matches = (location === 'all' || card.dataset.location === location)
      && (type === 'all' || card.dataset.type === type)
      && (budget === 'all' || Number(card.dataset.price) <= Number(budget));
    card.hidden = !matches;
    if (matches) visible += 1;
  });

  emptyState.hidden = visible !== 0;
  resultsCount.textContent = `${visible} ${visible === 1 ? 'home' : 'homes'} matching your search`;
  if (scroll) {
    const behavior = window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth';
    document.getElementById('properties').scrollIntoView({ behavior });
  }
  return visible;
}

searchForm.addEventListener('submit', (event) => {
  event.preventDefault();
  const visible = applyFilters({ scroll: true });
  showToast(visible ? `Found ${visible} ${visible === 1 ? 'home' : 'homes'} for you` : 'No exact matches. Try adjusting your filters.');
});

document.getElementById('reset-filters').addEventListener('click', () => {
  searchForm.reset();
  const visible = applyFilters();
  showToast(`Showing all ${visible} featured homes`);
});

// Keep saved properties between visits when browser storage is available.
const favouritesStorageKey = 'helcoo-favourites';
const savedPropertyIds = new Set();
let favouritesPersistent = true;
try {
  const storedFavourites = window.localStorage.getItem(favouritesStorageKey);
  if (storedFavourites) {
    const parsedFavourites = JSON.parse(storedFavourites);
    if (Array.isArray(parsedFavourites)) {
      parsedFavourites.forEach((propertyId) => {
        if (typeof propertyId === 'string') savedPropertyIds.add(propertyId);
      });
    } else {
      favouritesPersistent = false;
    }
  }
} catch {
  favouritesPersistent = false;
}

propertyCards.forEach((card, index) => {
  const button = card.querySelector('.heart');
  const propertyId = `${card.dataset.location}-${index}`;
  button.dataset.propertyId = propertyId;
  const isSaved = savedPropertyIds.has(propertyId);
  button.setAttribute('aria-pressed', String(isSaved));
  button.textContent = isSaved ? '♥' : '♡';
  button.addEventListener('click', () => {
    const shouldSave = button.getAttribute('aria-pressed') !== 'true';
    button.setAttribute('aria-pressed', String(shouldSave));
    button.textContent = shouldSave ? '♥' : '♡';
    if (shouldSave) savedPropertyIds.add(propertyId);
    else savedPropertyIds.delete(propertyId);
    try {
      window.localStorage.setItem(favouritesStorageKey, JSON.stringify([...savedPropertyIds]));
      favouritesPersistent = true;
    } catch {
      favouritesPersistent = false;
    }
    const message = shouldSave ? 'Home saved to your favourites' : 'Home removed from your favourites';
    showToast(favouritesPersistent ? message : `${message} for this visit only; browser storage is unavailable.`);
  });
});

// Community tiles apply the matching area filter and take visitors to the listings.
document.querySelectorAll('[data-area]').forEach((areaButton) => {
  areaButton.addEventListener('click', () => {
    document.getElementById('location').value = areaButton.dataset.area;
    document.getElementById('type').value = 'all';
    document.getElementById('budget').value = 'all';
    const visible = applyFilters({ scroll: true });
    showToast(`${visible} ${visible === 1 ? 'home' : 'homes'} in ${areaButton.dataset.area}`);
  });
});

// Property details are shown in an accessible native dialog.
propertyCards.forEach((card) => {
  card.querySelector('.details-button').addEventListener('click', () => {
    const title = card.dataset.title;
    document.getElementById('dialog-title').textContent = title;
    document.getElementById('dialog-location').textContent = `${card.dataset.type.toUpperCase()} · ${card.dataset.location.toUpperCase()}`;
    document.getElementById('dialog-description').textContent = card.dataset.description;
    const stats = document.getElementById('dialog-stats');
    const statLabels = [`${card.dataset.beds} bedrooms`, `${card.dataset.baths} bathrooms`, `${card.dataset.size} sq ft`];
    stats.replaceChildren(...statLabels.map((label) => {
      const item = document.createElement('span');
      item.textContent = label;
      return item;
    }));
    document.getElementById('dialog-price').textContent = card.querySelector('.price').textContent;
    document.getElementById('dialog-enquire').href = `mailto:hello@helcoo.ae?subject=${encodeURIComponent(`Enquiry: ${title}`)}`;
    propertyDialog.showModal();
  });
});

document.querySelector('.dialog-close').addEventListener('click', () => propertyDialog.close());
propertyDialog.addEventListener('click', (event) => {
  if (event.target === propertyDialog) propertyDialog.close();
});

menuToggle.addEventListener('click', () => {
  const isOpen = navLinks.classList.toggle('open');
  menuToggle.setAttribute('aria-expanded', String(isOpen));
  menuToggle.setAttribute('aria-label', isOpen ? 'Close navigation' : 'Open navigation');
});
navLinks.querySelectorAll('a').forEach((link) => {
  link.addEventListener('click', () => {
    navLinks.classList.remove('open');
    menuToggle.setAttribute('aria-expanded', 'false');
    menuToggle.setAttribute('aria-label', 'Open navigation');
  });
});

document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape' && navLinks.classList.contains('open')) {
    navLinks.classList.remove('open');
    menuToggle.setAttribute('aria-expanded', 'false');
    menuToggle.setAttribute('aria-label', 'Open navigation');
    menuToggle.focus();
  }
});

document.getElementById('year').textContent = new Date().getFullYear();
applyFilters();
