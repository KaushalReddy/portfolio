'use client';
import { useEffect, useState } from 'react';
const ITEMS = [['about', 'About'], ['system', 'System'], ['projects', 'Projects'], ['journey', 'Journey'], ['contact', 'Contact']];
export default function Nav({ visible }: { visible: boolean }) {
  const [cur, setCur] = useState('');
  useEffect(() => {
    let raf = 0;
    const calc = () => { raf = 0; const y = innerHeight * 0.4; let c = ''; for (const [id] of ITEMS) { const el = document.getElementById(id); if (el && el.getBoundingClientRect().top <= y) c = id; } setCur(c); };
    const on = () => { if (!raf) raf = requestAnimationFrame(calc); };
    addEventListener('scroll', on, { passive: true }); addEventListener('resize', on); calc();
    return () => { removeEventListener('scroll', on); removeEventListener('resize', on); cancelAnimationFrame(raf); };
  }, []);
  return (<nav aria-label="Primary" style={visible ? undefined : { opacity: 0, pointerEvents: 'none' }}>
    <span className="me">Kaushal Reddy Parvatala</span>
    <ul>{ITEMS.map(([id, l]) => (<li key={id}><a href={`#${id}`} aria-current={cur === id}>{l}</a></li>))}</ul>
  </nav>);
}
