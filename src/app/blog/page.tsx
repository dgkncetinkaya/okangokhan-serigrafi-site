"use client";

import { motion } from "framer-motion";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Calendar, User, Tag, Clock } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

const BlogPage = () => {
  const blogPosts = [
    {
      id: "1",
      title: "Serigrafi Baskı Teknolojisinin Gelişimi",
      excerpt: "Serigrafi baskı teknolojisinin son 45 yıldaki gelişimi ve OkanGökhan'in bu süreçteki rolü hakkında detaylı bir analiz.",
      content: "Serigrafi baskı teknolojisi, son 45 yılda büyük bir gelişim göstermiştir. Manuel baskı makinelerinden otomatik sistemlere kadar geçen süreçte, OkanGökhan Serigrafi Makineleri olarak bu gelişimin her aşamasında yer almış bulunmaktayız...",
      author: "Okan Gökhan",
      date: "2024-01-15",
      category: "Teknoloji",
      readTime: "5 dk",
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=400&h=300&fit=crop",
      tags: ["Serigrafi", "Teknoloji", "Baskı"]
    },
    {
      id: "2",
      title: "Manuel Vakumlu Baskı Makinelerinin Avantajları",
      excerpt: "Manuel vakumlu baskı makinelerinin diğer baskı sistemlerine göre sağladığı avantajlar ve kullanım alanları.",
      content: "Manuel vakumlu baskı makineleri, özellikle küçük ve orta ölçekli işletmeler için ideal çözümler sunmaktadır. Bu makinelerin en büyük avantajı, düşük maliyetle yüksek kaliteli baskı elde edebilme imkanı sağlamasıdır...",
      author: "Teknik Ekip",
      date: "2024-01-10",
      category: "Ürün",
      readTime: "4 dk",
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=400&h=300&fit=crop",
      tags: ["Manuel Makine", "Vakum", "Baskı"]
    },
    {
      id: "3",
      title: "Kurutma Raflarının Baskı Kalitesine Etkisi",
      excerpt: "Doğru kurutma rafı seçiminin serigrafi baskı kalitesine olan etkisi ve seçim kriterleri.",
      content: "Serigrafi baskı sürecinde kurutma aşaması, ürün kalitesini doğrudan etkileyen en önemli faktörlerden biridir. Doğru kurutma rafı seçimi, baskı kalitesini artırırken, üretim verimliliğini de maksimize eder...",
      author: "Üretim Ekip",
      date: "2024-01-05",
      category: "Üretim",
      readTime: "6 dk",
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=400&h=300&fit=crop",
      tags: ["Kurutma", "Kalite", "Üretim"]
    },
    {
      id: "4",
      title: "Serigrafi Boyalarının Doğru Seçimi",
      excerpt: "Farklı malzemeler için uygun serigrafi boyası seçimi ve kullanım önerileri.",
      content: "Serigrafi boyalarının seçimi, baskı yapılacak malzemenin türüne ve kullanım alanına göre değişiklik gösterir. PVC, tekstil, cam, metal gibi farklı malzemeler için özel formüller geliştirilmiştir...",
      author: "Kimya Ekip",
      date: "2023-12-28",
      category: "Malzeme",
      readTime: "7 dk",
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=400&h=300&fit=crop",
      tags: ["Boya", "Malzeme", "Seçim"]
    },
    {
      id: "5",
      title: "Serigrafi Makinesi Bakım ve Temizlik",
      excerpt: "Serigrafi makinelerinin uzun ömürlü kullanımı için bakım ve temizlik önerileri.",
      content: "Serigrafi makinelerinin düzenli bakımı, hem makinenin ömrünü uzatır hem de baskı kalitesini korur. Bu yazımızda, makinelerinizin bakımı için gerekli adımları detaylı olarak açıklıyoruz...",
      author: "Servis Ekip",
      date: "2023-12-20",
      category: "Bakım",
      readTime: "8 dk",
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=400&h=300&fit=crop",
      tags: ["Bakım", "Temizlik", "Servis"]
    },
    {
      id: "6",
      title: "Serigrafi Sektöründe Kalite Standartları",
      excerpt: "Serigrafi sektöründe uygulanan kalite standartları ve OkanGökhan'in kalite yaklaşımı.",
      content: "Serigrafi sektöründe kalite standartları, müşteri memnuniyeti ve ürün güvenilirliği açısından büyük önem taşır. OkanGökhan olarak, 45 yıllık deneyimimizle en yüksek kalite standartlarını uyguluyoruz...",
      author: "Kalite Ekip",
      date: "2023-12-15",
      category: "Kalite",
      readTime: "5 dk",
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=400&h=300&fit=crop",
      tags: ["Kalite", "Standart", "Güvenilirlik"]
    }
  ];

  const categories = [
    "Tümü",
    "Teknoloji",
    "Ürün",
    "Üretim",
    "Malzeme",
    "Bakım",
    "Kalite"
  ];

  const [selectedCategory, setSelectedCategory] = useState("Tümü");

  const filteredPosts = selectedCategory === "Tümü" 
    ? blogPosts 
    : blogPosts.filter(post => post.category === selectedCategory);

  return (
    <div className="min-h-screen bg-muted">
      {/* Hero Section */}
      <section className="py-20 bg-foreground text-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Blog
            </h1>
            <p className="text-xl text-white/80 max-w-3xl mx-auto">
              45 yıllık deneyimimizle serigrafi sektöründeki gelişmeleri, 
              teknolojik yenilikleri ve sektörel bilgileri paylaşıyoruz.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Kategori Filtreleri */}
      <section className="py-8 bg-white border-b">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap gap-2 justify-center">
            {categories.map((category) => (
              <Button
                key={category}
                variant={selectedCategory === category ? "default" : "outline"}
                onClick={() => setSelectedCategory(category)}
                className={selectedCategory === category ? "bg-primary hover:bg-primary/90" : ""}
              >
                {category}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Yazıları */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPosts.map((post, index) => (
              <motion.div
                key={post.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
              >
                <Card className="h-full border-0 shadow-lg hover:shadow-xl transition-shadow">
                  {/* Blog Görseli */}
                  <div className="relative overflow-hidden">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-48 object-cover"
                    />
                    <div className="absolute top-4 left-4">
                      <Badge className="bg-primary hover:bg-primary/90">
                        {post.category}
                      </Badge>
                    </div>
                  </div>

                  {/* Blog İçeriği */}
                  <CardHeader>
                    <div className="flex items-center space-x-4 text-sm text-muted-foreground mb-3">
                      <div className="flex items-center space-x-1">
                        <Calendar className="w-4 h-4" />
                        <span>{new Date(post.date).toLocaleDateString('tr-TR')}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Clock className="w-4 h-4" />
                        <span>{post.readTime}</span>
                      </div>
                    </div>
                    <CardTitle className="text-xl font-semibold text-foreground line-clamp-2">
                      {post.title}
                    </CardTitle>
                  </CardHeader>

                  <CardContent>
                    <CardDescription className="text-muted-foreground mb-4 line-clamp-3">
                      {post.excerpt}
                    </CardDescription>

                    {/* Etiketler */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {post.tags.map((tag) => (
                        <Badge key={tag} variant="secondary" className="text-xs">
                          {tag}
                        </Badge>
                      ))}
                    </div>

                    {/* Yazar */}
                    <div className="flex items-center space-x-2 text-sm text-muted-foreground mb-4">
                      <User className="w-4 h-4" />
                      <span>{post.author}</span>
                    </div>

                    <Button 
                      variant="outline" 
                      className="w-full border-primary text-primary hover:bg-primary hover:text-primary-foreground"
                      asChild
                    >
                      <Link href={`/blog/${post.id}`}>
                        Devamını Oku
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          {filteredPosts.length === 0 && (
            <div className="text-center py-12">
              <h3 className="text-xl font-semibold text-foreground mb-2">
                Bu kategoride henüz yazı bulunmuyor
              </h3>
              <p className="text-muted-foreground">
                Farklı bir kategori seçerek diğer yazılarımızı inceleyebilirsiniz.
              </p>
            </div>
          )}
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
              Serigrafi Sektöründe Güncel Kalın
            </h2>
            <p className="text-xl text-white/90">
              Sektörel gelişmeler ve teknolojik yenilikler hakkında bilgi almak için 
              blog yazılarımızı takip edin.
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
};

export default BlogPage;