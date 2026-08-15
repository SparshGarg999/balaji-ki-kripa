/**
 * =========================================================
 * BALAJI KI KRIPA - QUICK COMMERCE STORE & ADMIN ENGINE
 * =========================================================
 */

// Global App State
const state = {
  lang: 'en',
  role: 'user', // 'user' | 'admin'
  activeCategory: 'all',
  searchQuery: '',
  cart: {}, // { [productId]: quantity }
  coupon: null, // { code: 'BALAJI108', discountPercent: 10 }
  donation: 21,
  sankalpName: '',
  deliveryAddress: 'Home - Sector 14, Urban Estate, Hisar, Haryana',
  paymentMethod: 'upi_gpay',
  orders: [],
  products: []
};

// Multi-Language Translation Dictionaries
const i18n = {
  en: {
    quickDelivery: '15 MINS',
    deliveringTo: 'Delivering to',
    searchPlaceholder: 'Search for Prasad, Gada, Dhoop, Murti...',
    festiveSpecial: '🔥 TUESDAY SPECIAL BLESSING',
    heroBannerTitle: 'Direct from Salasar & Mehndipur Balaji',
    heroBannerSub: 'Get 100% Pure Besan Ladoo Prasad & Blessed Raksha Sutra delivered in minutes.',
    useCode: 'Use Code:',
    liveDarshan: 'LIVE TEMPLE DARSHAN',
    sandhyaAarti: 'Morning Shringaar Aarti Blessed Prasad Available Today',
    bookSankalp: '🙏 Add Free Sankalp',
    allProducts: 'All Divine Products',
    all: 'All',
    prasad: 'Sacred Prasad',
    idols: 'Idols & Murti',
    puja: 'Puja Samagri',
    mala: 'Rudraksha & Mala',
    gada: 'Gada & Kawach',
    books: 'Books & Chalisa',
    viewCart: 'View Cart',
    store: 'Store',
    orders: 'Orders',
    admin: 'Admin',
    profile: 'Profile',
    myCart: 'Your Devotional Basket',
    deliveryIn: 'Delivery in:',
    templeSankalp: 'Temple Sankalp & Gotra',
    free: 'FREE',
    enterNameGotra: 'Enter Devotee Name & Gotra for Puja',
    apply: 'Apply',
    feedGauMata: 'Seva: Feed Gau Mata & Langar',
    sevaDesc: 'Add a token of devotion to Hanuman Temple',
    billDetails: 'Bill Details',
    itemTotal: 'Items Total',
    deliveryFee: 'Delivery Fee (15 Mins)',
    discount: 'Discount Coupon',
    mandirSeva: 'Mandir Seva Contribution',
    toPay: 'To Pay',
    total: 'Total',
    deliveryLocation: 'Delivery Address',
    change: 'Change',
    proceedToPay: 'Proceed to Payment',
    selectPaymentMethod: 'Select Payment Method',
    amountPayable: 'Amount Payable:',
    upiApps: 'UPI / QR Code',
    scanQr: 'Scan & Pay via QR',
    cardsNetbanking: 'Cards & Cash',
    debitCredit: 'Debit / Credit Card',
    cashOnDelivery: 'Cash on Delivery (COD)',
    paySecurely: 'Pay Securely',
    orderSuccessTitle: 'Jai Shri Balaji! Order Placed',
    orderSuccessMsg: 'Your devotional items are being blessed and prepared for 15-min delivery.',
    orderId: 'Order ID:',
    estimatedArrival: 'Estimated Arrival:',
    paymentMode: 'Payment:',
    trackLiveOrder: 'Track Live Delivery 🚚',
    continueShopping: 'Continue Shopping 🛍️',
    chooseLanguage: 'Choose App Language / भाषा चुनें',
    myOrders: 'My Devotional Orders',
    trackOrdersDesc: 'Real-time status of your temple prasad and puja items',
    savedAddresses: 'Saved Delivery Addresses',
    appLanguage: 'App Language',
    bhandaraSeva: 'Temple Bhandara & Seva',
    bhandaraSevaSub: 'Contribute to Gaushala & Daily Langar',
    helpSupport: 'Temple Helpline & Support',
    adminDashboard: 'Admin Command Center',
    adminSubtitle: 'Manage Store Inventory, Stock Quantities & Customer Orders',
    addNewItem: 'Add Item',
    totalRevenue: 'Total Sales',
    totalOrders: 'Total Orders',
    lowStockItems: 'Low Stock',
    customerOrders: 'Live Orders',
    inventoryStock: 'Inventory & Stock',
    product: 'Product',
    category: 'Category',
    price: 'Price',
    originalPrice: 'Original MRP (₹)',
    stock: 'Stock Available',
    status: 'Status',
    actions: 'Actions',
    productName: 'Product Name',
    badgeTag: 'Badge Tag',
    iconEmoji: 'Icon Emoji / Symbol',
    saveProduct: 'Save & Update Store',
    add: 'ADD',
    outOfStock: 'Out of Stock',
    onlyLeft: 'Only {n} left'
  },
  hi: {
    quickDelivery: '15 मिनट',
    deliveringTo: 'डिलीवरी पता',
    searchPlaceholder: 'प्रसाद, गदा, धूप, मूर्ति खोजें...',
    festiveSpecial: '🔥 मंगलवार विशेष कृपा',
    heroBannerTitle: 'सालासर व मेहंदीपुर बालाजी से सीधा',
    heroBannerSub: '100% शुद्ध देसी घी बेसन लड्डू प्रसाद व सिद्ध रक्षा सूत्र 15 मिनट में पाएं।',
    useCode: 'कूपन कोड:',
    liveDarshan: 'लाइव मंदिर दर्शन',
    sandhyaAarti: 'आज की प्रातः शृंगार आरती से अभिमंत्रित प्रसाद उपलब्ध',
    bookSankalp: '🙏 निशुल्क संकल्प जोड़ें',
    allProducts: 'सभी दिव्य उत्पाद',
    all: 'सभी',
    prasad: 'पवित्र प्रसाद',
    idols: 'मूर्तियां',
    puja: 'पूजा सामग्री',
    mala: 'रुद्राक्ष व माला',
    gada: 'गदा व कवच',
    books: 'धार्मिक पुस्तकें',
    viewCart: 'कार्ट देखें',
    store: 'दुकान',
    orders: 'ऑर्डर',
    admin: 'प्रबंधक',
    profile: 'प्रोफाइल',
    myCart: 'आपकी भक्ति टोकरी',
    deliveryIn: 'डिलीवरी समय:',
    templeSankalp: 'मंदिर संकल्प एवं गोत्र',
    free: 'निशुल्क',
    enterNameGotra: 'पूजा हेतु भक्त का नाम व गोत्र लिखें',
    apply: 'लागू करें',
    feedGauMata: 'सेवा: गौमाता भोजन व लंगर सेवा',
    sevaDesc: 'श्री बालाजी मंदिर सेवा में योगदान दें',
    billDetails: 'बिल विवरण',
    itemTotal: 'सामग्री कुल मूल्य',
    deliveryFee: 'डिलीवरी शुल्क (15 मिनट)',
    discount: 'कूपन छूट',
    mandirSeva: 'मंदिर सेवा सहयोग',
    toPay: 'कुल देय राशि',
    total: 'कुल',
    deliveryLocation: 'डिलीवरी पता',
    change: 'बदलें',
    proceedToPay: 'भुगतान के लिए आगे बढ़ें',
    selectPaymentMethod: 'भुगतान का तरीका चुनें',
    amountPayable: 'देय राशि:',
    upiApps: 'यूपीआई / क्यूआर कोड',
    scanQr: 'स्कैन कर भुगतान करें',
    cardsNetbanking: 'कार्ड्स व नकद',
    debitCredit: 'डेबिट / क्रेडिट कार्ड',
    cashOnDelivery: 'कैश ऑन डिलीवरी (COD)',
    paySecurely: 'सुरक्षित भुगतान करें',
    orderSuccessTitle: 'जय श्री बालाजी! ऑर्डर स्वीकृत',
    orderSuccessMsg: 'आपकी सामग्री अभिमंत्रित होकर 15 मिनट में डिलीवरी हेतु तैयार है।',
    orderId: 'ऑर्डर संख्या:',
    estimatedArrival: 'अनुमानित समय:',
    paymentMode: 'भुगतान:',
    trackLiveOrder: 'लाइव डिलीवरी ट्रैक करें 🚚',
    continueShopping: 'और खरीदारी करें 🛍️',
    chooseLanguage: 'भाषा चुनें / Choose App Language',
    myOrders: 'मेरे भक्ति ऑर्डर्स',
    trackOrdersDesc: 'प्रसाद व पूजा सामग्री की लाइव स्थिति',
    savedAddresses: 'सहेजे गए पते',
    appLanguage: 'ऐप की भाषा',
    bhandaraSeva: 'मंदिर भंडारा व सेवा',
    bhandaraSevaSub: 'गौशाला व दैनिक लंगर में सहयोग करें',
    helpSupport: 'मंदिर सहायता व सेवा',
    adminDashboard: 'प्रशासक डैशबोर्ड',
    adminSubtitle: 'दुकान भंडार, स्टॉक व ग्राहकों के ऑर्डर्स प्रबंधित करें',
    addNewItem: 'नया उत्पाद जोड़ें',
    totalRevenue: 'कुल बिक्री',
    totalOrders: 'कुल ऑर्डर्स',
    lowStockItems: 'कम स्टॉक',
    customerOrders: 'लाइव ऑर्डर्स',
    inventoryStock: 'इन्वेंट्री व स्टॉक',
    product: 'उत्पाद',
    category: 'श्रेणी',
    price: 'मूल्य',
    originalPrice: 'मूल MRP (₹)',
    stock: 'उपलब्ध स्टॉक',
    status: 'स्थिति',
    actions: 'क्रियाएं',
    productName: 'उत्पाद का नाम',
    badgeTag: 'बैज टैग',
    iconEmoji: 'प्रतीक चिन्ह / इमोजी',
    saveProduct: 'सहेजें व अपडेट करें',
    add: 'जोड़ें',
    outOfStock: 'स्टॉक समाप्त',
    onlyLeft: 'केवल {n} शेष'
  },
  sa: {
    quickDelivery: '१५ निमेषाः',
    deliveringTo: 'गन्तव्यस्थानम्',
    searchPlaceholder: 'प्रसादम, गदा, धूपम, मूर्तिं अन्विष्यामि...',
    festiveSpecial: '🔥 भौमवासर विशेष कृपा',
    heroBannerTitle: 'सालासार-मेहन्दीपुर बालाजी मन्दिरात् साक्षात्',
    heroBannerSub: 'शुद्ध घृत मोदक प्रसादं रक्षासूत्रं च शीघ्रं प्राप्नुवन्तु।',
    useCode: 'कूटम्:',
    liveDarshan: 'प्रत्यक्ष मन्दिर दर्शनम्',
    sandhyaAarti: 'प्रातः शृङ्गार आरार्तिक अभिमन्त्रित प्रसादः',
    bookSankalp: '🙏 निःशुल्क सङ्कल्पम्',
    allProducts: 'सर्वे दिव्य पदार्थाः',
    all: 'सर्वम्',
    prasad: 'पवित्र प्रसादम्',
    idols: 'प्रतिमाः',
    puja: 'पूजासामग्री',
    mala: 'रुद्राक्षमाला',
    gada: 'गदा कवचम्',
    books: 'धार्मिक ग्रन्थाः',
    viewCart: 'पेटिका पश्यतु',
    store: 'आपणम्',
    orders: 'आदेशाः',
    admin: 'प्रबन्धकः',
    profile: 'विवरणम्',
    myCart: 'भवतः भक्तिपेटिका',
    deliveryIn: 'वितरण कालः:',
    templeSankalp: 'मन्दिर सङ्कल्पः गोत्रं च',
    free: 'निःशुल्कम्',
    enterNameGotra: 'भक्तस्य नाम गोत्रं च लिखन्तु',
    apply: 'प्रयुज्यताम्',
    feedGauMata: 'सेवा: गोमाता भोजनम्',
    sevaDesc: 'श्रीबालाजी मन्दिर सेवायाम् योगदानम्',
    billDetails: 'मूल्य विवरणम्',
    itemTotal: 'पदार्थ मूल्यम्',
    deliveryFee: 'वितरण शुल्कम्',
    discount: 'सूटिः',
    mandirSeva: 'मन्दिर सेवा',
    toPay: 'देय राशिः',
    total: 'कुलम्',
    deliveryLocation: 'वितरण स्थानम्',
    change: 'परिवर्तयतु',
    proceedToPay: 'धनादाय अग्रेसरतु',
    selectPaymentMethod: 'भुगतान विधिः',
    amountPayable: 'देय राशिः:',
    upiApps: 'यूपीआई / क्यूआर',
    scanQr: 'स्कैन कृत्वा ददातु',
    cardsNetbanking: 'पत्रकम् नकदम्',
    debitCredit: 'डेबिट / क्रेडिट कार्ड',
    cashOnDelivery: 'वितरण समये नकदम्',
    paySecurely: 'सुरक्षितम् देयम्',
    orderSuccessTitle: 'जय श्री बालाजी! आदेशः स्वीकृतः',
    orderSuccessMsg: 'भवतः पदार्थाः अभिमन्त्रिताः सन्ति।',
    orderId: 'आदेश सङ्ख्या:',
    estimatedArrival: 'अनुमानित कालः:',
    paymentMode: 'भुगतानम्:',
    trackLiveOrder: 'आदेशं अनुसरतु 🚚',
    continueShopping: 'पुनः आपणम् 🛍️',
    chooseLanguage: 'भाषां वृणोतु',
    myOrders: 'मम आदेशाः',
    trackOrdersDesc: 'प्रसादस्य स्थितिः',
    savedAddresses: 'सञ्चित स्थानानि',
    appLanguage: 'अनुप्रयोग भाषा',
    bhandaraSeva: 'मन्दिर भण्डारा',
    bhandaraSevaSub: 'गोशाला सेवा',
    helpSupport: 'सहायता केन्द्रम्',
    adminDashboard: 'प्रबन्धक फलकम्',
    adminSubtitle: 'स्टॉक तथा आदेश प्रबन्धनम्',
    addNewItem: 'नूतनं योजयतु',
    totalRevenue: 'कुल विक्रयणम्',
    totalOrders: 'कुल आदेशाः',
    lowStockItems: 'अल्प स्टॉक',
    customerOrders: 'प्रत्यक्ष आदेशाः',
    inventoryStock: 'इन्वेंट्री',
    product: 'पदार्थः',
    category: 'वर्गः',
    price: 'मूल्यम्',
    originalPrice: 'मूल MRP',
    stock: 'उपलब्ध स्टॉक',
    status: 'स्थितिः',
    actions: 'क्रियाः',
    productName: 'पदार्थ नाम',
    badgeTag: 'टैग',
    iconEmoji: 'प्रतीक चिन्हम्',
    saveProduct: 'रक्षतु',
    add: 'योजयतु',
    outOfStock: 'समाप्तम्',
    onlyLeft: 'केवलं {n} अवशिष्टम्'
  },
  gu: {
    quickDelivery: '15 મિનિટ',
    deliveringTo: 'ડિલિવરી સરનામું',
    searchPlaceholder: 'પ્રસાદ, ગદા, ધૂપ, મૂર્તિ શોધો...',
    festiveSpecial: '🔥 મંગળવાર વિશેષ કૃપા',
    heroBannerTitle: 'સાલાસર અને મહેંદીપુર બાલાજીથી સીધું',
    heroBannerSub: '100% શુદ્ધ ઘી બેસન લાડુ પ્રસાદ મિનિટોમાં મેળવો.',
    useCode: 'કૂપન:',
    liveDarshan: 'લાઈવ દર્શન',
    sandhyaAarti: 'આરતીથી અભિમંત્રિત પ્રસાદ ઉપલબ્ધ',
    bookSankalp: '🙏 મફત સંકલ્પ ઉમેરો',
    allProducts: 'બધા દિવ્ય ઉત્પાદનો',
    all: 'બધા',
    prasad: 'પવિત્ર પ્રસાદ',
    idols: 'મૂર્તિઓ',
    puja: 'પૂજા સામગ્રી',
    mala: 'રુદ્રાક્ષ માળા',
    gada: 'ગદા અને કવચ',
    books: 'ધાર્મિક પુસ્તકો',
    viewCart: 'કાર્ટ જુઓ',
    store: 'દુકાન',
    orders: 'ઓર્ડર્સ',
    admin: 'એડમિન',
    profile: 'પ્રોફાઇલ',
    myCart: 'તમારી ભક્તિ ટોપલી',
    deliveryIn: 'ડિલિવરી સમય:',
    templeSankalp: 'મંદિર સંકલ્પ અને ગોત્ર',
    free: 'મફત',
    enterNameGotra: 'ભક્તનું નામ અને ગોત્ર લખો',
    apply: 'લાગુ કરો',
    feedGauMata: 'સેવા: ગૌમાતા ભોજન',
    sevaDesc: 'શ્રી બાલાજી મંદિર સેવામાં યોગદાન',
    billDetails: 'બિલ વિગતો',
    itemTotal: 'કુલ કિંમત',
    deliveryFee: 'ડિલિવરી ફી',
    discount: 'છૂટ',
    mandirSeva: 'મંદિર સેવા',
    toPay: 'કુલ ચૂકવવાપાત્ર',
    total: 'કુલ',
    deliveryLocation: 'ડિલિવરી સ્થાન',
    change: 'બદલો',
    proceedToPay: 'ચૂકવણી માટે આગળ વધો',
    selectPaymentMethod: 'ચૂકવણી પદ્ધતિ',
    amountPayable: 'ચૂકવવાપાત્ર રકમ:',
    upiApps: 'UPI / QR કોડ',
    scanQr: 'QR સ્કેન કરી ચૂકવો',
    cardsNetbanking: 'કાર્ડ્સ અને રોકડ',
    debitCredit: 'ડેબિટ / ક્રેડિટ કાર્ડ',
    cashOnDelivery: 'કેશ ઓન ડિલિવરી (COD)',
    paySecurely: 'સુરક્ષિત ચૂકવણી કરો',
    orderSuccessTitle: 'જય શ્રી બાલાજી! ઓર્ડર સ્વીકારાયો',
    orderSuccessMsg: 'તમારી સામગ્રી તૈયાર છે.',
    orderId: 'ઓર્ડર ID:',
    estimatedArrival: 'અંદાજિત સમય:',
    paymentMode: 'ચૂકવણી:',
    trackLiveOrder: 'ઓર્ડર ટ્રેક કરો 🚚',
    continueShopping: 'વધુ ખરીદી કરો 🛍️',
    chooseLanguage: 'ભાષા પસંદ કરો',
    myOrders: 'મારા ઓર્ડર્સ',
    trackOrdersDesc: 'પ્રસાદની સ્થિતિ',
    savedAddresses: 'સાચવેલા સરનામાં',
    appLanguage: 'એપ ભાષા',
    bhandaraSeva: 'મંદિર ભંડારો',
    bhandaraSevaSub: 'ગૌશાળા સેવા',
    helpSupport: 'સહાયતા',
    adminDashboard: 'એડમિન ડેશબોર્ડ',
    adminSubtitle: 'ઇન્વેન્ટરી અને ઓર્ડર મેનેજમેન્ટ',
    addNewItem: 'નવું ઉમેરો',
    totalRevenue: 'કુલ વેચાણ',
    totalOrders: 'કુલ ઓર્ડર્સ',
    lowStockItems: 'ઓછો સ્ટોક',
    customerOrders: 'ગ્રાહક ઓર્ડર્સ',
    inventoryStock: 'ઇન્વેન્ટરી',
    product: 'ઉત્પાદન',
    category: 'શ્રેણી',
    price: 'કિંમત',
    originalPrice: 'મૂળ MRP',
    stock: 'સ્ટોક',
    status: 'સ્થિતિ',
    actions: 'ક્રિયાઓ',
    productName: 'નામ',
    badgeTag: 'ટૅગ',
    iconEmoji: 'ચિહ્ન',
    saveProduct: 'સાચવો',
    add: 'ઉમેરો',
    outOfStock: 'સ્ટોક ખાલી',
    onlyLeft: 'માત્ર {n} બાકી'
  },
  te: {
    quickDelivery: '15 నిమిషాలు',
    deliveringTo: 'డెలివరీ చిరునామా',
    searchPlaceholder: 'ప్రసాదం, గద, ధూపం, విగ్రహాలు వెతకండి...',
    festiveSpecial: '🔥 మంగళవారం ప్రత్యేక ఆశీస్సులు',
    heroBannerTitle: 'సాలాసార్ & మెహందీపూర్ బాలాజీ నుండి నేరుగా',
    heroBannerSub: '100% స్వచ్ఛమైన నెయ్యి బేసన్ లడ్డూ ప్రసాదం పొందండి.',
    useCode: 'కూపన్:',
    liveDarshan: 'ప్రత్యక్ష దర్శనం',
    sandhyaAarti: 'ఆరతి పూజా ప్రసాదం అందుబాటులో ఉంది',
    bookSankalp: '🙏 ఉచిత సంకల్పం చేర్చండి',
    allProducts: 'అన్ని దివ్య ఉత్పత్తులు',
    all: 'అన్నీ',
    prasad: 'పవిత్ర ప్రసాదం',
    idols: 'విగ్రహాలు',
    puja: 'పూజా సామగ్రి',
    mala: 'రుద్రాక్ష మాల',
    gada: 'గద & కవచం',
    books: 'భక్తి పుస్తకాలు',
    viewCart: 'కార్ట్ చూడండి',
    store: 'దుకాణం',
    orders: 'ఆర్డర్లు',
    admin: 'అడ్మిన్',
    profile: 'ప్రొఫైల్',
    myCart: 'మీ భక్తి బుట్ట',
    deliveryIn: 'డెలివరీ సమయం:',
    templeSankalp: 'ఆలయ సంకల్పం & గోత్రం',
    free: 'ఉచితం',
    enterNameGotra: 'భక్తుని పేరు & గోత్రం నమోదు చేయండి',
    apply: 'వర్తించు',
    feedGauMata: 'సేవ: గోమాత ఆహారం',
    sevaDesc: 'శ్రీ బాలాజీ ఆలయ సేవలో సహకారం',
    billDetails: 'బిల్లు వివరాలు',
    itemTotal: 'మొత్తం ధర',
    deliveryFee: 'డెలివరీ రుసుము',
    discount: 'డిస్కౌంట్',
    mandirSeva: 'ఆలయ సేవ',
    toPay: 'చెల్లించాల్సిన మొత్తం',
    total: 'మొత్తం',
    deliveryLocation: 'డెలివరీ ప్రాంతం',
    change: 'మార్చండి',
    proceedToPay: 'చెల్లింపునకు వెళ్లండి',
    selectPaymentMethod: 'చెల్లింపు విధానం',
    amountPayable: 'మొత్తం:',
    upiApps: 'UPI / QR కోడ్',
    scanQr: 'QR స్కాన్ చేసి చెల్లించండి',
    cardsNetbanking: 'కార్డులు & నగదు',
    debitCredit: 'డెబిట్ / క్రెడిట్ కార్డ్',
    cashOnDelivery: 'క్యాష్ ఆన్ డెలివరీ (COD)',
    paySecurely: 'సురక్షితంగా చెల్లించండి',
    orderSuccessTitle: 'జై శ్రీ బాలాజీ! ఆర్డర్ పూర్తయింది',
    orderSuccessMsg: 'మీ ప్రసాదం 15 నిమిషాల్లో చేరుతుంది.',
    orderId: 'ఆర్డర్ ID:',
    estimatedArrival: 'చేరే సమయం:',
    paymentMode: 'చెల్లింపు:',
    trackLiveOrder: 'లైవ్ ట్రాకింగ్ 🚚',
    continueShopping: 'మరింత షాపింగ్ 🛍️',
    chooseLanguage: 'భాషను ఎంచుకోండి',
    myOrders: 'నా ఆర్డర్లు',
    trackOrdersDesc: 'ఆర్డర్ స్థితి',
    savedAddresses: 'చిరునామాలు',
    appLanguage: 'యాప్ భాష',
    bhandaraSeva: 'అన్నదానం',
    bhandaraSevaSub: 'గోశాల సేవ',
    helpSupport: 'సహాయం',
    adminDashboard: 'అడ్మిన్ డాష్‌బోర్డ్',
    adminSubtitle: 'స్టాక్ & ఆర్డర్ల నిర్వహణ',
    addNewItem: 'కొత్తది చేర్చండి',
    totalRevenue: 'మొత్తం అమ్మకాలు',
    totalOrders: 'మొత్తం ఆర్డర్లు',
    lowStockItems: 'తక్కువ స్టాక్',
    customerOrders: 'కస్టమర్ ఆర్డర్లు',
    inventoryStock: 'ఇన్వెంటరీ',
    product: 'ఉత్పత్తి',
    category: 'వర్గం',
    price: 'ధర',
    originalPrice: 'అసలు MRP',
    stock: 'స్టాక్',
    status: 'స్థితి',
    actions: 'చర్యలు',
    productName: 'పేరు',
    badgeTag: 'ట్యాగ్',
    iconEmoji: 'చిహ్నం',
    saveProduct: 'సేవ్ చేయండి',
    add: 'చేర్చు',
    outOfStock: 'స్టాక్ లేదు',
    onlyLeft: '{n} మాత్రమే మిగిలింది'
  },
  ta: {
    quickDelivery: '15 நிமிடங்கள்',
    deliveringTo: 'டெலிவரி முகவரி',
    searchPlaceholder: 'பிரசாதம், கதா, தூபம், சிலைகள் தேடுங்கள்...',
    festiveSpecial: '🔥 செவ்வாய் சிறப்பு அருள்',
    heroBannerTitle: 'சாலாசார் & மெஹந்திபூர் பாலாஜி நேரடி பிரசாதம்',
    heroBannerSub: '100% தூய நெய் லட்டு பிரசாதம் நிமிடங்களில் கிடைக்கும்.',
    useCode: 'கூப்பன்:',
    liveDarshan: 'நேரலை தரிசனம்',
    sandhyaAarti: 'ஆரத்தி பிரசாதம் தயார்',
    bookSankalp: '🙏 இலவச சங்கல்பம் சேர்க்கவும்',
    allProducts: 'அனைத்து புனித பொருட்கள்',
    all: 'அனைத்தும்',
    prasad: 'புனித பிரசாதம்',
    idols: 'சிலைகள்',
    puja: 'பூஜை பொருட்கள்',
    mala: 'ருத்ராட்ச மாலை',
    gada: 'கதா & கவசம்',
    books: 'பக்தி நூல்கள்',
    viewCart: 'கூடையைப் பார்க்கவும்',
    store: 'கடை',
    orders: 'ஆர்டர்கள்',
    admin: 'நிர்வாகி',
    profile: 'சுயவிவரம்',
    myCart: 'உங்கள் பக்தி கூடை',
    deliveryIn: 'டெலிவரி நேரம்:',
    templeSankalp: 'கோயில் சங்கல்பம் & கோத்திரம்',
    free: 'இலவசம்',
    enterNameGotra: 'பக்தர் பெயர் & கோத்திரம் உள்ளிடவும்',
    apply: 'பயன்படுத்து',
    feedGauMata: 'சேவை: கோமாதா உணவு',
    sevaDesc: 'ஸ்ரீ பாலாஜி கோயில் சேவை பங்களிப்பு',
    billDetails: 'பில் விவரங்கள்',
    itemTotal: 'பொருட்கள் மொத்தம்',
    deliveryFee: 'டெலிவரி கட்டணம்',
    discount: 'தள்ளுபடி',
    mandirSeva: 'கோயில் சேவை',
    toPay: 'செலுத்த வேண்டிய தொகை',
    total: 'மொத்தம்',
    deliveryLocation: 'டெலிவரி இடம்',
    change: 'மாற்று',
    proceedToPay: 'பணம் செலுத்த தொடரவும்',
    selectPaymentMethod: 'பணம் செலுத்தும் முறை',
    amountPayable: 'தொகை:',
    upiApps: 'UPI / QR குறியீடு',
    scanQr: 'QR ஸ்கேன் செய்து செலுத்தவும்',
    cardsNetbanking: 'கார்டுகள் & ரொக்கம்',
    debitCredit: 'டெபிட் / கிரெடிட் கார்டு',
    cashOnDelivery: 'பொருள் வந்ததும் பணம் (COD)',
    paySecurely: 'பாதுகாப்பாக செலுத்தவும்',
    orderSuccessTitle: 'ஜெய் ஸ்ரீ பாலாஜி! ஆர்டர் பெறப்பட்டது',
    orderSuccessMsg: 'உங்கள் பிரசாதம் 15 நிமிடங்களில் வந்து சேரும்.',
    orderId: 'ஆர்டர் எண்:',
    estimatedArrival: 'வருகை நேரம்:',
    paymentMode: 'பணம் செலுத்துதல்:',
    trackLiveOrder: 'நேரலை கண்காணிப்பு 🚚',
    continueShopping: 'ஷாப்பிங்கைத் தொடரவும் 🛍️',
    chooseLanguage: 'மொழியைத் தேர்ந்தெடுக்கவும்',
    myOrders: 'எனது ஆர்டர்கள்',
    trackOrdersDesc: 'ஆர்டர் நிலை',
    savedAddresses: 'முகவரிகள்',
    appLanguage: 'பயன்பாட்டு மொழி',
    bhandaraSeva: 'அன்னதானம்',
    bhandaraSevaSub: 'கோசாலை சேவை',
    helpSupport: 'உதவி',
    adminDashboard: 'நிர்வாக டாஷ்போர்டு',
    adminSubtitle: 'சரக்கு மற்றும் ஆர்டர் மேலாண்மை',
    addNewItem: 'புதியது சேர்',
    totalRevenue: 'மொத்த விற்பனை',
    totalOrders: 'மொத்த ஆர்டர்கள்',
    lowStockItems: 'குறைந்த இருப்பு',
    customerOrders: 'வாடிக்கையாளர் ஆர்டர்கள்',
    inventoryStock: 'சரக்கு இருப்பு',
    product: 'பொருள்',
    category: 'பிரிவு',
    price: 'விலை',
    originalPrice: 'அசல் MRP',
    stock: 'இருப்பு',
    status: 'நிலை',
    actions: 'செயல்கள்',
    productName: 'பெயர்',
    badgeTag: 'டேக்',
    iconEmoji: 'சின்னம்',
    saveProduct: 'சேமிக்க',
    add: 'சேர்',
    outOfStock: 'இருப்பில் இல்லை',
    onlyLeft: '{n} மட்டுமே உள்ளது'
  },
  bn: {
    quickDelivery: '১৫ মিনিট',
    deliveringTo: 'ডেলিভারি ঠিকানা',
    searchPlaceholder: 'প্রসাদ, গদা, ধূপ, মূর্তি খুঁজুন...',
    festiveSpecial: '🔥 মঙ্গলবার বিশেষ কৃপা',
    heroBannerTitle: 'সরাসরি সালাসার ও মেহেন্দিপুর বালাজি থেকে',
    heroBannerSub: '১০০% খাঁটি দেশি ঘি বেসন লাড্ডু প্রসাদ পান মিনিটে।',
    useCode: 'কুপন:',
    liveDarshan: 'লাইভ দর্শন',
    sandhyaAarti: 'আরতি প্রসাদ উপলব্ধ',
    bookSankalp: '🙏 বিনামূল্যে সংকল্প যোগ করুন',
    allProducts: 'সমস্ত ঐশ্বরিক পণ্য',
    all: 'সব',
    prasad: 'পবিত্র প্রসাদ',
    idols: 'মূর্তি',
    puja: 'পূজা সামগ্রী',
    mala: 'রুদ্রাক্ষ মালা',
    gada: 'গদা ও কবচ',
    books: 'ধর্মীয় বই',
    viewCart: 'কার্ট দেখুন',
    store: 'দোকান',
    orders: 'অর্ডার',
    admin: 'অ্যাডমিন',
    profile: 'প্রোফাইল',
    myCart: 'আপনার ভক্তি ঝুড়ি',
    deliveryIn: 'ডেলিভারির সময়:',
    templeSankalp: 'মন্দির সংকল্প ও গোত্র',
    free: 'বিনামূল্যে',
    enterNameGotra: 'ভক্তের নাম ও গোত্র লিখুন',
    apply: 'প্রয়োগ করুন',
    feedGauMata: 'সেবা: গোমাতা খাদ্য',
    sevaDesc: 'শ্রী বালাজি মন্দির সেবায় অবদান',
    billDetails: 'বিল বিবরণ',
    itemTotal: 'মোট দাম',
    deliveryFee: 'ডেলিভারি ফি',
    discount: 'ছাড়',
    mandirSeva: 'মন্দির সেবা',
    toPay: 'মোট প্রদেয়',
    total: 'মোট',
    deliveryLocation: 'ডেলিভারি অবস্থান',
    change: 'পরিবর্তন',
    proceedToPay: 'পেমেন্ট করতে এগিয়ে যান',
    selectPaymentMethod: 'পেমেন্ট পদ্ধতি',
    amountPayable: 'প্রদেয় টাকা:',
    upiApps: 'UPI / QR কোড',
    scanQr: 'QR স্ক্যান করে পেমেন্ট করুন',
    cardsNetbanking: 'কার্ড এবং নগদ',
    debitCredit: 'ডেবিট / ক্রেডিট কার্ড',
    cashOnDelivery: 'ক্যাশ অন ডেলিভারি (COD)',
    paySecurely: 'নিরাপদে পেমেন্ট করুন',
    orderSuccessTitle: 'জয় শ্রী বালাজি! অর্ডার গৃহীত',
    orderSuccessMsg: 'আপনার প্রসাদ ১৫ মিনিটে পৌঁছে যাবে।',
    orderId: 'অর্ডার আইডি:',
    estimatedArrival: 'পৌঁছানোর সময়:',
    paymentMode: 'পেমেন্ট:',
    trackLiveOrder: 'অর্ডার ট্র্যাক করুন 🚚',
    continueShopping: 'আরো কেনাকাটা 🛍️',
    chooseLanguage: 'ভাষা চয়ন করুন',
    myOrders: 'আমার অর্ডার',
    trackOrdersDesc: 'অর্ডার স্থিতি',
    savedAddresses: 'ঠিকানা',
    appLanguage: 'অ্যাপের ভাষা',
    bhandaraSeva: 'মন্দির ভাণ্ডারা',
    bhandaraSevaSub: 'গোশালা সেবা',
    helpSupport: 'সাহায্য',
    adminDashboard: 'অ্যাডমিন ড্যাশবোর্ড',
    adminSubtitle: 'স্টক এবং অর্ডার পরিচালনা',
    addNewItem: 'নতুন যোগ করুন',
    totalRevenue: 'মোট বিক্রয়',
    totalOrders: 'মোট অর্ডার',
    lowStockItems: 'কম স্টক',
    customerOrders: 'গ্রাহক অর্ডার',
    inventoryStock: 'ইনভেন্টরি',
    product: 'পণ্য',
    category: 'বিভাগ',
    price: 'দাম',
    originalPrice: 'আসল MRP',
    stock: 'স্টক',
    status: 'স্থিতি',
    actions: 'অ্যাকশন',
    productName: 'নাম',
    badgeTag: 'ট্যাগ',
    iconEmoji: 'প্রতীক',
    saveProduct: 'সংরক্ষণ করুন',
    add: 'যোগ করুন',
    outOfStock: 'স্টক শেষ',
    onlyLeft: 'केवल {n}টি বাকি'
  }
};

