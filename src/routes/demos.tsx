import { createFileRoute } from "@tanstack/react-router";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { demos } from "@/lib/projects";

export const Route = createFileRoute("/demos")({
  head: () => ({
    meta: [
      { title: "Live Demo — Malas Nugas" },
      { name: "description", content: "Live demo website hasil karya Malas Nugas. Bisa langsung dicoba." },
      { property: "og:title", content: "Live Demo — Malas Nugas" },
      { property: "og:description", content: "Coba langsung website yang sudah kita buat." },
      { property: "og:url", content: "/demos" },
    ],
    links: [{ rel: "canonical", href: "/demos" }],
  }),
  component: DemosPage,
});

function DemosPage() {
  return (
    <div className="container-page space-y-10 py-10">
      <section className="rounded-[40px] bg-ash p-10 md:p-16">
        <span className="text-xs uppercase tracking-widest">Live Demo</span>
        <h1 className="mt-4 font-display text-6xl md:text-8xl">
          Coba <span className="text-orange">langsung.</span>
        </h1>
        <p className="mt-5 max-w-2xl">
          Beberapa website yang sudah live & bisa kamu kunjungi sekarang juga.
          Klik kartu untuk buka di tab baru.
        </p>
      </section>

      <section className="grid gap-4 md:grid-cols-2">
        {demos.map((d, i) => {
          const isOrange = d.tone === "orange";
          const isInk = d.tone === "ink";
          const bg = isOrange ? "bg-orange text-pure" : isInk ? "bg-ink text-pure" : "bg-violet text-pure";
          return (
            <article key={i} className={`rounded-[40px] ${bg} p-8 md:p-10`}>
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
                    className="h-full w-full pointer-events-none"
                    loading="lazy"
                  />
                </a>
              ) : (
                <div className="aspect-video rounded-[24px] bg-pure/10 grid place-items-center relative overflow-hidden">
                  <div className="absolute inset-0 pixel-grid opacity-40" />
                  <span className="font-display text-5xl relative">SOON</span>
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
                    className="btn-pill bg-pure text-ink text-sm whitespace-nowrap"
                  >
                    Kunjungi →
                  </a>
                )}
              </div>
            </article>
          );
        })}
      </section>

      <section className="rounded-[40px] bg-ash p-10 md:p-16 text-center">
        <h2 className="font-display text-4xl md:text-6xl">
          Butuh website serupa?
        </h2>
        <p className="mx-auto mt-3 max-w-lg">
          Dari landing page sampai web app fungsional, kita siap garap.
        </p>
        <div className="mt-6 flex justify-center">
          <WhatsAppButton message="Halo Malas Nugas, saya mau order pembuatan website." >
            Order Website
          </WhatsAppButton>
        </div>
      </section>
    </div>
  );
}
