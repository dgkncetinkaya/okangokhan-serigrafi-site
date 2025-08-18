"use client";

import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { FileText, AlertCircle, Scale, Users } from "lucide-react";

const TermsOfServicePage = () => {
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
						<FileText className="h-16 w-16 mx-auto text-white" />
						<h1 className="text-4xl md:text-5xl font-bold text-white">
							Kullanım Koşulları
						</h1>
						<p className="text-xl text-white/90">
							Web sitemizi kullanırken uymanız gereken kurallar
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
										<Users className="h-6 w-6 text-primary" />
										Genel Kullanım
									</CardTitle>
								</CardHeader>
								<CardContent className="space-y-4">
									<p className="text-muted-foreground leading-relaxed">
										OkanGökhan Serigrafi Makineleri web sitesini kullanarak, aşağıdaki kullanım koşullarını kabul etmiş sayılırsınız. Bu koşullar, web sitemizin kullanımına ilişkin kuralları ve sorumluluklarınızı belirtmektedir.
									</p>
									<p className="text-muted-foreground leading-relaxed">
										Web sitemizi yalnızca yasal amaçlar için kullanabilirsiniz. Site içeriğini izinsiz olarak kopyalayamaz, dağıtamaz veya ticari amaçlarla kullanamazsınız.
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
										<Scale className="h-6 w-6 text-primary" />
										Fikri Mülkiyet Hakları
									</CardTitle>
								</CardHeader>
								<CardContent className="space-y-4">
									<p className="text-muted-foreground leading-relaxed">
										Web sitemizdeki tüm içerik, tasarım, logo, metin, görsel ve diğer materyaller OkanGökhan Serigrafi Makineleri'nin fikri mülkiyetidir ve telif hakları ile korunmaktadır.
									</p>
									<p className="text-muted-foreground leading-relaxed">
										İçerikleri izinsiz olarak kullanmak, kopyalamak, değiştirmek veya dağıtmak yasaktır. Ticari amaçlı kullanım için önceden yazılı izin alınması gerekmektedir.
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
										<AlertCircle className="h-6 w-6 text-primary" />
										Sorumluluk Reddi
									</CardTitle>
								</CardHeader>
								<CardContent className="space-y-4">
									<p className="text-muted-foreground leading-relaxed">
										Web sitemizdeki bilgilerin doğruluğunu sağlamak için çaba göstermekle birlikte, bilgilerin eksiksiz, güncel ve hatasız olduğunu garanti etmiyoruz.
									</p>
									<p className="text-muted-foreground leading-relaxed">
										Web sitesinin kullanımından doğabilecek herhangi bir zarar veya kayıptan sorumlu değiliz. Ürün ve hizmet bilgileri değişiklik gösterebilir.
									</p>
									<ul className="list-disc list-inside space-y-2 text-muted-foreground">
										<li>Teknik arızalar veya kesintilerden kaynaklanan sorunlar</li>
										<li>Üçüncü taraf bağlantılarından kaynaklanan problemler</li>
										<li>Bilgi güvenliği ihlalleri</li>
										<li>Veri kaybı veya hasarı</li>
									</ul>
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
									<CardTitle>Değişiklikler ve İletişim</CardTitle>
								</CardHeader>
								<CardContent className="space-y-4">
									<p className="text-muted-foreground leading-relaxed">
										Bu kullanım koşullarını önceden haber vermeksizin değiştirme hakkımızı saklı tutarız. Değişiklikler web sitesinde yayınlandığı anda yürürlüğe girer.
									</p>
									<p className="text-muted-foreground leading-relaxed">
										Kullanım koşulları hakkında sorularınız için bizimle iletişime geçebilirsiniz:
									</p>
									<div className="mt-4 space-y-2">
										<p><strong>E-posta:</strong> dogukancetinkaya@okangokhan.com</p>
										<p><strong>Telefon:</strong> +90 (542) 509 47 58</p>
										<p><strong>Adres:</strong> Maltepe Mah. Akınsal San. Sit. D Blok No:37/38 Cevizlibağ/Zeytinburnu</p>
									</div>
									<p className="text-sm text-muted-foreground mt-4">
										Bu kullanım koşulları son olarak 1 Ocak 2025 tarihinde güncellenmiştir.
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

export default TermsOfServicePage;