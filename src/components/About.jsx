import Section from './Section.jsx'
import Reveal from './Reveal.jsx'
import { about, aboutCards, languages } from '../data.js'

export default function About() {
  return (
    <Section id="about" eyebrow="About me" title="Who I am">
      <div className="two-col">
        <Reveal>{about.map((p) => <p key={p} className="lead">{p}</p>)}
          <p className="muted">Languages: {languages.map((l) => `${l.name} (${l.level})`).join(' · ')}</p></Reveal>
        <div className="stack">
          {aboutCards.map((c, i) => (
            <Reveal key={c.title} delay={i * 0.1}><div className="card glass"><h3>{c.title}</h3><p className="muted">{c.text}</p></div></Reveal>
          ))}
        </div>
      </div>
    </Section>
  )
}
