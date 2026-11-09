import { useState } from "react";
import { Mail, MapPin, Github, Linkedin, Loader2 } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import Reveal from "./Reveal.jsx";
import { profile, links, gmailUrl, openGmail } from "../data.js";

// Formspree form ID comes from .env (VITE_FORMSPREE_ID). See README for setup.
const FORM_ID = import.meta.env.VITE_FORMSPREE_ID;
const WA_MSG =
  "Hi Devendra, I came across your portfolio and would like to connect with you about an opportunity.";
const WA_URL = `https://wa.me/918919167299?text=${encodeURIComponent(WA_MSG)}`;
const empty = { name: "", email: "", subject: "", message: "", _gotcha: "" };

function validate(v) {
  const e = {};
  if (v.name.trim().length < 2) e.name = "Full name is required.";
  if (!v.email.trim()) e.email = "Email address is required.";
  else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v.email))
    e.email = "Enter a valid email address.";
  if (v.subject.trim().length < 3) e.subject = "Subject is required.";
  if (v.message.trim().length < 10)
    e.message = "Message must be at least 10 characters.";
  return e;
}

export default function Contact() {
  const [v, setV] = useState(empty);
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState("idle"); // idle | loading | success | error | unconfigured
  const [errMsg, setErrMsg] = useState("");
  const set = (k) => (e) => setV({ ...v, [k]: e.target.value });

  const submit = async (e) => {
    e.preventDefault();
    const err = validate(v);
    setErrors(err);
    if (Object.keys(err).length) return setStatus("idle");
    if (!FORM_ID) return setStatus("unconfigured");
    setStatus("loading");
    try {
      const res = await fetch(`https://formspree.io/f/${FORM_ID}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(v),
      });
      if (res.ok) {
        setStatus("success");
        setV(empty);
      } else {
        const d = await res.json().catch(() => ({}));
        setErrMsg(
          d.errors?.map((x) => x.message).join(", ") ||
            "The server rejected the message.",
        );
        setStatus("error");
      }
    } catch {
      setErrMsg("Network error. Check your connection and try again.");
      setStatus("error");
    }
  };

  const field = (k, label, props = {}) => (
    <div className="field">
      <label htmlFor={k}>
        {label} <span aria-hidden="true">*</span>
      </label>
      {k === "message" ? (
        <textarea
          id={k}
          rows="5"
          required
          value={v[k]}
          onChange={set(k)}
          aria-invalid={!!errors[k]}
          aria-describedby={`${k}-e`}
        />
      ) : (
        <input
          id={k}
          required
          value={v[k]}
          onChange={set(k)}
          aria-invalid={!!errors[k]}
          aria-describedby={`${k}-e`}
          {...props}
        />
      )}
      <span id={`${k}-e`} className="err" role="alert">
        {errors[k]}
      </span>
    </div>
  );

  return (
    <section id="contact" className="section" aria-labelledby="contact-title">
      <div className="container contact-grid">
        <Reveal>
          <p className="eyebrow">Contact</p>
          <h2 id="contact-title" className="section-title">
            Let's connect
          </h2>
          <p className="lead">
            I'm open to Full Stack Developer internships. Send a message, or
            reach me directly.
          </p>
          <ul className="contact-list">
            <li>
              <MapPin size={18} /> {profile.location}
            </li>
            <li>
              <Linkedin size={18} />{" "}
              <a href={links.linkedin} target="_blank" rel="noreferrer">
                LinkedIn profile
              </a>
            </li>
            <li>
              <Github size={18} />{" "}
              <a href={links.github} target="_blank" rel="noreferrer">
                GitHub
              </a>
            </li>
          </ul>
          <div className="btn-row">
            <a
              className="btn wa"
              href={WA_URL}
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaWhatsapp size={18} aria-hidden="true" /> Chat on WhatsApp
            </a>
            <a
              className="btn primary"
              href={gmailUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={openGmail}
            >
              <Mail size={16} /> Email Me
            </a>
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <form className="card" onSubmit={submit} noValidate>
            {field("name", "Full Name", { autoComplete: "name" })}
            {field("email", "Email Address", {
              type: "email",
              autoComplete: "email",
            })}
            {field("subject", "Subject")}
            {field("message", "Message")}
            <input
              className="hp"
              name="_gotcha"
              tabIndex="-1"
              autoComplete="off"
              aria-hidden="true"
              value={v._gotcha}
              onChange={set("_gotcha")}
            />
            <button
              className="btn send"
              type="submit"
              disabled={status === "loading"}
            >
              {status === "loading" ? (
                <>
                  <Loader2 size={16} className="spin" /> Sending…
                </>
              ) : (
                "Send Message"
              )}
            </button>
            <div
              role="status"
              aria-live="polite"
              className={`form-msg ${status}`}
            >
              {status === "success" &&
                "Thank you! Your message was delivered. I will reply soon."}
              {status === "error" && `Message not sent: ${errMsg}`}
              {status === "unconfigured" &&
                "The contact form is not connected yet, so nothing was sent. Please use the Email or WhatsApp buttons."}
            </div>
          </form>
        </Reveal>
      </div>
    </section>
  );
}
