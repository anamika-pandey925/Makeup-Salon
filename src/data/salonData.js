export const SALON_INFO = {
  name: "AURA LUXE",
  tagline: "Bridal Couture & Haute Beauty Studio",
  subtitle: "Professional Makeup & Beauty Services for Every Special Moment.",
  heroHeading: "Enhance Your Beauty, Celebrate Your Elegance.",
  aboutHeading: "Beauty is Our Passion, Your Confidence is Our Art.",
  phone: "+1 (555) 234-8970",
  whatsapp: "+15552348970",
  whatsappDisplay: "+1 (555) 234-8970",
  email: "concierge@auraluxestudio.com",
  address: "742 Evergreen Promenade, Suite 400, Beverly Hills, CA 90210",
  workingHours: [
    { days: "Tuesday – Saturday", hours: "9:00 AM – 7:30 PM" },
    { days: "Sunday", hours: "10:00 AM – 5:00 PM (Bridal & Event Bookings Only)" },
    { days: "Monday", hours: "By Exclusive VIP Appointment" }
  ],
  socials: {
    instagram: "https://instagram.com",
    facebook: "https://facebook.com",
    pinterest: "https://pinterest.com",
    youtube: "https://youtube.com"
  },
  stats: [
    { label: "Brides Styled", value: "1,500+" },
    { label: "Years of Artistry", value: "12+" },
    { label: "Luxury Brand Partners", value: "25+" },
    { label: "Client Satisfaction", value: "99.8%" }
  ]
};

