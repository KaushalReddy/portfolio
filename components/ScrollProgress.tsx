'use client';
import { useEffect, useRef } from 'react';
export default function ScrollProgress() {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const f = () => { const h = document.documentElement.scrollHeight - innerHeight; ref.current!.style.transform = `scaleX(${h > 0 ? scrollY / h : 0})`; };
    addEventListener('scroll', f, { passive: true }); f(); return () => removeEventListener('scroll', f);
  }, []);
  return <div ref={ref} className="progress" aria-hidden="true" />;
}
