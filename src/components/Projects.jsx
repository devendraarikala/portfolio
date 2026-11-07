import { Github, ExternalLink } from "lucide-react";
import Section from "./Section.jsx";
import Reveal from "./Reveal.jsx";
import TechIcon from "./TechIcon.jsx";
import { projects } from "../data.js";

function LinkBtn({ href, icon, label }) {
  return href ? (
    <a
      className="btn small primary"
      href={href}
      target="_blank"
      rel="noreferrer"
    >
      {icon} {label}
    </a>
  ) : (
    <button
      className="btn small primary"
      disabled
      title="Available once the project is published"
    >
      {icon} {label}
    </button>
  );
}

export default function Projects() {
  return (
    <Section id="projects" eyebrow="Projects" title="Things I'm building">
      <p className="muted note">
        These projects are in development. GitHub and demo links will be enabled
        once each one is published.
      </p>
      <div className="grid-3">
        {projects.map((p, i) => (
          <Reveal key={p.title} delay={i * 0.08}>
            <article className="card hover-lift project">
              <h3>{p.title}</h3>
              <p className="muted">{p.description}</p>
              <ul>
                {p.features.map((f) => (
                  <li key={f}>{f}</li>
                ))}
              </ul>
              <div className="badges">
                {p.tech.map((t) => (
                  <span key={t} className="badge">
                    <TechIcon name={t} size={13} /> {t}
                  </span>
                ))}
              </div>
              <div className="btn-row">
                <LinkBtn
                  href={p.github}
                  icon={<Github size={14} />}
                  label="GitHub"
                />
                <LinkBtn
                  href={p.demo}
                  icon={<ExternalLink size={14} />}
                  label="Live Demo"
                />
              </div>
            </article>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
