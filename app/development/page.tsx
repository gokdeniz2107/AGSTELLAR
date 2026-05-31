"use client"

import { Badge } from "@/components/ui/badge"
import { useEffect, useState } from "react"
import StaticBackground from "@/components/static-background"
import Header from "@/components/header"
import Footer from "@/components/footer"
import { Code, Server, Smartphone, Database, Cloud, Layers } from "lucide-react"

export default function DevelopmentPage() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const services = [
    {
      icon: Code,
      title: "Full-Stack Development",
      description: "End-to-end web applications using modern frameworks and best practices.",
    },
    {
      icon: Smartphone,
      title: "Mobile Development",
      description: "Native and cross-platform mobile apps for iOS and Android.",
    },
    {
      icon: Server,
      title: "API Development",
      description: "Scalable RESTful and GraphQL APIs with robust architecture.",
    },
    {
      icon: Database,
      title: "Database Design",
      description: "Optimized database schemas and efficient data management solutions.",
    },
    {
      icon: Cloud,
      title: "Cloud Solutions",
      description: "Cloud-native applications with AWS, Azure, and Google Cloud.",
    },
    {
      icon: Layers,
      title: "Enterprise Systems",
      description: "Custom enterprise software tailored to your business needs.",
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
              <Badge className="bg-primary/10 text-primary border-primary/20 mb-4">Development</Badge>
              <h1 className="text-4xl md:text-6xl font-black tracking-tight mb-6">Code with Purpose.</h1>
              <h2 className="text-2xl md:text-3xl font-bold text-primary mb-6">Build with Vision.</h2>
              <div className="max-w-3xl mx-auto">
                <p className="text-muted-foreground text-lg leading-relaxed mb-4">
                  At AgStellar, software development is not just about writing code — it&apos;s about engineering real-world
                  solutions through precision, innovation, and scalability.
                </p>
                <p className="text-muted-foreground text-lg leading-relaxed mb-4">
                  We take a project-driven approach to development, aligning modern frameworks, cloud-native
                  technologies, and performance-first architectures with clear business goals.
                </p>
                <p className="text-muted-foreground/70 text-lg">
                  Our development philosophy is simple: Build what matters. Ship what lasts.
                </p>
              </div>
            </div>

            {/* Services Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
              {services.map((service, index) => (
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

            {/* Stats Section */}
            <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8 p-8 rounded-2xl bg-card/50 border border-border max-w-4xl mx-auto">
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-black text-primary mb-1">100+</div>
                <div className="text-sm text-muted-foreground">Projects Delivered</div>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-black text-primary mb-1">50+</div>
                <div className="text-sm text-muted-foreground">Happy Clients</div>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-black text-primary mb-1">5+</div>
                <div className="text-sm text-muted-foreground">Years Experience</div>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-black text-primary mb-1">99%</div>
                <div className="text-sm text-muted-foreground">Client Satisfaction</div>
              </div>
            </div>
          </div>
        </main>

        <Footer />
      </div>
    </div>
  )
}