// Initial Product Catalog (20 Authentic Spiritual Products)
const initialProducts = [
  {
    id: 'prasad-1',
    name: 'Salasar Shudh Desi Ghee Besan Ladoo Prasad',
    nameHi: 'सालासर शुद्ध देसी घी बेसन लड्डू प्रसाद',
    category: 'prasad',
    price: 250,
    mrp: 300,
    unit: '500g Box (Direct Temple Pack)',
    rating: '4.9',
    reviews: '3.4k',
    stock: 85,
    badge: 'BESTSELLER',
    icon: '🍯'
  },
  {
    id: 'prasad-2',
    name: 'Mehndipur Balaji Special Boondi & Peda Prasad',
    nameHi: 'मेहंदीपुर बालाजी स्पेशल बूंदी व पेड़ा प्रसाद',
    category: 'prasad',
    price: 320,
    mrp: 380,
    unit: '500g Blessed Prasad Pack',
    rating: '5.0',
    reviews: '2.8k',
    stock: 45,
    badge: 'TEMPLE BLESSED',
    icon: '🥮'
  },
  {
    id: 'prasad-3',
    name: 'Panchamrit & Tulsi Dry Fruit Mahaprasad',
    nameHi: 'पंचामृत एवं तुलसी मेवा महाप्रसाद',
    category: 'prasad',
    price: 499,
    mrp: 600,
    unit: '400g Premium Brass Tin',
    rating: '4.8',
    reviews: '1.2k',
    stock: 30,
    badge: 'ROYAL PRASAD',
    icon: '🥥'
  },
  {
    id: 'idols-1',
    name: 'Pure Brass Panchmukhi Hanuman Murti (5 Inch)',
    nameHi: 'पंचमुखी हनुमान जी पीतल मूर्ति (5 इंच)',
    category: 'idols',
    price: 1199,
    mrp: 1599,
    unit: 'Solid Pure Brass 650g',
    rating: '4.9',
    reviews: '920',
    stock: 18,
    badge: 'PURE BRASS',
    icon: '🔱'
  },
  {
    id: 'idols-2',
    name: 'Sanjeevani Parvat Uthaaye Hanuman Ji Idol',
    nameHi: 'संजीवनी पर्वत उठाए मारुति नंदन मूर्ति',
    category: 'idols',
    price: 850,
    mrp: 1100,
    unit: 'Antique Gold Finish (4.5 Inch)',
    rating: '4.9',
    reviews: '1.5k',
    stock: 22,
    badge: 'TOP RATED',
    icon: '⛰️'
  },
  {
    id: 'puja-1',
    name: 'Pure Chameli Tel & Vermillion Sindoor Chola Kit',
    nameHi: 'शुद्ध चमेली तेल एवं सिंदूर चोला किट',
    category: 'puja',
    price: 180,
    mrp: 220,
    unit: 'Complete Tuesday Chola Pack',
    rating: '4.9',
    reviews: '4.1k',
    stock: 120,
    badge: 'MUST HAVE',
    icon: '🔴'
  },
  {
    id: 'puja-2',
    name: 'Natural Loban & Guggal Sambrani Dhoop Cups',
    nameHi: 'प्राकृतिक लोबान व गुग्गल सम्ब्रानी धूप कप',
    category: 'puja',
    price: 160,
    mrp: 200,
    unit: 'Pack of 24 Cups with Burner',
    rating: '4.8',
    reviews: '2.1k',
    stock: 75,
    badge: 'CHARCOAL FREE',
    icon: '🪔'
  },
  {
    id: 'puja-3',
    name: 'Pure Brass Aarti Diya with Wooden Handle',
    nameHi: 'काष्ठ हत्था युक्त शुद्ध पीतल आरती दीया',
    category: 'puja',
    price: 349,
    mrp: 450,
    unit: 'Heavy Gauge Brass',
    rating: '4.7',
    reviews: '840',
    stock: 35,
    badge: 'HANDCRAFTED',
    icon: '🕯️'
  },
  {
    id: 'mala-1',
    name: 'Original 108+1 Beads Panchmukhi Rudraksha Mala',
    nameHi: 'मूल 108+1 मनके पंचमुखी रुद्राक्ष माला',
    category: 'mala',
    price: 399,
    mrp: 599,
    unit: 'Lab Certified 7mm Beads',
    rating: '4.9',
    reviews: '5.2k',
    stock: 60,
    badge: 'LAB CERTIFIED',
    icon: '📿'
  },
  {
    id: 'mala-2',
    name: 'Lal Chandan (Red Sandalwood) Jaap Mala',
    nameHi: 'लाल चन्दन हनुमान जाप माला (108 मनके)',
    category: 'mala',
    price: 299,
    mrp: 420,
    unit: 'Natural Red Sandalwood 8mm',
    rating: '4.8',
    reviews: '1.9k',
    stock: 40,
    badge: 'PEACE & ENERGY',
    icon: '🔴'
  },
  {
    id: 'gada-1',
    name: 'Pure 92.5 Sterling Silver Hanuman Gada Pendant',
    nameHi: '92.5 शुद्ध चांदी हनुमान गदा लॉकेट',
    category: 'gada',
    price: 1499,
    mrp: 1999,
    unit: 'Hallmarked 925 Silver (8 Grams)',
    rating: '5.0',
    reviews: '760',
    stock: 12,
    badge: '925 SILVER',
    icon: '⚔️'
  },
  {
    id: 'gada-2',
    name: 'Siddh Ashtadhatu Hanuman Kawach / Tabeez',
    nameHi: 'सिद्ध अष्टधातु हनुमान रक्षा कवच ताबीज',
    category: 'gada',
    price: 399,
    mrp: 650,
    unit: 'Consecrated Protective Amulet',
    rating: '4.9',
    reviews: '3.1k',
    stock: 50,
    badge: 'RAKSHA KAVACH',
    icon: '🛡️'
  },
  {
    id: 'books-1',
    name: 'Shree Hanuman Chalisa (Gold Foil Luxury Edition)',
    nameHi: 'श्री हनुमान चालीसा (स्वर्ण पत्र लग्जरी संस्करण)',
    category: 'books',
    price: 199,
    mrp: 299,
    unit: 'Hardbound Hindi + English Meanings',
    rating: '5.0',
    reviews: '6.4k',
    stock: 110,
    badge: 'COLLECTOR EDITION',
    icon: '📖'
  },
  {
    id: 'books-2',
    name: 'Sundarkand & Bajrang Baan Pocket Gutka',
    nameHi: 'सुन्दरकाण्ड एवं बजरंग बाण पॉकेट गुटका',
    category: 'books',
    price: 99,
    mrp: 150,
    unit: 'Large Font Gita Press Edition',
    rating: '4.9',
    reviews: '4.8k',
    stock: 95,
    badge: 'GITA PRESS',
    icon: '📙'
  }
];

