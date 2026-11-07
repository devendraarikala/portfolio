import Section from "./Section.jsx";
import Reveal from "./Reveal.jsx";
import TechIcon from "./TechIcon.jsx";
import { skills } from "../data.js";

export default function Skills() {
  return (
    <Section
      id="skills"
      eyebrow="Skills & Tools"
      title="Technologies I work with"
    >
      <div className="skill-groups">
        {skills.map((g, i) => (
          <Reveal key={g.category} delay={i * 0.05}>
            <h3 className="group-title">{g.category}</h3>
            <ul className="tiles">
              {g.items.map((s) => (
                <li key={s.name} className="tile">
                  <span className="tile-icon">
                    <TechIcon name={s.name} size={26} />
                  </span>
                  <strong>{s.name}</strong>
                  <small>{s.level}</small>
                </li>
              ))}
            </ul>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
