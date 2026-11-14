document.documentElement.classList.add('js');

const searchForm = document.getElementById('search-form');
const propertyCards = [...document.querySelectorAll('.property-card')];
const emptyState = document.getElementById('empty-state');
const resultsCount = document.getElementById('results-count');
const toast = document.getElementById('toast');
const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');
const propertyDialog = document.getElementById('property-dialog');
let toastTimer;
let currentLanguage = 'en';
let activePropertyCard;

const arabicTranslations = {
  pageTitle: 'هيلكو | عقارات دبي المختارة بعناية',
  metaTitle: 'هيلكو | عقارات دبي المختارة بعناية',
  metaDescription: 'اكتشف منازل وفرصًا عقارية مختارة بعناية في دبي مع هيلكو للعقارات.',
  skipLink: 'انتقل إلى المحتوى',
  announcementTitle: 'شريكك العقاري في دبي',
  announcementText: 'إرشاد مدروس. أماكن استثنائية.',
  brandLabel: 'الصفحة الرئيسية لهيلكو',
  openNavigation: 'فتح قائمة التنقل',
  closeNavigation: 'إغلاق قائمة التنقل',
  mainNavigation: 'التنقل الرئيسي',
  navBuy: 'شراء',
  navRent: 'استئجار',
  navCommunities: 'المناطق',
  navApproach: 'نهجنا',
  languageLabel: 'اللغة',
  speakToUs: 'تواصل معنا',
  heroImage: 'أفق دبي عند الغروب',
  heroEyebrow: 'طريقتك المدروسة للعثور على منزل',
  heroTitle: 'اعثر على منزلك',
  heroTitleAccent: 'في دبي.',
  heroCopy: 'المنزل أكثر من مجرد عنوان. اكتشف مساحات استثنائية ورؤية محلية وإرشادًا يضع احتياجاتك أولًا.',
  exploreProperties: 'استكشف العقارات',
  heroAboutLink: 'اكتشف ما يميز هيلكو',
  heroCaptionLocation: '٠١ / دبي، الإمارات العربية المتحدة',
  heroCaptionCity: 'المدينة على طريقتك',
  searchLabel: 'ابحث عن عقار',
  searchKicker: 'لنبدأ',
  searchTitle: 'اعثر على عنوانك القادم',
  areaLabel: 'المنطقة المفضلة',
  allDubai: 'كل دبي',
  areaDubaiMarina: 'دبي مارينا',
  areaDowntown: 'وسط مدينة دبي',
  areaPalm: 'نخلة جميرا',
  areaJumeirah: 'جميرا',
  typeLabel: 'نوع العقار',
  anyType: 'أي نوع',
  apartment: 'شقة',
  villa: 'فيلا',
  townhouse: 'تاون هاوس',
  budgetLabel: 'الميزانية القصوى',
  noMaximum: 'دون حد أقصى',
  budget2m: '٢ مليون درهم',
  budget4m: '٤ ملايين درهم',
  budget6m: '٦ ملايين درهم',
  budget10m: '١٠ ملايين درهم',
  searchHomes: 'ابحث عن منازل',
  servicePromise: 'وعد هيلكو بخدمتكم',
  localKnowledge: 'معرفة محلية',
  personalGuidance: 'إرشاد شخصي',
  selectedHomes: 'منازل مختارة بعناية',
  dubaiAlways: 'دبي دائمًا',
  collectionEyebrow: 'مجموعة هيلكو',
  collectionTitle: 'أماكن لها',
  collectionTitleAccent: 'طابعها الخاص.',
  collectionCopy: 'مجموعة من المنازل المختارة لأجوائها وما تتيحه من أساليب حياة، وللتفاصيل التي تجعلها مميزة.',
  tailoredSearch: 'اطلب بحثًا مخصصًا',
  clearFilters: 'مسح عوامل التصفية',
  listingDisclaimer: 'العقارات المعروضة للتوضيح فقط. يرجى التأكد من التوفر والأسعار والتفاصيل مع هيلكو.',
  marinaImageAlt: 'تصميم داخلي مشرق وعصري لشقة',
  justListed: 'أضيف حديثًا',
  saveMarina: 'احفظ شقة مارينا هايتس',
  apartmentCaps: 'شقة',
  areaDubaiMarinaCaps: 'دبي مارينا',
  marinaTitle: 'مارينا هايتس، إطلالة أكثر إشراقًا',
  marinaSubtitle: 'ركن هادئ يطل على المياه',
  viewMarina: 'اعرض تفاصيل مارينا هايتس، إطلالة أكثر إشراقًا',
  viewDetails: 'عرض التفاصيل',
  downtownImageAlt: 'مساحة معيشة أنيقة وعصرية في شقة',
  featured: 'مميز',
  saveDowntown: 'احفظ شقة حي الأوبرا',
  areaDowntownCaps: 'وسط مدينة دبي',
  downtownTitle: 'حي الأوبرا، أناقة في كل التفاصيل',
  downtownSubtitle: 'حياة المدينة بمساحة للتنفس',
  viewDowntown: 'اعرض تفاصيل حي الأوبرا',
  palmImageAlt: 'تصميم داخلي فاخر لفيلا بمواد طبيعية',
  rareFind: 'فرصة نادرة',
  savePalm: 'احفظ فيلا نخلة جميرا',
  villaCaps: 'فيلا',
  areaPalmCaps: 'نخلة جميرا',
  palmTitle: 'مساحة أوسع قليلًا بجانب البحر',
  palmSubtitle: 'حديقة خاصة وصباح أكثر هدوءًا',
  viewPalm: 'اعرض تفاصيل الفيلا بجانب البحر',
  jumeirahImageAlt: 'تصميم داخلي دافئ وعصري لمنزل تاون هاوس',
  newToMarket: 'عقار جديد في السوق',
  saveJumeirah: 'احفظ منزل تاون هاوس في جميرا',
  townhouseCaps: 'تاون هاوس',
  areaJumeirahCaps: 'جميرا',
  jumeirahTitle: 'منزل الفناء، جميرا',
  jumeirahSubtitle: 'ملاذ هادئ بالقرب من الساحل',
  viewJumeirah: 'اعرض تفاصيل منزل الفناء في جميرا',
  emptyTitle: 'لا توجد منازل مطابقة حاليًا',
  emptyCopy: 'جرّب منطقة أو ميزانية أخرى، أو دع فريقنا يساعدك في العثور على العقار المناسب.',
  emptyLink: 'اطلب مساعدة هيلكو',
  areasEyebrow: 'اعثر على منطقتك',
  areasTitle: 'دبي',
  areasTitleAccent: 'بأساليب حياة متنوعة.',
  areasCopy: 'من نبض المدينة إلى هدوء الساحل، لكل منطقة طابعها الخاص. اعثر على ما يناسبك.',
  downtownTagline: 'قلب المدينة',
  palmTagline: 'حياة بجانب المياه',
  marinaTagline: 'إطلالة عند كل زاوية',
  jumeirahTagline: 'مساحة لحياة أكثر هدوءًا',
  editorialImage: 'غرفة معيشة عصرية دافئة ومشمسة',
  editorialImageCaption: 'نهج هيلكو',
  editorialEyebrow: 'أكثر من مجرد بحث عن عقار',
  editorialTitle: 'النصيحة الجيدة تصنع',
  editorialTitleAccent: 'كل الفرق.',
  editorialCopy: 'سواء كنت تنتقل أو تستثمر أو تفكر فيما هو قادم، نبدأ بالاستماع إليك. ونقدم معرفة محلية وخيارات مدروسة وإرشادًا صريحًا في كل خطوة.',
  getToKnow: 'تعرّف علينا',
  editorialSignature: 'فصلك القادم، نجده لك بعناية.',
  contactEyebrow: 'عندما تكون مستعدًا',
  contactTitle: 'لنجد مكانًا',
  contactTitleAccent: 'تسميه منزلك.',
  contactCopy: 'أخبرنا بما تبحث عنه. سنقدم لك خبرتنا المحلية واهتمامنا الشخصي لمساعدتك على اتخاذ الخطوة التالية.',
  startConversation: 'ابدأ محادثة',
  footerBrandCopy: 'منازل مختارة بعناية. إرشاد مدروس. طريقة أفضل للعثور على مكانك في دبي.',
  footerExplore: 'استكشف',
  footerBuy: 'شراء منزل',
  footerRent: 'استفسارات الإيجار',
  footerCommunities: 'مناطق دبي',
  footerApproach: 'نهجنا',
  footerContact: 'تواصل معنا',
  footerFindUs: 'تجدنا في',
  officeAddress: 'المكتب ٢٠٤، جيت أفينيو',
  officeArea: 'مركز دبي المالي العالمي',
  officeCity: 'دبي، الإمارات العربية المتحدة',
  copyright: 'هيلكو للعقارات. جميع الحقوق محفوظة.',
  footerMotto: 'صُمم لحياة في دبي · ',
  privacyLink: 'استفسارات الخصوصية',
  closeDetails: 'إغلاق تفاصيل العقار',
  closerLook: 'نظرة عن قرب',
  enquireHome: 'استفسر عن هذا المنزل',
  bedrooms: 'غرف نوم',
  bathrooms: 'حمامات',
  squareFeet: 'قدم مربع',
  saveHome: 'تمت إضافة المنزل إلى مفضلاتك',
  removeHome: 'تمت إزالة المنزل من مفضلاتك',
  storageUnavailable: 'لهذه الزيارة فقط؛ مساحة التخزين في المتصفح غير متاحة.',
};


