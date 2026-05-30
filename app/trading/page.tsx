"use client"

import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Menu, TrendingUp, TrendingDown, BarChart3, Shield, Zap, ArrowRight, LineChart, Wallet, Target, Globe, Clock, Users, DollarSign, Activity } from "lucide-react"
import Link from "next/link"
import { useState } from "react"
import StaticBackground from "@/components/static-background"

export default function TradingPage() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const tradingPackages = [
    {
      name: "Starter",
      price: "$99",
      period: "/month",
      description: "Perfect for beginners exploring algorithmic trading",
      features: [
        "Basic market analysis tools",
        "5 automated trading strategies",
        "Email support",
        "Daily market reports",
        "Risk management basics"
      ],
      popular: false,
    },
    {
      name: "Professional",
      price: "$299",
      period: "/month",
      description: "For serious traders seeking advanced capabilities",
      features: [
        "Advanced analytics dashboard",
        "25 automated strategies",
        "Priority support 24/7",
        "Real-time market alerts",
        "Portfolio optimization AI",
        "Custom strategy builder"
      ],
      popular: true,
    },
    {
      name: "Enterprise",
      price: "Custom",
      period: "",
      description: "Tailored solutions for institutions and hedge funds",
      features: [
        "Unlimited strategies",
        "Dedicated account manager",
        "API access & integrations",
        "White-label solutions",
        "Advanced risk controls",
        "Custom development"
      ],
      popular: false,
    },
  ]

  const tradingFeatures = [
    {
      icon: LineChart,
      title: "Advanced Charting",
      description: "Professional-grade charts with 100+ technical indicators and drawing tools for in-depth market analysis."
    },
    {
      icon: Zap,
      title: "Lightning Execution",
      description: "Ultra-low latency order execution with direct market access to major exchanges worldwide."
    },
    {
      icon: Shield,
      title: "Risk Management",
      description: "Sophisticated risk controls including stop-loss, take-profit, and position sizing algorithms."
    },
    {
      icon: Target,
      title: "Smart Alerts",
      description: "Customizable alerts based on price, volume, technical indicators, and market conditions."
    },
    {
      icon: Globe,
      title: "Global Markets",
      description: "Trade forex, stocks, cryptocurrencies, commodities, and indices across global exchanges."
    },
    {
      icon: Wallet,
      title: "Portfolio Analytics",
      description: "Real-time portfolio tracking with performance metrics, P&L analysis, and rebalancing suggestions."
    },
  ]

  const liveStats = [
    { icon: Activity, label: "Live Trades", value: "2,847", change: "+124 today" },
    { icon: Users, label: "Active Traders", value: "12.5K", change: "+8.3%" },
    { icon: DollarSign, label: "24h Volume", value: "$847M", change: "+15.2%" },
    { icon: Clock, label: "Avg. Execution", value: "0.3ms", change: "99.9% uptime" },
  ]

  const marketOverview = [
    { symbol: "BTC/USD", price: "$67,842.50", change: "+2.34%", trending: "up" },
    { symbol: "ETH/USD", price: "$3,421.18", change: "+1.87%", trending: "up" },
    { symbol: "EUR/USD", price: "1.0847", change: "-0.12%", trending: "down" },
    { symbol: "AAPL", price: "$189.42", change: "+0.95%", trending: "up" },
    { symbol: "GOLD", price: "$2,341.80", change: "+0.45%", trending: "up" },
  ]

  return (
    <div className="min-h-screen text-foreground bg-background font-sans">
      <StaticBackground />

      <div className="relative z-10">
        {/* Header */}
        <header className="bg-background/80 backdrop-blur-md sticky top-0 z-50 border-b border-border">
          <div className="container mx-auto px-4 py-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <Link href="/" className="text-3xl font-black tracking-tighter">
                  <span className="text-foreground">AG</span>
                  <span className="text-primary">STELLAR</span>
                </Link>
              </div>

              <nav className="hidden md:flex items-center gap-8">
                <Link href="/trading" className="text-primary text-sm font-medium">Trading</Link>
                <Link href="/tech" className="text-muted-foreground hover:text-primary text-sm font-medium transition-colors">Tech</Link>
                <Link href="/ai" className="text-muted-foreground hover:text-primary text-sm font-medium transition-colors">AI</Link>
                <Link href="/projects" className="text-muted-foreground hover:text-primary text-sm font-medium transition-colors">Projects</Link>
                <Link href="/about" className="text-muted-foreground hover:text-primary text-sm font-medium transition-colors">About</Link>
              </nav>

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
                </nav>
              </div>
            )}
          </div>
        </header>

        <main>
          {/* Hero */}
          <section className="py-20 md:py-28">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto text-center">
                <Badge className="bg-primary/10 text-primary border-primary/20 mb-6">Trading Services</Badge>
                <h1 className="text-4xl md:text-6xl font-black tracking-tight leading-tight mb-6">
                  Professional Trading
                  <br />
                  <span className="text-primary">Solutions</span>
                </h1>
                <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
                  Access global markets with our advanced trading platform. 
                  Algorithmic strategies, real-time analytics, and institutional-grade execution.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground gap-2">
                    Open Account <ArrowRight className="h-4 w-4" />
                  </Button>
                  <Button size="lg" variant="outline" className="border-border hover:bg-muted">
                    View Demo
                  </Button>
                </div>
              </div>
            </div>
          </section>

          {/* Live Stats */}
          <section className="py-8 border-y border-border bg-card/50">
            <div className="container mx-auto px-4">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                {liveStats.map((stat, index) => (
                  <div key={index} className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                      <stat.icon className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-foreground">{stat.value}</div>
                      <div className="text-xs text-muted-foreground">{stat.label}</div>
                      <div className="text-xs text-green-500">{stat.change}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Market Overview */}
          <section className="py-12">
            <div className="container mx-auto px-4">
              <h2 className="text-xl font-bold mb-6">Market Overview</h2>
              <div className="overflow-x-auto">
                <div className="flex gap-4 min-w-max pb-4">
                  {marketOverview.map((market, index) => (
                    <div key={index} className="p-4 rounded-xl bg-card border border-border min-w-[180px]">
                      <div className="text-sm text-muted-foreground mb-1">{market.symbol}</div>
                      <div className="text-xl font-bold text-foreground mb-1">{market.price}</div>
                      <div className={`flex items-center gap-1 text-sm ${market.trending === 'up' ? 'text-green-500' : 'text-red-500'}`}>
                        {market.trending === 'up' ? <TrendingUp className="h-4 w-4" /> : <TrendingDown className="h-4 w-4" />}
                        {market.change}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* Features */}
          <section className="py-20 md:py-28 bg-card/50">
            <div className="container mx-auto px-4">
              <div className="text-center mb-16">
                <Badge className="bg-primary/10 text-primary border-primary/20 mb-4">Platform Features</Badge>
                <h2 className="text-3xl md:text-4xl font-black tracking-tight mb-4">
                  Everything You Need to Trade
                </h2>
                <p className="text-muted-foreground max-w-2xl mx-auto">
                  Our platform provides all the tools and features professional traders need.
                </p>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {tradingFeatures.map((feature, index) => (
                  <div key={index} className="p-6 rounded-2xl bg-card border border-border hover:border-primary/50 transition-all">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                      <feature.icon className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="text-xl font-bold mb-2 text-foreground">{feature.title}</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">{feature.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Pricing */}
          <section className="py-20 md:py-28">
            <div className="container mx-auto px-4">
              <div className="text-center mb-16">
                <Badge className="bg-primary/10 text-primary border-primary/20 mb-4">Pricing</Badge>
                <h2 className="text-3xl md:text-4xl font-black tracking-tight mb-4">
                  Choose Your Trading Plan
                </h2>
                <p className="text-muted-foreground max-w-2xl mx-auto">
                  Select the plan that best fits your trading needs and goals.
                </p>
              </div>

              <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
                {tradingPackages.map((pkg, index) => (
                  <div 
                    key={index} 
                    className={`p-8 rounded-2xl border ${pkg.popular ? 'bg-primary/5 border-primary' : 'bg-card border-border'} relative`}
                  >
                    {pkg.popular && (
                      <Badge className="absolute -top-3 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground">
                        Most Popular
                      </Badge>
                    )}
                    <div className="text-center mb-6">
                      <h3 className="text-xl font-bold text-foreground mb-2">{pkg.name}</h3>
                      <div className="flex items-baseline justify-center gap-1">
                        <span className="text-4xl font-black text-foreground">{pkg.price}</span>
                        <span className="text-muted-foreground">{pkg.period}</span>
                      </div>
                      <p className="text-sm text-muted-foreground mt-2">{pkg.description}</p>
                    </div>
                    <ul className="space-y-3 mb-8">
                      {pkg.features.map((feature, i) => (
                        <li key={i} className="flex items-center gap-3 text-sm">
                          <div className="w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                            <svg className="w-3 h-3 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                            </svg>
                          </div>
                          <span className="text-muted-foreground">{feature}</span>
                        </li>
                      ))}
                    </ul>
                    <Button 
                      className={`w-full ${pkg.popular ? 'bg-primary hover:bg-primary/90 text-primary-foreground' : 'bg-muted hover:bg-muted/80 text-foreground'}`}
                    >
                      {pkg.price === "Custom" ? "Contact Sales" : "Get Started"}
                    </Button>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* CTA */}
          <section className="py-20 md:py-28 bg-card/50">
            <div className="container mx-auto px-4">
              <div className="max-w-3xl mx-auto text-center">
                <h2 className="text-3xl md:text-4xl font-black tracking-tight mb-4">
                  Ready to Start Trading?
                </h2>
                <p className="text-muted-foreground mb-8">
                  Join thousands of traders who trust AGStellar for their trading needs. 
                  Open your account today and get started in minutes.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground gap-2">
                    Create Free Account <ArrowRight className="h-4 w-4" />
                  </Button>
                  <Button size="lg" variant="outline" className="border-border hover:bg-muted">
                    Schedule Demo
                  </Button>
                </div>
              </div>
            </div>
          </section>
        </main>

        {/* Footer */}
        <footer className="bg-background py-12 border-t border-border">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <Link href="/" className="text-xl font-black tracking-tighter">
                <span className="text-foreground">AG</span>
                <span className="text-primary">STELLAR</span>
              </Link>
              <p className="text-muted-foreground text-sm">
                &copy; 2025 AGStellar. Trading involves risk.
              </p>
            </div>
          </div>
        </footer>
      </div>
    </div>
  )
}
