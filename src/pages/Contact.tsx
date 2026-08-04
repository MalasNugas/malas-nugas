import { useEffect } from "react";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { Hero } from "@/components/Hero";
import { Reveal, RevealGroup, RevealItem } from "@/components/Reveal";

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

export default function Contact() {
  useEffect(() => {
    document.title = "Kontak — Malas Nugas";
  }, []);

  return (
    <div>
      <Hero
        eyebrow="Kontak"
        lines={["Mari", "ngobrol"]}
        accent="."
        subtitle="Cara tercepat: langsung chat WhatsApp. Online 24/7 (kecuali pas tidur). Konsultasi gratis, no spam, no ribet."
      >
        <WhatsAppButton variant="ink" message="Halo Malas Nugas, saya mau konsultasi." />
        <a href="tel:+6285738748543" className="btn-pill border-2 border-pure text-pure">
          0857-3874-8543
        </a>
      </Hero>

      <div className="container-page space-y-24 py-24">
        <RevealGroup className="grid gap-4 md:grid-cols-3">
          {[
            { label: "WhatsApp", value: "0857-3874-8543" },
            { label: "Jam respon", value: "< 10 menit" },
            { label: "Wilayah", value: "Seluruh Indonesia" },
          ].map((c, i) => (
            <RevealItem
              key={c.label}
              className={`rounded-[40px] p-8 transition-transform duration-500 hover:-translate-y-2 ${
                i === 1 ? "bg-ink text-pure" : "bg-ash"
              }`}
            >
              <div className="text-xs uppercase tracking-widest opacity-70">{c.label}</div>
              <div className="mt-3 font-display text-3xl">{c.value}</div>
            </RevealItem>
          ))}
        </RevealGroup>

        <section>
          <Reveal>
            <h2 className="font-display text-6xl md:text-8xl">FAQ singkat.</h2>
          </Reveal>
          <RevealGroup className="mt-10 grid gap-4 md:grid-cols-2">
            {faqs.map((f) => (
              <RevealItem key={f.q} className="rounded-[40px] bg-ash p-8">
                <h3 className="font-display text-2xl">{f.q}</h3>
                <p className="mt-3 text-sm">{f.a}</p>
              </RevealItem>
            ))}
          </RevealGroup>
        </section>
      </div>
    </div>
  );
}
