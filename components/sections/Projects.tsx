'use client';
import { useRef, useState } from 'react';
import { projects } from '@/data/content';
import CaseStudy from '../projects/CaseStudy';
import { pauseScroll } from '@/lib/scroll';
export default function Projects() {
  const dlg = useRef<HTMLDialogElement>(null); const [i, setI] = useState(0); const n = projects.length;
  const go = (d: number) => { setI((v) => (v + d + n) % n); dlg.current?.scrollTo({ top: 0 }); };
  return (<section id="projects"><div className="wrap">
    <h2 className="t">Projects</h2>
    <p className="sub">Select a project to open its case study.</p>
    <ul className="pl">{projects.map((p, k) => (<li key={p.n}><button onClick={() => { setI(k); pauseScroll(true); dlg.current?.showModal(); }}
      onPointerMove={(e) => { const r = e.currentTarget.getBoundingClientRect(); e.currentTarget.style.setProperty('--x', `${e.clientX - r.left}px`); }}>
      <span className="idx">{String(k + 1).padStart(2, '0')}</span><h3>{p.n}</h3><small>{p.d}</small><span className="arr" aria-hidden="true">→</span></button></li>))}</ul>
  </div>
  <dialog ref={dlg} data-lenis-prevent aria-labelledby="cst" onClose={() => pauseScroll(false)}
    onClick={(e) => e.target === dlg.current && dlg.current?.close()}
    onKeyDown={(e) => { if (e.key === 'ArrowRight') go(1); if (e.key === 'ArrowLeft') go(-1); }}>
    <CaseStudy p={projects[i]} index={i} total={n} onPrev={() => go(-1)} onNext={() => go(1)} onClose={() => dlg.current?.close()} />
  </dialog></section>);
}
