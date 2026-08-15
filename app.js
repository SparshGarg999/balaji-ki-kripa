/**
 * ===================================================================
 * श्री बालाजी कृपा (BALAJI KI KRIPA) - OFFICIAL DEVOTEE & ADMIN ENGINE
 * ===================================================================
 */

// Global Application State
const state = {
  lang: 'en',
  isAdmin: false,
  activeNav: 'home',
  activeYtChannel: 'main',
  cart: {}, // { [itemId]: { name, qty, price, isBatch, batchSize } }
  shippingState: 'delhi_ncr',
  shippingFee: 50,
  darbarTokens: [],
  sawamaniBookings: [],
  storeOrders: [],
  products: []
};

// Shipping Rates Configuration (Dynamic by Location)
const shippingRates = {
  delhi_ncr: { name: 'Delhi / NCR & Haryana', fee: 50 },
  north_india: { name: 'North India (UP, Punjab, Rajasthan, HP, UK)', fee: 70 },
  central_west: { name: 'West & Central India (Maharashtra, Gujarat, MP)', fee: 90 },
  south_east: { name: 'South & East India (Karnataka, TN, Bengal, Odisha)', fee: 110 },
  remote: { name: 'North-East & Remote Regions', fee: 140 }
};

// Multi-Language Translation Dictionary
const i18n = {
  en: {
    officialDevoteeApp: 'Official Devotee Platform',
    liveAlertTitle: '🔴 LIVE DARBAR NOTIFICATION',
    registerToken: '🎟️ Register Free Token',
    dailyBlessing: '🌟 DAILY DARSHAN & ANUBHAV',
    blessingSub: "Balaji Maharaj's divine grace removes every obstacle in your life.",
    sawamaniSeva: 'सवामणि सेवा',
    divyaStore: 'दिव्य भण्डार',
    upcomingDarbars: 'Upcoming Divya Darbar Schedule',
    darbarSub: 'Register token in advance for entry and sankalp',
    officialYtVideos: 'Official Videos & Podcasts',
    ytChannelsSub: 'Watch Satsang, Darbar Vlogs, Movies & Podcasts',
    navHome: 'Home',
    navSawamani: 'Sawamani',
    navStore: 'Store',
    navBookings: 'My Sevas',
    navProfile: 'Profile'
  },
  hi: {
    officialDevoteeApp: 'आधिकारिक भक्त मंच',
    liveAlertTitle: '🔴 लाइव दरबार सूचना',
    registerToken: '🎟️ निशुल्क टोकन प्राप्त करें',
    dailyBlessing: '🌟 दैनिक दर्शन व अनुभव',
    blessingSub: 'श्री बालाजी महाराज की असीम कृपा आपके सभी संकटों को दूर करे।',
    sawamaniSeva: 'सवामणि सेवा',
    divyaStore: 'दिव्य भण्डार',
    upcomingDarbars: 'आगामी दिव्य दरबार समय-सारणी',
    darbarSub: 'प्रवेश एवं संकल्प हेतु अग्रिम टोकन बुक करें',
    officialYtVideos: 'आधिकारिक वीडियो एवं पॉडकास्ट',
    ytChannelsSub: 'सत्संग, दरबार व्लॉग्स, मूवीज व पॉडकास्ट देखें',
    navHome: 'मुखपृष्ठ',
    navSawamani: 'सवामणि',
    navStore: 'भण्डार',
    navBookings: 'मेरी सेवाएं',
    navProfile: 'प्रोफाइल'
  },
  sa: {
    officialDevoteeApp: 'आधिकारिक भक्त मञ्चम्',
    liveAlertTitle: '🔴 प्रत्यक्ष दरबार सूचना',
    registerToken: '🎟️ निःशुल्क टोकन प्राप्नुवन्तु',
    dailyBlessing: '🌟 नित्य दर्शनम् अनुभवः च',
    blessingSub: 'श्रीबालाजी महाराजस्य कृपा सर्वकष्टान् दूरीकरोतु।',
    sawamaniSeva: 'सवामणि सेवा',
    divyaStore: 'दिव्य भण्डारम्',
    upcomingDarbars: 'आगामी दिव्य दरबार समयसूची',
    darbarSub: 'प्रवेशाय अग्रिम टोकन स्वीकुर्वन्तु',
    officialYtVideos: 'आधिकारिक दृश्यश्राव्य ग्रन्थाः',
    ytChannelsSub: 'सत्संग, व्लॉग, चलच्चित्र तथा पॉडकास्ट पश्यन्तु',
    navHome: 'मुखम्',
    navSawamani: 'सवामणि',
    navStore: 'भण्डारम्',
    navBookings: 'मम सेवाः',
    navProfile: 'विवरणम्'
  },
  gu: {
    officialDevoteeApp: 'સત્તાવાર ભક્ત પ્લેટફોર્મ',
    liveAlertTitle: '🔴 લાઈવ દરબાર સૂચના',
    registerToken: '🎟️ મફત ટોકન મેળવો',
    dailyBlessing: '🌟 દૈનિક દર્શન અને અનુભવ',
    blessingSub: 'શ્રી બાલાજી મહારાજ આપના તમામ સંકટો દૂર કરે.',
    sawamaniSeva: 'સવામણી સેવા',
    divyaStore: 'દિવ્ય ભંડાર',
    upcomingDarbars: 'આગામી દિવ્ય દરબાર કાર્યક્રમ',
    darbarSub: 'પ્રવેશ માટે અગાઉથી ટોકન મેળવો',
    officialYtVideos: 'સત્તાવાર વિડીયો અને પોડકાસ્ટ',
    ytChannelsSub: 'સત્સંગ, વ્લોગ્સ, ફિલ્મો અને પોડકાસ્ટ જુઓ',
    navHome: 'હોમ',
    navSawamani: 'સવામણી',
    navStore: 'ભંડાર',
    navBookings: 'મારી સેવાઓ',
    navProfile: 'પ્રોફાઇલ'
  },
  te: {
    officialDevoteeApp: 'అధికారిక భక్త వేదిక',
    liveAlertTitle: '🔴 లైవ్ దర్బార్ నోటిఫికేషన్',
    registerToken: '🎟️ ఉచిత టోకెన్ పొందండి',
    dailyBlessing: '🌟 నిత్య దర్శనం & అనుభవం',
    blessingSub: 'శ్రీ బాలాజీ మహారాజ్ మీ కష్టాలన్నీ తొలగించుగాక.',
    sawamaniSeva: 'సవామణి సేవ',
    divyaStore: 'దివ్య భండార్',
    upcomingDarbars: 'రాబోయే దివ్య దర్బార్ షెడ్యూల్',
    darbarSub: 'ప్రవేశం కోసం ముందస్తు టోకెన్ పొందండి',
    officialYtVideos: 'అధికారిక వీడియోలు & పాడ్‌కాస్ట్‌లు',
    ytChannelsSub: 'సత్సంగ్, వ్లాగ్స్, చలనచిత్రాలు మరియు పాడ్‌కాస్ట్‌లు చూడండి',
    navHome: 'హోమ్',
    navSawamani: 'సవామణి',
    navStore: 'స్టోర్',
    navBookings: 'నా సేవలు',
    navProfile: 'ప్రొఫైల్'
  },
  ta: {
    officialDevoteeApp: 'அதிகாரப்பூர்வ பக்தர் தளம்',
    liveAlertTitle: '🔴 நேரலை தர்பார் அறிவிப்பு',
    registerToken: '🎟️ இலவச டோக்கன் பெறுக',
    dailyBlessing: '🌟 தினசரி தரிசனம் & அனுபவம்',
    blessingSub: 'ஸ்ரீ பாலாஜி மஹராஜ் உங்கள் தடைகளை நீக்குவாராக.',
    sawamaniSeva: 'சவாமணி சேவை',
    divyaStore: 'திவ்ய பண்டாரம்',
    upcomingDarbars: 'வரவிருக்கும் திவ்ய தர்பார் அட்டவணை',
    darbarSub: 'முன்பதிவு செய்து டோக்கன் பெறுக',
    officialYtVideos: 'அதிகாரப்பூர்வ வீடியோக்கள் & பாட்காஸ்ட்கள்',
    ytChannelsSub: 'சத்சங்கம், வ்லாக்ஸ், திரைப்படங்கள் & பாட்காஸ்ட்கள் பார்க்கவும்',
    navHome: 'முகப்பு',
    navSawamani: 'சவாமணி',
    navStore: 'ஸ்டோர்',
    navBookings: 'என் சேவைகள்',
    navProfile: 'சுயவிவரம்'
  },
  bn: {
    officialDevoteeApp: 'অফিসিয়াল ভক্ত প্ল্যাটফর্ম',
    liveAlertTitle: '🔴 লাইভ দরবার বিজ্ঞপ্তি',
    registerToken: '🎟️ বিনামূল্যে টোকেন পান',
    dailyBlessing: '🌟 দৈনিক দর্শন ও অভিজ্ঞতা',
    blessingSub: 'শ্রী বালাজি মহারাজ আপনার সমস্ত সংকট দূর করবেন।',
    sawamaniSeva: 'সওয়ামনি সেবা',
    divyaStore: 'দিব্য ভাণ্ডার',
    upcomingDarbars: 'আসন্ন দিব্য দরবার সময়সূচী',
    darbarSub: 'প্রবেশের জন্য অগ্রিম টোকেন নিন',
    officialYtVideos: 'অফিসিয়াল ভিডিও এবং পডকাস্ট',
    ytChannelsSub: 'সত্সঙ্গ, ভ্লগ, মুভি এবং পডকাস্ট দেখুন',
    navHome: 'হোম',
    navSawamani: 'সওয়ামনি',
    navStore: 'স্টোর',
    navBookings: 'আমার সেবা',
    navProfile: 'প্রোফাইল'
  }
};

