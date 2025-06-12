"use client"

import { useState } from "react"

export default function Home() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  return (
    <div className="bg-black text-white min-h-screen font-sans">
      <header className="py-6 px-4 md:px-12 lg:px-24 flex items-center justify-between">
        <div className="text-2xl font-bold">Your Logo</div>
        <nav className="hidden md:flex space-x-6">
          <a href="#" className="hover:text-gray-300">
            Home
          </a>
          <a href="#" className="hover:text-gray-300">
            About
          </a>
          <a href="#" className="hover:text-gray-300">
            Services
          </a>
          <a href="#" className="hover:text-gray-300">
            Contact
          </a>
        </nav>
        <button className="md:hidden text-3xl" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
          ☰
        </button>
      </header>

      <div
        className={`md:hidden ${isMobileMenuOpen ? "block" : "hidden"} absolute top-full left-0 right-0 bg-black/95 backdrop-blur-sm border-t border-zinc-800`}
      >
        <nav className="flex flex-col py-4 px-6">
          <a href="#" className="py-2 hover:text-gray-300" onClick={() => setIsMobileMenuOpen(false)}>
            Home
          </a>
          <a href="#" className="py-2 hover:text-gray-300" onClick={() => setIsMobileMenuOpen(false)}>
            About
          </a>
          <a href="#" className="py-2 hover:text-gray-300" onClick={() => setIsMobileMenuOpen(false)}>
            Services
          </a>
          <a href="#" className="py-2 hover:text-gray-300" onClick={() => setIsMobileMenuOpen(false)}>
            Contact
          </a>
        </nav>
      </div>

      <main className="py-12 px-4 md:px-12 lg:px-24">
        <section className="mb-12">
          <h1 className="text-4xl font-bold mb-4">Welcome!</h1>
          <p className="text-lg">This is a basic Next.js template with a responsive navigation.</p>
        </section>

        <section>
          <h2 className="text-3xl font-bold mb-4">Some Content</h2>
          <p className="text-lg">Add your content here.</p>
        </section>
      </main>

      <footer className="py-6 px-4 md:px-12 lg:px-24 text-center border-t border-zinc-800">
        <p>&copy; 2023 Your Company</p>
      </footer>
    </div>
  )
}
