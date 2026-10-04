import type Lenis from 'lenis';
let lenis: Lenis | null = null;
export const setLenis = (l: Lenis | null) => { lenis = l; };
export const lockScroll = (lock: boolean) => { document.body.classList.toggle('locked', lock); lock ? lenis?.stop() : lenis?.start(); };
export const prefersReducedMotion = () => typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
export const pauseScroll = (p: boolean) => { p ? lenis?.stop() : lenis?.start(); };
export const scrollToId = (id: string) => { const el = document.getElementById(id); if (!el) return; lenis ? lenis.scrollTo(el, { offset: -60 }) : el.scrollIntoView({ behavior: prefersReducedMotion() ? 'auto' : 'smooth' }); };