// Upcoming Darbar Schedule
const darbarEvents = [
  {
    id: 'darbar-delhi-01',
    title: 'श्री बालाजी महाराज महा दिव्य दरबार - दिल्ली NCR',
    location: 'Rohini Sector 10 Ground, New Delhi',
    date: 'मंगलवार, 18 अगस्त 2026',
    time: '10:00 AM से सायं 6:00 PM',
    status: 'Open for Registration',
    tokensLeft: 420
  },
  {
    id: 'darbar-salasar-02',
    title: 'सालासर धाम विशेष कृपा दरबार एवं संकट मोचन महायज्ञ',
    location: 'Shree Balaji Mandir Complex, Salasar, Rajasthan',
    date: 'पूर्णिमा, 28 अगस्त 2026',
    time: 'प्रातः 8:00 AM Onwards',
    status: 'Open for Registration',
    tokensLeft: 850
  },
  {
    id: 'darbar-hisar-03',
    title: 'हिसार दिव्य सत्संग, अर्जी एवं कष्ट निवारण दरबार',
    location: 'Urban Estate Community Center, Hisar, Haryana',
    date: 'रविवार, 06 सितम्बर 2026',
    time: '11:00 AM से 4:00 PM',
    status: 'Registration Starting Soon',
    tokensLeft: 300
  }
];

// YouTube Videos Database mapped to Official Channels
const ytDatabase = {
  main: [
    {
      id: 'vid-main-1',
      title: '🔴 श्री बालाजी कृपा महा दिव्य दरबार - लाइव अर्जी एवं संकट निवारण',
      channelName: '@balajikikripa',
      channelUrl: 'https://www.youtube.com/@balajikikripa',
      embedId: 'dQw4w9WgXcQ', // Demo placeholder embed (direct links to official channel)
      views: '1.4M views',
      duration: '48:15'
    },
    {
      id: 'vid-main-2',
      title: 'श्री बालाजी महाराज के 5 गुप्त नियम जिनसे जीवन में कभी कष्ट नहीं आता',
      channelName: '@balajikikripa',
      channelUrl: 'https://www.youtube.com/@balajikikripa',
      embedId: 'dQw4w9WgXcQ',
      views: '890K views',
      duration: '22:40'
    }
  ],
  vlogs: [
    {
      id: 'vid-vlog-1',
      title: 'मेहंदीपुर बालाजी से सालासर धाम की दिव्य यात्रा Vlog | अलौकिक दर्शन',
      channelName: '@Balajikikripavlogs',
      channelUrl: 'https://www.youtube.com/@Balajikikripavlogs',
      embedId: 'dQw4w9WgXcQ',
      views: '450K views',
      duration: '18:32'
    },
    {
      id: 'vid-vlog-2',
      title: 'दरबार के पीछे की तैयारियां व सवामणि भोग प्रसाद निर्माण Vlog',
      channelName: '@Balajikikripavlogs',
      channelUrl: 'https://www.youtube.com/@Balajikikripavlogs',
      embedId: 'dQw4w9WgXcQ',
      views: '320K views',
      duration: '14:10'
    }
  ],
  movies: [
    {
      id: 'vid-mov-1',
      title: 'भक्त और भगवान - श्री बालाजी की दिव्य शक्ति | Short Film',
      channelName: '@Balajikikripa_movies',
      channelUrl: 'https://www.youtube.com/@Balajikikripa_movies',
      embedId: 'dQw4w9WgXcQ',
      views: '2.1M views',
      duration: '35:20'
    }
  ],
  podcasts: [
    {
      id: 'vid-pod-1',
      title: 'जब डॉक्टर ने मना कर दिया, तब बालाजी ने किया चमत्कार | सच्चे अनुभव Podcast #12',
      channelName: '@बालाजीकीकृपाPodcasts',
      channelUrl: 'https://www.youtube.com/@%E0%A4%AC%E0%A4%BE%E0%A4%B2%E0%A4%BE%E0%A4%9C%E0%A5%80%E0%A4%95%E0%A5%80%E0%A4%95%E0%A5%83%E0%A4%AA%E0%A4%BEPodcasts',
      embedId: 'dQw4w9WgXcQ',
      views: '670K views',
      duration: '52:10'
    }
  ]
};

