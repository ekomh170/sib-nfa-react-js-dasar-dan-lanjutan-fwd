import React from "react";

// Komponen halaman 404 untuk route yang tidak ditemukan
const NotFound = () => {
  return (
    <section className="py-5 modern-section modern-font">
      <div className="container text-center">
        {/* Judul error 404 dengan styling besar */}
        <h1 className="display-1 modern-title">404</h1>
        <h2 className="h3 mb-4">Halaman Tidak Ditemukan</h2>
        {/* Pesan error dan penjelasan */}
        <p className="mb-4">Maaf, halaman yang Anda cari tidak tersedia di ChillAjar.</p>
        {/* Tombol kembali ke halaman utama */}
        <a href="/" className="btn modern-btn">Kembali ke Beranda</a>
      </div>
    </section>
  );
};

export default NotFound;