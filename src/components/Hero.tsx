import { ArrowRight, MapPin } from 'lucide-react';
import { profile } from '../data/profile';
import { Portrait } from './Portrait';
import { Reveal } from './Reveal';

const STATS = [
  { value: '4', label: 'Professional roles' },
  { value: 'BS', label: 'Mathematics graduate' },
  { value: '4', label: 'Statutory agencies handled' },
];

export function Hero() {
  return (
    <section id="home" className="relative overflow-hidden pt-[76px]">
      {/* Background accents */}
      <div className="grid-pattern pointer-events-none absolute inset-0 [mask-image:radial-gradient(ellipse_at_top,black_30%,transparent_75%)]" aria-hidden="true" />
      <div className="pointer-events-none absolute -top-32 -right-32 h-[480px] w-[480px] rounded-full bg-gold-soft/30 blur-3xl" aria-hidden="true" />
      <div className="pointer-events-none absolute top-1/2 -left-40 h-[420px] w-[420px] rounded-full bg-emerald-soft/70 blur-3xl" aria-hidden="true" />

      <div className="container-x relative grid items-center gap-16 py-16 sm:py-20 lg:grid-cols-12 lg:gap-10 lg:py-28">
        <div className="lg:col-span-7">
          <Reveal>
            <span className="inline-flex items-center gap-2 rounded-full border border-sand bg-ivory/80 px-4 py-2 text-xs font-medium text-muted shadow-sm backdrop-blur">
              <MapPin className="h-3.5 w-3.5 text-emerald" />
              {profile.location}
            </span>
          </Reveal>

          <Reveal delay={80}>
            <p className="mt-8 text-sm font-medium text-taupe">
              Hello, I&apos;m <span className="font-semibold text-navy">{profile.name}</span>
            </p>
            <h1 className="mt-3 font-serif text-[2.6rem] leading-[1.08] font-semibold tracking-tight text-navy sm:text-6xl lg:text-[4.1rem]">
              Finance, HR &amp; <em className="font-medium text-gold">Property Operations</em> Specialist
            </h1>
          </Reveal>

          <Reveal delay={160}>
            <p className="mt-7 max-w-xl text-base leading-relaxed text-muted sm:text-lg">{profile.subheadline}</p>
          </Reveal>

          <Reveal delay={240}>
            <div className="mt-10 flex flex-col gap-3 sm:flex-row">
              <a href="#experience" className="btn btn-primary group">
                View Experience
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </a>
              <a href="#contact" className="btn btn-outline">
                Contact Me
              </a>
            </div>
          </Reveal>

          <Reveal delay={320}>
            <dl className="mt-14 grid max-w-lg grid-cols-3 divide-x divide-sand border-t border-sand pt-8">
              {STATS.map((stat) => (
                <div key={stat.label} className="px-4 first:pl-0">
                  <dt className="sr-only">{stat.label}</dt>
                  <dd className="font-serif text-3xl font-semibold text-navy">{stat.value}</dd>
                  <dd className="mt-1 text-xs leading-snug text-muted">{stat.label}</dd>
                </div>
              ))}
            </dl>
          </Reveal>
        </div>

        <Reveal delay={200} className="lg:col-span-5">
          <Portrait />
        </Reveal>
      </div>
    </section>
  );
}