function showToast(message) {
  toast.textContent = message;
  toast.classList.add('show');
  window.clearTimeout(toastTimer);
  toastTimer = window.setTimeout(() => toast.classList.remove('show'), 2600);
}

function getLocalizedText(key) {
  const translation = arabicTranslations[key];
  if (!translation || currentLanguage === 'en') return null;
  return translation;
}

function localizeText(element, key) {
  const textNode = [...element.childNodes].find((node) => node.nodeType === Node.TEXT_NODE && node.textContent.trim());
  if (!textNode) return;
  if (!('i18nEnglishText' in element.dataset)) element.dataset.i18nEnglishText = textNode.textContent;
  textNode.textContent = getLocalizedText(key) ?? element.dataset.i18nEnglishText;
}

function localizeAttribute(element, attribute, key) {
  const camelAttribute = attribute.replace(/-([a-z])/g, (_, letter) => letter.toUpperCase());
  const originalKey = `i18nEnglish${camelAttribute[0].toUpperCase()}${camelAttribute.slice(1)}`;
  if (!(originalKey in element.dataset)) element.dataset[originalKey] = element.getAttribute(attribute);
  element.setAttribute(attribute, getLocalizedText(key) ?? element.dataset[originalKey]);
}

function formatNumber(value) {
  return new Intl.NumberFormat(currentLanguage === 'ar' ? 'ar-u-nu-arab' : 'en-AE').format(Number(value));
}

