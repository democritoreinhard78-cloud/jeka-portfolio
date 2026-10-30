import { ATTRIBUTES, profile } from '../data/profile';
import { Reveal } from './Reveal';
import { SectionHeading } from './SectionHeading';

export function About() {
  return (
    <section id="about" className="relative bg-ivory py-24 sm:py-28">
      <div className="container-x">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-5">
            <SectionHeading
              eyebrow="About Me"
              title={
                <>
                  Precision in numbers, <em>care</em> in people.
                </>
              }
            />
          </div>

          <Reveal delay={100} className="lg:col-span-7">
            <p className="font-serif text-xl leading-relaxed text-navy sm:text-2xl sm:leading-relaxed">
              <span className="float-left mt-1 mr-3 font-serif text-6xl leading-[0.8] font-semibold text-gold">D</span>
              {profile.bio.slice(1)}
            </p>
          </Reveal>
        </div>

        <div className="mt-16 grid gap-6 md:grid-cols-3">
          {ATTRIBUTES.map((attr, i) => {
            const Icon = attr.icon;
            return (
              <Reveal key={attr.title} delay={i * 120}>
                <article className="card group relative h-full overflow-hidden p-8 transition-all duration-500 hover:-translate-y-1.5 hover:border-gold/50 hover:shadow-[0_30px_60px_-30px_rgba(24,36,58,0.45)]">
                  <span className="absolute top-6 right-7 font-serif text-sm text-sand transition-colors group-hover:text-gold">
                    0{i + 1}
                  </span>
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-beige text-navy transition-colors duration-500 group-hover:bg-navy group-hover:text-gold-soft">
                    <Icon className="h-6 w-6" strokeWidth={1.6} />
                  </div>
                  <h3 className="mt-7 font-serif text-2xl font-semibold text-navy">{attr.title}</h3>
                  <p className="mt-2 text-xs font-semibold uppercase tracking-[0.16em] text-emerald">{attr.tag}</p>
                  <p className="mt-4 text-sm leading-relaxed text-muted">{attr.description}</p>
                  <span className="absolute bottom-0 left-0 h-[3px] w-0 bg-gradient-to-r from-gold to-emerald transition-all duration-700 group-hover:w-full" />
                </article>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