// Initial Store Catalog (Divya Book & Panchratna Samagri Batches)
const initialProducts = [
  {
    id: 'prod-divya-book',
    type: 'single',
    name: 'श्री बालाजी कृपा दिव्य ग्रन्थ (Divya Book)',
    nameHi: 'श्री बालाजी कृपा दिव्य ग्रन्थ (सच्चे अनुभव, स्तुति व विधि)',
    unitPrice: 250,
    mrp: 350,
    icon: '📖',
    badge: 'DIVYA GRANTH',
    description: 'श्री बालाजी कृपा द्वारा प्रमाणित संपूर्ण पूजा विधि, सिद्ध संकट मोचन पाठ एवं भक्तों के प्रामाणिक अनुभव। (डाक/कोरियर शुल्क अलग से)',
    stock: 250
  },
  {
    id: 'prod-panchratna-samagri',
    type: 'batch',
    name: 'श्री बालाजी सिद्ध पंचरत्न सामग्री (Panchratna Samagri)',
    nameHi: 'श्री बालाजी सिद्ध पंचरत्न सामग्री (केवल बैच में उपलब्ध)',
    icon: '🪔',
    badge: 'BATCH SEVA PACK',
    description: 'विशेष सिद्ध की गई पंचरत्न सामग्री। नियम एवं सुरक्षा अनुसार केवल 5, 10, 20 एवं 50 के बैच में उपलब्ध।',
    batches: [
      { size: 5, price: 750, mrp: 1000, label: 'Batch of 5 Packs' },
      { size: 10, price: 1400, mrp: 2000, label: 'Batch of 10 Packs (Save ₹100)' },
      { size: 20, price: 2600, mrp: 4000, label: 'Batch of 20 Packs (Save ₹400)' },
      { size: 50, price: 6000, mrp: 10000, label: 'Batch of 50 Packs (Save ₹1500)' }
    ],
    stock: 120
  }
];

// Initial Demo Bookings
const initialSawamani = [
  {
    id: 'SWM-1082',
    devoteeName: 'Sparsh Garg',
    fatherName: 'Shri R.K. Garg',
    gotra: 'Kashyap',
    phone: '+91 98765 43210',
    date: '2026-08-18',
    reason: 'स्वास्थ्य लाभ एवं व्यापार में बाधा निवारण हेतु आभार',
    address: 'Sector 14, Urban Estate, Hisar, Haryana - 125001',
    amount: 11000,
    status: 'confirmed',
    time: 'Today, 09:30 AM'
  }
];

const initialTokens = [
  {
    id: 'TKN-4412',
    devoteeName: 'Sparsh Garg',
    phone: '+91 98765 43210',
    city: 'Hisar, Haryana',
    darbarTitle: 'श्री बालाजी महाराज महा दिव्य दरबार - दिल्ली NCR',
    persons: '2 Persons',
    time: 'Today'
  }
];

// Initialize Application
function initApp() {
  loadStorage();
  setupEventListeners();
  renderDarbarList();
  renderYtVideos();
  renderStoreProducts();
  renderBookings();
  updateTranslations();
  if (state.isAdmin) renderAdminDashboard();
}

// Load data from LocalStorage
function loadStorage() {
  const savedLang = localStorage.getItem('bkk_lang');
  if (savedLang && i18n[savedLang]) state.lang = savedLang;

  const savedAdmin = localStorage.getItem('bkk_is_admin');
  if (savedAdmin === 'true') state.isAdmin = true;

  const savedSawamani = localStorage.getItem('bkk_sawamani');
  if (savedSawamani) {
    try { state.sawamaniBookings = JSON.parse(savedSawamani); }
    catch { state.sawamaniBookings = [...initialSawamani]; }
  } else {
    state.sawamaniBookings = [...initialSawamani];
  }

  const savedTokens = localStorage.getItem('bkk_tokens');
  if (savedTokens) {
    try { state.darbarTokens = JSON.parse(savedTokens); }
    catch { state.darbarTokens = [...initialTokens]; }
  } else {
    state.darbarTokens = [...initialTokens];
  }

  const savedProducts = localStorage.getItem('bkk_v2_products');
  if (savedProducts) {
    try { state.products = JSON.parse(savedProducts); }
    catch { state.products = [...initialProducts]; }
  } else {
    state.products = [...initialProducts];
  }

  const savedOrders = localStorage.getItem('bkk_store_orders');
  if (savedOrders) {
    try { state.storeOrders = JSON.parse(savedOrders); }
    catch { state.storeOrders = []; }
  }
}

// Save data to LocalStorage
function saveStorage() {
  localStorage.setItem('bkk_lang', state.lang);
  localStorage.setItem('bkk_is_admin', state.isAdmin ? 'true' : 'false');
  localStorage.setItem('bkk_sawamani', JSON.stringify(state.sawamaniBookings));
  localStorage.setItem('bkk_tokens', JSON.stringify(state.darbarTokens));
  localStorage.setItem('bkk_v2_products', JSON.stringify(state.products));
  localStorage.setItem('bkk_store_orders', JSON.stringify(state.storeOrders));
}

