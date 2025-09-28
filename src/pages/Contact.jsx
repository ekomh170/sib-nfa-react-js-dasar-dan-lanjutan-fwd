import { useState } from "react";

// Halaman kontak dengan form pengiriman pesan dan informasi kontak
const Contact = () => {
  // State untuk data form, error validasi, dan status pengiriman
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState({ loading: false, sent: false });

  // Fungsi validasi input form dengan aturan spesifik
  const validate = (data) => {
    const newErrors = {};
    if (!data.name.trim()) newErrors.name = "Nama wajib diisi.";
    else if (data.name.trim().length < 3)
      newErrors.name = "Nama minimal 3 karakter.";

    if (!data.email.trim()) newErrors.email = "Email wajib diisi.";
    else if (
      !/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i.test(data.email.trim())
    )
      newErrors.email = "Format email tidak valid.";

    if (!data.message.trim()) newErrors.message = "Pesan wajib diisi.";
    else if (data.message.trim().length < 10)
      newErrors.message = "Pesan minimal 10 karakter.";

    return newErrors;
  };

  // Handler perubahan input - update state dan clear error
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((s) => ({ ...s, [name]: value }));
    // clear error on typing
    setErrors((s) => ({ ...s, [name]: undefined }));
  };

  // Handler submit form - validasi dan simulasi pengiriman
  const handleSubmit = async (e) => {
    e.preventDefault();
    const v = validate(formData);
    setErrors(v);
    if (Object.keys(v).length) return;

    try {
      setStatus({ loading: true, sent: false });

      // Demo only
      await new Promise((r) => setTimeout(r, 600));

      setStatus({ loading: false, sent: true });
      setFormData({ name: "", email: "", message: "" });
    } catch {
      setStatus({ loading: false, sent: false });
      alert("Gagal mengirim. Coba lagi ya.");
    }
  };

  // Render halaman kontak dengan form dan informasi kontak
  return (
    <section className="py-5 modern-section modern-font">
      <div className="container">
        {/* Header section dengan judul dan deskripsi */}
        <div className="text-center mb-5">
          <h1 className="modern-title mb-3">Hubungi Kami</h1>
          <p className="modern-lead">Kami siap membantu Anda. Kirim pesan atau hubungi kami langsung.</p>
        </div>

        <div className="row g-5 justify-content-center">
          {/* Card informasi kontak - alamat, email, telepon, jam kerja */}
          <div className="col-12 col-lg-5">
            <div className="card shadow-sm modern-card h-100" style={{animationDelay:'0.1s'}}>
              <div className="card-body p-4">
                <h3 className="mb-4 modern-title text-center">
                  <i className="bi bi-info-circle me-2"></i>
                  Informasi Kontak
                </h3>

                <div className="d-flex align-items-start mb-3">
                  <i className="bi bi-geo-alt text-warning fs-4 me-3 mt-1"></i>
                  <div>
                    <strong>Alamat:</strong><br />
                    <span className="text-muted">Jl. ChillAjar No. 10<br />Jakarta Selatan, DKI Jakarta<br />Indonesia</span>
                  </div>
                </div>

                <div className="d-flex align-items-center mb-3">
                  <i className="bi bi-envelope text-warning fs-4 me-3"></i>
                  <div>
                    <strong>Email:</strong><br />
                    <a href="mailto:info@chillajar.com" className="text-decoration-none text-muted">info@chillajar.com</a>
                  </div>
                </div>

                <div className="d-flex align-items-center mb-3">
                  <i className="bi bi-telephone text-warning fs-4 me-3"></i>
                  <div>
                    <strong>Telepon:</strong><br />
                    <a href="tel:+6281234567890" className="text-decoration-none text-muted">+62 812-3456-7890</a>
                  </div>
                </div>

                <div className="d-flex align-items-start mb-3">
                  <i className="bi bi-clock text-warning fs-4 me-3 mt-1"></i>
                  <div>
                    <strong>Jam Kerja:</strong><br />
                    <span className="text-muted">Senin - Jumat<br />09:00 - 18:00 WIB</span>
                  </div>
                </div>

                <hr className="my-4" />

                {/* Section media sosial */}
                <h5 className="mb-3 modern-title">Ikuti Kami</h5>
                <div className="d-flex gap-3">
                  <a href="https://www.instagram.com/chill_ajar/" className="text-decoration-none" title="Instagram" target="_blank" rel="noopener noreferrer">
                    <i className="bi bi-instagram fs-3 text-muted"></i>
                  </a>
                  <a href="https://github.com/ekomh170" className="text-decoration-none" title="GitHub" target="_blank" rel="noopener noreferrer">
                    <i className="bi bi-github fs-3 text-muted"></i>
                  </a>
                  <a href="https://www.linkedin.com/in/eko-muchamad-haryono" className="text-decoration-none" title="LinkedIn" target="_blank" rel="noopener noreferrer">
                    <i className="bi bi-linkedin fs-3 text-muted"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Card form kontak - input nama, email, pesan */}
          <div className="col-12 col-lg-6">
            <div className="card shadow-sm modern-card h-100" style={{animationDelay:'0.22s'}}>
              <div className="card-body p-4">
                <h3 className="mb-4 modern-title text-center">
                  <i className="bi bi-envelope-paper me-2"></i>
                  Kirim Pesan
                </h3>

                {/* Alert sukses pengiriman pesan */}
                {status.sent && (
                  <div className="alert alert-success d-flex align-items-center" role="alert">
                    <i className="bi bi-check-circle-fill me-2"></i>
                    <div>Terima kasih! Pesan Anda sudah terkirim. Kami akan segera menghubungi Anda.</div>
                  </div>
                )}

                <form onSubmit={handleSubmit} noValidate>
                  {/* Input field untuk nama */}
                  <div className="mb-3">
                    <label htmlFor="name" className="form-label fw-semibold">
                      <i className="bi bi-person me-1"></i>Nama Lengkap
                    </label>
                    <input
                      type="text"
                      className={`form-control form-control-lg ${errors.name ? "is-invalid" : ""}`}
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Masukkan nama lengkap Anda"
                      aria-invalid={!!errors.name}
                      aria-describedby="nameHelp nameError"
                    />
                    <div id="nameHelp" className="form-text">
                      Tulis nama lengkap sesuai identitas
                    </div>
                    {errors.name && (
                      <div id="nameError" className="invalid-feedback">
                        <i className="bi bi-exclamation-triangle me-1"></i>{errors.name}
                      </div>
                    )}
                  </div>

                  {/* Input field untuk email */}
                  <div className="mb-3">
                    <label htmlFor="email" className="form-label fw-semibold">
                      <i className="bi bi-envelope me-1"></i>Email
                    </label>
                    <input
                      type="email"
                      className={`form-control form-control-lg ${errors.email ? "is-invalid" : ""}`}
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="contoh@email.com"
                      aria-invalid={!!errors.email}
                      aria-describedby="emailError"
                    />
                    {errors.email && (
                      <div id="emailError" className="invalid-feedback">
                        <i className="bi bi-exclamation-triangle me-1"></i>{errors.email}
                      </div>
                    )}
                  </div>

                  {/* Textarea untuk pesan */}
                  <div className="mb-4">
                    <label htmlFor="message" className="form-label fw-semibold">
                      <i className="bi bi-chat-text me-1"></i>Pesan
                    </label>
                    <textarea
                      className={`form-control form-control-lg ${errors.message ? "is-invalid" : ""}`}
                      id="message"
                      name="message"
                      rows="5"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Tulis pesan atau pertanyaan Anda di sini..."
                      aria-invalid={!!errors.message}
                      aria-describedby="messageError"
                    />
                    {errors.message && (
                      <div id="messageError" className="invalid-feedback">
                        <i className="bi bi-exclamation-triangle me-1"></i>{errors.message}
                      </div>
                    )}
                  </div>

                  {/* Tombol submit dengan loading state */}
                  <div className="d-grid">
                    <button
                      type="submit"
                      className="btn modern-btn btn-lg shadow"
                      disabled={status.loading}
                    >
                      {status.loading ? (
                        <>
                          <span className="spinner-border spinner-border-sm me-2" role="status"></span>
                          Mengirim...
                        </>
                      ) : (
                        <>
                          <i className="bi bi-send me-2"></i>
                          Kirim Pesan
                        </>
                      )}
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
