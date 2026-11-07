import Section from './Section.jsx'
import Reveal from './Reveal.jsx'
import { achievements, links } from '../data.js'

export default function Achievements() {
  const profiles = [['GitHub', links.github], ['CodeChef', links.codechef], ['LeetCode', links.leetcode], ['HackerRank', links.hackerrank]]
  return (
    <Section id="achievements" eyebrow="Achievements" title="Coding & leadership">
      <div className="grid-4">
        {achievements.map((a, i) => (
          <Reveal key={a.big} delay={i * 0.07}><div className="card glass hover-lift center"><div className="big">{a.big}</div><p className="muted">{a.text}</p></div></Reveal>
        ))}
      </div>
      <Reveal><div className="btn-row center-row">{profiles.map(([n, u]) => <a key={n} className="btn ghost small" href={u} target="_blank" rel="noreferrer">{n}</a>)}</div></Reveal>
    </Section>
  )
}
