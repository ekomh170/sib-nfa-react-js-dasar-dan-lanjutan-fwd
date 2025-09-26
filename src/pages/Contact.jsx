import { useState } from "react";

const Contact = () => {
  // State buat data form, error, dan status loading/sent
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState({ loading: false, sent: false });

  // Fungsi validasi input form, biar user ga asal isi
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

  // Handle perubahan input, update state dan clear error
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((s) => ({ ...s, [name]: value }));
    // clear error on typing
    setErrors((s) => ({ ...s, [name]: undefined }));
  };

  // Handle submit form, cek validasi dulu, terus simulasi kirim data
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

  // Render tampilan halaman Contact
  return (
    <section className="py-5 modern-section modern-font">
      <div className="container">
        <h1 className="text-center mb-5 modern-title">Hubungi Kami</h1>
        <div className="row g-4 mx-0 justify-content-center">
          <div className="col-12 col-md-6 mb-4 mb-md-0">
            <div className="card shadow-sm modern-card h-100" style={{animationDelay:'0.1s'}}>
              <div className="card-body">
                <h3 className="mb-3 modern-title">Informasi Kontak</h3>
                <p className="mb-2"><strong>Alamat:</strong> Jl. ChillAjar No. 10, Jakarta Selatan, DKI Jakarta, Indonesia</p>
                <p className="mb-2"><strong>Email:</strong> info@chillajar.com</p>
                <p className="mb-2"><strong>Telepon:</strong> +62 812-3456-7890</p>
                <p className="mb-0"><strong>Jam Kerja:</strong> Senin - Jumat, 09:00 - 18:00 WIB</p>
              </div>
            </div>
          </div>
          <div className="col-12 col-md-6">
            <div className="card shadow-sm modern-card h-100" style={{animationDelay:'0.22s'}}>
              <div className="card-body">
                {status.sent && (
                  <div className="alert alert-success" role="alert">
                    Terima kasih! Pesan kamu sudah terkirim.
                  </div>
                )}
                <form onSubmit={handleSubmit} noValidate>
                  <div className="mb-3">
                    <label htmlFor="name" className="form-label">Nama</label>
                    <input
                      type="text"
                      className={`form-control ${errors.name ? "is-invalid" : ""}`}
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      aria-invalid={!!errors.name}
                      aria-describedby="nameHelp nameError"
                    />
                    <div id="nameHelp" className="form-text">
                      Tulis nama lengkap ya.
                    </div>
                    {errors.name && (
                      <div id="nameError" className="invalid-feedback">
                        {errors.name}
                      </div>
                    )}
                  </div>
                  <div className="mb-3">
                    <label htmlFor="email" className="form-label">Email</label>
                    <input
                      type="email"
                      className={`form-control ${errors.email ? "is-invalid" : ""}`}
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      aria-invalid={!!errors.email}
                      aria-describedby="emailError"
                    />
                    {errors.email && (
                      <div id="emailError" className="invalid-feedback">
                        {errors.email}
                      </div>
                    )}
                  </div>
                  <div className="mb-3">
                    <label htmlFor="message" className="form-label">Pesan</label>
                    <textarea
                      className={`form-control ${errors.message ? "is-invalid" : ""}`}
                      id="message"
                      name="message"
                      rows="4"
                      value={formData.message}
                      onChange={handleChange}
                      aria-invalid={!!errors.message}
                      aria-describedby="messageError"
                    />
                    {errors.message && (
                      <div id="messageError" className="invalid-feedback">
                        {errors.message}
                      </div>
                    )}
                  </div>
                  <button
                    type="submit"
                    className="btn modern-btn btn-lg shadow"
                    disabled={status.loading}
                  >
                    {status.loading ? "Mengirim..." : "Kirim Pesan"}
                  </button>
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
