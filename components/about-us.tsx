export default function AboutUs() {
  return (
    <section id="about" className="w-full py-20 md:py-32">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
          <div className="inline-block rounded-full bg-blue-100 px-3 py-1 text-sm font-medium text-blue-800 mb-4">
            Hakkımızda
          </div>
          <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl max-w-3xl">
            Teknoloji ile <span className="text-gradient">geleceği şekillendiriyoruz</span>
          </h2>
          <p className="max-w-[800px] text-gray-500 md:text-xl/relaxed dark:text-gray-400">
            SEGU Teknoloji, 2020 yılında kurulmuş, telekomünikasyon sektöründe uzmanlaşmış, yenilikçi çözümler sunan bir
            teknoloji şirketidir. Antalya merkezli olmakla birlikte, İstanbul başta olmak üzere tüm Türkiye'de hizmet
            vermekteyiz.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1">
            <div className="space-y-8">
              <div className="gradient-border p-6 bg-gradient-to-r from-blue-600 to-indigo-600">
                <h3 className="text-2xl font-bold mb-4 text-white">Misyonumuz</h3>
                <p className="text-white leading-relaxed">
                  Geleceği şekillendiren teknolojileri, bugünün işletmelerine erişilebilir ve sürdürülebilir şekilde
                  sunmak. Biz SEGU Teknoloji olarak; sadece çözümler değil, vizyon sunarız. Müşterilerimizin dijital
                  gücünü artırırken, onların rekabet avantajını teknolojiyle yeniden tanımlarız. Amacımız; her projeyi
                  bir fırsata, her işbirliğini bir dönüşüme çevirmektir.
                </p>
              </div>

              <div className="gradient-border p-6 bg-gradient-to-r from-blue-600 to-indigo-600">
                <h3 className="text-2xl font-bold mb-4 text-white">Vizyonumuz</h3>
                <p className="text-white leading-relaxed">
                  Yarının teknolojisini bugünden düşünen, fikirleriyle sektörlere yön veren global bir inovasyon markası
                  olmak. Kodla değil, stratejiyle yazılan bir gelecek inşa ediyoruz. Türkiye'den dünyaya uzanan bir
                  dijital köprü kurarak; işlevsel, estetik ve ölçeklenebilir teknolojilerle markalara sıçrama tahtası
                  olmayı hedefliyoruz.
                </p>
              </div>

              <div className="flex flex-wrap gap-4 mt-6">
                <div className="flex items-center gap-2 bg-gray-50 px-4 py-2 rounded-full">
                  <div className="w-3 h-3 rounded-full bg-blue-500"></div>
                  <span className="text-sm font-medium">Güvenilirlik</span>
                </div>
                <div className="flex items-center gap-2 bg-gray-50 px-4 py-2 rounded-full">
                  <div className="w-3 h-3 rounded-full bg-blue-500"></div>
                  <span className="text-sm font-medium">Yenilikçilik</span>
                </div>
                <div className="flex items-center gap-2 bg-gray-50 px-4 py-2 rounded-full">
                  <div className="w-3 h-3 rounded-full bg-blue-500"></div>
                  <span className="text-sm font-medium">Müşteri Odaklılık</span>
                </div>
                <div className="flex items-center gap-2 bg-gray-50 px-4 py-2 rounded-full">
                  <div className="w-3 h-3 rounded-full bg-blue-500"></div>
                  <span className="text-sm font-medium">Sürekli Gelişim</span>
                </div>
              </div>
            </div>
          </div>

          <div className="order-1 lg:order-2 relative">
            <div className="absolute -z-10 top-0 right-0 w-72 h-72 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30"></div>
            <div className="relative">
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl blur opacity-20"></div>
              <div className="relative overflow-hidden rounded-xl shadow-2xl">
                <img
                  src="/placeholder.svg?height=600&width=600"
                  width={600}
                  height={600}
                  alt="SEGU Teknoloji Ekibi"
                  className="w-full h-auto object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-white rounded-lg shadow-xl flex items-center justify-center p-4 geometric-bg">
                <span className="text-4xl font-bold text-blue-600">4+</span>
              </div>
              <div className="absolute -top-6 -left-6 w-24 h-24 bg-white rounded-lg shadow-xl flex items-center justify-center p-4 geometric-bg">
                <span className="text-sm font-bold text-blue-600">Yıllık Deneyim</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
