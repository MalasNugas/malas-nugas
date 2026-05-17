import { createFileRoute } from "@tanstack/react-router";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { PixelBlob } from "@/components/PixelBlob";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Kontak — Malas Nugas" },
      { name: "description", content: "Hubungi Malas Nugas via WhatsApp untuk order jasa joki. Online 24/7." },
      { property: "og:title", content: "Kontak — Malas Nugas" },
      { property: "og:description", content: "Chat WhatsApp untuk konsultasi gratis & order." },
      { property: "og:url", content: "/contact" },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
  }),
  component: ContactPage,
});

const faqs = [
  {
    q: "Berapa lama pengerjaannya?",
    a: "Tergantung jenis & kompleksitas. Desain logo biasanya 2–4 hari, laporan 3–7 hari, website 1–3 minggu. Bisa request express.",
  },
  {
    q: "Bagaimana sistem pembayarannya?",
    a: "DP 50% di awal, pelunasan setelah file final. Pembayaran via transfer bank, e-wallet, atau QRIS.",
  },
  {
    q: "Boleh revisi berapa kali?",
    a: "Mayoritas paket kita revisi sampai oke (dalam scope yang sudah disepakati). Detail per layanan bisa dibahas saat konsultasi.",
  },
  {
    q: "File mentah/source dikasih?",
    a: "Ya, semua source file (AI/PSD/Figma/source code) diserahkan ke kamu setelah pelunasan.",
  },
];

function ContactPage() {
  return (
    <div className="container-page space-y-10 py-10">
      <section className="relative overflow-hidden rounded-[40px] bg-orange p-10 text-pure md:p-16">
        <div className="absolute -right-10 -top-10 opacity-30">
          <PixelBlob className="h-[320px] w-[320px]" variant="violet" />
        </div>
        <div className="relative max-w-2xl">
          <span className="text-xs uppercase tracking-widest opacity-80">Kontak</span>
          <h1 className="mt-4 font-display text-6xl md:text-8xl">
            Mari ngobrol.
          </h1>
          <p className="mt-5 max-w-lg opacity-95">
            Cara tercepat: langsung chat WhatsApp. Online 24/7 (kecuali pas tidur).
            Konsultasi gratis, no spam, no ribet.
          </p>
          <div className="mt-7 flex flex-wrap gap-3">
            <WhatsAppButton variant="ink" message="Halo Malas Nugas, saya mau konsultasi." />
            <a href="tel:+6285738748543" className="btn-pill border-2 border-pure">
              0857-3874-8543
            </a>
          </div>
        </div>
      </section>

      <section className="grid gap-4 md:grid-cols-3">
        {[
          { label: "WhatsApp", value: "0857-3874-8543" },
          { label: "Jam respon", value: "< 10 menit" },
          { label: "Wilayah", value: "Seluruh Indonesia" },
        ].map((c, i) => (
          <div
            key={c.label}
            className={`rounded-[40px] p-8 ${i === 1 ? "bg-ink text-pure" : "bg-ash"}`}
          >
            <div className="text-xs uppercase tracking-widest opacity-70">{c.label}</div>
            <div className="mt-3 font-display text-3xl">{c.value}</div>
          </div>
        ))}
      </section>

      <section>
        <h2 className="font-display text-5xl md:text-7xl">FAQ singkat.</h2>
        <div className="mt-8 grid gap-4 md:grid-cols-2">
          {faqs.map((f) => (
            <div key={f.q} className="rounded-[40px] bg-ash p-8">
              <h3 className="font-display text-2xl">{f.q}</h3>
              <p className="mt-3 text-sm">{f.a}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
