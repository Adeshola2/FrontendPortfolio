import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './index.css';
import Home from './pages/Home';
import ScrollToHash from './components/ScrollToHash';
import AdminLogin from './pages/AdminLogin';
import AdminDashboard from './pages/AdminDashboard';
import { ADMIN_PATH } from './lib/api';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
    <ScrollToHash />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path={ADMIN_PATH} element={<AdminLogin />} />
        <Route path={`${ADMIN_PATH}/dashboard`} element={<AdminDashboard />} />
        <Route path="*" element={<Home />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
