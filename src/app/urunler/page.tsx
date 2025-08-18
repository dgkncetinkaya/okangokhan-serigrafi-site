"use client";

import { useState, useEffect, Suspense } from "react";
import { motion } from "framer-motion";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Search, ArrowRight, MessageCircle } from "lucide-react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { useRouter } from "next/navigation";

const ProductsPageContent = () => {
  const searchParams = useSearchParams();
  const router = useRouter();
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");


  // URL parametrelerini oku ve kategoriyi ayarla
  useEffect(() => {
    const categoryFromUrl = searchParams.get('category');
    if (categoryFromUrl) {
      setSelectedCategory(categoryFromUrl);
    }
  }, [searchParams]);

  // Kategori değiştirme fonksiyonu
  const handleCategoryChange = (categoryId: string) => {
    setSelectedCategory(categoryId);
    if (categoryId === "all") {
      router.push("/urunler");
    } else {
      router.push(`/urunler?category=${categoryId}`);
    }
  };

  const categories = [
    { id: "all", name: "Tüm Kategoriler" },
    { id: "baski-makineleri", name: "Baskı Makineleri" },
    { id: "kurutma-raflari", name: "Kurutma Rafları" },
    { id: "serigrafi-boyalari", name: "Serigrafi Boyaları" },
    { id: "baski-kaliplari", name: "Baskı Kalıpları" },
    { id: "yardimci-malzemeler", name: "Serigrafi Yardımcı Malzemeleri" },
    { id: "yedek-parcalar", name: "Yedek Parçalar" }
  ];

  const products = [
    // Global Sıralama - İlk 4 ürün özel sıralama
    // 1. Manuel Vakumlu Baskı Makinesi - İLK SIRADA
    {
      id: "1",
      name: "Serigrafi Vakumlu Manuel Baskı Makinesi",
      description: "70×100 tezgah alanı ve 50×70 vakumlu alan ile yüksek hassasiyetli manuel baskı makinesi",
      category: "baski-makineleri",
      categoryName: "Baskı Makineleri",
      features: [
        "Tezgah Alanı: 70×100 cm",
        "Vakumlu Alan: 50×70 cm",
        "Tabla: 3mm Eloksallı Alüminyum Plaka"
      ],
      image: "/images/manuel-vakumlu-makinesi/makine1.jpeg"
    },
    // 2. 60x110 Kurutma Rafı - İKİNCİ SIRADA
    {
      id: "2",
      name: "60x110 Kurutma Rafı",
      description: "60×110 cm, 50 raflı, 4 tekerlekli, fırın boyalı kurutma rafı",
      category: "kurutma-raflari",
      categoryName: "Kurutma Rafları",
      features: [
        "Ölçüler: 60×110 cm",
        "Raf Sayısı: 50",
        "4 Tekerlek / Fırın Boyalı"
      ],
      image: "/images/kurutma-raflari/60x110-kurutma-rafi.jpg"
    },
    // 3. Tişört Baskı Tezgahı - ÜÇÜNCÜ SIRADA
    {
      id: "9",
      name: "Tişört Baskı Tezgahı",
      description: "50x70 MDF tek renk tişört baskı tezgahı – profesyonel serigrafi makinesi",
      category: "baski-makineleri",
      categoryName: "Baskı Makineleri",
      features: [
        "50x70 cm MDF baskı yüzeyi",
        "Ayarlanabilir baskı mekanizması",
        "Sağlam metal gövde"
      ],
      image: "/images/tisort-baski-tezgahi/tisort-tezgahi.jpg"
    },
    // 4. 4 Renk 1 İstasyonlu Serigrafi Baskı Tezgahı - DÖRDÜNCÜ SIRADA
    {
      id: "5",
      name: "4 Renk 1 İstasyonlu Serigrafi Baskı Tezgahı",
      description: "40×60 MDF tabla, 4 kafa dönebilir sabit istasyon; çok renkli hızlı baskı",
      category: "baski-makineleri",
      categoryName: "Baskı Makineleri",
      features: [
        "Tabla: 40×60 MDF",
        "4 kafa / 1 sabit istasyon",
        "Yay & gergi ayarlı"
      ],
      image: "/images/4-renk-1-istasyonlu/tezgah.jpg"
    },

    // === BASKI MAKİNELERİ DEVAM ===
    {
      id: "6",
      name: "Manuel Vakumlu Baskı Makinesi - 100x200",
      description: "100x200cm baskı alanına sahip büyük format manuel vakumlu serigrafi makinesi",
      category: "baski-makineleri",
      categoryName: "Baskı Makineleri",
      features: ["100x200cm baskı alanı", "Güçlü vakum sistemi", "Endüstriyel kullanım"],
      image: "/images/manuel-vakumlu-100x200/makine-100x200.jpg"
    },
    {
      id: "4",
      name: "Manuel Vakumlu Baskı Makinesi - 70x200",
      description: "70x200cm baskı alanına sahip manuel vakumlu serigrafi makinesi",
      category: "baski-makineleri",
      categoryName: "Baskı Makineleri",
      features: ["70x200cm baskı alanı", "Vakum sistemi", "Hassas ayar mekanizması"],
      image: "/images/manuel-vakumlu-70x200/makine-70x200.jpg"
    },
    {
      id: "7",
      name: "Serigrafi Masaüstü Baskı Aparatı",
      description: "Masaüstü kullanım için tasarlanmış serigrafi baskı aparatı",
      category: "baski-makineleri",
      categoryName: "Baskı Makineleri",
      features: ["Masaüstü uyumlu", "Kompakt tasarım", "Kolay montaj"],
      image: "/images/serigrafi-masaustu-aparat/masaustu-aparat.jpg"
    },
    {
      id: "8",
      name: "Serigrafi Ayaklı Baskı Aparatı",
      description: "Ayaklı tasarıma sahip profesyonel serigrafi baskı aparatı",
      category: "baski-makineleri",
      categoryName: "Baskı Makineleri",
      features: ["Ayaklı tasarım", "Yüksek ayarlanabilir", "Profesyonel kullanım"],
      image: "/images/serigrafi-ayakli-aparat/ayakli-aparat.jpg"
    },
    {
      id: "10",
      name: "Manuel Vakumlu Baskı Makinesi - 80x250",
      description: "80x250cm baskı alanına sahip uzun format manuel vakumlu serigrafi makinesi",
      category: "baski-makineleri",
      categoryName: "Baskı Makineleri",
      features: ["80x250cm baskı alanı", "Uzun format baskı", "Stabil vakum sistemi"],
      image: "/images/manuel-vakumlu-80x250/makine-80x250.jpg"
    },

    // === KURUTMA RAFLARI ===
    {
      id: "12",
      name: "40x60 Kurutma Rafı",
      description: "40×60 cm, 4 tekerlekli, fırın boyalı kurutma rafı",
      category: "kurutma-raflari",
      categoryName: "Kurutma Rafları",
      features: [
        "Ölçüler: 40×60 cm",
        "4 tekerlek",
        "Fırın boyalı"
      ],
      image: "/images/40x60-kurutma-rafi/foto1.jpg"
    },
    {
      id: "3",
      name: "50x70 Kurutma Rafı",
      description: "50×70 cm, 4 tekerlekli, fırın boyalı kurutma rafı",
      category: "kurutma-raflari",
      categoryName: "Kurutma Rafları",
      features: [
        "Ölçüler: 50×70 cm",
        "4 tekerlek",
        "Fırın boyalı"
      ],
      image: "/images/50x70-kurutma-rafi/foto1.jpg"
    },
    {
      id: "11",
      name: "70x100 Kurutma Rafı",
      description: "70×100 cm, 4 tekerlekli, fırın boyalı endüstriyel raf",
      category: "kurutma-raflari",
      categoryName: "Kurutma Rafları",
      features: [
        "Ölçüler: 70×100 cm",
        "4 tekerlek",
        "Fırın boyalı"
      ],
      image: "/images/70x100-kurutma-rafi/foto1.jpg"
    },

    // === SERİGRAFİ BOYALARI ===
    {
      id: "13",
      name: "PVC Boya",
      description: "PVC malzemeler için özel formül serigrafi boyası",
      category: "serigrafi-boyalari",
      categoryName: "Serigrafi Boyaları",
      features: ["Yüksek örtücülük", "PVC uyumlu", "Hızlı kuruma"],
      image: "/images/pvc-boya/foto1.jpg"
    },
    {
      id: "14",
      name: "Tekstil Boyaları",
      description: "Tekstil ürünleri için özel formül serigrafi boyaları",
      category: "serigrafi-boyalari",
      categoryName: "Serigrafi Boyaları",
      features: ["Tekstil uyumlu", "Yıkamaya dayanıklı", "Çeşitli renkler"],
      image: "/images/tekstil-boyalari/foto1.jpg"
    },

    // === BASKI KALIPLARI ===
    {
      id: "15",
      name: "Alüminyum Kalıp",
      description: "Yüksek kaliteli alüminyum serigrafi kalıbı, hafif ve dayanıklı",
      category: "baski-kaliplari",
      categoryName: "Baskı Kalıpları",
      features: [
        "Hafif alüminyum yapı",
        "Yüksek hassasiyet",
        "Uzun ömürlü kullanım",
        "Korozyona dayanıklı",
        "Çeşitli boyutlarda üretim",
        "Profesyonel kalite"
      ],
      image: "/images/aluminyum-kalip/foto1.jpg"
    },
    {
      id: "16",
      name: "Metal Kalıp",
      description: "Sağlam metal yapılı serigrafi kalıbı, endüstriyel kullanım için ideal",
      category: "baski-kaliplari",
      categoryName: "Baskı Kalıpları",
      features: [
        "Sağlam metal yapı",
        "Endüstriyel dayanıklılık",
        "Yüksek basınca dayanım",
        "Uzun kullanım ömrü",
        "Çeşitli boyutlarda üretim",
        "Profesyonel sonuçlar"
      ],
      image: "/images/metal-kalip/foto1.jpg"
    },
    {
      id: "22",
      name: "Alüminyum Ragle",
      description: "Hafif ve dayanıklı alüminyum serigrafi raglesi",
      category: "yardimci-malzemeler",
      categoryName: "Serigrafi Yardımcı Malzemeleri",
      features: [
        "Hafif alüminyum yapı",
        "Korozyona dayanıklı",
        "Hassas kenar",
        "Uzun ömürlü",
        "Çeşitli boyutlar",
        "Profesyonel kullanım"
      ],
      image: "/images/aluminyum-ragle/foto1.jpg"
    },

    {
      id: "32",
      name: "Emisyon Çekme Küreği",
      description: "Emülsiyon uygulama ve düzeltme için özel kürek",
      category: "yardimci-malzemeler",
      categoryName: "Serigrafi Yardımcı Malzemeleri",
      features: [
        "Emülsiyon uygulaması",
        "Hassas kontrol",
        "Dayanıklı malzeme",
        "Ergonomik tasarım",
        "Kolay temizlik",
        "Profesyonel kullanım"
      ],
      image: "/images/emisyon-cekme-kuregi/foto1.jpg"
    },
    {
      id: "13",
      name: "PVC Boya",
      description: "PVC malzemeler için özel formül serigrafi boyası",
      category: "serigrafi-boyalari",
      categoryName: "Serigrafi Boyaları",
      features: ["Yüksek örtücülük", "PVC uyumlu", "Hızlı kuruma"],
      image: "/images/pvc-boya/foto1.jpg"
    },
    {
      id: "20",
      name: "Ragle Lastiği",
      description: "Yedek ragle lastiği, çeşitli sertliklerde",
      category: "yardimci-malzemeler",
      categoryName: "Serigrafi Yardımcı Malzemeleri",
      features: [
        "Çeşitli sertlik seçenekleri",
        "Yüksek kalite kauçuk",
        "Kolay değişim",
        "Aşınmaya dayanıklı",
        "Hassas kenar kalitesi",
        "Ekonomik çözüm"
      ],
      image: "/images/ragle-lastigi/foto1.jpg"
    },

    {
      id: "28",
      name: "Mavi Emisyon",
      description: "Yüksek hassasiyetli mavi emülsiyon, detaylı işler için",
      category: "yardimci-malzemeler",
      categoryName: "Serigrafi Yardımcı Malzemeleri",
      features: [
        "Yüksek hassasiyet",
        "Mavi renk filtresi",
        "İnce detay çözünürlüğü",
        "Profesyonel kalite",
        "UV dayanımı",
        "Kolay kullanım"
      ],
      image: "/images/mavi-emisyon/foto1.jpg"
    },
    {
      id: "29",
      name: "Emülsiyon Sökücü Sıvı",
      description: "Kalıplardan emülsiyonu temizlemek için özel sıvı",
      category: "yardimci-malzemeler",
      categoryName: "Serigrafi Yardımcı Malzemeleri",
      features: [
        "Güçlü temizlik etkisi",
        "Hızlı çözme",
        "Kalıp dostu formül",
        "Kolay uygulama",
        "Ekonomik kullanım",
        "Güvenli formül"
      ],
      image: "/images/emulsiyon-sokucsu-sivi/foto1.jpg"
    },
    {
      id: "30",
      name: "Emülsiyon Sökücü Toz",
      description: "Toz formda emülsiyon sökücü, güçlü temizlik için",
      category: "yardimci-malzemeler",
      categoryName: "Serigrafi Yardımcı Malzemeleri",
      features: [
        "Toz formülasyon",
        "Güçlü temizlik",
        "Uzun raf ömrü",
        "Su ile karıştırılır",
        "Ekonomik kullanım",
        "Etkili çözme"
      ],
      image: "/images/emulsiyon-sokucsu-toz/foto1.jpg"
    },
    {
      id: "31",
      name: "Gölge Giderici",
      description: "Kalıp mesh'lerinde oluşan gölgeleri gideren özel çözüm",
      category: "yardimci-malzemeler",
      categoryName: "Serigrafi Yardımcı Malzemeleri",
      features: [
        "Gölge giderme",
        "Mesh temizliği",
        "Baskı kalitesi artırır",
        "Kolay uygulama",
        "Hızlı etki",
        "Mesh dostu"
      ],
      image: "/images/golge-giderici/foto1.jpg"
    },
    {
      id: "21",
      name: "Serigrafi Geciktirici",
      description: "Serigrafi boyalarının kuruma süresini uzatan geciktirici katkı maddesi",
      category: "yardimci-malzemeler",
      categoryName: "Serigrafi Yardımcı Malzemeleri",
      features: [
        "Kuruma süresini uzatır",
        "Çalışma zamanını artırır",
        "Boya viskozitesini düzenler",
        "Kolay karışım",
        "Ekonomik kullanım",
        "Profesyonel sonuçlar"
      ],
      image: "/images/serigrafi-geciktirici/foto1.jpg"
    },
    {
      id: "19",
      name: "Serigrafi İnceltici",
      description: "Serigrafi boyalarının viskozitesini ayarlamak için inceltici katkı maddesi",
      category: "yardimci-malzemeler",
      categoryName: "Serigrafi Yardımcı Malzemeleri",
      features: [
        "Boya viskozitesini düşürür",
        "Akıcılığı artırır",
        "İnce detaylarda kullanım",
        "Kolay karışım",
        "Renk değiştirmez",
        "Profesyonel kalite"
      ],
      image: "/images/serigrafi-inceltici/foto1.jpg"
    },
    {
      id: "27",
      name: "Su Bazlı Emisyon",
      description: "Çevre dostu su bazlı emülsiyon, kalıp hazırlama için",
      category: "yardimci-malzemeler",
      categoryName: "Serigrafi Yardımcı Malzemeleri",
      features: [
        "Su bazlı formül",
        "Çevre dostu",
        "Kolay uygulama",
        "Güçlü örtücülük",
        "Temiz temizlik",
        "Uzun raf ömrü"
      ],
      image: "/images/su-bazli-emisyon/foto1.jpg"
    },
    {
      id: "14",
      name: "Tekstil Boyaları",
      description: "Tekstil baskıları için özel serigrafi boyaları",
      category: "serigrafi-boyalari",
      categoryName: "Serigrafi Boyaları",
      features: ["Tekstil uyumlu", "Yumuşak dokunuş", "Canlı renkler"],
      image: "/images/tekstil-boyalari/foto1.jpg"
    },
    // Yedek Parçalar Kategorisi
    {
      id: "23",
      name: "100x30 Lastik Tekerlek",
      description: "Serigrafi makineleri için 100x30mm lastik tekerlek",
      category: "yedek-parcalar",
      categoryName: "Yedek Parçalar",
      features: [
        "100x30mm boyut",
        "Yüksek kalite lastik",
        "Sessiz hareket",
        "Aşınmaya dayanıklı",
        "Kolay montaj",
        "Çeşitli kullanım"
      ],
      image: "/images/100x30-lastik-tekerlek/foto1.jpg"
    },
    {
      id: "26",
      name: "Makine Vakum Motoru",
      description: "Serigrafi makineleri için güçlü vakum motoru",
      category: "yedek-parcalar",
      categoryName: "Yedek Parçalar",
      features: [
        "Güçlü emme kapasitesi",
        "Sessiz çalışma",
        "Uzun ömürlü motor",
        "Enerji tasarrufu",
        "Kolay montaj",
        "Düşük bakım"
      ],
      image: "/images/makine-vakum-motoru/foto1.jpg"
    },
    {
      id: "24",
      name: "2.5cm Köşe Lastiği",
      description: "2.5cm kalınlığında köşe lastiği, makine kenarları için",
      category: "yedek-parcalar",
      categoryName: "Yedek Parçalar",
      features: [
        "2.5cm kalınlık",
        "Esnek yapı",
        "Kolay kesim",
        "Uzun ömürlü",
        "Çeşitli renkler",
        "Yapışkan bantlı"
      ],
      image: "/images/25cm-kose-lastigi/foto1.jpg"
    },
    {
      id: "34",
      name: "Baskı Tezgahı Papuçları",
      description: "Baskı tezgahları için kaydırmaz papuç seti",
      category: "yedek-parcalar",
      categoryName: "Yedek Parçalar",
      features: [
        "Kaydırmaz taban",
        "Çeşitli boyutlar",
        "Dayanıklı kauçuk",
        "Kolay montaj",
        "Gürültü azaltır",
        "Set halinde"
      ],
      image: "/images/baski-tezgahi-papuclari/foto1.jpg"
    },
    {
      id: "25",
      name: "5cm Köşe Lastiği",
      description: "5cm kalınlığında köşe lastiği, ağır hizmet için",
      category: "yedek-parcalar",
      categoryName: "Yedek Parçalar",
      features: [
        "5cm kalınlık",
        "Ağır hizmet tipi",
        "Güçlü yapışma",
        "Korozyona dayanıklı",
        "Kolay uygulama",
        "Uzun ömürlü"
      ],
      image: "/images/5cm-kose-lastigi/foto1.jpg"
    },
    {
      id: "33",
      name: "Rayk Yay Çekme Yayı",
      description: "Rayk sistemleri için çekme yayı, hassas ayar için",
      category: "yedek-parcalar",
      categoryName: "Yedek Parçalar",
      features: [
        "Hassas yay sistemi",
        "Ayarlanabilir gerginlik",
        "Paslanmaz çelik",
        "Uzun ömürlü",
        "Kolay montaj",
        "Çeşitli boyutlar"
      ],
      image: "/images/rayk-yay-cekme-yayi/foto1.jpg"
    }
  ];

  // Yinelenen ürünleri id'ye göre temizle
  const uniqueProducts = products.filter((product, index, self) =>
    index === self.findIndex((p) => p.id === product.id)
  );

  // Filtreleme ve sıralama
  const filteredProducts = uniqueProducts.filter(product => {
    const matchesCategory = selectedCategory === "all" || product.category === selectedCategory;
    const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         product.description.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  // Sıralama - Array sırasını koru (Baskı Makineleri için özel sıralama yapıldı)
  const sortedProducts = [...filteredProducts]; // Sıralama devre dışı, array sırasını koru

  const handleWhatsAppClick = (productName: string) => {
    const message = `Merhaba, ${productName} ürünü hakkında bilgi almak istiyorum.`;
    const whatsappUrl = `https://wa.me/905425094758?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <div className="min-h-screen bg-muted">
      {/* Hero Section */}
      <section className="bg-foreground text-white py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Ürünlerimiz
            </h1>
            <p className="text-xl text-white/80 max-w-3xl mx-auto">
              45 yıllık deneyimimizle ürettiğimiz kaliteli serigrafi makineleri ve ekipmanları
            </p>
          </motion.div>
        </div>
      </section>

      {/* Filtreler */}
      <section className="py-8 bg-white border-b">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-4 items-center justify-between">
            {/* Kategori Filtreleri */}
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <Button
                  key={category.id}
                  variant={selectedCategory === category.id ? "default" : "outline"}
                  onClick={() => handleCategoryChange(category.id)}
                  className={selectedCategory === category.id ? "bg-primary hover:bg-primary/90" : ""}
                >
                  {category.name}
                </Button>
              ))}
            </div>

            {/* Arama ve Sıralama */}
            <div className="flex flex-col sm:flex-row gap-4 w-full lg:w-auto">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
                <Input
                  placeholder="Ürün ara..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10 w-full sm:w-64"
                />
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* Ürünler Grid */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          {sortedProducts.length === 0 ? (
            <div className="text-center py-12">
              <h3 className="text-xl font-semibold text-foreground mb-2">Ürün bulunamadı</h3>
              <p className="text-muted-foreground">Arama kriterlerinize uygun ürün bulunamadı.</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {sortedProducts.map((product, index) => (
                <motion.div
                  key={product.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  whileHover={{ y: -5 }}
                  className="group"
                >
                  <Card className="h-full overflow-hidden border-0 transition-all duration-500 rounded-3xl hover:shadow-lg hover:shadow-gray-200/50 flex flex-col bg-secondary">
                    {/* Ürün Görseli - Tıklanabilir */}
                    <div className="relative rounded-t-3xl overflow-hidden w-fit mx-auto bg-secondary">
                      <Link href={`/urunler/${product.id}`} className="block">
                        <motion.div
                          whileHover={{ scale: 1.02 }}
                          transition={{ duration: 0.3 }}
                          className="h-96 max-w-[280px] w-full flex items-center justify-center p-2 mx-auto cursor-pointer"
                        >
                          <img
                            src={product.image}
                            alt={product.name}
                            className="max-w-full max-h-full object-contain"
                          />
                        </motion.div>
                      </Link>

                      {/* Kategori Badge */}
                      <div className="absolute top-4 right-4">
                        <Badge variant="secondary" className="bg-white/90 backdrop-blur-sm text-foreground/80 px-3 py-1 rounded-full text-xs font-medium shadow-sm border-0">
                          {product.categoryName}
                        </Badge>
                      </div>
                    </div>

                    <div className="flex-1 flex flex-col">
                      {/* Ürün Bilgileri */}
                      <CardHeader className="pb-2 px-4 pt-3 bg-secondary">
                        <div className="flex items-start justify-between">
                          <div className="flex-1">
                            {/* Ürün İsmi - Tıklanabilir */}
                            <Link href={`/urunler/${product.id}`}>
                              <CardTitle className="text-lg font-semibold text-foreground line-clamp-2 hover:text-primary transition-colors cursor-pointer mb-1">
                                {product.name}
                              </CardTitle>
                            </Link>
                            <CardDescription className="text-sm text-muted-foreground line-clamp-2 leading-relaxed">
                              {product.description}
                            </CardDescription>
                          </div>
                        </div>
                      </CardHeader>

                      {/* Özellikler */}
                      <CardContent className="pb-2 px-4 bg-secondary">
                        <div className="space-y-1.5">
                          {product.features.slice(0, 3).map((feature, index) => (
                            <motion.div
                              key={index}
                              initial={{ opacity: 0, x: -10 }}
                              whileInView={{ opacity: 1, x: 0 }}
                              transition={{ duration: 0.3, delay: index * 0.1 }}
                              className="flex items-center space-x-3 text-sm text-muted-foreground"
                            >
                              <div className="w-1.5 h-1.5 bg-primary rounded-full flex-shrink-0" />
                              <span className="leading-relaxed">{feature}</span>
                            </motion.div>
                          ))}
                        </div>
                      </CardContent>
                    </div>

                    {/* Footer */}
                    <CardFooter className="pt-0 px-4 pb-4 mt-auto bg-secondary">
                      <div className="w-full space-y-2">
                        <Button 
                          className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-medium py-2 rounded-xl transition-all duration-300 shadow-sm hover:shadow-md" 
                          onClick={() => handleWhatsAppClick(product.name)}
                        >
                          <MessageCircle className="mr-2 h-4 w-4" />
                          Teklif Al
                        </Button>
                        <Button 
                          className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-medium py-2 rounded-xl transition-all duration-300 shadow-sm hover:shadow-md" 
                          asChild
                        >
                          <Link href={`/urunler/${product.id}`}>
                            Detayları Gör
                            <ArrowRight className="ml-2 h-4 w-4" />
                          </Link>
                        </Button>
                      </div>
                    </CardFooter>
                  </Card>
                </motion.div>
              ))}
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default function ProductsPage() {
  return (
    <Suspense fallback={<div className="min-h-screen bg-muted" />}> 
      <ProductsPageContent />
    </Suspense>
  );
} 