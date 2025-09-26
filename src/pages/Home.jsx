import React from 'react';
import logoChillAjar from '../assets/logo/chillajar.png';

// Fungsi utama komponen Home
const Home = () => {
  // Render tampilan halaman Home
  return (
    <>
      {/* Modern styles moved to App.css and index.css */}
  {/* Section utama: judul, deskripsi, tombol, dan badge teknologi */}
  <section className="modern-section modern-font">
    <div className="row align-items-center g-5 mx-0">
      <div className="col-12 col-md-6">
        <h1 className="display-4 mb-4 modern-title text-md-start text-center">ChillAjar</h1>
        <p className="modern-lead mb-4 text-md-start text-center">
          Platform pembelajaran online yang menghubungkan siswa dengan mentor berkualitas.<br/>
          Solusi digital modern untuk belajar berbagai keterampilan dengan mentor terpercaya, belajar dengan santai, dan sistem pembayaran yang mudah!
        </p>
        <div className="d-flex justify-content-md-start justify-content-center mb-3">
          <a href="/team" className="btn modern-btn btn-lg shadow">Lihat Tim ChillAjar</a>
        </div>
        <div className="d-flex flex-wrap gap-2 justify-content-md-start justify-content-center mb-2">
          {["React", "Tailwind CSS", "Vite", "JavaScript"].map((tech, i) => (
            <span className="modern-badge" style={{animationDelay: `${i * 0.12}s`}} key={tech}>{tech}</span>
          ))}
        </div>
      </div>
      <div className="col-12 col-md-6 text-center">
        <img
          src={logoChillAjar}
          alt="Logo ChillAjar"
          className="img-fluid rounded shadow bg-white p-4"
          style={{maxHeight: '220px', objectFit: 'contain', width: '100%'}}
        />
      </div>
    </div>
  </section>
  {/* Section kedua: info fitur ChillAjar untuk siswa, mentor, admin */}
  <section className="modern-section modern-font">
    <header className="mb-5 text-center">
      <h2 className="fw-semibold mb-2 modern-title">Tentang ChillAjar</h2>
      <p className="text-muted mb-0 modern-lead">ChillAjar adalah platform pembelajaran online yang memudahkan siswa menemukan dan belajar dengan mentor terbaik. Sistem booking mudah, jadwal fleksibel, dan pengalaman belajar dipersonalisasi.</p>
    </header>
    <div className="row g-5 mx-0 justify-content-center">
      <div className="col-12 col-md-6 col-lg-4">
        <div className="modern-card h-100 bg-white" style={{animationDelay: '0.1s'}}>
          <div className="card-body text-center py-4">
            <div className="modern-icon" title="Siswa">👨‍🎓</div>
            <h5 className="card-title mb-3 modern-title">Untuk Siswa</h5>
            <ul className="list-unstyled mb-0 text-start mx-auto" style={{maxWidth:'320px'}}>
              <li><strong>Pencarian Mentor:</strong> Temukan mentor sesuai keahlian</li>
              <li><strong>Booking Mudah:</strong> Reservasi simpel & konfirmasi real-time</li>
              <li><strong>Jadwal Fleksibel:</strong> Pilih waktu belajar sesuai rutinitas</li>
              <li><strong>Multiple Payment:</strong> Metode pembayaran aman & terpercaya</li>
              <li><strong>Track Progress:</strong> Pantau perkembangan pembelajaran</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="col-12 col-md-6 col-lg-4">
        <div className="modern-card h-100 bg-white" style={{animationDelay: '0.22s'}}>
          <div className="card-body text-center py-4">
            <div className="modern-icon" title="Mentor">🧑‍🏫</div>
            <h5 className="card-title mb-3 modern-title">Untuk Mentor</h5>
            <ul className="list-unstyled mb-0 text-start mx-auto" style={{maxWidth:'320px'}}>
              <li><strong>Manajemen Jadwal:</strong> Atur ketersediaan waktu mengajar</li>
              <li><strong>Student Management:</strong> Kelola siswa & riwayat pembelajaran</li>
              <li><strong>Course Creation:</strong> Buat & kelola kursus sesuai keahlian</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="col-12 col-md-12 col-lg-4">
        <div className="modern-card h-100 bg-white" style={{animationDelay: '0.34s'}}>
          <div className="card-body text-center py-4">
            <div className="modern-icon" title="Admin">🛡️</div>
            <h5 className="card-title mb-3 modern-title">Untuk Admin</h5>
            <ul className="list-unstyled mb-0 text-start mx-auto" style={{maxWidth:'320px'}}>
              <li><strong>User Management:</strong> Kelola semua pengguna platform</li>
              <li><strong>Course Oversight:</strong> Moderasi & approve kursus baru</li>
              <li><strong>Payment Processing:</strong> Monitoring transaksi & pembayaran</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </section>
    </>
  );
};

export default Home;