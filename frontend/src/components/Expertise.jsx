
import { Link } from "react-router-dom";

const expertiseItems = [
  {
    number: "01",
    symbol: "↔",
    title: "Responsive Web Development",
    description:
      "I build websites that adapt seamlessly to mobile phones, tablets, laptops, and desktop screens, delivering a consistent experience across devices.",
    tags: ["Mobile-first", "Responsive layouts", "Cross-device"],
  },
  {
    number: "02",
    symbol: "◈",
    title: "Modern UI Development",
    description:
      "I transform designs and concepts into polished, interactive interfaces using React.js, reusable components, and modern styling techniques.",
    tags: ["React.js", "Reusable components", "Modern CSS"],
  },
  {
    number: "03",
    symbol: "⚡",
    title: "Performance & Optimization",
    description:
      "I focus on efficient code, optimized assets, and practical improvements that help websites load smoothly and feel responsive.",
    tags: ["Clean code", "Asset optimization", "Fast interfaces"],
  },
  {
    number: "04",
    symbol: "⇄",
    title: "API Integration",
    description:
      "I connect frontend interfaces to backend services and REST APIs to support dynamic content, data-driven features, and interactive applications.",
    tags: ["REST APIs", "Data fetching", "Backend integration"],
  },
  {
    number: "05",
    symbol: "◎",
    title: "User-Centered Development",
    description:
      "I prioritize intuitive navigation, clear layouts, accessibility, and thoughtful interactions that make websites easier to use.",
    tags: ["Accessibility", "Usability", "Intuitive navigation"],
  },
];

export default function Expertise() {
  return (
    <main className="min-h-screen bg-[#021A1E] px-5 py-16 text-white sm:px-8 lg:px-12 lg:py-24">
      <div className="mx-auto max-w-6xl">
        {/* Page introduction */}
        <header className="mx-auto mb-14 max-w-3xl text-center sm:mb-16">
          <p className="mb-4 text-sm font-bold uppercase tracking-[0.3em] text-[#F4C95D]">
            What I Do
          </p>

          <h1 className="font-display text-4xl font-bold leading-tight sm:text-5xl lg:text-6xl">
            My <span className="text-[#F4C95D]">Expertise</span>
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-white/70 sm:text-lg">
            I combine technical expertise with thoughtful design to build
            responsive, accessible, and high-performing web experiences that
            solve real problems and create value.
          </p>
        </header>

        {/* Expertise cards */}
        <section
          aria-label="Areas of expertise"
          className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3"
        >
          {expertiseItems.map((item) => (
            <article
              key={item.number}
              className="group flex h-full flex-col rounded-2xl border border-white/10 bg-white/[0.04] p-6 transition duration-300 hover:-translate-y-1 hover:border-[#F4C95D]/60 hover:bg-white/[0.07] sm:p-7"
            >
              <div className="mb-7 flex items-center justify-between">
                <span className="grid h-14 w-14 place-items-center rounded-xl border border-[#F4C95D]/30 bg-[#F4C95D]/10 text-3xl text-[#F4C95D]">
                  {item.symbol}
                </span>

                <span className="font-display text-sm font-semibold tracking-widest text-white/35">
                  {item.number}
                </span>
              </div>

              <h2 className="font-display text-xl font-bold leading-snug transition-colors group-hover:text-[#F4C95D] sm:text-2xl">
                {item.title}
              </h2>

              <p className="mt-4 flex-1 text-sm leading-7 text-white/65 sm:text-base">
                {item.description}
              </p>

              <div className="mt-6 flex flex-wrap gap-2">
                {item.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full border border-white/10 px-3 py-1.5 text-xs text-white/65"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </section>

        {/* Call to action */}
        <section className="mt-16 rounded-2xl border border-[#F4C95D]/20 bg-[#044F58]/30 px-6 py-10 text-center sm:px-10 sm:py-14">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#F4C95D]">
            Have a project in mind?
          </p>

          <h2 className="mx-auto mt-4 max-w-2xl font-display text-2xl font-bold sm:text-4xl">
            Let's turn your ideas into a meaningful web experience.
          </h2>

          <p className="mx-auto mt-4 max-w-xl leading-7 text-white/70">
            Whether you need a responsive website, an interactive interface,
            or API-powered functionality, let's discuss how I can help.
          </p>

          <Link
            to="#contact"
            className="mt-8 inline-flex items-center gap-2 rounded-lg bg-[#F4C95D] px-6 py-3 font-bold text-[#021A1E] transition hover:bg-white"
          >
            Let's Work Together <span aria-hidden="true">→</span>
          </Link>
        </section>
      </div>
    </main>
  );
}
