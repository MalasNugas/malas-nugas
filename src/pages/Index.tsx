import { Link } from "react-router-dom";
import { useEffect } from "react";
import { motion } from "framer-motion";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { Hero } from "@/components/Hero";
import { Marquee } from "@/components/Marquee";
import { Reveal, RevealGroup, RevealItem } from "@/components/Reveal";
import { CountUp } from "@/components/CountUp";
import { PixelBlob } from "@/components/PixelBlob";
import { services } from "@/lib/services";
import { projects } from "@/lib/projects";

export default function Index() {
  useEffect(() => {
    document.title = "Malas Nugas";
  }, []);

  return (
    <div>
      <Hero
        full
        scrollHint
        eyebrow="Jasa Joki No.1 Buat Kamu yang Mager"
        lines={["Malas", "Nugas"]}
        accent="?"
        subtitle="Serahin tugas desain, laporan, sampai bikin website ke kita. Cepat, rapi, dan deadline aman. Tinggal chat, tinggal pakai."
      >
        <WhatsAppButton message="Halo Malas Nugas, saya mau konsultasi & order jasa joki." />
        <Link to="/services" className="btn-pill border-2 border-pure text-pure">
          Lihat semua layanan →
        </Link>
      </Hero>

      <div className="hero-bleed bg-ink text-pure">
        <Marquee
          items={[
            "DESAIN LOGO",
            "BANNER",
            "KEMASAN",
            "UI / UX",
            "LAPORAN",
            "WEBSITE",
          ]}
        />
      </div>

      <div className="container-page space-y-24 py-24">
        <RevealGroup className="grid gap-4 md:grid-cols-4">
          {[
            { n: "500+", l: "Project selesai" },
            { n: "98%", l: "Klien puas" },
            { n: "24/7", l: "Standby di WA" },
            { n: "6", l: "Jenis layanan" },
          ].map((s, i) => (
            <RevealItem
              key={s.l}
              className={`rounded-[40px] p-10 ${i % 2 === 0 ? "bg-orange text-pure" : "bg-ash text-ink"}`}
            >
              <div className="font-display text-6xl">
                <CountUp value={s.n} />
              </div>
              <div className="mt-2 text-sm">{s.l}</div>
            </RevealItem>
          ))}
        </RevealGroup>

        <section>
          <Reveal>
            <div className="flex items-end justify-between gap-4">
              <h2 className="font-display text-6xl md:text-8xl">Layanan kita</h2>
              <Link to="/services" className="hidden md:inline link-underline text-sm">
                Semua layanan
              </Link>
            </div>
          </Reveal>

          <RevealGroup className="mt-10 border-t border-ink/15">
            {services.map((s) => (
              <RevealItem key={s.slug}>
                <Link
                  to="/services"
                  className="group flex items-center justify-between gap-6 border-b border-ink/15 py-7 transition-colors hover:bg-ink hover:text-pure hover:px-6"
                >
                  <div className="flex items-baseline gap-6">
                    <span className="font-display text-3xl text-orange">{s.emoji}</span>
                    <span className="font-display text-4xl md:text-6xl transition-transform duration-500 group-hover:translate-x-2">
                      {s.title}
                    </span>
                  </div>
                  <div className="hidden max-w-sm text-right text-sm opacity-70 md:block">
                    {s.short}
                  </div>
                  <span className="text-2xl transition-transform duration-500 group-hover:translate-x-2">
                    →
                  </span>
                </Link>
              </RevealItem>
            ))}
          </RevealGroup>
        </section>

        <section>
          <Reveal>
            <div className="flex items-end justify-between gap-4">
              <h2 className="font-display text-6xl md:text-8xl">Portfolio pilihan</h2>
              <Link to="/portfolio" className="hidden md:inline link-underline text-sm">
                Lihat semua
              </Link>
            </div>
          </Reveal>
          <RevealGroup className="mt-10 grid gap-4 md:grid-cols-3">
            {projects.slice(0, 3).map((p) => (
              <RevealItem key={p.title}>
                <ProjectCardMini title={p.title} category={p.category} tone={p.tone} />
              </RevealItem>
            ))}
          </RevealGroup>
        </section>
      </div>

      <section className="hero-bleed relative overflow-hidden bg-ink px-6 py-28 text-pure">
        <motion.div
          className="pointer-events-none absolute -right-10 -bottom-16 opacity-30"
          animate={{ y: [0, -20, 0] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        >
          <PixelBlob className="h-[320px] w-[320px]" variant="orange" />
        </motion.div>
        <div className="container-page relative">
          <Reveal>
            <h2 className="font-display text-6xl md:text-8xl">
              Deadline mepet?
              <br />
              <span className="text-orange">Chat aja.</span>
            </h2>
            <p className="mt-5 max-w-lg opacity-80">
              Konsultasi gratis. Bilang aja kebutuhanmu, kita kasih estimasi waktu & harga
              dalam hitungan menit.
            </p>
            <div className="mt-8">
              <WhatsAppButton variant="primary" />
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  );
}

function ProjectCardMini({ title, category, tone }: { title: string; category: string; tone: string }) {
  const bg = tone === "orange" ? "bg-orange" : tone === "violet" ? "bg-violet" : tone === "glare" ? "bg-glare" : "bg-ash";
  const fg = tone === "orange" || tone === "violet" ? "text-pure" : "text-ink";
  return (
    <div className={`group rounded-[40px] ${bg} ${fg} p-8 transition-transform duration-500 hover:-translate-y-2`}>
      <div className="aspect-[4/3] overflow-hidden rounded-[24px] bg-ink/10 grid place-items-center">
        <span className="font-display text-7xl opacity-30 transition-transform duration-700 group-hover:scale-110">
          {title.charAt(0)}
        </span>
      </div>
      <div className="mt-5 text-xs uppercase tracking-widest opacity-70">{category}</div>
      <div className="mt-1 font-display text-2xl">{title}</div>
    </div>
  );
}
