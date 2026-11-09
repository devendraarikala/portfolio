import { Award } from "lucide-react";
import Section from "./Section.jsx";
import Reveal from "./Reveal.jsx";
import { certifications } from "../data.js";

export default function Certifications() {
  return (
    <Section
      id="certifications"
      eyebrow="Certifications"
      title="Certificates,Badges & workshops"
    >
      <div className="grid-3">
        {certifications.map((c, i) => (
          <Reveal key={c.title} delay={i * 0.08}>
            <article className="card hover-lift cert-card">
              <Award className="cert-icon" size={30} aria-hidden="true" />
              <h3>{c.title}</h3>
              {c.org && <p className="muted">{c.org}</p>}
              {c.date && <small className="period">{c.date}</small>}
              {(c.certUrl || c.badgeUrl) && (
                <div className="btn-row">
                  {c.certUrl && (
                    <a
                      className="btn small primary"
                      href={c.certUrl}
                      target="_blank"
                      rel="noreferrer"
                    >
                      View Certificate
                    </a>
                  )}
                  {c.badgeUrl && (
                    <a
                      className="btn small ghost"
                      href={c.badgeUrl}
                      target="_blank"
                      rel="noreferrer"
                    >
                      View Badge
                    </a>
                  )}
                </div>
              )}
            </article>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
