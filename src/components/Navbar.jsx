import { Menu, Download } from 'lucide-react'
import ThemeToggle from './ThemeToggle.jsx'
import { links } from '../data.js'

export default function Navbar({ theme, onToggle, onMenu, menuOpen }) {
  const base = import.meta.env.BASE_URL
  return (
    <header className="topbar">
      <div className="topbar-inner">
        <button className="icon-btn menu-btn" onClick={onMenu} aria-expanded={menuOpen} aria-controls="sidebar" aria-label="Open navigation menu"><Menu size={20} /></button>
        <a href="#home" className="logo">&lt;Devendra<span>/&gt;</span></a>
        <nav aria-label="Quick links" className="top-links">
          <a href="#home">Home</a>
          <a href={links.linkedin} target="_blank" rel="noreferrer">LinkedIn</a>
          <a href={`${base}resume.pdf`} download="Devendra_Kumar_Reddy_Resume.pdf"><Download size={14} /> Resume</a>
          <ThemeToggle theme={theme} onToggle={onToggle} />
        </nav>
      </div>
    </header>
  )
}
