"use client";

import Image from "next/image";
import { useState } from "react";
import { FaEnvelope, FaGithub, FaLinkedin, FaWhatsapp } from "react-icons/fa";

type Language = "id" | "en";

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

const projectTech = [
  "Next.js",
  "TypeScript",
  "Tailwind CSS",
  "Supabase",
  "PostgreSQL",
  "Vercel",
];

const whatsappLink = "https://wa.me/6281779487346";

const emailLinks = {
  id: "https://mail.google.com/mail/?view=cm&fs=1&to=haickalhdyt123@gmail.com&su=Kesempatan%20Kerja&body=Halo%20Haickal%2C%20saya%20melihat%20portfolio%20Anda%20dan%20ingin%20menghubungi%20Anda.",
  en: "https://mail.google.com/mail/?view=cm&fs=1&to=haickalhdyt123@gmail.com&su=Job%20Opportunity&body=Hello%20Haickal%2C%20I%20saw%20your%20portfolio%20and%20would%20like%20to%20contact%20you.",
};

const githubLink = "https://github.com/haickalhdyt";
const linkedinLink =
  "https://www.linkedin.com/in/haickal-hidayat-albarkah-07403440a/";
const perantaraLink = "https://perantara.vercel.app";

const content = {
  id: {
    heroBadge: "Portofolio Pribadi",
    heroRole: "Profil Profesional | Pengembangan Web & Kesiapan Kerja",
    heroDescription:
      "Saya memiliki pengalaman kerja di bidang administrasi, pelayanan konsumen, dan hospitality, serta terus mengembangkan kemampuan di bidang pengembangan web melalui proyek nyata. Saya terbiasa bekerja secara disiplin, komunikatif, teliti, mampu bekerja dalam tim, dan cepat beradaptasi dengan lingkungan kerja baru.",
    seeProject: "Lihat Proyek",
    contactMe: "Hubungi Saya",
    location: "Jakarta Selatan, Indonesia",

    aboutTitle: "Tentang Saya",
    aboutOne:
      "Saya adalah pribadi yang memiliki pengalaman kerja profesional di bidang administrasi, pelayanan konsumen, dan hospitality. Dari pengalaman tersebut, saya terbiasa menjaga kualitas pelayanan, mengelola pekerjaan secara rapi, berkomunikasi dengan baik, dan menyelesaikan pekerjaan secara teliti.",
    aboutTwo:
      "Selain pengalaman kerja, saya juga aktif mengembangkan kemampuan di bidang teknologi, khususnya pengembangan web. Saya membangun proyek digital sebagai bentuk pembelajaran, portofolio, dan bukti bahwa saya memiliki kemauan belajar serta kemampuan berkembang di bidang baru.",

    skillsTitle: "Keahlian",
    technicalSkillsTitle: "Keahlian Teknis",
    professionalSkillsTitle: "Keahlian Profesional",
    professionalSkills: [
      "Administrasi",
      "Komunikasi",
      "Pelayanan Konsumen",
      "Kerja Sama Tim",
      "Pemecahan Masalah",
      "Disiplin",
      "Cepat Beradaptasi",
      "Teliti",
    ],

    projectTitle: "Proyek 1",
    projectName: "Perantara",
    projectSubtitle: "Studi Kasus Platform Aset Berbasis Web",
    liveDemo: "Demo Langsung",
    privateSource: "Kode Sumber Privat",
    projectDescriptionOne:
      "Perantara adalah proyek demo dan studi kasus platform aset berbasis web yang saya bangun menggunakan Next.js, TypeScript, Tailwind CSS, Supabase, PostgreSQL, dan Vercel. Proyek ini dibuat untuk mempelajari proses pengembangan aplikasi web modern, mulai dari tampilan antarmuka, autentikasi, database, pengelolaan data, unggah media, hingga publikasi online.",
    projectDescriptionTwo:
      "Untuk saat ini, Perantara digunakan sebagai portofolio dan studi kasus, bukan sebagai produk final. Kode sumber tidak dibuka publik karena proyek ini memiliki potensi untuk dikembangkan menjadi produk atau bisnis di masa depan, namun demo aplikasi tersedia secara publik.",
    frontendTitle: "Antarmuka",
    frontendText:
      "Membuat layout aplikasi, halaman aset, tampilan responsif, dan komponen antarmuka pengguna.",
    backendTitle: "Integrasi Backend",
    backendText:
      "Mengintegrasikan Supabase, autentikasi, database, dan pengelolaan data.",
    deploymentTitle: "Publikasi Online",
    deploymentText:
      "Melakukan publikasi project ke Vercel dan mengelola kode menggunakan GitHub.",

    experienceTitle: "Pengalaman Profesional",
    lpkRole: "Anggota / Dukungan Administrasi • 2023 - 2026",
    lpkText:
      "Mendukung kegiatan administrasi, pengelolaan dokumen, pendataan berkas, serta membantu proses pelayanan dan komunikasi dengan klien atau konsumen yang membutuhkan pendampingan terkait permasalahan hukum dan perlindungan konsumen.",
    grandHyattRole: "Banquet Service Staff / Daily Worker • 2019 - 2023",
    grandHyattText:
      "Memberikan layanan kepada tamu pada acara skala besar dan VIP, menjaga standar pelayanan hotel bintang lima, serta bekerja sama dalam tim untuk memastikan acara berjalan lancar.",
    alilaRole: "Banquet Service Staff / Daily Worker • 2021 - 2022",
    alilaText:
      "Memberikan pelayanan kepada tamu sesuai standar hotel mewah, membantu persiapan acara, serta mengembangkan kemampuan komunikasi, kerja sama tim, dan adaptasi di lingkungan kerja formal.",

    contactTitle: "Mari Terhubung",
    contactText:
      "Saya terbuka untuk kesempatan kerja di bidang pengembangan web, administrasi, pelayanan konsumen, hospitality, dukungan operasional, maupun posisi profesional lain yang sesuai dengan pengalaman dan kemampuan saya.",
    emailMe: "Email Saya",
    githubButton: "GitHub",
    linkedinButton: "LinkedIn",
    demoPerantara: "Demo Perantara",

    whatsappLabel: "WhatsApp",
    emailLabel: "Email",
    githubLabel: "GitHub",
    linkedinLabel: "LinkedIn",

    footerText: "Portofolio Pribadi",
  },

  en: {
    heroBadge: "Personal Portfolio",
    heroRole: "Professional Profile | Web Development & Career Readiness",
    heroDescription:
      "I have professional experience in administration, consumer service, and hospitality, while continuing to develop my skills in web development through real projects. I am disciplined, communicative, detail-oriented, able to work in a team, and quick to adapt to new work environments.",
    seeProject: "View Project",
    contactMe: "Contact Me",
    location: "South Jakarta, Indonesia",

    aboutTitle: "About Me",
    aboutOne:
      "I have professional work experience in administration, consumer service, and hospitality. Through these experiences, I became accustomed to maintaining service quality, managing tasks in an organized way, communicating professionally, and completing work carefully.",
    aboutTwo:
      "In addition to my work experience, I am also actively developing my skills in technology, especially web development. I build digital projects as part of my learning process, portfolio, and proof of my willingness to grow in a new field.",

    skillsTitle: "Skills",
    technicalSkillsTitle: "Technical Skills",
    professionalSkillsTitle: "Professional Skills",
    professionalSkills: [
      "Administration",
      "Communication",
      "Consumer Service",
      "Teamwork",
      "Problem Solving",
      "Discipline",
      "Fast Adaptation",
      "Attention to Detail",
    ],

    projectTitle: "Project 1",
    projectName: "Perantara",
    projectSubtitle: "Web-Based Asset Platform Case Study",
    liveDemo: "Live Demo",
    privateSource: "Private Source Code",
    projectDescriptionOne:
      "Perantara is a demo project and case study for a web-based asset platform that I built using Next.js, TypeScript, Tailwind CSS, Supabase, PostgreSQL, and Vercel. This project was created to learn the modern web application development process, including user interface design, authentication, database management, data handling, media upload, and online deployment.",
    projectDescriptionTwo:
      "At this stage, Perantara is used as a portfolio and case study, not as a final product. The source code is not publicly available because this project has the potential to be developed into a product or business in the future, but the application demo is publicly accessible.",
    frontendTitle: "Frontend",
    frontendText:
      "Built application layouts, asset pages, responsive interfaces, and user interface components.",
    backendTitle: "Backend Integration",
    backendText:
      "Integrated Supabase, authentication, database, and data management.",
    deploymentTitle: "Deployment",
    deploymentText:
      "Deployed the project to Vercel and managed the code using GitHub.",

    experienceTitle: "Professional Experience",
    lpkRole: "Member / Administrative Support • 2023 - 2026",
    lpkText:
      "Supported administrative activities, document management, case file recording, and assisted with client or consumer communication for individuals seeking support related to legal and consumer protection matters.",
    grandHyattRole: "Banquet Service Staff / Daily Worker • 2019 - 2023",
    grandHyattText:
      "Provided service for large-scale and VIP events, maintained five-star hotel service standards, and worked with a team to ensure events ran smoothly.",
    alilaRole: "Banquet Service Staff / Daily Worker • 2021 - 2022",
    alilaText:
      "Provided guest service according to luxury hotel standards, assisted with event preparation, and developed communication, teamwork, and adaptability in a professional work environment.",

    contactTitle: "Let’s Connect",
    contactText:
      "I am open to job opportunities in web development, administration, consumer service, hospitality, operational support, or other professional roles that match my experience and abilities.",
    emailMe: "Email Me",
    githubButton: "GitHub",
    linkedinButton: "LinkedIn",
    demoPerantara: "Perantara Demo",

    whatsappLabel: "WhatsApp",
    emailLabel: "Email",
    githubLabel: "GitHub",
    linkedinLabel: "LinkedIn",

    footerText: "Personal Portfolio",
  },
};

