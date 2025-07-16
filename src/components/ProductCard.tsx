"use client";

import { motion } from "framer-motion";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Star, MessageCircle } from "lucide-react";
import Link from "next/link";

interface ProductCardProps {
  id: string;
  name: string;
  description: string;
  image: string;
  category: string;
  features: string[];
  rating: number;
  isNew?: boolean;
  isPopular?: boolean;
}

const ProductCard = ({
  id,
  name,
  description,
  image,
  category,
  features,
  rating,
  isNew = false,
  isPopular = false,
}: ProductCardProps) => {
  const handleWhatsAppClick = () => {
    const message = `Merhaba, ${name} ürünü hakkında bilgi almak istiyorum.`;
    const whatsappUrl = `https://wa.me/905425094758?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
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
              src={image}
              alt={name}
              className="w-full h-full object-cover"
            />
          </motion.div>

          {/* Badge'ler */}
          <div className="absolute top-4 left-4 flex flex-col gap-2">
            {isNew && (
              <Badge className="bg-[#F25C05] hover:bg-[#F25C05]/90">
                Yeni
              </Badge>
            )}
            {isPopular && (
              <Badge className="bg-[#F25C05] hover:bg-[#F25C05]/90">
                Popüler
              </Badge>
            )}
          </div>

          {/* Kategori Badge */}
          <div className="absolute top-4 right-4">
            <Badge variant="secondary" className="bg-white/90 text-[#1A1A1A]">
              {category}
            </Badge>
          </div>
        </div>

        {/* Ürün Bilgileri */}
        <CardHeader className="pb-3">
          <div className="flex items-start justify-between">
            <div className="flex-1">
              <CardTitle className="text-lg font-semibold text-[#1A1A1A] line-clamp-2">
                {name}
              </CardTitle>
              <CardDescription className="text-sm text-[#4B4B4B] mt-1 line-clamp-2">
                {description}
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
                    i < rating ? "text-[#F25C05] fill-current" : "text-[#E5E5E5]"
                  }`}
                />
              ))}
            </div>
            <span className="text-sm text-[#4B4B4B] ml-1">({rating})</span>
          </div>
        </CardHeader>

        {/* Özellikler */}
        <CardContent className="pb-3">
          <div className="space-y-2">
            {features.slice(0, 3).map((feature, index) => (
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
        <CardFooter className="pt-0">
          <div className="w-full space-y-2">
            <Button 
              className="w-full bg-[#F25C05] hover:bg-[#F25C05]/90" 
              onClick={handleWhatsAppClick}
            >
              <MessageCircle className="mr-2 h-4 w-4" />
              Teklif Al
            </Button>
            <Button variant="outline" className="w-full" asChild>
              <Link href={`/urunler/${id}`}>
                Detayları Gör
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </CardFooter>
      </Card>
    </motion.div>
  );
};

export default ProductCard; 