// Initial Demo Customer Orders
const initialOrders = [
  {
    id: 'BKK-9421',
    customerName: 'Sparsh Garg',
    phone: '+91 98765 43210',
    address: 'Home - Sector 14, Urban Estate, Hisar, Haryana',
    items: [
      { name: 'Salasar Shudh Desi Ghee Besan Ladoo Prasad', qty: 2, price: 250 },
      { name: 'Original 108+1 Beads Panchmukhi Rudraksha Mala', qty: 1, price: 399 }
    ],
    total: 899,
    paymentMode: 'UPI (GPay)',
    status: 'dispatched', // 'placed' | 'preparing' | 'dispatched' | 'delivered'
    sankalp: 'Sparsh Garg (Kashyap Gotra)',
    time: 'Today, 10:15 AM'
  },
  {
    id: 'BKK-8920',
    customerName: 'Pooja Sharma',
    phone: '+91 98123 45678',
    address: 'Temple View Apts, Civil Lines, Delhi',
    items: [
      { name: 'Pure Brass Panchmukhi Hanuman Murti (5 Inch)', qty: 1, price: 1199 }
    ],
    total: 1220,
    paymentMode: 'Card (Paid)',
    status: 'delivered',
    sankalp: 'Sharma Parivar',
    time: 'Yesterday, 06:40 PM'
  }
];

