"use client"

import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Mail, MapPin, Github, Linkedin, Code, Brain, TrendingUp, ArrowRight } from "lucide-react"
import Link from "next/link"
import { useEffect, useState } from "react"
import StaticBackground from "@/components/static-background"
import Header from "@/components/header"
import Footer from "@/components/footer"

export default function AboutPage() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const expertise = [
    {
      icon: Brain,
      title: "Artificial Intelligence",
      description: "Machine learning systems, predictive analytics, and AI integration",
      color: "text-primary",
      bgColor: "bg-primary/10",
    },
    {
      icon: Code,
      title: "Software Development",
      description: "Full-stack applications, mobile development, and enterprise solutions",
      color: "text-primary",
      bgColor: "bg-primary/10",
    },
    {
      icon: TrendingUp,
      title: "Financial Technology",
      description: "Algorithmic trading systems, financial analysis tools, and market data processing",
      color: "text-primary",
      bgColor: "bg-primary/10",
    },
  ]

  return (
    <div className="min-h-screen text-foreground bg-background font-sans">
      <StaticBackground />

      <div className="relative z-10">
        <Header />

        <main className="py-12 md:py-20">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-12 gap-12">
              {/* Founder Profile - Sidebar */}
              <div className="md:col-span-4">
                <div className={`sticky top-32 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                  <Badge className="bg-primary/10 text-primary border-primary/20 mb-4">Founder</Badge>
                  <h2 className="text-2xl font-bold mb-2">Gokdeniz Karadeniz</h2>
                  <p className="text-primary mb-6">Founder & CEO</p>

                  <div className="space-y-4 mb-8">
                    <div className="flex items-center gap-3 p-3 rounded-xl bg-card border border-border">
                      <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                        <Mail className="w-5 h-5 text-primary" />
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground">Email</p>
                        <p className="text-foreground">agstellarai@gmail.com</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3 p-3 rounded-xl bg-card border border-border">
                      <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                        <MapPin className="w-5 h-5 text-primary" />
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground">Location</p>
                        <p className="text-foreground">Antalya, Turkey</p>
                      </div>
                    </div>
                  </div>

                  <div className="flex gap-3">
                    <Button variant="outline" size="icon" className="rounded-lg border-border hover:bg-muted hover:border-primary/50">
                      <Github className="w-5 h-5" />
                    </Button>
                    <Button variant="outline" size="icon" className="rounded-lg border-border hover:bg-muted hover:border-primary/50">
                      <Linkedin className="w-5 h-5" />
                    </Button>
                  </div>
                </div>
              </div>

              {/* About Content - Main */}
              <div className="md:col-span-8">
                <div className={`transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                  <Badge className="bg-primary/10 text-primary border-primary/20 mb-4">About</Badge>
                  <h1 className="text-4xl md:text-5xl font-black tracking-tight mb-8">About Me</h1>

                  <div className="prose prose-lg max-w-none mb-12">
                    <p className="text-xl text-foreground leading-relaxed mb-6">
                      Hi there, I&apos;m Gokdeniz, the founder of AgStellar — a forward-thinking software company specialized
                      in artificial intelligence, application development, and financial technologies.
                    </p>

                    <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                      Driven by a passion for building technology that shapes the future, I combine deep technical
                      expertise with a strategic entrepreneurial mindset. At AgStellar, we don&apos;t just write code — we
                      architect intelligent, scalable, and impactful solutions for real-world challenges.
                    </p>

                    <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                      My focus is on creating products that merge advanced AI capabilities with seamless digital
                      experiences. From algorithmic trading systems to AI-powered platforms and enterprise-grade
                      applications, I lead the development of technologies that are both innovative and commercially
                      viable.
                    </p>

                    <p className="text-lg text-muted-foreground leading-relaxed">
                      As a founder, I work at the intersection of technology, business, and innovation — building systems
                      that are engineered not just to function, but to lead.
                    </p>
                  </div>

                  {/* Expertise Areas */}
                  <h2 className="text-2xl font-bold mb-6">Areas of Expertise</h2>
                  <div className="grid md:grid-cols-3 gap-6 mb-12">
                    {expertise.map((item, index) => (
                      <div key={index} className="p-6 rounded-2xl bg-card border border-border hover:border-primary/50 transition-all duration-300">
                        <div className={`w-12 h-12 rounded-lg ${item.bgColor} flex items-center justify-center mb-4`}>
                          <item.icon className={`w-6 h-6 ${item.color}`} />
                        </div>
                        <h3 className="text-lg font-bold mb-2 text-foreground">{item.title}</h3>
                        <p className="text-muted-foreground text-sm">{item.description}</p>
                      </div>
                    ))}
                  </div>

                  {/* CTA Card */}
                  <div className="p-8 rounded-2xl bg-gradient-to-br from-primary/10 via-card to-card border border-border">
                    <h3 className="text-2xl font-bold mb-4">Ready to work together?</h3>
                    <p className="text-muted-foreground mb-6">
                      Let&apos;s discuss how AgStellar can help bring your ideas to life with cutting-edge technology solutions.
                    </p>
                    <Button className="bg-primary hover:bg-primary/90 text-primary-foreground gap-2" asChild>
                      <Link href="/contact">
                        Get in Touch <ArrowRight className="h-4 w-4" />
                      </Link>
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>

        <Footer />
      </div>
    </div>
  )
}
