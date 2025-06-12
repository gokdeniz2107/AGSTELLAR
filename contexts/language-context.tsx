"use client"

import { createContext, useContext, useState, useEffect, type ReactNode } from "react"

type Language = "en" | "tr"

interface LanguageContextType {
  language: Language
  setLanguage: (lang: Language) => void
  t: (key: string) => string
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

// Çeviriler
const translations = {
  en: {
    // Navigation
    "nav.tech": "Tech",
    "nav.ai": "AI",
    "nav.development": "Development",
    "nav.projects": "Projects",
    "nav.about": "About",
    "nav.contact": "Contact",
    "nav.blog": "Blog",

    // Homepage
    "home.featured": "Featured",
    "home.topStories": "Top Stories",
    "home.latestArticles": "Latest Articles",
    "home.featuredTitle": "Innovating Tomorrow: The Future of AI and Technology",
    "home.featuredExcerpt":
      "How artificial intelligence is reshaping our world and what it means for the future of technology.",

    // Tech Page
    "tech.title": "Technology",
    "tech.subtitle": "The Future, Engineered.",
    "tech.description1":
      "At AgStellar, we explore how technology is not just evolving — it's redefining what's possible.",
    "tech.description2":
      "From artificial intelligence to advanced software systems, we build tools that transform industries, enhance human potential, and move the world forward.",
    "tech.description3": "Whether you're an engineer, an entrepreneur, or just curious — innovation starts here.",
    "tech.stayUpdated": "Stay Updated",
    "tech.newsletterDesc":
      "Subscribe to our newsletter to receive the latest updates on technology, AI, and software development.",
    "tech.subscribe": "Subscribe",

    // AI Page
    "ai.title": "Artificial Intelligence",
    "ai.subtitle": "Intelligence. Reimagined.",
    "ai.description1": "At AgStellar, artificial intelligence is not a feature — it's a foundation.",
    "ai.description2":
      "We design and develop intelligent systems that can learn, adapt, and reason. From deep learning models and natural language interfaces to computer vision and predictive analytics, our AI technologies are built to solve complex problems at scale.",
    "ai.description3":
      "Our mission is to harness the power of AI to unlock new efficiencies, elevate user experiences, and drive competitive advantage for businesses across industries. With a deep commitment to research and a product-driven mindset, we engineer AI not just to automate — but to amplify human capability.",
    "ai.description4": "This is where innovation meets intelligence",

    // Development Page
    "dev.title": "Development",
    "dev.subtitle": "Code with Purpose. Build with Vision.",
    "dev.description1":
      "At AgStellar, software development is not just about writing code — it's about engineering real-world solutions through precision, innovation, and scalability.",
    "dev.description2":
      "We take a project-driven approach to development, aligning modern frameworks, cloud-native technologies, and performance-first architectures with clear business goals. From high-performance APIs and full-stack platforms to enterprise systems and custom applications, every line we build is intentional.",
    "dev.description3": "Our development philosophy is simple: Build what matters. Ship what lasts.",
    "dev.description4":
      "Each project is an opportunity to combine cutting-edge technology with thoughtful design — delivering not just functional systems, but scalable value.",

    // Projects Page
    "projects.title": "Projects",
    "projects.subtitle": "Client projects and technology innovations delivered by AgStellar",
    "projects.contactUs": "Contact Us",
    "projects.viewDetails": "View Project Details",
    "projects.ctaTitle": "Ready to Start Your Project?",
    "projects.ctaDesc":
      "Let's discuss how AGStellar can help transform your ambitious ideas into powerful, working products.",
    "projects.getInTouch": "Get in Touch",

    // About Page
    "about.title": "About Me",
    "about.founderTitle": "Founder & CEO",
    "about.email": "Email",
    "about.location": "Location",
    "about.socialMedia": "Social Media",
    "about.intro":
      "Hi there, I'm Gökdeniz, the founder of AgStellar — a forward-thinking software company specialized in artificial intelligence, application development, and financial technologies.",
    "about.description1":
      "Driven by a passion for building technology that shapes the future, I combine deep technical expertise with a strategic entrepreneurial mindset. At AgStellar, we don't just write code — we architect intelligent, scalable, and impactful solutions for real-world challenges.",
    "about.description2":
      "My focus is on creating products that merge advanced AI capabilities with seamless digital experiences. From algorithmic trading systems to AI-powered platforms and enterprise-grade applications, I lead the development of technologies that are both innovative and commercially viable.",
    "about.description3":
      "As a founder, I work at the intersection of technology, business, and innovation — building systems that are engineered not just to function, but to lead.",
    "about.expertiseTitle": "Areas of Expertise",
    "about.aiExpertise": "Artificial Intelligence",
    "about.aiDesc": "Machine learning systems, predictive analytics, and AI integration",
    "about.devExpertise": "Software Development",
    "about.devDesc": "Full-stack applications, mobile development, and enterprise solutions",
    "about.fintechExpertise": "Financial Technology",
    "about.fintechDesc": "Algorithmic trading systems, financial analysis tools, and market data processing",
    "about.ctaTitle": "Ready to work together?",
    "about.ctaDesc":
      "Let's discuss how AgStellar can help bring your ideas to life with cutting-edge technology solutions.",

    // Contact Page
    "contact.title": "Contact",
    "contact.subtitle": "Let's build tomorrow's projects together",
    "contact.getInTouch": "Get In Touch With Me",
    "contact.phone": "Phone",
    "contact.projectProposal": "Project Proposal",
    "contact.fullName": "Full Name",
    "contact.fullNamePlaceholder": "Your name and surname",
    "contact.emailPlaceholder": "Your email address",
    "contact.projectDetails": "Project Details",
    "contact.projectDetailsPlaceholder": "Share details about your project...",
    "contact.sendProposal": "Send Proposal",

    // Blog Page
    "blog.title": "Blog",
    "blog.subtitle": "Latest insights and articles about technology",
    "blog.readMore": "Read More",

    // Common
    "common.backToHome": "Back to Home",
    "common.categories": "Categories",
    "common.company": "Company",
    "common.legal": "Legal",
    "common.privacy": "Privacy",
    "common.terms": "Terms",
    "common.sitemap": "Sitemap",
    "common.copyright": "© 2025 AGStellar. All rights reserved.",
    "common.companyDesc": "Creating innovative software solutions that transform ideas into reality.",
    "common.technology": "Technology",
    "common.aiMl": "AI & Machine Learning",
    "common.webDev": "Web Development",
    "common.mobileApps": "Mobile Apps",
    "common.privacyPolicy": "Privacy Policy",
    "common.termsOfService": "Terms of Service",
    "common.cookiePolicy": "Cookie Policy",
  },
  tr: {
    // Navigation
    "nav.tech": "Teknoloji",
    "nav.ai": "Yapay Zeka",
    "nav.development": "Geliştirme",
    "nav.projects": "Projeler",
    "nav.about": "Hakkımda",
    "nav.contact": "İletişim",
    "nav.blog": "Blog",

    // Homepage
    "home.featured": "Öne Çıkan",
    "home.topStories": "Popüler Haberler",
    "home.latestArticles": "Son Makaleler",
    "home.featuredTitle": "Geleceği Yenilemek: Yapay Zeka ve Teknolojinin Geleceği",
    "home.featuredExcerpt":
      "Yapay zekanın dünyamızı nasıl yeniden şekillendirdiği ve teknolojinin geleceği için ne anlama geldiği.",

    // Tech Page
    "tech.title": "Teknoloji",
    "tech.subtitle": "Gelecek, Mühendislikle Şekilleniyor.",
    "tech.description1":
      "AgStellar'da teknolojinin sadece gelişmediğini, mümkün olanı yeniden tanımladığını keşfediyoruz.",
    "tech.description2":
      "Yapay zekadan gelişmiş yazılım sistemlerine kadar, endüstrileri dönüştüren, insan potansiyelini artıran ve dünyayı ileriye taşıyan araçlar geliştiriyoruz.",
    "tech.description3": "İster mühendis, ister girişimci, ister sadece meraklı olun — yenilik burada başlıyor.",
    "tech.stayUpdated": "Güncel Kalın",
    "tech.newsletterDesc":
      "Teknoloji, yapay zeka ve yazılım geliştirme konularındaki en son güncellemeleri almak için bültenimize abone olun.",
    "tech.subscribe": "Abone Ol",

    // AI Page
    "ai.title": "Yapay Zeka",
    "ai.subtitle": "Zeka. Yeniden Tasarlandı.",
    "ai.description1": "AgStellar'da yapay zeka bir özellik değil — bir temeldir.",
    "ai.description2":
      "Öğrenebilen, uyum sağlayabilen ve mantık yürütebilen akıllı sistemler tasarlıyor ve geliştiriyoruz. Derin öğrenme modellerinden doğal dil arayüzlerine, bilgisayarlı görüden tahmine dayalı analitiğe kadar, yapay zeka teknolojilerimiz karmaşık sorunları ölçekte çözmek için geliştirilmiştir.",
    "ai.description3":
      "Misyonumuz, yapay zekanın gücünden yararlanarak yeni verimliliklerin kilidini açmak, kullanıcı deneyimlerini yükseltmek ve sektörler arası işletmeler için rekabet avantajı sağlamaktır. Araştırmaya derin bağlılık ve ürün odaklı bir zihniyetle, yapay zekayı sadece otomatikleştirmek için değil — insan yeteneğini artırmak için mühendislik yapıyoruz.",
    "ai.description4": "Burası yeniliğin zeka ile buluştuğu yer",

    // Development Page
    "dev.title": "Geliştirme",
    "dev.subtitle": "Amaçla Kodla. Vizyon ile İnşa Et.",
    "dev.description1":
      "AgStellar'da yazılım geliştirme sadece kod yazmakla ilgili değil — hassaslık, yenilik ve ölçeklenebilirlik yoluyla gerçek dünya çözümleri mühendislik etmekle ilgilidir.",
    "dev.description2":
      "Modern çerçeveleri, bulut-yerel teknolojileri ve performans-öncelikli mimarileri net iş hedefleriyle hizalayarak proje odaklı bir geliştirme yaklaşımı benimseriz. Yüksek performanslı API'lerden tam yığın platformlara, kurumsal sistemlerden özel uygulamalara kadar, inşa ettiğimiz her satır kasıtlıdır.",
    "dev.description3": "Geliştirme felsefemiz basittir: Önemli olanı inşa et. Kalıcı olanı gönder.",
    "dev.description4":
      "Her proje, son teknoloji ile düşünceli tasarımı birleştirme fırsatıdır — sadece işlevsel sistemler değil, ölçeklenebilir değer sunmak.",

    // Projects Page
    "projects.title": "Projeler",
    "projects.subtitle": "AgStellar tarafından teslim edilen müşteri projeleri ve teknoloji yenilikleri",
    "projects.contactUs": "Bize Ulaşın",
    "projects.viewDetails": "Proje Detaylarını Görüntüle",
    "projects.ctaTitle": "Projenizi Başlatmaya Hazır mısınız?",
    "projects.ctaDesc":
      "AGStellar'ın iddialı fikirlerinizi güçlü, çalışan ürünlere nasıl dönüştürebileceğini konuşalım.",
    "projects.getInTouch": "İletişime Geçin",

    // About Page
    "about.title": "Hakkımda",
    "about.founderTitle": "Kurucu & CEO",
    "about.email": "E-posta",
    "about.location": "Konum",
    "about.socialMedia": "Sosyal Medya",
    "about.intro":
      "Merhaba, ben Gökdeniz, yapay zeka, uygulama geliştirme ve finansal teknolojiler konularında uzmanlaşmış ilerici bir yazılım şirketi olan AgStellar'ın kurucusuyum.",
    "about.description1":
      "Geleceği şekillendiren teknoloji inşa etme tutkusuyla hareket ederek, derin teknik uzmanlığı stratejik girişimci zihniyetle birleştiriyorum. AgStellar'da sadece kod yazmıyoruz — gerçek dünya zorluklarına yönelik akıllı, ölçeklenebilir ve etkili çözümler tasarlıyoruz.",
    "about.description2":
      "Odağım, gelişmiş yapay zeka yeteneklerini kusursuz dijital deneyimlerle birleştiren ürünler yaratmaktır. Algoritmik ticaret sistemlerinden yapay zeka destekli platformlara ve kurumsal düzeyde uygulamalara kadar, hem yenilikçi hem de ticari olarak uygulanabilir teknolojilerin geliştirilmesine öncülük ediyorum.",
    "about.description3":
      "Bir kurucu olarak, teknoloji, iş ve yeniliğin kesişiminde çalışıyorum — sadece işlev görmek için değil, liderlik etmek için mühendislik yapılmış sistemler inşa ediyorum.",
    "about.expertiseTitle": "Uzmanlık Alanları",
    "about.aiExpertise": "Yapay Zeka",
    "about.aiDesc": "Makine öğrenmesi sistemleri, tahmine dayalı analitik ve yapay zeka entegrasyonu",
    "about.devExpertise": "Yazılım Geliştirme",
    "about.devDesc": "Tam yığın uygulamalar, mobil geliştirme ve kurumsal çözümler",
    "about.fintechExpertise": "Finansal Teknoloji",
    "about.fintechDesc": "Algoritmik ticaret sistemleri, finansal analiz araçları ve piyasa verisi işleme",
    "about.ctaTitle": "Birlikte çalışmaya hazır mısınız?",
    "about.ctaDesc": "AgStellar'ın fikirlerinizi son teknoloji çözümlerle hayata nasıl geçirebileceğini konuşalım.",

    // Contact Page
    "contact.title": "İletişim",
    "contact.subtitle": "Geleceğin projelerini birlikte inşa edelim",
    "contact.getInTouch": "Benimle İletişime Geçin",
    "contact.phone": "Telefon",
    "contact.projectProposal": "Proje Teklifi",
    "contact.fullName": "Ad Soyad",
    "contact.fullNamePlaceholder": "Adınız ve soyadınız",
    "contact.emailPlaceholder": "E-posta adresiniz",
    "contact.projectDetails": "Proje Detayları",
    "contact.projectDetailsPlaceholder": "Projeniz hakkında detayları paylaşın...",
    "contact.sendProposal": "Teklif Gönder",

    // Blog Page
    "blog.title": "Blog",
    "blog.subtitle": "Teknoloji hakkında en son görüşler ve makaleler",
    "blog.readMore": "Devamını Oku",

    // Common
    "common.backToHome": "Ana Sayfaya Dön",
    "common.categories": "Kategoriler",
    "common.company": "Şirket",
    "common.legal": "Yasal",
    "common.privacy": "Gizlilik",
    "common.terms": "Şartlar",
    "common.sitemap": "Site Haritası",
    "common.copyright": "© 2025 AGStellar. Tüm hakları saklıdır.",
    "common.companyDesc": "Fikirleri gerçeğe dönüştüren yenilikçi yazılım çözümleri yaratıyoruz.",
    "common.technology": "Teknoloji",
    "common.aiMl": "Yapay Zeka ve Makine Öğrenmesi",
    "common.webDev": "Web Geliştirme",
    "common.mobileApps": "Mobil Uygulamalar",
    "common.privacyPolicy": "Gizlilik Politikası",
    "common.termsOfService": "Hizmet Şartları",
    "common.cookiePolicy": "Çerez Politikası",
  },
}

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>("en")

  useEffect(() => {
    const savedLanguage = localStorage.getItem("language") as Language
    if (savedLanguage && (savedLanguage === "en" || savedLanguage === "tr")) {
      setLanguage(savedLanguage)
    }
  }, [])

  const handleSetLanguage = (lang: Language) => {
    setLanguage(lang)
    localStorage.setItem("language", lang)
  }

  const t = (key: string): string => {
    return translations[language][key] || key
  }

  return (
    <LanguageContext.Provider value={{ language, setLanguage: handleSetLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider")
  }
  return context
}
