import Link from "next/link"
import { Facebook, Twitter, Instagram, Linkedin, MapPin, Phone, Mail } from "lucide-react"
import Logo from "@/components/logo"

export default function Footer() {
  return (
    <footer className="w-full border-t bg-white">
      <div className="container py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          <div className="space-y-6">
            <Logo />
            <p className="text-gray-500 dark:text-gray-400 max-w-xs">
              SEGU Teknoloji, telekomünikasyon sektöründe yenilikçi çözümler sunan bir teknoloji şirketidir.
            </p>
            <div className="flex gap-4">
              <Link
                href="#"
                className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center text-gray-600 hover:bg-blue-100 hover:text-blue-600 transition-colors"
              >
                <Facebook className="h-5 w-5" />
                <span className="sr-only">Facebook</span>
              </Link>
              <Link
                href="#"
                className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center text-gray-600 hover:bg-blue-100 hover:text-blue-600 transition-colors"
              >
                <Twitter className="h-5 w-5" />
                <span className="sr-only">Twitter</span>
              </Link>
              <Link
                href="#"
                className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center text-gray-600 hover:bg-blue-100 hover:text-blue-600 transition-colors"
              >
                <Instagram className="h-5 w-5" />
                <span className="sr-only">Instagram</span>
              </Link>
              <Link
                href="#"
                className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center text-gray-600 hover:bg-blue-100 hover:text-blue-600 transition-colors"
              >
                <Linkedin className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </Link>
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Şirket</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/#about" className="text-gray-500 hover:text-blue-600 transition-colors">
                  Hakkımızda
                </Link>
              </li>
              <li>
                <Link href="/#services" className="text-gray-500 hover:text-blue-600 transition-colors">
                  Hizmetlerimiz
                </Link>
              </li>
              <li>
                <Link href="/#projects" className="text-gray-500 hover:text-blue-600 transition-colors">
                  Projelerimiz
                </Link>
              </li>
              <li>
                <Link href="/#references" className="text-gray-500 hover:text-blue-600 transition-colors">
                  Referanslarımız
                </Link>
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Hizmetler</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/#services" className="text-gray-500 hover:text-blue-600 transition-colors">
                  Ağ Altyapısı
                </Link>
              </li>
              <li>
                <Link href="/#services" className="text-gray-500 hover:text-blue-600 transition-colors">
                  Veri Merkezi
                </Link>
              </li>
              <li>
                <Link href="/#services" className="text-gray-500 hover:text-blue-600 transition-colors">
                  Kablosuz Ağ Sistemleri
                </Link>
              </li>
              <li>
                <Link href="/#services" className="text-gray-500 hover:text-blue-600 transition-colors">
                  Teknik Destek
                </Link>
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-semibold">İletişim</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-blue-600 mt-0.5" />
                <span className="text-gray-500">Antalya, Türkiye</span>
              </li>
              <li className="flex items-start gap-3">
                <Phone className="h-5 w-5 text-blue-600 mt-0.5" />
                <span className="text-gray-500">+90 (XXX) XXX XX XX</span>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="h-5 w-5 text-blue-600 mt-0.5" />
                <span className="text-gray-500">info@seguteknoloji.com.tr</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-gray-500">© 2024 SEGU Teknoloji. Tüm hakları saklıdır.</p>
          <div className="flex gap-6">
            <Link href="#" className="text-sm text-gray-500 hover:text-blue-600 transition-colors">
              Gizlilik Politikası
            </Link>
            <Link href="#" className="text-sm text-gray-500 hover:text-blue-600 transition-colors">
              Kullanım Şartları
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
