import React from 'react';
import logoChillAjar from './assets/logo/chillajar.png';
import { BrowserRouter as Router, Routes, Route, NavLink, Link, Outlet } from 'react-router-dom';
import Home from './pages/Home';
import Team from './pages/Team';
import Contact from './pages/Contact';
import './App.css';

// Layout component untuk halaman utama dengan navbar dan footer
function Layout() {
  return (
    <>
      {/* Navbar: logo, link navigasi, dan tombol menu mobile */}
      <nav className="navbar navbar-expand-lg navbar-modern fixed-top shadow-sm">
        <div className="container-fluid px-4">
          <Link className="navbar-brand d-flex align-items-center gap-2" to="/" style={{fontSize:'2rem',fontWeight:700,letterSpacing:'.5px',background:'rgba(255,255,255,0.85)',padding:'0.25rem 1rem',borderRadius:'1.5rem',boxShadow:'0 2px 8px rgba(0,0,0,0.07)'}}>
            <img src={logoChillAjar} alt="ChillAjar Logo" style={{height:'2.2rem',width:'2.2rem',objectFit:'contain',marginRight:'0.5rem'}} />
            <span style={{color:'#212529'}}>ChillAjar</span>
          </Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon" style={{background:'#ffc107'}}></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <NavLink className={({ isActive }) => isActive ? "nav-link active" : "nav-link"} to="/">Home</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className={({ isActive }) => isActive ? "nav-link active" : "nav-link"} to="/team">Team</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className={({ isActive }) => isActive ? "nav-link active" : "nav-link"} to="/contact">Contact</NavLink>
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
      <footer className="footer-modern py-4 mt-5 text-center">
        <div className="container-fluid">
          <div className="row">
            <div className="col-12 mb-3">
              <h6 className="mb-1">ChillAjar</h6>
              <p className="mb-0 small">Platform pembelajaran online yang menghubungkan siswa dengan mentor berkualitas</p>
            </div>
            <div className="col-12 mb-3">
              <h6 className="mb-1">Ikuti Kami</h6>
              <div className="d-flex justify-content-center gap-3">
                <a href="https://www.instagram.com/chill_ajar/" title="Instagram" target="_blank" rel="noopener noreferrer">Instagram</a>
              </div>
            </div>
            <div className="col-12">
              <hr className="my-3" />
              <p className="mb-0 small copyright">
                &copy; 2025 Eko Muchamad Haryono - Tugas React JS | Dibuat dengan React & Bootstrap
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
          <Route path="contact" element={<Contact />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
