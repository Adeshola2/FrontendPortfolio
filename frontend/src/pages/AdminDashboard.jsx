import { useCallback, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { request, ADMIN_PATH } from '../lib/api';

export default function AdminDashboard() {
  const navigate = useNavigate();
  const token = sessionStorage.getItem('admin_token');
  const [stats, setStats] = useState(null);
  const [messages, setMessages] = useState([]);
  const [error, setError] = useState('');

  const logout = useCallback(() => {
    sessionStorage.removeItem('admin_token');
    navigate(ADMIN_PATH);
  }, [navigate]);

  useEffect(() => {
    if (!token) return navigate(ADMIN_PATH);
    Promise.all([request('/api/admin/stats', { token }), request('/api/admin/messages', { token })])
      .then(([s, m]) => { setStats(s); setMessages(m); })
      .catch((err) => (err.status === 401 ? logout() : setError(err.message)));
  }, [token, navigate, logout]);

  async function remove(id) {
    await request(`/api/admin/messages/${id}`, { method: 'DELETE', token });
    setMessages((m) => m.filter((x) => x.id !== id));
    setStats((s) => ({ ...s, messages: s.messages - 1 }));
  }

  return (
    <main className="mx-auto max-w-4xl px-5 py-10">
      <header className="flex items-center justify-between">
        <h1 className="font-display text-3xl font-bold">Dashboard</h1>
        <button onClick={logout} className="btn-ghost !py-2">Sign out</button>
      </header>
      {error && <p role="alert" className="mt-6 text-spark">{error}</p>}

      <section className="mt-8 grid gap-4 sm:grid-cols-2" aria-label="Statistics">
        <div className="glass p-6"><p className="text-white/60">CV downloads</p><p className="font-display text-5xl font-bold text-spark">{stats?.downloads ?? '-'}</p></div>
        <div className="glass p-6"><p className="text-white/60">Messages received</p><p className="font-display text-5xl font-bold text-brand">{stats?.messages ?? '-'}</p></div>
      </section>

      <section className="mt-10" aria-label="Messages">
        <h2 className="font-display text-xl font-bold">Messages</h2>
        {messages.length === 0 ? (
          <p className="mt-4 text-white/60">No messages yet. They will appear here when someone uses your contact form.</p>
        ) : (
          <ul className="mt-4 space-y-4">
            {messages.map((m) => (
              <li key={m.id} className="glass p-5">
                <div className="flex flex-wrap items-baseline justify-between gap-2">
                  <p className="font-bold">{m.name} <a className="font-normal text-brand hover:underline" href={`mailto:${m.email}`}>{m.email}</a></p>
                  <time className="text-xs text-white/50" dateTime={m.createdAt}>{new Date(m.createdAt).toLocaleString()}</time>
                </div>
                <p className="mt-3 whitespace-pre-wrap text-white/80">{m.message}</p>
                <button onClick={() => remove(m.id)} className="mt-3 text-sm text-spark hover:underline">Delete</button>
              </li>
            ))}
          </ul>
        )}
      </section>
    </main>
  );
}
