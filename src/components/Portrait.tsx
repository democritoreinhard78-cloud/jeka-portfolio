import { useState } from 'react';
import { profile } from '../data/profile';

/**
 * Elegant portrait frame. Shows `public/assets/jeka-portrait.jpg` when available,
 * otherwise falls back to a refined monogram card.
 */
export function Portrait() {
  const [status, setStatus] = useState<'loading' | 'loaded' | 'error'>('loading');

  return (
    <div className="relative mx-auto w-full max-w-[360px] sm:max-w-[380px]">
      {/* Offset gold frame */}
      <div className="absolute inset-0 translate-x-4 translate-y-4 rounded-[2rem] border border-gold/45" aria-hidden="true" />

      <div className="relative aspect-[4/5] overflow-hidden rounded-[2rem] bg-gradient-to-br from-beige via-sand to-[#d6c3a3] shadow-[0_40px_80px_-40px_rgba(24,36,58,0.55)]">
        {/* Monogram fallback */}
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <div className="grid-pattern absolute inset-0 opacity-70" aria-hidden="true" />
          <span
            className="pointer-events-none absolute -right-6 -bottom-16 font-serif text-[18rem] leading-none text-navy/[0.05] select-none"
            aria-hidden="true"
          >
            Σ
          </span>
          <div className="relative flex h-36 w-36 items-center justify-center rounded-full border border-gold/50 bg-ivory/70 shadow-inner backdrop-blur-sm">
            <span className="font-serif text-6xl font-medium italic text-navy">
              J<span className="text-gold">T</span>
            </span>
          </div>
          <p className="relative mt-6 font-serif text-xl text-navy">{profile.name}</p>
          <p className="relative mt-1 text-[11px] font-semibold uppercase tracking-[0.24em] text-taupe">
            Finance · HR · Operations
          </p>
        </div>

        {status !== 'error' && (
          <img
            src={profile.portraitUrl}
            alt={`Portrait of ${profile.name}`}
            onLoad={() => setStatus('loaded')}
            onError={() => setStatus('error')}
            className={`absolute inset-0 h-full w-full object-cover object-[50%_22%] transition-opacity duration-700 ${
              status === 'loaded' ? 'opacity-100' : 'opacity-0'
            }`}
          />
        )}

        <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-navy/25 to-transparent" aria-hidden="true" />
      </div>

      {/* Floating availability chip */}
      <div className="animate-float absolute -top-4 -left-4 flex items-center gap-2.5 rounded-full border border-sand bg-ivory/95 px-4 py-2.5 shadow-lg backdrop-blur sm:-left-8">
        <span className="relative flex h-2.5 w-2.5">
          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald opacity-60" />
          <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-emerald" />
        </span>
        <span className="text-xs font-semibold text-navy">Open to opportunities</span>
      </div>

      {/* Current role card */}
      <div className="absolute -right-3 -bottom-6 w-[220px] rounded-2xl border border-sand bg-ivory/95 p-4 shadow-xl backdrop-blur sm:-right-8">
        <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-gold">Recent Role</p>
        <p className="mt-1.5 font-serif text-[15px] leading-snug text-navy">Finance Head / Human Resources</p>
        <p className="mt-0.5 text-xs text-muted">SVLand Corporation</p>
      </div>
    </div>
  );
}
