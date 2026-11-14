window.Helcoo = window.Helcoo || {};

(function () {
  const storageKey = 'helcoo-favorites';
  let favorites = [];

  function readFavorites() {
    try {
      const saved = window.localStorage.getItem(storageKey);
      const parsed = saved ? JSON.parse(saved) : [];
      return Array.isArray(parsed) ? parsed.filter(function (id) {
        return typeof id === 'string';
      }) : [];
    } catch (error) {
      window.Helcoo.showToast(window.Helcoo.translate('storageUnavailable'));
      return [];
    }
  }

  function saveFavorites() {
    try {
      window.localStorage.setItem(storageKey, JSON.stringify(favorites));
      return true;
    } catch (error) {
      window.Helcoo.showToast(window.Helcoo.translate('storageUnavailable'));
      return false;
    }
  }

  function propertyFor(id) {
    return window.Helcoo.properties.find(function (item) {
      return item.id === id;
    });
  }

  function updateButtons() {
    document.querySelectorAll('[data-favorite-id]').forEach(function (button) {
      const id = button.dataset.favoriteId;
      const item = propertyFor(id);
      const active = favorites.indexOf(id) !== -1;
      const isArabic = window.Helcoo.language === 'ar';
      const title = item ? (isArabic ? item.titleAr : item.title) : '';
      const label = active
        ? (isArabic ? 'إزالة ' + title + ' من المفضلة' : 'Remove ' + title + ' from favourites')
        : (isArabic ? 'أضف ' + title + ' إلى المفضلة' : 'Save ' + title);

      button.setAttribute('aria-pressed', String(active));
      button.setAttribute('aria-label', label);
      button.classList.toggle('is-saved', active);
    });
  }

  function initFavorites() {
    favorites = readFavorites();
    updateButtons();

    document.addEventListener('click', function (event) {
      const button = event.target.closest('[data-favorite-id]');
      if (!button) return;

      const id = button.dataset.favoriteId;
      const wasSaved = favorites.indexOf(id) !== -1;
      favorites = wasSaved
        ? favorites.filter(function (favoriteId) { return favoriteId !== id; })
        : favorites.concat(id);

      if (!saveFavorites()) {
        favorites = wasSaved
          ? favorites.concat(id)
          : favorites.filter(function (favoriteId) { return favoriteId !== id; });
        return;
      }

      const item = propertyFor(id);
      const isArabic = window.Helcoo.language === 'ar';
      const name = item ? (isArabic ? item.titleAr : item.title) : '';
      const message = wasSaved
        ? (isArabic ? 'تمت إزالة ' + name + ' من المفضلة' : name + ' removed from favourites')
        : (isArabic ? 'تمت إضافة ' + name + ' إلى المفضلة' : name + ' saved to favourites');
      updateButtons();
      window.Helcoo.showToast(message);
    });

    document.addEventListener('languagechange', updateButtons);
  }

  window.Helcoo.initFavorites = initFavorites;
}());
