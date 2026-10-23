import { useState } from 'react';
import { socials } from '../data/content';
import { request } from '../lib/api';

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

function validate({ name, email, message }) {
  const e = {};
  if (name.trim().length < 2) e.name = 'Enter your name (at least 2 characters).';
  if (!EMAIL_RE.test(email.trim())) e.email = 'Enter a valid email address.';
  if (message.trim().length < 10) e.message = 'Write at least 10 characters so I know how to help.';
  return e;
}

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState({ type: 'idle', text: '' });

  const onChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  async function onSubmit(e) {
    e.preventDefault();
    const found = validate(form);
    setErrors(found);
    if (Object.keys(found).length) return;
    setStatus({ type: 'sending', text: 'Sending...' });
    try {
      await request('/api/contact', { method: 'POST', body: form });
      setForm({ name: '', email: '', message: '' });
      setStatus({ type: 'ok', text: 'Message sent. I will reply within two working days.' });
    } catch (err) {
      setStatus({ type: 'error', text: err.message || 'Could not send. Please try again.' });
    }
  }

  const field = (name, label, props = {}) => (
    <div>
      <label htmlFor={name} className="mb-1.5 block text-sm font-medium">{label}</label>
      <input id={name} name={name} value={form[name]} onChange={onChange} className="field" aria-invalid={!!errors[name]} aria-describedby={errors[name] ? `${name}-err` : undefined} {...props} />
      {errors[name] && <p id={`${name}-err`} className="mt-1 text-sm text-spark">{errors[name]}</p>}
    </div>
  );

  return (
    <section id="contact" className="section">
      <h2 className="font-display text-3xl font-bold sm:text-4xl">Let's work together</h2>
      <p className="mt-3 max-w-xl text-white/70">Have a project, a role or a question? Send a message and I will get back to you.</p>
      <div className="mt-10 grid gap-8 md:grid-cols-[1.4fr_1fr]">
        <form onSubmit={onSubmit} noValidate className="glass space-y-5 p-6">
          {field('name', 'Name', { type: 'text', autoComplete: 'name', placeholder: 'Your full name' })}
          {field('email', 'Email', { type: 'email', autoComplete: 'email', placeholder: 'you@example.com' })}
          <div>
            <label htmlFor="message" className="mb-1.5 block text-sm font-medium">Message</label>
            <textarea id="message" name="message" rows="5" value={form.message} onChange={onChange} className="field" placeholder="Tell me about your project" aria-invalid={!!errors.message} aria-describedby={errors.message ? 'message-err' : undefined} />
            {errors.message && <p id="message-err" className="mt-1 text-sm text-spark">{errors.message}</p>}
          </div>
          <button type="submit" className="btn-primary" disabled={status.type === 'sending'}>Send message</button>
          <p role="status" className={`text-sm ${status.type === 'error' ? 'text-spark' : 'text-brand'}`}>{status.text}</p>
        </form>
        <ul className="glass h-fit divide-y divide-white/10">
          {socials.map((s) => (
            <li key={s.label}>
              <a href={s.href} target={s.href.startsWith('http') ? '_blank' : undefined} rel="noreferrer" className="flex items-center justify-between p-5 transition hover:text-brand">
                <span className="font-medium">{s.label}</span><span aria-hidden="true" className="text-spark">&rarr;</span>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
