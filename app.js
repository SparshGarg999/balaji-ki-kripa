/**
 * ===================================================================
 * BALAJI KI KRIPA (श्री बालाजी कृपा) - 2026 OFFICIAL APP LOGIC
 * ===================================================================
 */

// Global Application State
const state = {
  lang: 'en', // 'en' or 'hi'
  isAdmin: false,
  activeNav: 'home',
  activeAdminTab: 'adminOverviewTab',
  activeYtChannel: 'main',
  cart: {}, // { [id]: { name, nameHi, qty, price, isBatch, batchSize } }
  shippingState: 'delhi_ncr',
  shippingFee: 50,
  sawamaniBookings: [],
  storeOrders: [],
  darbarPasses: [],
  products: []
};

// Shipping Rates by Region
const shippingRates = {
  delhi_ncr: { name: 'Delhi / NCR & Haryana', fee: 50 },
  north_india: { name: 'North India (UP, Punjab, Rajasthan, HP, UK)', fee: 70 },
  central_west: { name: 'West & Central (Maharashtra, Gujarat, MP)', fee: 90 },
  south_east: { name: 'South & East (Karnataka, TN, Bengal, Odisha)', fee: 110 },
  remote: { name: 'North-East & Remote Regions', fee: 140 }
};

// 100% Comprehensive Bilingual Translation Dictionary (English / Hindi)
const i18n = {
  en: {
    brandTitle: 'Balaji Ki Kripa',
    liveDarbarBadge: 'Official Darbar Platform',
    darbarTag: '🚩 SHREE BALAJI DIVYA DARBAR',
    darbarOpenBadge: '🔴 REGISTRATION OPEN',
    darbarMainHeading: 'Shree Balaji Ki Kripa Divya Darbar',
    darbarLocationText: 'Official Permanent Darbar Dham, Hisar. Divine Arji, Kasht Nivaran & Blessings.',
    btnRegisterDarbar: 'Register Darbar Form',
    btnGoogleMaps: 'Darbar Location (Map)',
    sawamaniBadge: '50 KG BHOG',
    sawamaniTitle: 'Sawamani Seva',
    storeBadge: 'OFFICIAL STORE',
    storeTitle: 'Divya Store',
    quickTrackTitle: 'Track Your Seva / Order Status',
    quickTrackSub: 'Enter your Reference ID (e.g. SWM-1082 or ORD-5021)',
    btnTrack: 'Track 🚚',
    darbarGuideTitle: 'Darbar Rules & What to Bring',
    darbarGuideSubtitle: 'Important instructions for all visiting devotees',
    guide1Title: 'Official Registration Link:',
    guide1Desc: 'Fill the official Google Form in advance for hassle-free entry.',
    guide2Title: 'Darbar Location:',
    guide2Desc: 'Always held at Shree Balaji Ki Kripa Dham, Hisar. Accessible via Google Maps.',
    guide3Title: 'Samagri & Coconut:',
    guide3Desc: 'Bring fresh Pooja coconut and Arji red cloth for the sankalp ritual.',
    ytSectionTitle: 'Official Channels & Podcasts',
    ytSectionSub: 'Watch Satsang, Darbar Vlogs, Movies & Podcasts',
    watchOnYt: 'Watch on YouTube',
    sawamaniPill: '🍯 SHREE BALAJI SEVA',
    sawamaniPageTitle: 'Sawamani Bhog Seva',
    sawamaniPageSubtitle: '50 Kilograms (1.25 Maund) Pure Desi Ghee Besan Ladoo Bhog',
    whySawamaniTitle: 'Why is Sawamani Offered? (Significance)',
    whySawamaniDesc: 'Sawamani is the sacred offering of 50 kg pure desi ghee besan ladoos at the lotus feet of Shree Balaji Maharaj. Devotees offer Sawamani for wish fulfillment, protection from obstacles, recovery from health issues, and express gratitude upon prayer fulfillment. The sanctified Mahaprasad is distributed among thousands of pilgrims and also dispatched to your postal address.',
    sawamaniCostLabel: 'Sawamani Seva Amount:',
    sawamaniFixedTag: 'Fixed Seva Amount (50 Kg Pure Desi Ghee Bhog)',
    sankalpFormTitle: 'Devotee Sankalp Form',
    sankalpFormSub: 'Please fill all details accurately for Mahaprasad dispatch and email receipt',
    labelName: '1. Devotee Full Name (भक्त का पूरा नाम) *',
    labelPhone: '2. Mobile / WhatsApp Number (मोबाइल नंबर) *',
    labelEmail: 'Email Address for Digital Receipt (ईमेल पता - रसीद हेतु)',
    labelAddress: '3. Complete Postal Address for Prasad Delivery (प्रसाद डिलीवरी का पूरा पता) *',
    labelReason: '4. Reason for Sawamani / Sankalp (सवामणि लगाने का कारण / संकल्प) *',
    btnPaySawamani: 'Book Sankalp & Pay ₹11,000 ➔',
    storePill: '🛍️ OFFICIAL STORE',
    storeHeading: 'Divya Bhandar & Samagri',
    storeSub: 'Official Granth & Energized Panchratna Samagri',
    storeDeliveryTitle: 'Direct Dispatch from Temple Bhandar',
    storeDeliverySub: 'Speed Post / Express Courier with live tracking',
    mySevasPill: '📋 DEVOTEE HISTORY',
    mySevasHeading: 'My Sevas & Orders',
    mySevasSub: 'Live Tracking, Digital Receipts & Booking History',
    tabSawamani: '🍯 Sawamani (सवामणि)',
    tabStore: '📦 Store Orders (ऑर्डर्स)',
    devoteeGreeting: 'Shree Balaji Devotee',
    registeredTag: '🚩 Registered Devotee',
    settingLang: 'App Language',
    settingAbout: 'About Balaji Ki Kripa',
    settingAboutSub: 'Dham History & Mission',
    settingHelp: 'Helpline & WhatsApp Support',
    settingSevadar: 'Authorized Sevadar Portal',
    settingSevadarSub: 'Temple Management & Dispatch Desk',
    viewBasket: 'View Cart',
    cartSheetTitle: 'Your Shopping Basket',
    shippingStateLabel: '📍 Select Delivery State (डाक/कोरियर राज्य):',
    cartAddressLabel: 'Complete Delivery Address (डिलीवरी पता) *',
    billItemsTotal: 'Items Subtotal:',
    billShippingFee: 'Shipping Charges:',
    billGrandTotal: 'Total Amount:',
    btnProceedPayment: 'Proceed to Secure Payment ➔',
    paymentModalHeading: 'Secure Seva Payment',
    payableAmountText: 'Payable Amount:',
    successDefaultHeading: 'Seva Booking Confirmed!',
    successDefaultMsg: 'Your offering has been registered with Shree Balaji Maharaj.',
    btnViewMySevas: 'View My Sevas 📋',
    navHome: 'Home',
    navSawamani: 'Sawamani',
    navStore: 'Store',
    navOrders: 'My Sevas',
    navProfile: 'Profile'
  },
  hi: {
    brandTitle: 'श्री बालाजी कृपा',
    liveDarbarBadge: 'आधिकारिक दरबार मंच',
    darbarTag: '🚩 श्री बालाजी दिव्य दरबार',
    darbarOpenBadge: '🔴 पंजीकरण खुला है',
    darbarMainHeading: 'श्री बालाजी कृपा दिव्य दरबार धाम',
    darbarLocationText: 'आधिकारिक स्थाई दरबार धाम, हिसार। दिव्य अर्जी, कष्ट निवारण एवं आशीर्वाद।',
    btnRegisterDarbar: 'दरबार फॉर्म भरें (रजिस्ट्रेशन)',
    btnGoogleMaps: 'दरबार लोकेशन (गूगल मैप)',
    sawamaniBadge: '50 किलो भोग',
    sawamaniTitle: 'सवामणि सेवा',
    storeBadge: 'आधिकारिक भण्डार',
    storeTitle: 'दिव्य भण्डार',
    quickTrackTitle: 'अपनी सेवा / ऑर्डर स्थिति ट्रैक करें',
    quickTrackSub: 'अपना रेफरेंस आईडी दर्ज करें (उदा. SWM-1082 या ORD-5021)',
    btnTrack: 'ट्रैक करें 🚚',
    darbarGuideTitle: 'दरबार नियम एवं साथ लाने योग्य सामग्री',
    darbarGuideSubtitle: 'दरबार में आने वाले सभी भक्तों हेतु आवश्यक दिशा-निर्देश',
    guide1Title: 'आधिकारिक रजिस्ट्रेशन लिंक:',
    guide1Desc: 'सुगम प्रवेश हेतु पहले से आधिकारिक गूगल फॉर्म अवश्य भरें।',
    guide2Title: 'दरबार स्थल (लोकेशन):',
    guide2Desc: 'दरबार सदैव श्री बालाजी कृपा धाम, हिसार में लगता है। गूगल मैप पर देखें।',
    guide3Title: 'सामग्री व नारियल:',
    guide3Desc: 'संकल्प अर्जी हेतु पूजा का पानी वाला नारियल व लाल कपड़ा साथ लाएं।',
    ytSectionTitle: 'आधिकारिक चैनल्स एवं पॉडकास्ट',
    ytSectionSub: 'सत्संग, दरबार व्लॉग्स, मूवीज व पॉडकास्ट देखें',
    watchOnYt: 'यूट्यूब पर देखें',
    sawamaniPill: '🍯 श्री बालाजी महाभोग',
    sawamaniPageTitle: 'श्री बालाजी सवामणि भोग सेवा',
    sawamaniPageSubtitle: '50 किलोग्राम (सवा मन) शुद्ध देसी घी बेसन लड्डू महाभोग',
    whySawamaniTitle: 'सवामणि क्यों लगाई जाती है? (महत्व)',
    whySawamaniDesc: 'सवामणि का अर्थ है 50 किलो शुद्ध देसी घी के बेसन लड्डुओं का महाभोग श्री बालाजी महाराज के श्रीचरणों में समर्पित करना। भक्त मनोकामना पूर्ति, संकट व रोग निवारण, व्यापार वृद्धि अथवा कृतज्ञता स्वरूप सवामणि लगाते हैं। भोग के उपरांत महाप्रसाद हजारों भक्तों में बांटा जाता है तथा अभिमंत्रित प्रसाद आपके घर के पते पर भेजा जाता है।',
    sawamaniCostLabel: 'सवामणि सेवा सहयोग राशि:',
    sawamaniFixedTag: 'निश्चित सेवा राशि (50 किलो शुद्ध देसी घी भोग)',
    sankalpFormTitle: 'भक्त सवामणि संकल्प फॉर्म',
    sankalpFormSub: 'प्रसाद प्राप्ति एवं डिजिटल रसीद हेतु कृपया सभी विवरण सही भरें',
    labelName: '1. भक्त का पूरा नाम *',
    labelPhone: '2. मोबाइल / व्हाट्सएप नंबर *',
    labelEmail: 'ईमेल पता (डिजिटल रसीद हेतु)',
    labelAddress: '3. महाप्रसाद डिलीवरी का पूरा डाक पता *',
    labelReason: '4. सवामणि लगाने का कारण / संकल्प *',
    btnPaySawamani: 'सवामणि संकल्प करें एवं ₹11,000 भुगतान करें ➔',
    storePill: '🛍️ आधिकारिक भण्डार',
    storeHeading: 'दिव्य ग्रन्थ एवं सिद्ध सामग्री',
    storeSub: 'प्रमाणित दिव्य पुस्तक एवं सिद्ध पंचरत्न सामग्री',
    storeDeliveryTitle: 'धाम भण्डार से सीधा सुरक्षित प्रेषण',
    storeDeliverySub: 'स्पीड पोस्ट / कोरियर द्वारा ट्रैकिंग सहित डिलीवरी',
    mySevasPill: '📋 सेवा इतिहास',
    mySevasHeading: 'मेरी सेवाएं एवं ऑर्डर्स',
    mySevasSub: 'लाइव ट्रैकिंग, डिजिटल रसीद एवं बुकिंग इतिहास',
    tabSawamani: '🍯 सवामणि भोग',
    tabStore: '📦 सामग्री ऑर्डर्स',
    devoteeGreeting: 'श्री बालाजी कृपा भक्त',
    registeredTag: '🚩 प्रमाणित पंजीकृत भक्त',
    settingLang: 'ऐप भाषा (Language)',
    settingAbout: 'श्री बालाजी कृपा के बारे में',
    settingAboutSub: 'धाम इतिहास व उद्देश्य',
    settingHelp: 'हेल्पलाइन व व्हाट्सएप सहायता',
    settingSevadar: 'अधिकृत सेवादार पोर्टल',
    settingSevadarSub: 'धाम प्रबंधन एवं प्रेषण डेस्क',
    viewBasket: 'टोकरी देखें',
    cartSheetTitle: 'आपकी सामग्री टोकरी',
    shippingStateLabel: '📍 डिलीवरी राज्य चुनें (डाक/कोरियर शुल्क हेतु):',
    cartAddressLabel: 'सामग्री प्राप्ति का पूरा डाक पता *',
    billItemsTotal: 'सामग्री कुल मूल्य:',
    billShippingFee: 'डाक/कोरियर शुल्क:',
    billGrandTotal: 'कुल देय राशि:',
    btnProceedPayment: 'सुरक्षित भुगतान करें ➔',
    paymentModalHeading: 'श्री बालाजी सेवा भुगतान',
    payableAmountText: 'कुल देय राशि:',
    successDefaultHeading: 'सेवा संकल्प सफलतापूर्वक स्वीकृत!',
    successDefaultMsg: 'आपका संकल्प श्री बालाजी महाराज के चरणों में समर्पित हो गया है।',
    btnViewMySevas: 'मेरी सेवाएं देखें 📋',
    navHome: 'होम',
    navSawamani: 'सवामणि',
    navStore: 'भण्डार',
    navOrders: 'मेरी सेवाएं',
    navProfile: 'प्रोफाइल'
  }
};

