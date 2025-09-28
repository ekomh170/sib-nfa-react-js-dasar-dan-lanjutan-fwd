import React from 'react';
import { Link } from 'react-router-dom';
import logoChillAjar from '../assets/logo/chillajar.png';

// Halaman utama ChillAjar dengan hero section dan fitur platform
const Home = () => {
  return (
    <>
      {/* Hero Section - Perkenalan platform dengan logo dan CTA */}
      <section className="modern-section modern-font py-5">
        <div className="container">
          <div className="row align-items-center g-5">
            <div className="col-12 col-lg-6">
              {/* Judul dan deskripsi utama platform */}
              <h1 className="display-4 mb-4 modern-title text-lg-start text-center fw-bold">
                ChillAjar
              </h1>
              <p className="modern-lead mb-4 text-lg-start text-center fs-5 lh-base">
                Platform pembelajaran online yang menghubungkan siswa dengan mentor berkualitas.<br/>
                Solusi digital modern untuk belajar berbagai keterampilan dengan mentor terpercaya, belajar dengan santai, dan sistem pembayaran yang mudah!
              </p>
              {/* Tombol CTA menuju halaman Team */}
              <div className="d-flex justify-content-lg-start justify-content-center">
                <Link to="/team" className="btn modern-btn btn-lg shadow-lg px-4 py-3 fw-semibold">
                  <i className="bi bi-people-fill me-2 fs-5"></i>
                  Lihat Tim ChillAjar
                  <i className="bi bi-arrow-right ms-2"></i>
                </Link>
              </div>
            </div>
            <div className="col-12 col-lg-6 text-center">
              {/* Container logo dengan background putih */}
              <div className="d-flex justify-content-center">
                <div className="bg-white rounded-4 shadow-lg p-4" style={{maxWidth: '300px'}}>
                  <img
                    src={logoChillAjar}
                    alt="Logo ChillAjar"
                    className="img-fluid"
                    style={{maxHeight: '200px', objectFit: 'contain', width: '100%'}}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section - Keunggulan platform untuk 3 user types */}
      <section className="modern-section modern-font py-5 bg-light">
        <div className="container">
          <header className="text-center mb-5">
            <h2 className="fw-bold mb-3 modern-title">Mengapa Memilih ChillAjar?</h2>
            <p className="text-muted fs-5 mb-0 modern-lead">
              ChillAjar adalah platform pembelajaran online yang memudahkan siswa menemukan dan belajar dengan mentor terbaik.
              Sistem booking mudah, jadwal fleksibel, dan pengalaman belajar yang dipersonalisasi.
            </p>
          </header>

          <div className="row g-4 justify-content-center">
            {/* Card untuk Siswa - fitur pencarian mentor dan booking */}
            <div className="col-12 col-md-6 col-xl-4">
              <div className="modern-card h-100 bg-white" style={{animationDelay: '0.1s'}}>
                <div className="card-body text-center p-4">
                  <div className="modern-icon mb-3" title="Siswa">
                    <i className="bi bi-mortarboard fs-1 text-warning"></i>
                  </div>
                  <h5 className="card-title mb-4 modern-title fw-bold">Untuk Siswa</h5>
                  <ul className="list-unstyled mb-0 text-start">
                    <li className="mb-3 d-flex align-items-start">
                      <i className="bi bi-check-circle text-success me-2 mt-1"></i>
                      <div>
                        <strong>Pencarian Mentor:</strong>
                        <span className="text-muted d-block">Temukan mentor sesuai keahlian Anda</span>
                      </div>
                    </li>
                    <li className="mb-3 d-flex align-items-start">
                      <i className="bi bi-check-circle text-success me-2 mt-1"></i>
                      <div>
                        <strong>Booking Mudah:</strong>
                        <span className="text-muted d-block">Reservasi simpel & konfirmasi real-time</span>
                      </div>
                    </li>
                    <li className="mb-3 d-flex align-items-start">
                      <i className="bi bi-check-circle text-success me-2 mt-1"></i>
                      <div>
                        <strong>Jadwal Fleksibel:</strong>
                        <span className="text-muted d-block">Pilih waktu belajar sesuai rutinitas</span>
                      </div>
                    </li>
                    <li className="mb-3 d-flex align-items-start">
                      <i className="bi bi-check-circle text-success me-2 mt-1"></i>
                      <div>
                        <strong>Multiple Payment:</strong>
                        <span className="text-muted d-block">Metode pembayaran aman & terpercaya</span>
                      </div>
                    </li>
                    <li className="mb-0 d-flex align-items-start">
                      <i className="bi bi-check-circle text-success me-2 mt-1"></i>
                      <div>
                        <strong>Track Progress:</strong>
                        <span className="text-muted d-block">Pantau perkembangan pembelajaran</span>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Card untuk Mentor - fitur manajemen jadwal dan siswa */}
            <div className="col-12 col-md-6 col-xl-4">
              <div className="modern-card h-100 bg-white" style={{animationDelay: '0.22s'}}>
                <div className="card-body text-center p-4">
                  <div className="modern-icon mb-3" title="Mentor">
                    <i className="bi bi-person-video3 fs-1 text-warning"></i>
                  </div>
                  <h5 className="card-title mb-4 modern-title fw-bold">Untuk Mentor</h5>
                  <ul className="list-unstyled mb-0 text-start">
                    <li className="mb-3 d-flex align-items-start">
                      <i className="bi bi-check-circle text-success me-2 mt-1"></i>
                      <div>
                        <strong>Manajemen Jadwal:</strong>
                        <span className="text-muted d-block">Atur ketersediaan waktu mengajar</span>
                      </div>
                    </li>
                    <li className="mb-3 d-flex align-items-start">
                      <i className="bi bi-check-circle text-success me-2 mt-1"></i>
                      <div>
                        <strong>Student Management:</strong>
                        <span className="text-muted d-block">Kelola siswa & riwayat pembelajaran</span>
                      </div>
                    </li>
                    <li className="mb-0 d-flex align-items-start">
                      <i className="bi bi-check-circle text-success me-2 mt-1"></i>
                      <div>
                        <strong>Course Creation:</strong>
                        <span className="text-muted d-block">Buat & kelola kursus sesuai keahlian</span>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Card untuk Admin - fitur manajemen pengguna dan sistem */}
            <div className="col-12 col-xl-4">
              <div className="modern-card h-100 bg-white" style={{animationDelay: '0.34s'}}>
                <div className="card-body text-center p-4">
                  <div className="modern-icon mb-3" title="Admin">
                    <i className="bi bi-shield-check fs-1 text-warning"></i>
                  </div>
                  <h5 className="card-title mb-4 modern-title fw-bold">Untuk Admin</h5>
                  <ul className="list-unstyled mb-0 text-start">
                    <li className="mb-3 d-flex align-items-start">
                      <i className="bi bi-check-circle text-success me-2 mt-1"></i>
                      <div>
                        <strong>User Management:</strong>
                        <span className="text-muted d-block">Kelola semua pengguna platform</span>
                      </div>
                    </li>
                    <li className="mb-3 d-flex align-items-start">
                      <i className="bi bi-check-circle text-success me-2 mt-1"></i>
                      <div>
                        <strong>Course Oversight:</strong>
                        <span className="text-muted d-block">Moderasi & approve kursus baru</span>
                      </div>
                    </li>
                    <li className="mb-0 d-flex align-items-start">
                      <i className="bi bi-check-circle text-success me-2 mt-1"></i>
                      <div>
                        <strong>Payment Processing:</strong>
                        <span className="text-muted d-block">Monitoring transaksi & pembayaran</span>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;