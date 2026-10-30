import { ArrowUp } from 'lucide-react';
import { NAV_LINKS, profile } from '../data/profile';

export function Footer() {
  return (
    <footer className="bg-navy text-cream/70">
      <div className="container-x flex flex-col gap-8 py-12 md:flex-row md:items-center md:justify-between">
        <div className="flex items-center gap-3">
          <span className="flex h-10 w-10 items-center justify-center rounded-full border border-gold-soft/40 font-serif text-[15px] italic text-gold-soft">
            {profile.initials}
          </span>
          <div>
            <p className="font-serif text-lg text-cream">{profile.name}</p>
            <p className="text-xs">Finance · HR · Property Operations</p>
          </div>
        </div>

        <nav aria-label="Footer">
          <ul className="flex flex-wrap gap-x-6 gap-y-2 text-sm">
            {NAV_LINKS.map((link) => (
              <li key={link.id}>
                <a href={`#${link.id}`} className="transition-colors hover:text-gold-soft">
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <a
          href="#home"
          className="inline-flex h-11 w-11 items-center justify-center self-start rounded-full border border-white/15 text-cream transition hover:border-gold-soft hover:text-gold-soft md:self-auto"
          aria-label="Back to top"
        >
          <ArrowUp className="h-4 w-4" />
        </a>
      </div>

      <div className="border-t border-white/10">
        <div className="container-x flex flex-col gap-2 py-6 text-xs sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} {profile.name}. All rights reserved.</p>
          <p>{profile.location}</p>
        </div>
      </div>
    </footer>
  );
}
