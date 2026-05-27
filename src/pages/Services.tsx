import { useEffect } from "react";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { services } from "@/lib/services";

export default function Services() {
  useEffect(() => {
    document.title = "Layanan — Malas Nugas";
  }, []);

  return (
    <div className="container-page space-y-10 py-10">
      <section className="rounded-[40px] bg-ash p-10 md:p-16">
        <span className="text-xs uppercase tracking-widest">Layanan</span>
        <h1 className="mt-4 font-display text-6xl md:text-8xl">Semua yang kamu butuh.</h1>
        <p className="mt-5 max-w-2xl">
          Dari desain logo sampai bikin website live. Pilih layanan, chat WhatsApp,
          beres. Harga menyesuaikan kebutuhan—konsultasi gratis.
        </p>
      </section>

      <section className="grid gap-4 md:grid-cols-2">
        {services.map((s, i) => (
          <article
            key={s.slug}
            className={`rounded-[40px] p-10 ${i % 3 === 0 ? "bg-orange text-pure" : "bg-ash text-ink"}`}
          >
            <div className="flex items-start justify-between gap-4">
              <div>
                <div className="font-display text-5xl">{s.emoji}</div>
                <h2 className="mt-4 font-display text-4xl">{s.title}</h2>
              </div>
              <span className={`rounded-full px-3 py-1 text-xs uppercase tracking-widest ${i % 3 === 0 ? "bg-pure/20" : "bg-ink text-pure"}`}>
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
          </article>
        ))}
      </section>
    </div>
  );
}
