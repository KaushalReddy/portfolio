'use client';
import type { Phase } from './3d/CoreScene';
import { useMagnetic } from '@/lib/useMagnetic';
import { profile } from '@/data/profile';

function Word({ t, d }: { t: string; d: number }) {
  return (
    <span aria-hidden="true">
      {[...t].map((c, i) => (
        <span key={i} className="ch" style={{ animationDelay: `${d + i * 45}ms` }}>
          {c}
        </span>
      ))}
    </span>
  );
}

export default function Hero({ phase, onEnter }: { phase: Phase; onEnter: () => void }) {
  const gone = phase !== 'arrive';
  const btn = useMagnetic<HTMLButtonElement>(0.35);

  return (
    <div id="arrive" className={gone ? 'gone' : ''} hidden={phase === 'open'} role="region" aria-label="Welcome">
      <h1 aria-label="Kaushal Parvatala">
        <Word t="KAUSHAL" d={100} />
        <br />
        <Word t="PARVATALA" d={450} />
      </h1>
      <p className="rise-p">{profile.headline}</p>
      <div className="hero-actions rise-p" style={{ animationDelay: '1.1s' }}>
        <button ref={btn} className="enter" onClick={onEnter} disabled={gone}>
          Enter experience <span aria-hidden="true">→</span>
        </button>
        <div className="hero-resume-group">
          <a
            href={profile.contact.resumeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-resume-view"
            tabIndex={gone ? -1 : 0}
            aria-label="View Resume in new tab"
          >
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
              <polyline points="14 2 14 8 20 8" />
              <line x1="16" y1="13" x2="8" y2="13" />
              <line x1="16" y1="17" x2="8" y2="17" />
              <polyline points="10 9 9 9 8 9" />
            </svg>
            <span>View Resume</span>
          </a>
          <a
            href={profile.contact.resumeUrl}
            download={profile.contact.resumeDownload}
            className="btn-resume-dl"
            tabIndex={gone ? -1 : 0}
            aria-label="Download Kaushal Reddy Resume PDF"
            title="Download Resume PDF"
          >
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
              <polyline points="7 10 12 15 17 10" />
              <line x1="12" y1="15" x2="12" y2="3" />
            </svg>
            <span>Download</span>
          </a>
        </div>
      </div>
    </div>
  );
}

