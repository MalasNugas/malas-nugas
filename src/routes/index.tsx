import { createFileRoute, Link } from "@tanstack/react-router";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { PixelBlob } from "@/components/PixelBlob";
import { services } from "@/lib/services";
import { projects } from "@/lib/projects";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Malas Nugas" },
      {
        name: "description",
        content:
          "Order jasa joki: desain logo, banner, kemasan, UI/UX, laporan, dan website. Langsung chat WhatsApp.",
      },
      { property: "og:title", content: "Malas Nugas" },
      { property: "og:description", content: "Joki tugas, desain, dan website untuk mahasiswa & UMKM." },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="container-page space-y-10 py-10">
      {/* HERO */}
      <section className="relative overflow-hidden rounded-[40px] bg-ash p-8 md:p-16">
        <div className="absolute -right-12 -top-12 hidden md:block">
          <PixelBlob className="h-[420px] w-[420px]" />
        </div>
        <div className="absolute -bottom-20 -left-20 hidden md:block opacity-70">
          <PixelBlob className="h-[280px] w-[280px]" variant="violet" />
        </div>

        <div className="relative max-w-3xl">
          <span className="inline-block rounded-full bg-ink px-4 py-1 text-xs uppercase tracking-widest text-pure">
            Jasa Joki No.1 Buat Kamu yang Mager
          </span>
          <h1 className="mt-6 font-display text-6xl leading-[0.94] md:text-[120px]">
            Malas
            <br />
            Nugas
            <span className="text-orange">?</span>
          </h1>
          <p className="mt-6 max-w-xl text-base md:text-lg">
            Serahin tugas desain, laporan, sampai bikin website ke kita. Cepat, rapi,
            dan deadline aman. Tinggal chat, tinggal pakai.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <WhatsAppButton message="Halo Malas Nugas, saya mau konsultasi & order jasa joki." />
            <Link to="/services" className="btn-pill border-2 border-ink">
              Lihat semua layanan →
            </Link>
          </div>
        </div>
      </section>

      {/* STATS */}
      <section className="grid gap-4 md:grid-cols-4">
        {[
          { n: "500+", l: "Project selesai" },
          { n: "98%", l: "Klien puas" },
          { n: "24/7", l: "Standby di WA" },
          { n: "6", l: "Jenis layanan" },
        ].map((s, i) => (
          <div
            key={s.l}
            className={`rounded-[40px] p-10 ${i % 2 === 0 ? "bg-orange text-pure" : "bg-ash text-ink"}`}
          >
            <div className="font-display text-6xl">{s.n}</div>
            <div className="mt-2 text-sm">{s.l}</div>
          </div>
        ))}
      </section>

      {/* SERVICES PREVIEW */}
      <section>
        <div className="flex items-end justify-between gap-4">
          <h2 className="font-display text-5xl md:text-7xl">Layanan kita</h2>
          <Link to="/services" className="hidden md:inline text-sm underline underline-offset-4">
            Semua layanan
          </Link>
        </div>
        <div className="mt-8 grid gap-4 md:grid-cols-3">
          {services.map((s) => (
            <Link
              key={s.slug}
              to="/services"
              className="group block rounded-[40px] bg-ash p-10 transition hover:bg-ink hover:text-pure"
            >
              <div className="font-display text-5xl text-orange">{s.emoji}</div>
              <h3 className="mt-6 font-display text-3xl">{s.title}</h3>
              <p className="mt-3 text-sm opacity-80">{s.short}</p>
              <span className="mt-6 inline-block text-xs uppercase tracking-widest">
                Order →
              </span>
            </Link>
          ))}
        </div>
      </section>

      {/* PORTFOLIO PREVIEW */}
      <section>
        <div className="flex items-end justify-between gap-4">
          <h2 className="font-display text-5xl md:text-7xl">Portfolio pilihan</h2>
          <Link to="/portfolio" className="hidden md:inline text-sm underline underline-offset-4">
            Lihat semua
          </Link>
        </div>
        <div className="mt-8 grid gap-4 md:grid-cols-3">
          {projects.slice(0, 3).map((p) => (
            <ProjectCardMini key={p.title} title={p.title} category={p.category} tone={p.tone} />
          ))}
        </div>
      </section>

      {/* CTA BIG */}
      <section className="rounded-[40px] bg-ink p-10 text-pure md:p-16 relative overflow-hidden">
        <div className="absolute -right-10 -bottom-10 opacity-30">
          <PixelBlob className="h-[300px] w-[300px]" variant="orange" />
        </div>
        <div className="relative">
          <h2 className="font-display text-5xl md:text-7xl">
            Deadline mepet?
            <br />
            <span className="text-orange">Chat aja.</span>
          </h2>
          <p className="mt-4 max-w-lg opacity-80">
            Konsultasi gratis. Bilang aja kebutuhanmu, kita kasih estimasi waktu & harga
            dalam hitungan menit.
          </p>
          <div className="mt-6">
            <WhatsAppButton variant="primary" />
          </div>
        </div>
      </section>
    </div>
  );
}

function ProjectCardMini({ title, category, tone }: { title: string; category: string; tone: string }) {
  const bg = tone === "orange" ? "bg-orange" : tone === "violet" ? "bg-violet" : tone === "glare" ? "bg-glare" : "bg-ash";
  const fg = tone === "orange" || tone === "violet" ? "text-pure" : "text-ink";
  return (
    <div className={`rounded-[40px] ${bg} ${fg} p-8`}>
      <div className="aspect-[4/3] rounded-[24px] bg-ink/10 grid place-items-center">
        <span className="font-display text-7xl opacity-30">{title.charAt(0)}</span>
      </div>
      <div className="mt-5 text-xs uppercase tracking-widest opacity-70">{category}</div>
      <div className="mt-1 font-display text-2xl">{title}</div>
    </div>
  );
}
