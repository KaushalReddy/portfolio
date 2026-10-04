'use client';
import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { prefersReducedMotion } from '@/lib/scroll';
export default function CursorGlow() {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (prefersReducedMotion() || matchMedia('(hover: none)').matches) return;
    const el = ref.current!; const x = gsap.quickTo(el, 'x', { duration: 0.6, ease: 'power3' }); const y = gsap.quickTo(el, 'y', { duration: 0.6, ease: 'power3' });
    const mv = (e: PointerEvent) => { x(e.clientX); y(e.clientY); };
    addEventListener('pointermove', mv); return () => removeEventListener('pointermove', mv);
  }, []);
  return <div ref={ref} className="glow" aria-hidden="true" />;
}
