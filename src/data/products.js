export const CATEGORIES = [
  { id: 'all', name: 'All Products', icon: 'grid' },
  { id: 'smartphones', name: 'Smartphones', icon: 'phone' },
  { id: 'samsung', name: 'Samsung Galaxy', icon: 'samsung' },
  { id: 'iphone', name: 'Apple iPhone', icon: 'apple' },
  { id: 'audio', name: 'AirPods & Audio', icon: 'headphones' },
  { id: 'wearables', name: 'Smartwatches', icon: 'watch' },
  { id: 'accessories', name: 'Accessories', icon: 'cable' }
];

export const PRODUCTS = [
  // --- SAMSUNG PHONES (8 Models) ---
  {
    id: 'samsung-galaxy-s24-ultra',
    name: 'Samsung Galaxy S24 Ultra 5G',
    brand: 'Samsung',
    category: 'smartphones',
    subCategory: 'samsung',
    tagline: 'Galaxy AI is here. Epic in every detail.',
    price: 1299,
    originalPrice: 1419,
    rating: 4.9,
    reviewsCount: 384,
    inStock: true,
    badge: 'AI Flagship',
    badgeColor: 'bg-amber-500',
    images: [
      'https://images.unsplash.com/photo-1610945265064-0e34e5519bbf?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1580910051074-3eb694886505?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1598327105666-5b89351aff97?auto=format&fit=crop&w=1000&q=80'
    ],
    colors: [
      { name: 'Titanium Gray', hex: '#636569' },
      { name: 'Titanium Black', hex: '#232323' },
      { name: 'Titanium Violet', hex: '#483c5c' },
      { name: 'Titanium Yellow', hex: '#ebd28b' }
    ],
    storageOptions: [
      { size: '256GB', priceDelta: 0 },
      { size: '512GB', priceDelta: 120 },
      { size: '1TB', priceDelta: 360 }
    ],
    highlights: [
      'Galaxy AI: Live Translate, Circle to Search, Note Assist & Photo Assist',
      'Durable Titanium Frame with Corning Gorilla Armor anti-reflective glass',
      'Built-in S Pen for precision writing, drawing, and remote navigation',
      '200MP Main Camera with 100x Space Zoom and Quad Telephoto system'
    ],
    specs: {
      'Display': '6.8" Dynamic AMOLED 2X, QHD+, 120Hz Adaptive, 2600 nits peak',
      'Processor': 'Snapdragon 8 Gen 3 for Galaxy (4nm)',
      'Rear Cameras': '200MP Wide + 50MP Periscope (5x) + 10MP Telephoto (3x) + 12MP Ultra-wide',
      'Battery & Charging': '5,000 mAh, 45W wired, 15W wireless',
      'Operating System': 'One UI 6.1 (Android 14) with 7 years OS updates'
    },
    inTheBox: ['Samsung Galaxy S24 Ultra', 'Embedded S Pen', 'USB-C Cable', 'SIM Pin', 'Guide'],
    description: 'Meet the Galaxy S24 Ultra, the ultimate form of Galaxy Ultra with a new titanium exterior and a 6.8-inch flat display. Powered by Galaxy AI.',
    reviews: [
      { id: 1, author: 'Alex M.', rating: 5, date: '2 weeks ago', title: 'The AI features actually changed my workflow', comment: 'Circle to Search and 200MP camera are out of this world.' }
    ]
  },
  {
    id: 'samsung-galaxy-s24-plus',
    name: 'Samsung Galaxy S24+',
    brand: 'Samsung',
    category: 'smartphones',
    subCategory: 'samsung',
    tagline: 'Bigger screen, enhanced battery, AI smarts in full force.',
    price: 999,
    originalPrice: 1099,
    rating: 4.8,
    reviewsCount: 220,
    inStock: true,
    badge: 'Great Value',
    badgeColor: 'bg-emerald-600',
    images: [
      'https://images.unsplash.com/photo-1580910051074-3eb694886505?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1610945265064-0e34e5519bbf?auto=format&fit=crop&w=1000&q=80'
    ],
    colors: [
      { name: 'Cobalt Violet', hex: '#403855' },
      { name: 'Amber Yellow', hex: '#d8c47b' },
      { name: 'Onyx Black', hex: '#262626' }
    ],
    storageOptions: [
      { size: '256GB', priceDelta: 0 },
      { size: '512GB', priceDelta: 120 }
    ],
    highlights: [
      'QHD+ 6.7" Dynamic AMOLED 2X display with 2600 nits peak',
      '4,900 mAh battery with 45W fast charging',
      'Galaxy AI Live Translate and Generative Edit',
      'Triple pro camera with 50MP main sensor'
    ],
    specs: {
      'Display': '6.7" QHD+ Dynamic AMOLED 2X, 1-120Hz',
      'Processor': 'Snapdragon 8 Gen 3 for Galaxy',
      'Cameras': '50MP Main OIS + 10MP Telephoto 3x + 12MP Ultra-wide',
      'Battery': '4,900 mAh, 45W wired'
    },
    inTheBox: ['Samsung Galaxy S24+', 'USB-C Cable', 'SIM tool', 'Guide'],
    description: 'Experience Galaxy S24+ with its upgraded Quad HD+ screen, long-lasting battery, and Galaxy AI features.',
    reviews: [
      { id: 1, author: 'Kevin H.', rating: 5, date: '2 weeks ago', title: 'Perfect size between base and ultra', comment: 'Battery easily outlasts a full heavy day.' }
    ]
  },
  {
    id: 'samsung-galaxy-s24',
    name: 'Samsung Galaxy S24 5G',
    brand: 'Samsung',
    category: 'smartphones',
    subCategory: 'samsung',
    tagline: 'Compact power. Galaxy AI in the palm of your hand.',
    price: 799,
    originalPrice: 859,
    rating: 4.8,
    reviewsCount: 165,
    inStock: true,
    badge: 'Compact Flagship',
    badgeColor: 'bg-blue-600',
    images: [
      'https://images.unsplash.com/photo-1598327105666-5b89351aff97?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1610945265064-0e34e5519bbf?auto=format&fit=crop&w=1000&q=80'
    ],
    colors: [
      { name: 'Onyx Black', hex: '#262626' },
      { name: 'Marble Gray', hex: '#b0b2b4' },
      { name: 'Cobalt Violet', hex: '#403855' }
    ],
    storageOptions: [
      { size: '128GB', priceDelta: 0 },
      { size: '256GB', priceDelta: 60 }
    ],
    highlights: [
      '6.2" Dynamic AMOLED 2X display with 1-120Hz adaptive refresh',
      '4,000 mAh battery with intelligent AI power saving',
      'Full suite of Galaxy AI features in a pocket-friendly size',
      'Armor Aluminum frame with IP68 water resistance'
    ],
    specs: {
      'Display': '6.2" FHD+ Dynamic AMOLED 2X, 120Hz',
      'Processor': 'Snapdragon 8 Gen 3 for Galaxy',
      'Cameras': '50MP OIS + 10MP 3x + 12MP Ultra-wide',
      'Battery': '4,000 mAh, 25W wired'
    },
    inTheBox: ['Samsung Galaxy S24', 'USB-C Cable', 'SIM tool'],
    description: 'A pocket-sized powerhouse. Enjoy high-performance computing, bright 2600-nit display, and Galaxy AI in an easy-to-hold 6.2-inch form factor.',
    reviews: [
      { id: 1, author: 'Sean P.', rating: 5, date: '1 month ago', title: 'Best compact phone hands down', comment: 'So easy to hold with one hand yet lightning fast.' }
    ]
  },
  {
    id: 'samsung-galaxy-z-fold-6',
    name: 'Samsung Galaxy Z Fold 6',
    brand: 'Samsung',
    category: 'smartphones',
    subCategory: 'samsung',
    tagline: 'Slimmer, lighter, and packed with Galaxy AI folding power.',
    price: 1899,
    originalPrice: 1999,
    rating: 4.8,
    reviewsCount: 195,
    inStock: true,
    badge: 'Foldable Pro',
    badgeColor: 'bg-purple-600',
    images: [
      'https://images.unsplash.com/photo-1598327105666-5b89351aff97?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1610945265064-0e34e5519bbf?auto=format&fit=crop&w=1000&q=80'
    ],
    colors: [
      { name: 'Silver Shadow', hex: '#a6a7a9' },
      { name: 'Navy', hex: '#1c2d42' },
      { name: 'Pink', hex: '#d9a8a8' }
    ],
    storageOptions: [
      { size: '256GB', priceDelta: 0 },
      { size: '512GB', priceDelta: 120 },
      { size: '1TB', priceDelta: 360 }
    ],
    highlights: [
      'Dual Dynamic AMOLED 2X: 6.3" Cover screen & 7.6" Main folding tablet screen',
      'Dual-rail hinge design, weighing only 239g',
      'Galaxy AI Dual-screen Interpreter mode for live translated face-to-face chats',
      'Pro-grade triple camera with 50MP wide lens and AI zoom'
    ],
    specs: {
      'Main Display': '7.6" QXGA+ Dynamic AMOLED 2X, 120Hz, 2600 nits',
      'Cover Display': '6.3" HD+ Dynamic AMOLED 2X, 120Hz',
      'Processor': 'Snapdragon 8 Gen 3 for Galaxy (4nm)',
      'Battery': '4,400 mAh dual battery, 25W fast charge'
    },
    inTheBox: ['Samsung Galaxy Z Fold 6', 'USB-C Cable', 'Ejection Pin', 'Guide'],
    description: 'A cinematic tablet in your pocket. The Galaxy Z Fold 6 elevates multitasking with an expansive 7.6-inch folding screen.',
    reviews: [
      { id: 1, author: 'Jonathan P.', rating: 5, date: '3 weeks ago', title: 'The ultimate productivity device', comment: 'Having 3 apps side by side while traveling is priceless.' }
    ]
  },
  {
    id: 'samsung-galaxy-z-flip-6',
    name: 'Samsung Galaxy Z Flip 6',
    brand: 'Samsung',
    category: 'smartphones',
    subCategory: 'samsung',
    tagline: 'Pocket-sized charm. 50MP camera, FlexWindow, Galaxy AI.',
    price: 1099,
    originalPrice: 1199,
    rating: 4.8,
    reviewsCount: 140,
    inStock: true,
    badge: 'Iconic Flip',
    badgeColor: 'bg-rose-500',
    images: [
      'https://images.unsplash.com/photo-1580910051074-3eb694886505?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1598327105666-5b89351aff97?auto=format&fit=crop&w=1000&q=80'
    ],
    colors: [
      { name: 'Mint', hex: '#a8d8c2' },
      { name: 'Silver Shadow', hex: '#a6a7a9' },
      { name: 'Yellow', hex: '#f0df95' },
      { name: 'Blue', hex: '#8cb1d9' }
    ],
    storageOptions: [
      { size: '256GB', priceDelta: 0 },
      { size: '512GB', priceDelta: 120 }
    ],
    highlights: [
      '3.4" Super AMOLED FlexWindow cover display with interactive widgets',
      'Upgraded 50MP Wide camera with AI ProVisual engine',
      'Vapor chamber cooling system for sustained gaming performance',
      '4,000 mAh long-lasting battery with 25W charging'
    ],
    specs: {
      'Main Screen': '6.7" FHD+ Dynamic AMOLED 2X, 1-120Hz',
      'Cover Screen': '3.4" Super AMOLED, 60Hz',
      'Processor': 'Snapdragon 8 Gen 3 for Galaxy',
      'Battery': '4,000 mAh dual battery'
    },
    inTheBox: ['Galaxy Z Flip 6', 'USB-C Cable', 'SIM tool', 'Guide'],
    description: 'Compact, self-standing, and eye-catching. Capture hands-free selfies with FlexCam and personalize your 3.4-inch FlexWindow with animated interactive wallpapers.',
    reviews: [
      { id: 1, author: 'Clara S.', rating: 5, date: '1 week ago', title: 'Cutest phone ever and camera is so good', comment: 'Takes the best selfies on trip without needing a tripod!' }
    ]
  },
  {
    id: 'samsung-galaxy-s24-fe',
    name: 'Samsung Galaxy S24 FE 5G',
    brand: 'Samsung',
    category: 'smartphones',
    subCategory: 'samsung',
    tagline: 'Fan Edition. Premium flagship features at a friendly price.',
    price: 649,
    originalPrice: 699,
    rating: 4.7,
    reviewsCount: 98,
    inStock: true,
    badge: 'Fan Edition',
    badgeColor: 'bg-cyan-600',
    images: [
      'https://images.unsplash.com/photo-1610945265064-0e34e5519bbf?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1580910051074-3eb694886505?auto=format&fit=crop&w=1000&q=80'
    ],
    colors: [
      { name: 'Blue', hex: '#8ca6c8' },
      { name: 'Graphite', hex: '#333333' },
      { name: 'Mint', hex: '#b3d8c4' }
    ],
    storageOptions: [
      { size: '128GB', priceDelta: 0 },
      { size: '256GB', priceDelta: 60 }
    ],
    highlights: [
      '6.7" Dynamic AMOLED 2X display with 120Hz smooth scrolling',
      'Exynos 2400e (4nm) flagship-tier deca-core processor',
      'Full Galaxy AI assistance for photos, notes, and searches',
      '4,700 mAh battery with fast wireless and wired charging'
    ],
    specs: {
      'Display': '6.7" FHD+ Dynamic AMOLED 2X, 120Hz, 1900 nits',
      'Processor': 'Exynos 2400e (4nm)',
      'Cameras': '50MP Main OIS + 8MP 3x Telephoto + 12MP Ultra-wide',
      'Battery': '4,700 mAh, 25W wired'
    },
    inTheBox: ['Samsung Galaxy S24 FE', 'USB-C Cable', 'SIM tool', 'Guide'],
    description: 'The Galaxy S24 FE brings the essential flagship features fans love — vivid big screen, pro-grade camera, and Galaxy AI at an accessible price point.',
    reviews: [
      { id: 1, author: 'Ryan B.', rating: 5, date: '3 days ago', title: 'Amazing value for flagship specs', comment: 'Screen is big and gorgeous, cameras take brilliant photos.' }
    ]
  },
  {
    id: 'samsung-galaxy-s23-ultra',
    name: 'Samsung Galaxy S23 Ultra',
    brand: 'Samsung',
    category: 'smartphones',
    subCategory: 'samsung',
    tagline: 'Legendary 200MP sensor, built-in S Pen, proven flagship value.',
    price: 899,
    originalPrice: 1199,
    rating: 4.9,
    reviewsCount: 650,
    inStock: true,
    badge: 'Value Flagship',
    badgeColor: 'bg-emerald-600',
    images: [
      'https://images.unsplash.com/photo-1610945265064-0e34e5519bbf?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1598327105666-5b89351aff97?auto=format&fit=crop&w=1000&q=80'
    ],
    colors: [
      { name: 'Phantom Black', hex: '#1c1c1c' },
      { name: 'Green', hex: '#37473a' },
      { name: 'Cream', hex: '#ede6d6' }
    ],
    storageOptions: [
      { size: '256GB', priceDelta: 0 },
      { size: '512GB', priceDelta: 100 }
    ],
    highlights: [
      'Groundbreaking 200MP Wide camera with Nightography mode',
      'Built-in S Pen for effortless notes and sketching',
      'Snapdragon 8 Gen 2 for Galaxy overclocked processor',
      '5,000 mAh battery with 45W fast charge'
    ],
    specs: {
      'Display': '6.8" Edge QHD+ Dynamic AMOLED 2X, 120Hz',
      'Processor': 'Snapdragon 8 Gen 2 for Galaxy (4nm)',
      'Cameras': '200MP + 10MP 10x + 10MP 3x + 12MP Ultra-wide',
      'Battery': '5,000 mAh'
    },
    inTheBox: ['Samsung Galaxy S23 Ultra', 'S Pen', 'USB-C Cable', 'SIM tool'],
    description: 'A proven master of mobile photography. With optical 10x zoom and 200MP resolution, the S23 Ultra remains one of the best value flagships on earth.',
    reviews: [
      { id: 1, author: 'Andrew G.', rating: 5, date: '1 month ago', title: '10x zoom camera is irreplaceable', comment: 'Takes concert photos that no other phone can match.' }
    ]
  },
  {
    id: 'samsung-galaxy-a55-5g',
    name: 'Samsung Galaxy A55 5G',
    brand: 'Samsung',
    category: 'smartphones',
    subCategory: 'samsung',
    tagline: 'Premium metal frame, Gorilla Glass Victus+, 50MP OIS camera.',
    price: 399,
    originalPrice: 449,
    rating: 4.7,
    reviewsCount: 310,
    inStock: true,
    badge: 'Budget King',
    badgeColor: 'bg-teal-600',
    images: [
      'https://images.unsplash.com/photo-1580910051074-3eb694886505?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1610945265064-0e34e5519bbf?auto=format&fit=crop&w=1000&q=80'
    ],
    colors: [
      { name: 'Awesome Iceblue', hex: '#c5d8e8' },
      { name: 'Awesome Navy', hex: '#1d2a3a' },
      { name: 'Awesome Lemon', hex: '#f0e9b2' }
    ],
    storageOptions: [
      { size: '128GB', priceDelta: 0 },
      { size: '256GB', priceDelta: 40 }
    ],
    highlights: [
      'Solid aluminum metal frame and glass back design',
      '6.6" FHD+ Super AMOLED display with 120Hz and Vision Booster',
      '50MP OIS camera with big pixel sensor for crisp low-light photos',
      '5,000 mAh battery with up to 2-day battery life'
    ],
    specs: {
      'Display': '6.6" FHD+ Super AMOLED, 120Hz, 1000 nits',
      'Processor': 'Exynos 1480 (4nm) with AMD Xclipse 530 GPU',
      'Cameras': '50MP OIS + 12MP Ultra-wide + 5MP Macro',
      'Battery': '5,000 mAh, IP67 dust/water resistant'
    },
    inTheBox: ['Samsung Galaxy A55 5G', 'USB-C Cable', 'SIM tool', 'Guide'],
    description: 'The undisputed mid-range champ. Premium metal chassis, flagship-grade glass, and 4 years of guaranteed OS updates.',
    reviews: [
      { id: 1, author: 'Chhay V.', rating: 5, date: '2 weeks ago', title: 'Feels like an S24 for half the price', comment: 'Metal rails feel heavy and premium in hand. Highly recommend!' }
    ]
  },

  // --- APPLE IPHONE MODELS (8 Models) ---
  {
    id: 'apple-iphone-16-pro-max',
    name: 'Apple iPhone 16 Pro Max',
    brand: 'Apple',
    category: 'smartphones',
    subCategory: 'iphone',
    tagline: 'Titanium. Supercharged by the A18 Pro chip and Camera Control.',
    price: 1199,
    originalPrice: 1299,
    rating: 4.9,
    reviewsCount: 512,
    inStock: true,
    badge: 'Latest Flagship',
    badgeColor: 'bg-blue-600',
    images: [
      'https://images.unsplash.com/photo-1695048133142-1a20484d2569?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1510557880182-3d4d3cba35a5?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1592750475338-74b7b21085ab?auto=format&fit=crop&w=1000&q=80'
    ],
    colors: [
      { name: 'Desert Titanium', hex: '#b59e88' },
      { name: 'Natural Titanium', hex: '#8a867f' },
      { name: 'White Titanium', hex: '#eceae6' },
      { name: 'Black Titanium', hex: '#2e2e2e' }
    ],
    storageOptions: [
      { size: '256GB', priceDelta: 0 },
      { size: '512GB', priceDelta: 200 },
      { size: '1TB', priceDelta: 400 }
    ],
    highlights: [
      'A18 Pro chip with 6-core GPU, next-gen Neural Engine for Apple Intelligence',
      'All-new Camera Control button for tactile zoom, aperture, and focus',
      '6.9-inch Super Retina XDR display with thinnest borders ever',
      '48MP Fusion camera with 4K 120 fps Dolby Vision recording'
    ],
    specs: {
      'Display': '6.9" Super Retina XDR OLED, 120Hz ProMotion, Always-On',
      'Processor': 'A18 Pro chip (3nm, 6-core CPU, 6-core GPU)',
      'Rear Cameras': '48MP Fusion + 48MP Ultra Wide + 12MP 5x Telephoto',
      'Battery': 'Up to 33 hours video playback, MagSafe 25W',
      'Operating System': 'iOS 18 with Apple Intelligence'
    },
    inTheBox: ['iPhone 16 Pro Max', 'USB-C Woven Cable (1m)', 'Documentation'],
    description: 'iPhone 16 Pro Max is forged in grade 5 titanium with an expansive 6.9-inch display, tactile Camera Control, and cinematic 4K 120 fps recording.',
    reviews: [
      { id: 1, author: 'David T.', rating: 5, date: '3 days ago', title: 'The Camera Control button is magical', comment: 'Feels like handling a DSLR camera. Screen bezels are virtually invisible.' }
    ]
  },
  {
    id: 'apple-iphone-16-pro',
    name: 'Apple iPhone 16 Pro',
    brand: 'Apple',
    category: 'smartphones',
    subCategory: 'iphone',
    tagline: 'Pro performance in the palm of your hand with 5x Telephoto.',
    price: 999,
    originalPrice: 1099,
    rating: 4.9,
    reviewsCount: 380,
    inStock: true,
    badge: 'Pro Compact',
    badgeColor: 'bg-indigo-600',
    images: [
      'https://images.unsplash.com/photo-1510557880182-3d4d3cba35a5?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1695048133142-1a20484d2569?auto=format&fit=crop&w=1000&q=80'
    ],
    colors: [
      { name: 'Natural Titanium', hex: '#8a867f' },
      { name: 'Desert Titanium', hex: '#b59e88' },
      { name: 'Black Titanium', hex: '#2e2e2e' }
    ],
    storageOptions: [
      { size: '128GB', priceDelta: 0 },
      { size: '256GB', priceDelta: 100 },
      { size: '512GB', priceDelta: 300 }
    ],
    highlights: [
      '6.3" Super Retina XDR display with ProMotion 120Hz',
      'Now features 5x Optical Telephoto camera with tetraprism lens',
      'Dedicated Camera Control button and customizable Action Button',
      'A18 Pro chip delivering studio-grade ray tracing gaming'
    ],
    specs: {
      'Display': '6.3" Super Retina XDR OLED, 120Hz ProMotion',
      'Processor': 'A18 Pro chip (3nm)',
      'Cameras': '48MP Fusion + 48MP Ultra Wide + 12MP 5x Telephoto',
      'Battery': 'Up to 27 hours video playback'
    },
    inTheBox: ['iPhone 16 Pro', 'USB-C Charge Cable (1m)', 'Documentation'],
    description: 'The powerhouse 6.3-inch pro phone. Upgraded with 5x zoom, Camera Control, 48MP ultra-wide sensor, and Apple Intelligence.',
    reviews: [
      { id: 1, author: 'Sreynich K.', rating: 5, date: '1 week ago', title: '5x zoom finally on the smaller Pro!', comment: 'Fits in pocket comfortably and takes breathtaking portrait shots.' }
    ]
  },
  {
    id: 'apple-iphone-16',
    name: 'Apple iPhone 16',
    brand: 'Apple',
    category: 'smartphones',
    subCategory: 'iphone',
    tagline: 'Hello, Apple Intelligence. Vivid colors, blazing A18.',
    price: 799,
    originalPrice: 849,
    rating: 4.8,
    reviewsCount: 260,
    inStock: true,
    badge: 'Popular',
    badgeColor: 'bg-pink-600',
    images: [
      'https://images.unsplash.com/photo-1592750475338-74b7b21085ab?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1510557880182-3d4d3cba35a5?auto=format&fit=crop&w=1000&q=80'
    ],
    colors: [
      { name: 'Ultramarine', hex: '#375492' },
      { name: 'Teal', hex: '#638c8c' },
      { name: 'Pink', hex: '#d97d91' },
      { name: 'White', hex: '#f0f0f0' }
    ],
    storageOptions: [
      { size: '128GB', priceDelta: 0 },
      { size: '256GB', priceDelta: 100 },
      { size: '512GB', priceDelta: 300 }
    ],
    highlights: [
      'All-new A18 chip designed for Apple Intelligence',
      'Tactile Camera Control and Action button now on standard model',
      '48MP 2-in-1 Fusion camera for super-high-resolution photos',
      'Spatial Video capture for playback on Apple Vision Pro'
    ],
    specs: {
      'Display': '6.1" Super Retina XDR OLED, 2000 nits peak',
      'Processor': 'A18 chip (6-core CPU, 5-core GPU)',
      'Rear Cameras': '48MP Fusion + 12MP Ultra Wide with Macro',
      'Battery': 'Up to 22 hours video playback'
    },
    inTheBox: ['iPhone 16', 'USB-C Cable (1m)', 'Documentation'],
    description: 'Meet iPhone 16. Built for Apple Intelligence with Camera Control, 48MP Fusion camera system, Action button, and saturated color-infused back glass.',
    reviews: [
      { id: 1, author: 'Emily R.', rating: 5, date: '5 days ago', title: 'The Ultramarine color is gorgeous!', comment: 'Camera Control and Action button make this standard model feel very pro.' }
    ]
  },
  {
    id: 'apple-iphone-16-plus',
    name: 'Apple iPhone 16 Plus',
    brand: 'Apple',
    category: 'smartphones',
    subCategory: 'iphone',
    tagline: 'Massive 6.7" Super Retina display and unbelievable battery life.',
    price: 899,
    originalPrice: 949,
    rating: 4.8,
    reviewsCount: 180,
    inStock: true,
    badge: 'Battery Champion',
    badgeColor: 'bg-emerald-600',
    images: [
      'https://images.unsplash.com/photo-1510557880182-3d4d3cba35a5?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1592750475338-74b7b21085ab?auto=format&fit=crop&w=1000&q=80'
    ],
    colors: [
      { name: 'Teal', hex: '#638c8c' },
      { name: 'Ultramarine', hex: '#375492' },
      { name: 'Black', hex: '#222222' }
    ],
    storageOptions: [
      { size: '128GB', priceDelta: 0 },
      { size: '256GB', priceDelta: 100 }
    ],
    highlights: [
      'Extra-large 6.7" Super Retina XDR OLED screen',
      'Exceptional battery life up to 27 hours video playback',
      'A18 chip with Apple Intelligence',
      'Camera Control button and 48MP 2-in-1 Fusion camera'
    ],
    specs: {
      'Display': '6.7" Super Retina XDR OLED, 2796 x 1290',
      'Processor': 'A18 chip (3nm)',
      'Cameras': '48MP Fusion + 12MP Ultra-wide',
      'Battery': 'Up to 27 hours video'
    },
    inTheBox: ['iPhone 16 Plus', 'USB-C Cable', 'Documentation'],
    description: 'Get the big screen experience and marathon battery life of a Pro Max without the hefty price tag. Includes Camera Control and the Action button.',
    reviews: [
      { id: 1, author: 'Brandon C.', rating: 5, date: '2 weeks ago', title: 'Battery lasts two full work days', comment: 'Screen is big and reading articles on it is so pleasant.' }
    ]
  },
  {
    id: 'apple-iphone-15-pro-max',
    name: 'Apple iPhone 15 Pro Max',
    brand: 'Apple',
    category: 'smartphones',
    subCategory: 'iphone',
    tagline: 'Titanium design, A17 Pro gaming chip, 5x optical telephoto.',
    price: 999,
    originalPrice: 1199,
    rating: 4.9,
    reviewsCount: 780,
    inStock: true,
    badge: 'Hot Deal',
    badgeColor: 'bg-rose-600',
    images: [
      'https://images.unsplash.com/photo-1695048133142-1a20484d2569?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1592750475338-74b7b21085ab?auto=format&fit=crop&w=1000&q=80'
    ],
    colors: [
      { name: 'Blue Titanium', hex: '#374251' },
      { name: 'Natural Titanium', hex: '#8a867f' },
      { name: 'Black Titanium', hex: '#2e2e2e' }
    ],
    storageOptions: [
      { size: '256GB', priceDelta: 0 },
      { size: '512GB', priceDelta: 150 }
    ],
    highlights: [
      'Aerospace-grade titanium frame with textured matte-glass back',
      'A17 Pro chip capable of running console games like Resident Evil',
      '48MP Main camera with 5x optical zoom tetraprism system',
      'USB-C port with USB 3 speeds up to 10Gb/s'
    ],
    specs: {
      'Display': '6.7" Super Retina XDR OLED, 120Hz ProMotion',
      'Processor': 'A17 Pro (3nm)',
      'Cameras': '48MP + 12MP 5x + 12MP Ultra-wide',
      'Battery': 'Up to 29 hours video playback'
    },
    inTheBox: ['iPhone 15 Pro Max', 'USB-C Cable', 'Documentation'],
    description: 'Forged in titanium with the breakthrough A17 Pro chip and customizable Action button. Now at a discounted promotional price.',
    reviews: [
      { id: 1, author: 'Kosal M.', rating: 5, date: '1 month ago', title: 'Great discounted flagship', comment: 'Runs Apple Intelligence smoothly in iOS 18. Titanium feels super light.' }
    ]
  },
  {
    id: 'apple-iphone-15-pro',
    name: 'Apple iPhone 15 Pro',
    brand: 'Apple',
    category: 'smartphones',
    subCategory: 'iphone',
    tagline: 'Titanium, Action button, A17 Pro, Apple Intelligence ready.',
    price: 849,
    originalPrice: 999,
    rating: 4.8,
    reviewsCount: 420,
    inStock: true,
    badge: 'Sale',
    badgeColor: 'bg-emerald-600',
    images: [
      'https://images.unsplash.com/photo-1510557880182-3d4d3cba35a5?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1695048133142-1a20484d2569?auto=format&fit=crop&w=1000&q=80'
    ],
    colors: [
      { name: 'Natural Titanium', hex: '#8a867f' },
      { name: 'White Titanium', hex: '#eceae6' },
      { name: 'Black Titanium', hex: '#2e2e2e' }
    ],
    storageOptions: [
      { size: '128GB', priceDelta: 0 },
      { size: '256GB', priceDelta: 100 }
    ],
    highlights: [
      'Lightweight titanium chassis with contoured edges',
      'A17 Pro chip with hardware-accelerated ray tracing',
      'Customizable tactile Action button',
      'Universal USB-C connector with fast 10Gb/s transfer'
    ],
    specs: {
      'Display': '6.1" Super Retina XDR OLED, 120Hz ProMotion',
      'Processor': 'A17 Pro chip',
      'Cameras': '48MP + 12MP 3x + 12MP Ultra-wide',
      'Battery': 'Up to 23 hours video'
    },
    inTheBox: ['iPhone 15 Pro', 'USB-C Cable', 'Documentation'],
    description: 'Experience titanium build and ProMotion 120Hz screen at an incredible price point with full support for Apple Intelligence.',
    reviews: [
      { id: 1, author: 'Marcus E.', rating: 5, date: '3 weeks ago', title: 'Incredible speed', comment: 'ProMotion 120Hz is so smooth once you use it you cannot go back.' }
    ]
  },
  {
    id: 'apple-iphone-15',
    name: 'Apple iPhone 15',
    brand: 'Apple',
    category: 'smartphones',
    subCategory: 'iphone',
    tagline: 'Dynamic Island, 48MP main camera, USB-C, durable design.',
    price: 699,
    originalPrice: 799,
    rating: 4.8,
    reviewsCount: 520,
    inStock: true,
    badge: 'Best Deal',
    badgeColor: 'bg-blue-600',
    images: [
      'https://images.unsplash.com/photo-1592750475338-74b7b21085ab?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1510557880182-3d4d3cba35a5?auto=format&fit=crop&w=1000&q=80'
    ],
    colors: [
      { name: 'Pink', hex: '#ebd0d4' },
      { name: 'Blue', hex: '#d2dde6' },
      { name: 'Black', hex: '#292929' },
      { name: 'Green', hex: '#d2ded2' }
    ],
    storageOptions: [
      { size: '128GB', priceDelta: 0 },
      { size: '256GB', priceDelta: 100 }
    ],
    highlights: [
      'Dynamic Island bubbles up alerts and Live Activities',
      '48MP Main camera with 2x optical-quality Telephoto',
      'Color-infused back glass with Ceramic Shield front',
      'USB-C universal charging'
    ],
    specs: {
      'Display': '6.1" Super Retina XDR OLED, 2000 nits peak',
      'Processor': 'A16 Bionic chip',
      'Cameras': '48MP Main + 12MP Ultra-wide',
      'Battery': 'Up to 20 hours video'
    },
    inTheBox: ['iPhone 15', 'USB-C Cable', 'Documentation'],
    description: 'Dynamic Island, 48MP Main camera, and USB-C — all in a durable color-infused glass and aluminum design.',
    reviews: [
      { id: 1, author: 'Lyda S.', rating: 5, date: '2 weeks ago', title: 'USB-C and Dynamic Island are awesome', comment: 'Charges with my Macbook cable. Very happy with it.' }
    ]
  },
  {
    id: 'apple-iphone-14',
    name: 'Apple iPhone 14',
    brand: 'Apple',
    category: 'smartphones',
    subCategory: 'iphone',
    tagline: 'All-day battery life, Ceramic Shield, Photonic Engine.',
    price: 599,
    originalPrice: 699,
    rating: 4.7,
    reviewsCount: 390,
    inStock: true,
    badge: 'Under $600',
    badgeColor: 'bg-slate-700',
    images: [
      'https://images.unsplash.com/photo-1510557880182-3d4d3cba35a5?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1592750475338-74b7b21085ab?auto=format&fit=crop&w=1000&q=80'
    ],
    colors: [
      { name: 'Midnight', hex: '#1c2024' },
      { name: 'Starlight', hex: '#f0ece1' },
      { name: 'Blue', hex: '#a2b9cc' }
    ],
    storageOptions: [
      { size: '128GB', priceDelta: 0 },
      { size: '256GB', priceDelta: 100 }
    ],
    highlights: [
      '6.1" Super Retina XDR display',
      'A15 Bionic chip with 5-core GPU',
      'Photonic Engine for incredible low-light photos',
      'Crash Detection safety feature'
    ],
    specs: {
      'Display': '6.1" Super Retina XDR OLED',
      'Processor': 'A15 Bionic',
      'Cameras': '12MP Main + 12MP Ultra-wide',
      'Battery': 'Up to 20 hours video'
    },
    inTheBox: ['iPhone 14', 'USB-C to Lightning Cable', 'Documentation'],
    description: 'Reliable, powerful, and durable. The iPhone 14 offers incredible camera performance and all-day battery life at a budget-friendly price.',
    reviews: [
      { id: 1, author: 'Chhay R.', rating: 5, date: '1 month ago', title: 'Still runs blazing fast', comment: 'Handles every game and app effortlessly. Super reliable.' }
    ]
  },

  // --- AIRPODS & AUDIO (6 Models) ---
  {
    id: 'apple-airpods-pro-2',
    name: 'Apple AirPods Pro 2 (USB-C)',
    brand: 'Apple',
    category: 'audio',
    subCategory: 'airpods',
    tagline: 'Up to 2x more Active Noise Cancellation. Hearing Health features.',
    price: 249,
    originalPrice: 279,
    rating: 4.9,
    reviewsCount: 890,
    inStock: true,
    badge: 'Best Seller',
    badgeColor: 'bg-emerald-600',
    images: [
      'https://images.unsplash.com/photo-1600294037681-c80b4cb5b434?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1588423771073-b8903fbb85b5?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=1000&q=80'
    ],
    colors: [
      { name: 'Glossy White', hex: '#fdfdfd' }
    ],
    storageOptions: [
      { size: 'MagSafe Case (USB-C)', priceDelta: 0 }
    ],
    highlights: [
      'H2 chip delivers smarter noise cancellation and 3D sound',
      'Adaptive Audio blends Active Noise Cancellation and Transparency',
      'Clinically validated Hearing Test and Hearing Aid capabilities',
      'Up to 6 hours listening with ANC, 30 hours total with case'
    ],
    specs: {
      'Audio Tech': 'Custom high-excursion driver, Adaptive Audio, ANC, Conversation Awareness',
      'Chip': 'Apple H2 chip in earbuds, Apple U1 in MagSafe Case',
      'Battery': 'Up to 6 hours per charge / 30 hours with case',
      'Charging': 'USB-C, MagSafe, Apple Watch charger, Qi wireless',
      'Rating': 'IP54 dust, sweat, and water resistant'
    },
    inTheBox: ['AirPods Pro 2', 'MagSafe Case (USB-C)', 'Silicone tips (XS, S, M, L)', 'USB-C Cable'],
    description: 'AirPods Pro 2 feature up to 2x more Active Noise Cancellation, Adaptive Audio, Transparency mode, and Personalized Spatial Audio with dynamic head tracking.',
    reviews: [
      { id: 1, author: 'Brian C.', rating: 5, date: '1 week ago', title: 'Noise cancellation is magic', comment: 'Jet engine rumble disappears immediately on airplane flights.' }
    ]
  },
  {
    id: 'apple-airpods-max',
    name: 'Apple AirPods Max (USB-C)',
    brand: 'Apple',
    category: 'audio',
    subCategory: 'airpods',
    tagline: 'High-fidelity audio. Active Noise Cancellation with Transparency.',
    price: 549,
    originalPrice: 579,
    rating: 4.8,
    reviewsCount: 310,
    inStock: true,
    badge: 'Audiophile',
    badgeColor: 'bg-indigo-600',
    images: [
      'https://images.unsplash.com/photo-1546435770-a3e426bf472b?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=1000&q=80'
    ],
    colors: [
      { name: 'Midnight', hex: '#1d212a' },
      { name: 'Starlight', hex: '#f0ece1' },
      { name: 'Blue', hex: '#637a93' },
      { name: 'Orange', hex: '#d4694f' }
    ],
    storageOptions: [
      { size: 'Over-Ear (USB-C)', priceDelta: 0 }
    ],
    highlights: [
      'Apple-designed 40mm dynamic driver for high-fidelity sound',
      'Pro-level Active Noise Cancellation eliminates outside noise',
      'Personalized Spatial Audio with dynamic head tracking',
      'Knit-mesh canopy and memory foam ear cushions for sublime comfort'
    ],
    specs: {
      'Driver': '40mm custom dynamic driver, dual neodymium ring magnet',
      'Chip': 'Apple H1 headphone chip in each ear cup',
      'Battery': 'Up to 20 hours with ANC enabled',
      'Weight': '384.8g'
    },
    inTheBox: ['AirPods Max', 'Smart Case', 'USB-C Cable', 'Documentation'],
    description: 'AirPods Max completely reimagine over-ear headphones with an acoustic seal and computational audio that delivers concert-hall clarity.',
    reviews: [
      { id: 1, author: 'Lucas K.', rating: 5, date: '2 weeks ago', title: 'The soundstage is unmatched', comment: 'Aluminum earcups and mesh canopy feel luxurious and comfortable.' }
    ]
  },
  {
    id: 'apple-airpods-4-anc',
    name: 'Apple AirPods 4 with Active Noise Cancellation',
    brand: 'Apple',
    category: 'audio',
    subCategory: 'airpods',
    tagline: 'Open-ear fit with Active Noise Cancellation and Adaptive Audio.',
    price: 179,
    originalPrice: 199,
    rating: 4.8,
    reviewsCount: 220,
    inStock: true,
    badge: 'New Release',
    badgeColor: 'bg-blue-600',
    images: [
      'https://images.unsplash.com/photo-1588423771073-b8903fbb85b5?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1600294037681-c80b4cb5b434?auto=format&fit=crop&w=1000&q=80'
    ],
    colors: [
      { name: 'Glossy White', hex: '#ffffff' }
    ],
    storageOptions: [
      { size: 'Wireless Case with Speaker', priceDelta: 0 }
    ],
    highlights: [
      'First open-ear AirPods with Active Noise Cancellation',
      'Powered by H2 chip with Voice Isolation and Siri interactions',
      'Up to 30 hours total battery life with case',
      'Smallest wireless charging case Apple has ever made'
    ],
    specs: {
      'Chip': 'Apple H2 chip',
      'Features': 'Active Noise Cancellation, Adaptive Audio, Transparency',
      'Battery': 'Up to 4h with ANC (up to 20h with case)',
      'Water Resistance': 'IP54 rated'
    },
    inTheBox: ['AirPods 4 with ANC', 'Wireless Charging Case', 'Documentation'],
    description: 'Transformative audio experience. AirPods 4 brings Active Noise Cancellation to an open-ear design for unprecedented all-day wearing comfort.',
    reviews: [
      { id: 1, author: 'Dave N.', rating: 5, date: '4 days ago', title: 'ANC without silicone tips is fantastic', comment: 'So comfortable to wear for hours during office zoom calls.' }
    ]
  },
  {
    id: 'apple-airpods-4',
    name: 'Apple AirPods 4',
    brand: 'Apple',
    category: 'audio',
    subCategory: 'airpods',
    tagline: 'Redesigned acoustic architecture, H2 chip, USB-C case.',
    price: 129,
    originalPrice: 139,
    rating: 4.7,
    reviewsCount: 140,
    inStock: true,
    badge: 'Value Sound',
    badgeColor: 'bg-teal-600',
    images: [
      'https://images.unsplash.com/photo-1600294037681-c80b4cb5b434?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1588423771073-b8903fbb85b5?auto=format&fit=crop&w=1000&q=80'
    ],
    colors: [
      { name: 'White', hex: '#ffffff' }
    ],
    storageOptions: [
      { size: 'USB-C Charging Case', priceDelta: 0 }
    ],
    highlights: [
      'Refined geometric shape for secure, natural in-ear comfort',
      'Powered by Apple H2 chip with Voice Isolation',
      'Personalized Spatial Audio with dynamic head tracking',
      'Up to 30 hours of total listening time'
    ],
    specs: {
      'Chip': 'Apple H2 chip',
      'Battery': 'Up to 5h listening (up to 30h total with case)',
      'Charging': 'USB-C wired',
      'Rating': 'IP54 dust, sweat, and water resistant'
    },
    inTheBox: ['AirPods 4', 'USB-C Charging Case', 'Documentation'],
    description: 'The iconic wireless earbuds, completely redesigned with upgraded acoustic drivers, crystal-clear call quality, and USB-C.',
    reviews: [
      { id: 1, author: 'Nary T.', rating: 5, date: '1 week ago', title: 'Great everyday earphones', comment: 'Connects instantly with iPhone and Mac.' }
    ]
  },
  {
    id: 'samsung-galaxy-buds-3-pro',
    name: 'Samsung Galaxy Buds3 Pro',
    brand: 'Samsung',
    category: 'audio',
    subCategory: 'samsung',
    tagline: 'Blade lights design, 24-bit Hi-Fi sound, Galaxy AI noise control.',
    price: 229,
    originalPrice: 249,
    rating: 4.7,
    reviewsCount: 142,
    inStock: true,
    badge: 'AI Audio',
    badgeColor: 'bg-cyan-600',
    images: [
      'https://images.unsplash.com/photo-1590658268037-6bf12165a8df?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1600294037681-c80b4cb5b434?auto=format&fit=crop&w=1000&q=80'
    ],
    colors: [
      { name: 'Silver Blade', hex: '#9ea3a8' },
      { name: 'Crisp White', hex: '#f7f7f7' }
    ],
    storageOptions: [
      { size: 'Wireless Case with Clear Lid', priceDelta: 0 }
    ],
    highlights: [
      'Blade design with interactive LED Blade Light accents',
      'Enhanced 2-way speaker with planar tweeter and dual amplifier',
      'Galaxy AI Adaptive Noise Control & real-time Interpreter integration',
      'Up to 30 hours total battery life with wireless case'
    ],
    specs: {
      'Speakers': 'Enhanced 2-Way (10.5mm Dynamic + 6.1mm Planar Tweeter)',
      'Audio Codec': 'Samsung Seamless Codec Ultra High Quality (24bit/96kHz)',
      'Water Resistance': 'IP57 water & sweat resistance',
      'Battery': 'Earbuds up to 6h ANC on / 30h with case'
    },
    inTheBox: ['Galaxy Buds3 Pro', 'Charging Case', 'Ear tips (S, M, L)', 'USB-C Cable'],
    description: 'Re-engineered from the ground up with iconic blade lights, planar tweeters for studio clarity, and AI sound tuning.',
    reviews: [
      { id: 1, author: 'Marcus D.', rating: 5, date: '1 month ago', title: 'Incredible vocal separation', comment: 'The dual amp setup really makes vocal instruments crystal clear.' }
    ]
  },
  {
    id: 'samsung-galaxy-buds-fe',
    name: 'Samsung Galaxy Buds FE',
    brand: 'Samsung',
    category: 'audio',
    subCategory: 'samsung',
    tagline: 'Wingtip secure grip, deep bass, Active Noise Cancellation.',
    price: 99,
    originalPrice: 119,
    rating: 4.8,
    reviewsCount: 260,
    inStock: true,
    badge: 'Best Budget ANC',
    badgeColor: 'bg-indigo-600',
    images: [
      'https://images.unsplash.com/photo-1590658268037-6bf12165a8df?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1600294037681-c80b4cb5b434?auto=format&fit=crop&w=1000&q=80'
    ],
    colors: [
      { name: 'Graphite', hex: '#262626' },
      { name: 'White', hex: '#ffffff' }
    ],
    storageOptions: [
      { size: 'Compact Case', priceDelta: 0 }
    ],
    highlights: [
      'Ergonomic wingtips provide rock-solid grip during workouts',
      'Active Noise Cancellation blocks everyday chatter and traffic',
      'Enriched 1-way dynamic speaker delivering powerful bass punch',
      'Up to 30 hours total battery life'
    ],
    specs: {
      'Driver': '1-Way Custom Dynamic Driver',
      'Noise Control': 'Active Noise Cancellation, Ambient Sound',
      'Battery': 'Up to 8.5h per charge / 30h total',
      'Connectivity': 'Bluetooth 5.2 with Auto Switch'
    },
    inTheBox: ['Galaxy Buds FE', 'Charging Case', 'Wingtips (S/M, M/L)', 'USB-C Cable'],
    description: 'Your everyday audio companion. Features secure wingtips, robust deep bass, and effective active noise cancellation under $100.',
    reviews: [
      { id: 1, author: 'Jason K.', rating: 5, date: '3 weeks ago', title: 'Wingtips never fall out while running', comment: 'Best gym earbuds for the price.' }
    ]
  },

  // --- SMARTWATCHES & WEARABLES (4 Models) ---
  {
    id: 'apple-watch-ultra-2',
    name: 'Apple Watch Ultra 2 (GPS + Cellular)',
    brand: 'Apple',
    category: 'wearables',
    subCategory: 'apple',
    tagline: 'The ultimate sports and adventure smartwatch. 3000 nits brightness.',
    price: 799,
    originalPrice: 849,
    rating: 4.9,
    reviewsCount: 420,
    inStock: true,
    badge: 'Rugged Flagship',
    badgeColor: 'bg-amber-600',
    images: [
      'https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1508685096489-7aacd43bd3b1?auto=format&fit=crop&w=1000&q=80'
    ],
    colors: [
      { name: 'Natural Titanium', hex: '#8e8b82' },
      { name: 'Black Titanium', hex: '#2b2b2b' }
    ],
    storageOptions: [
      { size: '49mm Case with Trail Loop', priceDelta: 0 },
      { size: '49mm Case with Ocean Band', priceDelta: 0 },
      { size: '49mm Case with Titanium Milanese Loop', priceDelta: 100 }
    ],
    highlights: [
      'S9 SiP processor with Double Tap gesture control & on-device Siri',
      'Brilliant 3,000-nit Always-On Retina display for direct harsh sunlight',
      'Precision dual-frequency GPS (L1 and L5) with advanced running metrics',
      'Up to 36 hours normal battery life, 72 hours in Low Power Mode'
    ],
    specs: {
      'Case': '49mm Aerospace-grade Titanium with flat sapphire crystal',
      'Display': '3,000 nits Always-On Retina LTPO OLED',
      'Sensors': 'Depth gauge, Water temp, Blood Oxygen, ECG, Temperature',
      'Emergency': '86-decibel Siren audible up to 600 feet, Crash Detection',
      'Water Resistance': '100m water resistant, EN13319 dive certified'
    },
    inTheBox: ['Apple Watch Ultra 2', 'Watch Loop', 'Magnetic Fast Charger to USB-C (1m)'],
    description: 'Crafted for extreme endurance and navigation with corrosion-resistant titanium, dual-frequency GPS, and customizable Action button.',
    reviews: [
      { id: 1, author: 'Derek S.', rating: 5, date: '1 week ago', title: 'Indestructible battery beast', comment: 'Battery lasts for 3 days on trail hikes. 3000 nits display is crystal clear in direct sun.' }
    ]
  },
  {
    id: 'apple-watch-series-10',
    name: 'Apple Watch Series 10 (GPS)',
    brand: 'Apple',
    category: 'wearables',
    subCategory: 'apple',
    tagline: 'Thinnest Apple Watch ever with wide-angle OLED display.',
    price: 399,
    originalPrice: 429,
    rating: 4.8,
    reviewsCount: 290,
    inStock: true,
    badge: 'Ultra Thin',
    badgeColor: 'bg-blue-600',
    images: [
      'https://images.unsplash.com/photo-1508685096489-7aacd43bd3b1?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=1000&q=80'
    ],
    colors: [
      { name: 'Jet Black Aluminum', hex: '#111111' },
      { name: 'Rose Gold Aluminum', hex: '#e8b8ad' },
      { name: 'Silver Aluminum', hex: '#d4d5d7' }
    ],
    storageOptions: [
      { size: '42mm Sport Band', priceDelta: 0 },
      { size: '46mm Sport Band', priceDelta: 30 }
    ],
    highlights: [
      'Nearly 10% thinner than Series 9 with up to 30% more active screen area',
      'Wide-angle OLED display that is up to 40% brighter when viewed from an angle',
      'Sleep apnea detection notifications and depth/water temperature sensors',
      'Fast charging up to 80% battery in just 30 minutes'
    ],
    specs: {
      'Processor': 'S10 SiP with 4-core Neural Engine',
      'Display': 'Wide-angle OLED, Always-On, up to 2000 nits',
      'Sensors': 'ECG, Heart Rate, Wrist temperature, Depth gauge to 6m',
      'Water Resistance': '50m water resistant (swimproof)'
    },
    inTheBox: ['Apple Watch Series 10', 'Sport Band', 'Magnetic Fast Charger (1m)'],
    description: 'A major milestone. Series 10 features the largest display ever on an Apple Watch in the thinnest profile, with polished Jet Black aluminum.',
    reviews: [
      { id: 1, author: 'Michelle Y.', rating: 5, date: '5 days ago', title: 'Jet Black finish is so sleek', comment: 'Screen is massive and charges fast enough while I shower.' }
    ]
  },
  {
    id: 'samsung-galaxy-watch-ultra',
    name: 'Samsung Galaxy Watch Ultra (LTE)',
    brand: 'Samsung',
    category: 'wearables',
    subCategory: 'samsung',
    tagline: 'Extreme durability, BioActive sensor, multisport tracking.',
    price: 649,
    originalPrice: 699,
    rating: 4.8,
    reviewsCount: 175,
    inStock: true,
    badge: 'Pro Endurance',
    badgeColor: 'bg-orange-600',
    images: [
      'https://images.unsplash.com/photo-1508685096489-7aacd43bd3b1?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=1000&q=80'
    ],
    colors: [
      { name: 'Titanium Gray w/ Orange Accent', hex: '#58595b' },
      { name: 'Titanium White', hex: '#e8e8e8' }
    ],
    storageOptions: [
      { size: '47mm (LTE + Bluetooth)', priceDelta: 0 }
    ],
    highlights: [
      'Grade 4 Titanium cushion case with 10 ATM / IP68 water resistance',
      'Quick Button for customized instant workout and emergency siren',
      'BioActive Sensor for sleep apnea detection, ECG, and vascular age',
      'Up to 100 hours of battery life in Power Saving mode'
    ],
    specs: {
      'Display': '1.5" Super AMOLED, 480 x 480, Sapphire Crystal, 3000 nits',
      'Processor': 'Exynos W1000 (3nm, 5-core)',
      'Battery': '590 mAh, fast wireless charging',
      'Operating System': 'Wear OS Powered by Samsung (One UI 6 Watch)'
    },
    inTheBox: ['Galaxy Watch Ultra', 'Marine Band', 'Fast Wireless Charger', 'Guide'],
    description: 'Designed for extreme environments. Push boundaries across oceans and mountains with 10 ATM water resistance, emergency siren, and Energy Score calculated by Galaxy AI.',
    reviews: [
      { id: 1, author: 'Carl V.', rating: 5, date: '2 weeks ago', title: 'The battery and siren give peace of mind', comment: 'Battery hits 3 days. Titanium cushion design is super bold.' }
    ]
  },
  {
    id: 'samsung-galaxy-watch-7',
    name: 'Samsung Galaxy Watch 7 (Bluetooth)',
    brand: 'Samsung',
    category: 'wearables',
    subCategory: 'samsung',
    tagline: '3nm Exynos processor, Dual-frequency GPS, Energy Score.',
    price: 299,
    originalPrice: 329,
    rating: 4.8,
    reviewsCount: 210,
    inStock: true,
    badge: 'Smart Fitness',
    badgeColor: 'bg-emerald-600',
    images: [
      'https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1508685096489-7aacd43bd3b1?auto=format&fit=crop&w=1000&q=80'
    ],
    colors: [
      { name: 'Green', hex: '#3b4d40' },
      { name: 'Silver', hex: '#d4d5d7' }
    ],
    storageOptions: [
      { size: '40mm Aluminum', priceDelta: 0 },
      { size: '44mm Aluminum', priceDelta: 30 }
    ],
    highlights: [
      'Upgraded 3nm Exynos W1000 processor with 3x faster app opening',
      'Dual-frequency GPS (L1+L5) for accurate city running route tracking',
      'Galaxy AI Energy Score analyzes daily sleep and physical readiness',
      'Enhanced BioActive Sensor with 13 LED array for precision vitals'
    ],
    specs: {
      'Display': '1.3" / 1.5" Super AMOLED, Sapphire Crystal, 2000 nits',
      'Processor': 'Exynos W1000 (3nm)',
      'Water Resistance': '5 ATM + IP68 + MIL-STD-810H',
      'Battery': 'Up to 40 hours with Always-On display off'
    },
    inTheBox: ['Galaxy Watch 7', 'Sport Band', 'Wireless Charger', 'Guide'],
    description: 'Elevate your daily wellness with the Galaxy Watch 7. Track workouts, sleep stages, heart health, and calculate your daily Energy Score with Galaxy AI.',
    reviews: [
      { id: 1, author: 'Phearun S.', rating: 5, date: '1 week ago', title: 'So responsive and battery lasts 2 days', comment: 'The sleep score and energy score help me pace my workouts.' }
    ]
  },

  // --- ACCESSORIES & CHARGERS (4 Models) ---
  {
    id: 'apple-magsafe-charger-duo',
    name: 'Apple MagSafe Duo Wireless Charger',
    brand: 'Apple',
    category: 'accessories',
    subCategory: 'apple',
    tagline: 'Folds flat. Charges your iPhone and Apple Watch simultaneously.',
    price: 129,
    originalPrice: 149,
    rating: 4.7,
    reviewsCount: 310,
    inStock: true,
    badge: 'Travel Essential',
    badgeColor: 'bg-violet-600',
    images: [
      'https://images.unsplash.com/photo-1586816879360-004f5b0c51e3?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1583863788434-e58a36330cf0?auto=format&fit=crop&w=1000&q=80'
    ],
    colors: [
      { name: 'Soft Touch White', hex: '#fbfbfb' }
    ],
    storageOptions: [
      { size: 'Dual Wireless Pad', priceDelta: 0 }
    ],
    highlights: [
      'Charges your compatible iPhone, Apple Watch, and AirPods case',
      'Folds together neatly so you can easily take it wherever you go',
      'Flip up the watch puck to charge Apple Watch in Nightstand mode',
      'Fast wireless charging up to 14W with 27W+ adapter'
    ],
    specs: {
      'Compatibility': 'iPhone 12-16, Apple Watch all series, wireless AirPods',
      'Connector': 'USB-C port',
      'Power Requirement': '27W+ USB-C adapter recommended'
    },
    inTheBox: ['MagSafe Duo Charger', 'USB-C Cable (1m)', 'User Guide'],
    description: 'Conveniently charge your iPhone, Apple Watch, and AirPods wirelessly. Folds flat like a wallet for travel.',
    reviews: [
      { id: 1, author: 'Nina B.', rating: 5, date: '1 month ago', title: 'Must-have for travel', comment: 'Replaced a tangle of 3 cables with one tiny folded pad.' }
    ]
  },
  {
    id: 'samsung-45w-fast-charger-trio',
    name: 'Samsung 45W Power Adapter Trio',
    brand: 'Samsung',
    category: 'accessories',
    subCategory: 'samsung',
    tagline: 'Charge 3 devices simultaneously at maximum GaN speeds.',
    price: 59,
    originalPrice: 69,
    rating: 4.9,
    reviewsCount: 650,
    inStock: true,
    badge: 'Super Fast',
    badgeColor: 'bg-emerald-600',
    images: [
      'https://images.unsplash.com/photo-1583863788434-e58a36330cf0?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1586816879360-004f5b0c51e3?auto=format&fit=crop&w=1000&q=80'
    ],
    colors: [
      { name: 'Matte Black', hex: '#1e1e1e' }
    ],
    storageOptions: [
      { size: '45W GaN Trio (2x USB-C + 1x USB-A)', priceDelta: 0 }
    ],
    highlights: [
      'Simultaneous 3-port charging: USB-C1 (max 45W), USB-C2 (max 25W), USB-A (max 15W)',
      'GaN technology for cooler, smaller, ultra-efficient power delivery',
      'Super Fast Charging 2.0 compatible with Galaxy S24 Ultra & S24+',
      'Built-in surge and overheat protection'
    ],
    specs: {
      'Total Output': 'Max 65W total combined / 45W single port',
      'Ports': '2x USB-C, 1x USB-A',
      'Weight': '155g compact wall adapter'
    },
    inTheBox: ['Samsung Power Adapter Trio', 'Quick Start Guide'],
    description: 'Power up three devices simultaneously — laptop, phone, and watch/earbuds without carrying multiple bricks.',
    reviews: [
      { id: 1, author: 'Tyler S.', rating: 5, date: '3 weeks ago', title: 'Super Fast Charging 2.0 works', comment: 'Charges my S24 Ultra to 75% in barely 30 minutes.' }
    ]
  },
  {
    id: 'apple-pencil-pro',
    name: 'Apple Pencil Pro',
    brand: 'Apple',
    category: 'accessories',
    subCategory: 'apple',
    tagline: 'Squeeze gesture, barrel roll, haptic feedback, Find My.',
    price: 129,
    originalPrice: 139,
    rating: 4.9,
    reviewsCount: 220,
    inStock: true,
    badge: 'Creative Tool',
    badgeColor: 'bg-purple-600',
    images: [
      'https://images.unsplash.com/photo-1583863788434-e58a36330cf0?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1586816879360-004f5b0c51e3?auto=format&fit=crop&w=1000&q=80'
    ],
    colors: [
      { name: 'Matte White', hex: '#fdfdfd' }
    ],
    storageOptions: [
      { size: 'Magnetic Wireless Pairing', priceDelta: 0 }
    ],
    highlights: [
      'Squeeze sensor brings up a new palette to quickly switch tools',
      'Barrel roll gyroscope lets you rotate the pen to change brush angle',
      'Haptic feedback engine provides light pulse confirmation',
      'Apple Pencil hover and Find My tracking support'
    ],
    specs: {
      'Connectivity': 'Bluetooth, magnetic attach & charge',
      'Compatibility': 'iPad Pro (M4), iPad Air (M2)',
      'Length': '166 mm, Weight: 19.15g'
    },
    inTheBox: ['Apple Pencil Pro', 'Documentation'],
    description: 'Engineered for boundless creativity. Squeeze to summon tools, barrel roll to rotate oriented brush strokes, and feel haptic confirmations.',
    reviews: [
      { id: 1, author: 'Samnang P.', rating: 5, date: '2 weeks ago', title: 'The haptic feedback and squeeze are brilliant', comment: 'Game changer for digital illustrators.' }
    ]
  },
  {
    id: 'samsung-galaxy-smarttag-2',
    name: 'Samsung Galaxy SmartTag2 (4-Pack)',
    brand: 'Samsung',
    category: 'accessories',
    subCategory: 'samsung',
    tagline: 'Compass View, 500-day battery life, IP67 dust and water resistant.',
    price: 69,
    originalPrice: 79,
    rating: 4.8,
    reviewsCount: 180,
    inStock: true,
    badge: 'Pack of 4',
    badgeColor: 'bg-blue-600',
    images: [
      'https://images.unsplash.com/photo-1586816879360-004f5b0c51e3?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1583863788434-e58a36330cf0?auto=format&fit=crop&w=1000&q=80'
    ],
    colors: [
      { name: '2 Black + 2 White Combo', hex: '#555555' }
    ],
    storageOptions: [
      { size: '4-Pack Bundle', priceDelta: 0 }
    ],
    highlights: [
      'Redesigned ring design with metal loop for easy key ring attach',
      'Up to 500 days of battery life, up to 700 days in Power Saving mode',
      'Compass View with Ultra-Wideband (UWB) precision guiding',
      'IP67 water and dust resistance for luggage and pet collars'
    ],
    specs: {
      'Connectivity': 'BLE 5.3 + UWB',
      'Battery': 'Replaceable CR2032 coin cell (up to 500 days)',
      'Water Rating': 'IP67 rated'
    },
    inTheBox: ['2x Black SmartTag2', '2x White SmartTag2', 'SIM pin for battery tray', 'Manual'],
    description: 'Keep your valuables located effortlessly. Features intuitive Compass View with arrow navigation, long battery endurance, and IP67 weather resistance.',
    reviews: [
      { id: 1, author: 'Visal T.', rating: 5, date: '1 week ago', title: 'Tracked my luggage across 3 flights', comment: 'UWB arrow points directly to my bag at airport carousel.' }
    ]
  }
];

