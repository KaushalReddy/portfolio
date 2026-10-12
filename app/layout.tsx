import type { Metadata } from 'next';
import './globals.css';
export const metadata: Metadata = {
  metadataBase: new URL('https://kaushalparvatala.vercel.app'),
  alternates: { canonical: '/' },
  title: 'Kaushal Reddy Parvatala — Software Engineer',
  description: 'Kaushal Reddy Parvatala is a software engineer building full-stack systems, AI-powered applications, and interactive 3D web experiences.',
  openGraph: {
    url: '/',
    siteName: 'Kaushal Reddy Parvatala',
    title: 'Kaushal Reddy Parvatala — Software Engineer',
    description: 'Full-stack systems, AI-powered applications, and interactive 3D web experiences.',
    type: 'website'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Kaushal Reddy Parvatala — Software Engineer',
    description: 'Full-stack systems, AI-powered applications, and interactive 3D web experiences.'
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (<html lang="en"><head>
    <link rel="preconnect" href="https://fonts.googleapis.com" /><link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
    <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Unbounded:wght@300;600&family=Hanken+Grotesk:wght@300;400;500&display=swap" />
  </head><body className="locked">{children}</body></html>);
}
export const viewport = { width: 'device-width', initialScale: 1, viewportFit: 'cover' as const, themeColor: '#05060a' };
