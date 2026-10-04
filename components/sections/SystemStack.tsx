'use client';
import { useState } from 'react';
import { stackNodes } from '@/data/content';
export default function SystemStack() {
  const [active, setActive] = useState<string | null>(null);
  const cur = stackNodes.find((n) => n.id === active);
  const lit = new Set(cur ? [cur.id, ...cur.rel] : []);
  return (<section id="system"><div className="wrap">
    <h2 className="t">The system stack</h2>
    <p className="sub">Hover or focus a technology to see what I use it for and what it connects to.</p>
    <div id="stack">
      <svg viewBox="0 0 100 100" preserveAspectRatio="none" aria-hidden="true">
        {stackNodes.map((n) => <line key={n.id} x1={50} y1={45} x2={n.x} y2={n.y} />)}
        {cur && cur.rel.map((r) => { const t = stackNodes.find((n) => n.id === r)!; return <line key={r} className="on" x1={cur.x} y1={cur.y} x2={t.x} y2={t.y} />; })}
      </svg>
      <span className="node core" style={{ left: '50%', top: '45%' }}>Core</span>
      {stackNodes.map((n) => (<button key={n.id} className={`node${cur ? (lit.has(n.id) ? (n.id === active ? '' : ' on') : ' dim') : ''}`} style={{ left: `${n.x}%`, top: `${n.y}%` }}
        onPointerEnter={() => setActive(n.id)} onPointerLeave={() => setActive(null)} onFocus={() => setActive(n.id)} onBlur={() => setActive(null)}>{n.label}</button>))}
    </div>
    <div id="tip" aria-live="polite">{cur ? <><b>{cur.label}</b>{cur.desc}</> : 'Select a node.'}</div>
  </div></section>);
}
