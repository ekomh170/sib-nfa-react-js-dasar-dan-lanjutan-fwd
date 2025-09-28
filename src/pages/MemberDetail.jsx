import React from "react";
import { useParams } from "react-router";
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

// Komponen detail anggota tim dengan routing dinamis
const MemberDetail = () => {
  // Ambil parameter memberId dari URL
  const { memberId } = useParams();
  const member = TEAM_MEMBERS.find(m => m.id === memberId);

  // Jika member tidak ditemukan, tampilkan halaman error
  if (!member) {
    return (
      <section className="py-5 modern-section modern-font">
        <div className="container text-center">
          <h1 className="modern-title">Anggota Tim Tidak Ditemukan</h1>
          <p>Maaf, anggota tim dengan ID "{memberId}" tidak ditemukan.</p>
          <a href="/team" className="btn modern-btn">Kembali ke Tim</a>
        </div>
      </section>
    );
  }

  // Render detail anggota tim yang ditemukan
  return (
    <section className="py-5 modern-section modern-font">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-12 col-md-10 col-lg-8">
            <div className="card shadow-sm modern-card">
              <div className="card-body text-center">
                {/* Container foto profil dengan styling circular */}
                <div className="d-flex justify-content-center mb-4">
                  <div className="ratio ratio-1x1 bg-light rounded-circle overflow-hidden shadow" style={{width: '250px', height: '250px'}}>
                    <img
                      src={member.image}
                      alt={`Foto ${member.name}`}
                      className="w-100 h-100 object-fit-cover"
                    />
                  </div>
                </div>
                {/* Informasi nama, role, dan bio anggota */}
                <h1 className="h2 card-title mb-3 modern-title">{member.name}</h1>
                <p className="card-subtitle text-muted mb-4 fs-5">{member.role}</p>
                <p className="card-text mb-4 fs-6 lh-base">{member.bio}</p>
                {/* Tombol kembali ke halaman tim */}
                <a href="/team" className="btn modern-btn">Kembali ke Tim</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MemberDetail;