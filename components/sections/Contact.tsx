'use client';
import { useState } from 'react';
import { profile } from '@/data/profile';

export default function Contact() {
  const [copied, setCopied] = useState(false);
  const c = profile.contact;

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(c.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    } catch {}
  };

  return (
    <section id="contact">
      <div className="wrap">
        <h2>
          LET&apos;S BUILD<br />SOMETHING.
        </h2>
        <p className="sub" style={{ marginTop: '1.2rem', marginBottom: '2.5rem' }}>
          Open for full-stack engineering roles, AI systems development, and high-impact software projects.
        </p>
        <div className="links">
          <div className="email-pill">
            <a href={`mailto:${c.email}`} className="email-link">
              {c.email}
            </a>
            <button
              onClick={copyEmail}
              aria-label="Copy email address"
              className="copy-btn"
            >
              {copied ? 'Copied ✓' : 'Copy'}
            </button>
          </div>
          <a href={c.github} target="_blank" rel="noopener noreferrer" className="contact-link">
            GitHub <span aria-hidden="true">↗</span>
          </a>
          <a href={c.linkedin} target="_blank" rel="noopener noreferrer" className="contact-link">
            LinkedIn <span aria-hidden="true">↗</span>
          </a>
          <div className="contact-resume-group">
            <a
              href={c.resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="contact-link resume-main"
            >
              View Resume <span aria-hidden="true">↗</span>
            </a>
            <a
              href={c.resumeUrl}
              download={c.resumeDownload}
              className="contact-link resume-dl"
              title="Download Resume PDF"
            >
              Download PDF <span aria-hidden="true">↓</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

