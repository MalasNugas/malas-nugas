import { createFileRoute } from "@tanstack/react-router";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { projects } from "@/lib/projects";

export const Route = createFileRoute("/portfolio")({
  head: () => ({
    meta: [
      { title: "Portfolio — Malas Nugas" },
      { name: "description", content: "Kumpulan project Malas Nugas: logo, banner, kemasan, UI/UX, laporan, website." },
      { property: "og:title", content: "Portfolio — Malas Nugas" },
      { property: "og:description", content: "Lihat project yang sudah pernah kita kerjakan." },
      { property: "og:url", content: "/portfolio" },
    ],
    links: [{ rel: "canonical", href: "/portfolio" }],
  }),
  component: PortfolioPage,
});

const toneMap: Record<string, { bg: string; fg: string }> = {
  orange: { bg: "bg-orange", fg: "text-pure" },
  violet: { bg: "bg-violet", fg: "text-pure" },
  ink: { bg: "bg-ink", fg: "text-pure" },
  glare: { bg: "bg-glare", fg: "text-ink" },
  ash: { bg: "bg-ash", fg: "text-ink" },
};

function PortfolioPage() {
  return (
    <div className="container-page space-y-10 py-10">
      <section className="rounded-[40px] bg-ash p-10 md:p-16">
        <span className="text-xs uppercase tracking-widest">Portfolio</span>
        <h1 className="mt-4 font-display text-6xl md:text-8xl">
          Hasil kerja
          <br />
          <span className="text-orange">terbaik.</span>
        </h1>
        <p className="mt-5 max-w-2xl">
          Sebagian project yang sudah pernah kita selesaikan untuk mahasiswa,
          UMKM, dan brand kecil-menengah.
        </p>
      </section>

      <section className="grid gap-4 md:grid-cols-3">
        {projects.map((p) => {
          const t = toneMap[p.tone];
          return (
            <article key={p.title} className={`rounded-[40px] ${t.bg} ${t.fg} p-8`}>
              <div className="aspect-[4/3] rounded-[24px] bg-pure/10 grid place-items-center overflow-hidden relative">
                <div className="absolute inset-0 pixel-grid" />
                <span className="font-display text-8xl opacity-40 relative">
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
          );
        })}
      </section>

      <section className="rounded-[40px] bg-ink p-10 text-pure md:p-16 text-center">
        <h2 className="font-display text-4xl md:text-6xl">Project kamu next?</h2>
        <p className="mx-auto mt-3 max-w-lg opacity-80">
          Yuk diskusi ide kamu. Konsultasi gratis, langsung dapet estimasi.
        </p>
        <div className="mt-6 flex justify-center">
          <WhatsAppButton message="Halo Malas Nugas, saya mau diskusi project baru." />
        </div>
      </section>
    </div>
  );
}
