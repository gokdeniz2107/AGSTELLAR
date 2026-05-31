"use client"

import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Mail, Phone, MapPin, Github, Linkedin, Send } from "lucide-react"
import { useEffect, useState } from "react"
import StaticBackground from "@/components/static-background"
import Header from "@/components/header"
import Footer from "@/components/footer"

export default function ContactPage() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const contactInfo = [
    { icon: Mail, label: "Email", value: "agstellarai@gmail.com" },
    { icon: Phone, label: "Phone", value: "+90 537 426 49 49" },
    { icon: MapPin, label: "Location", value: "Antalya, Turkey" },
  ]

  return (
    <div className="min-h-screen text-foreground bg-background font-sans">
      <StaticBackground />

      <div className="relative z-10">
        <Header />

        <main className="py-12 md:py-20">
          <div className="container mx-auto px-4">
            <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              <Badge className="bg-primary/10 text-primary border-primary/20 mb-4">Contact</Badge>
              <h1 className="text-4xl md:text-6xl font-black tracking-tight mb-4">Get In Touch</h1>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                Let&apos;s build tomorrow&apos;s projects together
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              {/* Contact Info Card */}
              <div className="p-8 rounded-2xl bg-card border border-border">
                <h3 className="text-2xl font-bold mb-8 text-foreground">Contact Information</h3>

                <div className="space-y-6">
                  {contactInfo.map((contact, index) => (
                    <div key={index} className="flex items-center gap-4 p-4 rounded-xl bg-muted/50">
                      <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center">
                        <contact.icon className="w-5 h-5 text-primary" />
                      </div>
                      <div>
                        <p className="text-muted-foreground text-sm">{contact.label}</p>
                        <p className="text-foreground font-medium">{contact.value}</p>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-10">
                  <h4 className="text-lg font-bold mb-4 text-foreground">Social Media</h4>
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

              {/* Contact Form Card */}
              <div className="p-8 rounded-2xl bg-card border border-border">
                <h3 className="text-2xl font-bold mb-8 text-foreground">Project Proposal</h3>
                <form className="space-y-6">
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">Full Name</label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 bg-background border border-border rounded-xl text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                      placeholder="Your name and surname"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">Email</label>
                    <input
                      type="email"
                      className="w-full px-4 py-3 bg-background border border-border rounded-xl text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                      placeholder="Your email address"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">Project Details</label>
                    <textarea
                      rows={4}
                      className="w-full px-4 py-3 bg-background border border-border rounded-xl text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent resize-none"
                      placeholder="Share details about your project..."
                    ></textarea>
                  </div>

                  <Button
                    type="submit"
                    className="w-full bg-primary hover:bg-primary/90 text-primary-foreground gap-2"
                    size="lg"
                  >
                    Send Proposal <Send className="h-4 w-4" />
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </main>

        <Footer />
      </div>
    </div>
  )
}
