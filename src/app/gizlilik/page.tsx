"use client";

import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Shield, Eye, Lock, UserCheck } from "lucide-react";

const PrivacyPolicyPage = () => {
	return (
		<div className="min-h-screen bg-background">
			{/* Hero Section */}
			<section className="py-20 bg-gradient-to-br from-primary to-primary/80">
				<div className="container mx-auto px-4 text-center">
					<motion.div
						initial={{ opacity: 0, y: 30 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.8 }}
						className="max-w-3xl mx-auto space-y-6"
					>
						<Shield className="h-16 w-16 mx-auto text-white" />
						<h1 className="text-4xl md:text-5xl font-bold text-white">
							Gizlilik Politikası
						</h1>
						<p className="text-xl text-white/90">
							Kişisel verilerinizin korunması bizim için önemlidir
						</p>
					</motion.div>
				</div>
			</section>

			{/* Content Section */}
			<section className="py-16">
				<div className="container mx-auto px-4">
					<div className="max-w-4xl mx-auto space-y-8">
						<motion.div
							initial={{ opacity: 0, y: 20 }}
							whileInView={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.6 }}
						>
							<Card>
								<CardHeader>
									<CardTitle className="flex items-center gap-3">
										<Eye className="h-6 w-6 text-primary" />
										Veri Toplama ve Kullanım
									</CardTitle>
								</CardHeader>
								<CardContent className="space-y-4">
									<p className="text-muted-foreground leading-relaxed">
										OkanGökhan Serigrafi Makineleri olarak, web sitemizi ziyaret ettiğinizde ve hizmetlerimizden yararlandığınızda bazı kişisel bilgilerinizi topluyoruz. Bu bilgiler arasında adınız, e-posta adresiniz, telefon numaranız ve şirket bilgileriniz yer alabilir.
									</p>
									<p className="text-muted-foreground leading-relaxed">
										Topladığımız bilgileri yalnızca size daha iyi hizmet sunmak, taleplerinizi karşılamak ve ürünlerimiz hakkında bilgi vermek amacıyla kullanırız.
									</p>
								</CardContent>
							</Card>
						</motion.div>

						<motion.div
							initial={{ opacity: 0, y: 20 }}
							whileInView={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.6, delay: 0.1 }}
						>
							<Card>
								<CardHeader>
									<CardTitle className="flex items-center gap-3">
										<Lock className="h-6 w-6 text-primary" />
										Veri Güvenliği
									</CardTitle>
								</CardHeader>
								<CardContent className="space-y-4">
									<p className="text-muted-foreground leading-relaxed">
										Kişisel verilerinizin güvenliği bizim için son derece önemlidir. Verilerinizi yetkisiz erişim, kayıp, kötüye kullanım veya değişiklik risklerine karşı korumak için uygun teknik ve idari önlemler alırız.
									</p>
									<p className="text-muted-foreground leading-relaxed">
										Verilerinizi üçüncü taraflarla paylaşmayız ve yalnızca yasal yükümlülüklerimiz çerçevesinde gerekli durumlarda ilgili otoritelerle paylaşabiliriz.
									</p>
								</CardContent>
							</Card>
						</motion.div>

						<motion.div
							initial={{ opacity: 0, y: 20 }}
							whileInView={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.6, delay: 0.2 }}
						>
							<Card>
								<CardHeader>
									<CardTitle className="flex items-center gap-3">
										<UserCheck className="h-6 w-6 text-primary" />
										Haklarınız
									</CardTitle>
								</CardHeader>
								<CardContent className="space-y-4">
									<p className="text-muted-foreground leading-relaxed">
										KVKK kapsamında aşağıdaki haklara sahipsiniz:
									</p>
									<ul className="list-disc list-inside space-y-2 text-muted-foreground">
										<li>Kişisel verilerinizin işlenip işlenmediğini öğrenme</li>
										<li>İşlenen kişisel verileriniz hakkında bilgi talep etme</li>
										<li>Kişisel verilerinizin düzeltilmesini isteme</li>
										<li>Kişisel verilerinizin silinmesini isteme</li>
										<li>İşleme faaliyetlerine itiraz etme</li>
									</ul>
									<p className="text-muted-foreground leading-relaxed">
										Bu haklarınızı kullanmak için dogukancetinkaya@okangokhan.com adresinden bizimle iletişime geçebilirsiniz.
									</p>
								</CardContent>
							</Card>
						</motion.div>

						<motion.div
							initial={{ opacity: 0, y: 20 }}
							whileInView={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.6, delay: 0.3 }}
						>
							<Card>
								<CardHeader>
									<CardTitle>İletişim</CardTitle>
								</CardHeader>
								<CardContent>
									<p className="text-muted-foreground leading-relaxed">
										Gizlilik politikamız hakkında sorularınız varsa veya kişisel verilerinizle ilgili haklarınızı kullanmak istiyorsanız, aşağıdaki iletişim bilgilerinden bize ulaşabilirsiniz:
									</p>
									<div className="mt-4 space-y-2">
										<p><strong>E-posta:</strong> dogukancetinkaya@okangokhan.com</p>
										<p><strong>Telefon:</strong> +90 (542) 509 47 58</p>
										<p><strong>Adres:</strong> Maltepe Mah. Akınsal San. Sit. D Blok No:37/38 Cevizlibağ/Zeytinburnu</p>
									</div>
									<p className="text-sm text-muted-foreground mt-4">
										Bu gizlilik politikası son olarak 1 Ocak 2025 tarihinde güncellenmiştir.
									</p>
								</CardContent>
							</Card>
						</motion.div>
					</div>
				</div>
			</section>
		</div>
	);
};

export default PrivacyPolicyPage;