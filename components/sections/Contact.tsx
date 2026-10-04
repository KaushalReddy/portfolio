'use client';
import { useState } from 'react';
import { profile } from '@/data/profile';
export default function Contact() {
  const [copied, setCopied] = useState(false); const c = profile.contact;
  return (<section id="contact"><div className="wrap">
    <h2>LET&apos;S BUILD<br />SOMETHING.</h2>
    <div className="links">
      <a href={`mailto:${c.email}`}>{c.email}</a>
      <button onClick={async () => { try { await navigator.clipboard.writeText(c.email); setCopied(true); setTimeout(() => setCopied(false), 2500); } catch {} }} style={{ background: 'none', border: '1px solid var(--line)', borderRadius: 99, padding: '.2rem .8rem', cursor: 'pointer', fontSize: '.85rem' }}>{copied ? 'Copied' : 'Copy'}</button>
      <a href={c.github} target="_blank" rel="noopener noreferrer">GitHub</a>
      <a href={c.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn</a>
      <a href="/resume.pdf" download="Kaushal-Reddy-Parvatala-Resume.pdf">Resume (PDF)</a>
    </div>
  </div></section>);
}