// Setup Event Listeners
function setupEventListeners() {
  // Bottom Navigation
  document.querySelectorAll('.bottom-nav .nav-item').forEach(btn => {
    btn.addEventListener('click', () => {
      const navTarget = btn.getAttribute('data-nav');
      switchNav(navTarget);
    });
  });

  // Quick Cards on Home
  const quickSawamaniCard = document.getElementById('quickSawamaniCard');
  if (quickSawamaniCard) {
    quickSawamaniCard.addEventListener('click', () => switchNav('sawamani'));
  }

  const quickStoreCard = document.getElementById('quickStoreCard');
  if (quickStoreCard) {
    quickStoreCard.addEventListener('click', () => switchNav('store'));
  }

  // Quick Register Button on Banner
  const registerDarbarQuickBtn = document.getElementById('registerDarbarQuickBtn');
  if (registerDarbarQuickBtn) {
    registerDarbarQuickBtn.addEventListener('click', () => {
      openDarbarModal(darbarEvents[0]);
    });
  }

  // YouTube Channel Tabs
  document.querySelectorAll('#ytChannelTabs .yt-tab').forEach(tab => {
    tab.addEventListener('click', () => {
      document.querySelectorAll('#ytChannelTabs .yt-tab').forEach(t => t.classList.remove('active'));
      tab.classList.add('active');
      state.activeYtChannel = tab.getAttribute('data-channel');
      renderYtVideos();
    });
  });

  // Sawamani Booking Form Submit
  const sawamaniBookingForm = document.getElementById('sawamaniBookingForm');
  if (sawamaniBookingForm) {
    sawamaniBookingForm.addEventListener('submit', (e) => {
      e.preventDefault();
      openPaymentModal({
        type: 'sawamani',
        title: 'श्री बालाजी सवामणि भोग सेवा',
        amount: 11000,
        name: document.getElementById('sawamaniName').value,
        father: document.getElementById('sawamaniFatherName').value,
        gotra: document.getElementById('sawamaniGotra').value,
        phone: document.getElementById('sawamaniPhone').value,
        date: document.getElementById('sawamaniDate').value,
        reason: document.getElementById('sawamaniReason').value,
        address: document.getElementById('sawamaniAddress').value
      });
    });
  }

  // Darbar Registration Modal
  const closeDarbarModalBtn = document.getElementById('closeDarbarModalBtn');
  const darbarModalBackdrop = document.getElementById('darbarModalBackdrop');
  if (closeDarbarModalBtn) {
    closeDarbarModalBtn.addEventListener('click', () => {
      darbarModalBackdrop.classList.add('hidden');
    });
  }

  const darbarRegisterForm = document.getElementById('darbarRegisterForm');
  if (darbarRegisterForm) {
    darbarRegisterForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const eventName = document.getElementById('darbarEventName').value;
      const name = document.getElementById('tokenDevoteeName').value;
      const phone = document.getElementById('tokenDevoteePhone').value;
      const city = document.getElementById('tokenDevoteeCity').value;
      const persons = document.getElementById('tokenPersons').value;
      const tokenId = 'TKN-' + Math.floor(1000 + Math.random() * 9000);

      const newToken = {
        id: tokenId,
        devoteeName: name,
        phone,
        city,
        darbarTitle: eventName,
        persons: `${persons} Person(s)`,
        time: 'Just now'
      };

      state.darbarTokens.unshift(newToken);
      saveStorage();
      darbarModalBackdrop.classList.add('hidden');

      showSuccessModal({
        heading: '🎟️ दरबार टोकन सफलतापूर्वक पंजीकृत',
        message: 'आपका टोकन सुरक्षित कर लिया गया है। कृपया समय पर दरबार स्थल पहुंचें।',
        refId: tokenId,
        name: name,
        status: 'TOKEN ACTIVE 🎟️'
      });
    });
  }

  // Store Cart Drawer
  const openCartDrawerBtn = document.getElementById('openCartDrawerBtn');
  const closeCartDrawerBtn = document.getElementById('closeCartDrawerBtn');
  const cartDrawerBackdrop = document.getElementById('cartDrawerBackdrop');

  if (openCartDrawerBtn) {
    openCartDrawerBtn.addEventListener('click', () => {
      cartDrawerBackdrop.classList.remove('hidden');
      renderCartDrawer();
    });
  }

  if (closeCartDrawerBtn) {
    closeCartDrawerBtn.addEventListener('click', () => {
      cartDrawerBackdrop.classList.add('hidden');
    });
  }

  // Shipping State Selector
  const shippingStateSelector = document.getElementById('shippingStateSelector');
  if (shippingStateSelector) {
    shippingStateSelector.addEventListener('change', (e) => {
      state.shippingState = e.target.value;
      state.shippingFee = shippingRates[e.target.value] ? shippingRates[e.target.value].fee : 50;
      renderCartDrawer();
    });
  }

  // Proceed Store Payment
  const proceedStorePaymentBtn = document.getElementById('proceedStorePaymentBtn');
  if (proceedStorePaymentBtn) {
    proceedStorePaymentBtn.addEventListener('click', () => {
      const address = document.getElementById('cartPostalAddress').value.trim();
      if (!address) {
        showToast('⚠️ कृपया सामग्री प्रेषण हेतु पूरा डाक पता लिखें!');
        return;
      }
      cartDrawerBackdrop.classList.add('hidden');

      const itemsTotal = Object.values(state.cart).reduce((sum, item) => sum + (item.price * item.qty), 0);
      const grandTotal = itemsTotal + state.shippingFee;

      openPaymentModal({
        type: 'store',
        title: 'दिव्य ग्रन्थ एवं सामग्री भण्डार भुगतान',
        amount: grandTotal,
        itemsTotal,
        shippingFee: state.shippingFee,
        address
      });
    });
  }

  // Generic Payment Modal Actions
  const closePaymentModalBtn = document.getElementById('closePaymentModalBtn');
  const paymentModalBackdrop = document.getElementById('paymentModalBackdrop');
  const confirmPaymentBtn = document.getElementById('confirmPaymentBtn');

  if (closePaymentModalBtn) {
    closePaymentModalBtn.addEventListener('click', () => {
      paymentModalBackdrop.classList.add('hidden');
    });
  }

  document.querySelectorAll('input[name="paymentOption"]').forEach(radio => {
    radio.addEventListener('change', () => {
      document.querySelectorAll('.payment-option').forEach(opt => opt.classList.remove('selected'));
      radio.closest('.payment-option').classList.add('selected');
      const qrBox = document.getElementById('qrPreviewBox');
      if (qrBox) qrBox.classList.toggle('hidden', radio.value !== 'upi_qr');
    });
  });

  if (confirmPaymentBtn) {
    confirmPaymentBtn.addEventListener('click', () => {
      paymentModalBackdrop.classList.add('hidden');
      processPaymentCompletion();
    });
  }

  // Success Modal Done Button
  const successDoneBtn = document.getElementById('successDoneBtn');
  const successModalBackdrop = document.getElementById('successModalBackdrop');
  if (successDoneBtn) {
    successDoneBtn.addEventListener('click', () => {
      successModalBackdrop.classList.add('hidden');
      switchNav('orders');
    });
  }

  // Language Modal
  const langModalBtn = document.getElementById('langModalBtn');
  const langModalBackdrop = document.getElementById('langModalBackdrop');
  const closeLangModalBtn = document.getElementById('closeLangModalBtn');
  const openLangFromProfile = document.getElementById('openLangFromProfile');

  const openLang = () => langModalBackdrop.classList.remove('hidden');
  const closeLang = () => langModalBackdrop.classList.add('hidden');

  if (langModalBtn) langModalBtn.addEventListener('click', openLang);
  if (openLangFromProfile) openLangFromProfile.addEventListener('click', openLang);
  if (closeLangModalBtn) closeLangModalBtn.addEventListener('click', closeLang);

  document.querySelectorAll('.lang-card').forEach(card => {
    card.addEventListener('click', () => {
      document.querySelectorAll('.lang-card').forEach(c => c.classList.remove('active'));
      card.classList.add('active');
      state.lang = card.getAttribute('data-lang') || 'en';
      saveStorage();
      updateTranslations();
      closeLang();
      showToast(`Language switched to ${card.querySelector('.lang-native').textContent}`);
    });
  });

  // Admin Passcode Login Modal
  const openAdminLoginModalBtn = document.getElementById('openAdminLoginModalBtn');
  const adminLoginModalBackdrop = document.getElementById('adminLoginModalBackdrop');
  const closeAdminLoginModalBtn = document.getElementById('closeAdminLoginModalBtn');
  const adminLoginForm = document.getElementById('adminLoginForm');
  const adminLogoutBtn = document.getElementById('adminLogoutBtn');

  if (openAdminLoginModalBtn) {
    openAdminLoginModalBtn.addEventListener('click', () => {
      if (state.isAdmin) {
        showToast('🛡️ Admin Command Center already active below');
        const dash = document.getElementById('adminDashboardContainer');
        if (dash) dash.scrollIntoView({ behavior: 'smooth' });
      } else {
        adminLoginModalBackdrop.classList.remove('hidden');
      }
    });
  }

  if (closeAdminLoginModalBtn) {
    closeAdminLoginModalBtn.addEventListener('click', () => {
      adminLoginModalBackdrop.classList.add('hidden');
    });
  }

  if (adminLoginForm) {
    adminLoginForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const code = document.getElementById('adminPasscodeInput').value.trim();
      if (code === 'BALAJI777' || code === 'ADMIN108') {
        state.isAdmin = true;
        saveStorage();
        adminLoginModalBackdrop.classList.add('hidden');
        renderAdminDashboard();
        showToast('🛡️ Admin Portal Authenticated & Unlocked');
      } else {
        showToast('❌ Incorrect Passcode. Access Denied.');
      }
    });
  }

  if (adminLogoutBtn) {
    adminLogoutBtn.addEventListener('click', () => {
      state.isAdmin = false;
      saveStorage();
      document.getElementById('adminDashboardContainer').classList.add('hidden');
      showToast('Logged out of Admin Portal');
    });
  }

  // Admin Subtabs
  document.querySelectorAll('.admin-subtab').forEach(tab => {
    tab.addEventListener('click', () => {
      document.querySelectorAll('.admin-subtab').forEach(t => t.classList.remove('active'));
      document.querySelectorAll('.admin-subpanel').forEach(p => p.classList.remove('active'));
      tab.classList.add('active');
      const targetPanel = tab.getAttribute('data-admin-panel');
      const panel = document.getElementById(targetPanel);
      if (panel) panel.classList.add('active');
    });
  });

  // Bookings Tab switching
  document.querySelectorAll('.bookings-tabs .booking-tab').forEach(tab => {
    tab.addEventListener('click', () => {
      document.querySelectorAll('.bookings-tabs .booking-tab').forEach(t => t.classList.remove('active'));
      document.querySelectorAll('.booking-tab-content').forEach(c => c.classList.remove('active'));
      tab.classList.add('active');
      const target = tab.getAttribute('data-target');
      const content = document.getElementById(target);
      if (content) content.classList.add('active');
    });
  });
}

