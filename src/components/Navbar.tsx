import { useEffect, useState } from 'react';
import { Download, Menu, X } from 'lucide-react';
import { NAV_LINKS, profile } from '../data/profile';
import { useActiveSection } from '../hooks/useActiveSection';

const SECTION_IDS = ['home', ...NAV_LINKS.map((l) => l.id)];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const active = useActiveSection(SECTION_IDS);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    const onResize = () => window.innerWidth >= 1024 && setOpen(false);
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, [open]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled || open
          ? 'border-b border-sand/70 bg-cream/85 shadow-[0_10px_30px_-20px_rgba(24,36,58,0.35)] backdrop-blur-xl'
          : 'border-b border-transparent bg-transparent'
      }`}
    >
      <nav className="container-x flex h-[76px] items-center justify-between" aria-label="Primary">
        <a href="#home" className="group flex items-center gap-3" onClick={() => setOpen(false)}>
          <span className="flex h-10 w-10 items-center justify-center rounded-full bg-navy font-serif text-[15px] italic text-gold-soft transition-transform duration-500 group-hover:rotate-[360deg]">
            {profile.initials}
          </span>
          <span className="font-serif text-lg font-semibold tracking-tight text-navy">{profile.shortName}</span>
        </a>

        <ul className="hidden items-center gap-1 lg:flex">
          {NAV_LINKS.map((link) => {
            const isActive = active === link.id;
            return (
              <li key={link.id}>
                <a
                  href={`#${link.id}`}
                  aria-current={isActive ? 'true' : undefined}
                  className={`relative rounded-full px-4 py-2 text-sm font-medium transition-colors ${
                    isActive ? 'text-navy' : 'text-muted hover:text-navy'
                  }`}
                >
                  {link.label}
                  <span
                    className={`absolute inset-x-4 -bottom-0.5 h-px origin-left bg-gold transition-transform duration-300 ${
                      isActive ? 'scale-x-100' : 'scale-x-0'
                    }`}
                  />
                </a>
              </li>
            );
          })}
        </ul>

        <div className="hidden items-center gap-3 lg:flex">
          <a
            href={profile.cvUrl}
            download="Jeka-Mae-Taping-CV.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-outline !px-5 !py-2.5"
          >
            <Download className="h-4 w-4" /> Download CV
          </a>
          <a href="#contact" className="btn btn-primary !px-5 !py-2.5">
            Get in Touch
          </a>
        </div>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className="flex h-11 w-11 items-center justify-center rounded-full border border-sand bg-ivory text-navy lg:hidden"
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
          aria-controls="mobile-menu"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </nav>

      {/* Mobile menu */}
      <div
        id="mobile-menu"
        className={`overflow-hidden transition-[max-height,opacity] duration-500 lg:hidden ${
          open ? 'max-h-[calc(100vh-76px)] opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="container-x pb-8">
          <ul className="divide-y divide-sand/70 border-t border-sand/70">
            {NAV_LINKS.map((link) => (
              <li key={link.id}>
                <a
                  href={`#${link.id}`}
                  onClick={() => setOpen(false)}
                  className={`flex items-center justify-between py-4 font-serif text-xl ${
                    active === link.id ? 'text-gold' : 'text-navy'
                  }`}
                >
                  {link.label}
                  <span className="text-xs font-sans text-taupe">0{NAV_LINKS.indexOf(link) + 1}</span>
                </a>
              </li>
            ))}
          </ul>
          <div className="mt-6 grid gap-3 sm:grid-cols-2">
            <a
              href={profile.cvUrl}
              download="Jeka-Mae-Taping-CV.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-outline"
            >
              <Download className="h-4 w-4" /> Download CV
            </a>
            <a href="#contact" onClick={() => setOpen(false)} className="btn btn-primary">
              Get in Touch
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
