import { Network, Server, Shield, FileText, BarChart3, MapPin, Building, FileCheck, Sun } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

export default function Services() {
  const services = [
    {
      icon: <Network className="h-10 w-10 text-blue-600" />,
      title: "Telekomünikasyon Altyapı Projelendirme",
      description:
        "MS-TSS-TSSR kapsamında telekomünikasyon altyapı projelendirme ve teknik şartname hazırlama hizmetleri.",
    },
    {
      icon: <BarChart3 className="h-10 w-10 text-blue-600" />,
      title: "EMR Ölçüm ve Raporlama",
      description:
        "Elektromanyetik radyasyon ölçüm, analiz ve raporlama hizmetleri ile yasal düzenlemelere uygunluk sağlama.",
    },
    {
      icon: <Server className="h-10 w-10 text-blue-600" />,
      title: "Veri Yönetimi ve Sistem Girişleri",
      description: "Cevher ve benzeri telekomünikasyon sistemleri için veri girişi, yönetimi ve optimizasyonu.",
    },
    {
      icon: <FileText className="h-10 w-10 text-blue-600" />,
      title: "Cihaz Yerleşim Uygulamaları",
      description: "CYU kapsamında telekomünikasyon ekipmanlarının optimum yerleşim planlaması ve uygulaması.",
    },
    {
      icon: <Shield className="h-10 w-10 text-blue-600" />,
      title: "İSG ve Risk Analizi",
      description:
        "Telekomünikasyon projelerinde iş sağlığı ve güvenliği çözümleri ile kapsamlı risk analizi hizmetleri.",
    },
    {
      icon: <MapPin className="h-10 w-10 text-blue-600" />,
      title: "Yeni Saha Kurulumu",
      description: "New Site kapsamında yeni telekomünikasyon sahalarının planlanması, kurulumu ve yönetimi.",
    },
    {
      icon: <Building className="h-10 w-10 text-blue-600" />,
      title: "Bina İçi Sinyal Güçlendirme",
      description: "IBS sistemleri ile bina içi sinyal güçlendirme çözümleri tasarımı ve uygulaması.",
    },
    {
      icon: <FileCheck className="h-10 w-10 text-blue-600" />,
      title: "AS-Build Dokümantasyon",
      description: "Tamamlanmış telekomünikasyon projelerinin detaylı dokümantasyonu ve raporlanması.",
    },
    {
      icon: <Sun className="h-10 w-10 text-blue-600" />,
      title: "Solar Enerji Çözümleri",
      description: "Telekomünikasyon sahaları için solar enerji sistemleri araştırması ve fizibilite çalışmaları.",
    },
  ]

  return (
    <section id="services" className="w-full py-20 md:py-32 relative geometric-bg">
      <div className="absolute inset-0 bg-gradient-to-b from-white via-gray-50 to-white"></div>

      <div className="container relative px-4 md:px-6 z-10">
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
          <div className="inline-block rounded-full bg-blue-100 px-3 py-1 text-sm font-medium text-blue-800 mb-4">
            Hizmetlerimiz
          </div>
          <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
            Neler <span className="text-gradient">Yapıyoruz?</span>
          </h2>
          <p className="max-w-[800px] text-gray-500 md:text-xl/relaxed dark:text-gray-400">
            SEGU Teknoloji olarak, telekomünikasyon alanında uzmanlaşmış çözümler sunuyoruz.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="overflow-hidden card-hover border-0 shadow-lg">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 to-indigo-600"></div>
              <CardContent className="p-8">
                <div className="mb-6 w-16 h-16 rounded-2xl bg-blue-50 flex items-center justify-center">
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                <p className="text-gray-500">{service.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="inline-block p-1 rounded-full bg-gradient-to-r from-blue-600 to-indigo-600">
            <button className="px-8 py-3 rounded-full bg-white text-blue-600 font-medium hover:bg-gray-50 transition-colors">
              Tüm Hizmetlerimizi Keşfedin
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