function propertyStat(card, stat) {
  const value = card.dataset[stat];
  if (currentLanguage === 'en') {
    if (stat === 'beds') return `${value} ${Number(value) === 1 ? 'bed' : 'beds'}`;
    if (stat === 'baths') return `${value} ${Number(value) === 1 ? 'bath' : 'baths'}`;
    return `${value} sq ft`;
  }
  if (stat === 'beds') return `${formatNumber(value)} ${arabicTranslations.bedrooms}`;
  if (stat === 'baths') return `${formatNumber(value)} ${arabicTranslations.bathrooms}`;
  return `${formatNumber(value.replace(/,/g, ''))} ${arabicTranslations.squareFeet}`;
}

function updatePropertyStats() {
  propertyCards.forEach((card) => {
    card.querySelectorAll('[data-stat]').forEach((stat) => {
      stat.textContent = propertyStat(card, stat.dataset.stat);
    });
  });
}

function localizedArea(area) {
  if (currentLanguage === 'en') return area;
  const areaKeys = {
    'Dubai Marina': 'areaDubaiMarina',
    'Downtown Dubai': 'areaDowntown',
    'Palm Jumeirah': 'areaPalm',
    Jumeirah: 'areaJumeirah',
  };
  return arabicTranslations[areaKeys[area]] ?? area;
}

