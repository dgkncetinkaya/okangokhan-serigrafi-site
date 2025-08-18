"use client";

import Hero from "@/components/Hero";
import ProductCard from "@/components/ProductCard";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowRight, CheckCircle, Users, Award, Clock, Shield } from "lucide-react";
import Link from "next/link";

// Örnek ürün verileri
const sampleProducts = [
  {
    id: "1",
    name: "Manuel Vakumlu Baskı Makinesi",
    description: "Küçük ve orta ölçekli işletmeler için ideal manuel serigrafi makinesi",
    image: "/images/manuel-vakumlu-makinesi/makine1.jpeg",
    category: "Baskı Makineleri",
    features: ["Maksimum 50x70cm baskı alanı", "Hassas ayar sistemi", "Dayanıklı alüminyum şase"],
  },
  {
    id: "2",
    name: "60x110 Kurutma Rafı",
    description: "Yüksek verimlilik için tasarlanmış kurutma rafı",
    image: "/images/kurutma-raflari/60x110-kurutma-rafi.jpg",
    category: "Kurutma Rafları",
    features: ["60x110cm boyutlarında", "Çok katmanlı tasarım", "Kolay montaj"],
  },
  {
    id: "5",
    name: "4 Renk 1 İstasyonlu Serigrafi Baskı Tezgahı",
    description: "4 renk baskı kapasitesine sahip tek istasyonlu serigrafi tezgahı",
    image: "/images/4-renk-1-istasyonlu/tezgah.jpg",
    category: "Baskı Makineleri",
    features: ["4 renk baskı", "Tek istasyon", "Çok renkli baskı"],
  },
  {
    id: "9",
    name: "Tişört Baskı Tezgahı",
    description: "Tişört baskıları için özel tasarlanmış profesyonel baskı tezgahı",
    image: "/images/tisort-baski-tezgahi/tisort-tezgahi.jpg",
    category: "Baskı Makineleri",
    features: ["Tişört uyumlu", "Hassas baskı", "Ergonomik tasarım"],
  },
];

const features = [
  {
    icon: Award,
    title: "Kaliteli Üretim",
    description: "A kalite, dayanıklı ve anlaşılır ürünler ile en yüksek kalite standartlarında üretim"
  },
  {
    icon: Users,
    title: "Deneyimli Ekip",
    description: "45+ yıllık deneyime sahip uzman mühendislik ekibi"
  },
  {
    icon: Clock,
    title: "Hızlı Teslimat",
    description: "Anında Stok Teslim"
  },
  {
    icon: Shield,
    title: "Garanti",
    description: "Tüm ürünlerimiz 2 yıl garanti kapsamında"
  }
];

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <Hero />

      {/* Özellikler Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Neden OkanGökhan?
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              45 yılı aşkın deneyimimizle serigrafi sektörünün güvenilir ortağı olarak 
              kaliteli ve yenilikçi çözümler sunuyoruz.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="h-full text-center border-0 shadow-lg hover:shadow-xl transition-shadow">
                  <CardHeader>
                    <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                      <feature.icon className="w-8 h-8 text-primary" />
                    </div>
                    <CardTitle className="text-xl font-semibold text-foreground">
                      {feature.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-muted-foreground">
                      {feature.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Öne Çıkan Ürünler */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Öne Çıkan Ürünlerimiz
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Her ihtiyaca uygun serigrafi makineleri ve ekipmanları ile 
              üretiminizi bir üst seviyeye taşıyın.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            {sampleProducts.map((product, index) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <ProductCard {...product} />
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <Button size="lg" className="bg-primary hover:bg-primary/90" asChild>
              <Link href="/urunler">
                Tüm Ürünleri Gör
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Hakkımızda Kısa Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-6"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-foreground">
                OkanGökhan Serigrafi Makineleri
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                1980 yılında İstanbul&apos;da kurulan firmamız, serigrafi baskı makinaları, kurutma rafları, 
                serigrafi kalıpları ve boyalarını yüksek kalitede üretmek Türkiye ve Dünya piyasasına 
                pazarlamak üzerine faaliyet göstermektedir.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                45 yıllık tecrübesi ve deneyimleri ile serigraf piyasasında A kalite, dayanıklı, 
                gayet kolay ve anlaşılır ürünleri, bünyesinde barındırdığı deneyimli ve uzman 
                çalışma arkadaşlarıyla serigraf piyasasında daima 1 numara, en çok tavsiye edilen 
                ve sevilen bir firma olmuştur.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button asChild>
                  <Link href="/hakkimizda">
                    Daha Fazla Bilgi
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button variant="outline" asChild>
                  <Link href="/iletisim">
                    İletişime Geç
                  </Link>
                </Button>
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
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                      <CheckCircle className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold">45+ Yıllık Deneyim</h3>
                      <p className="text-white/90">Serigrafi sektöründe lider</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                      <Users className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold">1000+ Mutlu Müşteri</h3>
                      <p className="text-white/90">Türkiye ve yurtdışında</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                      <Award className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold">A Kalite Üretim</h3>
                      <p className="text-white/90">En yüksek standartlarda</p>
                    </div>
                  </div>
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
              Size Özel Serigrafi Çözümleri
            </h2>
            <p className="text-xl text-white/90">
              45 yıllık deneyimimizle ihtiyaçlarınıza uygun en iyi serigrafi makinelerini sunalım.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                variant="secondary"
              >
                Teklif Al
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-black" asChild>
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
}
