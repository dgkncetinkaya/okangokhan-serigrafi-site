"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Phone, Mail, MapPin, Clock, Send, CheckCircle, MessageSquare, Building } from "lucide-react";

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    subject: "",
    message: "",
    service: ""
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    setIsSubmitting(false);
    setIsSubmitted(true);
    
    // Reset form after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        name: "",
        email: "",
        phone: "",
        company: "",
        subject: "",
        message: "",
        service: ""
      });
    }, 3000);
  };

  const contactInfo = [
    {
      icon: Phone,
      title: "Telefon",
      value: "+90 (542) 509 47 58",
      description: "Ana telefon hattı",
      link: "tel:+905425094758"
    },
    {
      icon: Phone,
      title: "Telefon",
      value: "+90 (535) 558 90 58",
      description: "Mobil telefon",
      link: "tel:+905355589058"
    },
    {
      icon: Phone,
      title: "Telefon",
      value: "+90 (212) 482 37 17",
      description: "Sabit telefon",
      link: "tel:+902124823717"
    },
    {
      icon: Mail,
      title: "E-posta",
      value: "dogukancetinkaya@okangokhan.com",
      description: "Hızlı yanıt garantisi",
      link: "mailto:dogukancetinkaya@okangokhan.com"
    },
    {
      icon: MapPin,
      title: "Adres",
      value: "Maltepe Mah. Akınsal San. Sit. D Blok No:37/38 Cevizlibağ/Zeytinburnu",
      description: "Merkezi konum",
      link: "https://maps.google.com/?q=OkanGökhan+Serigrafi+Makinaları+Maltepe+Mah.+Akınsal+San.+Sit.+D+Blok+No:37/38+Cevizlibağ/Zeytinburnu+İstanbul"
    },
    {
      icon: Clock,
      title: "Çalışma Saatleri",
      value: "Pazartesi - Cuma: 08:00 - 18:00",
      description: "Cumartesi: 09:00 - 14:00"
    }
  ];

  const services = [
    "Baskı Makineleri",
    "Kurutma Rafları",
    "Serigrafi Boyaları",
    "Baskı Kalıpları",
    "Serigrafi Yardımcı Malzemeleri",
    "Yedek Parçalar",
    "Teknik Destek",
    "Kurulum Hizmeti",
    "Bakım Hizmeti",
    "Eğitim Hizmeti",
    "Diğer"
  ];

  return (
    <div className="min-h-screen">
      {/* İletişim Bilgileri */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-[#1A1A1A] mb-4">
              İletişim Bilgilerimiz
            </h2>
            <p className="text-xl text-[#4B4B4B] max-w-3xl mx-auto">
              Size en hızlı şekilde ulaşabilmeniz için tüm iletişim kanallarımız açık.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {contactInfo.map((info, index) => (
              <motion.div
                key={`${info.title}-${index}`}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="h-full text-center border-0 shadow-lg hover:shadow-xl transition-shadow">
                  <CardHeader>
                    <div className="w-16 h-16 bg-[#1A1A1A]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                      <info.icon className="w-8 h-8 text-[#1A1A1A]" />
                    </div>
                    <CardTitle className="text-xl font-semibold text-[#1A1A1A]">
                      {info.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    {info.link ? (
                      <a 
                        href={info.link}
                        className="text-lg font-semibold text-[#1A1A1A] mb-2 hover:text-[#4B4B4B] transition-colors cursor-pointer block"
                        target={info.link.startsWith('https') ? '_blank' : '_self'}
                        rel={info.link.startsWith('https') ? 'noopener noreferrer' : undefined}
                      >
                        {info.value}
                      </a>
                    ) : (
                      <div className="text-lg font-semibold text-[#1A1A1A] mb-2">
                        {info.value}
                      </div>
                    )}
                    <CardDescription className="text-[#4B4B4B]">
                      {info.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* İletişim Formu ve Harita */}
      <section className="py-20 bg-[#F2F2F2]">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* İletişim Formu */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <Card className="border-0 shadow-lg">
                <CardHeader>
                  <CardTitle className="text-2xl font-bold text-[#1A1A1A]">
                    Mesaj Gönderin
                  </CardTitle>
                  <CardDescription className="text-[#4B4B4B]">
                    Size en uygun çözümü sunabilmemiz için formu doldurun.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  {isSubmitted ? (
                    <motion.div
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      className="text-center py-8"
                    >
                      <div className="w-16 h-16 bg-[#1A1A1A]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                        <CheckCircle className="w-8 h-8 text-[#1A1A1A]" />
                      </div>
                      <h3 className="text-xl font-semibold text-[#1A1A1A] mb-2">
                        Mesajınız Gönderildi!
                      </h3>
                      <p className="text-[#4B4B4B]">
                        En kısa sürede size dönüş yapacağız.
                      </p>
                    </motion.div>
                  ) : (
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div className="grid md:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-sm font-medium text-[#1A1A1A] mb-2">
                            Ad Soyad *
                          </label>
                          <Input
                            required
                            value={formData.name}
                            onChange={(e) => handleInputChange("name", e.target.value)}
                            placeholder="Adınız ve soyadınız"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-[#1A1A1A] mb-2">
                            E-posta *
                          </label>
                          <Input
                            required
                            type="email"
                            value={formData.email}
                            onChange={(e) => handleInputChange("email", e.target.value)}
                            placeholder="ornek@email.com"
                          />
                        </div>
                      </div>

                      <div className="grid md:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-sm font-medium text-[#1A1A1A] mb-2">
                            Telefon
                          </label>
                          <Input
                            value={formData.phone}
                            onChange={(e) => handleInputChange("phone", e.target.value)}
                            placeholder="+90 (5XX) XXX XX XX"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-[#1A1A1A] mb-2">
                            Firma
                          </label>
                          <Input
                            value={formData.company}
                            onChange={(e) => handleInputChange("company", e.target.value)}
                            placeholder="Firma adınız"
                          />
                        </div>
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-[#1A1A1A] mb-2">
                          Konu *
                        </label>
                        <Input
                          required
                          value={formData.subject}
                          onChange={(e) => handleInputChange("subject", e.target.value)}
                          placeholder="Mesajınızın konusu"
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-[#1A1A1A] mb-2">
                          Hizmet Türü
                        </label>
                        <Select value={formData.service} onValueChange={(value) => handleInputChange("service", value)}>
                          <SelectTrigger>
                            <SelectValue placeholder="Hizmet türü seçin" />
                          </SelectTrigger>
                          <SelectContent>
                            {services.map((service) => (
                              <SelectItem key={service} value={service}>
                                {service}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-[#1A1A1A] mb-2">
                          Mesaj *
                        </label>
                        <Textarea
                          required
                          value={formData.message}
                          onChange={(e) => handleInputChange("message", e.target.value)}
                          placeholder="Mesajınızı buraya yazın..."
                          rows={5}
                        />
                      </div>

                      <Button 
                        type="submit" 
                        disabled={isSubmitting}
                        className="w-full bg-[#1A1A1A] hover:bg-[#1A1A1A]/90"
                      >
                        {isSubmitting ? (
                          <>
                            <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                            Gönderiliyor...
                          </>
                        ) : (
                          <>
                            <Send className="mr-2 h-4 w-4" />
                            Mesaj Gönder
                          </>
                        )}
                      </Button>
                    </form>
                  )}
                </CardContent>
              </Card>
            </motion.div>

            {/* Google Maps */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-6"
            >
              <div>
                <h3 className="text-2xl font-bold text-[#1A1A1A] mb-4">
                  Konumumuz
                </h3>
                <p className="text-[#4B4B4B] mb-6">
                  Maltepe Mah. Akınsal San. Sit. D Blok No:37/38 Cevizlibağ/Zeytinburnu adresinde bulunan 
                  merkezimizi ziyaret edebilirsiniz.
                </p>
              </div>
              
              <Card className="border-0 shadow-lg overflow-hidden">
                <CardContent className="p-0">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3010.2755833333333!2d28.9125!3d41.0125!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDHCsDAwJzQ1LjAiTiAyOMKwNTQnNDUuMCJF!5e0!3m2!1str!2str!4v1234567890"
                    width="100%"
                    height="400"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="OkanGökhan Serigrafi Makineleri Konumu"
                  ></iframe>
                </CardContent>
              </Card>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Card className="border-0 shadow-lg">
                  <CardHeader>
                    <CardTitle className="text-lg font-semibold text-[#1A1A1A] flex items-center">
                      <MessageSquare className="w-5 h-5 text-[#1A1A1A] mr-2" />
                      WhatsApp
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-[#4B4B4B] mb-3">
                      Hızlı iletişim için WhatsApp&apos;tan mesaj gönderin
                    </p>
                    <Button 
                      className="w-full bg-[#1A1A1A] hover:bg-[#1A1A1A]/90"
                      onClick={() => {
                        const message = "Merhaba, serigrafi makinesi hakkında bilgi almak istiyorum.";
                        const whatsappUrl = `https://wa.me/905425094758?text=${encodeURIComponent(message)}`;
                        window.open(whatsappUrl, '_blank');
                      }}
                                          >
                        WhatsApp&apos;tan Mesaj Gönder
                      </Button>
                  </CardContent>
                </Card>

                <Card className="border-0 shadow-lg">
                  <CardHeader>
                    <CardTitle className="text-lg font-semibold text-[#1A1A1A] flex items-center">
                      <Building className="w-5 h-5 text-[#1A1A1A] mr-2" />
                      Ofis Ziyareti
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-[#4B4B4B] mb-3">
                      Ürünlerimizi yerinde incelemek için randevu alın
                    </p>
                    <Button 
                      variant="outline" 
                      className="w-full border-[#1A1A1A] text-[#1A1A1A] hover:bg-[#1A1A1A] hover:text-white"
                      onClick={() => {
                        const message = "Merhaba, ofis ziyareti için randevu almak istiyorum.";
                        const whatsappUrl = `https://wa.me/905425094758?text=${encodeURIComponent(message)}`;
                        window.open(whatsappUrl, '_blank');
                      }}
                    >
                      Randevu Al
                    </Button>
                  </CardContent>
                </Card>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* SSS */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-[#1A1A1A] mb-4">
              Sık Sorulan Sorular
            </h2>
            <p className="text-xl text-[#4B4B4B] max-w-3xl mx-auto">
              İletişim sürecimiz hakkında merak edilen sorular.
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto space-y-6">
            {[
              {
                question: "Ne kadar sürede yanıt alırım?",
                answer: "Mesajlarınızı 24 saat içinde yanıtlıyoruz. Acil durumlar için telefon ile anında iletişim kurabilirsiniz."
              },
              {
                question: "Yerinde görüşme yapabiliyor musunuz?",
                answer: "Evet, ihtiyaç halinde yerinde görüşme yapabiliriz. Randevu alarak tesisinizi ziyaret edebiliriz."
              },
              {
                question: "Teklif ne kadar sürede hazırlanır?",
                answer: "Standart teklifler 1-2 iş günü içinde hazırlanır. Özel projeler için süre değişebilir."
              },
              {
                question: "Yurtdışı satış yapıyor musunuz?",
                answer: "Evet, 30+ ülkeye ihracat yapıyoruz. Yurtdışı satışlar için özel destek ekibimiz bulunmaktadır."
              }
            ].map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="border-0 shadow-lg">
                  <CardHeader>
                    <CardTitle className="text-lg font-semibold text-[#1A1A1A]">
                      {faq.question}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-[#4B4B4B] text-base">
                      {faq.answer}
                    </CardDescription>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-[#1A1A1A]">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl mx-auto space-y-6"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white">
              Hemen İletişime Geçin
            </h2>
            <p className="text-xl text-white">
              45 yıllık deneyimimizle size en uygun serigrafi çözümlerini sunalım.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary" asChild>
                <a href="tel:+905425094758">
                  Hemen Ara
                </a>
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white bg-transparent hover:bg-white hover:text-black" asChild>
                <a href="mailto:dogukancetinkaya@okangokhan.com">
                  E-posta Gönder
                </a>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;