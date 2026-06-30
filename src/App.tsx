import { useEffect, useState } from 'react'
import { ToastProvider } from './context/ToastContext'
import { useScrollReveal } from './hooks/useScrollReveal'
import Cursor from './components/Cursor'
import Topbar from './components/Topbar'
import MenuOverlay from './components/MenuOverlay'
import Hero from './components/Hero'
import { RevealMarquee, ToolMarquee } from './components/Marquees'
import Portfolio from './components/Portfolio'
import Career from './components/Career'
import Pricing from './components/Pricing'
import DoDont from './components/DoDont'
import Process from './components/Process'
import Caution from './components/Caution'
import Faq from './components/Faq'
import Contact from './components/Contact'
import Footer from './components/Footer'

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false)

  useScrollReveal()

  // Lock body scroll while the menu overlay is open.
  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [menuOpen])

  // Escape closes the menu.
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setMenuOpen(false)
    }
    addEventListener('keydown', onKey)
    return () => removeEventListener('keydown', onKey)
  }, [])

  // Report document height to a parent frame (for iframe embeds).
  useEffect(() => {
    const postH = () => {
      try {
        const h = Math.max(document.body.scrollHeight, document.documentElement.scrollHeight)
        if (parent && parent !== window) parent.postMessage({ type: 'JEONGHYUN_HEIGHT', height: h }, '*')
      } catch {
        /* ignore cross-origin */
      }
    }
    addEventListener('load', postH)
    addEventListener('resize', postH)
    const id = window.setInterval(postH, 1500)
    postH()
    return () => {
      removeEventListener('load', postH)
      removeEventListener('resize', postH)
      window.clearInterval(id)
    }
  }, [])

  return (
    <ToastProvider>
      <Cursor />
      <Topbar onMenuOpen={() => setMenuOpen(true)} />
      <MenuOverlay open={menuOpen} onClose={() => setMenuOpen(false)} />
      <Hero />
      <RevealMarquee />
      <Portfolio />
      <Career />
      <ToolMarquee />
      <Pricing />
      <DoDont />
      <Process />
      <Caution />
      <Faq />
      <Contact />
      <Footer />
    </ToastProvider>
  )
}
