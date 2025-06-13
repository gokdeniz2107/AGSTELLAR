"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowLeft, ArrowRight, Calendar, User, Search, Menu } from "lucide-react"
import Link from "next/link"
import StaticBackground from "@/components/static-background"

export default function BlogPage() {
  const blogPosts = [
    {
      id: 1,
      title: "Yapay Zeka ile Geleceği Şekillendirmek",
      excerpt:
        "AI teknolojilerinin günlük hayatımıza etkisi, machine learning algoritmaları ve gelecekteki potansiyeli üzerine detaylı bir analiz.",
      date: "15 Aralık 2024",
      author: "AGStellar Team",
      category: "Yapay Zeka",
      readTime: "8 dk",
      slug: "yapay-zeka-gelecek",
    },
    {
      id: 2,
      title: "React 19'da Yeni Özellikler ve Server Components",
      excerpt:
        "React'in yeni sürümünde gelen özellikler, server components, concurrent features ve geliştirici deneyimindeki iyileştirmeler.",
      date: "12 Aralık 2024",
      author: "AGStellar Team",
      category: "React",
      readTime: "6 dk",
      slug: "react-19-yenilikler",
    },
    {
      id: 3,
      title: "Next.js 15 ile Full-Stack Geliştirme",
      excerpt:
        "Next.js'in en son sürümü ile modern web uygulamaları geliştirme, API routes, middleware ve performans optimizasyonları.",
      date: "10 Aralık 2024",
      author: "AGStellar Team",
      category: "Next.js",
      readTime: "10 dk",
      slug: "nextjs-15-fullstack",
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
                <Link href="/tech" className="text-white hover:text-zinc-300 text-sm font-medium">
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
                <Link href="/blog" className="text-cyan-400 hover:text-cyan-300 text-sm font-medium">
                  Blog
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

        {/* Blog Content */}
        <section className="py-24">
          <div className="container mx-auto px-6">
            <Button variant="ghost" className="mb-8 text-white" asChild>
              <Link href="/">
                <ArrowLeft className="mr-2 h-4 w-4" /> Back to Home
              </Link>
            </Button>

            <div className="text-center mb-20">
              <h2 className="text-5xl md:text-6xl font-bold mb-6">
                <span className="text-white">Blog</span>
              </h2>
              <p className="text-zinc-400 max-w-3xl mx-auto text-lg">Latest insights and articles about technology</p>
            </div>

            <div className="space-y-8">
              {blogPosts.map((post) => (
                <Card
                  key={post.id}
                  className="bg-zinc-900 border-slate-200 hover:shadow-lg transition-all duration-300"
                >
                  <div className="md:flex">
                    <div className="md:w-2/3">
                      <CardHeader>
                        <div className="flex items-center gap-3 mb-3">
                          <Badge
                            variant="secondary"
                            className={`${
                              post.category === "Yapay Zeka"
                                ? "bg-purple-100 text-purple-800"
                                : post.category === "React"
                                  ? "bg-blue-100 text-blue-800"
                                  : "bg-green-100 text-green-800"
                            }`}
                          >
                            {post.category}
                          </Badge>
                          <span className="text-sm text-zinc-400">{post.readTime} okuma</span>
                        </div>
                        <CardTitle className="text-xl text-white group-hover:text-gray-800 transition-colors duration-300">
                          <Link href={`/blog/${post.slug}`}>{post.title}</Link>
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <CardDescription className="text-base mb-6 line-clamp-3 text-zinc-400 leading-relaxed">
                          {post.excerpt}
                        </CardDescription>
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-4 text-sm text-zinc-400">
                            <div className="flex items-center gap-2">
                              <User className="w-4 h-4" />
                              {post.author}
                            </div>
                            <div className="flex items-center gap-2">
                              <Calendar className="w-4 h-4" />
                              {post.date}
                            </div>
                          </div>
                          <Button variant="ghost" size="sm" className="text-white hover:text-gray-800" asChild>
                            <Link href={`/blog/${post.slug}`}>
                              Read More <ArrowRight className="ml-2 w-4 h-4" />
                            </Link>
                          </Button>
                        </div>
                      </CardContent>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="bg-slate-100 py-8 border-t border-slate-200">
          <div className="container mx-auto px-6">
            <div className="flex flex-col md:flex-row justify-between items-center">
              {/* Logo */}
              <div className="text-left leading-none mb-4 md:mb-0">
                <div className="text-xl font-black text-black tracking-wider">AG</div>
                <div className="text-base font-black text-black tracking-wider">STELL</div>
                <div className="text-lg font-black text-black tracking-wider">AR</div>
              </div>

              <p className="text-gray-800">&copy; 2025 AGStellar. All rights reserved.</p>
            </div>
          </div>
        </footer>
      </div>
    </div>
  )
}