// YouTube Database mapped to the 4 Official Channels provided by user
const ytDatabase = {
  main: [
    {
      id: 'vid-main-1',
      title: '🔴 श्री बालाजी कृपा महा दिव्य दरबार - लाइव अर्जी एवं संकट निवारण',
      channelName: '@balajikikripa',
      channelUrl: 'https://www.youtube.com/@balajikikripa',
      embedId: 'dQw4w9WgXcQ'
    },
    {
      id: 'vid-main-2',
      title: 'श्री बालाजी महाराज के 5 गुप्त नियम जिनसे जीवन में कभी कष्ट नहीं आता',
      channelName: '@balajikikripa',
      channelUrl: 'https://www.youtube.com/@balajikikripa',
      embedId: 'dQw4w9WgXcQ'
    }
  ],
  vlogs: [
    {
      id: 'vid-vlog-1',
      title: 'Vanshu Dpk Vlogs | मेहंदीपुर बालाजी से सालासर धाम की दिव्य यात्रा Vlog',
      channelName: '@Balajikikripavlogs',
      channelUrl: 'https://www.youtube.com/@Balajikikripavlogs',
      embedId: 'dQw4w9WgXcQ'
    },
    {
      id: 'vid-vlog-2',
      title: 'दरबार के पीछे की तैयारियां व सवामणि भोग निर्माण Vlog',
      channelName: '@Balajikikripavlogs',
      channelUrl: 'https://www.youtube.com/@Balajikikripavlogs',
      embedId: 'dQw4w9WgXcQ'
    }
  ],
  movies: [
    {
      id: 'vid-mov-1',
      title: 'भक्त और भगवान - श्री बालाजी की दिव्य शक्ति | Short Film',
      channelName: '@Balajikikripa_movies',
      channelUrl: 'https://www.youtube.com/@Balajikikripa_movies',
      embedId: 'dQw4w9WgXcQ'
    }
  ],
  podcasts: [
    {
      id: 'vid-pod-1',
      title: 'जब डॉक्टर ने मना कर दिया, तब बालाजी ने किया चमत्कार | सच्चे अनुभव Podcast #12',
      channelName: '@बालाजीकीकृपाPodcasts',
      channelUrl: 'https://www.youtube.com/@%E0%A4%AC%E0%A4%BE%E0%A4%B2%E0%A4%BE%E0%A4%9C%E0%A5%80%E0%A4%95%E0%A5%80%E0%A4%95%E0%A5%83%E0%A4%AA%E0%A4%BEPodcasts',
      embedId: 'dQw4w9WgXcQ'
    }
  ]
};