export const SERVICES = [
  {
    id: "bridal-makeup",
    title: "Signature Bridal Couture Makeup",
    category: "Bridal",
    price: "$450",
    numericPrice: 450,
    duration: "3.5 Hours",
    description: "Our signature luxury bridal transformation combining personalized skin prep, flawless high-definition sculpting, custom lash architecture, and regal veil setting for your unforgettable day.",
    image: "https://images.unsplash.com/photo-1595777457583-95e059d581b8?auto=format&fit=crop&w=1000&q=85",
    features: [
      "Bespoke skin hydration & cryo-depuffing ritual",
      "Choice of Luxury HD or Airbrush base",
      "Handcrafted multi-layered 3D mink eyelashes",
      "Full jewelry, dupatta/veil & accessory placement",
      "Complimentary touch-up vanity kit for the wedding day"
    ],
    popular: true
  },
  {
    id: "airbrush-makeup",
    title: "Ultra-Light Airbrush Artistry",
    category: "Specialty",
    price: "$380",
    numericPrice: 380,
    duration: "2.5 Hours",
    description: "State-of-the-art micro-droplet airbrush technique offering an exceptionally featherweight, poreless, 24-hour waterproof and transfer-proof canvas that withstands tears, humidity, and high emotions.",
    image: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?auto=format&fit=crop&w=1000&q=85",
    features: [
      "Temptu PRO silicone-formulated micro-dispersion",
      "24-Hour sweat-resistant & flash-proof wear",
      "Weightless breathable finish with zero cake effect",
      "Includes décolletage & back highlighting",
      "Custom color mixing matched to your undertone"
    ],
    popular: false
  },
  {
    id: "hd-makeup",
    title: "High Definition (HD) Red Carpet",
    category: "Specialty",
    price: "$320",
    numericPrice: 320,
    duration: "2.0 Hours",
    description: "Formulated specifically for 4K and 8K ultra-high resolution photography and cinematic videography. Diffuses light naturally, blurring texture for a soft-focus velvet glow.",
    image: "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=1000&q=85",
    features: [
      "Ultra-fine light-reflecting mineral primers",
      "Color correction & targeted micro-concealing",
      "Sculpted architectural brows & smoky or luminous eyes",
      "Long-wear transfer-resistant matte or dewy finish",
      "Camera flash and lighting test before leaving"
    ],
    popular: false
  },
  {
    id: "engagement-makeup",
    title: "Romantic Engagement & Roka Glam",
    category: "Occasion",
    price: "$290",
    numericPrice: 290,
    duration: "2.0 Hours",
    description: "Fresh, youthful, and luminous styling tailored to your ring ceremony attire. Focuses on lit-from-within radiance, dreamy rosy hues, and ethereal shimmer.",
    image: "https://images.unsplash.com/photo-1512496015851-a90fb38ba796?auto=format&fit=crop&w=1000&q=85",
    features: [
      "Glass-skin glow prep with hyaluronic boosters",
      "Soft glam eye shadow with champagne shimmer",
      "Natural flutter lashes tailored to eye shape",
      "Hair styling included (soft waves, half-up braided crowns)",
      "Jewelry and dupatta drape assistance"
    ],
    popular: true
  },
  {
    id: "reception-makeup",
    title: "Gala & Evening Reception Glamour",
    category: "Occasion",
    price: "$340",
    numericPrice: 340,
    duration: "2.5 Hours",
    description: "Sultry, bold, and modern high-fashion aesthetics designed for evening lighting and grand chandeliers. Defined contours, statement eyes, or bold lip couture.",
    image: "https://images.unsplash.com/photo-1516914943479-89db7d9ae7f2?auto=format&fit=crop&w=1000&q=85",
    features: [
      "Intense evening contouring & strobing highlights",
      "Smokey metallic or graphic liner artistry",
      "Waterproof lip pigments sealed with crystal gloss",
      "Hollywood waves or sleek sculptural bun",
      "Gown or lehenga final drape setting"
    ],
    popular: false
  },
  {
    id: "party-makeup",
    title: "Cocktail, Sangeet & Guest of Honor",
    category: "Occasion",
    price: "$220",
    numericPrice: 220,
    duration: "1.5 Hours",
    description: "Sophisticated makeup for bridesmaids, sangeet celebrations, cocktail galas, and milestone anniversaries. Effortless glam crafted to highlight your authentic beauty.",
    image: "https://images.unsplash.com/photo-1503236316239-01e40562e153?auto=format&fit=crop&w=1000&q=85",
    features: [
      "Full face customized makeup application",
      "Natural silk strip lashes included",
      "Long-wear hydrating matte or glass skin finish",
      "Basic hair styling or blow-dry refinement",
      "Setting spray lock-in for high-energy dancing"
    ],
    popular: false
  },
  {
    id: "hairstyling",
    title: "High-Fashion & Bridal Hair Artistry",
    category: "Hair",
    price: "$160",
    numericPrice: 160,
    duration: "1.5 Hours",
    description: "From textured romantic chignons, royal floral braided updos, to Old Hollywood polished waves and modern avant-garde ponytails. Includes hair padding & extensions prep.",
    image: "https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&w=1000&q=85",
    features: [
      "Thermal styling & volume booster foundations",
      "Custom padding & secure crown structure",
      "Fresh flower (gajra) or crystal hairpiece pinning",
      "Veil/Mathapatti/Tiara anchor points",
      "All-night anti-frizz humidity shield"
    ],
    popular: false
  },
  {
    id: "saree-draping",
    title: "Couture Saree & Dupatta Pleating",
    category: "Styling",
    price: "$85",
    numericPrice: 85,
    duration: "45 Mins",
    description: "Master draping precision for South Indian Kanjeevarams, delicate Banarasis, Organza, pleated pre-stitched styles, Gujarati front pallu, Bengali royal pleats, and double lehenga dupattas.",
    image: "https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&w=1000&q=85",
    features: [
      "Iron-pressed sharp pleating and slimming contour pins",
      "Double dupatta anchoring with zero pin marks",
      "Comfort-first walk and dance secure fit",
      "Belt, kamarbandh, and waist accessory integration",
      "Available on-site or in-studio"
    ],
    popular: false
  },
  {
    id: "pre-bridal-packages",
    title: "7-Day Pre-Bridal Radiance Ritual",
    category: "Rituals",
    price: "$580",
    numericPrice: 580,
    duration: "Multi-Day Spa",
    description: "A comprehensive holistic bridal preparation regimen including diamond microdermabrasion, full body herbal polish, gold collagen body wrap, luxury manicure-pedicure, and aromatic scalp therapy.",
    image: "https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=1000&q=85",
    features: [
      "Customized Skin Diagnostic Consultation",
      "24K Gold Luminosity Facial & Hydra-Infusion",
      "Full body saffron-almond exfoliating polish",
      "Deluxe Gel Spa Manicure & Pedicure with paraffin",
      "Deep moisture hair restoration therapy"
    ],
    popular: true
  },
  {
    id: "skin-care-facial",
    title: "Bespoke Clinical Hydra-Facial & Peels",
    category: "Rituals",
    price: "$195",
    numericPrice: 195,
    duration: "75 Mins",
    description: "Medical-grade extraction, hydration, and LED light therapy tailored to soothe redness, refine pores, and maximize your skin's natural light reflection before any major appearance.",
    image: "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&w=1000&q=85",
    features: [
      "Gentle ultrasonic vortex suction of impurities",
      "Multi-peptide & antioxidant serum infusions",
      "Custom Red/Blue LED light therapy rejuvenation",
      "Lymphatic drainage face and neck massage",
      "Algae cooling mask for instant plumping"
    ],
    popular: false
  }
];

