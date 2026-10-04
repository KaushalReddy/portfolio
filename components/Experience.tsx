'use client';
import dynamic from 'next/dynamic';
import { useEffect, useState } from 'react';
import SmoothScroll from './SmoothScroll';
import Nav from './Nav';
import Hero from './Hero';
import Statements from './sections/Statements';
import SystemStack from './sections/SystemStack';
import Method from './sections/Method';
import Projects from './sections/Projects';
import Journey from './sections/Journey';
import Contact from './sections/Contact';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import CursorGlow from './CursorGlow';
import ScrollProgress from './ScrollProgress';
import { lockScroll, prefersReducedMotion, scrollToId } from '@/lib/scroll';
import type { Phase } from './3d/CoreScene';
const CoreScene = dynamic(() => import('./3d/CoreScene'), { ssr: false });
export default function Experience() {
  const [phase, setPhase] = useState<Phase>('arrive'); const [mobile, setMobile] = useState(false); const [reduced, setReduced] = useState(false);
  useEffect(() => { setMobile(innerWidth < 700); setReduced(prefersReducedMotion()); lockScroll(true); }, []);
  const enter = () => {
    const wait = reduced ? 0 : 1300; setPhase('zoom');
    setTimeout(() => { setPhase('open'); lockScroll(false); window.scrollTo(0, 0); }, wait);
  };
  const open = phase === 'open';
  useEffect(() => {
    if (prefersReducedMotion()) return;
    gsap.registerPlugin(ScrollTrigger);
    const ctx = gsap.context(() => {
      const els = gsap.utils.toArray<HTMLElement>('#main .t, #main .sub, #main .flow, #main .tl > div, #main .pl li, #main .links, #contact h2, #main .intro').filter((e) => !e.closest('dialog'));
      gsap.set(els, { opacity: 0, y: 36 });
      ScrollTrigger.batch(els, { start: 'top 90%', once: true, onEnter: (b) => gsap.to(b, { opacity: 1, y: 0, duration: 0.9, ease: 'power3.out', stagger: 0.09, overwrite: true }) });
    });
    return () => ctx.revert();
  }, []);
  useEffect(() => { if (open) ScrollTrigger.refresh(); }, [open]);
  useEffect(() => {
    if (!open) return;
    const ids = ['about', 'system', 'projects', 'journey', 'contact'];
    const h = (e: KeyboardEvent) => {
      if (document.querySelector('dialog[open]') || e.metaKey || e.ctrlKey || e.altKey) return;
      const n = Number(e.key); if (n >= 1 && n <= 5) scrollToId(ids[n - 1]);
    };
    addEventListener('keydown', h); return () => removeEventListener('keydown', h);
  }, [open]);
  return (<>
    <SmoothScroll /><CoreScene phase={phase} mobile={mobile} reduced={reduced} />
    <CursorGlow />{open && <ScrollProgress />}
    <Nav visible={open} />{open && <p className="hint">Press 1 to 5 to jump between sections</p>}
    <Hero phase={phase} onEnter={enter} />
    <main id="main">
      <Statements /><SystemStack /><Method /><Projects /><Journey /><Contact />
    </main>
  </>);
}
