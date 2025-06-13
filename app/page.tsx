import Hero from "@/components/hero"
import Services from "@/components/services"
import References from "@/components/references"
import Projects from "@/components/projects"
import Contact from "@/components/contact"
import AboutUs from "@/components/about-us"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <AboutUs />
      <Services />
      <References />
      <Projects />
      <Contact />
    </main>
  )
}