// Switch Navigation Tab
function switchNav(navName) {
  state.activeNav = navName;
  document.querySelectorAll('.view-section').forEach(sec => sec.classList.remove('active'));
  document.querySelectorAll('.bottom-nav .nav-item').forEach(btn => {
    btn.classList.toggle('active', btn.getAttribute('data-nav') === navName);
  });

  const targetSection = document.getElementById(`${navName}Section`);
  if (targetSection) targetSection.classList.add('active');

  // Handle floating cart visibility
  const floatingBar = document.getElementById('floatingCartBar');
  if (floatingBar) {
    const hasItems = Object.keys(state.cart).length > 0;
    floatingBar.classList.toggle('hidden', !(navName === 'store' && hasItems));
  }

  if (navName === 'orders') renderBookings();
  if (navName === 'store') renderStoreProducts();
  if (navName === 'profile' && state.isAdmin) renderAdminDashboard();
}

// Render Upcoming Darbar Schedule
function renderDarbarList() {
  const container = document.getElementById('darbarScheduleList');
  if (!container) return;

  container.innerHTML = darbarEvents.map(evt => `
    <div class="darbar-event-card">
      <div class="event-details">
        <h4>${evt.title}</h4>
        <div class="event-meta">
          <span>📍 ${evt.location}</span>
          <br>
          <span>📅 ${evt.date} | ⏰ ${evt.time}</span>
        </div>
      </div>
      <button class="btn btn-gold btn-sm" onclick="openDarbarModalById('${evt.id}')">
        🎟️ Token
      </button>
    </div>
  `).join('');
}

