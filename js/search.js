window.Helcoo = window.Helcoo || {};

(function () {
  function showEmptyState(message) {
    const emptyState = document.getElementById('empty-state');
    if (!emptyState) return;
    emptyState.hidden = !message;
  }

  function setResultCount(count, visible, language) {
    const result = document.getElementById('results-count');
    if (!result) return;

    const number = function (value) {
      return new Intl.NumberFormat(language === 'ar' ? 'ar-u-nu-arab' : 'en-AE').format(value);
    };
    const en = visible === count
      ? number(count) + (count === 1 ? ' home' : ' homes')
      : number(visible) + ' of ' + number(count) + ' homes';
    const arabicCount = count === 0
      ? 'لا توجد منازل'
      : count === 1
        ? 'منزل واحد'
        : count === 2
          ? 'منزلان'
          : number(count) + ' منازل';
    const ar = visible === count
      ? arabicCount
      : number(visible) + ' من ' + number(count) + ' منازل';
    result.dataset.en = en;
    result.dataset.ar = ar;
    result.textContent = language === 'ar' ? ar : en;
  }

  function initSearch(options) {
    const form = document.getElementById('search-form');
    const grid = document.getElementById('property-grid');
    if (!form) return;

    const location = form.elements.namedItem('location');
    const type = form.elements.namedItem('type');
    const budget = form.elements.namedItem('budget');
    const properties = grid ? Array.from(grid.querySelectorAll('.property-card')) : [];
    const shouldRedirect = Boolean(options && options.redirectUrl);
    const params = new URLSearchParams(window.location.search);

    function setSelectFromQuery(select, key) {
      if (!select || !params.has(key)) return;
      const value = params.get(key);
      if (Array.from(select.options).some(function (option) { return option.value === value; })) {
        select.value = value;
      }
    }

    setSelectFromQuery(location, 'location');
    setSelectFromQuery(type, 'type');
    setSelectFromQuery(budget, 'budget');

    function updateResults() {
      const selectedLocation = location ? location.value : 'all';
      const selectedType = type ? type.value : 'all';
      const maximumPrice = budget && budget.value !== 'all' ? Number(budget.value) : Infinity;
      let visible = 0;

      properties.forEach(function (card) {
        const area = window.Helcoo.language === 'ar'
          ? card.dataset.locationAr
          : card.dataset.locationEn;
        const matchesLocation = selectedLocation === 'all' || area === selectedLocation ||
          card.dataset.locationEn === selectedLocation;
        const matchesType = selectedType === 'all' || card.dataset.type === selectedType;
        const matchesBudget = Number(card.dataset.price) <= maximumPrice;
        const isVisible = matchesLocation && matchesType && matchesBudget;

        card.hidden = !isVisible;
        if (isVisible) visible += 1;
      });

      setResultCount(properties.length, visible, window.Helcoo.language);
      showEmptyState(properties.length > 0 && visible === 0);
    }

    form.addEventListener('submit', function (event) {
      event.preventDefault();
      if (shouldRedirect) {
        const query = new URLSearchParams();
        if (location && location.value !== 'all') query.set('location', location.value);
        if (type && type.value !== 'all') query.set('type', type.value);
        if (budget && budget.value !== 'all') query.set('budget', budget.value);
        const suffix = query.toString();
        window.location.href = options.redirectUrl + (suffix ? '?' + suffix : '');
        return;
      }

      updateResults();
    });

    if (!shouldRedirect) {
      [location, type, budget].forEach(function (control) {
        if (control) control.addEventListener('change', updateResults);
      });
    }

    const reset = document.getElementById('reset-filters');
    if (reset) {
      reset.addEventListener('click', function () {
        if (location) location.value = 'all';
        if (type) type.value = 'all';
        if (budget) budget.value = 'all';
        updateResults();
      });
    }

    document.addEventListener('languagechange', updateResults);
    updateResults();
  }

  window.Helcoo.initSearch = initSearch;
}());
