import React, { memo, useCallback } from "react";
import { Link } from "react-router-dom";
import fotoEko from "../assets/photo/eko/Foto_Profil_Eko_Muchamad_Haryono.jpg";
import fotoHiga from "../assets/photo/higa/higa.png";
import fotoFarrel from "../assets/photo/farrel/farrel.png";

// Data anggota tim dengan detail lengkap untuk setiap member
const TEAM_MEMBERS = [
  {
    id: "eko",
    name: "EKO MUCHAMAD HARYONO",
    role: "Chief Technology Officer (CTO) — ChillAjar",
    bio: "Fokus utama sebagai backend dan riset server, mendalami arsitektur sistem, API, dan keamanan data. Menyusun Pengembangan Aplikasi ChillAjar yang andal, skalabel, dan efisien.",
    image: fotoEko,
  },
  {
    id: "farrel",
    name: "MUHAMMAD FARREL ZULVIANO",
    role: "Chief Executive Officer (CEO) — ChillAjar",
    bio: "Pemimpin visioner, berpengalaman membangun tim dan produk digital. Passion di inovasi, pengembangan startup, dan solusi digital modern untuk pendidikan. Mendorong kemudahan booking, jadwal fleksibel, dan pembayaran terpercaya.",
    image: fotoFarrel,
  },
  {
    id: "higa",
    name: "FIRENZE HIGA PUTRA",
    role: "Chief Product Officer (CPO) — ChillAjar",
    bio: "Desainer UI/UX yang mengutamakan kenyamanan pengguna. Kreatif, detail, dan selalu mencari solusi estetis. Bertanggung jawab atas frontend, desain, dan pengalaman pengguna ChillAjar.",
    image: fotoHiga,
  },
];

// Gambar fallback jika foto profil gagal dimuat
const FALLBACK_IMG = fotoEko;

// Komponen card individual untuk setiap anggota tim
const TeamCard = ({ member }) => {
  // Handler untuk error loading gambar - ganti dengan fallback
  const handleImgError = useCallback((e) => {
    if (e?.target?.src !== FALLBACK_IMG) e.target.src = FALLBACK_IMG;
  }, []);

  return (
    <div className="col-12 col-sm-6 col-lg-4">
      <article className="card h-100 shadow-sm team-card">
        {/* Container foto profil dengan styling circular */}
        <div className="card-body text-center pt-4">
          <div className="d-flex justify-content-center mb-3">
            <div className="ratio ratio-1x1 bg-light rounded-circle overflow-hidden shadow" style={{width: '150px', height: '150px'}}>
              <img
                src={member.image}
                alt={`Foto ${member.name}`}
                loading="lazy"
                onError={handleImgError}
                className="w-100 h-100 object-fit-cover"
              />
            </div>
          </div>
          {/* Informasi nama, role, bio, dan link ke detail */}
          <h3 className="h5 card-title mb-2 text-wrap">{member.name}</h3>
          <p className="card-subtitle small text-muted mb-3">{member.role}</p>
          <p className="card-text mb-3 small">{member.bio}</p>
          <Link to={`/team/${member.id}`} className="btn modern-btn btn-sm">Lihat Detail</Link>
        </div>
      </article>
    </div>
  );
};

// Komponen utama halaman Team dengan optimasi memo
const Team = memo(function Team() {
  // Render halaman tim dengan header dan grid anggota
  return (
    <section
      className="py-5 bg-light"
      aria-labelledby="team-heading"
      role="region"
    >
      {/* Team styles moved to App.css and index.css */}

      <div className="container team-modern-font">
        {/* Header section dengan judul dan deskripsi tim */}
        <header className="text-center mb-5">
          <h1 id="team-heading" className="display-5 fw-bold mb-2" style={{letterSpacing:'.5px'}}>
            Tim Kreatif
          </h1>
          <p className="text-muted mb-0" style={{fontSize:'1.15rem'}}>
            Orang-orang di balik layar yang bikin ChillAjar jalan mulus.
          </p>
        </header>
        {/* Grid responsive untuk menampilkan card anggota tim */}
        <div className="row g-4 justify-content-center">
          {TEAM_MEMBERS.map((m, i) => (
            <TeamCard key={m.name} member={m} style={{animationDelay: `${i * 0.15}s`}} />
          ))}
        </div>
      </div>
    </section>
  );
});

export default Team;
