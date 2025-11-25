export type Language = 'ar' | 'fr' | 'en';

export interface Translations {
  // Navigation
  nav: {
    home: string;
    collections: string;
    shopAll: string;
    skincare: string;
    savon: string;
    shampo: string;
    bomada: string;
    oil: string;
    packs: string;
    ourStory: string;
    journal: string;
    contact: string;
  };
  
  // Home Page
  home: {
    heroTitle: string;
    heroSubtitle: string;
    shopCollection: string;
    ourPhilosophy: string;
    vegan: string;
    cleanFormulas: string;
    ethicallySourced: string;
    curatedForYou: string;
    theEssentials: string;
    viewAllProducts: string;
    ritualOfCalm: string;
    ritualDescription: string;
    discoverRitual: string;
    morningRadiance: string;
    morningDescription: string;
    shopSerums: string;
    justArrived: string;
    freshFromLab: string;
    joinCommunity: string;
  };
  
  // Product
  product: {
    reviews: string;
    total: string;
    addToCart: string;
    orderViaWhatsApp: string;
    organic: string;
    organicDesc: string;
    dermatologistTested: string;
    dermatologistDesc: string;
    freeShipping: string;
    freeShippingDesc: string;
    productDescription: string;
  };
  
  // Cart
  cart: {
    yourCart: string;
    cartEmpty: string;
    cartEmptyDesc: string;
    continueShopping: string;
    orderSummary: string;
    subtotal: string;
    shipping: string;
    free: string;
    total: string;
    orderViaWhatsApp: string;
  };
  
  // Shop
  shop: {
    all: string;
    searchPlaceholder: string;
    noProducts: string;
    tryDifferent: string;
  };
  
  // Footer
  footer: {
    aboutUs: string;
    ourStory: string;
    sustainability: string;
    careers: string;
    customerCare: string;
    contactUs: string;
    shipping: string;
    returns: string;
    faq: string;
    followUs: string;
    newsletter: string;
    newsletterDesc: string;
    emailPlaceholder: string;
    subscribe: string;
    rights: string;
  };
  
  // WhatsApp Messages
  whatsapp: {
    newOrder: string;
    product: string;
    category: string;
    unitPrice: string;
    quantity: string;
    totalPrice: string;
    orderMessage: string;
    orderedProducts: string;
    subtotal: string;
  };
}

