import type { ReactNode } from 'react';
import { Reveal } from './Reveal';

interface SectionHeadingProps {
  eyebrow: string;
  title: ReactNode;
  description?: string;
  tone?: 'light' | 'dark';
  align?: 'left' | 'center';
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  tone = 'light',
  align = 'left',
}: SectionHeadingProps) {
  const isDark = tone === 'dark';
  return (
    <Reveal className={align === 'center' ? 'mx-auto max-w-2xl text-center' : 'max-w-2xl'}>
      <span className={`eyebrow ${isDark ? '!text-gold-soft before:!bg-gold-soft' : ''}`}>{eyebrow}</span>
      <h2
        className={`mt-5 font-serif text-3xl leading-[1.15] font-semibold sm:text-4xl lg:text-[2.75rem] [&_em]:font-medium [&_em]:italic ${
          isDark ? 'text-cream [&_em]:text-gold-soft' : 'text-navy [&_em]:text-gold'
        }`}
      >
        {title}
      </h2>
      {description && (
        <p className={`mt-5 text-base leading-relaxed ${isDark ? 'text-cream/70' : 'text-muted'}`}>
          {description}
        </p>
      )}
    </Reveal>
  );
}