export const GALLERY_ITEMS = [
  {
    id: 1,
    title: "Royal Traditional Bride",
    category: "Bridal",
    subtitle: "Regal crimson lehenga with antique gold pigments and warm bronze smokey eyes.",
    image: "https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&w=1000&q=85",
    tag: "Signature Bridal"
  },
  {
    id: 2,
    title: "Modern Minimalist White Wedding",
    category: "Bridal",
    subtitle: "Clean glass-skin luminosity, softly feathered brows, and pearlescent lids.",
    image: "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=1000&q=85",
    tag: "Contemporary Bride"
  },
  {
    id: 3,
    title: "Sangeet Glamour & Metallic Shimmer",
    category: "Party",
    subtitle: "Champagne foil cut-crease with dramatic fluttering wispy lash architecture.",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=1000&q=85",
    tag: "Party Look"
  },
  {
    id: 4,
    title: "Emerald Saree & Architectural Updo",
    category: "Hairstyles",
    subtitle: "Textured Spanish low-chignon adorned with delicate baby's breath and gold pins.",
    image: "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=1000&q=85",
    tag: "Hairstyle Collection"
  },
  {
    id: 5,
    title: "Pastel Pink Engagement Radiance",
    category: "Engagement",
    subtitle: "Monochromatic rose gold cheeks, velvet petal lips, and dewy highlights.",
    image: "https://images.unsplash.com/photo-1526045612212-70caf35c14df?auto=format&fit=crop&w=1000&q=85",
    tag: "Engagement"
  },
  {
    id: 6,
    title: "Evening Gala Noir & Crimson Lip",
    category: "Reception",
    subtitle: "Old Hollywood glamour featuring a sculpted jawline and deep burgundy matte lip.",
    image: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?auto=format&fit=crop&w=1000&q=85",
    tag: "Reception"
  },
  {
    id: 7,
    title: "Bohemian Crown & Mermaid Waves",
    category: "Hairstyles",
    subtitle: "Undone romantic waves entwined with heirloom pearls and fresh jasmine buds.",
    image: "https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&w=1000&q=85",
    tag: "Hairstyle Collection"
  },
  {
    id: 8,
    title: "Golden Hour Glow & Soft Wing",
    category: "Party",
    subtitle: "Warm amber tones, sun-kissed bronzer, and an ultra-fine cat-eye flick.",
    image: "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?auto=format&fit=crop&w=1000&q=85",
    tag: "Party Look"
  }
];

export const BEFORE_AFTER = {
  title: "The Art of Radiant Transformation",
  subtitle: "Drag the slider to unveil how bespoke skin preparation and master color theory harmonize your authentic features with camera-ready bridal grandeur.",
  beforeImage: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=1000&q=85",
  afterImage: "https://images.unsplash.com/photo-1595777457583-95e059d581b8?auto=format&fit=crop&w=1000&q=85",
  beforeLabel: "Natural Bare Complexion",
  afterLabel: "AURA LUXE Bridal Couture Artistry",
  highlights: [
    "Poreless yet breathable weightless texture",
    "Balanced undertone color correction",
    "Eye-lifting precision & sculpted definition",
    "24-Hour smudge-proof & tear-proof seal"
  ]
};

