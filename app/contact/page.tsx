"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowLeft, Mail, Phone, MapPin, Github, Linkedin, Menu, Search } from "lucide-react"
import Link from "next/link"
import StaticBackground from "@/components/static-background"

export default function ContactPage() {
  return (
    <div className="min-h-screen text-white bg-black" style={{ fontFamily: "'Inter', system-ui, sans-serif" }}>
      {/* Static Background */}
      <StaticBackground />

      {/* Content Overlay */}
      <div className="relative z-10">
        {/* Top Bar */}
        <div className="bg-black border-b border-zinc-800">
          <div className="container mx-auto px-4 flex justify-end py-2">
            <Button variant="ghost" size="sm" className="text-white text-xs hover:bg-zinc-800">
              SUBSCRIBE
            </Button>
            <Button variant="ghost" size="sm" className="text-white text-xs hover:bg-zinc-800">
              SIGN IN
            </Button>
          </div>
        </div>

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
                <Link href="/about" className="text-white hover:text-zinc-300 text-sm font-medium">
                  About
                </Link>
                <Link href="/contact" className="text-cyan-400 hover:text-cyan-300 text-sm font-medium">
                  Contact
                </Link>
              </nav>

              {/* Search and Menu */}
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

        {/* Contact Content */}
        <section className="py-24">
          <div className="container mx-auto px-6">
            <Button variant="ghost" className="mb-8 text-white hover:text-zinc-300" asChild>
              <Link href="/">
                <ArrowLeft className="mr-2 h-4 w-4" /> Back to Home
              </Link>
            </Button>

            <div className="text-center mb-20">
              <h2 className="text-5xl md:text-6xl font-bold mb-6">
                <span className="text-white">Contact</span>
              </h2>
              <p className="text-zinc-400 max-w-3xl mx-auto text-lg">Let's build tomorrow's projects together</p>
            </div>

            <div className="grid md:grid-cols-2 gap-16">
              <Card className="bg-zinc-900 border-zinc-800 shadow-sm">
                <CardContent className="p-10">
                  <h3 className="text-2xl font-bold mb-8 text-white">Get In Touch With Me</h3>

                  <div className="space-y-8">
                    {[
                      { icon: Mail, label: "Email", value: "info@agstellar.com" },
                      { icon: Phone, label: "Phone", value: "+90 537 426 49 49" },
                      { icon: MapPin, label: "Location", value: "Antalya, Turkey" },
                    ].map((contact, index) => (
                      <div key={index} className="flex items-center gap-6">
                        <div className="w-14 h-14 bg-zinc-800 rounded-2xl flex items-center justify-center border border-zinc-700">
                          <contact.icon className="w-6 h-6 text-cyan-400" />
                        </div>
                        <div>
                          <p className="text-zinc-400 text-sm">{contact.label}</p>
                          <p className="text-white font-medium">{contact.value}</p>
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="mt-10">
                    <h4 className="text-lg font-bold mb-6 text-white">Social Media</h4>
                    <div className="flex gap-4">
                      <Button size="sm" className="bg-zinc-800 border border-zinc-700 hover:bg-zinc-700 text-zinc-300">
                        <Github className="w-4 h-4" />
                      </Button>
                      <Button size="sm" className="bg-zinc-800 border border-zinc-700 hover:bg-zinc-700 text-zinc-300">
                        <Linkedin className="w-4 h-4" />
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-zinc-900 border-zinc-800 shadow-sm">
                <CardContent className="p-10">
                  <h3 className="text-2xl font-bold mb-8 text-white">Project Proposal</h3>
                  <form className="space-y-8">
                    <div>
                      <label className="block text-sm font-medium text-white mb-3">Full Name</label>
                      <input
                        type="text"
                        className="w-full px-6 py-4 bg-zinc-800 border border-zinc-700 rounded-xl text-white placeholder-zinc-400 focus:outline-none focus:border-cyan-400"
                        placeholder="Your name and surname"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-white mb-3">Email</label>
                      <input
                        type="email"
                        className="w-full px-6 py-4 bg-zinc-800 border border-zinc-700 rounded-xl text-white placeholder-zinc-400 focus:outline-none focus:border-cyan-400"
                        placeholder="Your email address"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-white mb-3">Project Details</label>
                      <textarea
                        rows={4}
                        className="w-full px-6 py-4 bg-zinc-800 border border-zinc-700 rounded-xl text-white placeholder-zinc-400 focus:outline-none focus:border-cyan-400 resize-none"
                        placeholder="Share details about your project..."
                      ></textarea>
                    </div>

                    <Button
                      type="submit"
                      className="w-full bg-cyan-500 hover:bg-cyan-600 text-white transform hover:scale-105 transition-all duration-300"
                      size="lg"
                    >
                      Send Proposal
                    </Button>
                  </form>
                </CardContent>
              </Card>
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
