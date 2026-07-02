import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Haickal Hidayat Albarkah | Personal Portfolio",
  description:
    "Portfolio pribadi Haickal Hidayat Albarkah yang menampilkan pengalaman profesional di bidang hospitality, administrasi, serta pengembangan kemampuan web development melalui project digital.",
  keywords: [
    "Haickal Hidayat Albarkah",
    "Personal Portfolio",
    "Portfolio Haickal",
    "Hospitality Experience",
    "Administrative Experience",
    "Web Development",
    "Frontend Development",
    "Next.js",
    "TypeScript",
    "Tailwind CSS",
    "Supabase",
    "PostgreSQL",
    "Perantara",
  ],
  authors: [{ name: "Haickal Hidayat Albarkah" }],
  creator: "Haickal Hidayat Albarkah",
  openGraph: {
    title: "Haickal Hidayat Albarkah | Personal Portfolio",
    description:
      "Portfolio pribadi yang menampilkan pengalaman kerja profesional, kemampuan administrasi, hospitality, komunikasi, teamwork, serta project digital Perantara.",
    type: "website",
    locale: "id_ID",
  },
  twitter: {
    card: "summary_large_image",
    title: "Haickal Hidayat Albarkah | Personal Portfolio",
    description:
      "Portfolio pribadi Haickal Hidayat Albarkah dengan pengalaman profesional dan project digital Perantara.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
