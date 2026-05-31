"use client"

import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Menu, TrendingUp, BarChart3, Shield, Zap, ArrowRight, ChevronRight, LineChart, Wallet, Target, Globe, TrendingDown } from "lucide-react"
import Link from "next/link"
import { useEffect, useState } from "react"
import StaticBackground from "@/components/static-background"
import Image from "next/image"

// Market data for slider - defined outside component to prevent recreation
const marketPairs = [
  { pair: "BTC/USD", price: "67,842.50", change: "+2.34%", isUp: true },
  { pair: "ETH/USD", price: "3,456.20", change: "+1.87%", isUp: true },
  { pair: "EUR/USD", price: "1.0842", change: "-0.12%", isUp: false },
  { pair: "GBP/USD", price: "1.2654", change: "+0.45%", isUp: true },
  { pair: "XAU/USD", price: "2,342.80", change: "+0.98%", isUp: true },
  { pair: "SPX500", price: "5,234.18", change: "+0.67%", isUp: true },
  { pair: "AAPL", price: "178.45", change: "-0.23%", isUp: false },
  { pair: "TSLA", price: "245.67", change: "+3.12%", isUp: true },
]

const TOTAL_SLIDES = Math.ceil(marketPairs.length / 4)

export default function HomePage() {
  const [isVisible, setIsVisible] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [currentSlide, setCurrentSlide] = useState(0)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  // Auto slide every 5 seconds
  useEffect(() => {
    const slideInterval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % TOTAL_SLIDES)
    }, 5000)

    return () => clearInterval(slideInterval)
  }, [])

  const tradingServices = [
    {
      icon: LineChart,
      title: "Algorithmic Trading",
      description: "Advanced AI-powered trading algorithms for optimal market execution and portfolio management.",
    },
    {
      icon: BarChart3,
      title: "Market Analysis",
      description: "Real-time market data and comprehensive analytics to make informed trading decisions.",
    },
    {
      icon: Shield,
      title: "Risk Management",
      description: "Sophisticated risk assessment tools to protect your investments and minimize losses.",
    },
    {
      icon: Zap,
      title: "High-Frequency Trading",
      description: "Ultra-low latency infrastructure for lightning-fast trade execution.",
    },
  ]

  const marketStats = [
    { label: "Trading Volume", value: "$2.4B+", change: "+12.5%" },
    { label: "Active Traders", value: "50K+", change: "+8.3%" },
    { label: "Success Rate", value: "94.7%", change: "+2.1%" },
    { label: "Markets Covered", value: "120+", change: "+15" },
  ]

  const features = [
    {
      icon: Target,
      title: "Precision Execution",
      description: "Execute trades with millisecond precision across global markets.",
    },
    {
      icon: Wallet,
      title: "Portfolio Optimization",
      description: "AI-driven portfolio balancing for maximum returns.",
    },
    {
      icon: Globe,
      title: "Global Markets",
      description: "Access to forex, crypto, stocks, and commodities worldwide.",
    },
  ]

  const latestArticles = [
    {
      title: "The Future of Algorithmic Trading in 2025",
      excerpt: "How AI and machine learning are revolutionizing trading strategies.",
      image: "/images/tech-article-1.png",
      category: "Trading",
      slug: "future-algorithmic-trading",
    },
    {
      title: "Risk Management Strategies for Volatile Markets",
      excerpt: "Protect your portfolio with advanced risk assessment techniques.",
      image: "/images/tech-article-2.png",
      category: "Risk",
      slug: "risk-management-strategies",
    },
    {
      title: "Cryptocurrency Trading: A Complete Guide",
      excerpt: "Everything you need to know about trading digital assets.",
      image: "/images/tech-article-3.png",
      category: "Crypto",
      slug: "cryptocurrency-trading-guide",
    },
  ]

  return (
    <div className="min-h-screen text-foreground bg-background font-sans">
      {/* Static Background */}
      <StaticBackground />

      {/* Content Overlay */}
      <div className="relative z-10">
        {/* Header */}
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
                <Link href="/trading" className="text-muted-foreground hover:text-primary text-sm font-medium transition-colors">
                  Trading
                </Link>
                <Link href="/tech" className="text-muted-foreground hover:text-primary text-sm font-medium transition-colors">
                  Tech
                </Link>
                <Link href="/ai" className="text-muted-foreground hover:text-primary text-sm font-medium transition-colors">
                  AI
                </Link>
                <Link href="/projects" className="text-muted-foreground hover:text-primary text-sm font-medium transition-colors">
                  Projects
                </Link>
                <Link href="/about" className="text-muted-foreground hover:text-primary text-sm font-medium transition-colors">
                  About
                </Link>
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
                  {["Trading", "Tech", "AI", "Projects", "About"].map((item) => (
                    <Link
                      key={item}
                      href={`/${item.toLowerCase()}`}
                      className="text-foreground hover:text-primary text-sm font-medium py-2 px-4 hover:bg-muted rounded-md transition-colors"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      {item}
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

        {/* Main Content */}
        <main>
          {/* Hero Section */}
          <section className="py-20 md:py-32 relative overflow-hidden">
            {/* Animated Trading Background */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
              {/* Floating price tags */}
              <div className="absolute top-20 left-[10%] animate-float-slow opacity-40">
                <div className="bg-primary/30 backdrop-blur-sm rounded-lg px-4 py-2 border border-primary/40 shadow-lg shadow-primary/20">
                  <span className="text-primary font-mono text-sm font-bold">BTC $67,842</span>
                </div>
              </div>
              <div className="absolute top-40 right-[15%] animate-float-medium opacity-40">
                <div className="bg-primary/30 backdrop-blur-sm rounded-lg px-4 py-2 border border-primary/40 shadow-lg shadow-primary/20">
                  <span className="text-primary font-mono text-sm font-bold">ETH $3,456</span>
                </div>
              </div>
              <div className="absolute bottom-40 left-[20%] animate-float-fast opacity-35">
                <div className="bg-green-500/30 backdrop-blur-sm rounded-lg px-4 py-2 border border-green-500/40 shadow-lg shadow-green-500/20">
                  <span className="text-green-400 font-mono text-sm font-bold">+2.34%</span>
                </div>
              </div>
              <div className="absolute bottom-20 right-[25%] animate-float-slow opacity-35">
                <div className="bg-primary/30 backdrop-blur-sm rounded-lg px-4 py-2 border border-primary/40 shadow-lg shadow-primary/20">
                  <span className="text-primary font-mono text-sm font-bold">XAU $2,342</span>
                </div>
              </div>
              <div className="absolute top-1/3 left-[30%] animate-float-medium opacity-30">
                <div className="bg-red-500/30 backdrop-blur-sm rounded-lg px-4 py-2 border border-red-500/40 shadow-lg shadow-red-500/20">
                  <span className="text-red-400 font-mono text-sm font-bold">-0.45%</span>
                </div>
              </div>
              
              {/* Animated chart lines */}
              <svg className="absolute inset-0 w-full h-full opacity-20" preserveAspectRatio="none">
                <path
                  d="M0,200 Q100,150 200,180 T400,160 T600,200 T800,140 T1000,180 T1200,120 T1400,160"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="3"
                  className="text-primary animate-chart-line"
                />
                <path
                  d="M0,250 Q150,200 300,230 T600,210 T900,250 T1200,190 T1500,220"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  className="text-primary/70 animate-chart-line-delayed"
                />
              </svg>
              
              {/* Candlestick pattern */}
              <div className="absolute top-1/2 left-[5%] -translate-y-1/2 flex gap-2 opacity-20 animate-pulse-slow">
                {[40, 60, 35, 55, 70, 45, 65, 50].map((h, i) => (
                  <div key={i} className="flex flex-col items-center">
                    <div className={`w-3 ${i % 2 === 0 ? 'bg-green-500' : 'bg-red-500'} rounded-sm`} style={{ height: `${h}px` }} />
                    <div className="w-px h-3 bg-primary/50" />
                  </div>
                ))}
              </div>
              <div className="absolute top-1/2 right-[5%] -translate-y-1/2 flex gap-2 opacity-20 animate-pulse-slow">
                {[55, 45, 70, 40, 60, 50, 35, 65].map((h, i) => (
                  <div key={i} className="flex flex-col items-center">
                    <div className={`w-3 ${i % 2 === 0 ? 'bg-green-500' : 'bg-red-500'} rounded-sm`} style={{ height: `${h}px` }} />
                    <div className="w-px h-3 bg-primary/50" />
                  </div>
                ))}
              </div>
            </div>

            <div className="container mx-auto px-4 relative z-10">
              <div className="max-w-4xl mx-auto text-center">
                <Badge className="bg-primary/10 text-primary border-primary/20 mb-6">
                  Professional Trading Platform
                </Badge>
                <h1 className={`text-4xl md:text-6xl lg:text-7xl font-black tracking-tight leading-tight mb-6 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                  <span className="text-foreground">Trade Smarter with</span>
                  <br />
                  <span className="text-primary">AI-Powered Solutions</span>
                </h1>
                <p className={`text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                  Harness the power of algorithmic trading with our cutting-edge platform. 
                  Advanced analytics, risk management, and automated execution for professional traders.
                </p>
                <div className={`flex flex-col sm:flex-row gap-4 justify-center transition-all duration-1000 delay-400 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                  <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground gap-2">
                    Get Started <ArrowRight className="h-4 w-4" />
                  </Button>
                  <Button size="lg" variant="outline" className="border-border hover:bg-muted gap-2">
                    View Demo <ChevronRight className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </div>

            {/* Decorative Elements */}
            <div className="absolute top-1/2 left-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl -translate-y-1/2 -translate-x-1/2" />
            <div className="absolute top-1/2 right-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
          </section>

          {/* Market Overview Slider */}
          <section className="py-6 border-y border-border bg-card/80 backdrop-blur-sm overflow-hidden">
            <div className="container mx-auto px-4">
              <div className="flex items-center gap-4 mb-4">
                <h3 className="text-sm font-semibold text-foreground whitespace-nowrap">Market Overview</h3>
                <div className="flex gap-1">
                  {Array.from({ length: TOTAL_SLIDES }).map((_, i) => (
                    <button
                      key={i}
                      onClick={() => setCurrentSlide(i)}
                      className={`w-2 h-2 rounded-full transition-all ${currentSlide === i ? 'bg-primary w-4' : 'bg-muted-foreground/30'}`}
                    />
                  ))}
                </div>
              </div>
              
              <div className="relative overflow-hidden">
                <div 
                  className="flex transition-transform duration-700 ease-in-out"
                  style={{ transform: `translateX(-${currentSlide * 100}%)` }}
                >
                  {Array.from({ length: TOTAL_SLIDES }).map((_, slideIndex) => (
                    <div key={slideIndex} className="grid grid-cols-2 md:grid-cols-4 gap-4 min-w-full flex-shrink-0">
                      {marketPairs.slice(slideIndex * 4, (slideIndex + 1) * 4).map((item, index) => (
                        <div 
                          key={index} 
                          className="flex items-center justify-between p-4 rounded-xl bg-background/50 border border-border hover:border-primary/50 transition-all cursor-pointer group"
                        >
                          <div>
                            <div className="text-sm font-bold text-foreground group-hover:text-primary transition-colors">{item.pair}</div>
                            <div className="text-lg font-mono font-semibold text-foreground">${item.price}</div>
                          </div>
                          <div className={`flex items-center gap-1 ${item.isUp ? 'text-green-500' : 'text-red-500'}`}>
                            {item.isUp ? <TrendingUp className="h-4 w-4" /> : <TrendingDown className="h-4 w-4" />}
                            <span className="font-mono text-sm font-medium">{item.change}</span>
                          </div>
                        </div>
                      ))}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* Market Stats */}
          <section className="py-12 border-y border-border bg-card/50">
            <div className="container mx-auto px-4">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                {marketStats.map((stat, index) => (
                  <div key={index} className="text-center">
                    <div className="text-3xl md:text-4xl font-black text-foreground mb-1">{stat.value}</div>
                    <div className="text-sm text-muted-foreground mb-1">{stat.label}</div>
                    <div className="text-xs text-green-500 font-medium">{stat.change}</div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Trading Services */}
          <section className="py-20 md:py-28">
            <div className="container mx-auto px-4">
              <div className="text-center mb-16">
                <Badge className="bg-primary/10 text-primary border-primary/20 mb-4">Our Services</Badge>
                <h2 className="text-3xl md:text-5xl font-black tracking-tight mb-4">
                  Trading Services
                </h2>
                <p className="text-muted-foreground max-w-2xl mx-auto">
                  Comprehensive trading solutions designed for professional traders and institutions.
                </p>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {tradingServices.map((service, index) => (
                  <div
                    key={index}
                    className="group p-6 rounded-2xl bg-card border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/5"
                  >
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                      <service.icon className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="text-xl font-bold mb-2 text-foreground">{service.title}</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">{service.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Features Section */}
          <section className="py-20 md:py-28 bg-card/50">
            <div className="container mx-auto px-4">
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div>
                  <Badge className="bg-primary/10 text-primary border-primary/20 mb-4">Why Choose Us</Badge>
                  <h2 className="text-3xl md:text-5xl font-black tracking-tight mb-6">
                    Built for Professional Traders
                  </h2>
                  <p className="text-muted-foreground mb-8">
                    Our platform combines advanced technology with intuitive design to give you 
                    the edge in today&apos;s fast-moving markets.
                  </p>
                  <div className="space-y-6">
                    {features.map((feature, index) => (
                      <div key={index} className="flex gap-4">
                        <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                          <feature.icon className="h-5 w-5 text-primary" />
                        </div>
                        <div>
                          <h3 className="font-bold text-foreground mb-1">{feature.title}</h3>
                          <p className="text-sm text-muted-foreground">{feature.description}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="relative">
                  <div className="aspect-square rounded-2xl bg-gradient-to-br from-primary/20 via-primary/5 to-transparent p-8 border border-border">
                    <div className="w-full h-full rounded-xl bg-card border border-border flex items-center justify-center">
                      <div className="text-center">
                        <TrendingUp className="h-16 w-16 text-primary mx-auto mb-4" />
                        <div className="text-4xl font-black text-foreground mb-2">94.7%</div>
                        <div className="text-muted-foreground">Success Rate</div>
                      </div>
                    </div>
                  </div>
                  <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-primary/10 rounded-full blur-2xl" />
                </div>
              </div>
            </div>
          </section>

          {/* CTA Section */}
          <section className="py-20 md:py-28">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto text-center p-12 rounded-3xl bg-gradient-to-br from-primary/10 via-card to-card border border-border">
                <h2 className="text-3xl md:text-4xl font-black tracking-tight mb-4">
                  Ready to Start Trading?
                </h2>
                <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
                  Join thousands of professional traders who trust AGStellar for their trading needs.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground gap-2">
                    Create Account <ArrowRight className="h-4 w-4" />
                  </Button>
                  <Button size="lg" variant="outline" className="border-border hover:bg-muted">
                    Contact Sales
                  </Button>
                </div>
              </div>
            </div>
          </section>

          {/* Latest Articles */}
          <section className="py-20 md:py-28 bg-card/50">
            <div className="container mx-auto px-4">
              <div className="flex items-center justify-between mb-12">
                <div>
                  <Badge className="bg-primary/10 text-primary border-primary/20 mb-4">Insights</Badge>
                  <h2 className="text-3xl md:text-4xl font-black tracking-tight">Latest Articles</h2>
                </div>
                <Link href="/blog" className="hidden md:flex items-center gap-2 text-primary hover:underline">
                  View All <ArrowRight className="h-4 w-4" />
                </Link>
              </div>

              <div className="grid md:grid-cols-3 gap-8">
                {latestArticles.map((article, index) => (
                  <Link key={index} href={`/articles/${article.slug}`} className="group">
                    <div className="relative aspect-video mb-4 overflow-hidden rounded-xl bg-muted">
                      <Image
                        src={article.image || "/placeholder.svg"}
                        alt={article.title}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                    <Badge className="bg-muted text-muted-foreground text-xs mb-2">{article.category}</Badge>
                    <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">{article.title}</h3>
                    <p className="text-muted-foreground text-sm">{article.excerpt}</p>
                  </Link>
                ))}
              </div>

              <div className="mt-8 text-center md:hidden">
                <Link href="/blog" className="inline-flex items-center gap-2 text-primary hover:underline">
                  View All Articles <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>
          </section>
        </main>

        {/* Footer */}
        <footer className="bg-background py-16 border-t border-border">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-4 gap-8 mb-12">
              <div>
                <Link href="/" className="text-2xl font-black tracking-tighter mb-4 inline-block">
                  <span className="text-foreground">AG</span>
                  <span className="text-primary">STELLAR</span>
                </Link>
                <p className="text-muted-foreground mb-4">
                  Professional trading solutions powered by advanced AI and cutting-edge technology.
                </p>
                <div className="flex gap-3">
                  <Button variant="ghost" size="icon" className="text-muted-foreground hover:text-foreground hover:bg-muted">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path></svg>
                  </Button>
                  <Button variant="ghost" size="icon" className="text-muted-foreground hover:text-foreground hover:bg-muted">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line></svg>
                  </Button>
                  <Button variant="ghost" size="icon" className="text-muted-foreground hover:text-foreground hover:bg-muted">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect width="4" height="12" x="2" y="9"></rect><circle cx="4" cy="4" r="2"></circle></svg>
                  </Button>
                </div>
              </div>

              <div>
                <h4 className="font-bold mb-4 text-foreground">Trading</h4>
                <ul className="space-y-2 text-muted-foreground">
                  <li><Link href="/trading" className="hover:text-primary transition-colors">Algorithmic Trading</Link></li>
                  <li><Link href="/trading" className="hover:text-primary transition-colors">Market Analysis</Link></li>
                  <li><Link href="/trading" className="hover:text-primary transition-colors">Risk Management</Link></li>
                  <li><Link href="/trading" className="hover:text-primary transition-colors">Portfolio Tools</Link></li>
                </ul>
              </div>

              <div>
                <h4 className="font-bold mb-4 text-foreground">Company</h4>
                <ul className="space-y-2 text-muted-foreground">
                  <li><Link href="/about" className="hover:text-primary transition-colors">About</Link></li>
                  <li><Link href="/projects" className="hover:text-primary transition-colors">Projects</Link></li>
                  <li><Link href="/blog" className="hover:text-primary transition-colors">Blog</Link></li>
                  <li><Link href="/contact" className="hover:text-primary transition-colors">Contact</Link></li>
                </ul>
              </div>

              <div>
                <h4 className="font-bold mb-4 text-foreground">Legal</h4>
                <ul className="space-y-2 text-muted-foreground">
                  <li><Link href="#" className="hover:text-primary transition-colors">Privacy Policy</Link></li>
                  <li><Link href="#" className="hover:text-primary transition-colors">Terms of Service</Link></li>
                  <li><Link href="#" className="hover:text-primary transition-colors">Risk Disclosure</Link></li>
                </ul>
              </div>
            </div>

            <div className="border-t border-border pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
              <p className="text-muted-foreground text-sm">
                &copy; 2025 AGStellar. All rights reserved.
              </p>
              <p className="text-muted-foreground text-xs">
                Trading involves risk. Past performance is not indicative of future results.
              </p>
            </div>
          </div>
        </footer>
      </div>
    </div>
  )
}
