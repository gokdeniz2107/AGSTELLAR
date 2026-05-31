"use client"

import { Button } from "@/components/ui/button"
import { Menu } from "lucide-react"
import Link from "next/link"
import { useState } from "react"
import { usePathname } from "next/navigation"

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const pathname = usePathname()

  const navItems = [
    { name: "Trading", href: "/trading" },
    { name: "Tech", href: "/tech" },
    { name: "AI", href: "/ai" },
    { name: "Projects", href: "/projects" },
    { name: "About", href: "/about" },
  ]

  const isActive = (href: string) => pathname === href

  return (
    <header className="bg-background/80 backdrop-blur-md sticky top-0 z-50 border-b border-border">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center">
            <Link href="/" className="text-3xl font-black tracking-tighter">
              <span className="text-foreground">AG</span>
              <span className="text-primary">STELLAR</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={`text-sm font-medium transition-colors ${
                  isActive(item.href)
                    ? "text-primary"
                    : "text-muted-foreground hover:text-primary"
                }`}
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* CTA and Mobile Menu */}
          <div className="flex items-center gap-4">
            <Button className="hidden md:flex bg-primary hover:bg-primary/90 text-primary-foreground">
              Start Trading
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden text-foreground hover:bg-muted"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              <Menu className="h-5 w-5" />
            </Button>
          </div>
        </div>

        {/* Mobile Menu Dropdown */}
        {isMobileMenuOpen && (
          <div className="mt-4 py-4 border-t border-border md:hidden">
            <nav className="flex flex-col gap-2">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`text-sm font-medium py-2 px-4 rounded-md transition-colors ${
                    isActive(item.href)
                      ? "text-primary bg-primary/10"
                      : "text-foreground hover:text-primary hover:bg-muted"
                  }`}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <Button className="mt-4 bg-primary hover:bg-primary/90 text-primary-foreground">
                Start Trading
              </Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}
