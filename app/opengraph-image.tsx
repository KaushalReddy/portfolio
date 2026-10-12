import { ImageResponse } from 'next/og';
export const alt = 'Kaushal Reddy Parvatala — Software Engineer';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';
export default function Image() {
  return new ImageResponse(
    (<div style={{ width: '100%', height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'flex-end', padding: 80, background: '#05060a', color: '#e9e7e1' }}>
      <div style={{ display: 'flex', fontSize: 28, color: '#9bbcff', marginBottom: 24 }}>Software engineer</div>
      <div style={{ display: 'flex', fontSize: 92, lineHeight: 1, letterSpacing: -3 }}>Kaushal Reddy Parvatala</div>
      <div style={{ display: 'flex', fontSize: 30, color: '#9a9da6', marginTop: 28 }}>Full-stack systems, AI-assisted applications and interactive digital experiences</div>
    </div>), size);
}
