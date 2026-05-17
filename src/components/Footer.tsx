import { Link } from "@tanstack/react-router";
import { buildWaHref } from "./WhatsAppButton";

export function Footer() {
  return (
    <footer className="container-page pb-10 pt-20">
      <div className="rounded-[40px] bg-ink p-10 text-pure">
        <div className="grid gap-10 md:grid-cols-[1.5fr_1fr_1fr]">
          <div>
            <div className="font-display text-5xl md:text-6xl leading-none">
              Malas
              <br />
              Nugas?
              <span className="text-orange">.</span>
            </div>
            <p className="mt-5 max-w-sm text-sm opacity-80">
              Joki tugas, desain, dan website untuk mahasiswa & UMKM. Cepat, rapi,
              langsung jadi.
            </p>
          </div>

          <div>
            <div className="text-xs uppercase opacity-60">Menu</div>
            <ul className="mt-4 space-y-2 text-sm">
              <li><Link to="/services" className="hover:text-orange">Layanan</Link></li>
              <li><Link to="/portfolio" className="hover:text-orange">Portfolio</Link></li>
              <li><Link to="/demos" className="hover:text-orange">Live Demo</Link></li>
              <li><Link to="/contact" className="hover:text-orange">Kontak</Link></li>
            </ul>
          </div>

          <div>
            <div className="text-xs uppercase opacity-60">Hubungi</div>
            <ul className="mt-4 space-y-2 text-sm">
              <li>
                <a
                  href={buildWaHref()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-orange"
                >
                  WhatsApp 0857-3874-8543
                </a>
              </li>
              <li className="opacity-70">Indonesia · Online 24/7</li>
            </ul>
          </div>
        </div>

        <div className="mt-10 flex flex-col items-start justify-between gap-3 border-t border-pure/15 pt-6 text-xs opacity-60 md:flex-row">
          <span>© {new Date().getFullYear()} Malas Nugas. All rights reserved.</span>
          <span>Built with love & deadlines.</span>
        </div>
      </div>
    </footer>
  );
}
