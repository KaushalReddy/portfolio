'use client';
import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { prefersReducedMotion } from '@/lib/scroll';
import type { Project } from '@/data/types';
import { roleExplorer as R } from '@/data/content';
const TBD = <span className="tbd">To be added.</span>;
type Role = keyof typeof R.ROLES;
function Roles() {
  const roles = Object.keys(R.ROLES) as Role[];
  const [role, setRole] = useState<Role>('STUDENT'); const [page, setPage] = useState('Overview');
  const mods = R.ROLES[role] as readonly string[]; const [col, desc] = (R.MOD as unknown as Record<string, readonly [string | null, string]>)[page];
  return (<div className="viz">
    <div role="group" aria-label="Role">{roles.map((r) => <button key={r} aria-pressed={r === role} onClick={() => { setRole(r); setPage('Overview'); }}>{r}</button>)}</div>
    <div className="mods" role="group" aria-label="Pages for this role">{mods.map((m) => <button key={m} aria-pressed={m === page} onClick={() => setPage(m)}>{m}</button>)}</div>
    <div className="out" aria-live="polite"><b>{page} · {role}</b><br />{desc}<br />{col ? `Firestore: ${col}. ${(R.RULE as Record<string, string>)[col]}` : ''}</div>
  </div>);
}
export default function CaseStudy({ p, index, total, onPrev, onNext, onClose }: { p: Project; index: number; total: number; onPrev: () => void; onNext: () => void; onClose: () => void }) {
  const body = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (prefersReducedMotion() || !body.current) return;
    const ctx = gsap.context(() => { gsap.from(body.current!.children, { y: 18, opacity: 0, duration: 0.55, stagger: 0.04, ease: 'power3.out', clearProps: 'all' }); }, body);
    return () => ctx.revert();
  }, [p.n]);
  return (<>
    <div className="cs-bar">
      <span className="cs-count">{String(index + 1).padStart(2, '0')} / {String(total).padStart(2, '0')}</span>
      <span className="cs-btns">
        <button onClick={onPrev} aria-label="Previous project">←</button>
        <button onClick={onNext} aria-label="Next project">→</button>
        <button onClick={onClose} aria-label="Close case study">Close</button>
      </span>
    </div>
    <div ref={body} key={p.n}>
    <h2 id="cst">{p.n}</h2><p>{p.d ?? TBD}</p>
    <h4>Status</h4><p>{p.s}</p>
    <h4>Problem</h4><p>{p.prob ?? TBD}</p>
    <h4>What I built</h4><p>{p.sol ?? TBD}</p>
    <h4>Role</h4><p>{p.role ?? TBD}</p>
    <h4>Technologies</h4>{p.stack ? <div className="tags">{p.stack.map((t) => <span key={t}>{t}</span>)}</div> : TBD}
    {p.extra && <><h4>{p.extra[0]}</h4><div className="tags">{p.extra[1].map((t) => <span key={t}>{t}</span>)}</div></>}
    <h4>System flow</h4>{p.flow ? <div className="flow">{p.flow.map((t) => <span key={t}>{t}</span>)}</div> : TBD}
    {p.viz ? <><h4>Explore by role</h4><Roles /></> : null}
    <h4>Links</h4><p>{p.gh ? <a href={`https://github.com/KaushalReddy/${p.gh}`} target="_blank" rel="noopener noreferrer">Git repo</a> : TBD}{p.live && <> · <a href={p.live} target="_blank" rel="noopener noreferrer">Live demo</a></>}</p>
    <p className="tbd" style={{ marginTop: '2rem', fontSize: '.85rem' }}>Use the arrow keys to move between projects. Esc closes.</p>
    </div>
  </>);
}