export const PROMO_BANNERS = [
  {
    id: 1,
    title: 'Samsung Galaxy S24 Ultra',
    subtitle: 'Galaxy AI is here',
    description: 'Transform your world with live call translation, 200MP camera system, and built-in S Pen.',
    cta: 'Explore S24 Ultra',
    productId: 'samsung-galaxy-s24-ultra',
    tag: 'Flagship of 2025',
    gradient: 'from-slate-900 via-indigo-950 to-blue-900',
    image: 'https://images.unsplash.com/photo-1610945265064-0e34e5519bbf?auto=format&fit=crop&w=1000&q=80',
    price: '$1,299'
  },
  {
    id: 2,
    title: 'Apple iPhone 16 Pro Max',
    subtitle: 'Forged in Titanium',
    description: 'A18 Pro chip, intuitive tactile Camera Control, and 4K 120 fps Dolby Vision.',
    cta: 'Shop iPhone 16 Pro',
    productId: 'apple-iphone-16-pro-max',
    tag: 'New Apple Release',
    gradient: 'from-zinc-950 via-stone-900 to-amber-950',
    image: 'https://images.unsplash.com/photo-1695048133142-1a20484d2569?auto=format&fit=crop&w=1000&q=80',
    price: '$1,199'
  },
  {
    id: 3,
    title: 'AirPods Pro 2 & Accessories',
    subtitle: 'Next-Level Acoustics',
    description: 'Active Noise Cancellation, Adaptive Audio, USB-C fast charging, and clinical Hearing Health.',
    cta: 'Discover Audio',
    productId: 'apple-airpods-pro-2',
    tag: 'Up to 20% Off',
    gradient: 'from-gray-900 via-purple-950 to-slate-900',
    image: 'https://images.unsplash.com/photo-1600294037681-c80b4cb5b434?auto=format&fit=crop&w=1000&q=80',
    price: 'From $59'
  }
];
