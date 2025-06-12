"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowLeft, Mail, MapPin, Github, Linkedin, Code, Brain, TrendingUp, Menu } from "lucide-react"
import Link from "next/link"
import StaticBackground from "@/components/static-background"
import LanguageSwitcher from "@/components/language-switcher"

export default function AboutPage() {
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
                <Link href="/about" className="text-cyan-400 hover:text-cyan-300 text-sm font-medium">
                  About
                </Link>
              </nav>

              {/* Search, Language Switcher and Menu */}
              <div className="flex items-center space-x-4">
                <LanguageSwitcher />
                <Button variant="ghost" size="icon" className="text-white hover:bg-zinc-800">
                  <Menu className="h-5 w-5" />
                </Button>
              </div>
            </div>
          </div>
        </header>

        {/* About Content */}
        <section className="py-24">
          <div className="container mx-auto px-4">
            <Button variant="ghost" className="mb-8 text-white hover:text-zinc-300" asChild>
              <Link href="/">
                <ArrowLeft className="mr-2 h-4 w-4" /> Back to Home
              </Link>
            </Button>

            <div className="grid md:grid-cols-12 gap-12">
              {/* Founder Profile */}
              <div className="md:col-span-4">
                <div className="sticky top-32">
                  <h2 className="text-2xl font-bold mb-2">Gökdeniz Karadeniz</h2>
                  <p className="text-cyan-400 mb-6">Founder & CEO</p>

                  <div className="space-y-4 mb-8">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-lg bg-zinc-800 flex items-center justify-center">
                        <Mail className="w-5 h-5 text-cyan-400" />
                      </div>
                      <div>
                        <p className="text-sm text-zinc-400">Email</p>
                        <p className="text-white">agstellarai@gmail.com</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-lg bg-zinc-800 flex items-center justify-center">
                        <MapPin className="w-5 h-5 text-cyan-400" />
                      </div>
                      <div>
                        <p className="text-sm text-zinc-400">Location</p>
                        <p className="text-white">Antalya, Turkey</p>
                      </div>
                    </div>
                  </div>

                  <div className="flex gap-3">
                    <Button variant="outline" size="icon" className="rounded-lg border-zinc-700 hover:bg-zinc-800">
                      <Github className="w-5 h-5" />
                    </Button>
                    <Button variant="outline" size="icon" className="rounded-lg border-zinc-700 hover:bg-zinc-800">
                      <Linkedin className="w-5 h-5" />
                    </Button>
                  </div>
                </div>
              </div>

              {/* About Content */}
              <div className="md:col-span-8">
                <h1 className="text-4xl md:text-5xl font-bold mb-8">About Me</h1>

                <div className="prose prose-lg prose-invert max-w-none">
                  <p className="text-xl leading-relaxed mb-6">
                    Hi there, I'm Gökdeniz, the founder of AgStellar — a forward-thinking software company specialized
                    in artificial intelligence, application development, and financial technologies.
                  </p>

                  <p className="text-lg text-zinc-300 leading-relaxed mb-6">
                    Driven by a passion for building technology that shapes the future, I combine deep technical
                    expertise with a strategic entrepreneurial mindset. At AgStellar, we don't just write code — we
                    architect intelligent, scalable, and impactful solutions for real-world challenges.
                  </p>

                  <p className="text-lg text-zinc-300 leading-relaxed mb-6">
                    My focus is on creating products that merge advanced AI capabilities with seamless digital
                    experiences. From algorithmic trading systems to AI-powered platforms and enterprise-grade
                    applications, I lead the development of technologies that are both innovative and commercially
                    viable.
                  </p>

                  <p className="text-lg text-zinc-300 leading-relaxed mb-12">
                    As a founder, I work at the intersection of technology, business, and innovation — building systems
                    that are engineered not just to function, but to lead.
                  </p>
                </div>

                {/* Expertise Areas */}
                <h2 className="text-2xl font-bold mb-6">Areas of Expertise</h2>
                <div className="grid md:grid-cols-3 gap-6 mb-12">
                  <Card className="bg-zinc-900 border-zinc-800">
                    <CardContent className="p-6">
                      <div className="w-12 h-12 rounded-lg bg-blue-900/30 flex items-center justify-center mb-4">
                        <Brain className="w-6 h-6 text-blue-400" />
                      </div>
                      <h3 className="text-lg font-bold mb-2 text-white">Artificial Intelligence</h3>
                      <p className="text-zinc-400">
                        Machine learning systems, predictive analytics, and AI integration
                      </p>
                    </CardContent>
                  </Card>

                  <Card className="bg-zinc-900 border-zinc-800">
                    <CardContent className="p-6">
                      <div className="w-12 h-12 rounded-lg bg-cyan-900/30 flex items-center justify-center mb-4">
                        <Code className="w-6 h-6 text-cyan-400" />
                      </div>
                      <h3 className="text-lg font-bold mb-2 text-white">Software Development</h3>
                      <p className="text-zinc-400">
                        Full-stack applications, mobile development, and enterprise solutions
                      </p>
                    </CardContent>
                  </Card>

                  <Card className="bg-zinc-900 border-zinc-800">
                    <CardContent className="p-6">
                      <div className="w-12 h-12 rounded-lg bg-green-900/30 flex items-center justify-center mb-4">
                        <TrendingUp className="w-6 h-6 text-green-400" />
                      </div>
                      <h3 className="text-lg font-bold mb-2 text-white">Financial Technology</h3>
                      <p className="text-zinc-400">
                        Algorithmic trading systems, financial analysis tools, and market data processing
                      </p>
                    </CardContent>
                  </Card>
                </div>

                {/* CTA */}
                <Card className="bg-gradient-to-br from-zinc-900 to-zinc-800 border-zinc-700">
                  <CardContent className="p-8">
                    <h3 className="text-2xl font-bold mb-4">Ready to work together?</h3>
                    <p className="text-zinc-300 mb-6">
                      Let's discuss how AgStellar can help bring your ideas to life with cutting-edge technology
                      solutions.
                    </p>
                    <Button className="bg-cyan-500 hover:bg-cyan-600 text-white">
                      <Link href="/contact">Get in Touch</Link>
                    </Button>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

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
              <p className="text-zinc-500 text-sm">&copy; 2025 AGStellar. All rights reserved.</p>
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
