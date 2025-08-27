"use client";

import { Phone, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

const MobileCTA = () => {
  const handleWhatsAppClick = () => {
    const message = "Merhaba, serigrafi makinesi hakkında bilgi almak istiyorum.";
    const whatsappUrl = `https://wa.me/905425094758?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 md:hidden bg-white border-t border-gray-200 shadow-lg">
      <div className="flex">
        <Button 
          variant="outline" 
          className="flex-1 h-14 rounded-none border-0 border-r border-gray-200 text-primary hover:bg-primary/5 font-semibold"
          asChild
        >
          <a href="tel:+905425094758" className="flex items-center justify-center space-x-2">
            <Phone className="w-5 h-5" />
            <span>Ara</span>
          </a>
        </Button>
        <Button 
          className="flex-1 h-14 rounded-none bg-green-600 hover:bg-green-700 text-white font-semibold"
          onClick={handleWhatsAppClick}
        >
          <MessageCircle className="w-5 h-5 mr-2" />
          WhatsApp
        </Button>
      </div>
    </div>
  );
};

export default MobileCTA;