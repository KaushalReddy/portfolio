'use client';
import { Canvas, useFrame } from '@react-three/fiber';
import { useMemo, useRef } from 'react';
import * as THREE from 'three';
export type Phase = 'arrive' | 'zoom' | 'open';
const Z: Record<Phase, number> = { arrive: 6, zoom: 3.2, open: 7 };
function Core({ phase, mobile, reduced }: { phase: Phase; mobile: boolean; reduced: boolean }) {
  const group = useRef<THREE.Group>(null); const inner = useRef<THREE.Mesh>(null); const pts = useRef<THREE.Points>(null);
  const mat = useRef<THREE.MeshBasicMaterial>(null);
  const positions = useMemo(() => { const n = mobile ? 400 : 1200; const a = new Float32Array(n * 3); for (let i = 0; i < a.length; i++) a[i] = (Math.random() - 0.5) * 24; return a; }, [mobile]);
  const sprite = useMemo(() => { const c = document.createElement('canvas'); c.width = c.height = 32; const x = c.getContext('2d')!; x.beginPath(); x.arc(16, 16, 14, 0, 7); x.fillStyle = '#fff'; x.fill(); return new THREE.CanvasTexture(c); }, []);
  useFrame((s) => {
    const sy = window.scrollY / Math.max(1, document.body.scrollHeight - innerHeight);
    const g = group.current!; g.position.x = mobile ? 0 : 2.2;
    if (!reduced) { g.rotation.y += 0.003 + s.pointer.x * 0.002; inner.current!.rotation.y -= 0.01; }
    g.rotation.x = s.pointer.y * -0.4 + sy * 3;
    if (pts.current) pts.current.rotation.y = sy * 1.5;
    s.camera.position.z += (Z[phase] - s.camera.position.z) * 0.06;
    s.camera.position.x += (s.pointer.x * 0.4 - s.camera.position.x) * 0.05;
    if (mat.current) mat.current.opacity = phase === 'open' ? Math.max(0.08, 0.35 - sy * 1.5) : 0.5;
  });
  return (<>
    <group ref={group}>
      <mesh><icosahedronGeometry args={[1.5, mobile ? 1 : 2]} /><meshBasicMaterial ref={mat} color="#9bbcff" wireframe transparent opacity={0.5} /></mesh>
      <mesh ref={inner}><octahedronGeometry args={[0.7, 0]} /><meshBasicMaterial color="#e9e7e1" wireframe /></mesh>
    </group>
    <points ref={pts}><bufferGeometry><bufferAttribute attach="attributes-position" args={[positions, 3]} /></bufferGeometry>
      <pointsMaterial size={0.05} map={sprite} alphaTest={0.5} color="#e9e7e1" transparent opacity={0.6} sizeAttenuation /></points>
  </>);
}
export default function CoreScene({ phase, mobile, reduced }: { phase: Phase; mobile: boolean; reduced: boolean }) {
  return (<Canvas id="gl" aria-hidden="true" frameloop={reduced ? 'demand' : 'always'} dpr={[1, mobile ? 1.5 : 2]} camera={{ fov: 50, position: [0, 0, 6] }} gl={{ antialias: !mobile, alpha: true }} style={{ position: 'fixed', inset: 0, zIndex: 0 }}>
    <Core phase={phase} mobile={mobile} reduced={reduced} /></Canvas>);
}
