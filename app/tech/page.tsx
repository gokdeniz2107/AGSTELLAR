"use client"

import { Badge } from "@/components/ui/badge"
import { useEffect, useState } from "react"
import StaticBackground from "@/components/static-background"
import Image from "next/image"
import Header from "@/components/header"
import Footer from "@/components/footer"

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
    <div className="min-h-screen text-foreground bg-background font-sans">
      <StaticBackground />

      <div className="relative z-10">
        <Header />

        <main className="py-12 md:py-20">
          <div className="container mx-auto px-4">
            <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              <Badge className="bg-primary/10 text-primary border-primary/20 mb-4">Technology</Badge>
              <h1 className="text-4xl md:text-6xl font-black tracking-tight mb-6">The Future, Engineered.</h1>
              <div className="max-w-3xl mx-auto">
                <p className="text-muted-foreground text-lg leading-relaxed mb-4">
                  At AgStellar, we explore how technology is not just evolving — it&apos;s redefining what&apos;s possible.
                </p>
                <p className="text-muted-foreground text-lg leading-relaxed mb-4">
                  From artificial intelligence to advanced software systems, we build tools that transform industries,
                  enhance human potential, and move the world forward.
                </p>
                <p className="text-muted-foreground/70 text-lg">
                  Whether you&apos;re an engineer, an entrepreneur, or just curious — innovation starts here.
                </p>
              </div>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {latestArticles.map((article, index) => (
                <div 
                  key={index} 
                  className={`group p-6 rounded-2xl bg-card border border-border hover:border-primary/50 transition-all duration-300 delay-${index * 100}`}
                >
                  <div className="relative aspect-video mb-4 overflow-hidden rounded-xl bg-muted">
                    <Image
                      src={article.image || "/placeholder.svg"}
                      alt={article.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <Badge className="bg-primary/10 text-primary border-primary/20 text-xs mb-3">{article.category}</Badge>
                  <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">
                    {article.title}
                  </h3>
                  <p className="text-muted-foreground text-sm mb-3">{article.excerpt}</p>
                  <div className="flex items-center text-xs text-muted-foreground/70">
                    <span>AGStellar Team</span>
                    <span className="mx-2">•</span>
                    <span>June 5, 2025</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </main>

        {/* Newsletter Section */}
        <section className="py-16 bg-card/50 border-y border-border">
          <div className="container mx-auto px-4 max-w-4xl text-center">
            <h2 className="text-3xl font-bold mb-4">Stay Updated</h2>
            <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
              Subscribe to our newsletter to receive the latest updates on technology, AI, and software development.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Your email address"
                className="flex-1 px-4 py-3 bg-background border border-border rounded-md text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
              />
              <button className="px-6 py-3 bg-primary hover:bg-primary/90 text-primary-foreground rounded-md font-medium transition-colors">
                Subscribe
              </button>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </div>
  )
}
