import { MapPin } from "lucide-react";
import Reveal from "./Reveal.jsx";

export default function Timeline({ items }) {
  return (
    <ol className="timeline">
      {items.map((it, i) => (
        <Reveal key={it.title} delay={i * 0.08}>
          <li className="tl-item">
            <span className="dot" aria-hidden="true" />
            <div className="card">
              {it.period && <small className="period">{it.period}</small>}
              <h3>{it.title}</h3>
              {it.org && <p className="org">{it.org}</p>}
              {it.score && <p className="score">{it.score}</p>}
              {it.location && (
                <a
                  className="loc"
                  href={it.location}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <MapPin size={14} aria-hidden="true" /> Location
                </a>
              )}
              {it.points && (
                <ul>
                  {it.points.map((p) => (
                    <li key={p}>{p}</li>
                  ))}
                </ul>
              )}
              {(it.certUrl || it.badgeUrl) && (
                <div className="btn-row">
                  {it.certUrl && (
                    <a
                      className="btn small primary"
                      href={it.certUrl}
                      target="_blank"
                      rel="noreferrer"
                    >
                      View Certificate
                    </a>
                  )}
                  {it.badgeUrl && (
                    <a
                      className="btn small ghost"
                      href={it.badgeUrl}
                      target="_blank"
                      rel="noreferrer"
                    >
                      View Badge
                    </a>
                  )}
                </div>
              )}
            </div>
          </li>
        </Reveal>
      ))}
    </ol>
  );
}