// App Initialization
function initApp() {
  loadFromLocalStorage();
  setupEventListeners();
  renderCategoryPills();
  renderProducts();
  renderOrders();
  renderAdmin();
  updateCartUI();
  updateTranslations();
}

// Load data from LocalStorage
function loadFromLocalStorage() {
  const savedLang = localStorage.getItem('bkk_lang');
  if (savedLang && i18n[savedLang]) state.lang = savedLang;

  const savedProducts = localStorage.getItem('bkk_products');
  if (savedProducts) {
    try { state.products = JSON.parse(savedProducts); }
    catch { state.products = [...initialProducts]; }
  } else {
    state.products = [...initialProducts];
  }

  const savedOrders = localStorage.getItem('bkk_orders');
  if (savedOrders) {
    try { state.orders = JSON.parse(savedOrders); }
    catch { state.orders = [...initialOrders]; }
  } else {
    state.orders = [...initialOrders];
  }

  const savedCart = localStorage.getItem('bkk_cart');
  if (savedCart) {
    try { state.cart = JSON.parse(savedCart); }
    catch { state.cart = {}; }
  }
}

// Save state to LocalStorage
function saveState() {
  localStorage.setItem('bkk_lang', state.lang);
  localStorage.setItem('bkk_products', JSON.stringify(state.products));
  localStorage.setItem('bkk_orders', JSON.stringify(state.orders));
  localStorage.setItem('bkk_cart', JSON.stringify(state.cart));
}

