import { useState } from 'react';
import { profile } from '../data/content';

export default function Hero() {
  const [hasPhoto, setHasPhoto] = useState(true);
  const initials = profile.name.split(' ').map((n) => n[0]).join('');
  return (
    <section id="home" className="relative isolate flex min-h-screen items-center overflow-hidden pb-16 pt-28">
      {/* animated aurora in the brand colours */}
      <div aria-hidden="true" className="absolute inset-0 -z-10">
        <div className="absolute -left-24 -top-32 h-[28rem] w-[28rem] animate-drift rounded-full bg-brand/30 blur-3xl" />
        <div className="absolute bottom-0 right-0 h-[26rem] w-[26rem] animate-drift rounded-full bg-deep blur-3xl [animation-delay:-8s]" />
        <div className="absolute right-1/3 top-1/3 h-48 w-48 animate-drift rounded-full bg-spark/10 blur-3xl [animation-delay:-4s]" />
      </div>

      <div className="mx-auto grid max-w-6xl items-center gap-14 px-5 md:grid-cols-[1.3fr_1fr]">
        <div>
          <p className="flex items-center gap-2 font-medium text-brand">
            <span className="h-2 w-2 animate-pulseDot rounded-full bg-spark" aria-hidden="true" />
            {profile.role}, {profile.location}
          </p>
          <h1 className="mt-4 font-display text-4xl font-bold leading-[1.05] sm:text-6xl">{profile.headline}</h1>
          <p className="mt-6 max-w-xl text-lg text-white/70">{profile.pitch}</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href="#projects" className="btn-primary">View my projects</a>
            <a href="#contact" className="btn-ghost">Start a conversation</a>
          </div>
        </div>

        {/* Avatar: drop your photo at frontend/public/avatar.jpg */}
        <div className="relative mx-auto h-64 w-64 sm:h-80 sm:w-80">
          <div aria-hidden="true" className="absolute inset-0 animate-ring rounded-full bg-[conic-gradient(from_0deg,#2A9DA6,#044F58,#1C7C84,#F67608,#2A9DA6)] blur-[2px]" />
          <div aria-hidden="true" className="absolute inset-0 animate-orbit">
            <span className="absolute -top-1.5 left-1/2 h-4 w-4 -translate-x-1/2 rounded-full bg-spark shadow-[0_0_18px_#F67608]" />
          </div>
          <div className="absolute inset-[6px] grid place-items-center overflow-hidden rounded-full bg-deep">
            {hasPhoto ? (
              <img src="/images/projects/OgoOmo.jpg" alt={`Portrait of ${profile.name}`} className="h-full w-full object-cover" onError={() => setHasPhoto(false)} />
            ) : (
              <span className="font-display text-7xl font-bold text-brand" aria-label={`${profile.name} avatar placeholder`}>{initials}</span>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
