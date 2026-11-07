import Reveal from './Reveal.jsx'

export default function Section({ id, eyebrow, title, children }) {
  return (
    <section id={id} className="section" aria-labelledby={`${id}-title`}>
      <div className="container">
        <Reveal><p className="eyebrow">{eyebrow}</p><h2 id={`${id}-title`} className="section-title">{title}</h2></Reveal>
        {children}
      </div>
    </section>
  )
}
