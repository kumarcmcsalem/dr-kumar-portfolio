const certificates = [
  {
    title: "MBBS Degree",
    image: "/images/mbbs.jpg"
  },
  {
    title: "Tamil Nadu Medical Council Registration",
    image: "/images/tmc.jpg"
  },
  {
    title: "PG Diploma in Ophthalmology",
    image: "/images/do.jpg"
  },
  {
    title: "Family Medicine Diploma - CMC Vellore",
    image: "/images/familymedicine.jpg"
  },
  {
    title: "Fellowship in Diabetology",
    image: "/images/diabetology.jpg"
  },
  {
    title: "Fellowship in Primary Care Pediatrics",
    image: "/images/pediatrics.jpg"
  },
  {
    title: "Geriatric Medicine",
    image: "/images/geriatrics.jpg"
  },
  {
    title: "Emergency & Poison Management",
    image: "/images/empoison.jpg"
  }
];

const qualifications = [
  {
    title: "MBBS",
    institute: "Coimbatore Medical College",
    year: "1997 - 2003",
    color: "from-cyan-400 to-blue-600"
  },
  {
    title: "PG Diploma in Family Medicine",
    institute: "CMC Vellore",
    year: "2008 - 2010",
    color: "from-emerald-400 to-green-600"
  },
  {
    title: "Fellowship in Diabetology",
    institute: "Martin Luther Christian University",
    year: "2021",
    color: "from-yellow-400 to-orange-500"
  },
  {
    title: "Fellowship in Primary Care Pediatrics",
    institute: "Martin Luther Christian University",
    year: "2021",
    color: "from-pink-400 to-purple-600"
  }
];

const services = [
  {
    icon: "🩺",
    title: "Family Medicine",
    description:
      "Comprehensive diagnosis and long-term care for acute and chronic diseases.",
    color: "from-cyan-400 to-blue-600"
  },
  {
    icon: "💉",
    title: "Diabetology",
    description:
      "Advanced diabetes management, insulin therapy and complication prevention.",
    color: "from-emerald-400 to-green-600"
  },
  {
    icon: "👴",
    title: "Geriatric Medicine",
    description:
      "Specialized elderly care focusing on quality of life and preventive health.",
    color: "from-yellow-400 to-orange-500"
  },
  {
    icon: "🚑",
    title: "Emergency Medicine",
    description:
      "Emergency stabilization, ICU exposure and acute medical management.",
    color: "from-red-400 to-orange-600"
  },
  {
    icon: "👶",
    title: "Primary Care Pediatrics",
    description:
      "Primary pediatric care and preventive child healthcare.",
    color: "from-pink-400 to-purple-600"
  },
  {
    icon: "❤️",
    title: "Preventive Health",
    description:
      "Lifestyle counseling, screening and preventive medicine.",
    color: "from-indigo-400 to-blue-600"
  }
];