// Initial Catalog Data
const initialProducts = [
  {
    id: 'prod-divya-book',
    type: 'single',
    name: 'Divya Granth (श्री बालाजी कृपा दिव्य पुस्तक)',
    nameHi: 'श्री बालाजी कृपा दिव्य ग्रन्थ (सच्चे अनुभव, स्तुति व विधि)',
    unitPrice: 250,
    mrp: 350,
    icon: '📖',
    badge: 'DIVYA BOOK',
    description: 'Complete prayer guide, Stuti, and miraculous devotee experiences.',
    descriptionHi: 'श्री बालाजी कृपा द्वारा प्रमाणित संपूर्ण पूजा विधि, सिद्ध संकट मोचन पाठ।',
    stock: 250
  },
  {
    id: 'prod-panchratna-samagri',
    type: 'batch',
    name: 'Panchratna Samagri (पंचरत्न सामग्री)',
    nameHi: 'श्री बालाजी सिद्ध पंचरत्न सामग्री (बैच में)',
    icon: '🪔',
    badge: 'BATCH PACK',
    description: 'Special energized sacred samagri. Sold strictly in batches.',
    descriptionHi: 'विशेष सिद्ध की गई पंचरत्न सामग्री। केवल 5, 10, 20 एवं 50 के बैच में।',
    batches: [
      { size: 5, price: 750, mrp: 1000, label: 'Batch of 5 Packs' },
      { size: 10, price: 1400, mrp: 2000, label: 'Batch of 10 (Save ₹100)' },
      { size: 20, price: 2600, mrp: 4000, label: 'Batch of 20 (Save ₹400)' },
      { size: 50, price: 6000, mrp: 10000, label: 'Batch of 50 (Save ₹1500)' }
    ],
    stock: 120
  }
];

// Initial Demo Bookings with Step Tracking & Tracking IDs
const initialSawamani = [
  {
    id: 'SWM-1082',
    name: 'Sparsh Garg',
    phone: '+91 98765 43210',
    email: 'sparsh@example.com',
    address: 'Sector 14, Urban Estate, Hisar, Haryana - 125001',
    reason: 'स्वास्थ्य लाभ एवं व्यापार में बाधा निवारण हेतु आभार',
    amount: 11000,
    status: 'dispatched', // 'confirmed', 'prepared', 'dispatched', 'delivered'
    trackingNumber: 'SP89210928IN',
    courier: 'India Post Speed Post',
    time: 'Today, 09:30 AM'
  }
];

const initialOrders = [
  {
    id: 'ORD-4920',
    name: 'Devotee Rajesh',
    phone: '+91 99887 76655',
    email: 'rajesh@example.com',
    address: 'Rohini Sector 7, New Delhi - 110085',
    items: [{ name: 'Divya Granth (श्री बालाजी कृपा दिव्य पुस्तक)', qty: 1, price: 250 }],
    amount: 300,
    shippingState: 'delhi_ncr',
    status: 'dispatched',
    trackingNumber: 'SP77492019IN',
    courier: 'India Post Speed Post',
    time: 'Yesterday, 04:15 PM'
  }
];

const initialDarbarPasses = [
  { id: 'DRB-101', name: 'Sparsh Garg', city: 'Hisar, Haryana', date: 'Upcoming Tuesday', status: 'CONFIRMED PASS' },
  { id: 'DRB-102', name: 'Sunil Mittal', city: 'Jaipur, Rajasthan', date: 'Upcoming Tuesday', status: 'CONFIRMED PASS' },
  { id: 'DRB-103', name: 'Pooja Aggarwal', city: 'Delhi / NCR', date: 'Upcoming Tuesday', status: 'CONFIRMED PASS' }
];

// Initialize App
function initApp() {
  loadStorage();
  setupEventListeners();
  renderYtVideos();
  renderStoreTiles();
  renderBookings();
  applyLanguage(state.lang);
  
  // Check URL Hash for admin route e.g. #admin
  if (window.location.hash === '#admin') {
    if (state.isAdmin) {
      showAdminView();
    } else {
      document.getElementById('adminPasscodeModal').classList.remove('hidden');
    }
  }
}

// Load Storage
function loadStorage() {
  const savedLang = localStorage.getItem('bkk_lang');
  if (savedLang && (savedLang === 'en' || savedLang === 'hi')) state.lang = savedLang;

  const savedAdmin = localStorage.getItem('bkk_is_admin');
  if (savedAdmin === 'true') state.isAdmin = true;

  const savedSawamani = localStorage.getItem('bkk_sawamani_v5');
  if (savedSawamani) {
    try { state.sawamaniBookings = JSON.parse(savedSawamani); }
    catch { state.sawamaniBookings = [...initialSawamani]; }
  } else {
    state.sawamaniBookings = [...initialSawamani];
  }

  const savedProducts = localStorage.getItem('bkk_products_v5');
  if (savedProducts) {
    try { state.products = JSON.parse(savedProducts); }
    catch { state.products = [...initialProducts]; }
  } else {
    state.products = [...initialProducts];
  }

  const savedOrders = localStorage.getItem('bkk_orders_v5');
  if (savedOrders) {
    try { state.storeOrders = JSON.parse(savedOrders); }
    catch { state.storeOrders = [...initialOrders]; }
  } else {
    state.storeOrders = [...initialOrders];
  }

  const savedPasses = localStorage.getItem('bkk_passes_v5');
  if (savedPasses) {
    try { state.darbarPasses = JSON.parse(savedPasses); }
    catch { state.darbarPasses = [...initialDarbarPasses]; }
  } else {
    state.darbarPasses = [...initialDarbarPasses];
  }
}

// Save Storage
function saveStorage() {
  localStorage.setItem('bkk_lang', state.lang);
  localStorage.setItem('bkk_is_admin', state.isAdmin ? 'true' : 'false');
  localStorage.setItem('bkk_sawamani_v5', JSON.stringify(state.sawamaniBookings));
  localStorage.setItem('bkk_products_v5', JSON.stringify(state.products));
  localStorage.setItem('bkk_orders_v5', JSON.stringify(state.storeOrders));
  localStorage.setItem('bkk_passes_v5', JSON.stringify(state.darbarPasses));
}