// Open Darbar Token Modal
window.openDarbarModalById = function(eventId) {
  const evt = darbarEvents.find(e => e.id === eventId);
  if (evt) openDarbarModal(evt);
};

function openDarbarModal(evt) {
  document.getElementById('darbarEventId').value = evt.id;
  document.getElementById('darbarEventName').value = evt.title;
  document.getElementById('darbarModalBackdrop').classList.remove('hidden');
}

// Render YouTube Feed with In-App & YouTube Links
function renderYtVideos() {
  const container = document.getElementById('ytVideosGrid');
  if (!container) return;

  const videos = ytDatabase[state.activeYtChannel] || ytDatabase.main;

  container.innerHTML = videos.map(vid => `
    <div class="yt-video-card">
      <div class="yt-embed-wrap">
        <iframe 
          src="https://www.youtube.com/embed/${vid.embedId}?rel=0" 
          title="${vid.title}" 
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
          allowfullscreen>
        </iframe>
      </div>
      <div class="yt-video-info">
        <h5 class="yt-video-title">${vid.title}</h5>
        <a href="${vid.channelUrl}" target="_blank" rel="noopener" class="yt-open-btn">
          ▶️ Open in YouTube
        </a>
      </div>
    </div>
  `).join('');
}

// Render Store Products (Divya Book & Panchratna Batches)
function renderStoreProducts() {
  const container = document.getElementById('storeProductsList');
  if (!container) return;

  container.innerHTML = state.products.map(prod => {
    if (prod.type === 'single') {
      const cartItem = state.cart[prod.id] || { qty: 0 };
      return `
        <div class="store-item-card">
          <div class="item-card-top">
            <div class="item-icon-box">${prod.icon}</div>
            <div class="item-info">
              <span class="item-badge">${prod.badge}</span>
              <h4 class="item-title">${state.lang === 'hi' ? prod.nameHi : prod.name}</h4>
              <p class="item-desc">${prod.description}</p>
            </div>
          </div>

          <div class="batch-options-wrap">
            <div class="batch-option-row">
              <div>
                <div class="batch-name">एकल प्रति (Single Book)</div>
                <div style="font-size: 10px; color: var(--text-muted);">MRP: ₹${prod.mrp}</div>
              </div>
              <div style="display: flex; align-items: center;">
                <span class="batch-price">₹${prod.unitPrice}</span>
                ${cartItem.qty > 0 ? `
                  <div style="display: flex; align-items: center; gap: 6px; background: #fff; border: 1px solid var(--primary); border-radius: 6px; padding: 2px 6px;">
                    <button style="border:none; background:none; font-weight:800; color:var(--primary); cursor:pointer;" onclick="updateCartSingle('${prod.id}', ${cartItem.qty - 1})">-</button>
                    <span style="font-weight:800; font-size:12px;">${cartItem.qty}</span>
                    <button style="border:none; background:none; font-weight:800; color:var(--primary); cursor:pointer;" onclick="updateCartSingle('${prod.id}', ${cartItem.qty + 1})">+</button>
                  </div>
                ` : `
                  <button class="btn btn-gold btn-sm" onclick="updateCartSingle('${prod.id}', 1)">+ Add Book</button>
                `}
              </div>
            </div>
          </div>
        </div>
      `;
    } else if (prod.type === 'batch') {
      return `
        <div class="store-item-card">
          <div class="item-card-top">
            <div class="item-icon-box">${prod.icon}</div>
            <div class="item-info">
              <span class="item-badge">${prod.badge}</span>
              <h4 class="item-title">${state.lang === 'hi' ? prod.nameHi : prod.name}</h4>
              <p class="item-desc">${prod.description}</p>
            </div>
          </div>

          <div class="batch-options-wrap">
            ${prod.batches.map(batch => {
              const batchKey = `${prod.id}_batch_${batch.size}`;
              const cartItem = state.cart[batchKey] || { qty: 0 };
              return `
                <div class="batch-option-row">
                  <div>
                    <div class="batch-name">${batch.label}</div>
                    <div style="font-size: 10px; color: var(--text-muted); text-decoration: line-through;">MRP: ₹${batch.mrp}</div>
                  </div>
                  <div style="display: flex; align-items: center;">
                    <span class="batch-price">₹${batch.price}</span>
                    ${cartItem.qty > 0 ? `
                      <div style="display: flex; align-items: center; gap: 6px; background: #fff; border: 1px solid var(--primary); border-radius: 6px; padding: 2px 6px;">
                        <button style="border:none; background:none; font-weight:800; color:var(--primary); cursor:pointer;" onclick="updateCartBatch('${prod.id}', ${batch.size}, ${batch.price}, ${cartItem.qty - 1})">-</button>
                        <span style="font-weight:800; font-size:12px;">${cartItem.qty}</span>
                        <button style="border:none; background:none; font-weight:800; color:var(--primary); cursor:pointer;" onclick="updateCartBatch('${prod.id}', ${batch.size}, ${batch.price}, ${cartItem.qty + 1})">+</button>
                      </div>
                    ` : `
                      <button class="btn btn-gold btn-sm" onclick="updateCartBatch('${prod.id}', ${batch.size}, ${batch.price}, 1)">+ Add Batch</button>
                    `}
                  </div>
                </div>
              `;
            }).join('')}
          </div>
        </div>
      `;
    }
  }).join('');

  updateCartFloatingBar();
}

// Cart Updates
window.updateCartSingle = function(prodId, newQty) {
  const prod = state.products.find(p => p.id === prodId);
  if (!prod) return;

  if (newQty <= 0) {
    delete state.cart[prodId];
  } else {
    state.cart[prodId] = {
      name: prod.name,
      qty: newQty,
      price: prod.unitPrice,
      isBatch: false
    };
  }

  renderStoreProducts();
  renderCartDrawer();
};

window.updateCartBatch = function(prodId, batchSize, batchPrice, newQty) {
  const batchKey = `${prodId}_batch_${batchSize}`;
  if (newQty <= 0) {
    delete state.cart[batchKey];
  } else {
    state.cart[batchKey] = {
      name: `पंचरत्न सामग्री (Batch of ${batchSize})`,
      qty: newQty,
      price: batchPrice,
      isBatch: true,
      batchSize
    };
  }

  renderStoreProducts();
  renderCartDrawer();
};

