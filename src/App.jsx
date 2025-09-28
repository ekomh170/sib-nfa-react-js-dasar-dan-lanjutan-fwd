import React, { useState } from 'react';
import logoChillAjar from './assets/logo/chillajar.png';
import { BrowserRouter as Router, Routes, Route, NavLink, Link, Outlet } from 'react-router-dom';
import Home from './pages/Home';
import Team from './pages/Team';
import Contact from './pages/Contact';
import MemberDetail from './pages/MemberDetail';
import NotFound from './pages/NotFound';
import './App.css';

// Layout component untuk halaman utama dengan navbar dan footer
function Layout() {
  // State untuk mengelola toggle hamburger menu mobile
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Handler untuk toggle menu hamburger
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Handler untuk menutup menu saat link navigasi diklik
  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <>
      {/* Navbar: logo, link navigasi, dan hamburger menu mobile */}
      <nav className="navbar navbar-expand-lg navbar-modern fixed-top shadow-sm">
        <div className="container-fluid px-4">
          {/* Brand Logo */}
          <Link className="navbar-brand-modern" to="/">
            <img
              src={logoChillAjar}
              alt="ChillAjar Logo"
              className="navbar-logo"
            />
            <span className="navbar-brand-text">ChillAjar</span>
          </Link>

          {/* Hamburger Menu Button */}
          <button
            className={`navbar-toggler custom-hamburger ${isMenuOpen ? '' : 'collapsed'}`}
            type="button"
            onClick={toggleMenu}
            aria-controls="navbarNav"
            aria-expanded={isMenuOpen}
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          {/* Navigation Menu */}
          <div className={`collapse navbar-collapse ${isMenuOpen ? 'show' : ''}`} id="navbarNav">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <NavLink
                  className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
                  to="/"
                  onClick={closeMenu}
                >
                  Home
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
                  to="/team"
                  onClick={closeMenu}
                >
                  Team
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
                  to="/contact"
                  onClick={closeMenu}
                >
                  Contact
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      {/* Outlet untuk render halaman anak */}
      <div className="bg-light modern-font" style={{ paddingTop: '80px' }}>
        <Outlet />
      </div>

      {/* Footer: info platform, link sosial, dan copyright */}
      <footer className="footer-modern py-5 mt-5">
        <div className="container-fluid">
          <div className="row g-4">
            {/* Brand & Description */}
            <div className="col-12 col-md-6 col-lg-4">
              <div className="d-flex align-items-center gap-3 mb-3">
                <img src={logoChillAjar} alt="ChillAjar Logo" style={{height:'2.5rem',width:'2.5rem',objectFit:'contain'}} />
                <h5 className="mb-0 modern-title">ChillAjar</h5>
              </div>
              <p className="mb-3 text-muted">
                Platform pembelajaran online yang menghubungkan siswa dengan mentor berkualitas.
                Belajar dengan santai, jadwal fleksibel, dan pengalaman yang dipersonalisasi.
              </p>
              <div className="d-flex gap-3">
                <a href="https://www.instagram.com/chill_ajar/" className="text-decoration-none" title="Instagram" target="_blank" rel="noopener noreferrer">
                  <i className="bi bi-instagram fs-4 text-muted"></i>
                </a>
                <a href="https://github.com/ekomh170" className="text-decoration-none" title="GitHub" target="_blank" rel="noopener noreferrer">
                  <i className="bi bi-github fs-4 text-muted"></i>
                </a>
                <a href="https://www.linkedin.com/in/eko-muchamad-haryono" className="text-decoration-none" title="LinkedIn" target="_blank" rel="noopener noreferrer">
                  <i className="bi bi-linkedin fs-4 text-muted"></i>
                </a>
                <a href="mailto:info@chillajar.com" className="text-decoration-none" title="Email">
                  <i className="bi bi-envelope fs-4 text-muted"></i>
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div className="col-12 col-md-3 col-lg-2">
              <h6 className="fw-bold mb-3 modern-title">Navigasi</h6>
              <ul className="list-unstyled">
                <li className="mb-2">
                  <Link to="/" className="text-decoration-none text-muted">Beranda</Link>
                </li>
                <li className="mb-2">
                  <Link to="/team" className="text-decoration-none text-muted">Tim Kami</Link>
                </li>
                <li className="mb-2">
                  <Link to="/contact" className="text-decoration-none text-muted">Kontak</Link>
                </li>
              </ul>
            </div>

            {/* Services */}
            <div className="col-12 col-md-3 col-lg-3">
              <h6 className="fw-bold mb-3 modern-title">Layanan</h6>
              <ul className="list-unstyled">
                <li className="mb-2 text-muted"><i className="bi bi-check-circle me-2"></i>Pencarian Mentor</li>
                <li className="mb-2 text-muted"><i className="bi bi-check-circle me-2"></i>Booking Mudah</li>
                <li className="mb-2 text-muted"><i className="bi bi-check-circle me-2"></i>Jadwal Fleksibel</li>
                <li className="mb-2 text-muted"><i className="bi bi-check-circle me-2"></i>Pembayaran Aman</li>
              </ul>
            </div>

            {/* Contact Info */}
            <div className="col-12 col-md-6 col-lg-3">
              <h6 className="fw-bold mb-3 modern-title">Kontak Kami</h6>
              <ul className="list-unstyled">
                <li className="mb-2 text-muted">
                  <i className="bi bi-geo-alt me-2"></i>
                  Jakarta Selatan, DKI Jakarta
                </li>
                <li className="mb-2 text-muted">
                  <i className="bi bi-envelope me-2"></i>
                  info@chillajar.com
                </li>
                <li className="mb-2 text-muted">
                  <i className="bi bi-telephone me-2"></i>
                  +62 812-3456-7890
                </li>
                <li className="mb-2 text-muted">
                  <i className="bi bi-clock me-2"></i>
                  Senin - Jumat, 09:00 - 18:00 WIB
                </li>
              </ul>
            </div>
          </div>

          {/* Copyright */}
          <hr className="my-4" />
          <div className="row align-items-center">
            <div className="col-12 col-md-6 text-center text-md-start">
              <p className="mb-0 small text-muted">
                &copy; 2025 ChillAjar. All rights reserved.
              </p>
            </div>
            <div className="col-12 col-md-6 text-center text-md-end">
              <p className="mb-0 small text-muted">
                Dibuat dengan <i className="bi bi-heart-fill text-danger mx-1"></i> oleh Eko Muchamad Haryono
              </p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

function App() {
  // Render routing dengan layout
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="team" element={<Team />} />
          <Route path="team/:memberId" element={<MemberDetail />} />
          <Route path="contact" element={<Contact />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;
