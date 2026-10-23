import { useState } from 'react';
import { nav, profile } from '../data/content';
import CvButton from './CvButton';

export default function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <header className="fixed inset-x-0 top-0 z-40 border-b border-white/10 bg-ink/70 backdrop-blur-md">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-5 py-3" aria-label="Main">
        <a href="#home" className="font-display text-lg font-bold">
          {profile.name.split(' ')[0]}<span className="text-spark">.</span>
        </a>
        <ul className="hidden items-center gap-8 md:flex">
          {nav.map((l) => (
            <li key={l.href}><a href={l.href} className="text-white/75 transition hover:text-brand">{l.label}</a></li>
          ))}
          <li><CvButton className="btn-spark !px-5 !py-2" /></li>
        </ul>
        <button
          className="rounded-lg border border-white/20 px-3 py-2 md:hidden"
          aria-expanded={open}
          aria-controls="mobile-menu"
          onClick={() => setOpen(!open)}
        >
          {open ? 'Close' : 'Menu'}
        </button>
      </nav>
      {open && (
        <ul id="mobile-menu" className="space-y-1 border-t border-white/10 bg-ink px-5 py-4 md:hidden">
          {nav.map((l) => (
            <li key={l.href}><a href={l.href} onClick={() => setOpen(false)} className="block py-2 text-lg">{l.label}</a></li>
          ))}
          <li className="pt-2"><CvButton /></li>
        </ul>
      )}
    </header>
  );
}
