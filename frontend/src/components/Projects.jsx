
import { projects } from '../data/content';

export default function Projects() {
  return (
    <section id="projects" className="section">
      <h2 className="font-display text-3xl font-bold sm:text-4xl">
        Projects
      </h2>

      <p className="mt-3 max-w-xl text-white/70">
        A selection of things I have designed and built.
      </p>

      <ul className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {projects.map((p) => (
          <li
            key={p.title}
            className="glass flex flex-col overflow-hidden rounded-xl transition hover:border-brand/60"
          >
            {/* Project image */}
            <div className="aspect-[16/10] w-full overflow-hidden bg-deep">
              <img
                src={p.image || '/images/projects/project-placeholder.png'}
                alt={`${p.title} project preview`}
                className="h-full w-full object-cover transition duration-300 hover:scale-105"
                loading="lazy"
                onError={(e) => {
                  e.currentTarget.onerror = null;
                  e.currentTarget.src = '/images/projects/project-placeholder.png';
                }}
              />
            </div>

            {/* Project content */}
            <div className="flex flex-1 flex-col p-5">
              <h3 className="font-display text-lg font-bold">
                {p.title}
              </h3>

              <p className="mt-2 flex-1 text-sm text-white/70">
                {p.desc}
              </p>

              {/* Technology tags */}
              <ul className="mt-4 flex flex-wrap gap-2" aria-label="Tech stack">
                {p.tags.map((t) => (
                  <li
                    key={t}
                    className="rounded-full bg-deep px-2.5 py-1 text-xs text-brand"
                  >
                    {t}
                  </li>
                ))}
              </ul>

              {/* Project links */}
              <div className="mt-5 flex flex-wrap gap-4 text-sm font-bold">
                <a
                  href={p.live}
                  target="https://aasetech.netlify.app/dashboard"
                  rel="noopener noreferrer"
                  className="text-spark hover:underline"
                  aria-label={`${p.title} live demo`} 
                >
                  Live demo ↗
                </a>

                <a
                  href={p.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/80 hover:underline"
                  aria-label={`${p.title} GitHub repository`}
                >
                  GitHub ↗
                </a>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}