// Setup Event Listeners
function setupEventListeners() {
  // Navigation Bar Items
  document.querySelectorAll('.bottom-dock .dock-item').forEach(item => {
    item.addEventListener('click', () => {
      const target = item.getAttribute('data-nav');
      switchNav(target);
    });
  });

  // Brand Header Click
  const brandHomeBtn = document.getElementById('brandHomeBtn');
  if (brandHomeBtn) brandHomeBtn.addEventListener('click', () => switchNav('home'));

  // Quick Service Tiles on Home
  const quickSawamaniTile = document.getElementById('quickSawamaniTile');
  if (quickSawamaniTile) quickSawamaniTile.addEventListener('click', () => switchNav('sawamani'));

  const quickStoreTile = document.getElementById('quickStoreTile');
  if (quickStoreTile) quickStoreTile.addEventListener('click', () => switchNav('store'));

  // Quick Tracking Search on Home
  const quickTrackBtn = document.getElementById('quickTrackBtn');
  if (quickTrackBtn) {
    quickTrackBtn.addEventListener('click', () => {
      const query = document.getElementById('quickTrackInput').value.trim().toUpperCase();
      if (!query) {
        showToast(state.lang === 'hi' ? 'कृपया रेफरेंस आईडी दर्ज करें' : 'Please enter Reference ID');
        return;
      }
      openTrackingResultModal(query);
    });
  }

  const closeTrackingModalBtn = document.getElementById('closeTrackingModalBtn');
  if (closeTrackingModalBtn) {
    closeTrackingModalBtn.addEventListener('click', () => {
      document.getElementById('trackingResultModal').classList.add('hidden');
    });
  }

  // Language Switch Button in Header
  const langSwitchBtn = document.getElementById('langSwitchBtn');
  if (langSwitchBtn) {
    langSwitchBtn.addEventListener('click', () => {
      const newLang = state.lang === 'en' ? 'hi' : 'en';
      state.lang = newLang;
      saveStorage();
      applyLanguage(newLang);
      showToast(newLang === 'en' ? 'Language switched to English' : 'भाषा हिंदी में बदल दी गई है');
    });
  }

  // Profile row language switch
  const profileLangRow = document.getElementById('profileLangRow');
  if (profileLangRow) {
    profileLangRow.addEventListener('click', () => {
      const newLang = state.lang === 'en' ? 'hi' : 'en';
      state.lang = newLang;
      saveStorage();
      applyLanguage(newLang);
      showToast(newLang === 'en' ? 'Language: English' : 'भाषा: हिंदी');
    });
  }

  // YouTube Channel Tabs
  document.querySelectorAll('#ytChannelPills .pill-tab').forEach(tab => {
    tab.addEventListener('click', () => {
      document.querySelectorAll('#ytChannelPills .pill-tab').forEach(t => t.classList.remove('active'));
      tab.classList.add('active');
      state.activeYtChannel = tab.getAttribute('data-channel');
      renderYtVideos();
    });
  });

  // 🌟 Live Royal Sankalp Patra Preview Sync
  const nameInput = document.getElementById('sawamaniDevoteeName');
  const phoneInput = document.getElementById('sawamaniPhone');
  const reasonInput = document.getElementById('sawamaniReason');
  const addressInput = document.getElementById('sawamaniAddress');

  const liveName = document.getElementById('livePreviewName');
  const livePhone = document.getElementById('livePreviewPhone');
  const liveReason = document.getElementById('livePreviewReason');
  const liveAddress = document.getElementById('livePreviewAddress');

  if (nameInput && liveName) {
    nameInput.addEventListener('input', (e) => {
      const val = e.target.value.trim();
      liveName.textContent = val ? (state.lang === 'hi' ? `श्री / श्रीमती ${val}` : `Shree / Smt. ${val}`) : (state.lang === 'hi' ? 'श्री / श्रीमती भक्त नाम' : 'Shree / Smt. Devotee Name');
    });
  }

  if (phoneInput && livePhone) {
    phoneInput.addEventListener('input', (e) => {
      const val = e.target.value.trim();
      livePhone.textContent = val ? `+91 ${val}` : '+91 XXXXX XXXXX';
    });
  }

  if (reasonInput && liveReason) {
    reasonInput.addEventListener('input', (e) => {
      const val = e.target.value.trim();
      liveReason.textContent = val ? val : (state.lang === 'hi' ? 'स्वास्थ्य लाभ, संकट निवारण एवं परिवार में सुख-शांति हेतु...' : 'Health, obstacle removal & family peace...');
    });
  }

  if (addressInput && liveAddress) {
    addressInput.addEventListener('input', (e) => {
      const val = e.target.value.trim();
      liveAddress.textContent = val ? val : (state.lang === 'hi' ? 'धाम द्वारा आपके निवास स्थान पर स्पीड पोस्ट से प्रेषित' : 'Dispatched directly to your address via Speed Post');
    });
  }

  // ⚡ 1-Tap Preset Reason Chips Click Handler
  document.querySelectorAll('#sawamaniReasonChips .reason-chip-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('#sawamaniReasonChips .reason-chip-btn').forEach(b => b.classList.remove('selected'));
      btn.classList.add('selected');
      const reasonText = btn.getAttribute('data-reason');
      if (reasonInput) {
        reasonInput.value = reasonText;
        reasonInput.dispatchEvent(new Event('input'));
        reasonInput.focus();
      }
    });
  });

  // Sawamani 4-Field Form Submit
  const sawamaniSimpleForm = document.getElementById('sawamaniSimpleForm');
  if (sawamaniSimpleForm) {
    sawamaniSimpleForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const name = document.getElementById('sawamaniDevoteeName').value.trim();
      const phone = document.getElementById('sawamaniPhone').value.trim();
      const email = document.getElementById('sawamaniEmail').value.trim();
      const address = document.getElementById('sawamaniAddress').value.trim();
      const reason = document.getElementById('sawamaniReason').value.trim();

      if (!name || !phone || !address || !reason) {
        showToast(state.lang === 'hi' ? 'कृपया सभी आवश्यक विवरण भरें!' : 'Please fill all required fields!');
        return;
      }

      openPaymentModal({
        type: 'sawamani',
        title: state.lang === 'hi' ? 'श्री बालाजी सवामणि सेवा' : 'Shree Balaji Sawamani Seva',
        amount: 11000,
        name,
        phone,
        email: email || 'Not Provided',
        address,
        reason
      });
    });
  }

  // Store Cart Bottom Sheet
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

  // Shipping State Select
  const shippingStateSelect = document.getElementById('shippingStateSelect');
  if (shippingStateSelect) {
    shippingStateSelect.addEventListener('change', (e) => {
      state.shippingState = e.target.value;
      state.shippingFee = shippingRates[e.target.value] ? shippingRates[e.target.value].fee : 50;
      renderCartDrawer();
    });
  }

  // Proceed to Checkout from Drawer
  const proceedStoreCheckoutBtn = document.getElementById('proceedStoreCheckoutBtn');
  if (proceedStoreCheckoutBtn) {
    proceedStoreCheckoutBtn.addEventListener('click', () => {
      const name = document.getElementById('cartDevoteeName').value.trim();
      const phone = document.getElementById('cartDevoteePhone').value.trim();
      const email = document.getElementById('cartDevoteeEmail').value.trim();
      const address = document.getElementById('cartAddressInput').value.trim();

      if (!name || !phone || !address) {
        showToast(state.lang === 'hi' ? 'कृपया नाम, मोबाइल व डिलीवरी पता भरें!' : 'Please fill Name, Phone and Address!');
        return;
      }

      cartDrawerBackdrop.classList.add('hidden');

      const itemsTotal = Object.values(state.cart).reduce((sum, item) => sum + (item.price * item.qty), 0);
      const grandTotal = itemsTotal + state.shippingFee;

      openPaymentModal({
        type: 'store',
        title: state.lang === 'hi' ? 'दिव्य भण्डार सामग्री भुगतान' : 'Divya Store Items Checkout',
        amount: grandTotal,
        itemsTotal,
        shippingFee: state.shippingFee,
        name,
        phone,
        email: email || 'Not Provided',
        address
      });
    });
  }

  // Payment Confirmation Modal Actions
  const closePaymentModalBtn = document.getElementById('closePaymentModalBtn');
  const paymentModalOverlay = document.getElementById('paymentModalOverlay');
  const confirmPaymentBtn = document.getElementById('confirmPaymentBtn');

  if (closePaymentModalBtn) {
    closePaymentModalBtn.addEventListener('click', () => {
      paymentModalOverlay.classList.add('hidden');
    });
  }

  if (confirmPaymentBtn) {
    confirmPaymentBtn.addEventListener('click', () => {
      paymentModalOverlay.classList.add('hidden');
      processPaymentCompletion();
    });
  }

  // Success Modal Done Button
  const successDoneBtn = document.getElementById('successDoneBtn');
  const successModalOverlay = document.getElementById('successModalOverlay');
  if (successDoneBtn) {
    successDoneBtn.addEventListener('click', () => {
      successModalOverlay.classList.add('hidden');
      switchNav('orders');
    });
  }

  // Print Receipt Button
  const printReceiptBtn = document.getElementById('printReceiptBtn');
  if (printReceiptBtn) {
    printReceiptBtn.addEventListener('click', () => {
      window.print();
    });
  }

  // Segmented Tabs in My Sevas
  document.querySelectorAll('.segmented-control .seg-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('.segmented-control .seg-btn').forEach(b => b.classList.remove('active'));
      document.querySelectorAll('.seg-content').forEach(c => c.classList.remove('active'));
      btn.classList.add('active');
      const target = btn.getAttribute('data-tab');
      const content = document.getElementById(target);
      if (content) content.classList.add('active');
    });
  });

  // Dedicated Admin Login Door (Header & Profile)
  const adminDoorBtn = document.getElementById('adminDoorBtn');
  const profileSevadarPortalRow = document.getElementById('profileSevadarPortalRow');
  const adminPasscodeModal = document.getElementById('adminPasscodeModal');
  const closeAdminPasscodeBtn = document.getElementById('closeAdminPasscodeBtn');
  const adminPasscodeForm = document.getElementById('adminPasscodeForm');
  const adminFullLogoutBtn = document.getElementById('adminFullLogoutBtn');
  const exitAdminBtn = document.getElementById('exitAdminBtn');

  if (adminDoorBtn) {
    adminDoorBtn.addEventListener('click', () => {
      if (state.isAdmin) {
        showAdminView();
      } else {
        adminPasscodeModal.classList.remove('hidden');
      }
    });
  }

  if (profileSevadarPortalRow) {
    profileSevadarPortalRow.addEventListener('click', () => {
      if (state.isAdmin) {
        showAdminView();
      } else {
        adminPasscodeModal.classList.remove('hidden');
      }
    });
  }

  if (closeAdminPasscodeBtn) {
    closeAdminPasscodeBtn.addEventListener('click', () => {
      adminPasscodeModal.classList.add('hidden');
    });
  }

  if (adminPasscodeForm) {
    adminPasscodeForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const code = document.getElementById('adminPasscodeInput').value.trim();
      if (code === 'BALAJI777' || code === 'ADMIN108') {
        state.isAdmin = true;
        saveStorage();
        adminPasscodeModal.classList.add('hidden');
        showAdminView();
        showToast('🛡️ Welcome, Chief Sevadar! Admin Portal Unlocked.');
      } else {
        showToast(state.lang === 'hi' ? '❌ गलत पासकोड!' : '❌ Incorrect Passcode!');
      }
    });
  }

  if (adminFullLogoutBtn) {
    adminFullLogoutBtn.addEventListener('click', () => {
      state.isAdmin = false;
      saveStorage();
      switchNav('home');
      showToast('Logged out of Admin Portal');
    });
  }

  if (exitAdminBtn) {
    exitAdminBtn.addEventListener('click', () => {
      switchNav('home');
    });
  }

  // Admin Sub-Tab Pills
  document.querySelectorAll('.admin-tab-pills .admin-tab-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const tabId = btn.getAttribute('data-admintab');
      switchAdminTab(tabId);
    });
  });

  // Admin Add Product Button
  const adminAddNewProdBtn = document.getElementById('adminAddNewProdBtn');
  if (adminAddNewProdBtn) {
    adminAddNewProdBtn.addEventListener('click', () => {
      const name = prompt('Enter Product Name in English:');
      if (!name) return;
      const nameHi = prompt('Enter Product Name in Hindi:') || name;
      const price = parseInt(prompt('Enter Unit Price (₹):') || '200');
      const mrp = parseInt(prompt('Enter MRP (₹):') || '300');
      const stock = parseInt(prompt('Enter Stock Quantity:') || '100');

      const newProd = {
        id: 'prod-' + Date.now(),
        type: 'single',
        name,
        nameHi,
        unitPrice: price,
        mrp,
        icon: '📦',
        badge: 'NEW ITEM',
        description: 'Sanctified temple offering item.',
        descriptionHi: 'सिद्ध धाम प्रसादम सामग्री।',
        stock
      };

      state.products.push(newProd);
      saveStorage();
      renderStoreTiles();
      renderAdminProducts();
      showToast('New Product added to Divya Store!');
    });
  }
}