function formatHomeCount(count) {
  if (currentLanguage === 'ar') {
    if (count === 0) return 'لا توجد منازل';
    if (count === 1) return 'منزل واحد';
    if (count === 2) return 'منزلان';
    return `${formatNumber(count)} منازل`;
  }
  return `${count} ${count === 1 ? 'home' : 'homes'}`;
}

function formatResultsCount(count) {
  if (currentLanguage === 'ar') {
    if (count === 0) return 'لا توجد منازل تطابق بحثك';
    if (count === 1) return 'منزل واحد يطابق بحثك';
    if (count === 2) return 'منزلان يطابقان بحثك';
    return `${formatNumber(count)} منازل تطابق بحثك`;
  }
  return `${formatHomeCount(count)} matching your search`;
}

function renderPropertyDialog(card) {
  activePropertyCard = card;
  const isArabic = currentLanguage === 'ar';
  const title = isArabic ? card.dataset.titleAr : card.dataset.title;
  const typeNames = {
    Apartment: isArabic ? arabicTranslations.apartment : 'Apartment',
    Villa: isArabic ? arabicTranslations.villa : 'Villa',
    Townhouse: isArabic ? arabicTranslations.townhouse : 'Townhouse',
  };
  document.getElementById('dialog-title').textContent = title;
  document.getElementById('dialog-location').textContent = `${typeNames[card.dataset.type]} · ${localizedArea(card.dataset.location)}`;
  document.getElementById('dialog-description').textContent = isArabic ? card.dataset.descriptionAr : card.dataset.description;

  const stats = document.getElementById('dialog-stats');
  const statLabels = ['beds', 'baths', 'size'].map((stat) => propertyStat(card, stat));
  stats.replaceChildren(...statLabels.map((label) => {
    const item = document.createElement('span');
    item.textContent = label;
    return item;
  }));
  document.getElementById('dialog-price').textContent = card.querySelector('.price').textContent;
  document.getElementById('dialog-enquire').href = `mailto:hello@helcoo.ae?subject=${encodeURIComponent(`${isArabic ? 'استفسار' : 'Enquiry'}: ${title}`)}`;
}

function setLanguage(language, { persist = true } = {}) {
  currentLanguage = language === 'ar' ? 'ar' : 'en';
  document.documentElement.lang = currentLanguage;
  document.documentElement.dir = currentLanguage === 'ar' ? 'rtl' : 'ltr';
  document.getElementById('language-select').value = currentLanguage;

  document.querySelectorAll('[data-i18n]').forEach((element) => {
    localizeText(element, element.dataset.i18n);
  });
  document.querySelectorAll('[data-i18n-aria-label]').forEach((element) => {
    localizeAttribute(element, 'aria-label', element.dataset.i18nAriaLabel);
  });
  document.querySelectorAll('[data-i18n-alt]').forEach((element) => {
    localizeAttribute(element, 'alt', element.dataset.i18nAlt);
  });
  document.querySelectorAll('[data-i18n-content]').forEach((element) => {
    localizeAttribute(element, 'content', element.dataset.i18nContent);
  });
  document.querySelectorAll('[data-i18n-title]').forEach((element) => {
    localizeText(element, element.dataset.i18nTitle);
  });
  if (navLinks.classList.contains('open')) {
    menuToggle.setAttribute('aria-label', currentLanguage === 'ar'
      ? arabicTranslations.closeNavigation
      : 'Close navigation');
  }

  updatePropertyStats();
  applyFilters();
  if (activePropertyCard && propertyDialog.open) renderPropertyDialog(activePropertyCard);
  if (persist) {
    try {
      window.localStorage.setItem('helcoo-language', currentLanguage);
    } catch {
      // The language switch remains available for this visit if storage is disabled.
    }
  }
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
  resultsCount.textContent = formatResultsCount(visible);
  if (scroll) {
    const behavior = window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth';
    document.getElementById('properties').scrollIntoView({ behavior });
  }
  return visible;
}

