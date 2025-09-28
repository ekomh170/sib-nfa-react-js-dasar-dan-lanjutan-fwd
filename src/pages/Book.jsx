import React, { useState } from 'react';
import books from '../utils/books'; // Import React hooks dan data buku

const Book = () => {
  const [bookList, setBookList] = useState(books); // State untuk daftar buku
  const [newBook, setNewBook] = useState({ // State untuk form input buku baru
    title: '',
    author: '',
    price: '',
    category: '',
    description: ''
  });

  const handleInputChange = (e) => { // Handler untuk perubahan input form
    const { name, value } = e.target;
    setNewBook(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const addBook = (e) => { // Fungsi untuk menambah buku baru
    e.preventDefault();
    if (newBook.title && newBook.author && newBook.price) {
      const book = {
        id: bookList.length + 1,
        ...newBook,
        price: parseInt(newBook.price)
      };
      setBookList(prev => [...prev, book]);
      setNewBook({
        title: '',
        author: '',
        price: '',
        category: '',
        description: ''
      });
    }
  };

  return ( /* Render komponen halaman katalog buku */
    <div>
      {/* Page Header */}
      <div className="page-header"> {/* Header halaman katalog buku */}
        <div className="container">
          <h1>Katalog Buku Lengkap</h1>
          <p>Jelajahi semua koleksi buku yang tersedia di BookSales Eko Muchamad Haryono</p>
        </div>
      </div>

      {/* Main Content */}
      <div className="container">
        {/* Form untuk menambah buku baru */}
        <div className="form-card"> {/* Form untuk menambah buku baru ke katalog */}
          <div className="card-header">
            <h5>➕ Tambah Buku Baru</h5>
          </div>
          <div className="card-body">
            <form onSubmit={addBook}>
              <div className="row">
                <div className="col-md-6 mb-3">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="📚 Judul Buku"
                    name="title"
                    value={newBook.title}
                    onChange={handleInputChange}
                    required
                  />
                </div>
                <div className="col-md-6 mb-3">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="✍️ Penulis"
                    name="author"
                    value={newBook.author}
                    onChange={handleInputChange}
                    required
                  />
                </div>
                <div className="col-md-4 mb-3">
                  <input
                    type="number"
                    className="form-control"
                    placeholder="💰 Harga (Rp)"
                    name="price"
                    value={newBook.price}
                    onChange={handleInputChange}
                    required
                  />
                </div>
                <div className="col-md-4 mb-3">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="🏷️ Kategori"
                    name="category"
                    value={newBook.category}
                    onChange={handleInputChange}
                  />
                </div>
                <div className="col-md-4 mb-3">
                  <button type="submit" className="btn-custom w-100">
                    ✨ Tambah Buku
                  </button>
                </div>
              </div>
              <div className="mb-3">
                <textarea
                  className="form-control"
                  placeholder="📝 Deskripsi Buku"
                  name="description"
                  value={newBook.description}
                  onChange={handleInputChange}
                  rows="3"
                ></textarea>
              </div>
            </form>
          </div>
        </div>

        {/* Daftar Buku */}
        <h2 className="section-title"> {/* Section daftar semua buku */}
          📚 Semua Koleksi Buku ({bookList.length})
        </h2>

        <div className="books-grid"> {/* Grid layout untuk menampilkan semua buku */}
          {/* Mapping data buku ke komponen kartu */}
          {bookList.map((book) => (
            <div key={book.id} className="book-card">
              <div className="card-body">
                <h5 className="card-title">{book.title}</h5>
                <h6 className="card-subtitle">✍️ {book.author}</h6>
                <span className="category-badge">{book.category}</span>
                <p className="card-text">{book.description}</p>
                <div className="price">Rp {book.price.toLocaleString('id-ID')}</div>
                <button className="btn-outline-custom w-100">
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

export default Book; /* Export komponen Book sebagai default */