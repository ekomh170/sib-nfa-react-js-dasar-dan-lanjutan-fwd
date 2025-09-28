import React from 'react';
import books from '../utils/books'; // Import React dan data buku

const Home = () => {
  return ( /* Komponen halaman utama */
    <div>
      {/* Hero Section */}
      <div className="hero-section"> {/* Bagian hero dengan background dan floating books */}
        <div className="floating-books"> {/* Container untuk elemen buku melayang */}
          <div className="floating-book book1">📖</div>
          <div className="floating-book book2">📚</div>
          <div className="floating-book book3">📗</div>
          <div className="floating-book book4">📕</div>
        </div>
        <div className="container">
          <div className="hero-content">
            <h1>Selamat Datang di BookSales Eko Muchamad Haryono</h1>
            <p className="hero-subtitle">Temukan koleksi buku terbaik untuk memperkaya jiwa dan pikiran Anda</p>
            <div className="hero-stats">
              <div className="stat-item">
                <span className="stat-number">{books.length}</span>
                <span className="stat-label">Koleksi Buku</span>
              </div>
              <div className="stat-item">
                <span className="stat-number">🇮🇩</span>
                <span className="stat-label">Buku Indonesia</span>
              </div>
              <div className="stat-item">
                <span className="stat-number">❤️</span>
                <span className="stat-label">Dengan Cinta</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Books Section */}
      <div className="container"> {/* Section katalog buku */}
        <h2 className="section-title">
          ✨ Koleksi Buku Terpopuler
        </h2>

        <div className="books-grid"> {/* Grid layout untuk menampilkan kartu buku */}
          {/* Mapping data buku ke komponen kartu */}
          {books.map((book) => (
            <div key={book.id} className="book-card">
              <div className="card-body">
                <h5 className="card-title">{book.title}</h5>
                <h6 className="card-subtitle">✍️ {book.author}</h6>
                <span className="category-badge">{book.category}</span>
                <p className="card-text">{book.description}</p>
                <div className="price">Rp {book.price.toLocaleString('id-ID')}</div>
                <button className="btn-custom w-100">
                  🛒 Beli Sekarang
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home; /* Export komponen Home sebagai default */