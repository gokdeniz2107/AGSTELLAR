"use client"

import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Menu, Search } from "lucide-react"
import Link from "next/link"
import { useEffect, useState } from "react"
import StaticBackground from "@/components/static-background"
import Image from "next/image"

export default function HomePage() {
  const [isVisible, setIsVisible] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const featuredArticle = {
    title: "Innovating Tomorrow: The Future of AI and Technology",
    excerpt: "How artificial intelligence is reshaping our world and what it means for the future of technology.",
    date: "June 11, 2025",
    category: "AI",
    image: "/images/featured-cream-wireframe.png",
  }

  const topStories = [
    {
      title: "London Startup AI Project Revolutionizes Business Intelligence",
      excerpt: "How this groundbreaking platform is changing the game for startups.",
      date: "May 15, 2025",
      category: "Tech",
      comments: 4,
      image: "/images/london-spring-scene.png",
      slug: "london-startup-ai-project",
    },
    {
      title: "The Evolution of Web Development in 2025",
      excerpt: "New frameworks and technologies that are defining the modern web.",
      date: "April 22, 2025",
      category: "Development",
      image: "/images/web-development-evolution.png",
      slug: "evolution-web-development-2025",
    },
    {
      title: "Mobile App Trends That Will Dominate Next Year",
      excerpt: "What to expect in the world of mobile applications in the coming year.",
      date: "February 8, 2025",
      category: "Mobile",
      image: "/images/mobile-app-abstract.png",
      slug: "mobile-app-trends-2025",
    },
    {
      title: "How Blockchain is Transforming Financial Systems",
      excerpt: "A deep dive into the impact of blockchain technology on modern finance.",
      date: "June 7, 2025",
      category: "Blockchain",
      comments: 3,
      image: "/images/blockchain-bank.png",
      slug: "blockchain-transforming-finance",
    },
  ]

  const latestArticles = [
    {
      title: "The Future of Software Development in the AI Era",
      excerpt: "How artificial intelligence is changing the way we build and deploy software applications.",
      image: "/images/tech-article-1.png",
      category: "Technology",
      slug: "future-software-development-ai",
    },
    {
      title: "Building Scalable Applications with Modern Architecture",
      excerpt: "Best practices for creating robust, maintainable, and scalable software systems.",
      image: "/images/tech-article-2.png",
      category: "Technology",
      slug: "building-scalable-applications",
    },
    {
      title: "Machine Learning Integration in Web Applications",
      excerpt: "Practical approaches to implementing ML features in modern web development.",
      image: "/images/tech-article-3.png",
      category: "Technology",
      slug: "machine-learning-web-applications",
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

              {/* Hamburger Menu and Search */}
              <div className="flex items-center space-x-4">
                <Button variant="ghost" size="icon" className="text-white hover:bg-zinc-800">
                  <Search className="h-5 w-5" />
                </Button>
                <Button
                  variant="ghost"
                  size="icon"
                  className="text-white hover:bg-zinc-800"
                  onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                >
                  <Menu className="h-5 w-5" />
                </Button>
              </div>
            </div>

            {/* Mobile Menu Dropdown */}
            {isMobileMenuOpen && (
              <div className="mt-4 py-4 border-t border-zinc-800">
                <nav className="flex flex-col space-y-4">
                  <Link
                    href="/tech"
                    className="text-white hover:text-cyan-400 text-sm font-medium py-2 px-4 hover:bg-zinc-800 rounded-md transition-colors"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    Tech
                  </Link>
                  <Link
                    href="/ai"
                    className="text-white hover:text-cyan-400 text-sm font-medium py-2 px-4 hover:bg-zinc-800 rounded-md transition-colors"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    AI
                  </Link>
                  <Link
                    href="/development"
                    className="text-white hover:text-cyan-400 text-sm font-medium py-2 px-4 hover:bg-zinc-800 rounded-md transition-colors"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    Development
                  </Link>
                  <Link
                    href="/projects"
                    className="text-white hover:text-cyan-400 text-sm font-medium py-2 px-4 hover:bg-zinc-800 rounded-md transition-colors"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    Projects
                  </Link>
                  <Link
                    href="/about"
                    className="text-white hover:text-cyan-400 text-sm font-medium py-2 px-4 hover:bg-zinc-800 rounded-md transition-colors"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    About
                  </Link>
                </nav>
              </div>
            )}
          </div>
        </header>

        {/* Main Content */}
        <main>
          {/* Featured Article */}
          <section className="py-8 relative">
            <div className="container mx-auto px-4">
              <div className="grid md:grid-cols-12 gap-8">
                {/* Left Sidebar - Fixed Featured text */}
                <div className="hidden md:block md:col-span-1">
                  <div className="absolute top-64 left-6 z-20">
                    <h2 className="text-5xl font-black tracking-tighter text-white uppercase transform -rotate-90 origin-top-left whitespace-nowrap">
                      Featured
                    </h2>
                  </div>
                </div>

                {/* Main Featured Article */}
                <div className="md:col-span-7">
                  <div className="relative aspect-[16/10] mb-6 bg-gradient-to-br from-stone-100 to-stone-200 rounded-lg overflow-hidden">
                    <Image
                      src={featuredArticle.image || "/placeholder.svg"}
                      alt={featuredArticle.title}
                      fill
                      className="object-cover"
                      priority
                    />
                  </div>
                  <Badge className="bg-cyan-500 hover:bg-cyan-600 mb-4">{featuredArticle.category}</Badge>
                  <h1 className="text-4xl md:text-6xl font-black tracking-tight leading-tight mb-4">
                    {featuredArticle.title}
                  </h1>
                  <p className="text-lg text-zinc-300 mb-4">{featuredArticle.excerpt}</p>
                  <div className="flex items-center text-sm text-zinc-400">
                    <span>{featuredArticle.date}</span>
                  </div>
                </div>

                {/* Top Stories */}
                <div className="md:col-span-4">
                  <h3 className="text-lg font-medium text-cyan-500 mb-6">Top Stories</h3>
                  <div className="space-y-8">
                    {topStories.map((story, index) => (
                      <Link key={index} href={`/articles/${story.slug}`} className="flex gap-4 group">
                        <div className="flex-shrink-0 relative w-20 h-20 rounded-lg overflow-hidden">
                          <Image
                            src={story.image || "/placeholder.svg"}
                            alt={story.title}
                            fill
                            className="object-cover group-hover:scale-105 transition-transform duration-300"
                          />
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center mb-1">
                            <Badge className="bg-zinc-800 text-xs mr-2">{story.category}</Badge>
                            <span className="text-xs text-zinc-500">{story.date}</span>
                          </div>
                          <h4 className="font-bold mb-1 leading-tight text-sm group-hover:text-cyan-400 line-clamp-2">
                            {story.title}
                          </h4>
                          {(story.slug === "london-startup-ai-project" ||
                            story.slug === "blockchain-transforming-finance") && (
                            <div className="flex items-center text-xs text-zinc-500">
                              <span>{story.comments} comments</span>
                            </div>
                          )}
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Latest Articles */}
          <section className="py-12 bg-zinc-900">
            <div className="container mx-auto px-4">
              <div className="mb-8">
                <h2 className="text-2xl font-bold">Latest Articles</h2>
              </div>

              <div className="grid md:grid-cols-3 gap-8">
                {latestArticles.map((article, index) => (
                  <Link key={index} href={`/articles/${article.slug}`} className="group">
                    <div className="relative aspect-video mb-4 overflow-hidden rounded-lg">
                      <Image
                        src={article.image || "/placeholder.svg"}
                        alt={article.title}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                    <Badge className="bg-zinc-800 text-xs mb-2">{article.category}</Badge>
                    <h3 className="text-xl font-bold mb-2 group-hover:text-cyan-400">{article.title}</h3>
                    <p className="text-zinc-400 text-sm mb-3">{article.excerpt}</p>
                    <div className="flex items-center text-xs text-zinc-500">
                      <span>June 5, 2025</span>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </section>
        </main>

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
              <p className="text-zinc-500 text-sm">© 2025 AGStellar. All rights reserved.</p>
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
