import React from 'react';
import ReactDOM from 'react-dom/client';  // Pastikan import dari 'react-dom/client'
import './index.css';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root')); // Menggunakan createRoot
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
