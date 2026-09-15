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
  "Responsive Web Design",
  "Supabase",
  "PostgreSQL",
  "Git",
  "GitHub",
  "Vercel",
];

const perantaraTech = [
  "Next.js",
  "TypeScript",
  "Tailwind CSS",
  "Supabase",
  "PostgreSQL",
  "GitHub",
  "Vercel",
];

const liveBantuTech = [
  "Next.js",
  "TypeScript",
  "Tailwind CSS",
  "Supabase Auth",
  "Supabase Database",
  "Supabase Storage",
  "PostgreSQL",
  "Vercel",
  "GitHub",
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
const perantaraGithubLink = "https://github.com/perantaraid/perantara";
const liveBantuDemoLink = "https://livebantu.vercel.app";
const liveBantuSourceLink = "https://github.com/livebantu/livebantu";

const content = {
  id: {
    heroBadge: "Portofolio Profesional",

heroRole:
  "Junior Web Developer | Administrative Support | Customer Service & Hospitality",

heroDescription:
  "Saya memiliki pengalaman profesional di bidang administrasi, pelayanan konsumen, dan hospitality, serta mengembangkan kemampuan web development melalui proyek nyata. Saya membangun proyek menggunakan Next.js, TypeScript, Tailwind CSS, Supabase, PostgreSQL, GitHub, dan Vercel, serta terbiasa bekerja secara teliti, komunikatif, adaptif, dan mendukung kebutuhan operasional.",
    seeProject: "Lihat Proyek",
    contactMe: "Hubungi Saya",
    location: "Jakarta Selatan, Indonesia",

    aboutTitle: "Tentang Saya",
aboutOne:
  "Saya memiliki pengalaman profesional di bidang administrasi, pelayanan konsumen, dan hospitality. Saya terbiasa mengelola dokumen, melakukan data entry, berkomunikasi dengan klien dan konsumen, mendukung operasional, bekerja dalam tim, serta menjaga ketelitian dalam menyelesaikan pekerjaan.",

aboutTwo:
  "Selain pengalaman kerja tersebut, saya sedang mengembangkan kemampuan di bidang web development melalui proyek nyata. Saya membangun proyek menggunakan Next.js, TypeScript, Tailwind CSS, Supabase, PostgreSQL, GitHub, dan Vercel sebagai bagian dari pengembangan kemampuan teknis dan portofolio.",

    skillsTitle: "Keahlian",
    technicalSkillsTitle: "Keahlian Teknis",
    professionalSkillsTitle: "Keahlian Profesional",
    professionalSkills: [
  "Administrative Support",
  "Data Entry",
  "Document Management",
  "Microsoft Office",
  "Microsoft Excel",
  "Computer Operation",
  "Customer Service",
  "Hospitality",
  "Communication",
  "Teamwork",
  "Problem Solving",
  "Organizational Skills",
  "Attention to Detail",
],

    projectsTitle: "Proyek",
    perantaraProjectTitle: "Proyek 1",
projectName: "Perantara",
projectSubtitle: "Studi Kasus Platform Aset Berbasis Web",
liveDemo: "Demo Langsung",
sourceCode: "GitHub",

projectDescriptionOne:
  "Perantara adalah studi kasus platform aset berbasis web yang saya kembangkan untuk membangun dan menunjukkan kemampuan dalam pengembangan aplikasi web modern. Proyek ini mencakup pengembangan antarmuka pengguna, autentikasi, integrasi database, manajemen aset, upload media, dan deployment online.",

projectDescriptionTwo:
  "Proyek ini dikembangkan sebagai portfolio dan studi kasus untuk menunjukkan proses pengembangan aplikasi dari sisi frontend hingga integrasi backend menggunakan Next.js, TypeScript, Tailwind CSS, Supabase, PostgreSQL, GitHub, dan Vercel.",

frontendTitle: "Antarmuka & Responsive UI",
frontendText:
  "Mengembangkan halaman dan komponen antarmuka yang responsif untuk mendukung pengalaman pengguna pada platform aset berbasis web.",

backendTitle: "Database & Authentication",
backendText:
  "Mengintegrasikan autentikasi, database, pengelolaan data, serta layanan Supabase dan PostgreSQL.",

deploymentTitle: "Asset & Media Management",
deploymentText:
  "Mengembangkan alur pengelolaan aset, upload media atau dokumen, serta menyiapkan project untuk deployment online.",

    liveBantuProjectTitle: "Proyek 2",
    liveBantuName: "LiveBantu",
    liveBantuSubtitle: "MVP Interaksi Live Berbasis QR",
    liveBantuDescriptionOne:
      "LiveBantu adalah MVP/demo portfolio aplikasi interaksi live berbasis QR untuk membantu host membuat room live, membagikan link penonton, menerima polling, Q&A, request, giveaway, dan menampilkan overlay sederhana.",
    liveBantuDescriptionTwo:
      "Project ini dibuat sebagai portfolio full-stack menggunakan Next.js dan Supabase, dengan fitur auth, dashboard host, halaman publik penonton, overlay browser source, status room, dan simulasi billing manual.",
    liveBantuHostTitle: "Host & Room",
    liveBantuHostText:
      "Login dan register host, dashboard room milik user, buat room live, serta status room live, ended, archived, dan deleted.",
    liveBantuAudienceTitle: "Interaksi Penonton",
    liveBantuAudienceText:
      "Link penonton publik, QR audience, polling dan voting, Q&A, request, serta giveaway.",
    liveBantuOverlayTitle: "Overlay & Billing",
    liveBantuOverlayText:
      "Overlay browser source dan billing manual dengan upload bukti pembayaran.",

        experienceTitle: "Pengalaman Kerja",

lpkRole: "1. Part-time F&B Staff",
lpkCompany:
  "PT. Avisha Citra Mandiri (Penempatan: Grand Hyatt Jakarta & Hotel Bintang 5) • 2021 - 2023",
lpkText:
  "Memberikan pelayanan operasional makanan dan minuman untuk acara skala besar (MICE), perjamuan formal, dan tamu VIP sesuai standar hotel mewah.",

grandHyattRole: "2. Guest Service Associate (GSA) — Contract",
grandHyattCompany:
  "Timezone Margo City — Depok, Indonesia • 2022 - 2023 (Kontrak 6 Bulan)",
grandHyattText:
  "Meningkatkan kepuasan pelanggan dengan memberikan pelayanan informasi, penanganan keluhan secara solutif, serta memandu pengunjung di area wahana rekreasi. Mengelola transaksi kasir harian dan melakukan entri data laporan penjualan kartu bermain secara teliti dan tepat waktu.",

alilaRole: "3. Bendahara / Administrative Support (Freelance / On-Call)",
alilaCompany:
  "Lembaga Perlindungan Konsumen Republik Indonesia (LPK-RI) • 2023 - Sekarang (Masa Bakti KTA aktif s.d. 2030)",
alilaText:
  "Mengelola administrasi keuangan internal dan pencatatan kas organisasi secara fleksibel berdasarkan panggilan kebutuhan operasional lembaga. Mendukung manajemen dokumen hukum dan pendataan berkas pengaduan konsumen secara sistematis. Melakukan komunikasi langsung dengan konsumen terkait hak-hak serta administrasi legal perlindungan konsumen.",

devRole: "4. Junior Web Developer (Personal Projects)",
devCompany: "Jakarta, Indonesia • 2024 - Sekarang",
devText:
  "Mengembangkan proyek portofolio aplikasi web full-stack responsif menggunakan Next.js, TypeScript, Tailwind CSS, dan Supabase. Mengintegrasikan arsitektur database PostgreSQL, alur autentikasi pengguna, manajemen storage media, serta deployment online melalui Vercel.",

    contactTitle: "Mari Terhubung",
    contactText:
      "Saya terbuka untuk kesempatan kerja di bidang pengembangan web, administrasi, pelayanan konsumen, hospitality, dukungan operasional, maupun posisi profesional lain yang sesuai dengan pengalaman dan kemampuan saya.",
    emailMe: "Email Saya",
    githubButton: "GitHub",
    linkedinButton: "LinkedIn",

    whatsappLabel: "WhatsApp",
    emailLabel: "Email",
    githubLabel: "GitHub",
    linkedinLabel: "LinkedIn",

    footerText: "Portofolio Pribadi",
  },

  en: {
    heroBadge: "Professional Portfolio",

heroRole:
  "Junior Web Developer | Administrative Support | Customer Service & Hospitality",

heroDescription:
  "I have professional experience in administration, consumer service, and hospitality, while developing my web development skills through real projects. I build projects using Next.js, TypeScript, Tailwind CSS, Supabase, PostgreSQL, GitHub, and Vercel, and I am accustomed to working with accuracy, communication, adaptability, and operational support.",
    seeProject: "View Project",
    contactMe: "Contact Me",
    location: "South Jakarta, Indonesia",

    aboutTitle: "About Me",
aboutOne:
  "I have professional experience in administration, consumer service, and hospitality. I am accustomed to managing documents, performing data entry, communicating with clients and consumers, supporting operations, working as part of a team, and maintaining accuracy in my work.",

aboutTwo:
  "Alongside my professional experience, I am developing my web development skills through real projects. I build projects using Next.js, TypeScript, Tailwind CSS, Supabase, PostgreSQL, GitHub, and Vercel as part of my technical development and portfolio.",

    skillsTitle: "Skills",
    technicalSkillsTitle: "Technical Skills",
    professionalSkillsTitle: "Professional Skills",
    professionalSkills: [
  "Administrative Support",
  "Data Entry",
  "Document Management",
  "Microsoft Office",
  "Microsoft Excel",
  "Computer Operation",
  "Customer Service",
  "Hospitality",
  "Communication",
  "Teamwork",
  "Problem Solving",
  "Organizational Skills",
  "Attention to Detail",
],

    projectsTitle: "Projects",
    perantaraProjectTitle: "Project 1",
projectName: "Perantara",
projectSubtitle: "Web-Based Asset Platform Case Study",
liveDemo: "Live Demo",
sourceCode: "GitHub",

projectDescriptionOne:
  "Perantara is a web-based asset platform case study developed to demonstrate my skills in modern web application development. The project covers user interface development, authentication, database integration, asset management, media upload, and online deployment.",

projectDescriptionTwo:
  "The project was developed as a portfolio and case study to demonstrate the development process from frontend implementation to backend integration using Next.js, TypeScript, Tailwind CSS, Supabase, PostgreSQL, GitHub, and Vercel.",

frontendTitle: "Interface & Responsive UI",
frontendText:
  "Developed responsive pages and interface components to support the user experience of a web-based asset platform.",

backendTitle: "Database & Authentication",
backendText:
  "Integrated authentication, database services, data management, Supabase, and PostgreSQL.",

deploymentTitle: "Asset & Media Management",
deploymentText:
  "Implemented asset management flows, media or document uploads, and prepared the project for online deployment.",

    liveBantuProjectTitle: "Project 2",
    liveBantuName: "LiveBantu",
    liveBantuSubtitle: "QR-Based Live Interaction MVP",
    liveBantuDescriptionOne:
      "LiveBantu is an MVP/demo portfolio for a QR-based live interaction app that helps hosts create live rooms, share audience links, receive polling, Q&A, requests, giveaways, and display a simple overlay.",
    liveBantuDescriptionTwo:
      "This project was built as a full-stack portfolio project using Next.js and Supabase, with auth, a host dashboard, public audience pages, browser-source overlay, room statuses, and manual billing simulation.",
    liveBantuHostTitle: "Host & Room",
    liveBantuHostText:
      "Host login and registration, user-owned room dashboard, live room creation, and room statuses for live, ended, archived, and deleted.",
    liveBantuAudienceTitle: "Audience Interaction",
    liveBantuAudienceText:
      "Public audience links, audience QR, polling and voting, Q&A, requests, and giveaways.",
    liveBantuOverlayTitle: "Overlay & Billing",
    liveBantuOverlayText:
      "Browser-source overlay and manual billing with payment proof upload.",

        experienceTitle: "Work Experience",

lpkRole: "1. Part-time F&B Staff",
lpkCompany:
  "PT. Avisha Citra Mandiri (Placement: Grand Hyatt Jakarta & 5-Star Hotels) • 2021 - 2023",
lpkText:
  "Provided food and beverage operational services for large-scale events (MICE), formal banquets, and VIP guests in accordance with luxury hotel standards.",

grandHyattRole: "2. Guest Service Associate (GSA) — Contract",
grandHyattCompany:
  "Timezone Margo City — Depok, Indonesia • 2022 - 2023 (6-Month Contract)",
grandHyattText:
  "Improved customer satisfaction by providing information services, handling complaints effectively, and assisting visitors throughout the recreation area. Managed daily cashier transactions and maintained accurate and timely sales data entry for game cards.",

alilaRole: "3. Treasurer / Administrative Support (Freelance / On-Call)",
alilaCompany:
  "Indonesian Consumer Protection Agency (LPK-RI) • 2023 - Present (Active Membership ID until 2030)",
alilaText:
  "Managed internal financial administration and organizational cash records based on operational needs. Supported legal document management and consumer complaint records in a systematic manner. Communicated directly with consumers regarding consumer rights and legal protection administration.",

devRole: "4. Junior Web Developer (Personal Projects)",
devCompany: "Jakarta, Indonesia • 2024 - Present",
devText:
  "Developed responsive full-stack web portfolio projects using Next.js, TypeScript, Tailwind CSS, and Supabase. Integrated PostgreSQL database architecture, user authentication flows, media storage management, and online deployment through Vercel.",
  
    contactTitle: "Let’s Connect",
    contactText:
      "I am open to job opportunities in web development, administration, consumer service, hospitality, operational support, or other professional roles that match my experience and abilities.",
    emailMe: "Email Me",
    githubButton: "GitHub",
    linkedinButton: "LinkedIn",

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
          <h2 className="text-3xl font-bold md:text-4xl">{t.projectsTitle}</h2>

          <div className="mt-10 rounded-3xl border border-white/10 bg-slate-950/80 p-6 shadow-2xl shadow-cyan-950/20 md:p-8">
            <div className="flex flex-col justify-between gap-6 lg:flex-row lg:items-start">
              <div>
                <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-cyan-400">
                  {t.perantaraProjectTitle}
                </p>
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

  <a
    href={perantaraGithubLink}
    target="_blank"
    rel="noreferrer"
    className="rounded-full border border-slate-700 px-5 py-2 text-sm font-semibold text-slate-300 transition hover:border-cyan-400 hover:bg-cyan-400/10 hover:text-cyan-300"
  >
    GitHub
  </a>
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
              {perantaraTech.map((tech) => (
                <span
                  key={tech}
                  className="rounded-full border border-cyan-400/20 bg-cyan-400/10 px-4 py-2 text-sm text-cyan-100"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          <div className="mt-8 rounded-3xl border border-fuchsia-400/20 bg-slate-950/80 p-6 shadow-2xl shadow-fuchsia-950/20 md:p-8">
            <div className="flex flex-col justify-between gap-6 lg:flex-row lg:items-start">
              <div>
                <p className="mb-3 bg-gradient-to-r from-pink-300 via-violet-300 to-sky-300 bg-clip-text text-sm font-semibold uppercase tracking-[0.25em] text-transparent">
                  {t.liveBantuProjectTitle}
                </p>
                <h3 className="text-2xl font-bold">{t.liveBantuName}</h3>
                <p className="mt-2 text-slate-400">{t.liveBantuSubtitle}</p>
              </div>

              <div className="flex flex-wrap gap-3">
                <a
                  href={liveBantuDemoLink}
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-full bg-gradient-to-r from-pink-300 via-violet-300 to-sky-300 px-5 py-2 text-sm font-semibold text-slate-950 shadow-lg shadow-fuchsia-500/20 transition hover:brightness-110"
                >
                  {t.liveDemo}
                </a>

                <a
                  href={liveBantuSourceLink}
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-full border border-violet-400/30 px-5 py-2 text-sm font-semibold text-slate-300 transition hover:border-sky-300/60 hover:bg-violet-400/10 hover:text-sky-100"
                >
                  {t.sourceCode}
                </a>
              </div>
            </div>

            <p className="mt-6 leading-8 text-slate-300">
              {t.liveBantuDescriptionOne}
            </p>

            <p className="mt-4 leading-8 text-slate-300">
              {t.liveBantuDescriptionTwo}
            </p>

            <div className="mt-6 grid gap-4 md:grid-cols-3">
              <div className="rounded-2xl border border-pink-400/15 bg-pink-400/[0.05] p-5">
                <p className="font-semibold text-pink-100">
                  {t.liveBantuHostTitle}
                </p>
                <p className="mt-2 text-sm leading-6 text-slate-400">
                  {t.liveBantuHostText}
                </p>
              </div>

              <div className="rounded-2xl border border-violet-400/15 bg-violet-400/[0.05] p-5">
                <p className="font-semibold text-violet-100">
                  {t.liveBantuAudienceTitle}
                </p>
                <p className="mt-2 text-sm leading-6 text-slate-400">
                  {t.liveBantuAudienceText}
                </p>
              </div>

              <div className="rounded-2xl border border-sky-400/15 bg-sky-400/[0.05] p-5">
                <p className="font-semibold text-sky-100">
                  {t.liveBantuOverlayTitle}
                </p>
                <p className="mt-2 text-sm leading-6 text-slate-400">
                  {t.liveBantuOverlayText}
                </p>
              </div>
            </div>

            <div className="mt-6 flex flex-wrap gap-3">
              {liveBantuTech.map((tech) => (
                <span
                  key={tech}
                  className="rounded-full border border-violet-400/20 bg-gradient-to-r from-pink-500/10 via-violet-500/10 to-sky-500/10 px-4 py-2 text-sm text-violet-100"
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
          {t.lpkRole}
        </h3>
        <p className="mt-1 text-slate-400">
          {t.lpkCompany}
        </p>
        <p className="mt-4 leading-8 text-slate-300">
          {t.lpkText}
        </p>
      </div>

      <div className="rounded-3xl border border-white/10 bg-white/[0.06] p-6 backdrop-blur">
        <h3 className="text-xl font-bold">
          {t.grandHyattRole}
        </h3>
        <p className="mt-1 text-slate-400">
          {t.grandHyattCompany}
        </p>
        <p className="mt-4 leading-8 text-slate-300">
          {t.grandHyattText}
        </p>
      </div>

      <div className="rounded-3xl border border-white/10 bg-white/[0.06] p-6 backdrop-blur">
        <h3 className="text-xl font-bold">
          {t.alilaRole}
        </h3>
        <p className="mt-1 text-slate-400">
          {t.alilaCompany}
        </p>
        <p className="mt-4 leading-8 text-slate-300">
          {t.alilaText}
        </p>
      </div>

      <div className="rounded-3xl border border-white/10 bg-white/[0.06] p-6 backdrop-blur">
        <h3 className="text-xl font-bold">
          {t.devRole}
        </h3>
        <p className="mt-1 text-slate-400">
          {t.devCompany}
        </p>
        <p className="mt-4 leading-8 text-slate-300">
          {t.devText}
        </p>
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
