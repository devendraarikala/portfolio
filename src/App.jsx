import { useCallback, useEffect, useState } from 'react'
import Sidebar from './components/Sidebar.jsx'
import Navbar from './components/Navbar.jsx'
import Home from './components/Home.jsx'
import About from './components/About.jsx'
import Projects from './components/Projects.jsx'
import Skills from './components/Skills.jsx'
import Experience from './components/Experience.jsx'
import Education from './components/Education.jsx'
import Certifications from './components/Certifications.jsx'
import Contact from './components/Contact.jsx'
import Achievements from './components/Achievements.jsx'
import Footer from './components/Footer.jsx'

export default function App() {
  const [theme, setTheme] = useState(() => {
    try { return localStorage.getItem('theme') === 'dark' ? 'dark' : 'light' } catch { return 'light' }
  })
  const [menu, setMenu] = useState(false)
  const closeMenu = useCallback(() => setMenu(false), [])

  useEffect(() => {
    document.documentElement.dataset.theme = theme
    try { localStorage.setItem('theme', theme) } catch { /* ignore */ }
  }, [theme])

  return (
    <>
      <a href="#about" className="skip">Skip to content</a>
      <Sidebar open={menu} onClose={closeMenu} />
      <div className="main-wrap">
        <Navbar theme={theme} onToggle={() => setTheme(theme === 'dark' ? 'light' : 'dark')} onMenu={() => setMenu(true)} menuOpen={menu} />
        <main>
          <Home /><About /><Projects /><Skills /><Experience /><Education /><Certifications /><Contact /><Achievements />
        </main>
        <Footer />
      </div>
    </>
  )
}