// Translate UI elements
function updateTranslations() {
  const dict = i18n[state.lang] || i18n.en;

  // Update text with data-i18n
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (dict[key]) {
      el.textContent = dict[key];
    }
  });

  // Update placeholders
  document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
    const key = el.getAttribute('data-i18n-placeholder');
    if (dict[key]) {
      el.placeholder = dict[key];
    }
  });

  // Update language badge
  const langBadge = document.getElementById('currentLangBadge');
  if (langBadge) {
    langBadge.textContent = state.lang.toUpperCase();
  }

  // Update Profile label
  const profLang = document.getElementById('profileCurrentLang');
  if (profLang) {
    const names = { en: 'English', hi: 'हिंदी (Hindi)', sa: 'संस्कृतम् (Sanskrit)', gu: 'ગુજરાતી (Gujarati)', te: 'తెలుగు (Telugu)', ta: 'தமிழ் (Tamil)', bn: 'বাংলা (Bengali)' };
    profLang.textContent = names[state.lang] || state.lang;
  }

  renderCategoryPills();
  renderProducts();
}

// Setup Event Listeners
function setupEventListeners() {
  // Navigation Tabs
  document.querySelectorAll('.bottom-nav .nav-item').forEach(btn => {
    btn.addEventListener('click', () => {
      const navTarget = btn.getAttribute('data-nav');
      switchView(navTarget);
    });
  });

  // Search Input
  const searchInput = document.getElementById('searchInput');
  const clearSearchBtn = document.getElementById('clearSearchBtn');
  
  if (searchInput) {
    searchInput.addEventListener('input', (e) => {
      state.searchQuery = e.target.value.trim().toLowerCase();
      if (clearSearchBtn) {
        clearSearchBtn.classList.toggle('hidden', state.searchQuery === '');
      }
      renderProducts();
    });
  }

  if (clearSearchBtn) {
    clearSearchBtn.addEventListener('click', () => {
      searchInput.value = '';
      state.searchQuery = '';
      clearSearchBtn.classList.add('hidden');
      renderProducts();
    });
  }

  // Language Modal Toggle
  const langModalBtn = document.getElementById('langModalBtn');
  const langModalBackdrop = document.getElementById('langModalBackdrop');
  const closeLangModalBtn = document.getElementById('closeLangModalBtn');
  const openLangFromProfile = document.getElementById('openLangFromProfile');

  const openLangModal = () => langModalBackdrop.classList.remove('hidden');
  const closeLangModal = () => langModalBackdrop.classList.add('hidden');

  if (langModalBtn) langModalBtn.addEventListener('click', openLangModal);
  if (openLangFromProfile) openLangFromProfile.addEventListener('click', openLangModal);
  if (closeLangModalBtn) closeLangModalBtn.addEventListener('click', closeLangModal);

  // Language Selection Cards
  document.querySelectorAll('.lang-card').forEach(card => {
    card.addEventListener('click', () => {
      document.querySelectorAll('.lang-card').forEach(c => c.classList.remove('active'));
      card.classList.add('active');
      state.lang = card.getAttribute('data-lang') || 'en';
      saveState();
      updateTranslations();
      closeLangModal();
      showToast(`Language switched to ${card.querySelector('.lang-native').textContent}`);
    });
  });

  // Role Toggle (User / Admin)
  const adminToggleBtn = document.getElementById('adminToggleBtn');
  if (adminToggleBtn) {
    adminToggleBtn.addEventListener('click', () => {
      if (state.role === 'user') {
        state.role = 'admin';
        adminToggleBtn.classList.add('active');
        switchView('admin');
        showToast('🛡️ Admin Command Center Activated');
      } else {
        state.role = 'user';
        adminToggleBtn.classList.remove('active');
        switchView('store');
        showToast('👤 Switched to Devotee View');
      }
    });
  }

  // Admin Tab Switching (Orders vs Inventory)
  const adminTabOrders = document.getElementById('adminTabOrders');
  const adminTabInventory = document.getElementById('adminTabInventory');
  const adminOrdersPanel = document.getElementById('adminOrdersPanel');
  const adminInventoryPanel = document.getElementById('adminInventoryPanel');

  if (adminTabOrders && adminTabInventory) {
    adminTabOrders.addEventListener('click', () => {
      adminTabOrders.classList.add('active');
      adminTabInventory.classList.remove('active');
      adminOrdersPanel.classList.add('active');
      adminInventoryPanel.classList.remove('active');
    });

    adminTabInventory.addEventListener('click', () => {
      adminTabInventory.classList.add('active');
      adminTabOrders.classList.remove('active');
      adminInventoryPanel.classList.add('active');
      adminOrdersPanel.classList.remove('active');
      renderAdminInventory();
    });
  }

  // Add Product Modal (Admin)
  const addNewProductBtn = document.getElementById('addNewProductBtn');
  const productEditModalBackdrop = document.getElementById('productEditModalBackdrop');
  const closeProductEditModalBtn = document.getElementById('closeProductEditModalBtn');
  const productEditForm = document.getElementById('productEditForm');

  if (addNewProductBtn) {
    addNewProductBtn.addEventListener('click', () => {
      document.getElementById('editProductId').value = '';
      document.getElementById('editProductName').value = '';
      document.getElementById('editProductPrice').value = '';
      document.getElementById('editProductMrp').value = '';
      document.getElementById('editProductStock').value = '50';
      document.getElementById('editProductBadge').value = 'NEW ARRIVAL';
      document.getElementById('editProductIcon').value = '🪔';
      document.getElementById('productModalTitle').textContent = 'Add New Devotional Item';
      productEditModalBackdrop.classList.remove('hidden');
    });
  }

  if (closeProductEditModalBtn) {
    closeProductEditModalBtn.addEventListener('click', () => {
      productEditModalBackdrop.classList.add('hidden');
    });
  }

  if (productEditForm) {
    productEditForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const id = document.getElementById('editProductId').value || 'item-' + Date.now();
      const name = document.getElementById('editProductName').value;
      const category = document.getElementById('editProductCategory').value;
      const price = parseFloat(document.getElementById('editProductPrice').value) || 100;
      const mrp = parseFloat(document.getElementById('editProductMrp').value) || (price + 50);
      const stock = parseInt(document.getElementById('editProductStock').value) || 0;
      const badge = document.getElementById('editProductBadge').value || 'TEMPLE ITEM';
      const icon = document.getElementById('editProductIcon').value || '🪔';

      const existingIndex = state.products.findIndex(p => p.id === id);
      if (existingIndex >= 0) {
        state.products[existingIndex] = {
          ...state.products[existingIndex],
          name, category, price, mrp, stock, badge, icon
        };
        showToast('✅ Product updated successfully');
      } else {
        state.products.unshift({
          id, name, nameHi: name, category, price, mrp, unit: 'Standard Pack', rating: '5.0', reviews: '1', stock, badge, icon
        });
        showToast('✅ New devotional item added to store');
      }

      saveState();
      renderProducts();
      renderAdmin();
      productEditModalBackdrop.classList.add('hidden');
    });
  }

  // Cart Drawer
  const openCartDrawerBtn = document.getElementById('openCartDrawerBtn');
  const cartDrawerBackdrop = document.getElementById('cartDrawerBackdrop');
  const closeCartDrawerBtn = document.getElementById('closeCartDrawerBtn');

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

  // Coupon Application
  const applyCouponBtn = document.getElementById('applyCouponBtn');
  const couponInput = document.getElementById('couponInput');
  const removeCouponBtn = document.getElementById('removeCouponBtn');

  if (applyCouponBtn && couponInput) {
    applyCouponBtn.addEventListener('click', () => {
      const code = couponInput.value.trim().toUpperCase();
      if (code === 'BALAJI108' || code === 'PRASAD50') {
        state.coupon = { code, discountPercent: code === 'BALAJI108' ? 10 : 15 };
        document.getElementById('appliedCouponTag').classList.remove('hidden');
        couponInput.value = '';
        renderCartDrawer();
        showToast(`🎉 Coupon ${code} applied successfully!`);
      } else {
        showToast('❌ Invalid Coupon Code. Try BALAJI108');
      }
    });
  }

  if (removeCouponBtn) {
    removeCouponBtn.addEventListener('click', () => {
      state.coupon = null;
      document.getElementById('appliedCouponTag').classList.add('hidden');
      renderCartDrawer();
      showToast('Coupon removed');
    });
  }

  // Donation Chips
  document.querySelectorAll('.donation-chip').forEach(chip => {
    chip.addEventListener('click', () => {
      document.querySelectorAll('.donation-chip').forEach(c => c.classList.remove('active'));
      chip.classList.add('active');
      state.donation = parseInt(chip.getAttribute('data-amount')) || 0;
      renderCartDrawer();
    });
  });

  // Proceed to Payment Modal
  const proceedToPayBtn = document.getElementById('proceedToPayBtn');
  const paymentModalBackdrop = document.getElementById('paymentModalBackdrop');
  const closePaymentModalBtn = document.getElementById('closePaymentModalBtn');
  const confirmPaymentBtn = document.getElementById('confirmPaymentBtn');

  if (proceedToPayBtn) {
    proceedToPayBtn.addEventListener('click', () => {
      cartDrawerBackdrop.classList.add('hidden');
      paymentModalBackdrop.classList.remove('hidden');
      
      const grandTotal = calculateGrandTotal();
      document.getElementById('paymentPayableAmount').textContent = `₹${grandTotal}`;
      document.getElementById('confirmPayAmount').textContent = `₹${grandTotal}`;
      
      // Update dynamic QR code URL
      const qrImg = document.getElementById('dynamicQrImage');
      if (qrImg) {
        qrImg.src = `https://api.qrserver.com/v1/create-qr-code/?size=180x180&data=upi://pay?pa=balajikripa@upi&pn=Balaji%20Ki%20Kripa%20Store&am=${grandTotal}&cu=INR`;
      }
    });
  }

  if (closePaymentModalBtn) {
    closePaymentModalBtn.addEventListener('click', () => {
      paymentModalBackdrop.classList.add('hidden');
    });
  }

  // Payment Options Radio Selection
  document.querySelectorAll('input[name="paymentOption"]').forEach(radio => {
    radio.addEventListener('change', () => {
      document.querySelectorAll('.payment-option').forEach(opt => opt.classList.remove('selected'));
      radio.closest('.payment-option').classList.add('selected');
      state.paymentMethod = radio.value;

      const qrPreviewBox = document.getElementById('qrPreviewBox');
      if (qrPreviewBox) {
        qrPreviewBox.classList.toggle('hidden', radio.value !== 'upi_qr');
      }
    });
  });

  // Confirm Payment & Place Order
  if (confirmPaymentBtn) {
    confirmPaymentBtn.addEventListener('click', () => {
      paymentModalBackdrop.classList.add('hidden');
      placeOrder();
    });
  }

  // Success Modal Actions
  const viewLiveTrackBtn = document.getElementById('viewLiveTrackBtn');
  const continueShoppingBtn = document.getElementById('continueShoppingBtn');
  const successModalBackdrop = document.getElementById('successModalBackdrop');

  if (viewLiveTrackBtn) {
    viewLiveTrackBtn.addEventListener('click', () => {
      successModalBackdrop.classList.add('hidden');
      switchView('orders');
    });
  }

  if (continueShoppingBtn) {
    continueShoppingBtn.addEventListener('click', () => {
      successModalBackdrop.classList.add('hidden');
      switchView('store');
    });
  }

  // Free Sankalp Button
  const openSankalpBtn = document.getElementById('openSankalpBtn');
  if (openSankalpBtn) {
    openSankalpBtn.addEventListener('click', () => {
      cartDrawerBackdrop.classList.remove('hidden');
      const sankalpInput = document.getElementById('cartSankalpName');
      if (sankalpInput) {
        sankalpInput.focus();
        sankalpInput.scrollIntoView({ behavior: 'smooth' });
      }
    });
  }
}

