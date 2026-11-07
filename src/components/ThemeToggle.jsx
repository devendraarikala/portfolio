import { Sun, Moon } from 'lucide-react'

export default function ThemeToggle({ theme, onToggle }) {
  const dark = theme === 'dark'
  return (
    <button className="icon-btn" onClick={onToggle} aria-pressed={dark} aria-label={`Switch to ${dark ? 'light' : 'dark'} theme`} title={`${dark ? 'Light' : 'Dark'} mode`}>
      {dark ? <Sun size={18} /> : <Moon size={18} />}
    </button>
  )
}
