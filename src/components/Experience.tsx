import { useRef, useState } from 'react';
import { ArrowLeft, ArrowRight, CalendarDays, CheckCircle2 } from 'lucide-react';
import { EXPERIENCE } from '../data/profile';
import { Reveal } from './Reveal';
import { SectionHeading } from './SectionHeading';

export function Experience() {
  const [index, setIndex] = useState(0);
  const panelRef = useRef<HTMLDivElement>(null);
  const job = EXPERIENCE[index];
  const JobIcon = job.icon;

  const select = (i: number, scroll = false) => {
    setIndex(i);
    if (scroll && window.innerWidth < 1024) {
      requestAnimationFrame(() => panelRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' }));
    }
  };

  return (
    <section id="experience" className="relative bg-cream py-24 sm:py-28">
      <div className="container-x">
        <SectionHeading
          eyebrow="Professional Experience"
          title={
            <>
              A track record of <em>trust &amp; precision</em>
            </>
          }
          description="From data encoding to leading finance and HR, each role has strengthened my commitment to accuracy, compliance, and people-first service."
        />

        <div className="mt-14 grid gap-8 lg:grid-cols-12 lg:gap-10">
          {/* Timeline */}
          <Reveal className="lg:col-span-5">
            <ol
              role="tablist"
              aria-label="Experience timeline"
              aria-orientation="vertical"
              className="relative space-y-2 before:absolute before:top-6 before:bottom-6 before:left-[30px] before:w-px before:bg-sand"
            >
              {EXPERIENCE.map((item, i) => {
                const isActive = i === index;
                const Icon = item.icon;
                return (
                  <li key={item.id}>
                    <button
                      type="button"
                      role="tab"
                      id={`tab-${item.id}`}
                      aria-selected={isActive}
                      aria-controls="experience-panel"
                      onClick={() => select(i, true)}
                      className={`group relative flex w-full items-start gap-4 rounded-2xl border p-4 pl-3 text-left transition-all duration-300 ${
                        isActive
                          ? 'border-gold/40 bg-ivory shadow-[0_18px_40px_-28px_rgba(24,36,58,0.5)]'
                          : 'border-transparent hover:bg-ivory/60'
                      }`}
                    >
                      <span
                        className={`relative z-10 flex h-[34px] w-[34px] shrink-0 items-center justify-center rounded-full border transition-colors duration-300 ${
                          isActive
                            ? 'border-navy bg-navy text-gold-soft'
                            : 'border-sand bg-cream text-taupe group-hover:text-navy'
                        }`}
                      >
                        <Icon className="h-4 w-4" strokeWidth={1.8} />
                      </span>
                      <span className="min-w-0 flex-1">
                        <span className="text-[11px] font-semibold uppercase tracking-[0.18em] text-gold">{item.period}</span>
                        <span className={`mt-1 block font-serif text-lg leading-snug ${isActive ? 'text-navy' : 'text-ink/80'}`}>
                          {item.role}
                        </span>
                        <span className="mt-0.5 block text-sm text-muted">{item.company}</span>
                      </span>
                      <ArrowRight
                        className={`mt-6 hidden h-4 w-4 shrink-0 transition-all duration-300 lg:block ${
                          isActive ? 'translate-x-0 text-gold opacity-100' : '-translate-x-2 opacity-0'
                        }`}
                      />
                    </button>
                  </li>
                );
              })}
            </ol>
          </Reveal>

          {/* Detail panel */}
          <Reveal delay={120} className="lg:col-span-7">
            <div ref={panelRef} className="scroll-mt-28">
              <article
                key={job.id}
                id="experience-panel"
                role="tabpanel"
                aria-labelledby={`tab-${job.id}`}
                className="card animate-panel relative overflow-hidden p-7 sm:p-10"
              >
                <JobIcon
                  className="pointer-events-none absolute -top-6 -right-6 h-44 w-44 text-beige"
                  strokeWidth={0.8}
                  aria-hidden="true"
                />

                <div className="relative">
                  <div className="flex flex-wrap items-center gap-3">
                    <span className="rounded-full bg-emerald-soft px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.14em] text-emerald">
                      {job.category}
                    </span>
                    <span className="inline-flex items-center gap-1.5 text-sm text-muted">
                      <CalendarDays className="h-4 w-4 text-gold" /> {job.period}
                    </span>
                  </div>

                  <h3 className="mt-6 font-serif text-3xl leading-tight font-semibold text-navy sm:text-[2.1rem]">{job.role}</h3>
                  <p className="mt-2 text-base font-medium text-taupe">{job.company}</p>

                  <div className="my-8 h-px bg-gradient-to-r from-gold/50 via-sand to-transparent" />

                  <ul className="space-y-4">
                    {job.highlights.map((point) => (
                      <li key={point} className="flex gap-3.5 text-[15px] leading-relaxed text-ink/85">
                        <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-emerald" strokeWidth={1.8} />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="mt-8 flex flex-wrap gap-2">
                    {job.tags.map((tag) => (
                      <span key={tag} className="rounded-full border border-sand bg-cream px-3.5 py-1.5 text-xs font-medium text-navy">
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="mt-10 flex items-center justify-between border-t border-sand/70 pt-6">
                    <span className="text-xs font-semibold uppercase tracking-[0.2em] text-taupe">
                      Role {String(index + 1).padStart(2, '0')} / {String(EXPERIENCE.length).padStart(2, '0')}
                    </span>
                    <div className="flex gap-2">
                      <button
                        type="button"
                        onClick={() => select((index - 1 + EXPERIENCE.length) % EXPERIENCE.length)}
                        className="flex h-10 w-10 items-center justify-center rounded-full border border-sand text-navy transition hover:border-gold hover:text-gold"
                        aria-label="Previous role"
                      >
                        <ArrowLeft className="h-4 w-4" />
                      </button>
                      <button
                        type="button"
                        onClick={() => select((index + 1) % EXPERIENCE.length)}
                        className="flex h-10 w-10 items-center justify-center rounded-full bg-navy text-cream transition hover:bg-navy-soft"
                        aria-label="Next role"
                      >
                        <ArrowRight className="h-4 w-4" />
                      </button>
                    </div>
                  </div>
                </div>
              </article>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
