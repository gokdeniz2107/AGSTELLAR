"use client"

import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Menu, Search } from "lucide-react"
import Link from "next/link"
import { useEffect, useState } from "react"
import StaticBackground from "@/components/static-background"
import Image from "next/image"

export default function TechPage() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const latestArticles = [
    {
      title: "Edge Computing: Bringing Processing Closer to Data",
      excerpt: "How edge computing is reducing latency and improving performance for real-time applications.",
      image: "/images/tech-article-1.png",
      category: "Technology",
    },
    {
      title: "The Rise of Sustainable Technology Solutions",
      excerpt: "Green tech innovations that are helping companies reduce their environmental footprint.",
      image: "/images/tech-article-2.png",
      category: "Technology",
    },
    {
      title: "Augmented Reality in Enterprise Applications",
      excerpt: "How AR is transforming training, maintenance, and customer experiences in business.",
      image: "/images/tech-article-3.png",
      category: "Technology",
    },
  ]

  return (
    <div className="min-h-screen text-white bg-black" style={{ fontFamily: "'Inter', system-ui, sans-serif" }}>
      {/* Static Background */}
      <StaticBackground />

      {/* Content Overlay */}
      <div className="relative z-10">
        {/* Header */}
        <header className="bg-black sticky top-0 z-50 border-b border-zinc-800">
          <div className="container mx-auto px-4 py-4">
            <div className="flex items-center justify-between">
              {/* Logo */}
              <div className="flex items-center">
                <Link href="/" className="text-3xl font-black tracking-tighter">
                  <span className="text-white">AG</span>
                  <span className="text-white">STELLAR</span>
                </Link>
              </div>

              {/* Navigation */}
              <nav className="hidden md:flex items-center space-x-6">
                <Link href="/tech" className="text-cyan-400 hover:text-cyan-300 text-sm font-medium">
                  Tech
                </Link>
                <Link href="/ai" className="text-white hover:text-zinc-300 text-sm font-medium">
                  AI
                </Link>
                <Link href="/development" className="text-white hover:text-zinc-300 text-sm font-medium">
                  Development
                </Link>
                <Link href="/projects" className="text-white hover:text-zinc-300 text-sm font-medium">
                  Projects
                </Link>
                <Link href="/about" className="text-white hover:text-zinc-300 text-sm font-medium">
                  About
                </Link>
              </nav>

              {/* Search, Language Switcher and Menu */}
              <div className="flex items-center space-x-4">
                <Button variant="ghost" size="icon" className="text-white hover:bg-zinc-800">
                  <Search className="h-5 w-5" />
                </Button>
                <Button variant="ghost" size="icon" className="text-white hover:bg-zinc-800 md:hidden">
                  <Menu className="h-5 w-5" />
                </Button>
              </div>
            </div>
          </div>
        </header>

        {/* Main Content */}
        <main className="py-12">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h1 className="text-5xl font-black tracking-tight mb-6">Technology</h1>
              <div className="max-w-4xl mx-auto">
                <h2 className="text-2xl font-bold mb-4">The Future, Engineered.</h2>
                <p className="text-zinc-300 text-lg leading-relaxed mb-4">
                  At AgStellar, we explore how technology is not just evolving — it's redefining what's possible.
                </p>
                <p className="text-zinc-300 text-lg leading-relaxed mb-4">
                  From artificial intelligence to advanced software systems, we build tools that transform industries,
                  enhance human potential, and move the world forward.
                </p>
                <p className="text-zinc-400 text-lg">
                  Whether you're an engineer, an entrepreneur, or just curious — innovation starts here.
                </p>
              </div>
            </div>

            {/* Articles Grid */}
            <div className="grid md:grid-cols-3 gap-8">
              {latestArticles.map((article, index) => (
                <div key={index} className="group">
                  <div className="relative aspect-video mb-4 overflow-hidden rounded-lg">
                    <Image
                      src={article.image || "/placeholder.svg"}
                      alt={article.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <Badge className="bg-zinc-800 text-xs mb-2">{article.category}</Badge>
                  <h3 className="text-xl font-bold mb-2 group-hover:text-cyan-400">
                    <Link href="#">{article.title}</Link>
                  </h3>
                  <p className="text-zinc-400 text-sm mb-3">{article.excerpt}</p>
                  <div className="flex items-center text-xs text-zinc-500">
                    <span>AGStellar Team</span>
                    <span className="mx-1">•</span>
                    <span>June 5, 2025</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </main>

        {/* Newsletter */}
        <section className="py-16 bg-zinc-800">
          <div className="container mx-auto px-4 max-w-4xl text-center">
            <h2 className="text-3xl font-bold mb-4">Stay Updated</h2>
            <p className="text-zinc-300 mb-8 max-w-2xl mx-auto">
              Subscribe to our newsletter to receive the latest updates on technology, AI, and software development.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Your email address"
                className="flex-1 px-4 py-3 bg-zinc-900 border border-zinc-700 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-cyan-500"
              />
              <Button className="bg-cyan-500 hover:bg-cyan-600 text-white">Subscribe</Button>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="bg-black py-12 border-t border-zinc-800">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-4 gap-8 mb-12">
              <div>
                <h3 className="text-xl font-bold mb-4">AGStellar</h3>
                <p className="text-zinc-400 mb-4">
                  Creating innovative software solutions that transform ideas into reality.
                </p>
                <div className="flex space-x-4">
                  <Button variant="ghost" size="icon" className="text-white hover:bg-zinc-800">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="h-5 w-5"
                    >
                      <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
                    </svg>
                  </Button>
                  <Button variant="ghost" size="icon" className="text-white hover:bg-zinc-800">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="h-5 w-5"
                    >
                      <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line>
                    </svg>
                  </Button>
                  <Button variant="ghost" size="icon" className="text-white hover:bg-zinc-800">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="h-5 w-5"
                    >
                      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                      <rect width="4" height="12" x="2" y="9"></rect>
                      <circle cx="4" cy="4" r="2"></circle>
                    </svg>
                  </Button>
                </div>
              </div>

              <div>
                <h4 className="font-medium mb-4 text-zinc-300">Categories</h4>
                <ul className="space-y-2 text-zinc-400">
                  <li>
                    <Link href="#" className="hover:text-white">
                      Technology
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="hover:text-white">
                      AI & Machine Learning
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="hover:text-white">
                      Web Development
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="hover:text-white">
                      Mobile Apps
                    </Link>
                  </li>
                </ul>
              </div>

              <div>
                <h4 className="font-medium mb-4 text-zinc-300">Company</h4>
                <ul className="space-y-2 text-zinc-400">
                  <li>
                    <Link href="/about" className="hover:text-white">
                      About
                    </Link>
                  </li>
                  <li>
                    <Link href="/projects" className="hover:text-white">
                      Projects
                    </Link>
                  </li>
                  <li>
                    <Link href="/contact" className="hover:text-white">
                      Contact
                    </Link>
                  </li>
                </ul>
              </div>

              <div>
                <h4 className="font-medium mb-4 text-zinc-300">Legal</h4>
                <ul className="space-y-2 text-zinc-400">
                  <li>
                    <Link href="#" className="hover:text-white">
                      Privacy Policy
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="hover:text-white">
                      Terms of Service
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="hover:text-white">
                      Cookie Policy
                    </Link>
                  </li>
                </ul>
              </div>
            </div>

            <div className="border-t border-zinc-800 pt-8 flex flex-col md:flex-row justify-between items-center">
              <p className="text-zinc-500 text-sm">&copy; 2025 AGStellar. All rights reserved.</p>
              <div className="flex items-center mt-4 md:mt-0">
                <Button variant="link" className="text-zinc-500 text-sm hover:text-white">
                  Privacy
                </Button>
                <span className="text-zinc-700 mx-2">|</span>
                <Button variant="link" className="text-zinc-500 text-sm hover:text-white">
                  Terms
                </Button>
                <span className="text-zinc-700 mx-2">|</span>
                <Button variant="link" className="text-zinc-500 text-sm hover:text-white">
                  Sitemap
                </Button>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </div>
  )
}
