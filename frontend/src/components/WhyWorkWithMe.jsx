
const strengths = [
  {
    number: "01",
    title: "Quality-focused development",
    description:
      "I write organized, maintainable code and build interfaces with consistency, usability, and long-term improvements in mind.",
    icon: "✦",
  },
  {
    number: "02",
    title: "Responsive by design",
    description:
      "I consider different screen sizes and user needs from the beginning, rather than treating mobile support as an afterthought.",
    icon: "⌘",
  },
  {
    number: "03",
    title: "A problem-solving mindset",
    description:
      "I enjoy breaking complex challenges into manageable steps, debugging issues, and finding practical solutions.",
    icon: "↗",
  },
  {
    number: "04",
    title: "Continuous improvement",
    description:
      "I stay curious, learn new tools, and refine my approach to deliver better digital experiences with every project.",
    icon: "↻",
  },
];

const developmentSteps = [
  {
    number: "01",
    title: "Understand & Plan",
    description:
      "I identify the project goals, target audience, required features, and technical requirements before development begins.",
  },
  {
    number: "02",
    title: "Design & Build",
    description:
      "I translate ideas and designs into responsive interfaces, reusable components, and functional user experiences.",
  },
  {
    number: "03",
    title: "Test & Refine",
    description:
      "I test interactions, check responsiveness, troubleshoot issues, and improve usability and performance.",
  },
  {
    number: "04",
    title: "Launch & Improve",
    description:
      "I prepare the project for deployment and support further refinements as requirements and user needs evolve.",
  },
];

export default function WhyWorkWithMe() {
  return (
    <>
      {/* Why Work With Me */}
      <section id="why-work-with-me" className="section">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 max-w-3xl">
            <span className="text-sm font-bold uppercase tracking-[0.25em] text-spark">
              Why work with me?
            </span>

            <h2 className="mt-4 font-display text-3xl font-bold leading-tight sm:text-4xl lg:text-5xl">
              I care about the details that{" "}
              <span className="text-spark">make a difference.</span>
            </h2>

            <p className="mt-5 max-w-2xl text-base leading-8 text-white/70">
              I combine thoughtful design, clean code, and a practical
              problem-solving approach to build digital experiences that
              look great, work smoothly, and serve users effectively.
            </p>
          </div>

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {strengths.map((strength) => (
              <article
                key={strength.number}
                className="glass group rounded-2xl border border-white/10 p-6 transition duration-300 hover:-translate-y-2 hover:border-brand/60"
              >
                <div className="flex items-center justify-between">
                  <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-brand/20 text-2xl text-spark">
                    {strength.icon}
                  </span>

                  <span className="text-sm font-semibold tracking-widest text-white/35">
                    {strength.number}
                  </span>
                </div>

                <h3 className="mt-6 font-display text-xl font-bold leading-snug">
                  {strength.title}
                </h3>

                <p className="mt-3 text-sm leading-7 text-white/70">
                  {strength.description}
                </p>

                <div className="mt-6 h-1 w-12 rounded-full bg-spark transition-all duration-300 group-hover:w-20" />
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* My Development Process */}
      <section id="development-process" className="section">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 max-w-3xl">
            <span className="text-sm font-bold uppercase tracking-[0.25em] text-spark">
              How I work
            </span>

            <h2 className="mt-4 font-display text-3xl font-bold leading-tight sm:text-4xl lg:text-5xl">
              My development <span className="text-spark">process.</span>
            </h2>

            <p className="mt-5 text-base leading-8 text-white/70">
              Every successful project starts with a clear plan. My
              structured workflow helps transform ideas into responsive,
              functional, and user-friendly digital products.
            </p>
          </div>

          <div className="relative grid gap-6 md:grid-cols-2">
            {developmentSteps.map((step) => (
              <article
                key={step.number}
                className="glass relative rounded-2xl border border-white/10 p-6 transition duration-300 hover:border-brand/60 sm:p-8"
              >
                <span className="font-display text-5xl font-bold text-spark/80">
                  {step.number}
                </span>

                <h3 className="mt-5 font-display text-xl font-bold sm:text-2xl">
                  {step.title}
                </h3>

                <p className="mt-3 leading-7 text-white/70">
                  {step.description}
                </p>
              </article>
            ))}
          </div>

          <div className="mt-12 flex flex-col items-start justify-between gap-5 rounded-2xl border border-brand/30 bg-brand/10 p-6 sm:flex-row sm:items-center sm:p-8">
            <div>
              <h3 className="font-display text-xl font-bold sm:text-2xl">
                Have an idea worth building?
              </h3>

              <p className="mt-2 text-sm leading-7 text-white/70">
                Let's discuss your project and turn your vision into a
                meaningful digital experience.
              </p>
            </div>

            <a
              href="#contact"
              className="inline-flex shrink-0 items-center gap-2 rounded-lg bg-spark px-6 py-3 font-bold text-deep transition hover:opacity-90"
            >
              Get in touch <span aria-hidden="true">↗</span>
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
