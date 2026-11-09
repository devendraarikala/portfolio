import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Github, Linkedin, Mail, Download } from "lucide-react";
import { profile, links, gmailUrl, openGmail } from "../data.js";

function useTyping(words, speed = 80, pause = 1400) {
  const [text, setText] = useState("");
  const [i, setI] = useState(0);
  const [del, setDel] = useState(false);
  useEffect(() => {
    const word = words[i % words.length];
    const t = setTimeout(
      () => {
        if (!del && text === word) return setDel(true);
        if (del && text === "") {
          setDel(false);
          return setI(i + 1);
        }
        setText(
          del ? word.slice(0, text.length - 1) : word.slice(0, text.length + 1),
        );
      },
      !del && text === word ? pause : del ? speed / 2 : speed,
    );
    return () => clearTimeout(t);
  }, [text, del, i, words, speed, pause]);
  return text;
}

export default function Home() {
  const typed = useTyping(profile.roles);
  const [photoOk, setPhotoOk] = useState(true);
  const base = import.meta.env.BASE_URL;
  return (
    <section id="home" className="hero" aria-label="Introduction">
      <div className="container hero-grid">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
        >
          <p className="eyebrow">Welcome to my portfolio</p>
          <h1>
            Hi, I'm <span className="grad">{profile.name}</span>
          </h1>
          <p className="subtitle">B.Tech CSE '28 | Full Stack Developer</p>
          <p className="typing" aria-live="off">
            {typed}
            <span className="caret" aria-hidden="true">
              |
            </span>
          </p>
          <p className="lead">{profile.intro}</p>
          <div className="btn-row">
            <a href="#projects" className="btn primary">
              View Projects
            </a>
            <a
              href={`${base}resume.pdf`}
              download="Devendra_Kumar_Reddy_Resume.pdf"
              className="btn ghost"
            >
              <Download size={16} /> Download Resume
            </a>
          </div>
          <div className="socials">
            <a
              href={links.github}
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
            >
              <Github size={20} />
            </a>
            <a
              href={links.linkedin}
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
            >
              <Linkedin size={20} />
            </a>
            <a
              href={gmailUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={openGmail}
              aria-label="Email"
            >
              <Mail size={20} />
            </a>
          </div>
        </motion.div>
        <motion.div
          className="hero-visual"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          <div className="photo glass">
            {photoOk ? (
              <img
                src={`${base}profile.jpg`}
                alt="Portrait of Devendra"
                onError={() => setPhotoOk(false)}
              />
            ) : (
              <span aria-label="Profile photo placeholder">AD</span>
            )}
          </div>
          <pre className="code glass" aria-hidden="true">{`const developer = {
  name: "Devendra",
  stack: ["Java", "JS", "React"],
  learning: ["Node", "SQL"],
  openTo: "Internships",
};`}</pre>
        </motion.div>
      </div>
    </section>
  );
}
