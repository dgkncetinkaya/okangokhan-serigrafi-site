"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Play, CheckCircle, MessageCircle } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

const Hero = () => {
  const features = [
    "40+ Yıllık Deneyim",
    "A Kalite Üretim",
    "Teknik Destek",
    "Hızlı Teslimat"
  ];

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-[#F2F2F2] via-white to-[#F2F2F2]">
      {/* Arka Plan Dekoratif Elementler */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 0.1, scale: 1 }}
          transition={{ duration: 2 }}
          className="absolute -top-40 -right-40 w-80 h-80 bg-[#F25C05] rounded-full blur-3xl"
        />
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 0.1, scale: 1 }}
          transition={{ duration: 2, delay: 0.5 }}
          className="absolute -bottom-40 -left-40 w-80 h-80 bg-[#F25C05]/60 rounded-full blur-3xl"
        />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Sol Taraf - İçerik */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="inline-flex items-center px-4 py-2 bg-[#F25C05]/10 text-[#F25C05] rounded-full text-sm font-medium"
            >
              <CheckCircle className="w-4 h-4 mr-2" />
              Serigrafi Piyasasında 1 Numara
            </motion.div>

            {/* Ana Başlık */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#1A1A1A] leading-tight"
            >
              Kaliteli{" "}
              <span className="text-[#F25C05]">Serigrafi</span>{" "}
              Makineleri
            </motion.h1>

            {/* Alt Başlık */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-xl text-[#4B4B4B] leading-relaxed"
            >
              40 yılı aşkın deneyimimizle, serigrafi sektörünün ihtiyaçlarını 
              karşılayan A kalite, dayanıklı ve anlaşılır makineler üretiyoruz.
            </motion.p>

            {/* Özellikler */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="grid grid-cols-2 gap-4"
            >
              {features.map((feature, index) => (
                <motion.div
                  key={feature}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
                  className="flex items-center space-x-2"
                >
                  <CheckCircle className="w-5 h-5 text-[#F25C05] flex-shrink-0" />
                  <span className="text-[#1A1A1A] font-medium">{feature}</span>
                </motion.div>
              ))}
            </motion.div>

            {/* CTA Butonları */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.7 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <Button size="lg" className="bg-[#F25C05] hover:bg-[#F25C05]/90 text-white px-8 py-3" asChild>
                <Link href="/urunler">
                  Ürünlerimizi İncele
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="px-8 py-3"
                onClick={() => {
                  const message = "Merhaba, serigrafi makinesi hakkında bilgi almak istiyorum.";
                  const whatsappUrl = `https://wa.me/905425094758?text=${encodeURIComponent(message)}`;
                  window.open(whatsappUrl, '_blank');
                }}
              >
                <MessageCircle className="mr-2 h-5 w-5" />
                Teklif Al
              </Button>
            </motion.div>

            {/* İstatistikler */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="grid grid-cols-3 gap-8 pt-8 border-t border-[#E5E5E5]"
            >
              <div className="text-center">
                <div className="text-3xl font-bold text-[#F25C05]">1000+</div>
                <div className="text-sm text-[#4B4B4B]">Mutlu Müşteri</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-[#F25C05]">40+</div>
                <div className="text-sm text-[#4B4B4B]">Yıllık Deneyim</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-[#F25C05]">24/7</div>
                <div className="text-sm text-[#4B4B4B]">Teknik Destek</div>
              </div>
            </motion.div>
          </motion.div>

          {/* Sağ Taraf - Serigrafi Görseli */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative"
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 1, delay: 0.5 }}
              className="relative z-20"
            >
              <div className="relative overflow-hidden rounded-2xl shadow-2xl">
                <Image
                  src="/images/hero-serigrafi.jpg"
                  alt="OkanGökhan Serigrafi Makineleri - Modern Baskı Süreci"
                  width={600}
                  height={400}
                  className="w-full h-auto object-cover"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
                <div className="absolute bottom-6 left-6 text-white">
                  <h3 className="text-xl font-semibold mb-2">Modern Serigrafi Süreci</h3>
                  <p className="text-white/90">Profesyonel baskı çözümleri</p>
                </div>
              </div>
            </motion.div>

            {/* Dekoratif Elementler */}
            <motion.div
              initial={{ rotate: 0 }}
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              className="absolute -top-4 -right-4 w-24 h-24 border-4 border-[#F25C05]/20 rounded-full z-10"
            />
            <motion.div
              initial={{ rotate: 0 }}
              animate={{ rotate: -360 }}
              transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
              className="absolute -bottom-4 -left-4 w-16 h-16 border-4 border-[#F25C05]/30 rounded-full z-10"
            />
          </motion.div>
        </div>
      </div>

      {/* Scroll İndikatörü */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.5 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-6 h-10 border-2 border-[#4B4B4B] rounded-full flex justify-center"
        >
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-1 h-3 bg-[#4B4B4B] rounded-full mt-2"
          />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero; 