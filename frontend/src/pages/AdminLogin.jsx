import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { request, ADMIN_PATH } from '../lib/api';

export default function AdminLogin() {
  const [form, setForm] = useState({ username: '', password: '' });
  const [error, setError] = useState('');
  const [busy, setBusy] = useState(false);
  const navigate = useNavigate();

  async function onSubmit(e) {
    e.preventDefault();
    setBusy(true); setError('');
    try {
      const { token } = await request('/api/admin/login', { method: 'POST', body: form });
      sessionStorage.setItem('admin_token', token);
      navigate(`${ADMIN_PATH}/dashboard`);
    } catch (err) {
      setError(err.message);
    } finally { setBusy(false); }
  }

  return (
    <main className="grid min-h-screen place-items-center bg-[radial-gradient(circle_at_top,#044F58,#021A1E_60%)] px-5">
      <form onSubmit={onSubmit} className="glass w-full max-w-sm space-y-5 p-8">
        <h1 className="font-display text-2xl font-bold">Owner sign in</h1>
        <div>
          <label htmlFor="username" className="mb-1.5 block text-sm font-medium">Username</label>
          <input id="username" className="field" autoComplete="username" required value={form.username} onChange={(e) => setForm({ ...form, username: e.target.value })} />
        </div>
        <div>
          <label htmlFor="password" className="mb-1.5 block text-sm font-medium">Password</label>
          <input id="password" type="password" className="field" autoComplete="current-password" required value={form.password} onChange={(e) => setForm({ ...form, password: e.target.value })} />
        </div>
        {error && <p role="alert" className="text-sm text-spark">{error}</p>}
        <button className="btn-primary w-full" disabled={busy}>{busy ? 'Signing in...' : 'Sign in'}</button>
      </form>
    </main>
  );
}
