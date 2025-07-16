"use client";

import { motion } from "framer-motion";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, Star, MessageCircle, CheckCircle, Package, Truck, Shield } from "lucide-react";
import Link from "next/link";
import { useParams } from "next/navigation";

const ProductDetailPage = () => {
  const params = useParams();
  const productId = params.id as string;

  // Ürün verileri (26 ürünün tamamı)
  const products = [
    {
      id: "1",
      name: "Manuel Vakumlu Baskı Makinesi",
      description: "Küçük ve orta ölçekli işletmeler için ideal manuel serigrafi makinesi",
      longDescription: "Manuel Vakumlu Baskı Makinesi, serigrafi sektöründe 40 yıllık deneyimimizle geliştirilmiş, yüksek kaliteli ve dayanıklı bir üründür. Bu makine, küçük ve orta ölçekli işletmelerin ihtiyaçlarını karşılamak üzere tasarlanmıştır. Alüminyum şase yapısı ile uzun ömürlü kullanım sağlar.",
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=400&h=300&fit=crop",
      category: "Baskı Makineleri",
      features: [
        "Maksimum 50x70cm baskı alanı",
        "Hassas ayar sistemi",
        "Dayanıklı alüminyum şase",
        "Vakum sistemi ile sabit tutma",
        "Kolay kullanım ve bakım",
        "Profesyonel sonuçlar"
      ],
      specifications: [
        "Baskı Alanı: 50x70cm",
        "Şase: Alüminyum",
        "Vakum Gücü: 0.8 bar",
        "Ağırlık: 45kg",
        "Boyutlar: 80x60x120cm",
        "Güç: Manuel"
      ],
      rating: 4.8,
      isNew: true,
      isPopular: true,
    },
    {
      id: "2",
      name: "60x110 Kurutma Rafı",
      description: "60x110cm boyutlarında profesyonel kurutma rafı",
      longDescription: "60x110 Kurutma Rafı, serigrafi baskılarının kurutulması için özel olarak tasarlanmış profesyonel bir ekipmandır. Dayanıklı çelik yapısı ve pratik tasarımı ile uzun yıllar kullanım sağlar. Çok katmanlı yapısı ile aynı anda birden fazla baskıyı kurutabilirsiniz.",
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=400&h=300&fit=crop",
      category: "Kurutma Rafları",
      features: [
        "60x110cm boyut",
        "Dayanıklı çelik",
        "Kolay taşıma",
        "Çok katmanlı tasarım",
        "Hızlı kurutma",
        "Kompakt yapı"
      ],
      specifications: [
        "Boyutlar: 60x110cm",
        "Malzeme: Çelik",
        "Katman Sayısı: 5",
        "Ağırlık: 25kg",
        "Renk: Gri",
        "Montaj: Kolay"
      ],
      rating: 4.6,
    },
    {
      id: "3",
      name: "50x70 Kurutma Rafı",
      description: "50x70cm boyutlarında orta format kurutma rafı",
      longDescription: "50x70 Kurutma Rafı, orta ölçekli serigrafi atölyeler için ideal boyutlarda tasarlanmış kurutma sistemidir. Kompakt yapısı sayesinde dar alanlarda bile verimli kullanım sağlar. Hafif ağırlığı ile kolay taşıma imkanı sunar.",
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=400&h=300&fit=crop",
      category: "Kurutma Rafları",
      features: [
        "50x70cm boyut",
        "Orta format",
        "Pratik kullanım",
        "Hafif yapı",
        "Kolay montaj",
        "Mobil kullanım"
      ],
      specifications: [
        "Boyutlar: 50x70cm",
        "Malzeme: Çelik",
        "Katman Sayısı: 4",
        "Ağırlık: 18kg",
        "Renk: Gri",
        "Montaj: Çok Kolay"
      ],
      rating: 4.5,
    },
    {
      id: "4",
      name: "Manuel Vakumlu Baskı Makinesi - 70x200",
      description: "70x200cm baskı alanına sahip manuel vakumlu serigrafi makinesi",
      longDescription: "70x200 Manuel Vakumlu Baskı Makinesi, büyük format baskı ihtiyaçları için özel olarak tasarlanmıştır. Geniş baskı alanı ile banner, afiş ve büyük tekstil ürünleri için ideal çözümdür. Güçlü vakum sistemi ile mükemmel tutma sağlar.",
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=400&h=300&fit=crop",
      category: "Baskı Makineleri",
      features: [
        "70x200cm baskı alanı",
        "Vakum sistemi",
        "Hassas ayar mekanizması",
        "Büyük format baskı",
        "Profesyonel sonuçlar",
        "Dayanıklı yapı"
      ],
      specifications: [
        "Baskı Alanı: 70x200cm",
        "Şase: Alüminyum",
        "Vakum Gücü: 1.2 bar",
        "Ağırlık: 75kg",
        "Boyutlar: 220x90x130cm",
        "Güç: Manuel"
      ],
      rating: 4.8,
      isPopular: true,
    },
    {
      id: "5",
      name: "4 Renk 1 İstasyonlu Serigrafi Baskı Tezgahı",
      description: "4 renk baskı kapasitesine sahip tek istasyonlu serigrafi tezgahı",
      longDescription: "4 Renk 1 İstasyonlu Serigrafi Baskı Tezgahı, çok renkli baskı işlemleri için tasarlanmış profesyonel bir üründür. Tek istasyonda 4 farklı renk ile baskı yapabilme imkanı sunar. Hassas register sistemi ile mükemmel hizalama sağlar.",
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=400&h=300&fit=crop",
      category: "Baskı Makineleri",
      features: [
        "4 renk baskı",
        "Tek istasyon",
        "Çok renkli baskı",
        "Hassas register sistemi",
        "Hızlı üretim",
        "Kaliteli sonuçlar"
      ],
      specifications: [
        "Renk Kapasitesi: 4 Renk",
        "İstasyon: 1 Adet",
        "Baskı Alanı: 40x60cm",
        "Şase: Çelik",
        "Ağırlık: 85kg",
        "Boyutlar: 150x120x180cm"
      ],
      rating: 4.8,
      isNew: true,
    },
    {
      id: "6",
      name: "Manuel Vakumlu Baskı Makinesi - 100x200",
      description: "100x200cm baskı alanına sahip büyük format manuel vakumlu serigrafi makinesi",
      longDescription: "100x200 Manuel Vakumlu Baskı Makinesi, endüstriyel boyutlarda baskı ihtiyaçları için geliştirilmiş en büyük format makinemizdir. Büyük ölçekli projeler için ideal çözümdür. Ağır çelik şase ile maksimum stabilite sağlar.",
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=400&h=300&fit=crop",
      category: "Baskı Makineleri",
      features: [
        "100x200cm baskı alanı",
        "Güçlü vakum sistemi",
        "Endüstriyel kullanım",
        "Büyük format baskı",
        "Hassas positioning",
        "Dayanıklı yapı"
      ],
      specifications: [
        "Baskı Alanı: 100x200cm",
        "Şase: Ağır Çelik",
        "Vakum Gücü: 1.5 bar",
        "Ağırlık: 120kg",
        "Boyutlar: 250x120x140cm",
        "Güç: Manuel/Yarı Otomatik"
      ],
      rating: 4.9,
      isPopular: true,
    },
    {
      id: "7",
      name: "Serigrafi Masaüstü Baskı Aparatı",
      description: "Masaüstü kullanım için tasarlanmış serigrafi baskı aparatı",
      longDescription: "Serigrafi Masaüstü Baskı Aparatı, küçük ölçekli işletmeler ve hobiciler için tasarlanmış kompakt bir baskı çözümüdür. Masaüstüne sığan boyutu ile her yerde kullanılabilir. Ekonomik ve pratik bir seçenektir.",
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=400&h=300&fit=crop",
      category: "Baskı Makineleri",
      features: [
        "Masaüstü uyumlu",
        "Kompakt tasarım",
        "Kolay montaj",
        "Portabl kullanım",
        "Ekonomik çözüm",
        "Küçük baskılar için ideal"
      ],
      specifications: [
        "Baskı Alanı: 30x40cm",
        "Malzeme: Alüminyum",
        "Ağırlık: 8kg",
        "Boyutlar: 50x40x60cm",
        "Montaj: Takılabilir",
        "Kullanım: Masaüstü"
      ],
      rating: 4.5,
    },
    {
      id: "8",
      name: "Serigrafi Ayaklı Baskı Aparatı",
      description: "Ayaklı tasarıma sahip profesyonel serigrafi baskı aparatı",
      longDescription: "Serigrafi Ayaklı Baskı Aparatı, bağımsız çalışabilen ayaklı yapısı ile profesyonel baskı operasyonları için tasarlanmıştır. Yükseklik ayarı ile ergonomik kullanım sağlar. Stabil yapısı ile güvenli çalışma imkanı sunar.",
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=400&h=300&fit=crop",
      category: "Baskı Makineleri",
      features: [
        "Ayaklı tasarım",
        "Yüksek ayarlanabilir",
        "Profesyonel kullanım",
        "Ergonomik çalışma",
        "Stabil yapı",
        "Kolay kullanım"
      ],
      specifications: [
        "Baskı Alanı: 40x60cm",
        "Yükseklik: 80-120cm",
        "Malzeme: Çelik",
        "Ağırlık: 35kg",
        "Boyutlar: 80x70x120cm",
        "Ayar: Yükseklik Ayarlı"
      ],
      rating: 4.7,
    },
    {
      id: "9",
      name: "Masaüstü Yarı Otomatik Makine",
      description: "Masaüstü kullanım için yarı otomatik serigrafi makinesi",
      longDescription: "Masaüstü Yarı Otomatik Makine, manuel çalışmanın yoruculuğunu azaltmak için geliştirilmiş akıllı bir baskı çözümüdür. Otomatik hareket sistemleri ile hızlı ve kaliteli baskı sağlar. Digital kontrol sistemi ile kolay kullanım.",
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=400&h=300&fit=crop",
      category: "Baskı Makineleri",
      features: [
        "Yarı otomatik",
        "Masaüstü uyumlu",
        "Verimli baskı",
        "Otomatik hareket",
        "Hızlı üretim",
        "Kaliteli sonuçlar"
      ],
      specifications: [
        "Baskı Alanı: 35x50cm",
        "Sistem: Yarı Otomatik",
        "Güç: 220V",
        "Ağırlık: 25kg",
        "Boyutlar: 70x60x80cm",
        "Kontrol: Digital"
      ],
      rating: 4.9,
      isPopular: true,
    },
    {
      id: "10",
      name: "Manuel Vakumlu Baskı Makinesi - 80x250",
      description: "80x250cm baskı alanına sahip uzun format manuel vakumlu serigrafi makinesi",
      longDescription: "80x250 Manuel Vakumlu Baskı Makinesi, özel uzun format baskı ihtiyaçları için tasarlanmış özel bir üründür. Banner ve uzun tekstil ürünleri için mükemmel çözümdür. Güçlendirilmiş çelik şase ile maksimum dayanıklılık sağlar.",
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=400&h=300&fit=crop",
      category: "Baskı Makineleri",
      features: [
        "80x250cm baskı alanı",
        "Uzun format baskı",
        "Stabil vakum sistemi",
        "Özel tasarım",
        "Banner baskısı",
        "Hassas ayar"
      ],
      specifications: [
        "Baskı Alanı: 80x250cm",
        "Şase: Güçlendirilmiş Çelik",
        "Vakum Gücü: 1.3 bar",
        "Ağırlık: 95kg",
        "Boyutlar: 300x100x130cm",
        "Özellik: Uzun Format"
      ],
      rating: 4.7,
    },
    {
      id: "11",
      name: "70x100 Kurutma Rafı",
      description: "70x100cm boyutlarında büyük format kurutma rafı",
      longDescription: "70x100 Kurutma Rafı, büyük format baskılar için tasarlanmış geniş kurutma alanı sunan profesyonel ekipmandır. Yüksek kapasiteli üretim için ideal çözümdür. Galvanizli çelik yapısı ile uzun ömürlü kullanım garantisi verir.",
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=400&h=300&fit=crop",
      category: "Kurutma Rafları",
      features: [
        "70x100cm boyut",
        "Büyük format",
        "Stabil yapı",
        "Yüksek kapasite",
        "Hızlı kurutma",
        "Dayanıklı malzeme"
      ],
      specifications: [
        "Boyutlar: 70x100cm",
        "Malzeme: Galvanizli Çelik",
        "Katman Sayısı: 6",
        "Ağırlık: 32kg",
        "Kapasite: Yüksek",
        "Montaj: Modüler"
      ],
      rating: 4.7,
    },
    {
      id: "12",
      name: "40x60 Kurutma Rafı",
      description: "40x60cm boyutlarında küçük format kurutma rafı",
      longDescription: "40x60 Kurutma Rafı, küçük ölçekli baskı işletmeleri için tasarlanmış kompakt kurutma çözümüdür. Sınırlı alan kullanımı olan atölyeler için ideal boyuttadır. Ekonomik ve pratik bir seçenektir.",
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=400&h=300&fit=crop",
      category: "Kurutma Rafları",
      features: [
        "40x60cm boyut",
        "Küçük format",
        "Kompakt tasarım",
        "Alan tasarrufu",
        "Hafif yapı",
        "Ekonomik"
      ],
      specifications: [
        "Boyutlar: 40x60cm",
        "Malzeme: Çelik",
        "Katman Sayısı: 4",
        "Ağırlık: 12kg",
        "Kapasite: Düşük",
        "Montaj: Basit"
      ],
      rating: 4.4,
    },
    {
      id: "13",
      name: "PVC Boya",
      description: "PVC malzemeler için özel formül serigrafi boyası",
      longDescription: "PVC Boya, plastik ve vinil malzemeler üzerinde mükemmel aderans sağlayan özel formül serigrafi boyasıdır. Esnek yapısı sayesinde çatlama yapmaz ve uzun ömürlüdür. Çeşitli renk seçenekleri ile ihtiyaçlarınıza uygun çözümler sunar.",
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=400&h=300&fit=crop",
      category: "Serigrafi Boyaları",
      features: [
        "Yüksek örtücülük",
        "PVC uyumlu",
        "Hızlı kuruma",
        "Esnek yapı",
        "Çatlama yapmaz",
        "Uzun ömürlü"
      ],
      specifications: [
        "Tür: PVC Boyası",
        "Kıvam: Orta",
        "Kuruma: 5-10 dk",
        "Paket: 1kg",
        "Renk: Çeşitli",
        "Raf Ömrü: 24 ay"
      ],
      rating: 4.7,
    },
    {
      id: "14",
      name: "Tekstil Boyaları",
      description: "Tekstil baskıları için özel serigrafi boyaları",
      longDescription: "Tekstil Boyaları, kumaş ve tekstil ürünleri üzerinde yumuşak dokunuş ve canlı renkler sağlayan özel formül boyalardır. Yıkamaya dayanıklı ve solmaz özelliğe sahiptir. Geniş renk gamı ile her türlü tasarıma uygun.",
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=400&h=300&fit=crop",
      category: "Serigrafi Boyaları",
      features: [
        "Tekstil uyumlu",
        "Yumuşak dokunuş",
        "Canlı renkler",
        "Yıkamaya dayanıklı",
        "Solmaz",
        "Nefes alabilir"
      ],
      specifications: [
        "Tür: Tekstil Boyası",
        "Kıvam: Yumuşak",
        "Kuruma: 3-5 dk",
        "Paket: 1kg",
        "Renk Gamı: Geniş",
        "Yıkama: 60°C"
      ],
      rating: 4.7,
      isPopular: true,
    },
    {
      id: "15",
      name: "40x60 Metal Kalıp",
      description: "40x60cm boyutlarında dayanıklı metal serigrafi kalıbı",
      longDescription: "40x60 Metal Kalıp, profesyonel serigrafi baskıları için üretilmiş yüksek kaliteli metal kalıptır. Hassas işçiliği ve dayanıklı yapısı ile uzun yıllar kullanım sağlar. Galvanizli kaplama ile korozyona karşı maksimum koruma.",
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=400&h=300&fit=crop",
      category: "Baskı Kalıpları",
      features: [
        "40x60cm boyut",
        "Metal yapı",
        "Uzun ömürlü",
        "Hassas işçilik",
        "Korozyona dayanıklı",
        "Profesyonel kalite"
      ],
      specifications: [
        "Boyut: 40x60cm",
        "Malzeme: Çelik",
        "Kalınlık: 2mm",
        "Ağırlık: 3kg",
        "Kaplama: Galvanizli",
        "Kenar: Pürüzsüz"
      ],
      rating: 4.6,
    },
    {
      id: "16",
      name: "50x70 Metal Kalıp",
      description: "50x70cm boyutlarında büyük format metal serigrafi kalıbı",
      longDescription: "50x70 Metal Kalıp, büyük format baskı işlemleri için tasarlanmış güçlü ve dayanıklı metal kalıptır. Profesyonel sonuçlar için mükemmel düzlük ve hassasiyet sunar. Hassas toleranslar ile kusursuz baskı kalitesi sağlar.",
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=400&h=300&fit=crop",
      category: "Baskı Kalıpları",
      features: [
        "50x70cm boyut",
        "Metal yapı",
        "Büyük format",
        "Mükemmel düzlük",
        "Güçlü yapı",
        "Hassas ölçüler"
      ],
      specifications: [
        "Boyut: 50x70cm",
        "Malzeme: Çelik",
        "Kalınlık: 2.5mm",
        "Ağırlık: 4.5kg",
        "Kaplama: Galvanizli",
        "Tolerans: ±0.1mm"
      ],
      rating: 4.7,
    },
    {
      id: "17",
      name: "40x60 Alüminyum Kalıp",
      description: "40x60cm boyutlarında hafif alüminyum serigrafi kalıbı",
      longDescription: "40x60 Alüminyum Kalıp, hafif yapısı ve korozyona dayanıklılığı ile öne çıkan modern serigrafi kalıbıdır. Kolay taşınabilir ve uzun ömürlü kullanım sunar. Anodizli yüzey ile üstün koruma sağlar.",
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=400&h=300&fit=crop",
      category: "Baskı Kalıpları",
      features: [
        "40x60cm boyut",
        "Alüminyum yapı",
        "Hafif tasarım",
        "Korozyona dayanıklı",
        "Kolay taşıma",
        "Modern tasarım"
      ],
      specifications: [
        "Boyut: 40x60cm",
        "Malzeme: Alüminyum",
        "Kalınlık: 3mm",
        "Ağırlık: 1.8kg",
        "Kaplama: Anodizli",
        "Kenar: Cilalı"
      ],
      rating: 4.8,
      isNew: true,
    },
    {
      id: "18",
      name: "50x70 Alüminyum Kalıp",
      description: "50x70cm boyutlarında büyük format alüminyum serigrafi kalıbı",
      longDescription: "50x70 Alüminyum Kalıp, büyük format işlemler için tasarlanmış hafif ve dayanıklı alüminyum kalıptır. Yüksek hassasiyet ve mükemmel yüzey kalitesi ile profesyonel sonuçlar sağlar. Ultra hassas toleranslar ile mükemmel baskı kalitesi.",
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=400&h=300&fit=crop",
      category: "Baskı Kalıpları",
      features: [
        "50x70cm boyut",
        "Alüminyum yapı",
        "Büyük format",
        "Yüksek hassasiyet",
        "Mükemmel yüzey",
        "Hafif ağırlık"
      ],
      specifications: [
        "Boyut: 50x70cm",
        "Malzeme: Alüminyum",
        "Kalınlık: 3.5mm",
        "Ağırlık: 2.5kg",
        "Kaplama: Anodizli",
        "Tolerans: ±0.05mm"
      ],
      rating: 4.9,
      isNew: true,
    },
    {
      id: "19",
      name: "Rakel",
      description: "Profesyonel serigrafi baskı rakeli - çeşitli sertliklerde",
      longDescription: "Rakel, serigrafi baskı işlemlerinin kalbi olan önemli bir yardımcı malzemedir. Farklı sertliklerde üretilen rakellerimiz, her türlü baskı ihtiyacına uygun çözümler sunar. Poliüretan malzemeden üretilen rakellerimiz uzun ömürlü kullanım sağlar.",
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=400&h=300&fit=crop",
      category: "Serigrafi Yardımcı Malzemeleri",
      features: [
        "Çeşitli sertlikler",
        "Dayanıklı malzeme",
        "Profesyonel kullanım",
        "Mükemmel esneklik",
        "Aşınmaya dayanıklı",
        "Kolay temizlik"
      ],
      specifications: [
        "Malzeme: Poliüretan",
        "Sertlik: 60-90 Shore",
        "Uzunluk: 30-200cm",
        "Kalınlık: 6-10mm",
        "Renk: Şeffaf/Sarı",
        "Raf Ömrü: 5 yıl"
      ],
      rating: 4.7,
    },
    {
      id: "20",
      name: "Temizlik Solventi",
      description: "Serigrafi makineleri ve kalıpları için özel temizlik solventi",
      longDescription: "Temizlik Solventi, serigrafi ekipmanlarının temizliği için özel olarak formüle edilmiş güçlü çözücüdür. Boya artıklarını kolayca temizler ve ekipmanlarınızın ömrünü uzatır. Hızlı buharlaşma özelliği ile kalıntı bırakmaz.",
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=400&h=300&fit=crop",
      category: "Serigrafi Yardımcı Malzemeleri",
      features: [
        "Güçlü temizlik",
        "Hızlı buharlaşma",
        "Kalıp dostu",
        "Etkili çözme",
        "Kalıntı bırakmaz",
        "Güvenli kullanım"
      ],
      specifications: [
        "Tür: Organik Solvent",
        "Buharlaşma: Hızlı",
        "Paket: 1L - 5L",
        "Yanıcılık: Düşük",
        "Koku: Hafif",
        "Raf Ömrü: 36 ay"
      ],
      rating: 4.5,
    },
    {
      id: "21",
      name: "Bloke Out Mürekkebi",
      description: "İstenmeyen alanları kapatmak için bloke out mürekkebi",
      longDescription: "Bloke Out Mürekkebi, serigrafi kalıplarında istenmeyen gözenekleri kapatmak ve baskı hatalarını düzeltmek için kullanılan özel mürekkeptir. Hızlı kurur ve güçlü örtücülük sağlar. Solvent ile temizlenebilir ve yeniden kullanılabilir.",
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=400&h=300&fit=crop",
      category: "Serigrafi Yardımcı Malzemeleri",
      features: [
        "Hızlı kuruma",
        "Güçlü örtücülük",
        "Kolay uygulanım",
        "Dayanıklı bağlama",
        "Temizlenebilir",
        "Yeniden kullanılabilir"
      ],
      specifications: [
        "Tür: Blokaj Mürekkebi",
        "Kuruma: 2-3 dk",
        "Kıvam: Orta",
        "Paket: 250ml - 1L",
        "Renk: Kırmızı",
        "Temizlik: Solvent ile"
      ],
      rating: 4.6,
    },
    {
      id: "22",
      name: "Mesh (Örgü Kumaş)",
      description: "Farklı gözenek ölçülerinde serigrafi mesh kumaşı",
      longDescription: "Mesh, serigrafi kalıplarının temel malzemesi olan örgü kumaştır. Farklı gözenek ölçüleri ile çeşitli baskı türleri için uygun seçenekler sunar. Yüksek kaliteli polyester iplikten üretilir ve düzgün örgü yapısı ile mükemmel baskı kalitesi sağlar.",
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=400&h=300&fit=crop",
      category: "Serigrafi Yardımcı Malzemeleri",
      features: [
        "Çeşitli gözenek ölçüleri",
        "Yüksek kalite",
        "Dayanıklı yapı",
        "Elastik özellik",
        "Düzgün örgü",
        "Uzun ömürlü"
      ],
      specifications: [
        "Malzeme: Polyester",
        "Mesh: 43-200T",
        "Genişlik: 100-200cm",
        "Kalınlık: 40-150µm",
        "Renk: Beyaz/Sarı",
        "Paket: Rulo"
      ],
      rating: 4.8,
    },
    {
      id: "23",
      name: "Vakum Motoru",
      description: "Serigrafi makineleri için yedek vakum motoru",
      longDescription: "Vakum Motoru, serigrafi makinelerinin kalp parçası olan güçlü emme sistemidir. Sessiz çalışması ve uzun ömrü ile kesintisiz üretim sağlar. Kolay montaj ve bakım imkanı sunar. Yüksek performanslı motor ile güçlü emme gücü sağlar.",
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=400&h=300&fit=crop",
      category: "Yedek Parçalar",
      features: [
        "Güçlü emme",
        "Sessiz çalışma",
        "Uzun ömürlü",
        "Kolay montaj",
        "Düşük bakım",
        "Güvenilir performans"
      ],
      specifications: [
        "Güç: 1.5 HP",
        "Vakum: 85%",
        "Voltaj: 220V",
        "Debi: 250 L/dk",
        "Gürültü: <60dB",
        "Ağırlık: 15kg"
      ],
      rating: 4.6,
    },
    {
      id: "24",
      name: "Baskı Kafası Yay Sistemi",
      description: "Baskı kafası için hassas ayar yay sistemi",
      longDescription: "Baskı Kafası Yay Sistemi, baskı kafalarının hassas ayarı için geliştirilmiş özel yay mekanizmasıdır. Dayanıklı çelik yapısı ile uzun yıllar sorunsuz çalışma garantisi verir. Ayarlanabilir basınç sistemi ile mükemmel denge sağlar.",
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=400&h=300&fit=crop",
      category: "Yedek Parçalar",
      features: [
        "Hassas ayar",
        "Dayanıklı çelik",
        "Kolay montaj",
        "Mükemmel denge",
        "Uzun ömürlü",
        "Korozyona dayanıklı"
      ],
      specifications: [
        "Malzeme: Çelik Yay",
        "Basınç: Ayarlanabilir",
        "Boyut: Standart",
        "Ağırlık: 0.5kg",
        "Kaplama: Galvanizli",
        "Montaj: Vida ile"
      ],
      rating: 4.7,
    },
    {
      id: "25",
      name: "Kalıp Kelepçeleri",
      description: "Serigrafi kalıplarını sabitlemek için özel kelepçeler",
      longDescription: "Kalıp Kelepçeleri, serigrafi kalıplarının makineye güvenli bir şekilde sabitlenmesi için tasarlanmış özel kelepçelerdir. Güçlü tutuş gücü ile hassas baskı operasyonları sağlar. Krom kaplama ile korozyona karşı maksimum koruma.",
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=400&h=300&fit=crop",
      category: "Yedek Parçalar",
      features: [
        "Güçlü tutuş",
        "Korozyona dayanıklı",
        "Çeşitli boyutlar",
        "Hızlı montaj",
        "Güvenli sabitleme",
        "Uzun ömürlü"
      ],
      specifications: [
        "Malzeme: Çelik",
        "Kaplama: Krom",
        "Açıklık: 5-25mm",
        "Ağırlık: 0.3kg",
        "Set: 4 Adet",
        "Montaj: Hızlı"
      ],
      rating: 4.5,
    },
    {
      id: "26",
      name: "Ayar Vidaları",
      description: "Makine ayarları için hassas ayar vidaları seti",
      longDescription: "Ayar Vidaları, serigrafi makinelerinin hassas ayarları için özel olarak üretilmiş vida setidir. Paslanmaz çelik malzemeden üretilen vidalar, uzun ömürlü ve güvenilir kullanım sağlar. Hassas diş yapısı ile mükemmel ayar imkanı sunar.",
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=400&h=300&fit=crop",
      category: "Yedek Parçalar",
      features: [
        "Hassas diş",
        "Paslanmaz çelik",
        "Komple set",
        "Çeşitli boyutlar",
        "Korozyona dayanıklı",
        "Profesyonel kalite"
      ],
      specifications: [
        "Malzeme: Paslanmaz Çelik",
        "Diş: Hassas",
        "Boyut: M6-M12",
        "Set: 20 Adet",
        "Kaplama: Yok",
        "Sınıf: A2-70"
      ],
      rating: 4.4,
    }
  ];

  const product = products.find(p => p.id === productId);

  if (!product) {
    return (
      <div className="min-h-screen bg-[#F2F2F2] flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-[#1A1A1A] mb-4">Ürün Bulunamadı</h1>
          <p className="text-[#4B4B4B] mb-6">Aradığınız ürün mevcut değil.</p>
          <Button asChild>
            <Link href="/urunler">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Ürünlere Dön
            </Link>
          </Button>
        </div>
      </div>
    );
  }

  const handleWhatsAppClick = () => {
    const message = `Merhaba, ${product.name} ürünü hakkında bilgi almak istiyorum.`;
    const whatsappUrl = `https://wa.me/905425094758?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  const benefits = [
    {
      icon: Package,
      title: "Kaliteli Üretim",
      description: "A kalite malzemeler ile üretilmiştir"
    },
    {
      icon: Truck,
      title: "Hızlı Teslimat",
      description: "7-15 iş günü içinde teslimat"
    },
    {
      icon: Shield,
      title: "2 Yıl Garanti",
      description: "Tüm ürünlerimiz garanti kapsamındadır"
    }
  ];

  return (
    <div className="min-h-screen bg-[#F2F2F2]">
      {/* Breadcrumb */}
      <section className="py-4 bg-white border-b">
        <div className="container mx-auto px-4">
          <nav className="flex items-center space-x-2 text-sm">
            <Link href="/" className="text-[#4B4B4B] hover:text-[#F25C05]">
              Ana Sayfa
            </Link>
            <span className="text-[#4B4B4B]">/</span>
            <Link href="/urunler" className="text-[#4B4B4B] hover:text-[#F25C05]">
              Ürünler
            </Link>
            <span className="text-[#4B4B4B]">/</span>
            <span className="text-[#1A1A1A] font-medium">{product.name}</span>
          </nav>
        </div>
      </section>

      {/* Ürün Detayı */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Ürün Görseli */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <Card className="border-0 shadow-lg overflow-hidden">
                <CardContent className="p-0">
                  <div className="relative">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-auto object-cover"
                    />
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
                    <div className="absolute top-4 right-4">
                      <Badge variant="secondary" className="bg-white/90 text-[#1A1A1A]">
                        {product.category}
                      </Badge>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            {/* Ürün Bilgileri */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-6"
            >
              <div>
                <h1 className="text-3xl md:text-4xl font-bold text-[#1A1A1A] mb-4">
                  {product.name}
                </h1>
                <p className="text-lg text-[#4B4B4B] mb-4">
                  {product.description}
                </p>
                
                {/* Rating */}
                <div className="flex items-center space-x-2 mb-4">
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`w-5 h-5 ${
                          i < product.rating ? "text-[#F25C05] fill-current" : "text-[#E5E5E5]"
                        }`}
                      />
                    ))}
                  </div>
                  <span className="text-[#4B4B4B]">({product.rating})</span>
                </div>
              </div>

              {/* Özellikler */}
              <Card className="border-0 shadow-lg">
                <CardHeader>
                  <CardTitle className="text-xl font-semibold text-[#1A1A1A]">
                    Ürün Özellikleri
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {product.features.map((feature, index) => (
                      <div key={index} className="flex items-center space-x-2">
                        <CheckCircle className="w-4 h-4 text-[#F25C05] flex-shrink-0" />
                        <span className="text-[#4B4B4B]">{feature}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Teknik Özellikler */}
              <Card className="border-0 shadow-lg">
                <CardHeader>
                  <CardTitle className="text-xl font-semibold text-[#1A1A1A]">
                    Teknik Özellikler
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 gap-3">
                    {product.specifications.map((spec, index) => (
                      <div key={index} className="flex justify-between py-2 border-b border-[#E5E5E5] last:border-b-0">
                        <span className="text-[#4B4B4B] font-medium">{spec.split(':')[0]}:</span>
                        <span className="text-[#1A1A1A]">{spec.split(':')[1]}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* CTA Butonları */}
              <div className="space-y-4">
                <Button 
                  size="lg" 
                  className="w-full bg-[#F25C05] hover:bg-[#F25C05]/90"
                  onClick={handleWhatsAppClick}
                >
                  <MessageCircle className="mr-2 h-5 w-5" />
                  Teklif Al
                </Button>
                <Button 
                  variant="outline" 
                  size="lg" 
                  className="w-full"
                  asChild
                >
                  <Link href="/urunler">
                    <ArrowLeft className="mr-2 h-5 w-5" />
                    Diğer Ürünleri Gör
                  </Link>
                </Button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Detaylı Açıklama */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-2xl font-bold text-[#1A1A1A] mb-6">
              Ürün Hakkında Detaylı Bilgi
            </h2>
            <div className="prose prose-lg max-w-none text-[#4B4B4B]">
              <p className="text-lg leading-relaxed">
                {product.longDescription}
              </p>
              <p className="text-lg leading-relaxed mt-4">
                Bu ürün, OkanGökhan Serigrafi Makineleri'nin 40 yıllık deneyimi ile geliştirilmiş olup, 
                en yüksek kalite standartlarında üretilmektedir. Müşteri memnuniyeti odaklı yaklaşımımız 
                ile her ihtiyaca uygun çözümler sunmaktayız.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Avantajlar */}
      <section className="py-12 bg-[#F2F2F2]">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-2xl font-bold text-[#1A1A1A] mb-4">
              Neden OkanGökhan?
            </h2>
            <p className="text-[#4B4B4B] max-w-3xl mx-auto">
              40 yıllık deneyimimizle size en kaliteli ürünleri ve hizmetleri sunuyoruz.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="h-full text-center border-0 shadow-lg">
                  <CardHeader>
                    <div className="w-16 h-16 bg-[#F25C05]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                      <benefit.icon className="w-8 h-8 text-[#F25C05]" />
                    </div>
                    <CardTitle className="text-xl font-semibold text-[#1A1A1A]">
                      {benefit.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-[#4B4B4B]">
                      {benefit.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProductDetailPage; 