searchForm.addEventListener('submit', (event) => {
  event.preventDefault();
  const visible = applyFilters({ scroll: true });
  showToast(visible
    ? currentLanguage === 'ar' ? `وجدنا لك ${formatHomeCount(visible)}` : `Found ${formatHomeCount(visible)} for you`
    : currentLanguage === 'ar' ? 'لا توجد نتائج مطابقة. جرّب تعديل عوامل التصفية.' : 'No exact matches. Try adjusting your filters.');
});

document.getElementById('reset-filters').addEventListener('click', () => {
  searchForm.reset();
  const visible = applyFilters();
  showToast(currentLanguage === 'ar'
    ? `نعرض جميع المنازل المميزة وعددها ${formatNumber(visible)}`
    : `Showing all ${visible} featured homes`);
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
    const message = shouldSave ? arabicTranslations.saveHome : arabicTranslations.removeHome;
    const englishMessage = shouldSave ? 'Home saved to your favourites' : 'Home removed from your favourites';
    showToast(currentLanguage === 'ar'
      ? `${message}${favouritesPersistent ? '' : ` ${arabicTranslations.storageUnavailable}`}`
      : `${englishMessage}${favouritesPersistent ? '' : ' for this visit only; browser storage is unavailable.'}`);
  });
});

// Community tiles apply the matching area filter and take visitors to the listings.
document.querySelectorAll('[data-area]').forEach((areaButton) => {
  areaButton.addEventListener('click', () => {
    document.getElementById('location').value = areaButton.dataset.area;
    document.getElementById('type').value = 'all';
    document.getElementById('budget').value = 'all';
    const visible = applyFilters({ scroll: true });
    showToast(currentLanguage === 'ar'
      ? `${formatHomeCount(visible)} في ${localizedArea(areaButton.dataset.area)}`
      : `${formatHomeCount(visible)} in ${areaButton.dataset.area}`);
  });
});

// Property details are shown in an accessible native dialog.
propertyCards.forEach((card) => {
  card.querySelector('.details-button').addEventListener('click', () => {
    renderPropertyDialog(card);
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
  const navigationLabel = isOpen ? 'closeNavigation' : 'openNavigation';
  menuToggle.setAttribute('aria-label', currentLanguage === 'ar'
    ? arabicTranslations[navigationLabel]
    : isOpen ? 'Close navigation' : 'Open navigation');
});
navLinks.querySelectorAll('a').forEach((link) => {
  link.addEventListener('click', () => {
    navLinks.classList.remove('open');
    menuToggle.setAttribute('aria-expanded', 'false');
    menuToggle.setAttribute('aria-label', currentLanguage === 'ar' ? arabicTranslations.openNavigation : 'Open navigation');
  });
});

document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape' && navLinks.classList.contains('open')) {
    navLinks.classList.remove('open');
    menuToggle.setAttribute('aria-expanded', 'false');
    menuToggle.setAttribute('aria-label', currentLanguage === 'ar' ? arabicTranslations.openNavigation : 'Open navigation');
    menuToggle.focus();
  }
});

document.getElementById('language-select').addEventListener('change', (event) => {
  setLanguage(event.target.value);
});

document.getElementById('year').textContent = new Date().getFullYear();
let initialLanguage = 'en';
try {
  initialLanguage = window.localStorage.getItem('helcoo-language') === 'ar' ? 'ar' : 'en';
} catch {
  initialLanguage = 'en';
}
setLanguage(initialLanguage, { persist: false });

const revealElements = document.querySelectorAll(
  '.search-panel, .intro-strip, .section-heading, .property-card, .area-card, .editorial-image, .editorial-copy, .contact-inner, .footer-main',
);
revealElements.forEach((element) => element.classList.add('reveal'));

if (window.matchMedia('(prefers-reduced-motion: reduce)').matches || !('IntersectionObserver' in window)) {
  revealElements.forEach((element) => element.classList.add('is-visible'));
} else {
  const revealObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        observer.unobserve(entry.target);
      }
    });
  }, { rootMargin: '0px 0px -40px 0px', threshold: 0.12 });
  revealElements.forEach((element) => revealObserver.observe(element));
}
