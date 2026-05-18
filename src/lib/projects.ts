export interface Project {
  title: string;
  category: string;
  client: string;
  year: string;
  tone: "orange" | "violet" | "ink" | "ash" | "glare";
}

export const projects: Project[] = [
  { title: "Mimika Rumah Kita", category: "Desain Logo", client: "Coffee shop lokal", year: "2024", tone: "orange" },
  { title: "Bapas malang", category: "Banner", client: "Komunitas kampus", year: "2024", tone: "violet" },
  { title: "Sambel Bu Tutik", category: "Kemasan", client: "UMKM Kuliner", year: "2024", tone: "glare" },
  { title: "Halo Dokter App", category: "UI / UX", client: "Health-tech startup", year: "2025", tone: "ash" },
  { title: "Laporan Magang BUMN", category: "Pembuatan Laporan", client: "Mahasiswa Teknik", year: "2024", tone: "ink" },
  { title: "Toko Bunga Mawar", category: "Pembuatan Website", client: "Florist Jakarta", year: "2025", tone: "orange" },
  { title: "GymBro Personal Brand", category: "Desain Logo", client: "Fitness coach", year: "2025", tone: "violet" },
  { title: "Roti Panggang Lite", category: "Kemasan", client: "Home bakery", year: "2024", tone: "glare" },
  { title: "Sistem Absen Mahasiswa", category: "UI / UX", client: "Project akhir", year: "2025", tone: "ash" },
];

export const demos = [
  {
    title: "Money Laundry",
    description: "Web app interaktif dengan tema modern dan animasi halus.",
    url: "https://moneylaundry-ruby.vercel.app",
    tone: "orange" as const,
  },
  {
    title: "Coming Soon",
    description: "Project rahasia, akan tayang sebentar lagi.",
    url: null,
    tone: "violet" as const,
  },
  {
    title: "Coming Soon",
    description: "Mau project kamu tampil di sini? Order sekarang.",
    url: null,
    tone: "ink" as const,
  },
];
