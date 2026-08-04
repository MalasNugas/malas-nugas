import { useEffect } from "react";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { Hero } from "@/components/Hero";
import { Reveal, RevealGroup, RevealItem } from "@/components/Reveal";
import { projects } from "@/lib/projects";

const toneMap: Record<string, { bg: string; fg: string }> = {
  orange: { bg: "bg-orange", fg: "text-pure" },
  violet: { bg: "bg-violet", fg: "text-pure" },
  ink: { bg: "bg-ink", fg: "text-pure" },
  glare: { bg: "bg-glare", fg: "text-ink" },
  ash: { bg: "bg-ash", fg: "text-ink" },
};

export default function Portfolio() {
  useEffect(() => {
    document.title = "Portfolio — Malas Nugas";
  }, []);

  return (
    <div>
      <Hero
        eyebrow="Portfolio"
        lines={["Hasil kerja", "terbaik"]}
        accent="."
        subtitle="Sebagian project yang sudah pernah kita selesaikan untuk mahasiswa, UMKM, dan brand kecil-menengah."
      />

      <div className="container-page space-y-24 py-24">
        <RevealGroup className="grid gap-4 md:grid-cols-3">
          {projects.map((p) => {
            const t = toneMap[p.tone];
            return (
              <RevealItem key={p.title}>
                <article
                  className={`group rounded-[40px] ${t.bg} ${t.fg} p-8 transition-transform duration-500 hover:-translate-y-2`}
                >
                  <div className="relative grid aspect-[4/3] place-items-center overflow-hidden rounded-[24px] bg-pure/10">
                    <div className="absolute inset-0 pixel-grid" />
                    <span className="relative font-display text-8xl opacity-40 transition-transform duration-700 group-hover:scale-110">
                      {p.title.charAt(0)}
                    </span>
                  </div>
                  <div className="mt-5 flex items-center justify-between text-xs uppercase tracking-widest opacity-70">
                    <span>{p.category}</span>
                    <span>{p.year}</span>
                  </div>
                  <h2 className="mt-2 font-display text-3xl">{p.title}</h2>
                  <p className="mt-2 text-sm opacity-80">{p.client}</p>
                </article>
              </RevealItem>
            );
          })}
        </RevealGroup>

        <Reveal className="rounded-[40px] bg-ink p-10 text-center text-pure md:p-16">
          <h2 className="font-display text-5xl md:text-7xl">Project kamu next?</h2>
          <p className="mx-auto mt-3 max-w-lg opacity-80">
            Yuk diskusi ide kamu. Konsultasi gratis, langsung dapet estimasi.
          </p>
          <div className="mt-6 flex justify-center">
            <WhatsAppButton message="Halo Malas Nugas, saya mau diskusi project baru." />
          </div>
        </Reveal>
      </div>
    </div>
  );
}
