'use client';
import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { profile } from '@/data/profile';
import { prefersReducedMotion } from '@/lib/scroll';
export default function Statements() {
  const root = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (prefersReducedMotion()) { root.current?.querySelectorAll<HTMLElement>('.stmt h2').forEach((e) => { e.style.opacity = '1'; e.style.transform = 'none'; }); return; }
    gsap.registerPlugin(ScrollTrigger);
    const ctx = gsap.context(() => {
      gsap.utils.toArray<HTMLElement>('.stmt h2').forEach((el) =>
        gsap.fromTo(el, { opacity: 0.12, y: 32 }, { opacity: 1, y: 0, ease: 'none', scrollTrigger: { trigger: el, start: 'top 80%', end: 'top 45%', scrub: true } }));
    }, root);
    return () => ctx.revert();
  }, []);
  return (<div className="wrap" id="about" ref={root}>
    {profile.statements.map((t) => (<div className="stmt" key={t}><h2>{t}</h2></div>))}
    <p className="intro">{profile.intro}</p>
  </div>);
}
