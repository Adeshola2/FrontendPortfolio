
import dotenv from 'dotenv';
import express from 'express';
import cors from 'cors';
import jwt from 'jsonwebtoken';
import rateLimit from 'express-rate-limit';
import crypto from 'node:crypto';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

dotenv.config({
  path: path.join(__dirname, '.env'),
});

const {
  PORT = 5000,
  JWT_SECRET,
  ADMIN_USER,
  ADMIN_PASSWORD,
  CLIENT_ORIGIN = 'http://localhost:5173',
} = process.env;

if (!JWT_SECRET || !ADMIN_USER || !ADMIN_PASSWORD) {
  console.error('Missing required environment variables in server/.env');
  process.exit(1);
}


// --- tiny JSON "database" ---------------------------------------------------
const DB_FILE = path.join(__dirname, 'data', 'db.json');
fs.mkdirSync(path.dirname(DB_FILE), { recursive: true });
const load = () => (fs.existsSync(DB_FILE) ? JSON.parse(fs.readFileSync(DB_FILE, 'utf8')) : { downloads: 0, messages: [] });
const save = (db) => fs.writeFileSync(DB_FILE, JSON.stringify(db, null, 2));

// constant-time string compare
const hash = (v) => crypto.createHash('sha256').update(String(v)).digest();
const same = (a, b) => crypto.timingSafeEqual(hash(a), hash(b));

const limit = (max) => rateLimit({ windowMs: 15 * 60 * 1000, max, standardHeaders: true, legacyHeaders: false });
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

const app = express();
app.use(cors({ origin: CLIENT_ORIGIN.split(',').map((s) => s.trim()) }));
app.use(express.json({ limit: '10kb' }));

// --- public routes ----------------------------------------------------------
app.post('/api/contact', limit(10), (req, res) => {
  const name = String(req.body?.name ?? '').trim();
  const email = String(req.body?.email ?? '').trim();
  const message = String(req.body?.message ?? '').trim();
  if (name.length < 2 || name.length > 80) return res.status(400).json({ error: 'Enter your name (2-80 characters).' });
  if (!EMAIL_RE.test(email) || email.length > 120) return res.status(400).json({ error: 'Enter a valid email address.' });
  if (message.length < 10 || message.length > 2000) return res.status(400).json({ error: 'Message must be 10-2000 characters.' });
  const db = load();
  db.messages.unshift({ id: crypto.randomUUID(), name, email, message, createdAt: new Date().toISOString() });
  save(db);
  res.status(201).json({ ok: true });
});

app.get('/api/cv', limit(30), (_req, res) => {
  const file = path.join(__dirname, 'cv', 'Adeshola_John_CV.pdf');
  if (!fs.existsSync(file)) return res.status(404).json({ error: 'CV not uploaded yet.' });
  const db = load();
  db.downloads += 1;
  save(db);
  res.download(file, 'Adeshola_John_CV.pdf');
});

// --- admin routes -----------------------------------------------------------
app.post('/api/admin/login', limit(8), (req, res) => {
  const { username = '', password = '' } = req.body ?? {};
  if (same(username, ADMIN_USER) && same(password, ADMIN_PASSWORD)) {
    return res.json({ token: jwt.sign({ role: 'admin' }, JWT_SECRET, { expiresIn: '2h' }) });
  }
  res.status(401).json({ error: 'Incorrect username or password.' });
});

const auth = (req, res, next) => {
  try {
    const token = (req.headers.authorization || '').replace('Bearer ', '');
    jwt.verify(token, JWT_SECRET);
    next();
  } catch {
    res.status(401).json({ error: 'Session expired. Please sign in again.' });
  }
};

app.get('/api/admin/stats', auth, (_req, res) => {
  const db = load();
  res.json({ downloads: db.downloads, messages: db.messages.length });
});
app.get('/api/admin/messages', auth, (_req, res) => res.json(load().messages));
app.delete('/api/admin/messages/:id', auth, (req, res) => {
  const db = load();
  db.messages = db.messages.filter((m) => m.id !== req.params.id);
  save(db);
  res.json({ ok: true });
});

app.listen(PORT, () => console.log(`API running on http://localhost:${PORT}`));