// Switch Active View Tab
function switchView(viewName) {
  document.querySelectorAll('.view-section').forEach(sec => sec.classList.remove('active'));
  document.querySelectorAll('.bottom-nav .nav-item').forEach(btn => {
    btn.classList.toggle('active', btn.getAttribute('data-nav') === viewName);
  });

  const targetSection = document.getElementById(`${viewName}Section`);
  if (targetSection) {
    targetSection.classList.add('active');
  }

  if (viewName === 'orders') renderOrders();
  if (viewName === 'admin') renderAdmin();
  if (viewName === 'store') renderProducts();
}

// Render Category Pills
function renderCategoryPills() {
  const dict = i18n[state.lang] || i18n.en;
  const categories = [
    { id: 'all', label: dict.all || 'All', icon: '🌟' },
    { id: 'prasad', label: dict.prasad || 'Sacred Prasad', icon: '🍯' },
    { id: 'idols', label: dict.idols || 'Idols & Murti', icon: '🔱' },
    { id: 'puja', label: dict.puja || 'Puja Samagri', icon: '🪔' },
    { id: 'mala', label: dict.mala || 'Rudraksha & Mala', icon: '📿' },
    { id: 'gada', label: dict.gada || 'Gada & Kawach', icon: '⚔️' },
    { id: 'books', label: dict.books || 'Books & Chalisa', icon: '📖' }
  ];

  const container = document.getElementById('categoryPills');
  if (!container) return;

  container.innerHTML = categories.map(cat => `
    <button class="category-pill ${state.activeCategory === cat.id ? 'active' : ''}" data-cat="${cat.id}">
      <span>${cat.icon}</span>
      <span>${cat.label}</span>
    </button>
  `).join('');

  container.querySelectorAll('.category-pill').forEach(btn => {
    btn.addEventListener('click', () => {
      state.activeCategory = btn.getAttribute('data-cat') || 'all';
      renderCategoryPills();
      renderProducts();
    });
  });
}

