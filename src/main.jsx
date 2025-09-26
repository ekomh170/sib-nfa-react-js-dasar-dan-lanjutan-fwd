import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import 'bootstrap-icons/font/bootstrap-icons.css';

// File entry point aplikasi React ChillAjar
// Komentar pakai bahasa mahasiswa biar gampang dipahami
// Di sini kita render App ke root HTML
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
// Render komponen App ke elemen root di index.html
)
