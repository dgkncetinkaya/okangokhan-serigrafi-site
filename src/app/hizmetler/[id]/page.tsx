"use client";

import { motion } from "framer-motion";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, Phone, MessageCircle, CheckCircle, Clock, Users, Award, Shield, Wrench, Truck, BookOpen } from "lucide-react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { use } from "react";

interface ServiceDetailPageProps {
  params: Promise<{
    id: string;
  }>;
}

const services = [
  {
    id: "1",
    title: "Teknik Destek",
    description: "Uzman ekibimizle 7/24 teknik destek hizmeti",
    longDescription: "Serigrafi makinelerinizin kurulumu, kullanımı ve bakımı konularında uzman ekibimizden teknik destek alabilirsiniz. Deneyimli mühendislerimiz, her türlü teknik sorununuza çözüm üretir. 45 yıllık deneyimimizle sektörde lider konumdayız.",
    icon: Wrench,
    features: [
      "7/24 teknik destek",
      "Uzaktan destek",
      "Yerinde servis",
      "Kurulum desteği",
      "Kullanım eğitimi",
      "Sorun giderme"
    ],
    benefits: [
      "Hızlı çözüm süresi",
      "Uzman mühendis desteği",
      "Kesintisiz üretim",
      "Maliyet tasarrufu"
    ],
    process: [
      "Sorun tespiti ve analizi",
      "Çözüm önerisi sunumu",
      "Uygulama ve test",
      "Takip ve kontrol"
    ],
    isPopular: true,
    price: "Ücretsiz Danışma",
    duration: "7/24 Erişilebilir"
  },
  {
    id: "2",
    title: "Kurulum Hizmeti",
    description: "Profesyonel kurulum ve montaj hizmeti",
    longDescription: "Satın aldığınız serigrafi makinelerinin profesyonel kurulumunu gerçekleştiriyoruz. Deneyimli ekibimiz, makinelerinizi en uygun şekilde kurar ve çalışır hale getirir. Kurulum sonrası eğitim ve destek hizmetleri de sunuyoruz.",
    icon: Truck,
    features: [
      "Profesyonel montaj",
      "Yerinde kurulum",
      "Test ve kalibrasyon",
      "Güvenlik kontrolü",
      "Kullanım eğitimi",
      "Kurulum sonrası destek"
    ],
    benefits: [
      "Hızlı devreye alma",
      "Güvenli kurulum",
      "Optimum performans",
      "Uzun ömürlü kullanım"
    ],
    process: [
      "Saha analizi ve hazırlık",
      "Makine montajı",
      "Test ve kalibrasyon",
      "Eğitim ve teslim"
    ],
    isPopular: false,
    price: "Proje Bazlı",
    duration: "1-3 Gün"
  },
  {
    id: "3",
    title: "Bakım Hizmeti",
    description: "Düzenli bakım ve onarım hizmetleri",
    longDescription: "Serigrafi makinelerinizin uzun ömürlü kullanımı için düzenli bakım hizmetleri sunuyoruz. Periyodik bakımlar ile makinelerinizin performansını koruyoruz. Önleyici bakım yaklaşımımızla arızaları önceden tespit ederiz.",
    icon: Wrench,
    features: [
      "Periyodik bakım",
      "Önleyici bakım",
      "Arıza giderme",
      "Yedek parça değişimi",
      "Performans optimizasyonu",
      "Bakım raporu"
    ],
    benefits: [
      "Arıza riskini azaltır",
      "Makine ömrünü uzatır",
      "Üretim verimliliği",
      "Maliyet kontrolü"
    ],
    process: [
      "Makine durumu analizi",
      "Bakım planı hazırlama",
      "Bakım işlemlerinin uygulanması",
      "Rapor ve takip"
    ],
    isPopular: false,
    price: "Paket Seçenekleri",
    duration: "Düzenli Aralıklar"
  },
  {
    id: "4",
    title: "Eğitim Hizmeti",
    description: "Serigrafi makinesi kullanım eğitimleri",
    longDescription: "Personelinizin serigrafi makinelerini etkin kullanabilmesi için kapsamlı eğitim programları düzenliyoruz. Teorik ve pratik eğitimler ile uzmanlaşmalarını sağlıyoruz. Sertifikalı eğitim programlarımızla personel gelişimine katkıda bulunuyoruz.",
    icon: BookOpen,
    features: [
      "Temel kullanım eğitimi",
      "İleri seviye teknikler",
      "Bakım eğitimi",
      "Güvenlik eğitimi",
      "Pratik uygulamalar",
      "Sertifika programı"
    ],
    benefits: [
      "Personel verimliliği",
      "Hata oranını azaltır",
      "İş güvenliği",
      "Kalite artışı"
    ],
    process: [
      "İhtiyaç analizi",
      "Eğitim programı tasarımı",
      "Teorik ve pratik eğitim",
      "Değerlendirme ve sertifika"
    ],
    isPopular: false,
    price: "Grup İndirimleri",
    duration: "1-5 Gün"
  },
  {
    id: "5",
    title: "Danışmanlık Hizmeti",
    description: "Serigrafi sektöründe uzman danışmanlık",
    longDescription: "Serigrafi işinizi kurmak veya geliştirmek için uzman danışmanlık hizmetleri sunuyoruz. 45 yıllık deneyimimizle size en uygun çözümleri öneriyoruz. İş planından ekipman seçimine kadar her aşamada yanınızdayız.",
    icon: Users,
    features: [
      "İş kurma danışmanlığı",
      "Ekipman seçimi",
      "Üretim optimizasyonu",
      "Kalite yönetimi",
      "Pazar analizi",
      "Stratejik planlama"
    ],
    benefits: [
      "Doğru yatırım kararları",
      "Risk minimizasyonu",
      "Rekabet avantajı",
      "Sürdürülebilir büyüme"
    ],
    process: [
      "Mevcut durum analizi",
      "Hedef belirleme",
      "Strateji geliştirme",
      "Uygulama desteği"
    ],
    isPopular: false,
    price: "Saatlik Ücret",
    duration: "Proje Bazlı"
  },
  {
    id: "6",
    title: "Yedek Parça Hizmeti",
    description: "Orijinal yedek parça tedariki",
    longDescription: "Serigrafi makineleriniz için orijinal yedek parçaları hızlı ve güvenilir şekilde tedarik ediyoruz. Geniş yedek parça stokumuz ile kesintisiz üretim sağlıyoruz. Kaliteli parçalarla makinelerinizin performansını koruyoruz.",
    icon: Wrench,
    features: [
      "Orijinal yedek parçalar",
      "Hızlı tedarik",
      "Stok garantisi",
      "Kalite garantisi",
      "Teknik destek",
      "Montaj desteği"
    ],
    benefits: [
      "Makine uyumluluğu",
      "Uzun ömürlü kullanım",
      "Hızlı teslimat",
      "Güvenilir kalite"
    ],
    process: [
      "Parça ihtiyacı tespiti",
      "Stok kontrolü",
      "Sipariş ve tedarik",
      "Teslimat ve montaj"
    ],
    isPopular: false,
    price: "Parça Bazlı",
    duration: "1-7 Gün"
  }
];