// Render Product Grid
function renderProducts() {
  const container = document.getElementById('productGrid');
  if (!container) return;

  const dict = i18n[state.lang] || i18n.en;

  // Filter products by category and search query
  let filtered = state.products.filter(prod => {
    const matchesCat = state.activeCategory === 'all' || prod.category === state.activeCategory;
    const matchesSearch = state.searchQuery === '' ||
      prod.name.toLowerCase().includes(state.searchQuery) ||
      (prod.nameHi && prod.nameHi.toLowerCase().includes(state.searchQuery));
    return matchesCat && matchesSearch;
  });

  const countBadge = document.getElementById('productCountBadge');
  if (countBadge) countBadge.textContent = `${filtered.length} Items`;

  if (filtered.length === 0) {
    container.innerHTML = `
      <div style="grid-column: span 2; text-align: center; padding: 40px 10px; color: var(--text-muted);">
        <span style="font-size: 36px; display: block; margin-bottom: 8px;">🔍</span>
        <p>No devotional items found matching "<strong>${state.searchQuery}</strong>"</p>
      </div>
    `;
    return;
  }

  container.innerHTML = filtered.map(prod => {
    const qty = state.cart[prod.id] || 0;
    const isOutOfStock = prod.stock <= 0;
    const displayName = state.lang === 'hi' && prod.nameHi ? prod.nameHi : prod.name;
    const stockMsg = prod.stock > 0 && prod.stock <= 5 
      ? dict.onlyLeft.replace('{n}', prod.stock) 
      : '';

    return `
      <div class="product-card ${isOutOfStock ? 'out-of-stock' : ''}" data-id="${prod.id}">
        ${prod.badge ? `<span class="product-badge-tag">${prod.badge}</span>` : ''}
        
        <div class="product-image-container">
          <span class="product-icon-art">${prod.icon || '🪔'}</span>
        </div>

        <div class="product-details">
          <h4 class="product-title" title="${displayName}">${displayName}</h4>
          <p class="product-unit">${prod.unit}</p>
          <div class="product-rating">
            <span>⭐ ${prod.rating}</span>
            <span style="color: var(--text-muted); font-size: 10px;">(${prod.reviews})</span>
          </div>

          <div class="product-price-row">
            <div class="product-price">
              <span class="current-price">₹${prod.price}</span>
              ${prod.mrp ? `<span class="original-price">₹${prod.mrp}</span>` : ''}
              ${stockMsg ? `<span class="stock-indicator">${stockMsg}</span>` : ''}
            </div>

            <div class="btn-add-container">
              ${isOutOfStock ? `
                <button class="btn-add" disabled>${dict.outOfStock}</button>
              ` : qty > 0 ? `
                <div class="qty-stepper">
                  <button class="stepper-btn" onclick="updateItemQuantity('${prod.id}', ${qty - 1})">-</button>
                  <span class="stepper-count">${qty}</span>
                  <button class="stepper-btn" onclick="updateItemQuantity('${prod.id}', ${qty + 1})">+</button>
                </div>
              ` : `
                <button class="btn-add" onclick="updateItemQuantity('${prod.id}', 1)">${dict.add} +</button>
              `}
            </div>
          </div>
        </div>
      </div>
    `;
  }).join('');
}

// Update Cart Quantity
window.updateItemQuantity = function(productId, newQty) {
  const prod = state.products.find(p => p.id === productId);
  if (!prod) return;

  if (newQty > prod.stock) {
    showToast(`⚠️ Only ${prod.stock} items available in stock!`);
    return;
  }

  if (newQty <= 0) {
    delete state.cart[productId];
  } else {
    state.cart[productId] = newQty;
  }

  saveState();
  renderProducts();
  updateCartUI();
  renderCartDrawer();
};

// Update Floating Cart Bar
function updateCartUI() {
  const floatingBar = document.getElementById('floatingCartBar');
  const cartTotalItems = document.getElementById('cartTotalItems');
  const cartTotalPrice = document.getElementById('cartTotalPrice');
  const cartSavingsText = document.getElementById('cartSavingsText');

  const totalCount = Object.values(state.cart).reduce((sum, q) => sum + q, 0);

  if (totalCount > 0) {
    let itemTotal = 0;
    let savingsTotal = 0;

    for (const [id, qty] of Object.entries(state.cart)) {
      const prod = state.products.find(p => p.id === id);
      if (prod) {
        itemTotal += prod.price * qty;
        if (prod.mrp && prod.mrp > prod.price) {
          savingsTotal += (prod.mrp - prod.price) * qty;
        }
      }
    }

    if (cartTotalItems) cartTotalItems.textContent = `${totalCount} Items`;
    if (cartTotalPrice) cartTotalPrice.textContent = `₹${itemTotal}`;
    if (cartSavingsText) {
      cartSavingsText.textContent = savingsTotal > 0 ? `Saved ₹${savingsTotal} on MRP` : '⚡ 15-Min Delivery';
    }

    floatingBar.classList.remove('hidden');
  } else {
    floatingBar.classList.add('hidden');
  }
}

// Calculate Total Amount
function calculateGrandTotal() {
  let itemTotal = 0;
  for (const [id, qty] of Object.entries(state.cart)) {
    const prod = state.products.find(p => p.id === id);
    if (prod) itemTotal += prod.price * qty;
  }

  const deliveryFee = itemTotal >= 499 || itemTotal === 0 ? 0 : 30;
  const discount = state.coupon ? Math.round((itemTotal * state.coupon.discountPercent) / 100) : 0;
  const grandTotal = Math.max(0, itemTotal + deliveryFee + state.donation - discount);
  return grandTotal;
}

// Render Cart Drawer
function renderCartDrawer() {
  const container = document.getElementById('cartItemsList');
  if (!container) return;

  const entries = Object.entries(state.cart);

  if (entries.length === 0) {
    container.innerHTML = `
      <div style="text-align: center; padding: 30px 10px; color: var(--text-muted);">
        <span style="font-size: 40px; display: block; margin-bottom: 8px;">🛒</span>
        <p>Your devotional basket is empty</p>
      </div>
    `;
    document.getElementById('billItemTotal').textContent = '₹0';
    document.getElementById('billGrandTotal').textContent = '₹0';
    document.getElementById('drawerFooterTotal').textContent = '₹0';
    return;
  }

  let itemTotal = 0;

  container.innerHTML = entries.map(([id, qty]) => {
    const prod = state.products.find(p => p.id === id);
    if (!prod) return '';
    const linePrice = prod.price * qty;
    itemTotal += linePrice;

    return `
      <div class="cart-item-row">
        <div class="cart-item-details">
          <div class="cart-item-name">${prod.name}</div>
          <div class="cart-item-price">₹${prod.price} × ${qty} = <strong>₹${linePrice}</strong></div>
        </div>
        <div class="qty-stepper" style="width: 76px; height: 28px;">
          <button class="stepper-btn" onclick="updateItemQuantity('${prod.id}', ${qty - 1})">-</button>
          <span class="stepper-count">${qty}</span>
          <button class="stepper-btn" onclick="updateItemQuantity('${prod.id}', ${qty + 1})">+</button>
        </div>
      </div>
    `;
  }).join('');

  const deliveryFee = itemTotal >= 499 ? 0 : 30;
  const discount = state.coupon ? Math.round((itemTotal * state.coupon.discountPercent) / 100) : 0;
  const grandTotal = Math.max(0, itemTotal + deliveryFee + state.donation - discount);

  document.getElementById('billItemTotal').textContent = `₹${itemTotal}`;
  document.getElementById('billDeliveryFee').textContent = deliveryFee === 0 ? 'FREE' : `₹${deliveryFee}`;
  
  const discountRow = document.getElementById('billDiscountRow');
  const billDiscount = document.getElementById('billDiscount');
  if (discount > 0) {
    discountRow.classList.remove('hidden');
    billDiscount.textContent = `-₹${discount}`;
  } else {
    discountRow.classList.add('hidden');
  }

  document.getElementById('billDonation').textContent = `₹${state.donation}`;
  document.getElementById('billGrandTotal').textContent = `₹${grandTotal}`;
  document.getElementById('drawerFooterTotal').textContent = `₹${grandTotal}`;
}

