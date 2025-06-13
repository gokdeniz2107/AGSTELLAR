import Image from "next/image"

export default function References() {
  const references = [
    { name: "Türk Telekom", logo: "/images/turktelekom-logo.png" },
    { name: "Turkcell", logo: "/images/turkcell-logo.png" },
    { name: "Vodafone", logo: "/images/vodafone-logo.png" },
    { name: "Huawei", logo: "/images/huawei-logo.png" },
    { name: "Karel", logo: "/images/karel-logo.png" },
    { name: "Mikrolink", logo: "/images/mikrolink-logo.png" },
    { name: "İşkaya", logo: "/images/iskaya-logo.png" },
    { name: "Enkaya", logo: "/images/enkaya-logo.png" },
  ]

  return (
    <section id="references" className="w-full py-20 md:py-32">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
          <div className="inline-block rounded-full bg-blue-100 px-3 py-1 text-sm font-medium text-blue-800 mb-4">
            Referanslar
          </div>
          <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
            <span className="text-gradient">Güvenilir</span> İş Ortaklarımız
          </h2>
          <p className="max-w-[800px] text-gray-500 md:text-xl/relaxed dark:text-gray-400">
            Sektörün önde gelen firmaları ile çalışmaktan gurur duyuyoruz.
          </p>
        </div>

        <div className="relative">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-gray-200"></div>
          </div>

          <div className="relative flex justify-center">
            <span className="bg-white px-6 text-lg text-gray-500">Çözüm Ortaklarımız</span>
          </div>
        </div>

        <div className="mt-12 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 items-center">
          {references.map((reference, index) => (
            <div key={index} className="group relative">
              <div className="absolute -inset-2 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-lg opacity-0 group-hover:opacity-100 blur transition duration-500 group-hover:duration-200"></div>
              <div className="relative bg-white p-6 rounded-lg shadow-sm flex flex-col items-center justify-center h-32 transition-transform group-hover:scale-105">
                <div className="h-16 flex items-center justify-center mb-2">
                  <Image
                    src={reference.logo || "/placeholder.svg"}
                    alt={`${reference.name} Logo`}
                    width={160}
                    height={80}
                    className="h-auto w-auto max-h-16 object-contain"
                  />
                </div>
                <span className="text-sm font-medium text-gray-700">{reference.name}</span>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="inline-flex items-center gap-2 text-blue-600 font-medium">
            <span>Tüm referanslarımızı görüntüleyin</span>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
              <path
                fillRule="evenodd"
                d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                clipRule="evenodd"
              />
            </svg>
          </div>
        </div>
      </div>
    </section>
  )
}