export default function Home() {
  const [language, setLanguage] = useState<Language>("id");
  const t = content[language];
  const currentEmailLink = emailLinks[language];

  return (
    <main className="relative min-h-screen overflow-hidden bg-[#020617] text-white">
      <div className="pointer-events-none fixed inset-0 -z-10">
        <div className="absolute left-[-120px] top-[-120px] h-[360px] w-[360px] rounded-full bg-cyan-500/20 blur-3xl" />
        <div className="absolute right-[-120px] top-[180px] h-[420px] w-[420px] rounded-full bg-blue-600/20 blur-3xl" />
        <div className="absolute bottom-[-160px] left-1/2 h-[420px] w-[420px] -translate-x-1/2 rounded-full bg-indigo-600/20 blur-3xl" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(34,211,238,0.08),_transparent_35%),linear-gradient(to_bottom,_rgba(15,23,42,0.2),_rgba(2,6,23,1))]" />
      </div>

      <section className="mx-auto max-w-6xl px-6 pb-20 pt-16 lg:pt-20">
        <div className="mb-10 flex justify-start">
          <div className="rounded-full border border-white/10 bg-white/[0.06] p-1 backdrop-blur">
            <button
              type="button"
              onClick={() => setLanguage("id")}
              className={`rounded-full px-4 py-2 text-sm font-semibold transition ${
                language === "id"
                  ? "bg-cyan-400 text-slate-950"
                  : "text-slate-300 hover:text-white"
              }`}
            >
              ID
            </button>

            <button
              type="button"
              onClick={() => setLanguage("en")}
              className={`rounded-full px-4 py-2 text-sm font-semibold transition ${
                language === "en"
                  ? "bg-cyan-400 text-slate-950"
                  : "text-slate-300 hover:text-white"
              }`}
            >
              EN
            </button>
          </div>
        </div>

        <div className="grid items-start gap-12 lg:grid-cols-[1.05fr_0.95fr]">
          <div className="pt-0 lg:pt-2">
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-cyan-400">
              {t.heroBadge}
            </p>

            <h1 className="max-w-4xl text-4xl font-bold leading-tight tracking-tight md:text-6xl">
              Haickal Hidayat Albarkah
            </h1>

            <p className="mt-4 text-xl font-medium text-slate-300">
              {t.heroRole}
            </p>

            <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">
              {t.heroDescription}
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="#projects"
                className="rounded-full bg-cyan-400 px-6 py-3 font-semibold text-slate-950 shadow-lg shadow-cyan-500/20 transition hover:bg-cyan-300"
              >
                {t.seeProject}
              </a>

              <a
                href={whatsappLink}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 rounded-full bg-emerald-400 px-6 py-3 font-semibold text-slate-950 shadow-lg shadow-emerald-500/20 transition hover:bg-emerald-300"
              >
                <FaWhatsapp className="text-lg" />
                {t.contactMe}
              </a>
            </div>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/[0.06] p-5 shadow-2xl shadow-cyan-950/40 backdrop-blur lg:p-6">
            <div className="grid gap-5 xl:grid-cols-[260px_190px] xl:items-center xl:justify-center">
              <div className="w-full xl:max-w-[260px]">
                <div className="rounded-2xl border border-white/10 bg-slate-950/80 p-5">
                  <a
                    href={linkedinLink}
                    target="_blank"
                    rel="noreferrer"
                    aria-label="Open Haickal Hidayat Albarkah LinkedIn profile"
                    className="mx-auto block w-full overflow-hidden rounded-2xl border-4 border-cyan-400 bg-slate-800 shadow-lg shadow-cyan-500/20 transition hover:scale-[1.02] hover:border-blue-400"
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

                    <p className="mt-2 text-sm text-slate-400">{t.location}</p>
                  </div>
                </div>
              </div>

              <div className="grid gap-2.5">
                <a
                  href={whatsappLink}
                  target="_blank"
                  rel="noreferrer"
                  className="group flex items-center gap-2.5 rounded-2xl border border-white/10 bg-white/[0.04] px-3 py-2.5 text-slate-300 transition hover:border-emerald-400/50 hover:bg-emerald-400/10 hover:text-emerald-200"
                >
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-xl bg-emerald-400 text-base text-slate-950 transition group-hover:scale-105">
                    <FaWhatsapp />
                  </span>

                  <span className="min-w-0">
                    <span className="block text-sm font-semibold leading-4">
                      {t.whatsappLabel}
                    </span>
                    <span className="mt-0.5 block text-xs leading-4 text-slate-400">
                      0817-7948-7346
                    </span>
                  </span>
                </a>

                <a
                  href={currentEmailLink}
                  target="_blank"
                  rel="noreferrer"
                  className="group flex items-center gap-2.5 rounded-2xl border border-white/10 bg-white/[0.04] px-3 py-2.5 text-slate-300 transition hover:border-cyan-400/50 hover:bg-cyan-400/10 hover:text-cyan-200"
                >
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-xl bg-cyan-400 text-base text-slate-950 transition group-hover:scale-105">
                    <FaEnvelope />
                  </span>

                  <span className="min-w-0">
                    <span className="block text-sm font-semibold leading-4">
                      {t.emailLabel}
                    </span>
                    <span className="mt-0.5 block break-all text-[11px] leading-4 text-slate-400">
                      haickalhdyt123@gmail.com
                    </span>
                  </span>
                </a>

                <a
                  href={githubLink}
                  target="_blank"
                  rel="noreferrer"
                  className="group flex items-center gap-2.5 rounded-2xl border border-white/10 bg-white/[0.04] px-3 py-2.5 text-slate-300 transition hover:border-slate-400/50 hover:bg-white/10 hover:text-white"
                >
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-xl bg-white text-base text-slate-950 transition group-hover:scale-105">
                    <FaGithub />
                  </span>

                  <span className="min-w-0">
                    <span className="block text-sm font-semibold leading-4">
                      {t.githubLabel}
                    </span>
                    <span className="mt-0.5 block break-all text-[11px] leading-4 text-slate-400">
                      github.com/haickalhdyt
                    </span>
                  </span>
                </a>

                <a
                  href={linkedinLink}
                  target="_blank"
                  rel="noreferrer"
                  className="group flex items-center gap-2.5 rounded-2xl border border-white/10 bg-white/[0.04] px-3 py-2.5 text-slate-300 transition hover:border-blue-400/50 hover:bg-blue-400/10 hover:text-blue-200"
                >
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-xl bg-blue-400 text-base text-slate-950 transition group-hover:scale-105">
                    <FaLinkedin />
                  </span>

                  <span className="min-w-0">
                    <span className="block text-sm font-semibold leading-4">
                      {t.linkedinLabel}
                    </span>
                    <span className="mt-0.5 block break-all text-[11px] leading-4 text-slate-400">
                      haickal-hidayat-albarkah
                    </span>
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="border-t border-white/10 bg-slate-900/60 px-6 py-20 backdrop-blur">
        <div className="mx-auto max-w-6xl">
          <h2 className="text-3xl font-bold md:text-4xl">{t.aboutTitle}</h2>

          <div className="mt-8 grid gap-8 lg:grid-cols-2">
            <p className="leading-8 text-slate-300">{t.aboutOne}</p>
            <p className="leading-8 text-slate-300">{t.aboutTwo}</p>
          </div>
        </div>
      </section>

      <section className="px-6 py-20">
        <div className="mx-auto max-w-6xl">
          <h2 className="text-3xl font-bold md:text-4xl">{t.skillsTitle}</h2>

          <div className="mt-10 grid gap-8 lg:grid-cols-2">
            <div className="rounded-3xl border border-white/10 bg-white/[0.06] p-6 backdrop-blur">
              <h3 className="text-xl font-bold">{t.technicalSkillsTitle}</h3>

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
              <h3 className="text-xl font-bold">{t.professionalSkillsTitle}</h3>

              <div className="mt-6 flex flex-wrap gap-3">
                {t.professionalSkills.map((skill) => (
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
          <h2 className="text-3xl font-bold md:text-4xl">{t.projectTitle}</h2>

          <div className="mt-10 rounded-3xl border border-white/10 bg-slate-950/80 p-8 shadow-2xl shadow-cyan-950/20">
            <div className="flex flex-col justify-between gap-6 lg:flex-row lg:items-start">
              <div>
                <h3 className="text-2xl font-bold">{t.projectName}</h3>
                <p className="mt-2 text-slate-400">{t.projectSubtitle}</p>
              </div>

              <div className="flex flex-wrap gap-3">
                <a
                  href={perantaraLink}
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-full bg-white px-5 py-2 text-sm font-semibold text-slate-950 transition hover:bg-slate-200"
                >
                  {t.liveDemo}
                </a>

                <span className="rounded-full border border-slate-700 px-5 py-2 text-sm font-semibold text-slate-400">
                  {t.privateSource}
                </span>
              </div>
            </div>

            <p className="mt-6 leading-8 text-slate-300">
              {t.projectDescriptionOne}
            </p>

            <p className="mt-4 leading-8 text-slate-300">
              {t.projectDescriptionTwo}
            </p>

            <div className="mt-6 grid gap-4 md:grid-cols-3">
              <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-5">
                <p className="font-semibold text-white">{t.frontendTitle}</p>
                <p className="mt-2 text-sm leading-6 text-slate-400">
                  {t.frontendText}
                </p>
              </div>

              <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-5">
                <p className="font-semibold text-white">{t.backendTitle}</p>
                <p className="mt-2 text-sm leading-6 text-slate-400">
                  {t.backendText}
                </p>
              </div>

              <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-5">
                <p className="font-semibold text-white">{t.deploymentTitle}</p>
                <p className="mt-2 text-sm leading-6 text-slate-400">
                  {t.deploymentText}
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
          <h2 className="text-3xl font-bold md:text-4xl">
            {t.experienceTitle}
          </h2>

          <div className="mt-10 grid gap-6">
            <div className="rounded-3xl border border-white/10 bg-white/[0.06] p-6 backdrop-blur">
              <h3 className="text-xl font-bold">
                Lembaga Perlindungan Konsumen - Republik Indonesia
              </h3>
              <p className="mt-1 text-slate-400">{t.lpkRole}</p>
              <p className="mt-4 leading-8 text-slate-300">{t.lpkText}</p>
            </div>

            <div className="rounded-3xl border border-white/10 bg-white/[0.06] p-6 backdrop-blur">
              <h3 className="text-xl font-bold">Grand Hyatt Jakarta</h3>
              <p className="mt-1 text-slate-400">{t.grandHyattRole}</p>
              <p className="mt-4 leading-8 text-slate-300">
                {t.grandHyattText}
              </p>
            </div>

            <div className="rounded-3xl border border-white/10 bg-white/[0.06] p-6 backdrop-blur">
              <h3 className="text-xl font-bold">Alila SCBD Jakarta</h3>
              <p className="mt-1 text-slate-400">{t.alilaRole}</p>
              <p className="mt-4 leading-8 text-slate-300">{t.alilaText}</p>
            </div>
          </div>
        </div>
      </section>

      <section className="border-t border-white/10 bg-slate-900/60 px-6 py-20 backdrop-blur">
        <div className="mx-auto max-w-6xl text-center">
          <h2 className="text-3xl font-bold md:text-4xl">{t.contactTitle}</h2>

          <p className="mx-auto mt-4 max-w-2xl leading-8 text-slate-300">
            {t.contactText}
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
              href={currentEmailLink}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 rounded-full bg-cyan-400 px-6 py-3 font-semibold text-slate-950 transition hover:bg-cyan-300"
            >
              <FaEnvelope className="text-lg" />
              {t.emailMe}
            </a>

            <a
              href={githubLink}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 rounded-full border border-slate-600 bg-white/5 px-6 py-3 font-semibold text-white transition hover:border-cyan-400 hover:bg-cyan-400/10 hover:text-cyan-300"
            >
              <FaGithub className="text-lg" />
              {t.githubButton}
            </a>

            <a
              href={linkedinLink}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 rounded-full border border-slate-600 bg-white/5 px-6 py-3 font-semibold text-white transition hover:border-cyan-400 hover:bg-cyan-400/10 hover:text-cyan-300"
            >
              <FaLinkedin className="text-lg" />
              {t.linkedinButton}
            </a>

            <a
              href={perantaraLink}
              target="_blank"
              rel="noreferrer"
              className="rounded-full border border-slate-600 bg-white/5 px-6 py-3 font-semibold text-white transition hover:border-cyan-400 hover:bg-cyan-400/10 hover:text-cyan-300"
            >
              {t.demoPerantara}
            </a>
          </div>
        </div>
      </section>

      <footer className="border-t border-white/10 px-6 py-10 text-center text-sm text-slate-400">
        <p className="font-medium text-white">Haickal Hidayat Albarkah</p>
        <p className="mt-2">{t.footerText}</p>
        <p className="mt-2">
          Email: haickalhdyt123@gmail.com • Phone: 0817-7948-7346
        </p>
      </footer>
    </main>
  );
}
