import { nav, profile, socials } from '../data/content';

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-deep/30">
      <div className="mx-auto flex max-w-6xl flex-col gap-6 px-5 py-10 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="font-display text-lg font-bold">{profile.name}<span className="text-spark">.</span></p>
          <p className="text-sm text-white/60">Frontend Developer | Building thoughtful digital experiences. {profile.location}.</p>
        </div>
        <nav aria-label="Footer"><ul className="flex flex-wrap gap-5 text-sm">
          {[...nav.map((n) => [n.label, n.href]), ...socials.slice(0, 2).map((s) => [s.label, s.href])].map(([l, h]) => (
            <li key={l}><a href={h} className="text-white/70 hover:text-brand">{l}</a></li>
          ))}
        </ul></nav>
      </div>
      <p className="border-t border-white/10 py-4 text-center text-xs text-white/50">&copy; {new Date().getFullYear()} {profile.name}.Built with passion, precision, and a commitment to continuous improvement. All rights reserved.</p>
    </footer>
  );
}
