import { useEffect } from "react";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { Hero } from "@/components/Hero";
import { Reveal, RevealGroup, RevealItem } from "@/components/Reveal";
import { demos } from "@/lib/projects";

export default function Demos() {
  useEffect(() => {
    document.title = "Live Demo — Malas Nugas";
  }, []);

  return (
    <div>
      <Hero
        eyebrow="Live Demo"
        lines={["Coba", "langsung"]}
        accent="."
        subtitle="Beberapa website yang sudah live & bisa kamu kunjungi sekarang juga. Klik kartu untuk buka di tab baru."
      />

      <div className="container-page space-y-24 py-24">
        <RevealGroup className="grid gap-4 md:grid-cols-2">
          {demos.map((d, i) => {
            const isOrange = d.tone === "orange";
            const isInk = d.tone === "ink";
            const bg = isOrange
              ? "bg-orange text-pure"
              : isInk
                ? "bg-ink text-pure"
                : "bg-violet text-pure";
            return (
              <RevealItem key={i}>
                <article
                  className={`rounded-[40px] ${bg} p-8 transition-transform duration-500 hover:-translate-y-2 md:p-10`}
                >
                  {d.url ? (
                    <a
                      href={d.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block aspect-video overflow-hidden rounded-[24px] border-2 border-pure/20 bg-pure"
                    >
                      <iframe
                        src={d.url}
                        title={d.title}
                        className="pointer-events-none h-full w-full"
                        loading="lazy"
                      />
                    </a>
                  ) : (
                    <div className="relative grid aspect-video place-items-center overflow-hidden rounded-[24px] bg-pure/10">
                      <div className="absolute inset-0 pixel-grid opacity-40" />
                      <span className="relative font-display text-5xl">SOON</span>
                    </div>
                  )}

                  <div className="mt-6 flex items-start justify-between gap-4">
                    <div>
                      <h2 className="font-display text-3xl md:text-4xl">{d.title}</h2>
                      <p className="mt-2 text-sm opacity-90">{d.description}</p>
                    </div>
                    {d.url && (
                      <a
                        href={d.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-pill whitespace-nowrap bg-pure text-sm text-ink"
                      >
                        Kunjungi →
                      </a>
                    )}
                  </div>
                </article>
              </RevealItem>
            );
          })}
        </RevealGroup>

        <Reveal className="rounded-[40px] bg-ash p-10 text-center md:p-16">
          <h2 className="font-display text-5xl md:text-7xl">Butuh website serupa?</h2>
          <p className="mx-auto mt-3 max-w-lg">
            Dari landing page sampai web app fungsional, kita siap garap.
          </p>
          <div className="mt-6 flex justify-center">
            <WhatsAppButton message="Halo Malas Nugas, saya mau order pembuatan website.">
              Order Website
            </WhatsAppButton>
          </div>
        </Reveal>
      </div>
    </div>
  );
}