export const PACKAGES = [
  {
    id: "royal-bridal",
    name: "The Royal Empress Bridal Suite",
    category: "Bridal",
    badge: "Most Requested",
    price: 850,
    deposit: 200,
    duration: "4.5 Hours",
    description: "The definitive bespoke bridal experience. Crafted for the bride who demands perfection, tranquility, and red-carpet VIP treatment on her grand day.",
    inclusions: [
      "Master Artist Lead Application with 1 Senior Assistant",
      "Choice of HD Airbrush or Ultra-Luxe Siliconized Cream Base",
      "Full Cryo-Firming Lymphatic Facial Prep",
      "Intricate Couture Hair Sculpture + Extension Placement",
      "Dupatta / Veil / Saree Setting & Jewelry Anchoring",
      "Complimentary Full Bridal Preview / Trial Session (In-Studio)",
      "Luxury Touch-up Kit: Full-size Lipstick, Powder Puff & Blotting Sheets",
      "Décolleté, Back & Arm Bronzing Shimmer"
    ],
    highlight: true,
    whatsappMsg: "Hello AURA LUXE! I am interested in checking availability for The Royal Empress Bridal Suite ($850)."
  },
  {
    id: "signature-bridal",
    name: "Classic Couture Bridal Package",
    category: "Bridal",
    badge: "Signature",
    price: 550,
    deposit: 150,
    duration: "3.5 Hours",
    description: "Timeless elegance perfected for the wedding ceremony. Impeccably balances traditional grandeur with contemporary high-fashion finish.",
    inclusions: [
      "Senior Makeup Artist Application",
      "High Definition (HD) 4K Camera-Ready Base",
      "Hydrating Sheet Mask & Lip Plump Priming",
      "Couture Bridal Bun or Textured Romantic Updo",
      "Dupatta & Jewelry Draping Support",
      "Handcrafted 3D Silk Lashes",
      "Emergency Touch-Up Mini Palette included"
    ],
    highlight: false,
    whatsappMsg: "Hello AURA LUXE! I would like to inquire about the Classic Couture Bridal Package ($550)."
  },
  {
    id: "engagement-reception",
    name: "Celebration Gala & Reception Duet",
    category: "Occasion",
    badge: "Popular Value",
    price: 490,
    deposit: 100,
    duration: "3.0 Hours",
    description: "Created specifically for Sangeet, Cocktail, or Grand Reception nights. Glamorous, photogenic, and resistant to all-night dancing.",
    inclusions: [
      "HD Glow Base with Custom Evening Contour",
      "Smokey or Glitter Foil Eye Artistry with Lashes",
      "Hollywood Glamour Waves or Sculptural Textured Ponytail",
      "Saree / Evening Gown Setting Assistance",
      "Transfer-proof 16-Hour Matte Lipstick",
      "Setting mist infusion with gold micro-pearls"
    ],
    highlight: false,
    whatsappMsg: "Hello AURA LUXE! I would like to book the Celebration Gala & Reception Duet ($490)."
  },
  {
    id: "pre-bridal-glow",
    name: "Complete 7-Day Pre-Bridal Glow Ritual",
    category: "Pre-Bridal",
    badge: "All-Inclusive",
    price: 650,
    deposit: 150,
    duration: "Over 7 Days",
    description: "The complete pampering sanctuary before wedding festivities. Revitalizes your skin, hair, and energy so you walk down the aisle naturally luminous.",
    inclusions: [
      "Consultation & Skin Health Analysis",
      "24K Gold Luminosity Micro-Infusion Facial",
      "Full Body Exfoliating Saffron & Coconut Polish",
      "Moroccan Argan Hair Spa with Scalp Acupressure",
      "Deluxe Bridal Gel Manicure & Pedicure",
      "Full Body Gentle Waxing & Threading Architecture"
    ],
    highlight: false,
    whatsappMsg: "Hello AURA LUXE! I want to reserve the Complete 7-Day Pre-Bridal Glow Ritual ($650)."
  }
];

export const WHY_CHOOSE_US = [
  {
    icon: "Crown",
    title: "Master Certified Artists",
    description: "Trained under top international fashion weeks (London, Paris & Mumbai) with over 12 years perfecting bridal skin tones and bone structures."
  },
  {
    icon: "Sparkles",
    title: "Ultra-Premium Luxury Kit",
    description: "We use exclusively Charlotte Tilbury, Tom Ford, Dior Backstage, Pat McGrath Labs, MAC Pro, NARS, and Temptu Airbrush formulations."
  },
  {
    icon: "ShieldCheck",
    title: "Hospital-Grade Hygiene Protocol",
    description: "Stainless steel sanitized palettes, single-use disposable wands, UV-sterilized synthetic brushes, and spotless vanity hygiene."
  },
  {
    icon: "HeartHandshake",
    title: "Tailored Face Mapping & Skin Prep",
    description: "No cookie-cutter looks. We analyze your eye shape, skin undertone, lighting environment, and jewelry to design your bespoke look."
  },
  {
    icon: "Clock",
    title: "Zero-Stress Punctuality Guarantee",
    description: "Wedding mornings are sacred. Our teams arrive early with a dedicated timeline so you are never rushed and step out calm, composed, and radiant."
  },
  {
    icon: "MapPin",
    title: "Worldwide Destination & On-Venue Travel",
    description: "Whether you get married in our Beverly Hills luxury lounge, a Tuscany villa, or a grand royal palace, our artistry travels anywhere to you."
  }
];