// Update Floating Cart Bar
function updateCartFloatingBar() {
  const floatingBar = document.getElementById('floatingCartBar');
  const countSpan = document.getElementById('cartTotalItems');
  const priceSpan = document.getElementById('cartTotalPrice');

  const entries = Object.values(state.cart);
  const totalCount = entries.reduce((sum, item) => sum + item.qty, 0);
  const totalPrice = entries.reduce((sum, item) => sum + (item.price * item.qty), 0);

  if (state.activeNav === 'store' && totalCount > 0) {
    countSpan.textContent = `${totalCount} Item(s)`;
    priceSpan.textContent = `₹${totalPrice}`;
    floatingBar.classList.remove('hidden');
  } else {
    floatingBar.classList.add('hidden');
  }
}

// Render Cart Drawer
function renderCartDrawer() {
  const container = document.getElementById('cartItemsList');
  if (!container) return;

  const entries = Object.entries(state.cart);
  if (entries.length === 0) {
    container.innerHTML = `
      <div style="text-align:center; padding: 20px; color: var(--text-muted);">
        <p>आपकी दिव्य सामग्री टोकरी खाली है</p>
      </div>
    `;
    document.getElementById('billItemSubtotal').textContent = '₹0';
    document.getElementById('billGrandTotal').textContent = '₹0';
    return;
  }

  let subtotal = 0;
  container.innerHTML = entries.map(([key, item]) => {
    const itemTotal = item.price * item.qty;
    subtotal += itemTotal;
    return `
      <div class="cart-item-row">
        <div>
          <strong style="font-size:12px; color:var(--text-main);">${item.name}</strong>
          <div style="font-size:11px; color:var(--text-muted);">₹${item.price} × ${item.qty} = <strong>₹${itemTotal}</strong></div>
        </div>
      </div>
    `;
  }).join('');

  const shipping = state.shippingFee;
  const grandTotal = subtotal + shipping;

  document.getElementById('billItemSubtotal').textContent = `₹${subtotal}`;
  document.getElementById('billShippingFee').textContent = `₹${shipping}`;
  document.getElementById('billGrandTotal').textContent = `₹${grandTotal}`;
}

// Open Payment Gateway Modal
let pendingPaymentData = null;
function openPaymentModal(data) {
  pendingPaymentData = data;
  document.getElementById('paymentTitle').textContent = data.title;
  document.getElementById('paymentPayableAmount').textContent = `₹${data.amount.toLocaleString('en-IN')}`;
  document.getElementById('confirmPayAmount').textContent = `₹${data.amount.toLocaleString('en-IN')}`;

  const qrImg = document.getElementById('dynamicPaymentQr');
  if (qrImg) {
    qrImg.src = `https://api.qrserver.com/v1/create-qr-code/?size=180x180&data=upi://pay?pa=balajikripa@upi&pn=Balaji%20Trust&am=${data.amount}&cu=INR`;
  }

  document.getElementById('paymentModalBackdrop').classList.remove('hidden');
}

// Process Payment Completion
function processPaymentCompletion() {
  if (!pendingPaymentData) return;

  if (pendingPaymentData.type === 'sawamani') {
    const refId = 'SWM-' + Math.floor(1000 + Math.random() * 9000);
    const newBooking = {
      id: refId,
      devoteeName: pendingPaymentData.name,
      fatherName: pendingPaymentData.father,
      gotra: pendingPaymentData.gotra,
      phone: pendingPaymentData.phone,
      date: pendingPaymentData.date,
      reason: pendingPaymentData.reason,
      address: pendingPaymentData.address,
      amount: 11000,
      status: 'confirmed',
      time: 'Just now'
    };

    state.sawamaniBookings.unshift(newBooking);
    saveStorage();

    showSuccessModal({
      heading: '🍯 श्री बालाजी सवामणि भोग स्वीकृत',
      message: `सवामणि भोग तिथि ${pendingPaymentData.date} को समर्पित किया जाएगा। अभिमंत्रित महाप्रसाद आपके पते पर भेजा जाएगा।`,
      refId: refId,
      name: pendingPaymentData.name,
      status: 'BHOG CONFIRMED (₹11,000 Paid) ✅'
    });
  } else if (pendingPaymentData.type === 'store') {
    const orderId = 'ORD-' + Math.floor(1000 + Math.random() * 9000);
    const newOrder = {
      id: orderId,
      items: Object.values(state.cart),
      amount: pendingPaymentData.amount,
      shippingState: state.shippingState,
      address: pendingPaymentData.address,
      status: 'dispatched',
      time: 'Just now'
    };

    state.storeOrders.unshift(newOrder);
    state.cart = {};
    saveStorage();
    renderStoreProducts();

    showSuccessModal({
      heading: '📦 दिव्य सामग्री ऑर्डर स्वीकृत',
      message: 'आपकी सामग्री सुरक्षित पैक कर स्पीड पोस्ट/कोरियर द्वारा प्रेषित की जा रही है।',
      refId: orderId,
      name: 'श्री बालाजी भक्त',
      status: 'DISPATCH IN PROGRESS 🚚'
    });
  }

  pendingPaymentData = null;
}

// Show Success Confirmation Modal
function showSuccessModal({ heading, message, refId, name, status }) {
  document.getElementById('successModalHeading').textContent = heading;
  document.getElementById('successModalMessage').textContent = message;
  document.getElementById('successRefId').textContent = `#${refId}`;
  document.getElementById('successDevoteeName').textContent = name;
  document.getElementById('successStatusBadge').textContent = status;
  document.getElementById('successModalBackdrop').classList.remove('hidden');
}

