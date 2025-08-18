"use client";

import { motion } from "framer-motion";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, MessageCircle, CheckCircle, Package, Truck, Shield } from "lucide-react";
import Link from "next/link";
import { useParams } from "next/navigation";

const ProductDetailPage = () => {
  const params = useParams();
  const productId = params.id as string;

  // Ürün verileri (tüm ürünler)
  const products = [
    {
      id: "2",
      name: "60x110 Kurutma Rafı",
      description: "60×110 cm ölçülerde, 50 raflı, 4 tekerlekli ve fırın boyalı profesyonel kurutma rafı",
      longDescription: "OkanGökhan Makine olarak, serigrafi makineleri imalatında uzmanlaşmış bir firma olarak geliştirdiğimiz Serigrafi Kurutma Rafı, işlerinizi daha verimli hale getirmeniz için tasarlanmıştır. 60×110 cm ölçüleri, 50 adet rafı ve 4 adet tekerlek sistemi ile kullanımı son derece pratik ve esnek bir çözüm sunar. Fırın boyalı kaplaması sayesinde dayanıklılığı artırılmış olan bu kurutma rafı, uzun yıllar boyunca güvenilir performans sağlar. Ürünlerinizi baskıdan sonra hızlı bir şekilde kurumalarını sağlamak için ideal bir çözümdür.",
      image: "/images/kurutma-raflari/60x110-kurutma-rafi.jpg",
      category: "Kurutma Rafları",
      features: [
        "Ölçüler: 60×110 cm",
        "Raf Sayısı: 50 adet",
        "Tekerlek Sistemi: 4 adet (taşıma ve manevra için)",
        "Kaplama: Fırın boyalı",
        "İmalatçı: OkanGökhan Makine",
        "Pratik ve dayanıklı kullanım"
      ],
      specifications: [
        "Ölçüler: 60x110cm",
        "Raf Sayısı: 50",
        "Tekerlek Sistemi: 4 adet",
        "Kaplama: Fırın Boyalı",
        "İmalatçı: OkanGökhan Makine",
        "Kullanım: Baskı sonrası kurutma"
      ],
      gallery: ["/images/kurutma-raflari/60x110-kurutma-rafi.jpg"]
    },
    {
      id: "3",
      name: "50x70 Kurutma Rafı",
      description: "50×70 cm ölçülerde, 4 tekerlekli, fırın boyalı profesyonel kurutma rafı",
      longDescription: "50×70 Kurutma Rafı, orta ölçekli üretimlerde baskıların düzenli ve hızlı kuruması için tasarlanmıştır. 50×70 cm ölçüler, 4 adet tekerlek ile kolay hareket ve manevra imkânı sağlar. Fırın boyalı kaplama ile uzun ömürlü dayanıklılık sunar. OkanGökhan Makine güvencesiyle verimli ve pratik kullanım sağlar.",
      image: "/images/50x70-kurutma-rafi/foto1.jpg",
      category: "Kurutma Rafları",
      features: [
        "Ölçüler: 50×70 cm",
        "Tekerlek Sistemi: 4 adet (taşıma ve manevra için)",
        "Kaplama: Fırın boyalı",
        "İmalatçı: OkanGökhan Makine",
        "Orta format üretim için ideal"
      ],
      specifications: [
        "Ölçüler: 50x70cm",
        "Raf Sayısı: İsteğe bağlı",
        "Tekerlek Sistemi: 4 adet",
        "Kaplama: Fırın Boyalı",
        "İmalatçı: OkanGökhan Makine",
        "Kullanım: Baskı sonrası kurutma"
      ],
      rating: 4.5,
      gallery: ["/images/50x70-kurutma-rafi/foto1.jpg"]
    },
    {
      id: "6",
      name: "Manuel Vakumlu Baskı Makinesi - 100x200",
      description: "100x200cm baskı alanına sahip büyük format manuel vakumlu serigrafi makinesi",
      longDescription: "Manuel Vakumlu Baskı Makinesi - 100x200, büyük format baskılar için tasarlanmış endüstriyel seviye bir serigrafi makinesidir. Güçlü vakum sistemi ve geniş baskı alanı ile profesyonel sonuçlar elde etmenizi sağlar. Ağır işlerde bile mükemmel performans gösterir.",
      image: "/images/manuel-vakumlu-100x200/makine-100x200.jpg",
      category: "Baskı Makineleri",
      features: [
        "100x200cm baskı alanı",
        "Güçlü vakum sistemi",
        "Endüstriyel dayanıklılık",
        "Hassas ayar sistemi",
        "Büyük format uyumlu",
        "Profesyonel sonuçlar"
      ],
      specifications: [
        "Baskı Alanı: 100x200cm",
        "Şase: Ağır Sanayi Alüminyum",
        "Vakum Gücü: 1.2 bar",
        "Ağırlık: 85kg",
        "Boyutlar: 250x150x140cm",
        "Güç: Manuel + Vakum"
      ],
      rating: 4.9,
      gallery: ["/images/manuel-vakumlu-100x200/makine-100x200.jpg"]
    },
    {
      id: "5",
      name: "4 Renk 1 İstasyonlu Serigrafi Baskı Tezgahı",
      description: "40×60 MDF tabla, 4 kafa dönebilir sabit istasyon; çok renkli baskılar için hızlı ve pratik",
      longDescription: "4 Renk 1 İstasyonlu Serigrafi Baskı Tezgahı, çok renkli baskılar için hızlı ve uygun bir çözümdür. 40×60 MDF tabla üzerinde çalışır; dört renk seçeneği ile çeşitli baskı projelerinde esneklik sağlar. Yay ve gergi kolları sayesinde yüksek ayarlanabilirlik sunar ve baskı kalitesini hassas şekilde kontrol etmenize olanak tanır. Tek kişi kullanımına uygun, kolay taşınabilir ve kısa öğrenme süresi ile kullanıcı dostudur. Endüstriyel kalite malzemelerle üretilmiş dayanıklı yapısı uzun ömürlü performans sunar. Özel tasarımı sayesinde tekstil malzemeleri üzerine baskı yapmaya uygundur.",
      image: "/images/4-renk-1-istasyonlu/tezgah.jpg",
      category: "Baskı Makineleri",
      features: [
        "Tabla: 40×60 MDF",
        "İstasyon: 1 sabit istasyon",
        "Kafa: 4 adet, dönebilir",
        "Çok renk seçeneği: 4 renk",
        "Yüksek ayarlanabilirlik: Yay ve gergi kolları",
        "Kullanıcı dostu: Tek kişi kullanıma uygun, kolay taşınabilir",
        "Dayanıklı inşaat: Endüstriyel kalite",
        "Tekstil giydirilebilir tasarım"
      ],
      specifications: [
        "Tabla: 40x60cm MDF",
        "Renk Sayısı: 4",
        "İstasyon: 1 (sabit)",
        "Kafa: 4 adet, dönebilir",
        "Ayar: Yay ve gergi kolları",
        "Kullanıcı: Tek kişi kullanımına uygun",
        "Kullanım Alanı: Çok renkli/tekstil baskıları"
      ],
      rating: 4.8,
      gallery: ["/images/4-renk-1-istasyonlu/tezgah.jpg"]
    },
    {
      id: "12",
      name: "40x60 Kurutma Rafı",
      description: "40×60 cm ölçülerde, 4 tekerlekli, fırın boyalı profesyonel kurutma rafı",
      longDescription: "40×60 Kurutma Rafı, serigrafi baskılarının kurutulması için pratik ve dayanıklı bir çözümdür. 40×60 cm ölçüleri ile kompakt alanlarda verimli kullanım sağlar. 4 adet tekerlek sistemi sayesinde kolay taşınır ve manevra kabiliyeti sunar. Fırın boyalı kaplama uzun ömürlü dayanıklılık sağlarken, OkanGökhan Makine kalitesi ile güvenilir performans elde edersiniz.",
      image: "/images/40x60-kurutma-rafi/foto1.jpg",
      category: "Kurutma Rafları",
      features: [
        "Ölçüler: 40×60 cm",
        "Tekerlek Sistemi: 4 adet (taşıma ve manevra için)",
        "Kaplama: Fırın boyalı",
        "İmalatçı: OkanGökhan Makine",
        "Kompakt ve dayanıklı kullanım"
      ],
      specifications: [
        "Ölçüler: 40x60cm",
        "Raf Sayısı: İsteğe bağlı",
        "Tekerlek Sistemi: 4 adet",
        "Kaplama: Fırın Boyalı",
        "İmalatçı: OkanGökhan Makine",
        "Kullanım: Baskı sonrası kurutma"
      ],
      rating: 4.4,
      gallery: ["/images/40x60-kurutma-rafi/foto1.jpg"]
    },
    {
      id: "11",
      name: "70x100 Kurutma Rafı",
      description: "70×100 cm ölçülerde, 4 tekerlekli, fırın boyalı endüstriyel kurutma rafı",
      longDescription: "70×100 Kurutma Rafı, büyük format baskıların kurutulması için tasarlanmış sağlam ve yüksek kapasiteli bir sistemdir. 70×100 cm ölçüler geniş yüzeyler sağlar; 4 adet tekerlek sayesinde taşınması ve konumlandırılması kolaydır. Fırın boyalı kaplaması uzun ömürlü dayanıklılık sunar. OkanGökhan Makine güvencesiyle endüstriyel üretimlerde verimli kullanım sağlar.",
      image: "/images/70x100-kurutma-rafi/foto1.jpg",
      category: "Kurutma Rafları",
      features: [
        "Ölçüler: 70×100 cm",
        "Tekerlek Sistemi: 4 adet (taşıma ve manevra için)",
        "Kaplama: Fırın boyalı",
        "İmalatçı: OkanGökhan Makine",
        "Endüstriyel üretim için ideal"
      ],
      specifications: [
        "Ölçüler: 70x100cm",
        "Raf Sayısı: İsteğe bağlı",
        "Tekerlek Sistemi: 4 adet",
        "Kaplama: Fırın Boyalı",
        "İmalatçı: OkanGökhan Makine",
        "Kullanım: Baskı sonrası kurutma"
      ],
      rating: 4.7,
      gallery: ["/images/70x100-kurutma-rafi/foto1.jpg"]
    },
    {
      id: "15",
      name: "Alüminyum Kalıp",
      description: "Yüksek kaliteli alüminyum serigrafi kalıbı, hafif ve dayanıklı",
      longDescription: "Alüminyum Kalıp, hafifliği ve dayanıklılığı ile öne çıkan profesyonel serigrafi kalıbıdır. Yüksek hassasiyette işlenmiş alüminyum profiller kullanılarak üretilmiştir. Korozyon direnci yüksek olup, uzun yıllar kullanılabilir.",
      image: "/images/aluminyum-kalip/foto1.jpg",
      category: "Baskı Kalıpları",
      features: [
        "Hafif alüminyum yapı",
        "Yüksek hassasiyet",
        "Uzun ömürlü kullanım",
        "Korozyona dayanıklı",
        "Çeşitli boyutlarda üretim",
        "Profesyonel kalite"
      ],
      specifications: [
        "Malzeme: Alüminyum",
        "Profil: Yüksek Hassasiyet",
        "Kaplama: Anodize",
        "Ağırlık: Hafif",
        "Boyutlar: Özel Üretim",
        "Garanti: 2 Yıl"
      ],
      rating: 4.8,
      gallery: ["/images/aluminyum-kalip/foto1.jpg"]
    },
    {
      id: "16",
      name: "Metal Kalıp",
      description: "Sağlam metal yapılı serigrafi kalıbı, endüstriyel kullanım için ideal",
      longDescription: "Metal Kalıp, endüstriyel seviyede üretim yapan işletmeler için tasarlanmış ultra dayanıklı serigrafi kalıbıdır. Sağlam metal yapısı ile yüksek basınçlara dayanır ve uzun kullanım ömrü sunar. Ağır işlerde bile mükemmel performans gösterir.",
      image: "/images/metal-kalip/foto1.jpg",
      category: "Baskı Kalıpları",
      features: [
        "Sağlam metal yapı",
        "Endüstriyel dayanıklılık",
        "Yüksek basınca dayanım",
        "Uzun kullanım ömrü",
        "Çeşitli boyutlarda üretim",
        "Profesyonel sonuçlar"
      ],
      specifications: [
        "Malzeme: Çelik",
        "Kalınlık: Endüstriyel",
        "İşlem: Hassas",
        "Ağırlık: Ağır Hizmet",
        "Boyutlar: Özel Üretim",
        "Garanti: 5 Yıl"
      ],
      rating: 4.7,
      gallery: ["/images/metal-kalip/foto1.jpg"]
    },
    {
      id: "22",
      name: "Alüminyum Ragle",
      description: "Hafif ve dayanıklı alüminyum serigrafi raglesi",
      longDescription: "Alüminyum Ragle, hafif yapısı ve yüksek dayanıklılığı ile profesyonel serigrafi baskılarında kullanılan özel bir araçtır. Korozyona dayanıklı alüminyum malzemeden üretilmiş olup, hassas kenar kalitesi ile mükemmel sonuçlar elde etmenizi sağlar.",
      image: "/images/aluminyum-ragle/foto1.jpg",
      category: "Serigrafi Yardımcı Malzemeleri",
      features: [
        "Hafif alüminyum yapı",
        "Korozyona dayanıklı",
        "Hassas kenar",
        "Uzun ömürlü",
        "Çeşitli boyutlar",
        "Profesyonel kullanım"
      ],
      specifications: [
        "Malzeme: Alüminyum",
        "Kalınlık: 6-10mm",
        "Uzunluk: 25-100cm",
        "Kenar: Hassas İşlem",
        "Kaplama: Anodize",
        "Ağırlık: Hafif"
      ],
      rating: 4.8,
      gallery: ["/images/aluminyum-ragle/foto1.jpg"]
    },
    {
      id: "1",
      name: "Serigrafi Vakumlu Manuel Baskı Makinesi",
      description: "70×100 tezgah alanı ve 50×70 vakumlu alan ile yüksek hassasiyetli manuel baskı makinesi.",
      longDescription: "Serigrafi makineleri konusunda öncü olan OkanGökhan Makine, serigrafi baskı işlemleriniz için ideal bir çözüm sunuyor. Serigrafi Vakumlu Manuel Baskı Makinesi, kalitesi ve kullanım kolaylığı ile ön plana çıkan bir üründür. 70×100 cm’lik geniş tezgah alanı, büyük boyutlu baskı işlerinizi rahatça gerçekleştirmenize olanak tanırken, 50×70 cm’lik vakumlu alan baskı malzemesini güvenli ve sabit bir şekilde tutar. 3mm eloksallı alüminyum plaka, makinenin dayanıklılığını artırır ve uzun ömürlü kullanım sağlar. Yüksek performanslı vakum motoru sayesinde mükemmel baskı sonuçları elde edebilirsiniz. İleri-Geri, Yukarı-Aşağı, Sağa-Sola ince ayar yapma özellikleri ile kullanım kolaylığı sağlar. Verilen ayarlar kilitlendiği için poza kaçırma sorunu yaşanmaz. Serigrafi Vakumlu Manuel Baskı Makinesi, istenilen ölçülerde özel imalat yapma esnekliği ile size özel çözümler sunar. İhtiyaçlarınız için bize e‑posta gönderebilir veya telefon ile ulaşabilirsiniz.",
      image: "/images/manuel-vakumlu-makinesi/makine1.jpeg",
      category: "Baskı Makineleri",
      features: [
        "Tezgah Alanı: 70×100 cm",
        "Vakumlu Alan: 50×70 cm",
        "Tabla: 3mm Eloksallı Alüminyum Plaka",
        "Vakum Motoru: Yüksek Performanslı",
        "Ayarlanabilir Özellikler: İleri-Geri, Yukarı-Aşağı, Sağa-Sola İnce Ayar",
        "Güvenlik: Ayarlar kilitlenir ve poza kaçırmaz",
        "Özel İmalat: İstenilen ölçülerde üretilebilir"
      ],
      specifications: [
        "Tezgah Alanı: 70x100cm",
        "Vakumlu Alan: 50x70cm",
        "Tabla: 3mm eloksallı alüminyum",
        "Vakum Motoru: Yüksek performans",
        "Ayar Mekanizması: İleri-Geri / Yukarı-Aşağı / Sağa-Sola",
        "Güvenlik: Ayar kilidi, poza kaçırmaz",
        "Özel İmalat: İstenilen ölçüler"
      ],
      rating: 4.8,
      gallery: ["/images/manuel-vakumlu-makinesi/makine1.jpeg"]
    },
    {
      id: "4",
      name: "Manuel Vakumlu Baskı Makinesi - 70x200",
      description: "70x200cm baskı alanına sahip manuel vakumlu serigrafi makinesi",
      longDescription: "Manuel Vakumlu Baskı Makinesi - 70x200, uzun format baskılar için tasarlanmış özel bir serigrafi makinesidir. 70x200cm'lik geniş baskı alanı ile banner, afiş ve büyük format materyallerde mükemmel sonuçlar elde edebilirsiniz.",
      image: "/images/manuel-vakumlu-70x200/makine-70x200.jpg",
      category: "Baskı Makineleri",
      features: [
        "70x200cm baskı alanı",
        "Uzun format baskı",
        "Vakum sistemi",
        "Hassas ayar mekanizması",
        "Banner uyumlu",
        "Stabil yapı"
      ],
      specifications: [
        "Baskı Alanı: 70x200cm",
        "Şase: Alüminyum",
        "Vakum Gücü: 1.0 bar",
        "Ağırlık: 65kg",
        "Boyutlar: 230x120x130cm",
        "Güç: Manuel + Vakum"
      ],
      rating: 4.8,
      gallery: ["/images/manuel-vakumlu-70x200/makine-70x200.jpg"]
    },
    {
      id: "10",
      name: "Manuel Vakumlu Baskı Makinesi - 80x250",
      description: "80x250cm baskı alanına sahip uzun format manuel vakumlu serigrafi makinesi",
      longDescription: "Manuel Vakumlu Baskı Makinesi - 80x250, ekstra uzun format baskılar için tasarlanmış özel serigrafi makinesidir. 80x250cm'lik ultra geniş baskı alanı ile en büyük format materyallerde bile hassas baskı imkanı sunar.",
      image: "/images/manuel-vakumlu-80x250/makine-80x250.jpg",
      category: "Baskı Makineleri",
      features: [
        "80x250cm baskı alanı",
        "Ultra uzun format",
        "Stabil vakum sistemi",
        "Güçlendirilmiş şase",
        "Büyük format uyumlu",
        "Hassas baskı"
      ],
      specifications: [
        "Baskı Alanı: 80x250cm",
        "Şase: Güçlendirilmiş Alüminyum",
        "Vakum Gücü: 1.1 bar",
        "Ağırlık: 75kg",
        "Boyutlar: 280x130x135cm",
        "Güç: Manuel + Vakum"
      ],
      rating: 4.7,
      gallery: ["/images/manuel-vakumlu-80x250/makine-80x250.jpg"]
    },
    {
      id: "9",
      name: "Tişört Baskı Tezgahı",
      description: "50x70 MDF tek renk tişört baskı tezgahı – profesyonel serigrafi baskı makinesi",
      longDescription: "OkanGökhan Serigrafi Makineleri tarafından üretilen 50x70 MDF tişört baskı tezgahı, tekstil baskı sektöründe profesyonel sonuçlar elde etmek isteyenler için tasarlanmıştır. Geniş 50x70 cm MDF baskı yüzeyi; tişört, bez çanta, sweatshirt ve farklı kumaş türlerinde yüksek kalite serigrafi baskı yapma imkânı sunar. Dayanıklı kırmızı metal şase uzun ömürlü kullanım sağlarken, ayarlanabilir baskı aparatı sayesinde farklı çerçeve ve kalıp boyutlarına kolayca uyum sağlar. Hem atölye hem de ev tipi üretim için uygundur. Bu tezgâh; yüksek baskı kalitesi, kolay kullanım ve verimli çalışma yapısıyla üretim süreçlerinizi hızlandırır.",
      image: "/images/tisort-baski-tezgahi/tisort-tezgahi.jpg",
      category: "Baskı Makineleri",
      features: [
        "50x70 cm MDF baskı yüzeyi",
        "Tek renk serigrafi baskı için ideal",
        "Ayarlanabilir baskı mekanizması",
        "Sağlam metal gövde",
        "Tişört, bez çanta ve tekstil ürünlerine uygun",
        "Profesyonel ve hobi kullanımına uygun"
      ],
      specifications: [
        "Tabla: 50x70cm MDF",
        "Renk: Tek renk",
        "Gövde: Kırmızı metal şase",
        "Ayar Mekanizması: Çerçeve ve kalıp uyumlu, ayarlanabilir",
        "Kullanım: Tişört, bez çanta, sweatshirt ve tekstil",
        "Uygulama: Atölye ve ev tipi üretim"
      ],
      rating: 4.8,
      gallery: ["/images/tisort-baski-tezgahi/tisort-tezgahi.jpg"]
    },
    {
      id: "32",
      name: "Emisyon Çekme Küreği",
      description: "Emülsiyon uygulama ve düzeltme için özel kürek",
      longDescription: "Emisyon Çekme Küreği, serigrafi kalıp hazırlığında emülsiyon uygulaması için kullanılan özel bir araçtır. Hassas kontrol imkanı ve ergonomik tasarımı ile profesyonel sonuçlar elde etmenizi sağlar. Dayanıklı malzemeden üretilmiş olup kolay temizlenebilir.",
      image: "/images/emisyon-cekme-kuregi/foto1.jpg",
      category: "Serigrafi Yardımcı Malzemeleri",
      features: [
        "Emülsiyon uygulaması",
        "Hassas kontrol",
        "Dayanıklı malzeme",
        "Ergonomik tasarım",
        "Kolay temizlik",
        "Profesyonel kullanım"
      ],
      specifications: [
        "Malzeme: Plastik",
        "Genişlik: 10-20cm",
        "Kalınlık: 2mm",
        "Uzunluk: 30cm",
        "Ağırlık: 150g",
        "Tip: Düz Kenar"
      ],
      rating: 4.6,
      gallery: ["/images/emisyon-cekme-kuregi/foto1.jpg"]
    },
    {
      id: "13",
      name: "PVC Boya",
      description: "PVC malzemeler için özel formül serigrafi boyası",
      longDescription: "PVC Boya, PVC malzemeler üzerine baskı yapmak için özel olarak geliştirilmiş serigrafi boyasıdır. Yüksek örtücülük ve hızlı kuruma özellikleri ile kaliteli sonuçlar elde etmenizi sağlar. PVC ile mükemmel yapışma gösterir.",
      image: "/images/pvc-boya/foto1.jpg",
      category: "Serigrafi Boyaları",
      features: [
        "PVC uyumlu formül",
        "Yüksek örtücülük",
        "Hızlı kuruma",
        "Güçlü yapışma",
        "Canlı renkler",
        "UV dayanımı"
      ],
      specifications: [
        "Tip: PVC Boyası",
        "Kuruma: 20 dakika",
        "Viskozite: Orta",
        "Hacim: 1kg",
        "Renk: Çeşitli",
        "Raf Ömrü: 18 ay"
      ],
      rating: 4.7,
      gallery: ["/images/pvc-boya/foto1.jpg"]
    },
    {
      id: "20",
      name: "Ragle Lastiği",
      description: "Yedek ragle lastiği, çeşitli sertliklerde",
      longDescription: "Ragle Lastiği, serigrafi baskılarında kullanılan ragleler için yedek lastik parçasıdır. Çeşitli sertlik seçenekleri ile farklı boya türleri ve yüzeyler için optimize edilmiştir. Yüksek kalite kauçuk malzemeden üretilmiş olup uzun ömürlü kullanım sağlar.",
      image: "/images/ragle-lastigi/foto1.jpg",
      category: "Serigrafi Yardımcı Malzemeleri",
      features: [
        "Çeşitli sertlik seçenekleri",
        "Yüksek kalite kauçuk",
        "Kolay değişim",
        "Aşınmaya dayanıklı",
        "Hassas kenar kalitesi",
        "Ekonomik çözüm"
      ],
      specifications: [
        "Sertlik: 60-90 Shore",
        "Malzeme: Poliüretan",
        "Kalınlık: 6-10mm",
        "Uzunluk: 25-100cm",
        "Renk: Mavi/Kırmızı",
        "Paket: Metre"
      ],
      rating: 4.5,
      gallery: ["/images/ragle-lastigi/foto1.jpg"]
    },
    {
      id: "7",
      name: "Serigrafi Masaüstü Baskı Aparatı",
      description: "Masaüstü kullanım için tasarlanmış serigrafi baskı aparatı",
      longDescription: "Serigrafi Masaüstü Baskı Aparatı, küçük ölçekli işler ve deneme baskıları için tasarlanmış pratik bir sistemdir. Masaüstünde kullanılabilecek kompakt boyutları ile hobi amaçlı ve küçük atölyeler için idealdir.",
      image: "/images/serigrafi-masaustu-aparat/masaustu-aparat.jpg",
      category: "Baskı Makineleri",
      features: [
        "Masaüstü uyumlu boyut",
        "Kompakt tasarım",
        "Kolay montaj",
        "Hafif yapı",
        "Hobi kullanımı",
        "Ekonomik"
      ],
      specifications: [
        "Baskı Alanı: 20x30cm",
        "Ağırlık: 5kg",
        "Boyutlar: 40x30x25cm",
        "Montaj: Vida ile",
        "Malzeme: Alüminyum",
        "Kullanım: Masaüstü"
      ],
      rating: 4.5,
      gallery: ["/images/serigrafi-masaustu-aparat/masaustu-aparat.jpg"]
    },
    {
      id: "8",
      name: "Serigrafi Ayaklı Baskı Aparatı",
      description: "Ayaklı tasarıma sahip profesyonel serigrafi baskı aparatı",
      longDescription: "Serigrafi Ayaklı Baskı Aparatı, ayaklı tasarımı ile ergonomik çalışma imkanı sunan profesyonel bir sistemdir. Yükseklik ayarı yapılabilir ve rahat çalışma pozisyonu sağlar. Orta ölçekli işletmeler için idealdir.",
      image: "/images/serigrafi-ayakli-aparat/ayakli-aparat.jpg",
      category: "Baskı Makineleri",
      features: [
        "Ayaklı ergonomik tasarım",
        "Yükseklik ayarlanabilir",
        "Profesyonel kullanım",
        "Stabil yapı",
        "Kolay kurulum",
        "Çok amaçlı"
      ],
      specifications: [
        "Baskı Alanı: 40x50cm",
        "Yükseklik: 80-100cm",
        "Ağırlık: 15kg",
        "Boyutlar: 60x50x100cm",
        "Malzeme: Çelik",
        "Ayar: Manuel"
      ],
      rating: 4.7,
      gallery: ["/images/serigrafi-ayakli-aparat/ayakli-aparat.jpg"]
    },
    {
      id: "28",
      name: "Mavi Emisyon",
      description: "Yüksek hassasiyetli mavi emülsiyon, detaylı işler için",
      longDescription: "Mavi Emisyon, yüksek hassasiyetli baskılar için özel olarak geliştirilmiş mavi renkli emülsiyondur. İnce detay çözünürlüğü ve UV dayanımı ile profesyonel sonuçlar elde etmenizi sağlar. Kolay kullanım ve temizlik özellikleri ile verimliliği artırır.",
      image: "/images/mavi-emisyon/foto1.jpg",
      category: "Serigrafi Yardımcı Malzemeleri",
      features: [
        "Yüksek hassasiyet",
        "Mavi renk filtresi",
        "İnce detay çözünürlüğü",
        "Profesyonel kalite",
        "UV dayanımı",
        "Kolay kullanım"
      ],
      specifications: [
        "Tip: Fotosensitif Emülsiyon",
        "Renk: Mavi",
        "Hassasiyet: Yüksek",
        "Hacim: 1kg",
        "Raf Ömrü: 6 ay",
        "Saklama: Karanlık/Serin"
      ],
      rating: 4.8,
      gallery: ["/images/mavi-emisyon/foto1.jpg"]
    },
    {
      id: "29",
      name: "Emülsiyon Sökücü Sıvı",
      description: "Kalıplardan emülsiyonu temizlemek için özel sıvı",
      longDescription: "Emülsiyon Sökücü Sıvı, serigrafi kalıplarından emülsiyonu etkili şekilde temizlemek için geliştirilmiş özel bir çözücüdür. Güçlü formülü ile hızlı çözme sağlar ve kalıp dostu yapısı ile mesh'e zarar vermez.",
      image: "/images/emulsiyon-sokucsu-sivi/foto1.jpg",
      category: "Serigrafi Yardımcı Malzemeleri",
      features: [
        "Güçlü temizlik etkisi",
        "Hızlı çözme",
        "Kalıp dostu formül",
        "Kolay uygulama",
        "Ekonomik kullanım",
        "Güvenli formül"
      ],
      specifications: [
        "Tip: Emülsiyon Sökücü",
        "Etki: Hızlı",
        "Hacim: 1L",
        "pH: Nötr",
        "Uygulama: Fırça/Sprey",
        "Raf Ömrü: 2 yıl"
      ],
      rating: 4.6,
      gallery: ["/images/emulsiyon-sokucsu-sivi/foto1.jpg"]
    },
    {
      id: "30",
      name: "Emülsiyon Sökücü Toz",
      description: "Toz formda emülsiyon sökücü, güçlü temizlik için",
      longDescription: "Emülsiyon Sökücü Toz, toz formda üretilen güçlü emülsiyon temizleyicisidir. Su ile karıştırılarak kullanılır ve uzun raf ömrü sunar. Ekonomik kullanım ve etkili çözme özelliği ile kalıp bakımında vazgeçilmez bir üründür.",
      image: "/images/emulsiyon-sokucsu-toz/foto1.jpg",
      category: "Serigrafi Yardımcı Malzemeleri",
      features: [
        "Toz formülasyon",
        "Güçlü temizlik",
        "Uzun raf ömrü",
        "Su ile karıştırılır",
        "Ekonomik kullanım",
        "Etkili çözme"
      ],
      specifications: [
        "Tip: Toz Emülsiyon Sökücü",
        "Ağırlık: 500g",
        "Karışım: 1:10 su ile",
        "Etki Süresi: 5-10 dk",
        "Raf Ömrü: 3 yıl",
        "Saklama: Kuru yer"
      ],
      rating: 4.7,
      gallery: ["/images/emulsiyon-sokucsu-toz/foto1.jpg"]
    },
    {
      id: "31",
      name: "Gölge Giderici",
      description: "Kalıp mesh'lerinde oluşan gölgeleri gideren özel çözüm",
      longDescription: "Gölge Giderici, serigrafi kalıplarının mesh'lerinde oluşan istenmeyen gölge bölgelerini temizlemek için özel olarak geliştirilmiş bir üründür. Baskı kalitesini artırır ve temiz sonuçlar elde etmenizi sağlar.",
      image: "/images/golge-giderici/foto1.jpg",
      category: "Serigrafi Yardımcı Malzemeleri",
      features: [
        "Gölge giderme",
        "Mesh temizliği",
        "Baskı kalitesi artırır",
        "Kolay uygulama",
        "Hızlı etki",
        "Mesh dostu"
      ],
      specifications: [
        "Tip: Gölge Giderici",
        "Hacim: 250ml",
        "Uygulama: Sprey",
        "Etki Süresi: 2-3 dk",
        "pH: Nötr",
        "Raf Ömrü: 18 ay"
      ],
      rating: 4.5,
      gallery: ["/images/golge-giderici/foto1.jpg"]
    },
    {
      id: "21",
      name: "Serigrafi Geciktirici",
      description: "Serigrafi boyalarının kuruma süresini uzatan geciktirici katkı maddesi",
      longDescription: "Serigrafi Geciktirici, boya karışımlarına eklenerek çalışma zamanını uzatan özel bir katkı maddesidir. Kuruma süresini kontrol altına alır ve daha verimli çalışma imkanı sağlar. Boya viskozitesini de düzenleyerek profesyonel sonuçlar elde etmenizi destekler.",
      image: "/images/serigrafi-geciktirici/foto1.jpg",
      category: "Serigrafi Yardımcı Malzemeleri",
      features: [
        "Kuruma süresini uzatır",
        "Çalışma zamanını artırır",
        "Boya viskozitesini düzenler",
        "Kolay karışım",
        "Ekonomik kullanım",
        "Profesyonel sonuçlar"
      ],
      specifications: [
        "Tip: Geciktirici Katkı",
        "Hacim: 250ml",
        "Karışım Oranı: %5-10",
        "Etki: Kuruma gecikmesi",
        "Uyumluluk: Tüm boyalar",
        "Raf Ömrü: 2 yıl"
      ],
      rating: 4.6,
      gallery: ["/images/serigrafi-geciktirici/foto1.jpg"]
    },
    {
      id: "19",
      name: "Serigrafi İnceltici",
      description: "Serigrafi boyalarının viskozitesini ayarlamak için inceltici katkı maddesi",
      longDescription: "Serigrafi İnceltici, yoğun boyaların viskozitesini düşürerek akıcılığını artıran özel bir katkı maddesidir. İnce detaylı baskılarda kullanım için idealdir. Renk değiştirmez ve boya kalitesini korur.",
      image: "/images/serigrafi-inceltici/foto1.jpg",
      category: "Serigrafi Yardımcı Malzemeleri",
      features: [
        "Boya viskozitesini düşürür",
        "Akıcılığı artırır",
        "İnce detaylarda kullanım",
        "Kolay karışım",
        "Renk değiştirmez",
        "Profesyonel kalite"
      ],
      specifications: [
        "Tip: İnceltici Katkı",
        "Hacim: 250ml",
        "Karışım Oranı: %2-5",
        "Etki: Viskozite düşürme",
        "Uyumluluk: Su bazlı boyalar",
        "Raf Ömrü: 2 yıl"
      ],
      rating: 4.7,
      gallery: ["/images/serigrafi-inceltici/foto1.jpg"]
    },
    {
      id: "27",
      name: "Su Bazlı Emisyon",
      description: "Çevre dostu su bazlı emülsiyon, kalıp hazırlama için",
      longDescription: "Su Bazlı Emisyon, çevre dostu formülü ile üretilen fotosensitif emülsiyondur. Kolay uygulama ve temizlik özellikleri ile kullanıcı dostu bir üründür. Güçlü örtücülük ve uzun raf ömrü ile pratik çözümler sunar.",
      image: "/images/su-bazli-emisyon/foto1.jpg",
      category: "Serigrafi Yardımcı Malzemeleri",
      features: [
        "Su bazlı formül",
        "Çevre dostu",
        "Kolay uygulama",
        "Güçlü örtücülük",
        "Temiz temizlik",
        "Uzun raf ömrü"
      ],
      specifications: [
        "Tip: Su Bazlı Emülsiyon",
        "Hacim: 1kg",
        "Hassasiyet: Orta",
        "Kuruma: Hava ile",
        "Temizlik: Su ile",
        "Raf Ömrü: 8 ay"
      ],
      rating: 4.7,
      gallery: ["/images/su-bazli-emisyon/foto1.jpg"]
    },
    {
      id: "14",
      name: "Tekstil Boyaları",
      description: "Tekstil baskıları için özel serigrafi boyaları",
      longDescription: "Tekstil Boyaları, kumaş ve tekstil ürünleri üzerine baskı yapmak için özel olarak geliştirilmiş su bazlı serigrafi boyalarıdır. Yumuşak dokunuş ve canlı renkler ile tekstil baskılarında mükemmel sonuçlar elde etmenizi sağlar.",
      image: "/images/tekstil-boyalari/foto1.jpg",
      category: "Serigrafi Boyaları",
      features: [
        "Su bazlı formül",
        "Tekstil uyumlu",
        "Yumuşak dokunuş",
        "Canlı renkler",
        "Yıkama dayanımı",
        "Çevre dostu"
      ],
      specifications: [
        "Tip: Su Bazlı Tekstil",
        "Kuruma: Fırın 160°C",
        "Viskozite: Düşük",
        "Hacim: 1kg",
        "Renk: 24 Standart",
        "Yıkama: 60°C"
      ],
      rating: 4.7,
      gallery: ["/images/tekstil-boyalari/foto1.jpg"]
    },
    {
      id: "23",
      name: "100x30 Lastik Tekerlek",
      description: "Serigrafi makineleri için 100x30mm lastik tekerlek",
      longDescription: "100x30 Lastik Tekerlek, serigrafi makinelerinin mobil kullanımı için tasarlanmış yüksek kaliteli tekerlek sistemidir. Sessiz hareket ve aşınmaya dayanıklı yapısı ile uzun süre kullanılabilir.",
      image: "/images/100x30-lastik-tekerlek/foto1.jpg",
      category: "Yedek Parçalar",
      features: [
        "100x30mm boyut",
        "Yüksek kalite lastik",
        "Sessiz hareket",
        "Aşınmaya dayanıklı",
        "Kolay montaj",
        "Çeşitli kullanım"
      ],
      specifications: [
        "Boyut: 100x30mm",
        "Malzeme: Kauçuk",
        "Yük Kapasitesi: 50kg",
        "Montaj: Cıvata ile",
        "Ağırlık: 0.8kg",
        "Paket: 4 adet"
      ],
      rating: 4.6,
      gallery: ["/images/100x30-lastik-tekerlek/foto1.jpg"]
    },
    {
      id: "26",
      name: "Makine Vakum Motoru",
      description: "Serigrafi makineleri için güçlü vakum motoru",
      longDescription: "Makine Vakum Motoru, manuel vakumlu serigrafi makineleri için yedek motor sistemidir. Güçlü emme kapasitesi ve sessiz çalışma özelliği ile kaliteli bir vakum sistemi sunar. Uzun ömürlü kullanım için tasarlanmıştır.",
      image: "/images/makine-vakum-motoru/foto1.jpg",
      category: "Yedek Parçalar",
      features: [
        "Güçlü emme kapasitesi",
        "Sessiz çalışma",
        "Uzun ömürlü motor",
        "Enerji tasarrufu",
        "Kolay montaj",
        "Düşük bakım"
      ],
      specifications: [
        "Güç: 1.5 kW",
        "Vakum: 0.8-1.2 bar",
        "Ses: <60 dB",
        "Ağırlık: 8kg",
        "Voltaj: 220V",
        "Garanti: 1 Yıl"
      ],
      rating: 4.8,
      gallery: ["/images/makine-vakum-motoru/foto1.jpg"]
    },
    {
      id: "24",
      name: "2.5cm Köşe Lastiği",
      description: "2.5cm kalınlığında köşe lastiği, makine kenarları için",
      longDescription: "2.5cm Köşe Lastiği, serigrafi makinelerinin kenar koruma sistemi için tasarlanmış esnek lastik profilidir. Kolay kesim ve uygulama özellikleri ile pratik çözümler sunar. Çeşitli renk seçenekleri mevcuttur.",
      image: "/images/25cm-kose-lastigi/foto1.jpg",
      category: "Yedek Parçalar",
      features: [
        "2.5cm kalınlık",
        "Esnek yapı",
        "Kolay kesim",
        "Uzun ömürlü",
        "Çeşitli renkler",
        "Yapışkan bantlı"
      ],
      specifications: [
        "Kalınlık: 2.5cm",
        "Genişlik: 2cm",
        "Uzunluk: 10m rulo",
        "Malzeme: EPDM",
        "Sertlik: 60 Shore",
        "Renk: Siyah/Gri"
      ],
      rating: 4.4,
      gallery: ["/images/25cm-kose-lastigi/foto1.jpg"]
    },
    {
      id: "34",
      name: "Baskı Tezgahı Papuçları",
      description: "Baskı tezgahları için kaydırmaz papuç seti",
      longDescription: "Baskı Tezgahı Papuçları, serigrafi baskı tezgahlarının ayakları için tasarlanmış kaydırmaz papuç setidir. Dayanıklı kauçuk malzemeden üretilmiş olup gürültüyü azaltır ve zemin koruması sağlar.",
      image: "/images/baski-tezgahi-papuclari/foto1.jpg",
      category: "Yedek Parçalar",
      features: [
        "Kaydırmaz taban",
        "Çeşitli boyutlar",
        "Dayanıklı kauçuk",
        "Kolay montaj",
        "Gürültü azaltır",
        "Set halinde"
      ],
      specifications: [
        "Malzeme: Kauçuk",
        "Boyut: 25-50mm",
        "Yükseklik: 10mm",
        "Set: 4 adet",
        "Renk: Siyah",
        "Montaj: Yapıştırmalı"
      ],
      rating: 4.6,
      gallery: ["/images/baski-tezgahi-papuclari/foto1.jpg"]
    },
    {
      id: "25",
      name: "5cm Köşe Lastiği",
      description: "5cm kalınlığında köşe lastiği, ağır hizmet için",
      longDescription: "5cm Köşe Lastiği, ağır hizmet tipi uygulamalar için tasarlanmış kalın köşe lastiğidir. Güçlü yapışma ve korozyona dayanıklı yapısı ile uzun ömürlü kullanım sağlar. Endüstriyel seviyede koruma sunar.",
      image: "/images/5cm-kose-lastigi/foto1.jpg",
      category: "Yedek Parçalar",
      features: [
        "5cm kalınlık",
        "Ağır hizmet tipi",
        "Güçlü yapışma",
        "Korozyona dayanıklı",
        "Kolay uygulama",
        "Uzun ömürlü"
      ],
      specifications: [
        "Kalınlık: 5cm",
        "Genişlik: 3cm",
        "Uzunluk: 5m rulo",
        "Malzeme: EPDM",
        "Sertlik: 70 Shore",
        "Renk: Siyah"
      ],
      rating: 4.5,
      gallery: ["/images/5cm-kose-lastigi/foto1.jpg"]
    },
    {
      id: "33",
      name: "Rayk Yay Çekme Yayı",
      description: "Rayk sistemleri için çekme yayı, hassas ayar için",
      longDescription: "Rayk Yay Çekme Yayı, rayk sistemlerinin hassas ayarı için geliştirilmiş özel yay mekanizmasıdır. Ayarlanabilir gerginlik sistemi ile mükemmel denge sağlar. Paslanmaz çelik malzemeden üretilmiş olup uzun ömürlü kullanım sunar.",
      image: "/images/rayk-yay-cekme-yayi/foto1.jpg",
      category: "Yedek Parçalar",
      features: [
        "Hassas yay sistemi",
        "Ayarlanabilir gerginlik",
        "Paslanmaz çelik",
        "Uzun ömürlü",
        "Kolay montaj",
        "Çeşitli boyutlar"
      ],
      specifications: [
        "Malzeme: Paslanmaz Çelik",
        "Uzunluk: 15-30cm",
        "Çap: 2-4mm",
        "Gerginlik: Ayarlanabilir",
        "Ağırlık: 100g",
        "Paket: 2 adet"
      ],
      rating: 4.7,
      gallery: ["/images/rayk-yay-cekme-yayi/foto1.jpg"]
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
    <div className="min-h-screen bg-muted">
      {/* Breadcrumb */}
      <section className="py-4 bg-white border-b">
        <div className="container mx-auto px-4">
          <nav className="flex items-center space-x-2 text-sm">
            <Link href="/" className="text-muted-foreground hover:text-primary">
              Ana Sayfa
            </Link>
            <span className="text-muted-foreground">/</span>
            <Link href="/urunler" className="text-muted-foreground hover:text-primary">
              Ürünler
            </Link>
            <span className="text-muted-foreground">/</span>
            <span className="text-foreground font-medium">{product.name}</span>
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
              <Card className="border-0 shadow-lg overflow-hidden w-fit mx-auto">
                <CardContent className="p-0">
                  <div
                    className={`relative bg-secondary flex items-center justify-center ${product.id === "2" ? "h-[560px] max-w-[620px]" : "h-[460px] max-w-[500px]"} mx-auto rounded-xl`}
                  >
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-contain"
                    />
                    <div className="absolute top-4 right-4">
                      <Badge variant="secondary" className="bg-white/90 text-foreground">
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
                <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                  {product.name}
                </h1>
                <p className="text-lg text-muted-foreground mb-4">
                  {product.description}
                </p>
                

              </div>

              {/* Özellikler */}
              <Card className="border-0 shadow-lg">
                <CardHeader>
                  <CardTitle className="text-xl font-semibold text-foreground">
                    Ürün Özellikleri
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {product.features.map((feature, index) => (
                      <div key={index} className="flex items-center space-x-2">
                        <CheckCircle className="w-4 h-4 text-primary flex-shrink-0" />
                        <span className="text-muted-foreground">{feature}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Teknik Özellikler */}
              <Card className="border-0 shadow-lg">
                <CardHeader>
                  <CardTitle className="text-xl font-semibold text-foreground">
                    Teknik Özellikler
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 gap-3">
                    {product.specifications.map((spec, index) => (
                      <div key={index} className="flex justify-between py-2 border-b border-input last:border-b-0">
                        <span className="text-muted-foreground font-medium">{spec.split(':')[0]}:</span>
                        <span className="text-foreground">{spec.split(':')[1]}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* CTA Butonları */}
              <div className="space-y-4">
                <Button 
                  size="lg" 
                  className="w-full bg-primary hover:bg-primary/90 text-primary-foreground"
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
            <h2 className="text-2xl font-bold text-foreground mb-6">
              Ürün Hakkında Detaylı Bilgi
            </h2>
            <div className="prose prose-lg max-w-none text-muted-foreground">
              <p className="text-lg leading-relaxed">
                {product.longDescription}
              </p>
              <p className="text-lg leading-relaxed mt-4">
                Bu ürün, OkanGökhan Serigrafi Makineleri&apos;nin 45 yıllık deneyimi ile geliştirilmiş olup, 
                en yüksek kalite standartlarında üretilmektedir. Müşteri memnuniyeti odaklı yaklaşımımız 
                ile her ihtiyaca uygun çözümler sunmaktayız.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Avantajlar */}
      <section className="py-12 bg-muted">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-2xl font-bold text-foreground mb-4">
              Neden OkanGökhan?
            </h2>
            <p className="text-muted-foreground max-w-3xl mx-auto">
              45 yıllık deneyimimizle size en kaliteli ürünleri ve hizmetleri sunuyoruz.
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
                    <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                      <benefit.icon className="w-8 h-8 text-primary" />
                    </div>
                    <CardTitle className="text-xl font-semibold text-foreground">
                      {benefit.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-muted-foreground">
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