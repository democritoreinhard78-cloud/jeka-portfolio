import { useState, type FormEvent } from 'react';
import {
  AlertCircle,
  CheckCircle2,
  Facebook,
  Loader2,
  Mail,
  MapPin,
  Phone,
  Send,
} from 'lucide-react';
import { profile } from '../data/profile';
import { Reveal } from './Reveal';
import { SectionHeading } from './SectionHeading';

const WEB3FORMS_ACCESS_KEY = '784c4f8e-3f58-4258-88fe-89872eaf1b1a';

const CONTACTS = [
  { label: 'Email', value: profile.email, href: `mailto:${profile.email}`, icon: Mail },
  { label: 'Phone', value: profile.phone, href: profile.phoneHref, icon: Phone },
  { label: 'Location', value: profile.shortLocation, icon: MapPin },
  {
    label: 'Facebook',
    value: profile.facebookLabel,
    href: profile.facebookUrl,
    icon: Facebook,
    external: true,
  },
];

export function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const update = (key: keyof typeof form) => (e: { target: { value: string } }) =>
    setForm((prev) => ({ ...prev, [key]: e.target.value }));

  // Directly sends the form data via Web3Forms API to the user's Gmail
  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setStatus('submitting');
    setErrorMessage('');

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({
          access_key: WEB3FORMS_ACCESS_KEY,
          name: form.name,
          email: form.email,
          message: form.message,
          subject: `Portfolio Message from ${form.name}`,
          from_name: 'Jeka Mae Taping Portfolio',
        }),
      });

      const data = await response.json().catch(() => null);

      if (response.ok && data?.success) {
        setStatus('success');
      } else {
        throw new Error(data?.message || 'Failed to send message. Please try again.');
      }
    } catch (err) {
      console.error('Submission error:', err);
      setStatus('error');
      setErrorMessage(
        err instanceof Error
          ? err.message
          : 'Could not send message automatically. Please contact directly via email.',
      );
    }
  };

  const handleReset = () => {
    setStatus('idle');
    setForm({ name: '', email: '', message: '' });
    setErrorMessage('');
  };

  return (
    <section id="contact" className="relative overflow-hidden bg-cream py-24 sm:py-28">
      <div
        className="pointer-events-none absolute -right-40 bottom-0 h-[420px] w-[420px] rounded-full bg-gold-soft/25 blur-3xl"
        aria-hidden="true"
      />

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
                    <span className="block text-[11px] font-semibold uppercase tracking-[0.18em] text-taupe">
                      {item.label}
                    </span>
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
            {status === 'success' ? (
              <div
                className="flex min-h-[380px] flex-col items-center justify-center text-center animate-panel"
                role="status"
              >
                <span className="flex h-16 w-16 items-center justify-center rounded-full bg-emerald-soft text-emerald">
                  <CheckCircle2 className="h-8 w-8" strokeWidth={1.6} />
                </span>
                <h3 className="mt-6 font-serif text-3xl font-semibold text-navy">
                  Thank you, {form.name.split(' ')[0]}!
                </h3>
                <p className="mt-3 max-w-sm text-sm leading-relaxed text-muted">
                  Your message has been sent directly to my email. I will review it
                  and get back to you shortly!
                </p>
                <button type="button" onClick={handleReset} className="btn btn-outline mt-8">
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <h3 className="font-serif text-2xl font-semibold text-navy">
                    Send a quick message
                  </h3>
                  <p className="mt-1 text-sm text-muted">I usually respond within one business day.</p>
                </div>

                {status === 'error' && (
                  <div className="flex items-start gap-3 rounded-2xl border border-red-200 bg-red-50/80 p-4 text-xs text-red-800">
                    <AlertCircle className="h-4 w-4 shrink-0 text-red-600 mt-0.5" />
                    <div>
                      <p className="font-semibold">Unable to send message</p>
                      <p className="mt-0.5">{errorMessage}</p>
                      <a
                        href={`mailto:${profile.email}?subject=Portfolio%20Inquiry%20from%20${encodeURIComponent(
                          form.name,
                        )}&body=${encodeURIComponent(form.message)}`}
                        className="mt-2 inline-block font-semibold text-red-900 underline"
                      >
                        Click here to send directly via your email app ➜
                      </a>
                    </div>
                  </div>
                )}

                <div className="grid gap-5 sm:grid-cols-2">
                  <label className="block">
                    <span className="mb-2 block text-xs font-semibold uppercase tracking-[0.16em] text-taupe">
                      Name
                    </span>
                    <input
                      required
                      type="text"
                      autoComplete="name"
                      disabled={status === 'submitting'}
                      value={form.name}
                      onChange={update('name')}
                      placeholder="Your full name"
                      className="field disabled:opacity-60"
                    />
                  </label>
                  <label className="block">
                    <span className="mb-2 block text-xs font-semibold uppercase tracking-[0.16em] text-taupe">
                      Email
                    </span>
                    <input
                      required
                      type="email"
                      autoComplete="email"
                      disabled={status === 'submitting'}
                      value={form.email}
                      onChange={update('email')}
                      placeholder="you@company.com"
                      className="field disabled:opacity-60"
                    />
                  </label>
                </div>

                <label className="block">
                  <span className="mb-2 block text-xs font-semibold uppercase tracking-[0.16em] text-taupe">
                    Message
                  </span>
                  <textarea
                    required
                    rows={6}
                    disabled={status === 'submitting'}
                    value={form.message}
                    onChange={update('message')}
                    placeholder="Tell me about the role or project…"
                    className="field resize-none disabled:opacity-60"
                  />
                </label>

                <button
                  type="submit"
                  disabled={status === 'submitting'}
                  className="btn btn-primary group w-full sm:w-auto disabled:opacity-75 disabled:cursor-not-allowed"
                >
                  {status === 'submitting' ? (
                    <>
                      <Loader2 className="h-4 w-4 animate-spin text-cream" />
                      <span>Sending message...</span>
                    </>
                  ) : (
                    <>
                      <span>Send Message</span>
                      <Send className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
