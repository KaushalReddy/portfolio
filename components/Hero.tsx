'use client';
import type { Phase } from './3d/CoreScene';
import { useMagnetic } from '@/lib/useMagnetic';
function Word({ t, d }: { t: string; d: number }) {
  return (<span aria-hidden="true">{[...t].map((c, i) => <span key={i} className="ch" style={{ animationDelay: `${d + i * 45}ms` }}>{c}</span>)}</span>);
}
export default function Hero({ phase, onEnter }: { phase: Phase; onEnter: () => void }) {
  const gone = phase !== 'arrive'; const btn = useMagnetic<HTMLButtonElement>(0.35);
  return (<div id="arrive" className={gone ? 'gone' : ''} hidden={phase === 'open'} role="region" aria-label="Welcome">
    <h1 aria-label="Kaushal Parvatala"><Word t="KAUSHAL" d={100} /><br /><Word t="PARVATALA" d={450} /></h1>
    <p className="rise-p">Software engineer building digital systems with code, AI and design.</p>
    <button ref={btn} className="enter rise-p" style={{ animationDelay: '1.1s' }} onClick={onEnter} disabled={gone}>Enter experience</button>
  </div>);
}
