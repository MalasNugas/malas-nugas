import { useEffect } from "react";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { Hero } from "@/components/Hero";
import { RevealGroup, RevealItem } from "@/components/Reveal";
import { services } from "@/lib/services";

export default function Services() {
  useEffect(() => {
    document.title = "Layanan — Malas Nugas";
  }, []);

  return (
    <div>
      <Hero
        eyebrow="Layanan"
        lines={["Semua yang", "kamu butuh"]}
        accent="."
        subtitle="Dari desain logo sampai bikin website live. Pilih layanan, chat WhatsApp, beres. Harga menyesuaikan kebutuhan—konsultasi gratis."
      />

      <div className="container-page py-24">
        <RevealGroup className="grid gap-4 md:grid-cols-2">
          {services.map((s, i) => (
            <RevealItem
              key={s.slug}
              className={`rounded-[40px] p-10 transition-transform duration-500 hover:-translate-y-2 ${
                i % 3 === 0 ? "bg-orange text-pure" : "bg-ash text-ink"
              }`}
            >
              <div className="flex items-start justify-between gap-4">
                <div>
                  <div className="font-display text-5xl">{s.emoji}</div>
                  <h2 className="mt-4 font-display text-4xl">{s.title}</h2>
                </div>
                <span
                  className={`rounded-full px-3 py-1 text-xs uppercase tracking-widest ${
                    i % 3 === 0 ? "bg-pure/20" : "bg-ink text-pure"
                  }`}
                >
                  #{s.slug}
                </span>
              </div>
              <p className="mt-4 text-sm md:text-base opacity-90">{s.description}</p>
              <ul className="mt-5 space-y-2 text-sm">
                {s.deliverables.map((d) => (
                  <li key={d} className="flex items-start gap-2">
                    <span className="mt-1 inline-block h-2 w-2 rounded-sm bg-current opacity-60" />
                    {d}
                  </li>
                ))}
              </ul>
              <div className="mt-7">
                <WhatsAppButton
                  variant={i % 3 === 0 ? "ink" : "primary"}
                  message={`Halo Malas Nugas, saya mau order jasa "${s.title}".`}
                >
                  Order {s.title}
                </WhatsAppButton>
              </div>
            </RevealItem>
          ))}
        </RevealGroup>
      </div>
    </div>
  );
}
