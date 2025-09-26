import React, { memo, useCallback } from "react";
import fotoEko from "../assets/photo/eko/Foto_Profil_Eko_Muchamad_Haryono.jpg";
import fotoHiga from "../assets/photo/higa/higa.png";
import fotoFarrel from "../assets/photo/farrel/farrel.png";


// Data anggota tim dipisah dari komponen biar ga re-create tiap render
const TEAM_MEMBERS = [
  {
    name: "EKO MUCHAMAD HARYONO",
    role: "Chief Technology Officer (CTO) — ChillAjar",
  bio: "Fokus utama sebagai backend dan riset server, mendalami arsitektur sistem, API, dan keamanan data. Menyusun Pengembangan Aplikasi ChillAjar yang andal, skalabel, dan efisien.",
    image: fotoEko,
  },
  {
    name: "MUHAMMAD FARREL ZULVIANO",
    role: "Chief Executive Officer (CEO) — ChillAjar",
    bio: "Pemimpin visioner, berpengalaman membangun tim dan produk digital. Passion di inovasi, pengembangan startup, dan solusi digital modern untuk pendidikan. Mendorong kemudahan booking, jadwal fleksibel, dan pembayaran terpercaya.",
    image: fotoFarrel,
  },
  {
    name: "FIRENZE HIGA PUTRA",
    role: "Chief Product Officer (CPO) — ChillAjar",
    bio: "Desainer UI/UX yang mengutamakan kenyamanan pengguna. Kreatif, detail, dan selalu mencari solusi estetis. Bertanggung jawab atas frontend, desain, dan pengalaman pengguna ChillAjar.",
    image: fotoHiga,
  },
];

// Placeholder lokal opsional kalau gambar gagal dimuat (pakai fotoEko juga)
const FALLBACK_IMG = fotoEko;

// Komponen card untuk tiap anggota tim
const TeamCard = ({ member }) => {
  const handleImgError = useCallback((e) => {
    if (e?.target?.src !== FALLBACK_IMG) e.target.src = FALLBACK_IMG;
  }, []);

  return (
    <div className="col-12 col-sm-6 col-lg-4">
      <article className="card h-100 shadow-sm team-card">
        <div className="ratio ratio-16x9 bg-light rounded-top overflow-hidden">
          <img
            src={member.image}
            alt={`Foto ${member.name}`}
            loading="lazy"
            width="640"
            height="360"
            onError={handleImgError}
            className="w-100 h-100 object-fit-cover"
          />
        </div>
        <div className="card-body text-center">
          <h3 className="h5 card-title mb-1 text-wrap">{member.name}</h3>
          <p className="card-subtitle small text-muted mb-3">{member.role}</p>
          <p className="card-text mb-0">{member.bio}</p>
        </div>
      </article>
    </div>
  );
};

// Komponen utama Team, pakai memo biar ga re-render terus
const Team = memo(function Team() {
  // Render tampilan halaman Team
  return (
    <section
      className="py-5 bg-light"
      aria-labelledby="team-heading"
      role="region"
    >
      {/* Team styles moved to App.css and index.css */}

      <div className="container team-modern-font">
        <header className="text-center mb-5">
          <h1 id="team-heading" className="display-5 fw-bold mb-2" style={{letterSpacing:'.5px'}}>
            Tim Kreatif
          </h1>
          <p className="text-muted mb-0" style={{fontSize:'1.15rem'}}>
            Orang-orang di balik layar yang bikin ChillAjar jalan mulus.
          </p>
        </header>
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
