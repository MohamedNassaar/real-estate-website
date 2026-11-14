window.Helcoo = window.Helcoo || {};
document.documentElement.classList.add('js');

(function () {
  const translations = {
    en: {
      pageTitle: 'Helcoo | Considered Dubai Real Estate',
      propertiesPageTitle: 'Dubai Properties | Helcoo Real Estate',
      detailPageTitle: 'Property Details | Helcoo Real Estate',
      aboutPageTitle: 'About Helcoo | Dubai Property, Personally Guided',
      contactPageTitle: 'Contact Helcoo | Dubai Property Guidance',
      metaDescription: 'Discover considered homes and property opportunities across Dubai with Helcoo Real Estate.',
      aboutMetaDescription: 'Meet Helcoo, a thoughtful and personal property partner in Dubai.',
      contactMetaDescription: 'Get in touch with Helcoo Real Estate for personal property guidance in Dubai.',
      skipLink: 'Skip to content',
      announcementTitle: 'YOUR DUBAI PROPERTY PARTNER',
      announcementText: 'Thoughtful guidance. Exceptional places.',
      brandLabel: 'Helcoo home',
      openNavigation: 'Open navigation',
      closeNavigation: 'Close navigation',
      mainNavigation: 'Main navigation',
      navHome: 'Home',
      navProperties: 'Properties',
      navAbout: 'About us',
      navContact: 'Contact',
      languageLabel: 'Language',
      speakToUs: 'Speak to us',
      heroEyebrow: 'A MORE CONSIDERED WAY TO FIND HOME',
      heroTitle: 'Find your place',
      heroTitleAccent: 'in Dubai.',
      heroCopy: 'A home is more than an address. Discover exceptional spaces, local perspective and guidance that puts you first.',
      exploreProperties: 'Explore properties',
      heroAboutLink: 'Discover the Helcoo difference',
      heroImage: 'Dubai skyline at golden hour',
      heroCaptionLocation: 'DUBAI, UNITED ARAB EMIRATES',
      heroCaptionCity: 'THE CITY, YOUR WAY',
      searchLabel: 'Find a property',
      searchKicker: 'LET’S BEGIN',
      searchTitle: 'Find your next address',
      areaLabel: 'Preferred area',
      allDubai: 'All Dubai',
      areaDubaiMarina: 'Dubai Marina',
      areaDowntown: 'Downtown Dubai',
      areaPalm: 'Palm Jumeirah',
      areaJumeirah: 'Jumeirah',
      typeLabel: 'Property type',
      anyType: 'Any type',
      apartment: 'Apartment',
      villa: 'Villa',
      townhouse: 'Townhouse',
      budgetLabel: 'Maximum budget',
      noMaximum: 'No maximum',
      budget2m: 'AED 2 million',
      budget4m: 'AED 4 million',
      budget6m: 'AED 6 million',
      budget10m: 'AED 10 million',
      searchHomes: 'Search homes',
      collectionEyebrow: 'THE HELCOO COLLECTION',
      collectionTitle: 'Places with a',
      collectionTitleAccent: 'point of view.',
      collectionCopy: 'A selection of homes chosen for the way they feel, the lives they make possible and the details that make them special.',
      viewAllProperties: 'View all properties',
      localKnowledge: 'LOCAL KNOWLEDGE',
      personalGuidance: 'PERSONAL GUIDANCE',
      selectedHomes: 'THOUGHTFULLY SELECTED HOMES',
      dubaiAlways: 'DUBAI, ALWAYS',
      areasEyebrow: 'FIND YOUR NEIGHBOURHOOD',
      areasTitle: 'Dubai,',
      areasTitleAccent: 'many ways to live.',
      areasCopy: 'From the pulse of the city to the calm of the coast, every neighbourhood has its own character.',
      downtownTagline: 'The heart of the city',
      palmTagline: 'Life beside the water',
      marinaTagline: 'A view around every corner',
      jumeirahTagline: 'Room for a slower pace',
      editorialImageCaption: 'THE HELCOO APPROACH',
      editorialEyebrow: 'MORE THAN A PROPERTY SEARCH',
      editorialTitle: 'Good advice makes',
      editorialTitleAccent: 'all the difference.',
      editorialCopy: 'Whether you are moving, investing or considering what comes next, we start by listening. Expect local knowledge, thoughtful options and honest guidance at every step.',
      getToKnow: 'Get to know us',
      editorialSignature: 'Your next chapter, found with care.',
      startConversation: 'Start a conversation',
      clearFilters: 'Clear filters',
      listingDisclaimer: 'Illustrative listings only. Confirm availability, pricing and property details with Helcoo.',
      justListed: 'Just listed',
      featured: 'Featured',
      rareFind: 'Rare find',
      newToMarket: 'New to market',
      viewDetails: 'View details',
      beds: 'beds',
      baths: 'baths',
      squareFeet: 'sq ft',
      bedrooms: 'bedrooms',
      bathrooms: 'bathrooms',
      resultsTitle: 'Find your next home',
      resultsCopy: 'Explore a considered collection of homes across Dubai. Refine your search to find the right fit.',
      resultsCountDefault: 'A selection of homes',
      emptyTitle: 'No homes match those filters',
      emptyCopy: 'Try a different area or budget, or speak with our team about a tailored search.',
      emptyLink: 'Ask Helcoo for help',
      propertyNotFound: 'We could not find that property.',
      backToProperties: 'Back to properties',
      saveProperty: 'Save property',
      enquireProperty: 'Enquire about this property',
      relatedEyebrow: 'A FEW MORE TO CONSIDER',
      relatedTitle: 'More places to explore.',
      aboutEyebrow: 'A MORE PERSONAL PROPERTY PARTNER',
      aboutTitle: 'Local perspective.',
      aboutTitleAccent: 'Personal by nature.',
      aboutIntro: 'Helcoo is built around a simple idea: finding a home should feel considered, informed and personal.',
      aboutBody: 'We bring a thoughtful approach to Dubai real estate—pairing local knowledge with careful listening, clear advice and a considered selection of homes. Whether you are buying, renting or exploring what comes next, our role is to help you move forward with confidence.',
      aboutImageAlt: 'Illustration representing a local property advisor',
      aboutImageLabel: 'YOUR LOCAL PROPERTY EXPERT',
      valuesEyebrow: 'WHAT YOU CAN EXPECT',
      valuesTitle: 'Good advice changes everything.',
      valueKnowledge: 'Local knowledge',
      valueKnowledgeCopy: 'Useful context on Dubai neighbourhoods, not just a list of addresses.',
      valueCare: 'Personal guidance',
      valueCareCopy: 'A considered conversation about what matters to you and the way you want to live.',
      valueClarity: 'Clear from the start',
      valueClarityCopy: 'Straightforward answers and realistic next steps at every stage.',
      contactEyebrow: 'LET’S START A CONVERSATION',
      contactTitle: 'Tell us what',
      contactTitleAccent: 'home means to you.',
      contactCopy: 'Share a little about what you are looking for. Our team will help you find a thoughtful next step.',
      contactFormTitle: 'Send us a note',
      nameLabel: 'Your name',
      emailLabel: 'Email address',
      phoneLabel: 'Phone (optional)',
      messageLabel: 'How can we help?',
      messagePlaceholder: 'Tell us a little about the home or area you have in mind.',
      sendMessage: 'Send an enquiry',
      formMailNote: 'Your email app will open with your message ready to send.',
      emailUs: 'Email us',
      callUs: 'Call us',
      visitUs: 'Visit us',
      officeAddress: 'Office 204, Gate Avenue',
      officeArea: 'Dubai International Financial Centre',
      officeCity: 'Dubai, United Arab Emirates',
      contactEmail: 'hello@helcoo.ae',
      contactPhone: '+971 4 555 0128',
      footerBrandCopy: 'Thoughtful guidance. Exceptional places. A more personal way to find your place in Dubai.',
      footerExplore: 'Explore',
      footerContact: 'Contact',
      footerMotto: 'Made for a life in Dubai.',
      copyright: 'Helcoo Real Estate. All rights reserved.',
      storageUnavailable: 'Favourites could not be saved in this browser.',
    },
    ar: {
      pageTitle: 'هيلكو | عقارات دبي المختارة بعناية',
      propertiesPageTitle: 'عقارات دبي | هيلكو للعقارات',
      detailPageTitle: 'تفاصيل العقار | هيلكو للعقارات',
      aboutPageTitle: 'من نحن | هيلكو للعقارات في دبي',
      contactPageTitle: 'تواصل مع هيلكو | إرشاد عقاري في دبي',
      metaDescription: 'اكتشف منازل وفرصًا عقارية مختارة بعناية في دبي مع هيلكو للعقارات.',
      aboutMetaDescription: 'تعرّف على هيلكو، شريكك العقاري الشخصي والمدروس في دبي.',
      contactMetaDescription: 'تواصل مع هيلكو للعقارات للحصول على إرشاد عقاري شخصي في دبي.',
      skipLink: 'انتقل إلى المحتوى',
      announcementTitle: 'شريكك العقاري في دبي',
      announcementText: 'إرشاد مدروس. أماكن استثنائية.',
      brandLabel: 'الصفحة الرئيسية لهيلكو',
      openNavigation: 'فتح قائمة التنقل',
      closeNavigation: 'إغلاق قائمة التنقل',
      mainNavigation: 'التنقل الرئيسي',
      navHome: 'الرئيسية',
      navProperties: 'العقارات',
      navAbout: 'من نحن',
      navContact: 'تواصل معنا',
      languageLabel: 'اللغة',
      speakToUs: 'تواصل معنا',
      heroEyebrow: 'طريقتك المدروسة للعثور على منزل',
      heroTitle: 'اعثر على منزلك',
      heroTitleAccent: 'في دبي.',
      heroCopy: 'المنزل أكثر من مجرد عنوان. اكتشف مساحات استثنائية ورؤية محلية وإرشادًا يضع احتياجاتك أولًا.',
      exploreProperties: 'استكشف العقارات',
      heroAboutLink: 'اكتشف ما يميز هيلكو',
      heroImage: 'أفق دبي عند الغروب',
      heroCaptionLocation: 'دبي، الإمارات العربية المتحدة',
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
      collectionEyebrow: 'مجموعة هيلكو',
      collectionTitle: 'أماكن لها',
      collectionTitleAccent: 'طابعها الخاص.',
      collectionCopy: 'مجموعة من المنازل المختارة لأجوائها وما تتيحه من أساليب حياة، وللتفاصيل التي تجعلها مميزة.',
      viewAllProperties: 'عرض جميع العقارات',
      localKnowledge: 'معرفة محلية',
      personalGuidance: 'إرشاد شخصي',
      selectedHomes: 'منازل مختارة بعناية',
      dubaiAlways: 'دبي دائمًا',
      areasEyebrow: 'اعثر على منطقتك',
      areasTitle: 'دبي،',
      areasTitleAccent: 'بأساليب حياة متنوعة.',
      areasCopy: 'من نبض المدينة إلى هدوء الساحل، لكل منطقة طابعها الخاص.',
      downtownTagline: 'قلب المدينة',
      palmTagline: 'حياة بجانب المياه',
      marinaTagline: 'إطلالة عند كل زاوية',
      jumeirahTagline: 'مساحة لحياة أكثر هدوءًا',
      editorialImageCaption: 'نهج هيلكو',
      editorialEyebrow: 'أكثر من مجرد بحث عن عقار',
      editorialTitle: 'النصيحة الجيدة تصنع',
      editorialTitleAccent: 'كل الفرق.',
      editorialCopy: 'سواء كنت تنتقل أو تستثمر أو تفكر فيما هو قادم، نبدأ بالاستماع إليك. ونقدم معرفة محلية وخيارات مدروسة وإرشادًا صريحًا في كل خطوة.',
      getToKnow: 'تعرّف علينا',
      editorialSignature: 'فصلك القادم، نجده لك بعناية.',
      startConversation: 'ابدأ محادثة',
      clearFilters: 'مسح عوامل التصفية',
      listingDisclaimer: 'العقارات المعروضة للتوضيح فقط. يرجى التأكد من التوفر والأسعار والتفاصيل مع هيلكو.',
      justListed: 'أضيف حديثًا',
      featured: 'مميز',
      rareFind: 'فرصة نادرة',
      newToMarket: 'عقار جديد في السوق',
      viewDetails: 'عرض التفاصيل',
      beds: 'غرف نوم',
      baths: 'حمامات',
      squareFeet: 'قدم مربع',
      bedrooms: 'غرف نوم',
      bathrooms: 'حمامات',
      resultsTitle: 'اعثر على منزلك القادم',
      resultsCopy: 'استكشف مجموعة مختارة بعناية من المنازل في دبي. حدّد خياراتك للعثور على ما يناسبك.',
      resultsCountDefault: 'مجموعة من المنازل',
      emptyTitle: 'لا توجد منازل مطابقة لهذه الخيارات',
      emptyCopy: 'جرّب منطقة أو ميزانية أخرى، أو تواصل مع فريقنا لطلب بحث مخصص.',
      emptyLink: 'اطلب مساعدة هيلكو',
      propertyNotFound: 'لم نتمكن من العثور على هذا العقار.',
      backToProperties: 'العودة إلى العقارات',
      saveProperty: 'احفظ العقار',
      enquireProperty: 'استفسر عن هذا العقار',
      relatedEyebrow: 'خيارات أخرى تستحق النظر',
      relatedTitle: 'مزيد من الأماكن لاستكشافها.',
      aboutEyebrow: 'شريك عقاري أكثر قربًا',
      aboutTitle: 'رؤية محلية.',
      aboutTitleAccent: 'واهتمام شخصي.',
      aboutIntro: 'تقوم هيلكو على فكرة بسيطة: ينبغي أن يكون العثور على منزل تجربة مدروسة وواضحة وشخصية.',
      aboutBody: 'نتبع نهجًا مدروسًا في عقارات دبي، ونجمع بين المعرفة المحلية وحسن الاستماع والنصيحة الواضحة ومجموعة مختارة بعناية من المنازل. سواء كنت تشتري أو تستأجر أو تستكشف خطوتك التالية، نساعدك على التقدم بثقة.',
      aboutImageAlt: 'رسم توضيحي يرمز إلى مستشار عقاري محلي',
      aboutImageLabel: 'خبيرك العقاري المحلي',
      valuesEyebrow: 'ما يمكنك توقعه',
      valuesTitle: 'النصيحة الجيدة تصنع كل الفرق.',
      valueKnowledge: 'معرفة محلية',
      valueKnowledgeCopy: 'رؤية مفيدة عن أحياء دبي، تتجاوز مجرد قائمة بالعناوين.',
      valueCare: 'إرشاد شخصي',
      valueCareCopy: 'حوار مدروس حول ما يهمك والطريقة التي تفضل أن تعيش بها.',
      valueClarity: 'وضوح منذ البداية',
      valueClarityCopy: 'إجابات مباشرة وخطوات واقعية في كل مرحلة.',
      contactEyebrow: 'لنبدأ حوارًا',
      contactTitle: 'أخبرنا ماذا',
      contactTitleAccent: 'يعني لك المنزل.',
      contactCopy: 'شاركنا ما تبحث عنه. سيساعدك فريقنا في اختيار الخطوة التالية بعناية.',
      contactFormTitle: 'أرسل لنا رسالة',
      nameLabel: 'الاسم',
      emailLabel: 'البريد الإلكتروني',
      phoneLabel: 'الهاتف (اختياري)',
      messageLabel: 'كيف يمكننا مساعدتك؟',
      messagePlaceholder: 'أخبرنا قليلًا عن المنزل أو المنطقة التي تفكر فيها.',
      sendMessage: 'أرسل استفسارك',
      formMailNote: 'سيُفتح تطبيق البريد لديك مع رسالتك جاهزة للإرسال.',
      emailUs: 'راسلنا',
      callUs: 'اتصل بنا',
      visitUs: 'زرنا',
      officeAddress: 'المكتب ٢٠٤، جيت أفينيو',
      officeArea: 'مركز دبي المالي العالمي',
      officeCity: 'دبي، الإمارات العربية المتحدة',
      contactEmail: 'hello@helcoo.ae',
      contactPhone: '+971 4 555 0128',
      footerBrandCopy: 'إرشاد مدروس. أماكن استثنائية. طريقة أكثر قربًا للعثور على مكانك في دبي.',
      footerExplore: 'استكشف',
      footerContact: 'تواصل معنا',
      footerMotto: 'صُمم لحياة في دبي.',
      copyright: 'هيلكو للعقارات. جميع الحقوق محفوظة.',
      storageUnavailable: 'تعذر حفظ العقارات المفضلة في هذا المتصفح.',
    },
  };

  let language = 'en';
  let toastTimer;

  function showToast(message) {
    const toast = document.getElementById('toast');
    if (!toast) return;
    toast.textContent = message;
    toast.classList.add('show');
    window.clearTimeout(toastTimer);
    toastTimer = window.setTimeout(function () {
      toast.classList.remove('show');
    }, 2600);
  }

  function translate(key) {
    return translations[language][key] || translations.en[key] || key;
  }

  function applyLanguage() {
    const isArabic = language === 'ar';
    document.documentElement.lang = language;
    document.documentElement.dir = isArabic ? 'rtl' : 'ltr';
    const title = document.querySelector('title[data-i18n-title]');
    document.title = title ? translate(title.dataset.i18nTitle) : translate('pageTitle');

    document.querySelectorAll('[data-i18n]').forEach(function (element) {
      element.textContent = translate(element.dataset.i18n);
    });

    document.querySelectorAll('[data-en][data-ar]').forEach(function (element) {
      const value = isArabic ? element.dataset.ar : element.dataset.en;
      if (element instanceof HTMLImageElement) {
        element.alt = value;
      } else {
        element.textContent = value;
      }
    });

    document.querySelectorAll('[data-i18n-aria-label]').forEach(function (element) {
      element.setAttribute('aria-label', translate(element.dataset.i18nAriaLabel));
    });

    document.querySelectorAll('[data-i18n-content]').forEach(function (element) {
      element.setAttribute('content', translate(element.dataset.i18nContent));
    });

    document.querySelectorAll('[data-i18n-placeholder]').forEach(function (element) {
      element.setAttribute('placeholder', translate(element.dataset.i18nPlaceholder));
    });

    const menuToggle = document.querySelector('.menu-toggle');
    if (menuToggle) {
      const isOpen = menuToggle.getAttribute('aria-expanded') === 'true';
      menuToggle.setAttribute('aria-label', translate(isOpen ? 'closeNavigation' : 'openNavigation'));
    }

    const languageSelect = document.getElementById('language-select');
    if (languageSelect) languageSelect.value = language;

    document.dispatchEvent(new CustomEvent('languagechange', {
      detail: { language: language },
    }));
  }

  function setLanguage(nextLanguage, persist) {
    if (nextLanguage !== 'en' && nextLanguage !== 'ar') return;
    language = nextLanguage;
    applyLanguage();
    if (persist) {
      try {
        window.localStorage.setItem('helcoo-language', language);
      } catch (error) {
        showToast(translate('storageUnavailable'));
      }
    }
  }

  function initNavigation() {
    const languageSelect = document.getElementById('language-select');
    const menuToggle = document.querySelector('.menu-toggle');
    const nav = document.getElementById('primary-nav');

    try {
      const savedLanguage = window.localStorage.getItem('helcoo-language');
      if (savedLanguage === 'ar' || savedLanguage === 'en') language = savedLanguage;
    } catch (error) {
      showToast(translate('storageUnavailable'));
    }

    if (languageSelect) {
      languageSelect.addEventListener('change', function () {
        setLanguage(languageSelect.value, true);
      });
    }

    if (menuToggle && nav) {
      menuToggle.addEventListener('click', function () {
        const isOpen = menuToggle.getAttribute('aria-expanded') === 'true';
        menuToggle.setAttribute('aria-expanded', String(!isOpen));
        menuToggle.setAttribute('aria-label', translate(isOpen ? 'openNavigation' : 'closeNavigation'));
        nav.classList.toggle('open', !isOpen);
      });

      nav.addEventListener('click', function (event) {
        if (event.target.closest('a')) {
          menuToggle.setAttribute('aria-expanded', 'false');
          menuToggle.setAttribute('aria-label', translate('openNavigation'));
          nav.classList.remove('open');
        }
      });

      document.addEventListener('keydown', function (event) {
        if (event.key === 'Escape' && menuToggle.getAttribute('aria-expanded') === 'true') {
          menuToggle.setAttribute('aria-expanded', 'false');
          menuToggle.setAttribute('aria-label', translate('openNavigation'));
          nav.classList.remove('open');
          menuToggle.focus();
        }
      });
    }

    document.querySelectorAll('[data-year]').forEach(function (element) {
      element.textContent = new Date().getFullYear();
    });

    applyLanguage();
  }

  function initRevealAnimations() {
    const elements = document.querySelectorAll('.reveal');
    if (!elements.length) return;

    if (!('IntersectionObserver' in window) || window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      elements.forEach(function (element) {
        element.classList.add('is-visible');
      });
      return;
    }

    const observer = new IntersectionObserver(function (entries, activeObserver) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          activeObserver.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12 });

    elements.forEach(function (element) {
      observer.observe(element);
    });
  }

  window.Helcoo.language = language;
  Object.defineProperty(window.Helcoo, 'language', {
    get: function () { return language; },
  });
  window.Helcoo.translate = translate;
  window.Helcoo.applyLanguage = applyLanguage;
  window.Helcoo.setLanguage = setLanguage;
  window.Helcoo.showToast = showToast;
  window.Helcoo.initNavigation = initNavigation;
  window.Helcoo.initRevealAnimations = initRevealAnimations;

  initNavigation();
}());
