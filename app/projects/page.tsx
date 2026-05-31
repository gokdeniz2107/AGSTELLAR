"use client"

import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ChevronRight, ArrowRight } from "lucide-react"
import Link from "next/link"
import { useEffect, useState } from "react"
import StaticBackground from "@/components/static-background"
import Header from "@/components/header"
import Footer from "@/components/footer"

export default function ProjectsPage() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const projects = [
    {
      id: "london-ai-assistant",
      title: "London AI Assistant App",
      description:
        "Advanced AI-powered assistant app developed for a London-based startup. This intelligent system helps businesses automate customer interactions, analyze data, and provide personalized recommendations.",
      category: "AI",
    },
    {
      id: "metatrader5-trading",
      title: "MetaTrader5 Trading System",
      description:
        "Custom algorithmic trading system built for the MetaTrader5 platform. This solution includes advanced technical indicators, automated trading strategies, and real-time market analysis tools.",
      category: "Trading",
    },
    {
      id: "blockchain-payment",
      title: "Blockchain Payment Solution",
      description:
        "Secure and efficient blockchain-based payment processing system. This project implements smart contracts for transparent transactions and includes a user-friendly wallet interface.",
      category: "Blockchain",
    },
    {
      id: "restaurant-management",
      title: "Restaurant Management Platform",
      description:
        "Comprehensive web-based restaurant management system with online ordering, reservation management, inventory tracking, and customer relationship features.",
      category: "Web App",
    },
    {
      id: "tradingview-profit",
      title: "TradingView Profit Strategy",
      description:
        "Custom TradingView script developed to help traders identify profitable entry and exit points. This strategy combines multiple technical indicators to generate high-probability trading signals.",
      category: "Trading",
    },
    {
      id: "ecommerce-analytics",
      title: "E-commerce Analytics Dashboard",
      description:
        "Interactive analytics dashboard for e-commerce businesses to track sales, customer behavior, and inventory performance with actionable insights and predictive analytics.",
      category: "Analytics",
    },
    {
      id: "segu-corporate-website",
      title: "Corporate Website for Segu Teknoloji",
      description:
        "Clean, modern corporate website designed for Segu Teknoloji, a telecommunications and infrastructure company. Built with scalable architecture, ensuring fast performance and professional digital presence.",
      category: "Web",
    },
  ]

  return (
    <div className="min-h-screen text-foreground bg-background font-sans">
      <StaticBackground />

      <div className="relative z-10">
        <Header />

        <main className="py-12 md:py-20">
          <div className="container mx-auto px-4">
            <div className={`flex flex-col md:flex-row items-start md:items-center justify-between mb-12 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              <div>
                <Badge className="bg-primary/10 text-primary border-primary/20 mb-4">Our Work</Badge>
                <h1 className="text-4xl md:text-6xl font-black tracking-tight mb-2">Projects</h1>
                <p className="text-muted-foreground">Client projects and technology innovations delivered by AgStellar</p>
              </div>
              <Button className="mt-4 md:mt-0 bg-primary hover:bg-primary/90 text-primary-foreground">
                Contact Us
                <ChevronRight className="ml-1 h-4 w-4" />
              </Button>
            </div>

            <div className="space-y-6">
              {projects.map((project, index) => (
                <div
                  key={index}
                  className="group p-6 md:p-8 rounded-2xl bg-card border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/5"
                >
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-4">
                    <div className="flex items-center gap-3">
                      <h2 className="text-xl md:text-2xl font-bold group-hover:text-primary transition-colors">{project.title}</h2>
                      <Badge className="bg-primary/10 text-primary border-primary/20 text-xs">{project.category}</Badge>
                    </div>
                  </div>
                  <p className="text-muted-foreground mb-6">{project.description}</p>
                  <Link 
                    href={`/projects/${project.id}`}
                    className="inline-flex items-center text-primary hover:underline text-sm font-medium group/link"
                  >
                    View Project Details
                    <ChevronRight className="ml-1 h-4 w-4 group-hover/link:translate-x-1 transition-transform" />
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </main>

        {/* CTA Section */}
        <section className="py-20 bg-card/50 border-y border-border">
          <div className="container mx-auto px-4 max-w-4xl text-center">
            <h2 className="text-3xl md:text-4xl font-black tracking-tight mb-4">Ready to Start Your Project?</h2>
            <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
              Let&apos;s discuss how AGStellar can help transform your ambitious ideas into powerful, working products.
            </p>
            <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground gap-2">
              Get in Touch <ArrowRight className="h-4 w-4" />
            </Button>
          </div>
        </section>

        <Footer />
      </div>
    </div>
  )
}
