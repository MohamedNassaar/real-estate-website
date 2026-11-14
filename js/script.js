(function () {
  const page = document.body.dataset.page;
  const rootPath = document.body.dataset.root || './';
  const properties = window.Helcoo.properties;

  function renderPropertyPage() {
    const grid = document.getElementById('property-grid');
    const selected = page === 'home'
      ? properties.filter(function (item) { return item.featured; })
      : properties;
    const detailPath = 'pages/property-details.html';

    window.Helcoo.renderPropertyCards(grid, selected, rootPath, detailPath);

    if (page === 'home') {
      window.Helcoo.initSearch({ redirectUrl: 'pages/properties.html' });
    } else {
      window.Helcoo.initSearch();
    }
  }

  function renderDetailsPage() {
    const container = document.getElementById('property-detail');
    if (!container) return;

    const requestedId = new URLSearchParams(window.location.search).get('id');
    const property = properties.find(function (item) {
      return item.id === requestedId;
    });

    if (!property) {
      container.innerHTML = '<div class="not-found"><h1 data-i18n="propertyNotFound"></h1>' +
        '<a class="button button-dark" href="properties.html" data-i18n="backToProperties"></a></div>';
      return;
    }

    window.Helcoo.renderPropertyDetail(container, property, rootPath);
    const related = properties.filter(function (item) {
      return item.id !== property.id;
    }).slice(0, 3);
    window.Helcoo.renderPropertyCards(
      document.getElementById('related-properties'),
      related,
      rootPath,
      'pages/property-details.html'
    );
  }

  function initContactForm() {
    const form = document.getElementById('contact-form');
    if (!form) return;

    form.addEventListener('submit', function (event) {
      event.preventDefault();
      const values = new FormData(form);
      const name = String(values.get('name') || '').trim();
      const email = String(values.get('email') || '').trim();
      const phone = String(values.get('phone') || '').trim();
      const message = String(values.get('message') || '').trim();
      const subject = encodeURIComponent('Website enquiry from ' + name);
      const body = encodeURIComponent(
        'Name: ' + name + '\nEmail: ' + email + '\nPhone: ' + (phone || 'Not provided') +
        '\n\n' + message
      );

      window.location.href = 'mailto:hello@helcoo.ae?subject=' + subject + '&body=' + body;
    });
  }

  function init() {
    if (page === 'home' || page === 'properties') renderPropertyPage();
    if (page === 'details') renderDetailsPage();

    window.Helcoo.applyLanguage();
    window.Helcoo.initFavorites();
    window.Helcoo.initRevealAnimations();
    initContactForm();
  }

  init();
}());