// Place Order Flow
function placeOrder() {
  const entries = Object.entries(state.cart);
  if (entries.length === 0) return;

  const orderId = 'BKK-' + Math.floor(1000 + Math.random() * 9000);
  const items = entries.map(([id, qty]) => {
    const prod = state.products.find(p => p.id === id);
    return { name: prod ? prod.name : id, qty, price: prod ? prod.price : 0 };
  });

  const sankalpInput = document.getElementById('cartSankalpName');
  const sankalp = sankalpInput ? sankalpInput.value.trim() : 'Param Bhakt';

  const grandTotal = calculateGrandTotal();

  const newOrder = {
    id: orderId,
    customerName: 'Sparsh Garg',
    phone: '+91 98765 43210',
    address: state.deliveryAddress,
    items,
    total: grandTotal,
    paymentMode: state.paymentMethod.toUpperCase().replace('_', ' '),
    status: 'placed',
    sankalp: sankalp || 'Hanuman Bhakt',
    time: 'Just now'
  };

  // Reduce product stock in store
  entries.forEach(([id, qty]) => {
    const prod = state.products.find(p => p.id === id);
    if (prod) prod.stock = Math.max(0, prod.stock - qty);
  });

  state.orders.unshift(newOrder);
  state.cart = {};
  saveState();

  // Show Success Modal
  document.getElementById('successOrderId').textContent = `#${orderId}`;
  document.getElementById('successPaymentMode').textContent = newOrder.paymentMode;
  document.getElementById('successModalBackdrop').classList.remove('hidden');

  updateCartUI();
  renderProducts();
  renderOrders();
  renderAdmin();
}

// Render Orders Tab
function renderOrders() {
  const container = document.getElementById('ordersList');
  if (!container) return;

  if (state.orders.length === 0) {
    container.innerHTML = `
      <div style="text-align: center; padding: 40px 10px; color: var(--text-muted);">
        <span style="font-size: 40px; display: block; margin-bottom: 8px;">📦</span>
        <p>No devotional orders placed yet</p>
      </div>
    `;
    return;
  }

  container.innerHTML = state.orders.map(order => {
    const isPlaced = order.status === 'placed';
    const isPreparing = order.status === 'preparing';
    const isDispatched = order.status === 'dispatched';
    const isDelivered = order.status === 'delivered';

    return `
      <div class="order-tracking-card">
        <div class="tracking-header">
          <div>
            <strong style="color: var(--maroon); font-size: 14px;">#${order.id}</strong>
            <p style="font-size: 11px; color: var(--text-muted);">${order.time}</p>
          </div>
          <span class="admin-order-badge badge-${order.status}">${order.status.toUpperCase()}</span>
        </div>

        <div class="tracking-timeline">
          <div class="timeline-step ${isPlaced || isPreparing || isDispatched || isDelivered ? 'completed' : ''}">
            <div class="timeline-dot">✓</div>
            <span class="timeline-label">Placed</span>
          </div>
          <div class="timeline-step ${isPreparing || isDispatched || isDelivered ? 'completed' : isPlaced ? 'active' : ''}">
            <div class="timeline-dot">🪔</div>
            <span class="timeline-label">Blessed</span>
          </div>
          <div class="timeline-step ${isDispatched || isDelivered ? 'completed' : isPreparing ? 'active' : ''}">
            <div class="timeline-dot">🚚</div>
            <span class="timeline-label">Out</span>
          </div>
          <div class="timeline-step ${isDelivered ? 'completed' : isDispatched ? 'active' : ''}">
            <div class="timeline-dot">🏠</div>
            <span class="timeline-label">Delivered</span>
          </div>
        </div>

        <div style="font-size: 12px; margin-top: 10px; border-top: 1px dashed var(--border-light); padding-top: 8px;">
          ${order.items.map(item => `<div>• ${item.name} (×${item.qty})</div>`).join('')}
          <div style="margin-top: 6px; font-weight: 800; display: flex; justify-content: space-between;">
            <span>Total Amount Paid:</span>
            <span>₹${order.total}</span>
          </div>
        </div>
      </div>
    `;
  }).join('');
}

// Render Admin Command Center
function renderAdmin() {
  const totalRevenue = state.orders.reduce((sum, o) => sum + o.total, 0);
  const lowStockCount = state.products.filter(p => p.stock <= 5).length;
  const pendingOrders = state.orders.filter(o => o.status !== 'delivered').length;

  document.getElementById('adminRevenue').textContent = `₹${totalRevenue.toLocaleString('en-IN')}`;
  document.getElementById('adminOrderCount').textContent = state.orders.length;
  document.getElementById('adminLowStockCount').textContent = `${lowStockCount} Items`;
  document.getElementById('adminPendingOrdersCount').textContent = pendingOrders;

  renderAdminOrders();
  renderAdminInventory();
}

// Render Admin Orders List with Status Buttons
function renderAdminOrders() {
  const container = document.getElementById('adminOrdersList');
  if (!container) return;

  if (state.orders.length === 0) {
    container.innerHTML = `<p style="text-align: center; color: var(--text-muted); padding: 20px;">No customer orders yet</p>`;
    return;
  }

  container.innerHTML = state.orders.map(order => `
    <div class="admin-order-card">
      <div class="admin-order-header">
        <div>
          <span class="admin-order-id">#${order.id}</span>
          <span style="font-size: 11px; color: var(--text-muted); margin-left: 6px;">(${order.customerName})</span>
        </div>
        <span class="admin-order-badge badge-${order.status}">${order.status.toUpperCase()}</span>
      </div>

      <div class="admin-order-items">
        <div>📍 <strong>Address:</strong> ${order.address}</div>
        <div>🙏 <strong>Sankalp:</strong> ${order.sankalp}</div>
        <div style="margin-top: 4px;">🛒 ${order.items.map(i => `${i.name} (x${i.qty})`).join(', ')}</div>
        <div style="margin-top: 4px; font-weight: 800; color: var(--primary);">💰 Amount: ₹${order.total} (${order.paymentMode})</div>
      </div>

      <div class="admin-order-actions">
        <button class="btn btn-sm btn-outline" onclick="updateOrderStatus('${order.id}', 'preparing')">🪔 Prepare/Bless</button>
        <button class="btn btn-sm btn-outline" onclick="updateOrderStatus('${order.id}', 'dispatched')">🚚 Out for Delivery</button>
        <button class="btn btn-sm btn-primary" onclick="updateOrderStatus('${order.id}', 'delivered')">✅ Mark Delivered</button>
      </div>
    </div>
  `).join('');
}

// Admin Update Order Status
window.updateOrderStatus = function(orderId, newStatus) {
  const order = state.orders.find(o => o.id === orderId);
  if (order) {
    order.status = newStatus;
    saveState();
    renderAdmin();
    renderOrders();
    showToast(`Order #${orderId} marked as ${newStatus.toUpperCase()}`);
  }
};

// Render Admin Inventory Table
function renderAdminInventory() {
  const tbody = document.getElementById('adminInventoryTableBody');
  if (!tbody) return;

  tbody.innerHTML = state.products.map(prod => `
    <tr>
      <td>
        <strong>${prod.name}</strong>
        <div style="color: var(--text-muted); font-size: 10px;">ID: ${prod.id}</div>
      </td>
      <td>${prod.category}</td>
      <td>
        <input type="number" class="stock-input" value="${prod.price}" onchange="updateProductPrice('${prod.id}', this.value)" title="Click to edit price">
      </td>
      <td>
        <input type="number" class="stock-input" value="${prod.stock}" onchange="updateProductStock('${prod.id}', this.value)" title="Click to edit stock">
      </td>
      <td>
        ${prod.stock > 0 
          ? `<span class="text-green" style="font-weight: 800;">IN STOCK</span>` 
          : `<span style="color: #dc2626; font-weight: 800;">OUT OF STOCK</span>`}
      </td>
      <td>
        <button class="btn btn-sm btn-outline" onclick="editProductModal('${prod.id}')">✏️</button>
        <button class="btn btn-sm btn-outline" style="color: #dc2626; border-color: #fca5a5;" onclick="deleteProduct('${prod.id}')">🗑️</button>
      </td>
    </tr>
  `).join('');
}

// Admin Quick Updates
window.updateProductStock = function(prodId, newStock) {
  const prod = state.products.find(p => p.id === prodId);
  if (prod) {
    prod.stock = Math.max(0, parseInt(newStock) || 0);
    saveState();
    renderProducts();
    renderAdmin();
    showToast(`Stock updated for ${prod.name}`);
  }
};

window.updateProductPrice = function(prodId, newPrice) {
  const prod = state.products.find(p => p.id === prodId);
  if (prod) {
    prod.price = Math.max(1, parseFloat(newPrice) || 1);
    saveState();
    renderProducts();
    renderAdmin();
    showToast(`Price updated for ${prod.name}`);
  }
};

window.deleteProduct = function(prodId) {
  if (confirm('Are you sure you want to remove this item from the store?')) {
    state.products = state.products.filter(p => p.id !== prodId);
    saveState();
    renderProducts();
    renderAdmin();
    showToast('Product deleted from inventory');
  }
};

window.editProductModal = function(prodId) {
  const prod = state.products.find(p => p.id === prodId);
  if (!prod) return;

  document.getElementById('editProductId').value = prod.id;
  document.getElementById('editProductName').value = prod.name;
  document.getElementById('editProductCategory').value = prod.category;
  document.getElementById('editProductPrice').value = prod.price;
  document.getElementById('editProductMrp').value = prod.mrp || (prod.price + 50);
  document.getElementById('editProductStock').value = prod.stock;
  document.getElementById('editProductBadge').value = prod.badge || '';
  document.getElementById('editProductIcon').value = prod.icon || '🪔';
  document.getElementById('productModalTitle').textContent = 'Edit Product Details';

  document.getElementById('productEditModalBackdrop').classList.remove('hidden');
};

// Toast notification helper
function showToast(message) {
  const toast = document.getElementById('toast');
  if (!toast) return;
  toast.textContent = message;
  toast.classList.remove('hidden');
  clearTimeout(window.toastTimer);
  window.toastTimer = setTimeout(() => {
    toast.classList.add('hidden');
  }, 2400);
}

// Launch on DOM ready
document.addEventListener('DOMContentLoaded', initApp);
