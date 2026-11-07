import { useEffect, useState } from 'react'
import { Home, User, FolderKanban, Wrench, Briefcase, GraduationCap, Award, Mail, Trophy } from 'lucide-react'

export const navItems = [
  { id: 'home', label: 'Introduction', Icon: Home }, { id: 'about', label: 'About Me', Icon: User },
  { id: 'projects', label: 'Projects', Icon: FolderKanban }, { id: 'skills', label: 'Skills & Tools', Icon: Wrench },
  { id: 'experience', label: 'Experience', Icon: Briefcase }, { id: 'education', label: 'Education', Icon: GraduationCap },
  { id: 'certifications', label: 'Certifications', Icon: Award }, { id: 'contact', label: 'Contact', Icon: Mail },
  { id: 'achievements', label: 'Achievements', Icon: Trophy },
]

export default function Sidebar({ open, onClose }) {
  const [active, setActive] = useState('home')
  useEffect(() => {
    const io = new IntersectionObserver((es) => es.forEach((e) => e.isIntersecting && setActive(e.target.id)), { rootMargin: '-45% 0px -50% 0px' })
    navItems.forEach(({ id }) => { const el = document.getElementById(id); el && io.observe(el) })
    return () => io.disconnect()
  }, [])
  useEffect(() => {
    const esc = (e) => e.key === 'Escape' && onClose()
    window.addEventListener('keydown', esc)
    return () => window.removeEventListener('keydown', esc)
  }, [onClose])
  return (
    <>
      <div className={`scrim ${open ? 'show' : ''}`} onClick={onClose} aria-hidden="true" />
      <aside id="sidebar" className={`sidebar ${open ? 'open' : ''}`} aria-label="Section navigation">
        <a href="#home" className="brand" onClick={onClose}><span className="brand-mark">AD</span><span><strong>Devendra Reddy</strong><small>Full Stack Developer</small></span></a>
        <nav>
          {navItems.map(({ id, label, Icon }) => (
            <a key={id} href={`#${id}`} className={active === id ? 'active' : ''} aria-current={active === id ? 'true' : undefined} onClick={onClose}>
              <Icon size={18} aria-hidden="true" /> {label}
            </a>
          ))}
        </nav>
      </aside>
    </>
  )
}
