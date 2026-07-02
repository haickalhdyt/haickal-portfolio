import Image from "next/image";
import { FaEnvelope, FaGithub, FaLinkedin, FaWhatsapp } from "react-icons/fa";

const technicalSkills = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Tailwind CSS",
  "Supabase",
  "PostgreSQL",
  "Git",
  "GitHub",
  "Vercel",
];

const professionalSkills = [
  "Teamwork",
  "Komunikasi",
  "Problem Solving",
  "Disiplin",
  "Adaptasi Cepat",
  "Ketelitian",
  "Customer Service",
  "Administrasi",
];

const projectTech = [
  "Next.js",
  "TypeScript",
  "Tailwind CSS",
  "Supabase",
  "PostgreSQL",
  "Vercel",
];

const whatsappLink = "https://wa.me/6281779487346";
const emailLink =
  "https://mail.google.com/mail/?view=cm&fs=1&to=haickalhdyt123@gmail.com&su=Kesempatan%20Kerja&body=Halo%20Haickal%2C%20saya%20melihat%20portfolio%20Anda%20dan%20ingin%20menghubungi%20Anda.";
const githubLink = "https://github.com/haickalhdyt";
const linkedinLink =
  "https://www.linkedin.com/in/haickal-hidayat-albarkah-07403440a/";