export const translations: Record<Language, Translations> = {
  // French
  fr: {
    nav: {
      home: 'Accueil',
      collections: 'Collections',
      shopAll: 'Tout Voir',
      skincare: 'Soins de la Peau',
      savon: 'Savon',
      shampo: 'Shampooing',
      bomada: 'Bomada',
      oil: 'Huiles',
      packs: 'Coffrets',
      ourStory: 'Notre Histoire',
      journal: 'Journal',
      contact: 'Contact',
    },
    home: {
      heroTitle: 'La Nature Rencontre la Science',
      heroSubtitle: 'Découvrez le pouvoir transformateur des plantes sauvages. Luxe durable pour le ritualiste conscient.',
      shopCollection: 'Voir la Collection',
      ourPhilosophy: 'Notre Philosophie',
      vegan: '100% Végétalien',
      cleanFormulas: 'Formules Propres',
      ethicallySourced: 'Éthiquement Sourcé',
      curatedForYou: 'Sélectionné Pour Vous',
      theEssentials: 'Les Essentiels',
      viewAllProducts: 'Voir Tous les Produits',
      ritualOfCalm: 'Le Rituel du Calme',
      ritualDescription: 'Notre gommage bambou & riz n\'est pas seulement un soin - c\'est un bouton de réinitialisation pour votre esprit et votre corps.',
      discoverRitual: 'Découvrir le Rituel',
      morningRadiance: 'Éclat Matinal',
      morningDescription: 'Commencez votre journée avec notre sérum à la vitamine C. Un mélange puissant d\'extraits d\'agrumes biologiques.',
      shopSerums: 'Voir les Sérums',
      justArrived: 'Nouveautés',
      freshFromLab: 'Fraîchement du Laboratoire',
      joinCommunity: 'Rejoignez notre communauté d\'amoureux de beauté consciente.',
    },
    product: {
      reviews: 'Avis',
      total: 'Total',
      addToCart: 'Ajouter au Panier',
      orderViaWhatsApp: 'Commander via WhatsApp',
      organic: '100% Biologique',
      organicDesc: 'Provenant de fermes durables du monde entier.',
      dermatologistTested: 'Testé Dermatologiquement',
      dermatologistDesc: 'Sûr pour les peaux sensibles.',
      freeShipping: 'Livraison Gratuite',
      freeShippingDesc: 'Sur toutes les commandes de plus de 50$.',
      productDescription: 'Une formulation luxueuse conçue pour s\'harmoniser avec le rythme naturel de votre peau. Riche en actifs botaniques et antioxydants.',
    },
    cart: {
      yourCart: 'Votre Panier',
      cartEmpty: 'Votre Panier est Vide',
      cartEmptyDesc: 'Il semble que vous n\'ayez pas encore ajouté de rituels.',
      continueShopping: 'Continuer les Achats',
      orderSummary: 'Résumé de la Commande',
      subtotal: 'Sous-total',
      shipping: 'Livraison',
      free: 'Gratuite',
      total: 'Total',
      orderViaWhatsApp: 'Commander via WhatsApp',
    },
    shop: {
      all: 'Tout',
      searchPlaceholder: 'Rechercher des produits...',
      noProducts: 'Aucun produit trouvé',
      tryDifferent: 'Essayez différents filtres ou termes de recherche.',
    },
    footer: {
      aboutUs: 'À Propos',
      ourStory: 'Notre Histoire',
      sustainability: 'Durabilité',
      careers: 'Carrières',
      customerCare: 'Service Client',
      contactUs: 'Nous Contacter',
      shipping: 'Livraison',
      returns: 'Retours',
      faq: 'FAQ',
      followUs: 'Suivez-nous',
      newsletter: 'Newsletter',
      newsletterDesc: 'Recevez les dernières nouvelles et offres exclusives.',
      emailPlaceholder: 'Votre email',
      subscribe: 'S\'abonner',
      rights: 'Tous droits réservés.',
    },
    whatsapp: {
      newOrder: 'Nouvelle Commande - Naturvibe',
      product: 'Produit',
      category: 'Catégorie',
      unitPrice: 'Prix unitaire',
      quantity: 'Quantité',
      totalPrice: 'Prix Total',
      orderMessage: 'Je souhaite commander ce produit. Merci!',
      orderedProducts: 'Produits commandés',
      subtotal: 'Sous-total',
    },
  },
  
  // English
  en: {
    nav: {
      home: 'Home',
      collections: 'Collections',
      shopAll: 'Shop All',
      skincare: 'Skincare',
      savon: 'Soap',
      shampo: 'Shampoo',
      bomada: 'Balm',
      oil: 'Oils',
      packs: 'Gift Sets',
      ourStory: 'Our Story',
      journal: 'Journal',
      contact: 'Contact',
    },
    home: {
      heroTitle: 'Nature Meets Science',
      heroSubtitle: 'Experience the transformative power of wild-crafted botanicals. Sustainable luxury for the mindful ritualist.',
      shopCollection: 'Shop Collection',
      ourPhilosophy: 'Our Philosophy',
      vegan: '100% Vegan',
      cleanFormulas: 'Clean Formulas',
      ethicallySourced: 'Ethically Sourced',
      curatedForYou: 'Curated For You',
      theEssentials: 'The Essentials',
      viewAllProducts: 'View All Products',
      ritualOfCalm: 'The Ritual of Calm',
      ritualDescription: 'Our Bamboo & Rice Scrub isn\'t just skincare—it\'s a reset button for your mind and body.',
      discoverRitual: 'Discover the Ritual',
      morningRadiance: 'Morning Radiance',
      morningDescription: 'Start your day with our Vitamin C Radiance serum. A potent blend of organic citrus extracts.',
      shopSerums: 'Shop Serums',
      justArrived: 'Just Arrived',
      freshFromLab: 'Fresh From The Lab',
      joinCommunity: 'Join our community of mindful beauty lovers.',
    },
    product: {
      reviews: 'Reviews',
      total: 'Total',
      addToCart: 'Add to Cart',
      orderViaWhatsApp: 'Order via WhatsApp',
      organic: '100% Organic',
      organicDesc: 'Sourced from sustainable farms worldwide.',
      dermatologistTested: 'Dermatologist Tested',
      dermatologistDesc: 'Safe for sensitive skin types.',
      freeShipping: 'Free Shipping',
      freeShippingDesc: 'On all orders over $50.',
      productDescription: 'A luxurious formulation designed to harmonize with your skin\'s natural rhythm. Rich in botanical actives and antioxidants.',
    },
    cart: {
      yourCart: 'Your Cart',
      cartEmpty: 'Your Cart is Empty',
      cartEmptyDesc: 'Looks like you haven\'t added any rituals yet.',
      continueShopping: 'Continue Shopping',
      orderSummary: 'Order Summary',
      subtotal: 'Subtotal',
      shipping: 'Shipping',
      free: 'Free',
      total: 'Total',
      orderViaWhatsApp: 'Order via WhatsApp',
    },
    shop: {
      all: 'All',
      searchPlaceholder: 'Search products...',
      noProducts: 'No products found',
      tryDifferent: 'Try different filters or search terms.',
    },
    footer: {
      aboutUs: 'About Us',
      ourStory: 'Our Story',
      sustainability: 'Sustainability',
      careers: 'Careers',
      customerCare: 'Customer Care',
      contactUs: 'Contact Us',
      shipping: 'Shipping',
      returns: 'Returns',
      faq: 'FAQ',
      followUs: 'Follow Us',
      newsletter: 'Newsletter',
      newsletterDesc: 'Get the latest news and exclusive offers.',
      emailPlaceholder: 'Your email',
      subscribe: 'Subscribe',
      rights: 'All rights reserved.',
    },
    whatsapp: {
      newOrder: 'New Order - Naturvibe',
      product: 'Product',
      category: 'Category',
      unitPrice: 'Unit Price',
      quantity: 'Quantity',
      totalPrice: 'Total Price',
      orderMessage: 'I would like to order this product. Thank you!',
      orderedProducts: 'Ordered Products',
      subtotal: 'Subtotal',
    },
  },
  
  // Arabic
  ar: {
    nav: {
      home: 'الرئيسية',
      collections: 'المجموعات',
      shopAll: 'عرض الكل',
      skincare: 'العناية بالبشرة',
      savon: 'صابون',
      shampo: 'شامبو',
      bomada: 'بومادا',
      oil: 'زيوت',
      packs: 'مجموعات هدايا',
      ourStory: 'قصتنا',
      journal: 'المدونة',
      contact: 'اتصل بنا',
    },
    home: {
      heroTitle: 'الطبيعة تلتقي بالعلم',
      heroSubtitle: 'اكتشف القوة التحويلية للنباتات البرية. رفاهية مستدامة للممارس الواعي.',
      shopCollection: 'تسوق المجموعة',
      ourPhilosophy: 'فلسفتنا',
      vegan: '100% نباتي',
      cleanFormulas: 'تركيبات نظيفة',
      ethicallySourced: 'مصادر أخلاقية',
      curatedForYou: 'منتقاة لك',
      theEssentials: 'الأساسيات',
      viewAllProducts: 'عرض جميع المنتجات',
      ritualOfCalm: 'طقوس الهدوء',
      ritualDescription: 'مقشر الخيزران والأرز ليس مجرد عناية بالبشرة - إنه زر إعادة ضبط لعقلك وجسمك.',
      discoverRitual: 'اكتشف الطقوس',
      morningRadiance: 'إشراقة الصباح',
      morningDescription: 'ابدأ يومك بمصل فيتامين سي. مزيج قوي من مستخلصات الحمضيات العضوية.',
      shopSerums: 'تسوق الأمصال',
      justArrived: 'وصل حديثاً',
      freshFromLab: 'طازج من المختبر',
      joinCommunity: 'انضم إلى مجتمعنا من محبي الجمال الواعي.',
    },
    product: {
      reviews: 'تقييمات',
      total: 'المجموع',
      addToCart: 'أضف إلى السلة',
      orderViaWhatsApp: 'اطلب عبر واتساب',
      organic: '100% عضوي',
      organicDesc: 'من مزارع مستدامة حول العالم.',
      dermatologistTested: 'مختبر من قبل أطباء الجلد',
      dermatologistDesc: 'آمن للبشرة الحساسة.',
      freeShipping: 'شحن مجاني',
      freeShippingDesc: 'على جميع الطلبات فوق 50 دولار.',
      productDescription: 'تركيبة فاخرة مصممة للتناغم مع إيقاع بشرتك الطبيعي. غنية بالمكونات النباتية النشطة ومضادات الأكسدة.',
    },
    cart: {
      yourCart: 'سلتك',
      cartEmpty: 'سلتك فارغة',
      cartEmptyDesc: 'يبدو أنك لم تضف أي طقوس بعد.',
      continueShopping: 'متابعة التسوق',
      orderSummary: 'ملخص الطلب',
      subtotal: 'المجموع الفرعي',
      shipping: 'الشحن',
      free: 'مجاني',
      total: 'المجموع',
      orderViaWhatsApp: 'اطلب عبر واتساب',
    },
    shop: {
      all: 'الكل',
      searchPlaceholder: 'ابحث عن المنتجات...',
      noProducts: 'لم يتم العثور على منتجات',
      tryDifferent: 'جرب فلاتر أو مصطلحات بحث مختلفة.',
    },
    footer: {
      aboutUs: 'من نحن',
      ourStory: 'قصتنا',
      sustainability: 'الاستدامة',
      careers: 'الوظائف',
      customerCare: 'خدمة العملاء',
      contactUs: 'اتصل بنا',
      shipping: 'الشحن',
      returns: 'المرتجعات',
      faq: 'الأسئلة الشائعة',
      followUs: 'تابعنا',
      newsletter: 'النشرة الإخبارية',
      newsletterDesc: 'احصل على آخر الأخبار والعروض الحصرية.',
      emailPlaceholder: 'بريدك الإلكتروني',
      subscribe: 'اشترك',
      rights: 'جميع الحقوق محفوظة.',
    },
    whatsapp: {
      newOrder: 'طلب جديد - Naturvibe',
      product: 'المنتج',
      category: 'الفئة',
      unitPrice: 'السعر للوحدة',
      quantity: 'الكمية',
      totalPrice: 'السعر الإجمالي',
      orderMessage: 'أرغب في طلب هذا المنتج. شكراً!',
      orderedProducts: 'المنتجات المطلوبة',
      subtotal: 'المجموع الفرعي',
    },
  },
};