export default function UltimateDrKumarPortfolio() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-950 via-black to-slate-900 text-white overflow-hidden relative scroll-smooth">

      {/* BACKGROUND EFFECTS */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">

        <div className="absolute top-0 left-0 w-[700px] h-[700px] bg-cyan-500/10 rounded-full blur-3xl animate-pulse"></div>

        <div className="absolute bottom-0 right-0 w-[700px] h-[700px] bg-emerald-500/10 rounded-full blur-3xl animate-pulse"></div>

        <div className="absolute top-1/2 left-1/2 w-[500px] h-[500px] bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>

      </div>

      {/* NAVBAR */}
      <nav className="fixed top-0 left-0 w-full z-50 backdrop-blur-2xl bg-black/30 border-b border-white/10">

        <div className="max-w-7xl mx-auto px-6 py-5 flex items-center justify-between">

          <div>
            <h1 className="text-3xl font-black bg-gradient-to-r from-cyan-300 to-emerald-300 text-transparent bg-clip-text">
              Dr. Kumar J
            </h1>

            <p className="text-sm text-slate-400">
              Senior Consultant Physician
            </p>
          </div>

          <div className="hidden lg:flex gap-10 text-lg font-semibold text-slate-300">

            <a href="#home" className="hover:text-cyan-300 transition-all duration-300">
              Home
            </a>

            <a href="#qualifications" className="hover:text-cyan-300 transition-all duration-300">
              Qualifications
            </a>

            <a href="#certificates" className="hover:text-cyan-300 transition-all duration-300">
              Certificates
            </a>

            <a href="#services" className="hover:text-cyan-300 transition-all duration-300">
              Services
            </a>

            <a href="#contact" className="hover:text-cyan-300 transition-all duration-300">
              Contact
            </a>

          </div>

        </div>

      </nav>

      {/* HERO */}
      <section
        id="home"
        className="relative min-h-screen flex items-center justify-center px-6 pt-32"
      >

        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-20 items-center relative z-10">

          <div>

            <div className="inline-block px-6 py-3 rounded-full bg-cyan-500/20 border border-cyan-400/30 text-cyan-300 font-bold tracking-widest text-sm">
              FAMILY MEDICINE • DIABETOLOGY • GERIATRICS
            </div>

            <h1 className="mt-8 text-6xl lg:text-8xl font-black leading-tight">
              Dr. Kumar J
            </h1>

            <h2 className="mt-6 text-3xl lg:text-4xl font-bold bg-gradient-to-r from-cyan-300 via-blue-400 to-emerald-300 text-transparent bg-clip-text">
              Senior Consultant Physician
            </h2>

            <p className="mt-8 text-2xl text-slate-300 leading-relaxed">
              Practicing for more than
              <span className="text-cyan-300 font-black"> 23 years </span>
              in
              <span className="text-cyan-300 font-bold"> Family Medicine</span>,
              <span className="text-emerald-300 font-bold"> Diabetology</span>,
              <span className="text-yellow-300 font-bold"> Geriatric Medicine</span>,
              <span className="text-pink-300 font-bold"> Primary Care Pediatrics</span>,
              and
              <span className="text-red-300 font-bold"> Emergency Medicine</span>.
            </p>

            <div className="mt-12 flex flex-wrap gap-5">

              <a
                href="#contact"
                className="px-10 py-5 rounded-3xl bg-gradient-to-r from-cyan-400 to-blue-600 font-bold text-xl hover:scale-105 transition-all duration-500 shadow-2xl shadow-cyan-500/30"
              >
                Book Consultation
              </a>

              <a
                href="/Dr_Kumar_J_Professional_Updated_CV.pdf"
                download
                className="px-10 py-5 rounded-3xl border border-white/20 backdrop-blur-xl font-bold text-xl hover:bg-white/10 transition-all duration-500"
              >
                Download CV
              </a>

            </div>

          </div>

          {/* PROFILE IMAGE */}
          <div className="relative flex justify-center">

            <div className="absolute w-[500px] h-[500px] rounded-full bg-cyan-500/20 blur-3xl animate-pulse"></div>

            <div className="relative rounded-[40px] p-2 bg-gradient-to-br from-cyan-400 via-blue-500 to-emerald-400 shadow-[0_0_80px_rgba(34,211,238,0.4)]">

              <div className="rounded-[36px] overflow-hidden">

                <img
                  src="/images/profile.jpg"
                  alt="Dr Kumar"
                  className="w-[420px] h-[560px] object-cover object-top"
                />

              </div>

            </div>

          </div>

        </div>

      </section>

      {/* STATS */}
      <section className="py-24 px-6">

        <div className="max-w-7xl mx-auto grid md:grid-cols-2 lg:grid-cols-4 gap-8">

          <div className="rounded-[35px] p-10 bg-gradient-to-br from-cyan-500/10 to-blue-500/10 border border-cyan-500/20 backdrop-blur-xl text-center">

            <h2 className="text-6xl font-black text-cyan-300 animate-pulse">
              23+
            </h2>

            <p className="mt-4 text-2xl text-slate-300">
              Years Experience
            </p>

          </div>

          <div className="rounded-[35px] p-10 bg-gradient-to-br from-emerald-500/10 to-green-500/10 border border-emerald-500/20 backdrop-blur-xl text-center">

            <h2 className="text-6xl font-black text-emerald-300 animate-pulse">
              1000K+
            </h2>

            <p className="mt-4 text-2xl text-slate-300">
              Patients Consulted
            </p>

          </div>

          <div className="rounded-[35px] p-10 bg-gradient-to-br from-yellow-500/10 to-orange-500/10 border border-yellow-500/20 backdrop-blur-xl text-center">

            <h2 className="text-6xl font-black text-yellow-300 animate-pulse">
              8+
            </h2>

            <p className="mt-4 text-2xl text-slate-300">
              Certifications
            </p>

          </div>

          <div className="rounded-[35px] p-10 bg-gradient-to-br from-blue-500/10 to-indigo-500/10 border border-blue-500/20 backdrop-blur-xl text-center">

            <h2 className="text-6xl font-black text-blue-300 animate-pulse">
              ICU
            </h2>

            <p className="mt-4 text-2xl text-slate-300">
              Critical Care
            </p>

          </div>

        </div>

      </section>
      {/* QUALIFICATIONS */}
      <section id="qualifications" className="py-24 px-6">

        <div className="max-w-7xl mx-auto">

          <div className="text-center">

            <h2 className="text-6xl font-black bg-gradient-to-r from-cyan-300 to-emerald-300 text-transparent bg-clip-text">
              Qualifications
            </h2>

            <p className="mt-6 text-2xl text-slate-400">
              Academic Excellence & Professional Training
            </p>

          </div>

          <div className="mt-20 grid md:grid-cols-2 lg:grid-cols-4 gap-8">

            {qualifications.map((q, index) => (

              <div
                key={index}
                className="rounded-[35px] p-[2px] bg-gradient-to-br hover:scale-105 transition-all duration-700 shadow-2xl"
              >

                <div className="rounded-[33px] bg-slate-900 p-10 h-full border border-white/10">

                  <div className={`w-20 h-20 rounded-3xl bg-gradient-to-br ${q.color}`}></div>

                  <h3 className="mt-8 text-3xl font-black">
                    {q.title}
                  </h3>

                  <p className="mt-4 text-slate-300 text-xl">
                    {q.institute}
                  </p>

                  <p className="mt-2 text-cyan-300 font-bold text-lg">
                    {q.year}
                  </p>

                </div>

              </div>

            ))}

          </div>

        </div>

      </section>

      {/* CERTIFICATES */}
      <section id="certificates" className="py-24 px-6">

        <div className="max-w-7xl mx-auto">

          <div className="text-center">

            <h2 className="text-6xl font-black bg-gradient-to-r from-yellow-300 via-cyan-300 to-emerald-300 text-transparent bg-clip-text">
              Certificate Gallery
            </h2>

          </div>

          <div className="mt-20 grid md:grid-cols-2 lg:grid-cols-3 gap-10">

            {certificates.map((certificate, index) => (

              <div
                key={index}
                className="group rounded-[40px] overflow-hidden bg-white/5 border border-white/10 backdrop-blur-2xl hover:scale-105 transition-all duration-700 shadow-2xl"
              >

                <img
                  src={certificate.image}
                  alt={certificate.title}
                  className="w-full h-80 object-cover group-hover:scale-105 transition-all duration-700"
                />

                <div className="p-6">

                  <h3 className="text-2xl font-bold text-white">
                    {certificate.title}
                  </h3>

                </div>

              </div>

            ))}

          </div>

        </div>

      </section>

      {/* SERVICES */}
      <section id="services" className="py-24 px-6">

        <div className="max-w-7xl mx-auto">

          <div className="text-center">

            <h2 className="text-6xl font-black bg-gradient-to-r from-cyan-300 via-blue-400 to-emerald-300 text-transparent bg-clip-text">
              Clinical Services
            </h2>

          </div>

          <div className="mt-20 grid md:grid-cols-2 lg:grid-cols-3 gap-10">

            {services.map((service, index) => (

              <div
                key={index}
                className="group rounded-[40px] p-10 bg-white/5 border border-white/10 backdrop-blur-2xl hover:scale-105 transition-all duration-700"
              >

                <div className={`w-20 h-20 rounded-3xl bg-gradient-to-br ${service.color} flex items-center justify-center text-4xl`}>
                  {service.icon}
                </div>

                <h3 className="mt-8 text-3xl font-black">
                  {service.title}
                </h3>

                <p className="mt-6 text-xl text-slate-300 leading-relaxed">
                  {service.description}
                </p>

              </div>

            ))}

          </div>

        </div>

      </section>
      {/* ABOUT */}
      <section className="py-24 px-6">

        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">

          <div className="relative">

            <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-emerald-500/20 blur-3xl rounded-full"></div>

            <div className="relative rounded-[40px] overflow-hidden border border-white/10 shadow-2xl">

              <img
                src="/images/profile.jpg"
                alt="Dr Kumar"
                className="w-full h-[700px] object-cover"
              />

            </div>

          </div>

          <div>

            <div className="inline-block px-6 py-3 rounded-full bg-cyan-500/20 border border-cyan-400/20 text-cyan-300 font-bold">
              ABOUT DOCTOR
            </div>

            <h2 className="mt-8 text-6xl font-black leading-tight bg-gradient-to-r from-cyan-300 via-blue-400 to-emerald-300 text-transparent bg-clip-text">
              Dr. Kumar J
            </h2>

            <p className="mt-8 text-2xl text-slate-300 leading-relaxed">
              Senior Consultant Physician with over 23 years of extensive clinical experience in Family Medicine, Diabetology, Geriatric Medicine, Emergency Medicine, Primary Care Pediatrics, Critical Care, Toxicology, Public Health and Preventive Healthcare.
            </p>

          </div>

        </div>

      </section>

      {/* HOSPITAL EXPERIENCE */}
      <section className="py-24 px-6">

        <div className="max-w-7xl mx-auto">

          <div className="text-center">

            <h2 className="text-6xl font-black bg-gradient-to-r from-cyan-300 to-emerald-300 text-transparent bg-clip-text">
              Hospital Experience
            </h2>

            <p className="mt-6 text-2xl text-slate-400">
              Clinical Practice • ICU • Emergency Medicine • Public Health
            </p>

          </div>

          <div className="mt-20 grid md:grid-cols-2 gap-10">

            <div className="rounded-[40px] p-10 bg-white/5 border border-white/10 backdrop-blur-2xl">

              <h3 className="text-3xl font-black text-cyan-300">
                Praanav Hospital, Salem
              </h3>

              <p className="mt-6 text-xl text-slate-300 leading-relaxed">
                Cardiac ICU & IMCU experience with extensive exposure to emergency medicine, critical care and acute cardiac management.
              </p>

            </div>

            <div className="rounded-[40px] p-10 bg-white/5 border border-white/10 backdrop-blur-2xl">

              <h3 className="text-3xl font-black text-emerald-300">
                Government Hospital Service
              </h3>

              <p className="mt-6 text-xl text-slate-300 leading-relaxed">
                Clinical service experience in Tiruvannamalai District Government Hospitals including emergency care and public healthcare systems.
              </p>

            </div>

            <div className="rounded-[40px] p-10 bg-white/5 border border-white/10 backdrop-blur-2xl">

              <h3 className="text-3xl font-black text-yellow-300">
                Tamil Nadu Health Systems Project
              </h3>

              <p className="mt-6 text-xl text-slate-300 leading-relaxed">
                Worked as Coordinator, Trainer and Manager in healthcare systems strengthening, preventive health and medical administration.
              </p>

            </div>

            <div className="rounded-[40px] p-10 bg-white/5 border border-white/10 backdrop-blur-2xl">

              <h3 className="text-3xl font-black text-pink-300">
                Consultant Practice
              </h3>

              <p className="mt-6 text-xl text-slate-300 leading-relaxed">
                Consultant in Family Medicine, Diabetology, Geriatrics, Primary Care Pediatrics and Emergency Medicine with expertise in chronic disease management and preventive healthcare.
              </p>

            </div>

          </div>

        </div>

      </section>
            {/* CONTACT */}
      <section id="contact" className="py-24 px-6">

        <div className="max-w-6xl mx-auto rounded-[50px] overflow-hidden border border-white/10 bg-gradient-to-br from-cyan-500/10 via-blue-500/10 to-emerald-500/10 backdrop-blur-2xl shadow-2xl">

          <div className="p-16 text-center">

            <h2 className="text-6xl font-black bg-gradient-to-r from-cyan-300 to-emerald-300 text-transparent bg-clip-text">
              Book Consultation
            </h2>

            <p className="mt-6 text-2xl text-slate-300">
              Family Medicine • Diabetology • Geriatric Medicine
            </p>

            <div className="mt-12 flex flex-wrap justify-center gap-6">

              <a
                href="tel:+919361911220"
                className="px-10 py-5 rounded-3xl bg-gradient-to-r from-cyan-400 to-blue-600 text-xl font-black hover:scale-105 transition-all duration-500"
              >
                📞 Call Now
              </a>

              <a
                href="https://wa.me/919361911220"
                target="_blank"
                rel="noopener noreferrer"
                className="px-10 py-5 rounded-3xl bg-gradient-to-r from-green-400 to-emerald-600 text-xl font-black hover:scale-105 transition-all duration-500"
              >
                💬 WhatsApp
              </a>

              <a
                href="mailto:kumarcmcsalem@gmail.com"
                className="px-10 py-5 rounded-3xl border border-white/20 backdrop-blur-xl text-xl font-black hover:bg-white/10 transition-all duration-500"
              >
                ✉ Email
              </a>

            </div>

          </div>

        </div>

      </section>

      {/* FOOTER */}
      <footer className="py-16 text-center border-t border-white/10 bg-black/30 backdrop-blur-xl">

        <p className="text-2xl font-semibold text-slate-300">
          © 2026 Dr. Kumar J • Professional Medical Portfolio
        </p>

        <p className="mt-4 text-slate-500 text-lg">
          Family Medicine • Diabetology • Geriatrics
        </p>

      </footer>

      {/* FLOATING WHATSAPP */}
      <a
        href="https://wa.me/919361911220"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-24 right-6 z-50"
      >

        <div className="group flex items-center gap-4 px-6 py-4 rounded-full bg-gradient-to-r from-green-400 to-emerald-600 shadow-[0_0_40px_rgba(34,197,94,0.5)] hover:scale-110 transition-all duration-500 animate-bounce">

          <div className="text-4xl">
            💬
          </div>

          <div className="hidden md:block">

            <p className="text-white font-black text-lg">
              WhatsApp Consultation
            </p>

            <p className="text-green-100 text-sm">
              Chat with Dr. Kumar
            </p>

          </div>

        </div>

      </a>

      {/* MOBILE NAVIGATION */}
      <div className="fixed bottom-0 left-0 w-full lg:hidden z-40 px-4 pb-4">

        <div className="rounded-[30px] bg-black/70 backdrop-blur-2xl border border-white/10 shadow-[0_0_40px_rgba(0,0,0,0.5)]">

          <div className="grid grid-cols-5 text-center py-4">

            <a href="#home" className="flex flex-col items-center text-cyan-300">
              <div className="text-2xl">🏠</div>
              <p className="text-xs font-bold mt-1">Home</p>
            </a>

            <a href="#qualifications" className="flex flex-col items-center text-slate-300">
              <div className="text-2xl">🎓</div>
              <p className="text-xs font-bold mt-1">Study</p>
            </a>

            <a href="#certificates" className="flex flex-col items-center text-slate-300">
              <div className="text-2xl">📜</div>
              <p className="text-xs font-bold mt-1">Docs</p>
            </a>

            <a href="#services" className="flex flex-col items-center text-slate-300">
              <div className="text-2xl">🩺</div>
              <p className="text-xs font-bold mt-1">Care</p>
            </a>

            <a href="#contact" className="flex flex-col items-center text-slate-300">
              <div className="text-2xl">☎️</div>
              <p className="text-xs font-bold mt-1">Contact</p>
            </a>

          </div>

        </div>

      </div>

    </main>
  );
}