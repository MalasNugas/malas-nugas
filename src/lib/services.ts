export interface Service {
  slug: string;
  title: string;
  short: string;
  description: string;
  deliverables: string[];
  emoji: string;
}

export const services: Service[] = [
  {
    slug: "logo",
    title: "Desain Logo",
    short: "Identitas brand yang ikonik & memorable.",
    description:
      "Logo custom dengan eksplorasi konsep, tipografi, dan palette warna. Cocok untuk personal brand, UMKM, sampai startup.",
    deliverables: ["3 konsep awal", "Revisi unlimited", "File AI/SVG/PNG/PDF", "Mockup preview"],
    emoji: "✶",
  },
  {
    slug: "banner",
    title: "Desain Banner",
    short: "Banner sosmed, web, & cetak siap pakai.",
    description:
      "Banner Instagram, feed carousel, header website, sampai banner cetak X-Banner. Layout punchy sesuai brand kamu.",
    deliverables: ["Multi-size siap publish", "Source file editable", "Pengerjaan 1–2 hari"],
    emoji: "▰",
  },
  {
    slug: "kemasan",
    title: "Desain Kemasan",
    short: "Packaging produk yang stand-out di rak.",
    description:
      "Desain kemasan makanan, minuman, skincare, atau produk handmade. Dieline siap cetak + mockup 3D.",
    deliverables: ["Dieline siap cetak", "Mockup realistis", "File CMYK 300dpi"],
    emoji: "▣",
  },
  {
    slug: "uiux",
    title: "UI / UX Design",
    short: "Desain aplikasi & website yang user love.",
    description:
      "Wireframe, hi-fi mockup, dan prototype interaktif. Pakai Figma, gampang di-handoff ke developer.",
    deliverables: ["Wireframe + hi-fi", "Prototype Figma", "Design system mini"],
    emoji: "◧",
  },
  {
    slug: "laporan",
    title: "Pembuatan Laporan",
    short: "Laporan tugas, magang, KP, skripsi.",
    description:
      "Pengerjaan laporan rapi sesuai template kampus: format, sitasi, daftar isi otomatis, dan revisi sampai acc.",
    deliverables: ["Format sesuai panduan", "Sitasi & daftar pustaka", "Revisi sampai oke"],
    emoji: "❐",
  },
  {
    slug: "website",
    title: "Pembuatan Website",
    short: "Landing page & web app modern.",
    description:
      "Website company profile, portfolio, sampai web app fungsional. Responsive, cepat, dan SEO-ready.",
    deliverables: ["Responsive design", "Deploy ke Vercel/Netlify", "Source code diserahkan"],
    emoji: "◰",
  },
];
