import { profile } from '../data/content';
import CvButton from './CvButton';

export default function About() {
  return (
    <section id="about" className="section">
      <h2 className="font-display text-3xl font-bold sm:text-4xl">About me</h2>
      <div className="mt-10 grid gap-10 md:grid-cols-2">
        <div className="space-y-5 text-lg text-white/75">
          {profile.bio.map((p, index) => (
  <p key={index} className="leading-8">
    {p}
  </p>
))}
          <div className="pt-2"><CvButton /></div>
        </div>
        <dl className="glass divide-y divide-white/10">
          {profile.facts.map((f) => (
            <div key={f.label} className="flex flex-col gap-1 p-5 sm:flex-row sm:gap-6">
              <dt className="w-28 shrink-0 font-medium text-spark">{f.label}</dt>
              <dd className="text-white/85">{f.value}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
