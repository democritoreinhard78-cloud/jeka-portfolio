import { Languages } from 'lucide-react';
import { CORE_SKILLS, LANGUAGES, TOOLS } from '../data/profile';
import { Reveal } from './Reveal';
import { SectionHeading } from './SectionHeading';

export function Skills() {
  return (
    <section id="skills" className="relative overflow-hidden bg-navy py-24 text-cream sm:py-28">
      <div className="pointer-events-none absolute -top-40 right-0 h-[460px] w-[460px] rounded-full bg-gold/10 blur-3xl" aria-hidden="true" />
      <div className="pointer-events-none absolute bottom-0 -left-40 h-[400px] w-[400px] rounded-full bg-emerald/20 blur-3xl" aria-hidden="true" />

      <div className="container-x relative">
        <SectionHeading
          tone="dark"
          eyebrow="Core Competencies & Tech Stack"
          title={
            <>
              Skills that keep operations <em>accurate &amp; compliant</em>
            </>
          }
        />

        <div className="mt-14 grid gap-10 lg:grid-cols-12">
          {/* Core skills */}
          <div className="lg:col-span-7">
            <Reveal>
              <h3 className="text-xs font-semibold uppercase tracking-[0.24em] text-gold-soft">Core Skills</h3>
            </Reveal>
            <ul className="mt-6 space-y-3">
              {CORE_SKILLS.map((skill, i) => {
                const Icon = skill.icon;
                return (
                  <Reveal key={skill.title} delay={i * 80}>
                    <li className="group flex items-center gap-5 rounded-2xl border border-white/10 bg-white/[0.03] p-5 transition-all duration-300 hover:border-gold-soft/40 hover:bg-white/[0.06]">
                      <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-gold-soft/10 text-gold-soft transition-colors group-hover:bg-gold-soft group-hover:text-navy">
                        <Icon className="h-5 w-5" strokeWidth={1.7} />
                      </span>
                      <div className="min-w-0 flex-1">
                        <p className="font-medium text-cream">{skill.title}</p>
                        <p className="mt-0.5 text-sm text-cream/55">{skill.description}</p>
                      </div>
                      <span className="hidden font-serif text-sm text-cream/25 sm:block">0{i + 1}</span>
                    </li>
                  </Reveal>
                );
              })}
            </ul>
          </div>

          {/* Tools & languages */}
          <div className="space-y-10 lg:col-span-5">
            <div>
              <Reveal>
                <h3 className="text-xs font-semibold uppercase tracking-[0.24em] text-gold-soft">Technical Tools</h3>
              </Reveal>
              <div className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-2">
                {TOOLS.map((tool, i) => {
                  const Icon = tool.icon;
                  return (
                    <Reveal key={tool.title} delay={i * 80}>
                      <div className="group h-full rounded-2xl border border-white/10 bg-cream p-5 text-navy shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md">
                        <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-ivory shadow-xs border border-sand/40 transition-transform duration-300 group-hover:scale-105">
                          <Icon className="h-6 w-6" />
                        </div>
                        <p className="mt-4 font-serif text-lg leading-snug font-semibold">{tool.title}</p>
                        <p className="mt-1 text-xs text-muted">{tool.description}</p>
                      </div>
                    </Reveal>
                  );
                })}
              </div>
            </div>

            <Reveal>
              <div className="rounded-2xl border border-gold-soft/25 p-6">
                <div className="flex items-center gap-3">
                  <Languages className="h-5 w-5 text-gold-soft" strokeWidth={1.7} />
                  <h3 className="text-xs font-semibold uppercase tracking-[0.24em] text-gold-soft">Languages</h3>
                </div>
                <div className="mt-5 flex flex-wrap gap-3">
                  {LANGUAGES.map((lang) => (
                    <span key={lang} className="rounded-full border border-white/15 bg-white/5 px-5 py-2 font-serif text-lg text-cream">
                      {lang}
                    </span>
                  ))}
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
