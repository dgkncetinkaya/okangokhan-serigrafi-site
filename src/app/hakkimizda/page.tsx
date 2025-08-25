"use client";

import { motion } from "framer-motion";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, Users, Award, Target, Eye, CheckCircle, Factory, Globe, Clock } from "lucide-react";
import Link from "next/link";

const AboutPage = () => {
  const milestones = [
    {
      year: "1980",
      title: "Kuruluş",
      description: "OkanGökhan Serigrafi Makinaları İstanbul'da kuruldu"
    },
    {
      year: "1990",
      title: "İlk İhracat",
      description: "İlk serigrafi makinesi ihracatı gerçekleştirildi"
    },
    {
      year: "2000",
      title: "Kalite Sertifikası",
      description: "A kalite üretim standartları belirlendi"
    },
    {
      year: "2010",
      title: "Pazar Liderliği",
      description: "Serigrafi piyasasında 1 numara olma hedefine ulaşıldı"
    },
    {
      year: "2020",
      title: "45. Yıl",
      description: "45 yıllık deneyim ve güven"
    },
    {
      year: "2024",
      title: "Sürekli Gelişim",
      description: "En çok tavsiye edilen ve sevilen firma olmaya devam"
    }
  ];

  const values = [
    {
      icon: Target,
      title: "Misyonumuz",
      description: "Serigrafi baskı makinaları, kurutma rafları, serigrafi kalıpları ve boyalarını yüksek kalitede üretmek Türkiye ve Dünya piyasasına pazarlamak."
    },
    {
      icon: Eye,
      title: "Vizyonumuz",
      description: "Serigrafi piyasasında daima 1 numara, en çok tavsiye edilen ve sevilen bir firma olmak."
    },
    {
      icon: Award,
      title: "Değerlerimiz",
      description: "A kalite, dayanıklı, gayet kolay ve anlaşılır ürünler üretmek ve deneyimli uzman çalışma arkadaşlarıyla hizmet vermek."
    }
  ];

  const stats = [
    { number: "45+", label: "Yıllık Deneyim", icon: Clock },
    { number: "1000+", label: "Mutlu Müşteri", icon: Users },
    { number: "2000+", label: "Üretilen Makine", icon: Factory },
    { number: "30+", label: "İhracat Ülkesi", icon: Globe }
  ];

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
              Hakkımızda
            </h1>
            <div className="text-xl text-muted-foreground leading-relaxed mb-8 space-y-4">
              <p>
                OkanGökhan Serigrafi Makinaları, serigrafi baskı makinaları, kurutma rafları, serigrafi kalıpları ve boyalarını yüksek kalitede üretmek Türkiye ve Dünya piyasasına pazarlamak üzerine 1980 yılında İstanbul&apos;da kurulmuştur.
              </p>
              <p>
                OkanGökhan Serigrafi Makinaları, 45 yıllık tecrübesi ve deneyimleri ile serigrafi piyasasında A kalite, dayanıklı, gayet kolay ve anlaşılır ürünleri, bünyesinde barındırdığı deneyimli ve uzman çalışma arkadaşlarıyla serigraf piyasasında daima 1 numara, en çok tavsiye edilen ve sevilen bir firma olmuştur.
              </p>
              <p>
                OkanGökhan Serigrafi Makinaları, 45 yıllık tecrübesi ve deneyimleri ile serigrafi piyasasında A kalite, dayanıklı, gayet kolay ve anlaşılır ürünleri, bünyesinde barındırdığı deneyimli ve uzman çalışma arkadaşlarıyla serigraf piyasasında daima 1 numara, en çok tavsiye edilen ve sevilen bir firma olmuştur.
              </p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="text-center"
                >
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-3">
                    <stat.icon className="w-8 h-8 text-primary" />
                  </div>
                  <div className="text-2xl font-bold text-primary">{stat.number}</div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Misyon, Vizyon, Değerler */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Misyon, Vizyon ve Değerlerimiz
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              45 yıllık deneyimimizle kaliteli üretim ve müşteri memnuniyeti odaklı yaklaşımımızla 
              sektörde güvenilir bir marka olmaya devam ediyoruz.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
              >
                <Card className="h-full text-center border-0 shadow-lg hover:shadow-xl transition-shadow">
                  <CardHeader>
                    <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                      <value.icon className="w-10 h-10 text-primary" />
                    </div>
                    <CardTitle className="text-2xl font-semibold text-foreground">
                      {value.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-muted-foreground text-base leading-relaxed">
                      {value.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Tarihçe */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              45 Yıllık Tarihçe
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Serigrafi sektöründe 50 yılı aşkın deneyimimizle 
              sürekli gelişim ve yenilikçilik yolculuğumuz.
            </p>
          </motion.div>

          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 bg-primary/20 h-full hidden md:block"></div>
            
            <div className="space-y-12">
              {milestones.map((milestone, index) => (
                <motion.div
                  key={milestone.year}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className={`flex items-center ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} flex-col`}
                >
                  <div className="md:w-1/2 mb-6 md:mb-0">
                    <Card className="border-0 shadow-lg">
                      <CardHeader>
                        <div className="flex items-center space-x-3">
                          <div className="w-12 h-12 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold">
                            {milestone.year}
                          </div>
                          <CardTitle className="text-xl text-foreground">{milestone.title}</CardTitle>
                        </div>
                      </CardHeader>
                      <CardContent>
                        <CardDescription className="text-muted-foreground">
                          {milestone.description}
                        </CardDescription>
                      </CardContent>
                    </Card>
                  </div>
                  
                  {/* Timeline Dot */}
                  <div className="hidden md:block w-4 h-4 bg-primary rounded-full border-4 border-white shadow-lg z-10"></div>
                  
                  <div className="md:w-1/2"></div>
                </motion.div>
              ))}
            </div>
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
              45 Yıllık Deneyimle Yanınızdayız
            </h2>
            <p className="text-xl text-white/90">
              Serigrafi sektöründe güvenilir çözüm ortağınız olmaya devam ediyoruz.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                variant="secondary" 
                onClick={() => {
                  const message = "Merhaba, serigrafi makinesi hakkında bilgi almak istiyorum.";
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

export default AboutPage;