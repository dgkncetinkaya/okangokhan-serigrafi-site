"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { ArrowRight, Search, Filter, Star, MessageCircle } from "lucide-react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { useRouter } from "next/navigation";

const ProductsPage = () => {
  const searchParams = useSearchParams();
  const router = useRouter();
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [sortBy, setSortBy] = useState("name");

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
    // Manuel Vakumlu Baskı Makinesi (Ana ürün) - İlk sırada
    {
      id: "1",
      name: "Manuel Vakumlu Baskı Makinesi",
      description: "Küçük ve orta ölçekli işletmeler için ideal manuel serigrafi makinesi",
      category: "baski-makineleri",
      categoryName: "Baskı Makineleri",
      features: ["Maksimum 50x70cm baskı alanı", "Hassas ayar sistemi", "Dayanıklı alüminyum şase"],
      rating: 4.8,
      isNew: true,
      isPopular: true,
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=400&h=300&fit=crop"
    },
    // 60x110 Kurutma Rafı - İkinci sırada
    {
      id: "2",
      name: "60x110 Kurutma Rafı",
      description: "60x110cm boyutlarında profesyonel kurutma rafı",
      category: "kurutma-raflari",
      categoryName: "Kurutma Rafları",
      features: ["60x110cm boyut", "Dayanıklı çelik", "Kolay taşıma"],
      rating: 4.6,
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=400&h=300&fit=crop"
    },
    // 50x70 Kurutma Rafı - Üçüncü sırada
    {
      id: "3",
      name: "50x70 Kurutma Rafı",
      description: "50x70cm boyutlarında orta format kurutma rafı",
      category: "kurutma-raflari",
      categoryName: "Kurutma Rafları",
      features: ["50x70cm boyut", "Orta format", "Pratik kullanım"],
      rating: 4.5,
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=400&h=300&fit=crop"
    },
    // Baskı Makineleri Kategorisi - İstenen Sıralama
    {
      id: "4",
      name: "Manuel Vakumlu Baskı Makinesi - 70x200",
      description: "70x200cm baskı alanına sahip manuel vakumlu serigrafi makinesi",
      category: "baski-makineleri",
      categoryName: "Baskı Makineleri",
      features: ["70x200cm baskı alanı", "Vakum sistemi", "Hassas ayar mekanizması"],
      rating: 4.8,
      isPopular: true,
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=400&h=300&fit=crop"
    },
    {
      id: "5",
      name: "4 Renk 1 İstasyonlu Serigrafi Baskı Tezgahı",
      description: "4 renk baskı kapasitesine sahip tek istasyonlu serigrafi tezgahı",
      category: "baski-makineleri",
      categoryName: "Baskı Makineleri",
      features: ["4 renk baskı", "Tek istasyon", "Çok renkli baskı"],
      rating: 4.8,
      isNew: true,
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=400&h=300&fit=crop"
    },
    {
      id: "6",
      name: "Manuel Vakumlu Baskı Makinesi - 100x200",
      description: "100x200cm baskı alanına sahip büyük format manuel vakumlu serigrafi makinesi",
      category: "baski-makineleri",
      categoryName: "Baskı Makineleri",
      features: ["100x200cm baskı alanı", "Güçlü vakum sistemi", "Endüstriyel kullanım"],
      rating: 4.9,
      isPopular: true,
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=400&h=300&fit=crop"
    },
    {
      id: "7",
      name: "Serigrafi Masaüstü Baskı Aparatı",
      description: "Masaüstü kullanım için tasarlanmış serigrafi baskı aparatı",
      category: "baski-makineleri",
      categoryName: "Baskı Makineleri",
      features: ["Masaüstü uyumlu", "Kompakt tasarım", "Kolay montaj"],
      rating: 4.5,
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=400&h=300&fit=crop"
    },
    {
      id: "8",
      name: "Serigrafi Ayaklı Baskı Aparatı",
      description: "Ayaklı tasarıma sahip profesyonel serigrafi baskı aparatı",
      category: "baski-makineleri",
      categoryName: "Baskı Makineleri",
      features: ["Ayaklı tasarım", "Yüksek ayarlanabilir", "Profesyonel kullanım"],
      rating: 4.7,
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=400&h=300&fit=crop"
    },
    {
      id: "9",
      name: "Masaüstü Yarı Otomatik Makine",
      description: "Masaüstü kullanım için yarı otomatik serigrafi makinesi",
      category: "baski-makineleri",
      categoryName: "Baskı Makineleri",
      features: ["Yarı otomatik", "Masaüstü uyumlu", "Verimli baskı"],
      rating: 4.9,
      isPopular: true,
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=400&h=300&fit=crop"
    },
    {
      id: "10",
      name: "Manuel Vakumlu Baskı Makinesi - 80x250",
      description: "80x250cm baskı alanına sahip uzun format manuel vakumlu serigrafi makinesi",
      category: "baski-makineleri",
      categoryName: "Baskı Makineleri",
      features: ["80x250cm baskı alanı", "Uzun format baskı", "Stabil vakum sistemi"],
      rating: 4.7,
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=400&h=300&fit=crop"
    },
    // Kurutma Rafları Kategorisi
    {
      id: "11",
      name: "70x100 Kurutma Rafı",
      description: "70x100cm boyutlarında büyük format kurutma rafı",
      category: "kurutma-raflari",
      categoryName: "Kurutma Rafları",
      features: ["70x100cm boyut", "Büyük format", "Stabil yapı"],
      rating: 4.7,
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=400&h=300&fit=crop"
    },
    {
      id: "12",
      name: "40x60 Kurutma Rafı",
      description: "40x60cm boyutlarında küçük format kurutma rafı",
      category: "kurutma-raflari",
      categoryName: "Kurutma Rafları",
      features: ["40x60cm boyut", "Küçük format", "Kompakt tasarım"],
      rating: 4.4,
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=400&h=300&fit=crop"
    },
    // Serigrafi Boyaları Kategorisi
    {
      id: "13",
      name: "PVC Boya",
      description: "PVC malzemeler için özel formül serigrafi boyası",
      category: "serigrafi-boyalari",
      categoryName: "Serigrafi Boyaları",
      features: ["Yüksek örtücülük", "PVC uyumlu", "Hızlı kuruma"],
      rating: 4.7,
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=400&h=300&fit=crop"
    },
    {
      id: "14",
      name: "Tekstil Boyaları",
      description: "Tekstil baskıları için özel serigrafi boyaları",
      category: "serigrafi-boyalari",
      categoryName: "Serigrafi Boyaları",
      features: ["Tekstil uyumlu", "Yumuşak dokunuş", "Canlı renkler"],
      rating: 4.7,
      isPopular: true,
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=400&h=300&fit=crop"
    },
    // Baskı Kalıpları Kategorisi
    {
      id: "15",
      name: "40x60 Metal Kalıp",
      description: "40x60cm boyutlarında dayanıklı metal serigrafi kalıbı",
      category: "baski-kaliplari",
      categoryName: "Baskı Kalıpları",
      features: ["40x60cm boyut", "Metal yapı", "Uzun ömürlü"],
      rating: 4.6,
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=400&h=300&fit=crop"
    },
    {
      id: "16",
      name: "50x70 Metal Kalıp",
      description: "50x70cm boyutlarında büyük format metal serigrafi kalıbı",
      category: "baski-kaliplari",
      categoryName: "Baskı Kalıpları",
      features: ["50x70cm boyut", "Metal yapı", "Büyük format"],
      rating: 4.7,
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=400&h=300&fit=crop"
    },
    {
      id: "17",
      name: "40x60 Alüminyum Kalıp",
      description: "40x60cm boyutlarında hafif alüminyum serigrafi kalıbı",
      category: "baski-kaliplari",
      categoryName: "Baskı Kalıpları",
      features: ["40x60cm boyut", "Alüminyum yapı", "Hafif tasarım"],
      rating: 4.8,
      isNew: true,
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=400&h=300&fit=crop"
    },
    {
      id: "18",
      name: "50x70 Alüminyum Kalıp",
      description: "50x70cm boyutlarında büyük format alüminyum serigrafi kalıbı",
      category: "baski-kaliplari",
      categoryName: "Baskı Kalıpları",
      features: ["50x70cm boyut", "Alüminyum yapı", "Büyük format"],
      rating: 4.9,
      isNew: true,
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=400&h=300&fit=crop"
    },
    // Serigrafi Yardımcı Malzemeleri Kategorisi
    {
      id: "19",
      name: "Rakel",
      description: "Profesyonel serigrafi baskı rakeli - çeşitli sertliklerde",
      category: "yardimci-malzemeler",
      categoryName: "Serigrafi Yardımcı Malzemeleri",
      features: ["Çeşitli sertlikler", "Dayanıklı malzeme", "Profesyonel kullanım"],
      rating: 4.7,
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=400&h=300&fit=crop"
    },
    {
      id: "20",
      name: "Temizlik Solventi",
      description: "Serigrafi makineleri ve kalıpları için özel temizlik solventi",
      category: "yardimci-malzemeler",
      categoryName: "Serigrafi Yardımcı Malzemeleri",
      features: ["Güçlü temizlik", "Hızlı buharlaşma", "Kalıp dostu"],
      rating: 4.5,
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=400&h=300&fit=crop"
    },
    {
      id: "21",
      name: "Bloke Out Mürekkebi",
      description: "İstenmeyen alanları kapatmak için bloke out mürekkebi",
      category: "yardimci-malzemeler",
      categoryName: "Serigrafi Yardımcı Malzemeleri",
      features: ["Hızlı kuruma", "Güçlü örtücülük", "Kolay uygulanım"],
      rating: 4.6,
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=400&h=300&fit=crop"
    },
    {
      id: "22",
      name: "Mesh (Örgü Kumaş)",
      description: "Farklı gözenek ölçülerinde serigrafi mesh kumaşı",
      category: "yardimci-malzemeler",
      categoryName: "Serigrafi Yardımcı Malzemeleri",
      features: ["Çeşitli gözenek ölçüleri", "Yüksek kalite", "Dayanıklı yapı"],
      rating: 4.8,
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=400&h=300&fit=crop"
    },
    // Yedek Parçalar Kategorisi
    {
      id: "23",
      name: "Vakum Motoru",
      description: "Serigrafi makineleri için yedek vakum motoru",
      category: "yedek-parcalar",
      categoryName: "Yedek Parçalar",
      features: ["Güçlü emme", "Sessiz çalışma", "Uzun ömürlü"],
      rating: 4.6,
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=400&h=300&fit=crop"
    },
    {
      id: "24",
      name: "Baskı Kafası Yay Sistemi",
      description: "Baskı kafası için hassas ayar yay sistemi",
      category: "yedek-parcalar",
      categoryName: "Yedek Parçalar",
      features: ["Hassas ayar", "Dayanıklı çelik", "Kolay montaj"],
      rating: 4.7,
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=400&h=300&fit=crop"
    },
    {
      id: "25",
      name: "Kalıp Kelepçeleri",
      description: "Serigrafi kalıplarını sabitlemek için özel kelepçeler",
      category: "yedek-parcalar",
      categoryName: "Yedek Parçalar",
      features: ["Güçlü tutuş", "Korozyona dayanıklı", "Çeşitli boyutlar"],
      rating: 4.5,
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=400&h=300&fit=crop"
    },
    {
      id: "26",
      name: "Ayar Vidaları",
      description: "Makine ayarları için hassas ayar vidaları seti",
      category: "yedek-parcalar",
      categoryName: "Yedek Parçalar",
      features: ["Hassas diş", "Paslanmaz çelik", "Komple set"],
      rating: 4.4,
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=400&h=300&fit=crop"
    }
  ];

  // Filtreleme ve sıralama
  const filteredProducts = products.filter(product => {
    const matchesCategory = selectedCategory === "all" || product.category === selectedCategory;
    const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         product.description.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  // Sıralama
  const sortedProducts = [...filteredProducts].sort((a, b) => {
    switch (sortBy) {
      case "name":
        return a.name.localeCompare(b.name);
      case "rating":
        return b.rating - a.rating;
      case "new":
        return (b.isNew ? 1 : 0) - (a.isNew ? 1 : 0);
      case "popular":
        return (b.isPopular ? 1 : 0) - (a.isPopular ? 1 : 0);
      default:
        return 0;
    }
  });

  const handleWhatsAppClick = (productName: string) => {
    const message = `Merhaba, ${productName} ürünü hakkında bilgi almak istiyorum.`;
    const whatsappUrl = `https://wa.me/905425094758?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <div className="min-h-screen bg-[#F2F2F2]">
      {/* Hero Section */}
      <section className="bg-[#1A1A1A] text-white py-20">
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
            <p className="text-xl text-[#F2F2F2] max-w-3xl mx-auto">
              40 yıllık deneyimimizle ürettiğimiz kaliteli serigrafi makineleri ve ekipmanları
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
                  className={selectedCategory === category.id ? "bg-[#F25C05] hover:bg-[#F25C05]/90" : ""}
                >
                  {category.name}
                </Button>
              ))}
            </div>

            {/* Arama ve Sıralama */}
            <div className="flex flex-col sm:flex-row gap-4 w-full lg:w-auto">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-[#4B4B4B] h-4 w-4" />
                <Input
                  placeholder="Ürün ara..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10 w-full sm:w-64"
                />
              </div>
              <Select value={sortBy} onValueChange={setSortBy}>
                <SelectTrigger className="w-full sm:w-48">
                  <SelectValue placeholder="Sırala" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="name">İsme Göre</SelectItem>
                  <SelectItem value="rating">Puana Göre</SelectItem>
                  <SelectItem value="new">Yeni Ürünler</SelectItem>
                  <SelectItem value="popular">Popüler Ürünler</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </div>
      </section>

      {/* Ürünler Grid */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          {sortedProducts.length === 0 ? (
            <div className="text-center py-12">
              <h3 className="text-xl font-semibold text-[#1A1A1A] mb-2">Ürün bulunamadı</h3>
              <p className="text-[#4B4B4B]">Arama kriterlerinize uygun ürün bulunamadı.</p>
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
                  <Card className="h-full overflow-hidden border-0 shadow-lg hover:shadow-xl transition-all duration-300">
                    {/* Ürün Görseli */}
                    <div className="relative overflow-hidden">
                      <motion.div
                        whileHover={{ scale: 1.05 }}
                        transition={{ duration: 0.3 }}
                        className="aspect-square bg-gradient-to-br from-[#F2F2F2] to-[#E5E5E5] flex items-center justify-center"
                      >
                        <img
                          src={product.image}
                          alt={product.name}
                          className="w-full h-full object-cover"
                        />
                      </motion.div>

                      {/* Badge'ler */}
                      <div className="absolute top-4 left-4 flex flex-col gap-2">
                        {product.isNew && (
                          <Badge className="bg-[#F25C05] hover:bg-[#F25C05]/90">
                            Yeni
                          </Badge>
                        )}
                        {product.isPopular && (
                          <Badge className="bg-[#F25C05] hover:bg-[#F25C05]/90">
                            Popüler
                          </Badge>
                        )}
                      </div>

                      {/* Kategori Badge */}
                      <div className="absolute top-4 right-4">
                        <Badge variant="secondary" className="bg-white/90 text-[#1A1A1A]">
                          {product.categoryName}
                        </Badge>
                      </div>
                    </div>

                    {/* Ürün Bilgileri */}
                    <CardHeader className="pb-3">
                      <div className="flex items-start justify-between">
                        <div className="flex-1">
                          <CardTitle className="text-lg font-semibold text-[#1A1A1A] line-clamp-2">
                            {product.name}
                          </CardTitle>
                          <CardDescription className="text-sm text-[#4B4B4B] mt-1 line-clamp-2">
                            {product.description}
                          </CardDescription>
                        </div>
                      </div>

                      {/* Rating */}
                      <div className="flex items-center space-x-1 mt-3">
                        <div className="flex">
                          {[...Array(5)].map((_, i) => (
                            <Star
                              key={i}
                              className={`w-4 h-4 ${
                                i < product.rating ? "text-[#F25C05] fill-current" : "text-[#E5E5E5]"
                              }`}
                            />
                          ))}
                        </div>
                        <span className="text-sm text-[#4B4B4B] ml-1">({product.rating})</span>
                      </div>
                    </CardHeader>

                    {/* Özellikler */}
                    <CardContent className="pb-3">
                      <div className="space-y-2">
                        {product.features.slice(0, 3).map((feature, index) => (
                          <motion.div
                            key={index}
                            initial={{ opacity: 0, x: -10 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.3, delay: index * 0.1 }}
                            className="flex items-center space-x-2 text-sm text-[#4B4B4B]"
                          >
                            <div className="w-1.5 h-1.5 bg-[#F25C05] rounded-full flex-shrink-0" />
                            <span>{feature}</span>
                          </motion.div>
                        ))}
                      </div>
                    </CardContent>

                    {/* Footer */}
                    <CardContent className="pt-0">
                      <div className="w-full space-y-2">
                        <Button 
                          className="w-full bg-[#F25C05] hover:bg-[#F25C05]/90" 
                          onClick={() => handleWhatsAppClick(product.name)}
                        >
                          <MessageCircle className="mr-2 h-4 w-4" />
                          Teklif Al
                        </Button>
                        <Button variant="outline" className="w-full" asChild>
                          <Link href={`/urunler/${product.id}`}>
                            Detayları Gör
                            <ArrowRight className="ml-2 h-4 w-4" />
                          </Link>
                        </Button>
                      </div>
                    </CardContent>
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

export default ProductsPage; 