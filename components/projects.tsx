import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export default function Projects() {
  const projects = [
    {
      title: "MS-TSS-TSSR",
      description: "Telekomünikasyon altyapı projelendirme ve teknik şartname hazırlama.",
      tags: ["Altyapı", "Projelendirme", "Teknik Şartname"],
    },
    {
      title: "EMR Ölçüm ve Raporlama",
      description: "Elektromanyetik radyasyon ölçüm ve raporlama hizmetleri.",
      tags: ["EMR", "Ölçüm", "Raporlama"],
    },
    {
      title: "Cevher Sistem Girişleri",
      description: "Telekomünikasyon sistemleri için veri girişi ve yönetimi.",
      tags: ["Veri Yönetimi", "Sistem", "Telekomünikasyon"],
    },
    {
      title: "CYU",
      description: "Cihaz yerleşim uygulamaları ve optimizasyon çözümleri.",
      tags: ["Cihaz Yerleşimi", "Optimizasyon", "Uygulama"],
    },
    {
      title: "İSG",
      description: "İş sağlığı ve güvenliği çözümleri ve danışmanlık hizmetleri.",
      tags: ["İş Güvenliği", "Danışmanlık", "Sağlık"],
    },
    {
      title: "Risk Analizi",
      description: "Telekomünikasyon projeleri için kapsamlı risk analizi ve değerlendirme.",
      tags: ["Risk Analizi", "Değerlendirme", "Planlama"],
    },
    {
      title: "New Site",
      description: "Yeni telekomünikasyon sahalarının kurulumu ve yönetimi.",
      tags: ["Saha Kurulumu", "Yeni Lokasyon", "Altyapı"],
    },
    {
      title: "IBS",
      description: "Bina içi sinyal güçlendirme sistemleri kurulumu ve bakımı.",
      tags: ["Sinyal Güçlendirme", "Bina İçi", "Kapsama"],
    },
    {
      title: "AS-Build",
      description: "Tamamlanmış projelerin dokümantasyonu ve raporlanması.",
      tags: ["Dokümantasyon", "Raporlama", "Proje Tamamlama"],
    },
    {
      title: "Solar Survey",
      description: "Güneş enerjisi sistemleri için saha araştırması ve fizibilite çalışmaları.",
      tags: ["Solar Enerji", "Saha Araştırması", "Fizibilite"],
    },
  ]

  return (
    <section id="projects" className="w-full py-20 md:py-32 relative tech-pattern">
      <div className="absolute inset-0 bg-gradient-to-b from-white via-gray-50 to-white"></div>

      <div className="container relative px-4 md:px-6 z-10">
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
          <div className="inline-block rounded-full bg-blue-100 px-3 py-1 text-sm font-medium text-blue-800 mb-4">
            Projelerimiz
          </div>
          <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
            Başarı <span className="text-gradient">Hikayelerimiz</span>
          </h2>
          <p className="max-w-[800px] text-gray-500 md:text-xl/relaxed dark:text-gray-400">
            Tamamladığımız bazı önemli projelerimiz ve başarı hikayelerimiz.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card key={index} className="border-0 shadow-lg card-hover">
              <CardContent className="p-6">
                <div className="h-12 w-12 rounded-xl bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center mb-4 text-white font-bold">
                  {index + 1}
                </div>
                <h3 className="text-xl font-bold mb-3">{project.title}</h3>
                <p className="text-gray-500 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mt-auto">
                  {project.tags.map((tag, tagIndex) => (
                    <Badge key={tagIndex} variant="secondary" className="bg-blue-50 text-blue-700 hover:bg-blue-100">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="inline-block p-1 rounded-full bg-gradient-to-r from-blue-600 to-indigo-600">
            <button className="px-8 py-3 rounded-full bg-white text-blue-600 font-medium hover:bg-gray-50 transition-colors">
              Tüm Projelerimizi İnceleyin
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
