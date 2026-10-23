import { skills } from '../data/content';

export default function Skills() {
  return (
    <section id="skills" className="section">
      <h2 className="font-display text-3xl font-bold sm:text-4xl">Skills and tech stack</h2>
      <div className="mt-10 grid gap-6 md:grid-cols-3">
        {skills.map(({ group, items }) => (
          <div key={group} className="glass p-6">
            <h3 className="font-display text-xl font-bold text-brand">{group}</h3>
            <ul className="mt-5 space-y-4">
              {items.map(([name, level]) => (
                <li key={name}>
                  <div className="flex justify-between text-sm"><span>{name}</span><span className="text-white/50">{level}%</span></div>
                  <div className="mt-1.5 h-1.5 rounded-full bg-white/10" role="presentation">
                    <div className="h-full rounded-full bg-gradient-to-r from-teal to-brand" style={{ width: `${level}%` }} />
                  </div>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