export const TESTIMONIALS = [
  {
    id: 1,
    name: "Alisha Kapur-Vance",
    role: "Bride • Grand Hyatt Wedding",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=85",
    comment: "Booking AURA LUXE was hands-down the best decision of my wedding! From the skin prep to my heavy lehenga dupatta drape, everything was seamless. My makeup survived 14 hours of happy tears and dancing without a single smudge. I felt like royalty!",
    weddingLook: "Royal Empress Bridal Suite"
  },
  {
    id: 2,
    name: "Serena Thorne",
    role: "Bride • Malibu Cliffside Ceremony",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=200&q=85",
    comment: "I was terrified of looking 'cakey' on my wedding day. The artist listened so intently and gave me the most breathtaking glowing skin. When my husband saw me at the altar, he was in tears. Every single guest asked who did my makeup!",
    weddingLook: "Signature Airbrush Perfection"
  },
  {
    id: 3,
    name: "Meera Patel",
    role: "Bride • Udaipur Destination Palace",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=200&q=85",
    comment: "The team flew to our destination wedding and styled me for 4 distinct events (Mehendi, Sangeet, Wedding & Reception). Each look was completely unique and photographed like a high-fashion Vogue editorial. Truly unmatched master artistry.",
    weddingLook: "Destination Bridal Couture"
  },
  {
    id: 4,
    name: "Dr. Evelyn Ross",
    role: "Reception Bride • The Beverly Hills Hotel",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=200&q=85",
    comment: "The studio environment alone is so serene and opulent. They treated my mother, bridesmaids, and me like VIP queens. The attention to detail with false lash placement and jewelry pinning is unmatched anywhere else.",
    weddingLook: "Gala Evening Reception Glam"
  }
];

export const ARTIST_BIO = {
  name: "Natasha Sterling",
  title: "Founder & Creative Bridal Director",
  experienceYears: "12+",
  quote: "Every woman carries an undeniable aura of grace. My mission isn't to mask your beauty with makeup, but to illuminate the magnificent goddess that is already within you.",
  bioParagraphs: [
    "Natasha Sterling is an internationally acclaimed celebrity makeup artist and beauty educator trained at the prestigious Delamar Academy London and Mumbai Fashion Haute Academy. Over the past twelve years, her artistry has graced royal weddings, Vogue spreads, and international red carpets.",
    "AURA LUXE was born out of a desire to redefine the bridal salon experience into a private sanctuary of elegance, unhurried attention, and bespoke luxury. With a handpicked team of master hair sculptors and skincare specialists, Natasha ensures every bride experiences pure bliss from the initial champagne consultation to the final veil drape."
  ],
  certifications: [
    "Delamar London Advanced Bridal Couture Certified",
    "Temptu PRO Master Airbrush Artistry Specialist",
    "Dior Beauty Ambassador Alumni",
    "CIDESCO Certified Dermal Aesthetician"
  ],
  image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=1000&q=85",
  studioImage: "https://images.unsplash.com/photo-1600948836101-f9ffda59d250?auto=format&fit=crop&w=1000&q=85"
};

export const FAQS = [
  {
    question: "How far in advance should I book my bridal makeup?",
    answer: "We recommend reserving your wedding date 4 to 8 months in advance, especially for prime wedding seasons (October through March and June through August). Because we only accept a limited number of brides per day to ensure undivided attention, dates fill up quickly."
  },
  {
    question: "Do you offer bridal makeup trials before the wedding?",
    answer: "Yes, absolutely! We believe bridal previews are essential for peace of mind. During your 2-hour consultation and trial at our luxury studio, we experiment with skin prep, lash choices, and jewelry harmony to finalize your custom wedding blueprint."
  },
  {
    question: "Do you travel to the wedding venue or destination location?",
    answer: "Yes! Our master artists and hair team travel locally across California, nationwide across the USA, and internationally for destination weddings. All on-venue travel fees and accommodations are transparently quoted."
  },
  {
    question: "What luxury makeup brands are in your professional kit?",
    answer: "We carry exclusively premier dermatologically-tested luxury cosmetics including Charlotte Tilbury, Tom Ford, Dior, Pat McGrath Labs, NARS, Chanel, Huda Beauty, Laura Mercier, and Temptu PRO Airbrush."
  },
  {
    question: "Can your team also accommodate bridesmaids and family members?",
    answer: "Yes. Our senior artistry team can accommodate bridal parties of any size without compromising timeliness or quality. We provide a customized morning timeline so everyone is ready smoothly before photography begins."
  }
];