// Render Bookings & Sevas View
function renderBookings() {
  // Darbar Tokens
  const tokensList = document.getElementById('tokensList');
  if (tokensList) {
    if (state.darbarTokens.length === 0) {
      tokensList.innerHTML = `<p style="text-align:center; padding:20px; color:var(--text-muted);">कोई सक्रिय दरबार टोकन नहीं है</p>`;
    } else {
      tokensList.innerHTML = state.darbarTokens.map(t => `
        <div class="record-card">
          <div class="record-header">
            <span class="record-id">🎟️ #${t.id}</span>
            <span class="record-badge badge-confirmed">ACTIVE TOKEN</span>
          </div>
          <div class="record-body">
            <strong>${t.darbarTitle}</strong>
            <div>👤 भक्त: ${t.devoteeName} (${t.city})</div>
            <div>👥 सदस्य: ${t.persons}</div>
          </div>
        </div>
      `).join('');
    }
  }

  // Sawamani Bookings
  const sawamaniList = document.getElementById('sawamaniList');
  if (sawamaniList) {
    if (state.sawamaniBookings.length === 0) {
      sawamaniList.innerHTML = `<p style="text-align:center; padding:20px; color:var(--text-muted);">कोई सवामणि बुकिंग नहीं है</p>`;
    } else {
      sawamaniList.innerHTML = state.sawamaniBookings.map(s => `
        <div class="record-card">
          <div class="record-header">
            <span class="record-id">🍯 #${s.id}</span>
            <span class="record-badge badge-confirmed">₹11,000 PAID</span>
          </div>
          <div class="record-body">
            <div><strong>भक्त:</strong> ${s.devoteeName} (गोत्र: ${s.gotra})</div>
            <div><strong>भोग तिथि:</strong> ${s.date}</div>
            <div><strong>संकल्प:</strong> ${s.reason}</div>
            <div><strong>प्रसाद प्रेषण पता:</strong> ${s.address}</div>
          </div>
        </div>
      `).join('');
    }
  }

  // Store Orders
  const storeOrdersList = document.getElementById('storeOrdersList');
  if (storeOrdersList) {
    if (state.storeOrders.length === 0) {
      storeOrdersList.innerHTML = `<p style="text-align:center; padding:20px; color:var(--text-muted);">कोई सामग्री ऑर्डर नहीं है</p>`;
    } else {
      storeOrdersList.innerHTML = state.storeOrders.map(o => `
        <div class="record-card">
          <div class="record-header">
            <span class="record-id">📦 #${o.id}</span>
            <span class="record-badge badge-dispatched">DISPATCHED 🚚</span>
          </div>
          <div class="record-body">
            <div>${o.items.map(i => `• ${i.name} (x${i.qty})`).join('<br>')}</div>
            <div style="margin-top:4px; font-weight:800; color:var(--primary);">कुल भुगतान: ₹${o.amount}</div>
          </div>
        </div>
      `).join('');
    }
  }
}

// Render Admin Command Center
function renderAdminDashboard() {
  const dash = document.getElementById('adminDashboardContainer');
  if (!dash) return;
  dash.classList.remove('hidden');

  const totalSawamaniRevenue = state.sawamaniBookings.length * 11000;
  document.getElementById('adminTotalSawamani').textContent = `₹${totalSawamaniRevenue.toLocaleString('en-IN')}`;
  document.getElementById('adminTotalTokens').textContent = state.darbarTokens.length;
  document.getElementById('adminTotalStoreOrders').textContent = state.storeOrders.length;

  // Admin Sawamani Table
  const sawamaniTbody = document.getElementById('adminSawamaniTableBody');
  if (sawamaniTbody) {
    sawamaniTbody.innerHTML = state.sawamaniBookings.map(s => `
      <tr>
        <td><strong>${s.devoteeName}</strong><br><span style="font-size:9px; color:var(--text-muted);">${s.gotra}</span></td>
        <td>${s.date}<br><span style="font-size:9px;">${s.reason.substring(0, 25)}...</span></td>
        <td><strong>₹11,000</strong></td>
        <td><span class="record-badge badge-confirmed">BLESSED</span></td>
        <td><button class="btn btn-sm btn-outline" onclick="showToast('Bhog details updated')">Update</button></td>
      </tr>
    `).join('');
  }

  // Admin Darbar Tokens Table
  const tokensTbody = document.getElementById('adminTokensTableBody');
  if (tokensTbody) {
    tokensTbody.innerHTML = state.darbarTokens.map(t => `
      <tr>
        <td><strong>#${t.id}</strong></td>
        <td>${t.devoteeName}</td>
        <td>${t.city}<br><span style="font-size:9px;">${t.phone}</span></td>
        <td>${t.darbarTitle.substring(0, 20)}...</td>
        <td><span class="record-badge badge-confirmed">ATTENDING</span></td>
      </tr>
    `).join('');
  }

  // Admin Inventory Table
  const invTbody = document.getElementById('adminInventoryTableBody');
  if (invTbody) {
    invTbody.innerHTML = state.products.map(p => `
      <tr>
        <td><strong>${p.name}</strong></td>
        <td>${p.type === 'single' ? `₹${p.unitPrice}` : 'Batch Pricing'}</td>
        <td><strong>${p.stock} units</strong></td>
        <td>
          <button class="btn btn-sm btn-outline" onclick="updateAdminStock('${p.id}')">✏️ Edit Stock</button>
        </td>
      </tr>
    `).join('');
  }
}

window.updateAdminStock = function(prodId) {
  const prod = state.products.find(p => p.id === prodId);
  if (!prod) return;
  const newStock = prompt(`Update stock for ${prod.name}:`, prod.stock);
  if (newStock !== null) {
    prod.stock = parseInt(newStock) || 0;
    saveStorage();
    renderStoreProducts();
    renderAdminDashboard();
    showToast('Stock quantity updated');
  }
};

// Translate UI elements
function updateTranslations() {
  const dict = i18n[state.lang] || i18n.en;

  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (dict[key]) el.textContent = dict[key];
  });

  const langBadge = document.getElementById('currentLangBadge');
  if (langBadge) langBadge.textContent = state.lang.toUpperCase();

  const profLang = document.getElementById('profileCurrentLang');
  if (profLang) {
    const names = { en: 'English', hi: 'हिंदी (Hindi)', sa: 'संस्कृतम् (Sanskrit)', gu: 'ગુજરાતી (Gujarati)', te: 'తెలుగు (Telugu)', ta: 'தமிழ் (Tamil)', bn: 'বাংলা (Bengali)' };
    profLang.textContent = names[state.lang] || state.lang;
  }
}

// Toast Helper
function showToast(msg) {
  const toast = document.getElementById('toast');
  if (!toast) return;
  toast.textContent = msg;
  toast.classList.remove('hidden');
  clearTimeout(window.toastTimer);
  window.toastTimer = setTimeout(() => toast.classList.add('hidden'), 2600);
}

// Initialize on DOM Ready
document.addEventListener('DOMContentLoaded', initApp);
