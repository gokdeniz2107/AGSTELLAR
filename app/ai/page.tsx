"use client"

import { Badge } from "@/components/ui/badge"
import { useEffect, useState } from "react"
import StaticBackground from "@/components/static-background"
import Header from "@/components/header"
import Footer from "@/components/footer"
import { Brain, Sparkles, Cpu, Network } from "lucide-react"

export default function AIPage() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const aiCapabilities = [
    {
      icon: Brain,
      title: "Machine Learning",
      description: "Advanced ML models for predictive analytics and pattern recognition.",
    },
    {
      icon: Sparkles,
      title: "Natural Language Processing",
      description: "Intelligent text analysis and conversational AI interfaces.",
    },
    {
      icon: Cpu,
      title: "Computer Vision",
      description: "Image and video analysis for automated visual understanding.",
    },
    {
      icon: Network,
      title: "Neural Networks",
      description: "Deep learning architectures for complex problem solving.",
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
              <Badge className="bg-primary/10 text-primary border-primary/20 mb-4">Artificial Intelligence</Badge>
              <h1 className="text-4xl md:text-6xl font-black tracking-tight mb-6">Intelligence. Reimagined.</h1>
              <div className="max-w-3xl mx-auto">
                <p className="text-muted-foreground text-lg leading-relaxed mb-4">
                  At AgStellar, artificial intelligence is not a feature — it&apos;s a foundation.
                </p>
                <p className="text-muted-foreground text-lg leading-relaxed mb-4">
                  We design and develop intelligent systems that can learn, adapt, and reason. From deep learning models
                  and natural language interfaces to computer vision and predictive analytics, our AI technologies are
                  built to solve complex problems at scale.
                </p>
                <p className="text-muted-foreground text-lg leading-relaxed mb-4">
                  Our mission is to harness the power of AI to unlock new efficiencies, elevate user experiences, and
                  drive competitive advantage for businesses across industries.
                </p>
                <p className="text-muted-foreground/70 text-lg">
                  This is where innovation meets intelligence.
                </p>
              </div>
            </div>

            {/* AI Capabilities Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
              {aiCapabilities.map((capability, index) => (
                <div
                  key={index}
                  className="group p-6 rounded-2xl bg-card border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/5"
                >
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                    <capability.icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold mb-2 text-foreground">{capability.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{capability.description}</p>
                </div>
              ))}
            </div>

            {/* Stats Section */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 p-8 rounded-2xl bg-card/50 border border-border">
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-black text-primary mb-1">50+</div>
                <div className="text-sm text-muted-foreground">AI Models Deployed</div>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-black text-primary mb-1">99.2%</div>
                <div className="text-sm text-muted-foreground">Accuracy Rate</div>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-black text-primary mb-1">1M+</div>
                <div className="text-sm text-muted-foreground">Predictions Daily</div>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-black text-primary mb-1">24/7</div>
                <div className="text-sm text-muted-foreground">System Uptime</div>
              </div>
            </div>
          </div>
        </main>

        <Footer />
      </div>
    </div>
  )
}