export default function ServiceDetailPage({ params }: ServiceDetailPageProps) {
  const { id } = use(params);
  const service = services.find(s => s.id === id);

  if (!service) {
    notFound();
  }

  const IconComponent = service.icon;

  const handleWhatsAppClick = () => {
    const message = `Merhaba, ${service.title} hizmeti hakkında bilgi almak istiyorum.`;
    const whatsappUrl = `https://wa.me/905425094758?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-muted to-input">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto text-center"
          >
            <Link 
              href="/hizmetler" 
              className="inline-flex items-center text-primary hover:text-primary/80 transition-colors mb-6"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Hizmetlere Dön
            </Link>
            
            <div className="flex items-center justify-center mb-6">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mr-4">
                <IconComponent className="w-8 h-8 text-primary" />
              </div>
              <div className="text-left">
                <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-2">
                  {service.title}
                </h1>
                {service.isPopular && (
                  <Badge variant="secondary" className="bg-primary text-white">
                    Popüler Hizmet
                  </Badge>
                )}
              </div>
            </div>
            
            <p className="text-xl text-muted-foreground leading-relaxed mb-8">
              {service.longDescription}
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" onClick={handleWhatsAppClick}>
                <MessageCircle className="mr-2 h-5 w-5" />
                Hemen İletişime Geç
              </Button>
              <Button size="lg" variant="outline" asChild>
                <a href="tel:+905425094758">
                  <Phone className="mr-2 h-5 w-5" />
                  Hemen Ara
                </a>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Service Details */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-12">
              {/* Features */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <h2 className="text-3xl font-bold text-foreground mb-8">Hizmet Özellikleri</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {service.features.map((feature, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      viewport={{ once: true }}
                      className="flex items-center space-x-3"
                    >
                      <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                        <CheckCircle className="w-5 h-5 text-primary" />
                      </div>
                      <span className="text-foreground">{feature}</span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              {/* Benefits */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <h2 className="text-3xl font-bold text-foreground mb-8">Avantajlar</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {service.benefits.map((benefit, index) => (
                    <Card key={index} className="border-l-4 border-l-primary">
                      <CardContent className="p-6">
                        <div className="flex items-center space-x-3">
                          <Award className="w-6 h-6 text-primary" />
                          <span className="font-semibold text-foreground">{benefit}</span>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </motion.div>

              {/* Process */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <h2 className="text-3xl font-bold text-foreground mb-8">Süreç</h2>
                <div className="space-y-6">
                  {service.process.map((step, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      viewport={{ once: true }}
                      className="flex items-start space-x-4"
                    >
                      <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center flex-shrink-0 text-white font-bold">
                        {index + 1}
                      </div>
                      <div className="pt-2">
                        <p className="text-foreground font-medium">{step}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </div>

            {/* Sidebar */}
            <div className="space-y-8">
              {/* Service Info Card */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <Card className="sticky top-8">
                  <CardHeader>
                    <CardTitle className="flex items-center space-x-2">
                      <IconComponent className="w-6 h-6 text-primary" />
                      <span>Hizmet Bilgileri</span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <span className="text-muted-foreground">Fiyat:</span>
                        <span className="font-semibold text-primary">{service.price}</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-muted-foreground">Süre:</span>
                        <span className="font-semibold">{service.duration}</span>
                      </div>
                    </div>
                    
                    <div className="border-t pt-6">
                      <Button className="w-full mb-3" onClick={handleWhatsAppClick}>
                        <MessageCircle className="mr-2 h-4 w-4" />
                        WhatsApp ile İletişim
                      </Button>
                      <Button variant="outline" className="w-full" asChild>
                        <a href="tel:+905425094758">
                          <Phone className="mr-2 h-4 w-4" />
                          Telefon ile Ara
                        </a>
                      </Button>
                    </div>
                    
                    <div className="border-t pt-6">
                      <h4 className="font-semibold mb-3">İletişim Bilgileri</h4>
                      <div className="space-y-2 text-sm text-muted-foreground">
                        <p>📞 +90 (542) 509 47 58</p>
                        <p>📧 dogukancetinkaya@okangokhan.com</p>
                        <p>🕒 Pazartesi - Cuma: 08:00 - 18:00</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-primary to-primary/80">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center text-white"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              {service.title} Hizmetimizden Yararlanın
            </h2>
            <p className="text-xl mb-8 text-white/90">
              45 yıllık deneyimimizle size en uygun çözümleri sunalım.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                variant="secondary" 
                className="bg-white text-primary hover:bg-white/90"
                onClick={handleWhatsAppClick}
              >
                <MessageCircle className="mr-2 h-5 w-5" />
                Hemen Başlayın
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="border-white text-white bg-transparent hover:bg-white hover:text-primary"
                asChild
              >
                <Link href="/hizmetler">
                  Diğer Hizmetler
                </Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}