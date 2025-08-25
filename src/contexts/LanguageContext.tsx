"use client";

import React, { createContext, useContext, useState, useEffect } from 'react';

type Language = 'tr' | 'en';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
  translations: typeof translations[Language];
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

// Translation data
const translations = {
  tr: {
    // Header
    header: {
      home: 'Ana Sayfa',
      about: 'Hakkımızda',
      products: 'Ürünlerimiz',
      services: 'Hizmetlerimiz',
      contact: 'İletişim',
      blog: 'Blog',
      workingHours: 'Pazartesi - Cuma: 08:00 - 18:00',
      getQuote: 'Teklif Al',
      whatsappMessage: 'Merhaba, serigrafi makinesi hakkında bilgi almak istiyorum.',
      goToCategory: 'Kategoriye git',
      viewAllProducts: 'Tüm Ürünleri Gör'
    },
    'nav.home': 'Ana Sayfa',
    'nav.about': 'Hakkımızda',
    'nav.products': 'Ürünlerimiz',
    'nav.services': 'Hizmetlerimiz',
    'nav.contact': 'İletişim',
    
    // Hero Section
    'hero.title': 'Serigrafi Makineleri ve Ekipmanları',
    'hero.subtitle': '45 yıllık deneyimimizle serigrafi sektöründe lider konumdayız. Kaliteli makineler ve güvenilir hizmet.',
    'hero.cta': 'Ürünlerimizi İnceleyin',
    
    // Featured Products
    'featured.title': 'Öne Çıkan Ürünlerimiz',
    'featured.subtitle': 'En popüler serigrafi makineleri ve ekipmanları',
    
    // Product Card
    'product.viewDetails': 'Detayları Görüntüle',
    'product.whatsapp': 'WhatsApp ile İletişim',
    
    // Footer
    'footer.company': 'Şirket',
    'footer.products': 'Ürünler',
    'footer.services': 'Hizmetler',
    'footer.contact': 'İletişim',
    'footer.address': 'Adres',
    'footer.phone': 'Telefon',
    'footer.email': 'E-posta',
    'footer.rights': 'Tüm hakları saklıdır.',
    
    // Home Page
    home: {
      whyTitle: 'Neden OkanGökhan?',
      whySubtitle: '45 yılı aşkın deneyimimizle serigrafi sektörünün güvenilir ortağı olarak kaliteli ve yenilikçi çözümler sunuyoruz.',
      featuredTitle: 'Öne Çıkan Ürünlerimiz',
      featuredSubtitle: 'Her ihtiyaca uygun serigrafi makineleri ve ekipmanları ile üretiminizi bir üst seviyeye taşıyın.',
      viewAllProducts: 'Tüm Ürünleri Gör',
      aboutTitle: 'OkanGökhan Serigrafi Makineleri',
      aboutText1: '1980 yılında İstanbul\'da kurulan firmamız, serigrafi baskı makinaları, kurutma rafları, serigrafi kalıpları ve boyalarını yüksek kalitede üretmek Türkiye ve Dünya piyasasına pazarlamak üzerine faaliyet göstermektedir.',
      aboutText2: '45 yıllık tecrübesi ve deneyimleri ile serigraf piyasasında A kalite, dayanıklı, gayet kolay ve anlaşılır ürünleri, bünyesinde barındırdığı deneyimli ve uzman çalışma arkadaşlarıyla serigraf piyasasında daima 1 numara, en çok tavsiye edilen ve sevilen bir firma olmuştur.',
      moreInfo: 'Daha Fazla Bilgi',
      getInTouch: 'İletişime Geç',
      experience: '45+ Yıllık Deneyim',
      experienceDesc: 'Serigrafi sektöründe lider',
      customers: '1000+ Mutlu Müşteri',
      customersDesc: 'Türkiye ve yurtdışında',
      quality: 'A Kalite Üretim',
      qualityDesc: 'En yüksek standartlarda',
      ctaTitle: 'Size Özel Serigrafi Çözümleri',
      ctaSubtitle: '45 yıllık deneyimimizle ihtiyaçlarınıza uygun en iyi serigrafi makinelerini sunalım.',
      getQuote: 'Teklif Al',
      contact: 'İletişime Geç',
      qualityProduction: 'Kaliteli Üretim',
      qualityProductionDesc: 'A kalite, dayanıklı ve anlaşılır ürünler ile en yüksek kalite standartlarında üretim',
      experiencedTeam: 'Deneyimli Ekip',
      experiencedTeamDesc: '45+ yıllık deneyime sahip uzman mühendislik ekibi',
      fastDelivery: 'Hızlı Teslimat',
      fastDeliveryDesc: 'Anında Stok Teslim',
      warranty: 'Garanti',
      warrantyDesc: 'Tüm ürünlerimiz 2 yıl garanti kapsamında'
    },
    
    // Products Page
    products: {
      title: 'Ürünlerimiz',
      subtitle: '45 yıllık deneyimimizle ürettiğimiz kaliteli serigrafi makineleri ve ekipmanları',
      allCategories: 'Tüm Kategoriler',
      printingMachines: 'Baskı Makineleri',
      dryingRacks: 'Kurutma Rafları',
      screenPrintingPaints: 'Serigrafi Boyaları',
      printingStencils: 'Baskı Kalıpları',
      auxiliaryMaterials: 'Serigrafi Yardımcı Malzemeleri',
      spareParts: 'Yedek Parçalar',
      searchPlaceholder: 'Ürün ara...',
      noProductsFound: 'Ürün bulunamadı',
      noProductsMessage: 'Arama kriterlerinize uygun ürün bulunamadı.',
      getQuote: 'Teklif Al',
      viewDetails: 'Detayları Gör'
    },
    
    // Common
    'common.loading': 'Yükleniyor...',
    'common.error': 'Bir hata oluştu',
    'common.tryAgain': 'Tekrar Deneyin',
  },
  en: {
    // Header
    header: {
      home: 'Home',
      about: 'About Us',
      products: 'Our Products',
      services: 'Our Services',
      contact: 'Contact',
      blog: 'Blog',
      workingHours: 'Monday - Friday: 08:00 - 18:00',
      getQuote: 'Get Quote',
      whatsappMessage: 'Hello, I would like to get information about screen printing machines.',
      goToCategory: 'Go to category',
      viewAllProducts: 'View All Products'
    },
    'nav.home': 'Home',
    'nav.about': 'About Us',
    'nav.products': 'Our Products',
    'nav.services': 'Our Services',
    'nav.contact': 'Contact',
    
    // Hero Section
    'hero.title': 'Screen Printing Machines and Equipment',
    'hero.subtitle': 'With 45 years of experience, we are the leader in the screen printing industry. Quality machines and reliable service.',
    'hero.cta': 'Explore Our Products',
    
    // Featured Products
    'featured.title': 'Featured Products',
    'featured.subtitle': 'Most popular screen printing machines and equipment',
    
    // Product Card
    'product.viewDetails': 'View Details',
    'product.whatsapp': 'Contact via WhatsApp',
    
    // Footer
    'footer.company': 'Company',
    'footer.products': 'Products',
    'footer.services': 'Services',
    'footer.contact': 'Contact',
    'footer.address': 'Address',
    'footer.phone': 'Phone',
    'footer.email': 'Email',
    'footer.rights': 'All rights reserved.',
    
    // Home Page
    home: {
      whyTitle: 'Why OkanGökhan?',
      whySubtitle: 'With over 45 years of experience, we offer quality and innovative solutions as a reliable partner in the screen printing industry.',
      featuredTitle: 'Featured Products',
      featuredSubtitle: 'Take your production to the next level with screen printing machines and equipment suitable for every need.',
      viewAllProducts: 'View All Products',
      aboutTitle: 'OkanGökhan Screen Printing Machines',
      aboutText1: 'Our company, established in Istanbul in 1980, operates on producing high-quality screen printing machines, drying racks, screen printing stencils and paints and marketing them to Turkey and world markets.',
      aboutText2: 'With 45 years of experience and expertise, it has always been the number 1, most recommended and beloved company in the screen printing market with its A-quality, durable, very easy and understandable products, and experienced and expert colleagues.',
      moreInfo: 'More Information',
      getInTouch: 'Get In Touch',
      experience: '45+ Years Experience',
      experienceDesc: 'Leader in screen printing industry',
      customers: '1000+ Happy Customers',
      customersDesc: 'In Turkey and abroad',
      quality: 'A Quality Production',
      qualityDesc: 'At the highest standards',
      ctaTitle: 'Custom Screen Printing Solutions for You',
      ctaSubtitle: 'Let us offer you the best screen printing machines suitable for your needs with our 45 years of experience.',
      getQuote: 'Get Quote',
      contact: 'Contact Us',
      qualityProduction: 'Quality Production',
      qualityProductionDesc: 'Production at the highest quality standards with A-quality, durable and understandable products',
      experiencedTeam: 'Experienced Team',
      experiencedTeamDesc: 'Expert engineering team with 45+ years of experience',
      fastDelivery: 'Fast Delivery',
      fastDeliveryDesc: 'Immediate Stock Delivery',
      warranty: 'Warranty',
      warrantyDesc: 'All our products are covered by 2-year warranty'
    },
    
    // Products Page
    products: {
      title: 'Our Products',
      subtitle: 'Quality screen printing machines and equipment produced with our 45 years of experience',
      allCategories: 'All Categories',
      printingMachines: 'Printing Machines',
      dryingRacks: 'Drying Racks',
      screenPrintingPaints: 'Screen Printing Paints',
      printingStencils: 'Printing Stencils',
      auxiliaryMaterials: 'Screen Printing Auxiliary Materials',
      spareParts: 'Spare Parts',
      searchPlaceholder: 'Search products...',
      noProductsFound: 'No products found',
      noProductsMessage: 'No products found matching your search criteria.',
      getQuote: 'Get Quote',
      viewDetails: 'View Details'
    },
    
    // Common
    'common.loading': 'Loading...',
    'common.error': 'An error occurred',
    'common.tryAgain': 'Try Again',
  }
};

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguage] = useState<Language>('tr');

  // Load language from localStorage on mount
  useEffect(() => {
    const savedLanguage = localStorage.getItem('language') as Language;
    if (savedLanguage && (savedLanguage === 'tr' || savedLanguage === 'en')) {
      setLanguage(savedLanguage);
    }
  }, []);

  // Save language to localStorage when it changes
  useEffect(() => {
    localStorage.setItem('language', language);
  }, [language]);

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations[typeof language]] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t, translations: translations[language] }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}