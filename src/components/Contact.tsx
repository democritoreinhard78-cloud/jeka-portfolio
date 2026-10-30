import { useState, type FormEvent } from 'react';
import { CheckCircle2, Facebook, Mail, MapPin, Phone, Send } from 'lucide-react';
import { profile } from '../data/profile';
import { Reveal } from './Reveal';
import { SectionHeading } from './SectionHeading';

const CONTACTS = [
  { label: 'Email', value: profile.email, href: `mailto:${profile.email}`, icon: Mail },
  { label: 'Phone', value: profile.phone, href: profile.phoneHref, icon: Phone },
  { label: 'Location', value: profile.shortLocation, icon: MapPin },
  { label: 'Facebook', value: profile.facebookLabel, href: profile.facebookUrl, icon: Facebook, external: true },
];

export function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [sent, setSent] = useState(false);

  const update = (key: keyof typeof form) => (e: { target: { value: string } }) =>
    setForm((prev) => ({ ...prev, [key]: e.target.value }));

  // No backend required: composes a pre-filled email in the visitor's mail app.
  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Portfolio inquiry from ${form.name}`);
    const body = encodeURIComponent(`${form.message}\n\n— ${form.name}\n${form.email}`);
    window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`;
    setSent(true);
  };

  return (
    <section id="contact" className="relative overflow-hidden bg-cream py-24 sm:py-28">
      <div className="pointer-events-none absolute -right-40 bottom-0 h-[420px] w-[420px] rounded-full bg-gold-soft/25 blur-3xl" aria-hidden="true" />

      <div className="container-x relative grid gap-14 lg:grid-cols-12">
        <div className="lg:col-span-5">
          <SectionHeading
            eyebrow="Contact"
            title={
              <>
                Let&apos;s work <em>together</em>
              </>
            }
            description="Looking for a dependable finance, HR, or property operations professional? I'd be glad to hear about your team and how I can help."
          />

          <ul className="mt-10 space-y-3">
            {CONTACTS.map((item, i) => {
              const Icon = item.icon;
              const content = (
                <>
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-ivory text-navy shadow-sm transition-colors group-hover:bg-navy group-hover:text-gold-soft">
                    <Icon className="h-[18px] w-[18px]" strokeWidth={1.7} />
                  </span>
                  <span className="min-w-0">
                    <span className="block text-[11px] font-semibold uppercase tracking-[0.18em] text-taupe">{item.label}</span>
                    <span className="block truncate font-medium text-navy">{item.value}</span>
                  </span>
                </>
              );
              return (
                <Reveal key={item.label} delay={i * 80}>
                  <li>
                    {item.href ? (
                      <a
                        href={item.href}
                        target={item.external ? '_blank' : undefined}
                        rel={item.external ? 'noopener noreferrer' : undefined}
                        className="group flex items-center gap-4 rounded-2xl border border-transparent p-2 transition hover:border-sand hover:bg-ivory/70"
                      >
                        {content}
                      </a>
                    ) : (
                      <div className="group flex items-center gap-4 p-2">{content}</div>
                    )}
                  </li>
                </Reveal>
              );
            })}
          </ul>
        </div>

        <Reveal delay={150} className="lg:col-span-7">
          <div className="card p-7 sm:p-10">
            {sent ? (
              <div className="flex min-h-[380px] flex-col items-center justify-center text-center" role="status">
                <span className="flex h-16 w-16 items-center justify-center rounded-full bg-emerald-soft text-emerald">
                  <CheckCircle2 className="h-8 w-8" strokeWidth={1.6} />
                </span>
                <h3 className="mt-6 font-serif text-3xl font-semibold text-navy">Thank you, {form.name.split(' ')[0]}!</h3>
                <p className="mt-3 max-w-sm text-sm leading-relaxed text-muted">
                  Your email app should open with your message ready to send. You can also reach me directly at{' '}
                  <a href={`mailto:${profile.email}`} className="font-medium text-gold underline-offset-4 hover:underline">
                    {profile.email}
                  </a>
                  .
                </p>
                <button
                  type="button"
                  onClick={() => {
                    setSent(false);
                    setForm({ name: '', email: '', message: '' });
                  }}
                  className="btn btn-outline mt-8"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <h3 className="font-serif text-2xl font-semibold text-navy">Send a quick message</h3>
                  <p className="mt-1 text-sm text-muted">I usually respond within one business day.</p>
                </div>

                <div className="grid gap-5 sm:grid-cols-2">
                  <label className="block">
                    <span className="mb-2 block text-xs font-semibold uppercase tracking-[0.16em] text-taupe">Name</span>
                    <input required type="text" autoComplete="name" value={form.name} onChange={update('name')} placeholder="Your full name" className="field" />
                  </label>
                  <label className="block">
                    <span className="mb-2 block text-xs font-semibold uppercase tracking-[0.16em] text-taupe">Email</span>
                    <input required type="email" autoComplete="email" value={form.email} onChange={update('email')} placeholder="you@company.com" className="field" />
                  </label>
                </div>

                <label className="block">
                  <span className="mb-2 block text-xs font-semibold uppercase tracking-[0.16em] text-taupe">Message</span>
                  <textarea
                    required
                    rows={6}
                    value={form.message}
                    onChange={update('message')}
                    placeholder="Tell me about the role or project…"
                    className="field resize-none"
                  />
                </label>

                <button type="submit" className="btn btn-primary group w-full sm:w-auto">
                  Send Message
                  <Send className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </button>
              </form>
            )}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
