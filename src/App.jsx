import { useEffect } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import SocialProof from './components/SocialProof'
import Services from './components/Services'
import Projects from './components/Projects'
import About from './components/About'
import TechStack from './components/TechStack'
import CTA from './components/CTA'
import Footer from './components/Footer'
import WhatsAppFloat from './components/WhatsAppFloat'
import { useReveal } from './hooks/useReveal'

export default function App() {
  useReveal()

  // Re-run reveal on route changes / dynamic content
  useEffect(() => {
    const timeout = setTimeout(() => {
      const event = new Event('scroll')
      window.dispatchEvent(event)
    }, 100)
    return () => clearTimeout(timeout)
  }, [])

  return (
    <div className="min-h-screen bg-background text-slate-200 font-sans antialiased">
      <Navbar />
      <main>
        <Hero />
        <SocialProof />
        <Services />
        <Projects />
        <About />
        <TechStack />
        <CTA />
      </main>
      <Footer />
      <WhatsAppFloat />
    </div>
  )
}