const perantaraLink = "https://perantara.vercel.app";

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-[#020617] text-white">
      <div className="pointer-events-none fixed inset-0 -z-10">
        <div className="absolute left-[-120px] top-[-120px] h-[360px] w-[360px] rounded-full bg-cyan-500/20 blur-3xl" />
        <div className="absolute right-[-120px] top-[180px] h-[420px] w-[420px] rounded-full bg-blue-600/20 blur-3xl" />
        <div className="absolute bottom-[-160px] left-1/2 h-[420px] w-[420px] -translate-x-1/2 rounded-full bg-indigo-600/20 blur-3xl" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(34,211,238,0.08),_transparent_35%),linear-gradient(to_bottom,_rgba(15,23,42,0.2),_rgba(2,6,23,1))]" />
      </div>

      <section className="mx-auto flex min-h-screen max-w-6xl flex-col justify-center px-6 py-20">
        <div className="grid items-center gap-12 lg:grid-cols-[1.35fr_0.65fr]">
          <div>
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-cyan-400">
              Personal Portfolio
            </p>

            <h1 className="max-w-4xl text-4xl font-bold leading-tight tracking-tight md:text-6xl">
              Haickal Hidayat Albarkah
            </h1>

            <p className="mt-4 text-xl font-medium text-slate-300">
              Professional Portfolio | Web Development Enthusiast
            </p>

            <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">
              Saya memiliki pengalaman kerja di bidang hospitality dan
              administrasi, serta sedang mengembangkan kemampuan di bidang web
              development melalui project nyata. Saya terbiasa bekerja secara
              disiplin, komunikatif, teliti, mampu bekerja dalam tim, dan cepat
              beradaptasi dengan lingkungan kerja baru.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="#projects"
                className="rounded-full bg-cyan-400 px-6 py-3 font-semibold text-slate-950 shadow-lg shadow-cyan-500/20 transition hover:bg-cyan-300"
              >
                Lihat Project
              </a>

              <a
                href={whatsappLink}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 rounded-full bg-emerald-400 px-6 py-3 font-semibold text-slate-950 shadow-lg shadow-emerald-500/20 transition hover:bg-emerald-300"
              >
                <FaWhatsapp className="text-lg" />
                Hubungi Saya
              </a>
            </div>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/[0.06] p-6 shadow-2xl shadow-cyan-950/40 backdrop-blur">
            <div className="rounded-2xl border border-white/10 bg-slate-950/80 p-5">
              <a
                href={linkedinLink}
                target="_blank"
                rel="noreferrer"
                aria-label="Buka profil LinkedIn Haickal Hidayat Albarkah"
                className="mx-auto block w-full max-w-[260px] overflow-hidden rounded-2xl border-4 border-cyan-400 bg-slate-800 shadow-lg shadow-cyan-500/20 transition hover:scale-[1.02] hover:border-blue-400"
              >
                <Image
                  src="/profile.jpg"
                  alt="Foto Haickal Hidayat Albarkah"
                  width={320}
                  height={400}
                  className="h-80 w-full object-cover object-top"
                  priority
                />
              </a>

              <div className="mt-6 text-center">
                <p className="text-lg font-semibold">
                  Haickal Hidayat Albarkah
                </p>

                <p className="mt-2 text-sm text-slate-400">
                  Jakarta Selatan, Indonesia
                </p>
              </div>
            </div>

            <div className="mt-6 space-y-3 text-sm">
              <a
                href={whatsappLink}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/[0.04] p-3 text-slate-300 transition hover:border-emerald-400/50 hover:bg-emerald-400/10 hover:text-emerald-200"
              >
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-emerald-400 text-xl text-slate-950">
                  <FaWhatsapp />
                </span>

                <span className="min-w-0">
                  <span className="block text-xs text-slate-500">WhatsApp</span>
                  <span className="font-medium">0817-7948-7346</span>
                </span>
              </a>

              <a
                href={emailLink}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/[0.04] p-3 text-slate-300 transition hover:border-cyan-400/50 hover:bg-cyan-400/10 hover:text-cyan-200"
              >
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-cyan-400 text-xl text-slate-950">
                  <FaEnvelope />
                </span>

                <span className="min-w-0">
                  <span className="block text-xs text-slate-500">Email</span>
                  <span className="break-all font-medium">
                    haickalhdyt123@gmail.com
                  </span>
                </span>
              </a>

              <a
                href={githubLink}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/[0.04] p-3 text-slate-300 transition hover:border-slate-400/50 hover:bg-white/10 hover:text-white"
              >
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white text-xl text-slate-950">
                  <FaGithub />
                </span>

                <span className="min-w-0">
                  <span className="block text-xs text-slate-500">GitHub</span>
                  <span className="break-all font-medium">
                    github.com/haickalhdyt
                  </span>
                </span>
              </a>

              <a
                href={linkedinLink}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/[0.04] p-3 text-slate-300 transition hover:border-blue-400/50 hover:bg-blue-400/10 hover:text-blue-200"
              >
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-blue-400 text-xl text-slate-950">
                  <FaLinkedin />
                </span>

                <span className="min-w-0">
                  <span className="block text-xs text-slate-500">LinkedIn</span>
                  <span className="break-all font-medium">
                    haickal-hidayat-albarkah
                  </span>
                </span>
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="border-t border-white/10 bg-slate-900/60 px-6 py-20 backdrop-blur">
        <div className="mx-auto max-w-6xl">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-cyan-400">
            About Me
          </p>

          <h2 className="mt-4 text-3xl font-bold md:text-4xl">Tentang Saya</h2>

          <div className="mt-8 grid gap-8 lg:grid-cols-2">
            <p className="leading-8 text-slate-300">
              Saya adalah pribadi yang memiliki pengalaman kerja profesional di
              bidang hospitality dan administrasi. Dari pengalaman tersebut,
              saya terbiasa menjaga kualitas pelayanan, bekerja dengan standar
              tinggi, berkomunikasi dengan baik, dan menyelesaikan pekerjaan
              secara teliti.
            </p>

            <p className="leading-8 text-slate-300">
              Selain pengalaman kerja, saya juga aktif mengembangkan kemampuan
              di bidang teknologi, khususnya web development. Saya membangun
              project digital sebagai bentuk pembelajaran, portfolio, dan bukti
              bahwa saya memiliki kemauan belajar serta kemampuan berkembang di
              bidang baru.
            </p>
          </div>
        </div>
      </section>

      <section className="px-6 py-20">
        <div className="mx-auto max-w-6xl">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-cyan-400">
            Skills
          </p>

          <h2 className="mt-4 text-3xl font-bold md:text-4xl">Keahlian</h2>

          <div className="mt-10 grid gap-8 lg:grid-cols-2">
            <div className="rounded-3xl border border-white/10 bg-white/[0.06] p-6 backdrop-blur">
              <h3 className="text-xl font-bold">Technical Skills</h3>

              <div className="mt-6 flex flex-wrap gap-3">
                {technicalSkills.map((skill) => (
                  <span
                    key={skill}
                    className="rounded-full border border-cyan-400/20 bg-cyan-400/10 px-4 py-2 text-sm text-cyan-100"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            <div className="rounded-3xl border border-white/10 bg-white/[0.06] p-6 backdrop-blur">
              <h3 className="text-xl font-bold">Professional Skills</h3>

              <div className="mt-6 flex flex-wrap gap-3">
                {professionalSkills.map((skill) => (
                  <span
                    key={skill}
                    className="rounded-full border border-indigo-400/20 bg-indigo-400/10 px-4 py-2 text-sm text-indigo-100"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section
        id="projects"
        className="border-t border-white/10 bg-slate-900/60 px-6 py-20 backdrop-blur"
      >
        <div className="mx-auto max-w-6xl">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-cyan-400">
            Project 1
          </p>

          <h2 className="mt-4 text-3xl font-bold md:text-4xl">
            Project Pertama
          </h2>

          <div className="mt-10 rounded-3xl border border-white/10 bg-slate-950/80 p-8 shadow-2xl shadow-cyan-950/20">
            <div className="flex flex-col justify-between gap-6 lg:flex-row lg:items-start">
              <div>
                <h3 className="text-2xl font-bold">Perantara</h3>
                <p className="mt-2 text-slate-400">
                  Web Asset Platform Case Study
                </p>
              </div>

              <div className="flex flex-wrap gap-3">
                <a
                  href={perantaraLink}
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-full bg-white px-5 py-2 text-sm font-semibold text-slate-950 transition hover:bg-slate-200"
                >
                  Live Demo
                </a>

                <span className="rounded-full border border-slate-700 px-5 py-2 text-sm font-semibold text-slate-400">
                  Source Code Private
                </span>
              </div>
            </div>

            <p className="mt-6 leading-8 text-slate-300">
              Perantara adalah project demo dan studi kasus platform aset
              berbasis web yang saya bangun menggunakan Next.js, TypeScript,
              Tailwind CSS, Supabase, PostgreSQL, dan Vercel. Project ini dibuat
              untuk mempelajari proses pengembangan aplikasi web modern, mulai
              dari tampilan antarmuka, autentikasi, database, pengelolaan data,
              upload media, hingga deployment.
            </p>

            <p className="mt-4 leading-8 text-slate-300">
              Untuk saat ini, Perantara digunakan sebagai portfolio dan studi
              kasus, bukan sebagai produk final. Source code tidak dibuka publik
              karena project ini memiliki potensi untuk dikembangkan menjadi
              produk atau bisnis di masa depan, namun demo aplikasi tersedia
              secara publik.
            </p>

            <div className="mt-6 grid gap-4 md:grid-cols-3">
              <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-5">
                <p className="font-semibold text-white">Frontend</p>
                <p className="mt-2 text-sm leading-6 text-slate-400">
                  Membuat layout aplikasi, halaman aset, responsive UI, dan
                  komponen antarmuka.
                </p>
              </div>

              <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-5">
                <p className="font-semibold text-white">Backend Integration</p>
                <p className="mt-2 text-sm leading-6 text-slate-400">
                  Mengintegrasikan Supabase, autentikasi, database, dan
                  pengelolaan data.
                </p>
              </div>

              <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-5">
                <p className="font-semibold text-white">Deployment</p>
                <p className="mt-2 text-sm leading-6 text-slate-400">
                  Melakukan deployment ke Vercel dan mengelola project
                  menggunakan GitHub.
                </p>
              </div>
            </div>

            <div className="mt-6 flex flex-wrap gap-3">
              {projectTech.map((tech) => (
                <span
                  key={tech}
                  className="rounded-full border border-cyan-400/20 bg-cyan-400/10 px-4 py-2 text-sm text-cyan-100"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="px-6 py-20">
        <div className="mx-auto max-w-6xl">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-cyan-400">
            Experience
          </p>

          <h2 className="mt-4 text-3xl font-bold md:text-4xl">
            Pengalaman Profesional
          </h2>

          <div className="mt-10 grid gap-6">
            <div className="rounded-3xl border border-white/10 bg-white/[0.06] p-6 backdrop-blur">
              <h3 className="text-xl font-bold">Grand Hyatt Jakarta</h3>

              <p className="mt-1 text-slate-400">
                Banquet Service Staff / Daily Worker • 2019 - 2023
              </p>

              <p className="mt-4 leading-8 text-slate-300">
                Memberikan layanan kepada tamu pada acara skala besar dan VIP,
                menjaga standar pelayanan hotel bintang lima, serta bekerja sama
                dalam tim untuk memastikan acara berjalan lancar.
              </p>
            </div>

            <div className="rounded-3xl border border-white/10 bg-white/[0.06] p-6 backdrop-blur">
              <h3 className="text-xl font-bold">Alila SCBD Jakarta</h3>

              <p className="mt-1 text-slate-400">
                Banquet Service Staff / Daily Worker • 2021 - 2022
              </p>

              <p className="mt-4 leading-8 text-slate-300">
                Memberikan pelayanan kepada tamu sesuai standar hotel mewah,
                membantu persiapan acara, serta mengembangkan kemampuan
                komunikasi, teamwork, dan adaptasi di lingkungan kerja formal.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="border-t border-white/10 bg-slate-900/60 px-6 py-20 backdrop-blur">
        <div className="mx-auto max-w-6xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-cyan-400">
            Contact
          </p>

          <h2 className="mt-4 text-3xl font-bold md:text-4xl">
            Mari Terhubung
          </h2>

          <p className="mx-auto mt-4 max-w-2xl leading-8 text-slate-300">
            Saya terbuka untuk kesempatan kerja di bidang web development,
            administrasi, hospitality, customer service, operational support,
            maupun posisi profesional lain yang sesuai dengan pengalaman dan
            kemampuan saya.
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <a
              href={whatsappLink}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 rounded-full bg-emerald-400 px-6 py-3 font-semibold text-slate-950 transition hover:bg-emerald-300"
            >
              <FaWhatsapp className="text-lg" />
              WhatsApp
            </a>

            <a
              href={emailLink}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 rounded-full bg-cyan-400 px-6 py-3 font-semibold text-slate-950 transition hover:bg-cyan-300"
            >
              <FaEnvelope className="text-lg" />
              Email Saya
            </a>

            <a
              href={githubLink}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 rounded-full border border-slate-600 bg-white/5 px-6 py-3 font-semibold text-white transition hover:border-cyan-400 hover:bg-cyan-400/10 hover:text-cyan-300"
            >
              <FaGithub className="text-lg" />
              GitHub
            </a>

            <a
              href={linkedinLink}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 rounded-full border border-slate-600 bg-white/5 px-6 py-3 font-semibold text-white transition hover:border-cyan-400 hover:bg-cyan-400/10 hover:text-cyan-300"
            >
              <FaLinkedin className="text-lg" />
              LinkedIn
            </a>

            <a
              href={perantaraLink}
              target="_blank"
              rel="noreferrer"
              className="rounded-full border border-slate-600 bg-white/5 px-6 py-3 font-semibold text-white transition hover:border-cyan-400 hover:bg-cyan-400/10 hover:text-cyan-300"
            >
              Demo Perantara
            </a>
          </div>
        </div>
      </section>

      <footer className="border-t border-white/10 px-6 py-10 text-center text-sm text-slate-400">
        <p className="font-medium text-white">Haickal Hidayat Albarkah</p>

        <p className="mt-2">Personal Portfolio</p>

        <p className="mt-2">
          Email: haickalhdyt123@gmail.com • Phone: 0817-7948-7346
        </p>
      </footer>
    </main>
  );
}
