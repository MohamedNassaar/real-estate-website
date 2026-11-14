window.Helcoo = window.Helcoo || {};

(function () {
  const properties = [
    {
      id: 'marina-heights',
      title: 'Marina Heights, a brighter view',
      titleAr: 'مارينا هايتس، إطلالة أكثر إشراقًا',
      subtitle: 'A calm corner above the water',
      subtitleAr: 'ركن هادئ يطل على المياه',
      area: 'Dubai Marina',
      areaAr: 'دبي مارينا',
      type: 'Apartment',
      typeKey: 'apartment',
      typeAr: 'شقة',
      price: 2450000,
      beds: 2,
      baths: 2,
      size: 1280,
      image: 'assets/images/properties/property-1.jpg',
      imageAlt: 'Bright, contemporary apartment interior',
      imageAltAr: 'تصميم داخلي مشرق وعصري لشقة',
      badge: 'Just listed',
      badgeAr: 'أضيف حديثًا',
      description: 'A light-filled apartment with a calm outlook over the water and the energy of Dubai Marina close by.',
      descriptionAr: 'شقة مشرقة بإطلالة هادئة على المياه، وعلى مقربة من أجواء دبي مارينا النابضة بالحياة.',
      featured: true,
    },
    {
      id: 'opera-district',
      title: 'Opera District, all in the detail',
      titleAr: 'حي الأوبرا، أناقة في كل التفاصيل',
      subtitle: 'City living, with room to exhale',
      subtitleAr: 'حياة المدينة بمساحة للتنفس',
      area: 'Downtown Dubai',
      areaAr: 'وسط مدينة دبي',
      type: 'Apartment',
      typeKey: 'apartment',
      typeAr: 'شقة',
      price: 3850000,
      beds: 2,
      baths: 2,
      size: 1550,
      image: 'assets/images/properties/property-2.jpg',
      imageAlt: 'Elegant modern apartment living space',
      imageAltAr: 'مساحة معيشة أنيقة وعصرية في شقة',
      badge: 'Featured',
      badgeAr: 'مميز',
      description: 'A refined city residence in the heart of Downtown Dubai, with generous living spaces and an address close to the city landmarks.',
      descriptionAr: 'مسكن راقٍ في قلب وسط مدينة دبي، بمساحات رحبة وموقع قريب من أبرز معالم المدينة.',
      featured: true,
    },
    {
      id: 'palm-retreat',
      title: 'A little more space by the sea',
      titleAr: 'مساحة أوسع قليلًا بجانب البحر',
      subtitle: 'A private garden, a slower morning',
      subtitleAr: 'حديقة خاصة وصباح أكثر هدوءًا',
      area: 'Palm Jumeirah',
      areaAr: 'نخلة جميرا',
      type: 'Villa',
      typeKey: 'villa',
      typeAr: 'فيلا',
      price: 8900000,
      beds: 4,
      baths: 4,
      size: 3200,
      image: 'assets/images/properties/property-3.jpg',
      imageAlt: 'Luxury villa interior with natural finishes',
      imageAltAr: 'تصميم داخلي فاخر لفيلا بمواد طبيعية',
      badge: 'Rare find',
      badgeAr: 'فرصة نادرة',
      description: 'A spacious villa-inspired retreat with room to unwind, entertain and enjoy a slower pace by the sea.',
      descriptionAr: 'ملاذ واسع بطابع الفيلا، يوفر مساحة للاسترخاء واستقبال الضيوف والاستمتاع بإيقاع حياة أكثر هدوءًا بجانب البحر.',
      featured: true,
    },
    {
      id: 'courtyard-house',
      title: 'Courtyard House, Jumeirah',
      titleAr: 'منزل الفناء، جميرا',
      subtitle: 'A quiet retreat close to the coast',
      subtitleAr: 'ملاذ هادئ بالقرب من الساحل',
      area: 'Jumeirah',
      areaAr: 'جميرا',
      type: 'Townhouse',
      typeKey: 'townhouse',
      typeAr: 'تاون هاوس',
      price: 3250000,
      beds: 3,
      baths: 3,
      size: 1900,
      image: 'assets/images/properties/property-2.jpg',
      imageAlt: 'Warm contemporary townhouse interior',
      imageAltAr: 'تصميم داخلي دافئ وعصري لمنزل تاون هاوس',
      badge: 'New to market',
      badgeAr: 'عقار جديد في السوق',
      description: 'A welcoming townhouse with a quiet residential feel, a private courtyard and the coast within easy reach.',
      descriptionAr: 'منزل تاون هاوس بأجواء سكنية هادئة وفناء خاص، وعلى مسافة قريبة من الساحل.',
      featured: false,
    },
  ];

  function escapeHtml(value) {
    return String(value).replace(/[&<>"']/g, function (character) {
      return {
        '&': '&amp;',
        '<': '&lt;',
        '>': '&gt;',
        '"': '&quot;',
        "'": '&#39;',
      }[character];
    });
  }

  function number(value) {
    const locale = window.Helcoo.language === 'ar' ? 'ar-u-nu-arab' : 'en-AE';
    return new Intl.NumberFormat(locale).format(value);
  }

  function price(value) {
    const locale = window.Helcoo.language === 'ar' ? 'ar-AE-u-nu-arab' : 'en-AE';
    return new Intl.NumberFormat(locale, {
      style: 'currency',
      currency: 'AED',
      maximumFractionDigits: 0,
    }).format(value);
  }

  function stat(value, kind) {
    if (kind === 'size') {
      return window.Helcoo.language === 'ar'
        ? number(value) + ' قدم مربع'
        : number(value) + ' sq ft';
    }

    if (window.Helcoo.language === 'ar') {
      return number(value) + (kind === 'beds' ? ' غرف نوم' : ' حمامات');
    }

    return number(value) + (kind === 'beds' ? (value === 1 ? ' bed' : ' beds') : (value === 1 ? ' bath' : ' baths'));
  }

  function cardMarkup(item, rootPath, detailPath, index, total) {
    const detailUrl = rootPath + detailPath + '?id=' + encodeURIComponent(item.id);
    const title = escapeHtml(item.title);
    const imageAlt = escapeHtml(item.imageAlt);

    return '<article class="property-card reveal" data-property-id="' + escapeHtml(item.id) +
      '" data-location-en="' + escapeHtml(item.area) + '" data-location-ar="' + escapeHtml(item.areaAr) +
      '" data-type="' + escapeHtml(item.type) + '" data-price="' + item.price + '">' +
      '<div class="property-image"><a class="property-image-link" href="' + detailUrl +
      '" data-property-title-link data-title-en="' + title + '" data-title-ar="' + escapeHtml(item.titleAr) +
      '" aria-label="' + title + '"><img src="' + rootPath + item.image + '" alt="' + imageAlt +
      '" data-en="' + imageAlt + '" data-ar="' + escapeHtml(item.imageAltAr) +
      '" width="1000" height="667" loading="lazy" decoding="async"></a>' +
      '<span class="property-tag" data-en="' + escapeHtml(item.badge) + '" data-ar="' +
      escapeHtml(item.badgeAr) + '">' + escapeHtml(item.badge) + '</span>' +
      '<button class="heart" type="button" data-favorite-id="' + escapeHtml(item.id) +
      '" aria-label="Save ' + title + '" aria-pressed="false"><span aria-hidden="true">♡</span></button>' +
      '<span class="image-index">' + String(index + 1).padStart(2, '0') + ' / ' +
      String(total).padStart(2, '0') + '</span></div>' +
      '<div class="property-info"><div class="property-location"><span data-i18n="' +
      escapeHtml(item.typeKey) + '">' + escapeHtml(item.type.toUpperCase()) + '</span><span aria-hidden="true">·</span>' +
      '<span data-en="' + escapeHtml(item.area.toUpperCase()) + '" data-ar="' +
      escapeHtml(item.areaAr) + '">' + escapeHtml(item.area.toUpperCase()) + '</span></div>' +
      '<h3 data-en="' + title + '" data-ar="' + escapeHtml(item.titleAr) + '">' + title + '</h3>' +
      '<p class="property-sub" data-en="' + escapeHtml(item.subtitle) + '" data-ar="' +
      escapeHtml(item.subtitleAr) + '">' + escapeHtml(item.subtitle) + '</p>' +
      '<div class="property-meta"><span data-stat="beds">' + stat(item.beds, 'beds') +
      '</span><span data-stat="baths">' + stat(item.baths, 'baths') +
      '</span><span data-stat="size">' + stat(item.size, 'size') + '</span></div>' +
      '<div class="property-bottom"><span class="price" data-price="' + item.price + '">' + price(item.price) +
      '</span><a class="details-button" href="' + detailUrl + '"><span data-i18n="viewDetails">View details</span>' +
      '<img src="' + rootPath + 'assets/icons/arrow-up-right.svg" alt="" aria-hidden="true"></a></div></div></article>';
  }

  function renderCards(container, items, rootPath, detailPath) {
    if (!container) return;
    container.innerHTML = items.map(function (item, index) {
      return cardMarkup(item, rootPath, detailPath, index, items.length);
    }).join('');
  }

  function renderDetail(container, item, rootPath) {
    if (!container || !item) return;

    const title = escapeHtml(item.title);
    container.innerHTML =
      '<section class="detail-layout">' +
      '<div class="detail-gallery reveal"><img class="detail-main-image" src="' + rootPath + item.image +
      '" alt="' + escapeHtml(item.imageAlt) + '" data-en="' + escapeHtml(item.imageAlt) +
      '" data-ar="' + escapeHtml(item.imageAltAr) + '" width="1000" height="667">' +
      '<span class="property-tag" data-en="' + escapeHtml(item.badge) + '" data-ar="' +
      escapeHtml(item.badgeAr) + '">' + escapeHtml(item.badge) + '</span></div>' +
      '<div class="detail-content reveal"><p class="eyebrow detail-category"><span data-en="' + escapeHtml(item.area) +
      '" data-ar="' + escapeHtml(item.areaAr) + '">' + escapeHtml(item.area) + '</span>' +
      '<span aria-hidden="true"> · </span><span data-i18n="' + escapeHtml(item.typeKey) + '">' +
      escapeHtml(item.type) + '</span></p>' +
      '<h1 data-en="' + title + '" data-ar="' + escapeHtml(item.titleAr) + '">' + title + '</h1>' +
      '<p class="detail-subtitle" data-en="' + escapeHtml(item.subtitle) + '" data-ar="' +
      escapeHtml(item.subtitleAr) + '">' + escapeHtml(item.subtitle) + '</p>' +
      '<p class="detail-description" data-en="' + escapeHtml(item.description) + '" data-ar="' +
      escapeHtml(item.descriptionAr) + '">' + escapeHtml(item.description) + '</p>' +
      '<div class="detail-price" data-price="' + item.price + '">' + price(item.price) + '</div>' +
      '<div class="detail-specs"><span><img src="' + rootPath +
      'assets/icons/bed.svg" alt="" aria-hidden="true"><span data-stat="beds">' + stat(item.beds, 'beds') +
      '</span></span><span><img src="' + rootPath + 'assets/icons/bath.svg" alt="" aria-hidden="true">' +
      '<span data-stat="baths">' + stat(item.baths, 'baths') + '</span></span><span data-stat="size">' +
      stat(item.size, 'size') + '</span></div>' +
      '<div class="detail-actions"><button class="heart heart-detail" type="button" data-favorite-id="' +
      escapeHtml(item.id) + '" aria-label="Save ' + title +
      '" aria-pressed="false"><span aria-hidden="true">♡</span><span data-i18n="saveProperty">Save property</span></button>' +
      '<a class="button button-dark" href="mailto:hello@helcoo.ae?subject=' +
      encodeURIComponent('Property enquiry: ' + item.title) + '" data-i18n="enquireProperty">Enquire about this property</a>' +
      '</div></div></section>';
  }

  function updateNumbers() {
    document.querySelectorAll('[data-stat]').forEach(function (element) {
      const card = element.closest('[data-property-id]');
      if (!card) return;
      const item = properties.find(function (property) {
        return property.id === card.dataset.propertyId;
      });
      if (!item) return;
      element.textContent = stat(item[element.dataset.stat], element.dataset.stat);
    });

    document.querySelectorAll('.price[data-price], .detail-price[data-price]').forEach(function (element) {
      element.textContent = price(Number(element.dataset.price));
    });
  }

  function updateTitleLinks() {
    document.querySelectorAll('[data-property-title-link]').forEach(function (link) {
      link.setAttribute('aria-label', window.Helcoo.language === 'ar' ? link.dataset.titleAr : link.dataset.titleEn);
    });
  }

  window.Helcoo.properties = properties;
  window.Helcoo.renderPropertyCards = renderCards;
  window.Helcoo.renderPropertyDetail = renderDetail;
  window.Helcoo.updatePropertyNumbers = updateNumbers;
  window.Helcoo.escapeHtml = escapeHtml;

  document.addEventListener('languagechange', updateNumbers);
  document.addEventListener('languagechange', updateTitleLinks);
}());
