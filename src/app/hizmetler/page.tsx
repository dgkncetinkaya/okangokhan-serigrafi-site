"use client";

import { motion } from "framer-motion";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Wrench, Truck, Users, BookOpen, Phone, MessageCircle, CheckCircle } from "lucide-react";
import Link from "next/link";

const ServicesPage = () => {
  const services = [
    {
      id: "1",
      title: "Teknik Destek",
      description: "Uzman ekibimizle 7/24 teknik destek hizmeti",
      longDescription: "Serigrafi makinelerinizin kurulumu, kullanımı ve bakımı konularında uzman ekibimizden teknik destek alabilirsiniz. Deneyimli mühendislerimiz, her türlü teknik sorununuza çözüm üretir.",
      icon: Wrench,
      features: [
        "7/24 teknik destek",
        "Uzaktan destek",
        "Yerinde servis",
        "Kurulum desteği",
        "Kullanım eğitimi",
        "Sorun giderme"
      ],
      isPopular: true
    },
    {
      id: "2",
      title: "Kurulum Hizmeti",
      description: "Profesyonel kurulum ve montaj hizmeti",
      longDescription: "Satın aldığınız serigrafi makinelerinin profesyonel kurulumunu gerçekleştiriyoruz. Deneyimli ekibimiz, makinelerinizi en uygun şekilde kurar ve çalışır hale getirir.",
      icon: Truck,
      features: [
        "Profesyonel montaj",
        "Yerinde kurulum",
        "Test ve kalibrasyon",
        "Güvenlik kontrolü",
        "Kullanım eğitimi",
        "Kurulum sonrası destek"
      ]
    },
    {
      id: "3",
      title: "Bakım Hizmeti",
      description: "Düzenli bakım ve onarım hizmetleri",
      longDescription: "Serigrafi makinelerinizin uzun ömürlü kullanımı için düzenli bakım hizmetleri sunuyoruz. Periyodik bakımlar ile makinelerinizin performansını koruyoruz.",
      icon: Wrench,
      features: [
        "Periyodik bakım",
        "Önleyici bakım",
        "Arıza giderme",
        "Yedek parça değişimi",
        "Performans optimizasyonu",
        "Bakım raporu"
      ]
    },
    {
      id: "4",
      title: "Eğitim Hizmeti",
      description: "Serigrafi makinesi kullanım eğitimleri",
      longDescription: "Personelinizin serigrafi makinelerini etkin kullanabilmesi için kapsamlı eğitim programları düzenliyoruz. Teorik ve pratik eğitimler ile uzmanlaşmalarını sağlıyoruz.",
      icon: BookOpen,
      features: [
        "Temel kullanım eğitimi",
        "İleri seviye teknikler",
        "Bakım eğitimi",
        "Güvenlik eğitimi",
        "Pratik uygulamalar",
        "Sertifika programı"
      ]
    },
    {
      id: "5",
      title: "Danışmanlık Hizmeti",
      description: "Serigrafi sektöründe uzman danışmanlık",
      longDescription: "Serigrafi işinizi kurmak veya geliştirmek için uzman danışmanlık hizmetleri sunuyoruz. 45 yıllık deneyimimizle size en uygun çözümleri öneriyoruz.",
      icon: Users,
      features: [
        "İş kurma danışmanlığı",
        "Ekipman seçimi",
        "Üretim optimizasyonu",
        "Kalite yönetimi",
        "Pazar analizi",
        "Stratejik planlama"
      ]
    },
    {
      id: "6",
      title: "Yedek Parça Hizmeti",
      description: "Orijinal yedek parça tedariki",
      longDescription: "Serigrafi makineleriniz için orijinal yedek parçaları hızlı ve güvenilir şekilde tedarik ediyoruz. Geniş yedek parça stokumuz ile kesintisiz üretim sağlıyoruz.",
      icon: Wrench,
      features: [
        "Orijinal yedek parçalar",
        "Hızlı tedarik",
        "Stok garantisi",
        "Kalite garantisi",
        "Teknik destek",
        "Montaj desteği"
      ]
    }
  ];

  const stats = [
    { number: "45+", label: "Yıllık Deneyim", description: "Sektörde lider" },
    { number: "1000+", label: "Mutlu Müşteri", description: "Türkiye geneli" },
    { number: "24/7", label: "Teknik Destek", description: "Kesintisiz hizmet" },
    { number: "100%", label: "Müşteri Memnuniyeti", description: "Garantili kalite" }
  ];

  const handleWhatsAppClick = (serviceName: string) => {
    const message = `Merhaba, ${serviceName} hizmeti hakkında bilgi almak istiyorum.`;
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
            className="text-center max-w-4xl mx-auto"
          >
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Hizmetlerimiz
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed mb-8">
              45 yıllık deneyimimizle serigrafi sektöründe kapsamlı hizmetler sunuyoruz. 
              Ürün satışından sonra da yanınızdayız.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="text-center"
                >
                  <div className="text-2xl font-bold text-primary mb-1">{stat.number}</div>
                  <div className="text-sm font-semibold text-foreground">{stat.label}</div>
                  <div className="text-xs text-muted-foreground">{stat.description}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Hizmetler Grid */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Kapsamlı Hizmet Paketlerimiz
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Serigrafi makinelerinizin kurulumundan bakımına kadar her aşamada 
              profesyonel hizmet alabilirsiniz.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
              >
                <Card className="h-full border-0 shadow-lg hover:shadow-xl transition-shadow">
                  <CardHeader>
                    <div className="flex items-center justify-between mb-4">
                      <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center">
                        <service.icon className="w-8 h-8 text-primary" />
                      </div>
                      {service.isPopular && (
                        <Badge className="bg-primary hover:bg-primary/90">
                          Popüler
                        </Badge>
                      )}
                    </div>
                    <CardTitle className="text-xl font-semibold text-foreground">
                      {service.title}
                    </CardTitle>
                    <CardDescription className="text-muted-foreground">
                      {service.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="space-y-2">
                        {service.features.slice(0, 4).map((feature, featureIndex) => (
                          <div key={featureIndex} className="flex items-center space-x-2">
                            <CheckCircle className="w-4 h-4 text-primary flex-shrink-0" />
                            <span className="text-sm text-muted-foreground">{feature}</span>
                          </div>
                        ))}
                      </div>
                      
                      <div className="pt-4 space-y-2">
                        <Button 
                          className="w-full bg-primary hover:bg-primary/90"
                          onClick={() => handleWhatsAppClick(service.title)}
                        >
                          <MessageCircle className="mr-2 h-4 w-4" />
                          Teklif Al
                        </Button>
                        <Button 
                          variant="outline" 
                          className="w-full border-primary text-primary hover:bg-primary hover:text-primary-foreground"
                          asChild
                        >
                          <Link href={`/hizmetler/${service.id}`}>
                            Detayları Gör
                            <ArrowRight className="ml-2 h-4 w-4" />
                          </Link>
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Neden Biz Section */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-6"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-foreground">
                Neden Hizmetlerimizi Tercih Etmelisiniz?
              </h2>
              <div className="space-y-4">
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <CheckCircle className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-foreground mb-2">45 Yıllık Deneyim</h3>
                    <p className="text-muted-foreground">Serigrafi sektöründe 45 yılı aşkın deneyimimizle en iyi hizmeti sunuyoruz.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <CheckCircle className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-foreground mb-2">Uzman Ekip</h3>
                    <p className="text-muted-foreground">Deneyimli mühendislerimiz ve teknik personelimizle kaliteli hizmet garantisi.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <CheckCircle className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-foreground mb-2">Hızlı Müdahale</h3>
                    <p className="text-muted-foreground">Acil durumlarınızda hızlı müdahale ile üretiminizi kesintisiz sürdürün.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <CheckCircle className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-foreground mb-2">Garantili Hizmet</h3>
                    <p className="text-muted-foreground">Tüm hizmetlerimiz garanti kapsamında, müşteri memnuniyeti odaklı çalışıyoruz.</p>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="bg-gradient-to-br from-primary to-primary/80 rounded-2xl p-8 text-white">
                <div className="space-y-6">
                  <h3 className="text-2xl font-bold">Hızlı İletişim</h3>
                  <div className="space-y-4">
                    <div className="flex items-center space-x-3">
                      <Phone className="w-5 h-5" />
                      <span>+90 (542) 509 47 58</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <MessageCircle className="w-5 h-5" />
                      <span>WhatsApp Destek</span>
                    </div>
                  </div>
                  <Button 
                    className="w-full bg-white text-primary hover:bg-white/90"
                    onClick={() => {
                      const message = "Merhaba, hizmetleriniz hakkında bilgi almak istiyorum.";
                      const whatsappUrl = `https://wa.me/905425094758?text=${encodeURIComponent(message)}`;
                      window.open(whatsappUrl, '_blank');
                    }}
                  >
                    <MessageCircle className="mr-2 h-4 w-4" />
                    Hemen İletişime Geç
                  </Button>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl mx-auto space-y-6"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white">
              Hizmetlerimiz Hakkında Bilgi Alın
            </h2>
            <p className="text-xl text-white/90">
              45 yıllık deneyimimizle size en uygun hizmet paketini sunalım.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                variant="secondary" 
                onClick={() => {
                  const message = "Merhaba, hizmetleriniz hakkında bilgi almak istiyorum.";
                  const whatsappUrl = `https://wa.me/905425094758?text=${encodeURIComponent(message)}`;
                  window.open(whatsappUrl, '_blank');
                }}
              >
                Teklif Al
              </Button>
              <Button size="lg" variant="outline" className="border-2 border-white bg-white/10 backdrop-blur-sm text-white font-semibold hover:bg-white hover:text-black hover:scale-105 transition-all duration-300 shadow-lg" asChild>
                <Link href="/iletisim">
                  İletişime Geç
                </Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default ServicesPage;