// Switch Devotee Views
function switchNav(navName) {
  state.activeNav = navName;
  document.querySelectorAll('.view-panel').forEach(panel => panel.classList.remove('active'));
  document.querySelectorAll('.bottom-dock .dock-item').forEach(item => {
    item.classList.toggle('active', item.getAttribute('data-nav') === navName);
  });

  // Ensure main header & dock are visible in user views
  document.getElementById('appMainHeader').classList.remove('hidden');
  document.getElementById('appBottomDock').classList.remove('hidden');

  const target = document.getElementById(`${navName}Section`);
  if (target) target.classList.add('active');

  updateFloatingCart();

  if (navName === 'orders') renderBookings();
  if (navName === 'store') renderStoreTiles();
}

// Show Dedicated Admin Portal View
function showAdminView() {
  document.querySelectorAll('.view-panel').forEach(panel => panel.classList.remove('active'));
  document.querySelectorAll('.bottom-dock .dock-item').forEach(item => item.classList.remove('active'));
  
  // Hide bottom dock in Admin portal for pure dashboard experience
  document.getElementById('appBottomDock').classList.add('hidden');
  
  const adminSection = document.getElementById('adminSection');
  if (adminSection) adminSection.classList.add('active');

  renderAdminAll();
}

// Switch Admin Sub-Tabs
window.switchAdminTab = function(tabId) {
  state.activeAdminTab = tabId;
  document.querySelectorAll('.admin-tab-btn').forEach(btn => {
    btn.classList.toggle('active', btn.getAttribute('data-admintab') === tabId);
  });
  document.querySelectorAll('.admin-tab-content').forEach(c => c.classList.remove('active'));
  const target = document.getElementById(tabId);
  if (target) target.classList.add('active');
};

// Apply Language (100% Dual Translation)
function applyLanguage(lang) {
  const dict = i18n[lang] || i18n.en;
  
  document.querySelectorAll('[data-key]').forEach(el => {
    const key = el.getAttribute('data-key');
    if (dict[key]) el.textContent = dict[key];
  });

  const currentLangText = document.getElementById('currentLangText');
  if (currentLangText) currentLangText.textContent = lang === 'en' ? 'हिंदी' : 'English';

  const profileLangLabel = document.getElementById('profileLangLabel');
  if (profileLangLabel) profileLangLabel.textContent = lang === 'en' ? 'English (Switch to हिंदी)' : 'हिंदी (Switch to English)';

  renderStoreTiles();
}

// Render YouTube Video Feeds with direct official links
function renderYtVideos() {
  const container = document.getElementById('ytVideosContainer');
  if (!container) return;

  const videos = ytDatabase[state.activeYtChannel] || ytDatabase.main;

  container.innerHTML = videos.map(vid => `
    <div class="video-card-modern">
      <div class="video-embed-box">
        <iframe 
          src="https://www.youtube.com/embed/${vid.embedId}?rel=0" 
          title="${vid.title}" 
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
          allowfullscreen>
        </iframe>
      </div>
      <div class="video-info-bar">
        <h4>${vid.title}</h4>
        <a href="${vid.channelUrl}" target="_blank" rel="noopener" class="video-yt-link">
          ▶ ${state.lang === 'hi' ? 'यूट्यूब पर देखें' : 'Watch on YouTube'}
        </a>
      </div>
    </div>
  `).join('');
}

// Render 2-Column Store Product Tiles
function renderStoreTiles() {
  const grid = document.getElementById('storeTilesGrid');
  if (!grid) return;

  grid.innerHTML = state.products.map(prod => {
    if (prod.type === 'single') {
      const cartItem = state.cart[prod.id] || { qty: 0 };
      const title = state.lang === 'hi' ? prod.nameHi : prod.name;
      const desc = state.lang === 'hi' ? prod.descriptionHi : prod.description;

      return `
        <div class="product-tile">
          <div>
            <div class="tile-media">
              <span class="tile-badge-overlay">${prod.badge}</span>
              ${prod.icon}
            </div>
            <h4 class="tile-product-title">${title}</h4>
            <p class="tile-product-desc">${desc}</p>
          </div>

          <div class="tile-bottom-row">
            <div class="tile-price-wrap">
              <span class="price-now">₹${prod.unitPrice}</span>
              <span class="price-mrp">₹${prod.mrp}</span>
            </div>

            ${cartItem.qty > 0 ? `
              <div class="tile-qty-stepper">
                <button class="stepper-btn" onclick="updateCartSingle('${prod.id}', ${cartItem.qty - 1})">-</button>
                <span class="stepper-val">${cartItem.qty}</span>
                <button class="stepper-btn" onclick="updateCartSingle('${prod.id}', ${cartItem.qty + 1})">+</button>
              </div>
            ` : `
              <button class="tile-add-btn" onclick="updateCartSingle('${prod.id}', 1)">+ ADD</button>
            `}
          </div>
        </div>
      `;
    } else if (prod.type === 'batch') {
      const title = state.lang === 'hi' ? prod.nameHi : prod.name;
      const desc = state.lang === 'hi' ? prod.descriptionHi : prod.description;

      const selectedSize = window[`selectedBatch_${prod.id}`] || 10;
      const currentBatch = prod.batches.find(b => b.size === selectedSize) || prod.batches[1];
      const batchKey = `${prod.id}_batch_${currentBatch.size}`;
      const cartItem = state.cart[batchKey] || { qty: 0 };

      return `
        <div class="product-tile">
          <div>
            <div class="tile-media">
              <span class="tile-badge-overlay">${prod.badge}</span>
              ${prod.icon}
            </div>
            <h4 class="tile-product-title">${title}</h4>
            <p class="tile-product-desc">${desc}</p>
            
            <div class="tile-batch-select">
              <select onchange="changeBatchOption('${prod.id}', this.value)">
                ${prod.batches.map(b => `
                  <option value="${b.size}" ${b.size === selectedSize ? 'selected' : ''}>
                    ${b.label} (₹${b.price})
                  </option>
                `).join('')}
              </select>
            </div>
          </div>

          <div class="tile-bottom-row">
            <div class="tile-price-wrap">
              <span class="price-now">₹${currentBatch.price}</span>
              <span class="price-mrp">₹${currentBatch.mrp}</span>
            </div>

            ${cartItem.qty > 0 ? `
              <div class="tile-qty-stepper">
                <button class="stepper-btn" onclick="updateCartBatch('${prod.id}', ${currentBatch.size}, ${currentBatch.price}, ${cartItem.qty - 1})">-</button>
                <span class="stepper-val">${cartItem.qty}</span>
                <button class="stepper-btn" onclick="updateCartBatch('${prod.id}', ${currentBatch.size}, ${currentBatch.price}, ${cartItem.qty + 1})">+</button>
              </div>
            ` : `
              <button class="tile-add-btn" onclick="updateCartBatch('${prod.id}', ${currentBatch.size}, ${currentBatch.price}, 1)">+ ADD</button>
            `}
          </div>
        </div>
      `;
    }
  }).join('');

  updateFloatingCart();
}

