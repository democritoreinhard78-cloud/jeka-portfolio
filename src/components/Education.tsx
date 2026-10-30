import { GraduationCap, Sigma } from 'lucide-react';
import { EDUCATION } from '../data/profile';
import { Reveal } from './Reveal';
import { SectionHeading } from './SectionHeading';

const ACADEMIC_EDGE = ['Quantitative reasoning', 'Statistics & data interpretation', 'Logical problem-solving', 'Attention to detail'];

export function Education() {
  return (
    <section id="education" className="relative bg-ivory py-24 sm:py-28">
      <div className="container-x">
        <SectionHeading
          eyebrow="Education"
          title={
            <>
              An academic foundation in <em>logic &amp; analysis</em>
            </>
          }
        />

        <div className="mt-14 grid gap-8 lg:grid-cols-12">
          <ol className="relative space-y-6 lg:col-span-8">
            {EDUCATION.map((item, i) => {
              const Icon = item.icon;
              return (
                <Reveal key={item.degree} delay={i * 120}>
                  <li className="card group flex flex-col gap-6 p-7 transition-all duration-500 hover:border-gold/50 sm:flex-row sm:p-8">
                    <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-navy text-gold-soft">
                      <Icon className="h-6 w-6" strokeWidth={1.6} />
                    </div>
                    <div className="flex-1">
                      <div className="flex flex-wrap items-center justify-between gap-3">
                        <span className="rounded-full bg-beige px-3 py-1 text-xs font-semibold tracking-wide text-taupe">
                          {item.period}
                        </span>
                        {i === 0 && (
                          <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-emerald">
                            <GraduationCap className="h-4 w-4" /> Graduate
                          </span>
                        )}
                      </div>
                      <h3 className="mt-4 font-serif text-2xl leading-snug font-semibold text-navy">{item.degree}</h3>
                      <p className="mt-1 font-medium text-gold">{item.school}</p>
                      <p className="mt-4 text-sm leading-relaxed text-muted">{item.note}</p>
                    </div>
                  </li>
                </Reveal>
              );
            })}
          </ol>

          <Reveal delay={200} className="lg:col-span-4">
            <aside className="relative h-full overflow-hidden rounded-3xl bg-beige p-8">
              <Sigma className="pointer-events-none absolute -right-8 -bottom-8 h-48 w-48 text-sand" strokeWidth={1} aria-hidden="true" />
              <div className="relative">
                <p className="text-xs font-semibold uppercase tracking-[0.24em] text-gold">The Mathematics Edge</p>
                <p className="mt-4 font-serif text-2xl leading-snug text-navy">
                  Bringing a mathematician&apos;s rigor to finance, HR &amp; operations.
                </p>
                <ul className="mt-6 space-y-3">
                  {ACADEMIC_EDGE.map((point) => (
                    <li key={point} className="flex items-center gap-3 text-sm text-ink/80">
                      <span className="h-1.5 w-1.5 rounded-full bg-emerald" />
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
            </aside>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
