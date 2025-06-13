"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import Logo from "@/components/logo"

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true)
      } else {
        setScrolled(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-all duration-300 ${
        scrolled ? "bg-white/95 backdrop-blur-md shadow-md" : "bg-transparent"
      }`}
    >
      <div className="container flex h-44 items-center justify-between">
        <Logo />

        {/* Hamburger Menu Button - Always visible */}
        <Button variant="ghost" size="icon" className="flex items-center justify-center" onClick={toggleMenu}>
          <div className="flex items-center gap-2">
            <span className="font-medium text-sm mr-1">Menü</span>
            {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </div>
        </Button>
      </div>

      {/* Full Screen Navigation Menu */}
      {isMenuOpen && (
        <div className="fixed inset-0 bg-white/95 backdrop-blur-md z-40 flex items-center justify-center">
          <div className="absolute top-5 right-5">
            <Button variant="ghost" size="icon" onClick={toggleMenu}>
              <X className="h-6 w-6" />
            </Button>
          </div>

          <nav className="flex flex-col space-y-8 text-center">
            <Link
              href="/#about"
              className="text-2xl font-medium transition-colors hover:text-blue-600"
              onClick={toggleMenu}
            >
              Hakkımızda
            </Link>
            <Link
              href="/#services"
              className="text-2xl font-medium transition-colors hover:text-blue-600"
              onClick={toggleMenu}
            >
              Hizmetlerimiz
            </Link>
            <Link
              href="/#references"
              className="text-2xl font-medium transition-colors hover:text-blue-600"
              onClick={toggleMenu}
            >
              Referanslar
            </Link>
            <Link
              href="/#projects"
              className="text-2xl font-medium transition-colors hover:text-blue-600"
              onClick={toggleMenu}
            >
              Projelerimiz
            </Link>
            <Link
              href="/#contact"
              className="text-2xl font-medium transition-colors hover:text-blue-600"
              onClick={toggleMenu}
            >
              İletişim
            </Link>

            <div className="pt-8">
              <Button className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white hover:shadow-lg transition-all px-8 py-6 text-lg">
                Bize Ulaşın
              </Button>
            </div>
          </nav>
        </div>
      )}
    </header>
  )
}
