import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import Book from './pages/Book';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'; // Import library React Router, komponen halaman, Bootstrap, dan CSS custom

function App() {
  return ( /* Komponen utama aplikasi BookSales */
    <Router>
      <div className="App">
        {/* Custom Navbar dengan tema Merah Putih Hitam */}
        <nav className="navbar navbar-expand-lg navbar-custom"> {/* Navigasi utama aplikasi */}
          <div className="container">
            <Link className="navbar-brand" to="/">
              <span className="brand-icon">📚</span>
              BookSales Eko Muchamad Haryono
            </Link>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav ms-auto">
                <li className="nav-item">
                  <Link className="nav-link" to="/">
                    🏠 Home
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/book">
                    📖 Katalog Buku
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>

        <Routes> {/* Definisi routing halaman */}
          <Route path="/" element={<Home />} />
          <Route path="/book" element={<Book />} />
        </Routes>

        {/* Footer */}
        <footer className="app-footer"> {/* Bagian footer aplikasi */}
          <div className="container">
            <div className="footer-content">
              <div className="footer-section">
                <h5>📚 BookSales Eko Muchamad Haryono</h5>
                <p>Toko buku online terpercaya untuk koleksi buku Indonesia terbaik. Temukan buku favorit Anda dengan harga terjangkau.</p>
                <div className="social-links">
                  <a href="https://www.instagram.com/ekomh_29" target='_blank' className="social-link">📷 Instagram</a>
                </div>
              </div>

              <div className="footer-section">
                <h5> Kontak</h5>
                <ul className="contact-info">
                  <li>📧 ekomh20@gmail.com</li>
                  <li>📱 +62 851-7302-8290</li>
                  <li>🏢 Kab Bogor, Indonesia</li>
                  <li>🕒 Senin - Jumat: 08:00 - 17:00</li>
                </ul>
              </div>
            </div>

            <div className="footer-bottom">
              <div className="copyright">
                <p>&copy; 2025 BookSales Eko Muchamad Haryono. All rights reserved.</p>
                <p>Dibuat dengan ❤️ untuk pecinta buku Indonesia</p>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </Router>
  );
}

export default App; /* Export komponen App sebagai default */