window.changeBatchOption = function(prodId, size) {
  window[`selectedBatch_${prodId}`] = parseInt(size);
  renderStoreTiles();
};

// Cart Item Updates
window.updateCartSingle = function(prodId, newQty) {
  const prod = state.products.find(p => p.id === prodId);
  if (!prod) return;

  if (newQty <= 0) {
    delete state.cart[prodId];
  } else {
    state.cart[prodId] = {
      name: prod.name,
      nameHi: prod.nameHi,
      qty: newQty,
      price: prod.unitPrice,
      isBatch: false
    };
  }

  renderStoreTiles();
  renderCartDrawer();
  updateFloatingCart();
};

window.updateCartBatch = function(prodId, batchSize, batchPrice, newQty) {
  const batchKey = `${prodId}_batch_${batchSize}`;
  if (newQty <= 0) {
    delete state.cart[batchKey];
  } else {
    state.cart[batchKey] = {
      name: `Panchratna Samagri (Batch of ${batchSize})`,
      nameHi: `पंचरत्न सामग्री (${batchSize} का बैच)`,
      qty: newQty,
      price: batchPrice,
      isBatch: true,
      batchSize
    };
  }

  renderStoreTiles();
  renderCartDrawer();
  updateFloatingCart();
};

// Floating Cart Pill Update (Blinkit style)
function updateFloatingCart() {
  const pill = document.getElementById('floatingCartPill');
  const countText = document.getElementById('cartItemCountText');
  const subtotalText = document.getElementById('cartSubtotalText');

  const entries = Object.values(state.cart);
  const totalCount = entries.reduce((sum, i) => sum + i.qty, 0);
  const totalPrice = entries.reduce((sum, i) => sum + (i.price * i.qty), 0);

  if (state.activeNav === 'store' && totalCount > 0) {
    countText.textContent = `${totalCount} ${state.lang === 'hi' ? 'आइटम' : 'Items'}`;
    subtotalText.textContent = `₹${totalPrice}`;
    pill.classList.remove('hidden');
  } else {
    pill.classList.add('hidden');
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
        <p>${state.lang === 'hi' ? 'आपकी टोकरी खाली है' : 'Your shopping basket is empty'}</p>
      </div>
    `;
    document.getElementById('billSubtotalVal').textContent = '₹0';
    document.getElementById('billGrandTotalVal').textContent = '₹0';
    return;
  }

  let subtotal = 0;
  container.innerHTML = entries.map(([key, item]) => {
    const itemTotal = item.price * item.qty;
    subtotal += itemTotal;
    const title = state.lang === 'hi' ? (item.nameHi || item.name) : item.name;
    return `
      <div class="cart-row">
        <div>
          <strong style="font-size:12px; color:var(--text-main);">${title}</strong>
          <div style="font-size:11px; color:var(--text-muted);">₹${item.price} × ${item.qty} = <strong>₹${itemTotal}</strong></div>
        </div>
      </div>
    `;
  }).join('');

  const shipping = state.shippingFee;
  const grandTotal = subtotal + shipping;

  document.getElementById('billSubtotalVal').textContent = `₹${subtotal}`;
  document.getElementById('billShippingVal').textContent = `₹${shipping}`;
  document.getElementById('billGrandTotalVal').textContent = `₹${grandTotal}`;
}

// Open Real Direct UPI Intent & Payment Gateway Modal
let currentPaymentData = null;
function openPaymentModal(data) {
  currentPaymentData = data;
  const titleEl = document.getElementById('paymentModalTitle');
  if (titleEl) titleEl.textContent = data.title;

  const amtDisplay = document.getElementById('paymentAmountDisplay');
  if (amtDisplay) amtDisplay.textContent = `₹${data.amount.toLocaleString('en-IN')}`;

  const confirmBtnAmt = document.getElementById('confirmPayBtnAmt');
  if (confirmBtnAmt) confirmBtnAmt.textContent = `₹${data.amount.toLocaleString('en-IN')}`;

  // Configure Real Direct UPI Deep Links (0% Fee)
  const upiNote = encodeURIComponent(data.type === 'sawamani' ? 'Sawamani Seva Sankalp' : 'Divya Store Items');
  const upiIntentUri = `upi://pay?pa=balajikripa@upi&pn=Shree%20Balaji%20Ki%20Kripa%20Trust&am=${data.amount}&cu=INR&tn=${upiNote}`;

  const gpayLink = document.getElementById('gpayIntentLink');
  const phonepeLink = document.getElementById('phonepeIntentLink');
  const paytmLink = document.getElementById('paytmIntentLink');
  const bhimLink = document.getElementById('bhimIntentLink');

  if (gpayLink) gpayLink.href = upiIntentUri;
  if (phonepeLink) phonepeLink.href = upiIntentUri;
  if (paytmLink) paytmLink.href = upiIntentUri;
  if (bhimLink) bhimLink.href = upiIntentUri;

  const qrImg = document.getElementById('qrImgSrc');
  if (qrImg) {
    qrImg.src = `https://api.qrserver.com/v1/create-qr-code/?size=160x160&data=${encodeURIComponent(upiIntentUri)}`;
  }

  const overlay = document.getElementById('paymentModalOverlay');
  if (overlay) overlay.classList.remove('hidden');
}

// Complete Payment Processing
function processPaymentCompletion() {
  if (!currentPaymentData) return;

  const utr = document.getElementById('upiUtrInput') ? document.getElementById('upiUtrInput').value.trim() : '';

  if (currentPaymentData.type === 'sawamani') {
    const refId = 'SWM-' + Math.floor(1000 + Math.random() * 9000);
    const newBooking = {
      id: refId,
      name: currentPaymentData.name,
      phone: currentPaymentData.phone,
      email: currentPaymentData.email || 'Not Provided',
      address: currentPaymentData.address,
      reason: currentPaymentData.reason,
      amount: 11000,
      utr: utr || ('UPI-' + Math.floor(100000000000 + Math.random() * 900000000000)),
      status: 'confirmed',
      trackingNumber: 'SP' + Math.floor(10000000 + Math.random() * 90000000) + 'IN',
      courier: 'India Post Speed Post',
      time: 'Just now'
    };

    state.sawamaniBookings.unshift(newBooking);
    saveStorage();

    document.getElementById('sawamaniSimpleForm').reset();

    showSuccessModal({
      heading: state.lang === 'hi' ? '🍯 सवामणि संकल्प स्वीकृत!' : '🍯 Sawamani Seva Confirmed!',
      message: state.lang === 'hi' ? '50 किलो शुद्ध देसी घी सवामणि भोग समर्पित किया जाएगा।' : '50 Kg pure desi ghee bhog will be offered at Balaji Dham.',
      refId: refId,
      name: currentPaymentData.name,
      phone: currentPaymentData.phone,
      email: currentPaymentData.email,
      address: currentPaymentData.address,
      amount: 11000
    });
  } else if (currentPaymentData.type === 'store') {
    const orderId = 'ORD-' + Math.floor(1000 + Math.random() * 9000);
    const newOrder = {
      id: orderId,
      name: currentPaymentData.name,
      phone: currentPaymentData.phone,
      email: currentPaymentData.email || 'Not Provided',
      items: Object.values(state.cart),
      amount: currentPaymentData.amount,
      shippingState: state.shippingState,
      address: currentPaymentData.address,
      utr: utr || ('UPI-' + Math.floor(100000000000 + Math.random() * 900000000000)),
      status: 'confirmed',
      trackingNumber: 'SP' + Math.floor(10000000 + Math.random() * 90000000) + 'IN',
      courier: 'India Post Speed Post',
      time: 'Just now'
    };

    state.storeOrders.unshift(newOrder);
    state.cart = {};
    saveStorage();
    renderStoreTiles();

    showSuccessModal({
      heading: state.lang === 'hi' ? '📦 सामग्री ऑर्डर स्वीकृत!' : '📦 Store Order Placed!',
      message: state.lang === 'hi' ? 'आपकी सामग्री स्पीड पोस्ट द्वारा प्रेषित की जा रही है।' : 'Your items are being dispatched via Speed Post.',
      refId: orderId,
      name: currentPaymentData.name,
      phone: currentPaymentData.phone,
      email: currentPaymentData.email,
      address: currentPaymentData.address,
      amount: currentPaymentData.amount
    });
  }

  currentPaymentData = null;
}

// Show Success Confirmation Modal with Printable Digital Receipt
function showSuccessModal({ heading, message, refId, name, phone, email, address, amount }) {
  document.getElementById('successHeading').textContent = heading;
  document.getElementById('successMessage').textContent = message;
  document.getElementById('successRefVal').textContent = `#${refId}`;
  document.getElementById('successTimeVal').textContent = new Date().toLocaleDateString('en-IN') + ', ' + new Date().toLocaleTimeString('en-IN', { hour: '2-digit', minute: '2-digit' });
  document.getElementById('successDevoteeVal').textContent = name;
  document.getElementById('successPhoneVal').textContent = phone;
  document.getElementById('successEmailVal').textContent = email || 'devotee@temple.com';
  document.getElementById('successAddressVal').textContent = address;
  document.getElementById('successAmountVal').textContent = `₹${amount.toLocaleString('en-IN')}`;

  document.getElementById('successModalOverlay').classList.remove('hidden');

  // Trigger Mock Email Notification Dispatch Alert
  if (email && email !== 'Not Provided') {
    showToast(`✉️ Official Receipt emailed to ${email}`);
  }
}

// Render Bookings & Live Step Trackers in My Sevas
function renderBookings() {
  // 1. Sawamani Bookings
  const sawamaniList = document.getElementById('sawamaniRecordsList');
  if (sawamaniList) {
    if (state.sawamaniBookings.length === 0) {
      sawamaniList.innerHTML = `<p style="text-align:center; padding:20px; color:var(--text-muted);">${state.lang === 'hi' ? 'कोई सवामणि बुकिंग नहीं है' : 'No Sawamani bookings yet'}</p>`;
    } else {
      sawamaniList.innerHTML = state.sawamaniBookings.map(s => {
        const step1Class = 'step-done';
        const step2Class = (s.status === 'prepared' || s.status === 'dispatched' || s.status === 'delivered') ? 'step-done' : 'step-active';
        const step3Class = (s.status === 'dispatched' || s.status === 'delivered') ? 'step-done' : (s.status === 'prepared' ? 'step-active' : '');
        const step4Class = (s.status === 'delivered') ? 'step-done' : '';

        return `
          <div class="record-tile">
            <div class="record-head">
              <span class="record-id">🍯 #${s.id}</span>
              <span class="record-badge-green">₹11,000 PAID ✅</span>
            </div>
            
            <div class="record-body">
              <div><strong>${state.lang === 'hi' ? 'भक्त' : 'Devotee'}:</strong> ${s.name} (${s.phone})</div>
              <div><strong>${state.lang === 'hi' ? 'संकल्प' : 'Sankalp'}:</strong> ${s.reason}</div>
              <div><strong>${state.lang === 'hi' ? 'प्रसाद पता' : 'Delivery Address'}:</strong> ${s.address}</div>
            </div>

            <!-- Visual 4-Step Progress Tracker -->
            <div class="step-tracker">
              <div class="step-item ${step1Class}">
                <div class="step-dot">✓</div>
                <span class="step-text">Sankalp Placed</span>
              </div>
              <div class="step-item ${step2Class}">
                <div class="step-dot">🍯</div>
                <span class="step-text">Bhog Offered</span>
              </div>
              <div class="step-item ${step3Class}">
                <div class="step-dot">🚚</div>
                <span class="step-text">Prasad Sent</span>
              </div>
              <div class="step-item ${step4Class}">
                <div class="step-dot">🏠</div>
                <span class="step-text">Delivered</span>
              </div>
            </div>

            <div class="record-footer-actions">
              <span class="tracking-num-tag">${s.courier || 'Speed Post'}: ${s.trackingNumber || 'SP1092892IN'}</span>
              <button class="modern-btn btn-secondary btn-sm" style="color:var(--text-main); background:#f1f5f9;" onclick="openTrackingResultModal('${s.id}')">Live Track ➔</button>
            </div>
          </div>
        `;
      }).join('');
    }
  }

  // 2. Store Orders
  const storeList = document.getElementById('storeRecordsList');
  if (storeList) {
    if (state.storeOrders.length === 0) {
      storeList.innerHTML = `<p style="text-align:center; padding:20px; color:var(--text-muted);">${state.lang === 'hi' ? 'कोई सामग्री ऑर्डर नहीं है' : 'No store orders yet'}</p>`;
    } else {
      storeList.innerHTML = state.storeOrders.map(o => {
        const step1Class = 'step-done';
        const step2Class = (o.status === 'dispatched' || o.status === 'delivered') ? 'step-done' : 'step-active';
        const step3Class = (o.status === 'dispatched' || o.status === 'delivered') ? 'step-done' : '';
        const step4Class = (o.status === 'delivered') ? 'step-done' : '';

        return `
          <div class="record-tile">
            <div class="record-head">
              <span class="record-id">📦 #${o.id}</span>
              <span class="record-badge-green">DISPATCHED 🚚</span>
            </div>
            
            <div class="record-body">
              <div><strong>Devotee:</strong> ${o.name || 'Shree Balaji Devotee'} (${o.phone || '+91 98765 43210'})</div>
              <div>${o.items.map(i => `• ${i.name} (x${i.qty})`).join('<br>')}</div>
              <div style="margin-top:4px; font-weight:800; color:var(--primary);">${state.lang === 'hi' ? 'कुल भुगतान' : 'Total Paid'}: ₹${o.amount}</div>
            </div>

            <div class="step-tracker">
              <div class="step-item ${step1Class}">
                <div class="step-dot">✓</div>
                <span class="step-text">Confirmed</span>
              </div>
              <div class="step-item ${step2Class}">
                <div class="step-dot">📦</div>
                <span class="step-text">Packing</span>
              </div>
              <div class="step-item ${step3Class}">
                <div class="step-dot">🚚</div>
                <span class="step-text">Shipped</span>
              </div>
              <div class="step-item ${step4Class}">
                <div class="step-dot">🏠</div>
                <span class="step-text">Delivered</span>
              </div>
            </div>

            <div class="record-footer-actions">
              <span class="tracking-num-tag">${o.courier || 'Speed Post'}: ${o.trackingNumber || 'SP9981290IN'}</span>
              <button class="modern-btn btn-secondary btn-sm" style="color:var(--text-main); background:#f1f5f9;" onclick="openTrackingResultModal('${o.id}')">Live Track ➔</button>
            </div>
          </div>
        `;
      }).join('');
    }
  }
}

// Open Live Tracking Result Modal
window.openTrackingResultModal = function(id) {
  const item = state.sawamaniBookings.find(s => s.id === id) || state.storeOrders.find(o => o.id === id);
  const container = document.getElementById('trackingModalBody');
  if (!container) return;

  if (!item) {
    container.innerHTML = `
      <div style="text-align:center; padding:20px;">
        <p style="color:var(--danger); font-weight:700;">❌ No active records found for ID: ${id}</p>
        <p style="font-size:11px; color:var(--text-muted); margin-top:4px;">Please verify your Reference ID (e.g. SWM-1082 or ORD-4920)</p>
      </div>
    `;
  } else {
    const isSawamani = id.startsWith('SWM');
    container.innerHTML = `
      <div class="printable-receipt-card">
        <div style="display:flex; justify-content:space-between; margin-bottom:8px;">
          <strong>#${item.id}</strong>
          <span class="record-badge-green">PAID ₹${item.amount} ✅</span>
        </div>
        <p style="font-size:11px;"><strong>Devotee:</strong> ${item.name} (${item.phone})</p>
        <p style="font-size:11px;"><strong>Address:</strong> ${item.address}</p>
        <div class="receipt-divider"></div>
        <p style="font-size:11px; color:#1e3a8a;"><strong>Carrier:</strong> ${item.courier || 'India Post Speed Post'}</p>
        <p style="font-size:11px; color:#1e3a8a;"><strong>Tracking Code:</strong> <span style="background:#dbeafe; padding:1px 6px; border-radius:4px; font-weight:800;">${item.trackingNumber || 'SP1088492IN'}</span></p>
        
        <div class="step-tracker" style="margin-top:14px;">
          <div class="step-item step-done">
            <div class="step-dot">✓</div>
            <span class="step-text">${isSawamani ? 'Sankalp' : 'Ordered'}</span>
          </div>
          <div class="step-item step-done">
            <div class="step-dot">${isSawamani ? '🍯' : '📦'}</div>
            <span class="step-text">${isSawamani ? 'Bhog' : 'Packed'}</span>
          </div>
          <div class="step-item step-done">
            <div class="step-dot">🚚</div>
            <span class="step-text">In Transit</span>
          </div>
          <div class="step-item">
            <div class="step-dot">🏠</div>
            <span class="step-text">Delivered</span>
          </div>
        </div>

        <div style="text-align:center; margin-top:12px;">
          <a href="https://www.indiapost.gov.in/_layouts/15/dop.portal.tracking/trackconsignment.aspx" target="_blank" class="modern-btn btn-primary btn-sm">
            Check on India Post Portal ↗
          </a>
        </div>
      </div>
    `;
  }

  document.getElementById('trackingResultModal').classList.remove('hidden');
};

// Render All Admin Sections
function renderAdminAll() {
  // Counts & Overview
  const totalSawamaniAmt = state.sawamaniBookings.length * 11000;
  const totalStoreAmt = state.storeOrders.reduce((sum, o) => sum + o.amount, 0);

  document.getElementById('adminCountSawamani').textContent = state.sawamaniBookings.length;
  document.getElementById('adminCountOrders').textContent = state.storeOrders.length;
  document.getElementById('adminSawamaniBadgeCount').textContent = `${state.sawamaniBookings.length} Bookings`;
  document.getElementById('adminOrdersBadgeCount').textContent = `${state.storeOrders.length} Orders`;

  document.getElementById('adminOverviewSawamaniAmt').textContent = `₹${totalSawamaniAmt.toLocaleString('en-IN')}`;
  document.getElementById('adminOverviewSawamaniCount').textContent = `${state.sawamaniBookings.length} Bookings`;
  document.getElementById('adminOverviewStoreAmt').textContent = `₹${totalStoreAmt.toLocaleString('en-IN')}`;
  document.getElementById('adminOverviewStoreCount').textContent = `${state.storeOrders.length} Orders`;
  document.getElementById('adminOverviewDevoteesCount').textContent = state.sawamaniBookings.length + state.storeOrders.length;

  renderAdminSawamani();
  renderAdminOrders();
  renderAdminProducts();
  renderAdminDarbar();
}

function renderAdminSawamani() {
  const tbody = document.getElementById('adminSawamaniFullTbody');
  if (!tbody) return;

  tbody.innerHTML = state.sawamaniBookings.map(s => `
    <tr>
      <td><strong>${s.id}</strong></td>
      <td>${s.name}</td>
      <td>${s.phone}</td>
      <td>${s.reason.substring(0, 25)}...</td>
      <td>${s.address.substring(0, 20)}...</td>
      <td>
        <select onchange="updateSawamaniStatus('${s.id}', this.value)" style="font-size:9px; padding:2px; border-radius:4px;">
          <option value="confirmed" ${s.status === 'confirmed' ? 'selected' : ''}>Confirmed</option>
          <option value="prepared" ${s.status === 'prepared' ? 'selected' : ''}>Bhog Offered</option>
          <option value="dispatched" ${s.status === 'dispatched' ? 'selected' : ''}>Dispatched</option>
          <option value="delivered" ${s.status === 'delivered' ? 'selected' : ''}>Delivered</option>
        </select>
      </td>
      <td>
        <button class="modern-btn btn-sm btn-primary" onclick="adminAssignTracking('${s.id}', 'sawamani')">Set Track #</button>
      </td>
    </tr>
  `).join('');
}

function renderAdminOrders() {
  const tbody = document.getElementById('adminOrdersFullTbody');
  if (!tbody) return;

  tbody.innerHTML = state.storeOrders.map(o => `
    <tr>
      <td><strong>${o.id}</strong></td>
      <td>${o.items.map(i => `${i.name} (x${i.qty})`).join(', ')}</td>
      <td><strong>₹${o.amount}</strong></td>
      <td>${o.address.substring(0, 20)}...</td>
      <td><span style="background:#e0f2fe; padding:1px 4px; border-radius:3px;">${o.trackingNumber || 'SP108249IN'}</span></td>
      <td>
        <select onchange="updateStoreOrderStatus('${o.id}', this.value)" style="font-size:9px; padding:2px; border-radius:4px;">
          <option value="confirmed" ${o.status === 'confirmed' ? 'selected' : ''}>Confirmed</option>
          <option value="dispatched" ${o.status === 'dispatched' ? 'selected' : ''}>Dispatched</option>
          <option value="delivered" ${o.status === 'delivered' ? 'selected' : ''}>Delivered</option>
        </select>
      </td>
      <td>
        <button class="modern-btn btn-sm btn-primary" onclick="adminAssignTracking('${o.id}', 'store')">Set Track #</button>
      </td>
    </tr>
  `).join('');
}

function renderAdminProducts() {
  const list = document.getElementById('adminInventoryList');
  if (!list) return;

  list.innerHTML = state.products.map(p => `
    <div style="background:#f8fafc; border:1px solid var(--border-subtle); border-radius:8px; padding:8px 10px; margin-bottom:8px; display:flex; justify-content:space-between; align-items:center;">
      <div>
        <strong style="font-size:11px;">${p.name}</strong>
        <p style="font-size:10px; color:var(--text-muted);">Stock: <strong>${p.stock}</strong> units | Price: <strong>₹${p.unitPrice || 'Batch Pricing'}</strong></p>
      </div>
      <div style="display:flex; gap:4px;">
        <button class="modern-btn btn-sm btn-secondary" style="color:var(--text-main); background:#ffffff;" onclick="adminEditStock('${p.id}')">Edit Stock</button>
      </div>
    </div>
  `).join('');
}

function renderAdminDarbar() {
  const tbody = document.getElementById('adminDarbarTbody');
  if (!tbody) return;

  tbody.innerHTML = state.darbarPasses.map(d => `
    <tr>
      <td><strong>${d.id}</strong></td>
      <td>${d.name}</td>
      <td>${d.city}</td>
      <td>${d.date}</td>
      <td><span class="record-badge-green">${d.status}</span></td>
    </tr>
  `).join('');
}

window.updateSawamaniStatus = function(id, newStatus) {
  const booking = state.sawamaniBookings.find(s => s.id === id);
  if (booking) {
    booking.status = newStatus;
    saveStorage();
    renderBookings();
    showToast(`Sawamani #${id} status updated to: ${newStatus}`);
  }
};

window.updateStoreOrderStatus = function(id, newStatus) {
  const order = state.storeOrders.find(o => o.id === id);
  if (order) {
    order.status = newStatus;
    saveStorage();
    renderBookings();
    showToast(`Order #${id} status updated to: ${newStatus}`);
  }
};

window.adminAssignTracking = function(id, type) {
  const newTrack = prompt('Enter Speed Post / Courier Tracking Code:', 'SP' + Math.floor(10000000 + Math.random() * 90000000) + 'IN');
  if (!newTrack) return;

  if (type === 'sawamani') {
    const item = state.sawamaniBookings.find(s => s.id === id);
    if (item) {
      item.trackingNumber = newTrack;
      item.status = 'dispatched';
      saveStorage();
      renderAdminSawamani();
      renderBookings();
      showToast(`Tracking #${newTrack} assigned to Sawamani #${id}`);
    }
  } else {
    const item = state.storeOrders.find(o => o.id === id);
    if (item) {
      item.trackingNumber = newTrack;
      item.status = 'dispatched';
      saveStorage();
      renderAdminOrders();
      renderBookings();
      showToast(`Tracking #${newTrack} assigned to Order #${id}`);
    }
  }
};

window.adminEditStock = function(prodId) {
  const p = state.products.find(x => x.id === prodId);
  if (!p) return;
  const newStock = prompt(`Update stock count for ${p.name}:`, p.stock);
  if (newStock !== null) {
    p.stock = parseInt(newStock) || 0;
    saveStorage();
    renderAdminProducts();
    showToast('Stock quantity updated!');
  }
};

// Toast Helper
function showToast(msg) {
  const toast = document.getElementById('toast');
  if (!toast) return;
  toast.textContent = msg;
  toast.classList.remove('hidden');
  clearTimeout(window.toastTimer);
  window.toastTimer = setTimeout(() => toast.classList.add('hidden'), 2500);
}

// Initialize on DOM Ready
document.addEventListener('DOMContentLoaded', initApp);
