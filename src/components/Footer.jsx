import { useEffect, useState } from "react";
import { Github, Linkedin, Mail, ArrowUp } from "lucide-react";
import { profile, links, gmailUrl, openGmail } from "../data.js";

export default function Footer() {
  const [show, setShow] = useState(false);
  useEffect(() => {
    const on = () => setShow(window.scrollY > 500);
    window.addEventListener("scroll", on, { passive: true });
    return () => window.removeEventListener("scroll", on);
  }, []);
  return (
    <footer className="footer">
      <div className="container footer-inner">
        <div>
          <strong>{profile.name}</strong>
          <p className="muted">B.Tech CSE '28 · Full Stack Developer</p>
        </div>
        <div className="socials">
          <a
            href={links.github}
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
          >
            <Github size={18} />
          </a>
          <a
            href={links.linkedin}
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
          >
            <Linkedin size={18} />
          </a>
          <a
            href={gmailUrl}
            target="_blank"
            rel="noopener noreferrer"
            onClick={openGmail}
            aria-label="Email"
          >
            <Mail size={18} />
          </a>
        </div>
        <p className="muted">
          © {new Date().getFullYear()} {profile.name}
        </p>
      </div>
      <a
        href="#home"
        className={`to-top ${show ? "show" : ""}`}
        aria-label="Back to top"
        tabIndex={show ? 0 : -1}
      >
        <ArrowUp size={18} />
      </a>
    </footer>
  );
}
