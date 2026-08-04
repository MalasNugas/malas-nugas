import { Link, NavLink } from "react-router-dom";
import { WhatsAppButton } from "./WhatsAppButton";
import { useEffect, useState } from "react";

const nav = [
  { to: "/", label: "Beranda" },
  { to: "/services", label: "Layanan" },
  { to: "/portfolio", label: "Portfolio" },
  { to: "/demos", label: "Live Demo" },
  { to: "/contact", label: "Kontak" },
] as const;

export function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const solid = scrolled || open;

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        solid ? "bg-ink/95 py-2 backdrop-blur-md" : "bg-transparent py-5"
      }`}
    >
      <div className="container-page flex items-center justify-between gap-4 text-pure">
        <Link to="/" className="flex items-center gap-2" onClick={() => setOpen(false)}>
          <span className="grid h-9 w-9 place-items-center rounded-[14px] bg-orange text-pure font-display text-xl">
            M
          </span>
          <span className="font-display text-2xl tracking-wide">Malas Nugas</span>
        </Link>

        <nav className="hidden items-center gap-7 md:flex">
          {nav.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              end
              className={({ isActive }) =>
                `link-underline text-xs uppercase tracking-[0.2em] transition-opacity ${
                  isActive ? "opacity-100 text-orange" : "opacity-80 hover:opacity-100"
                }`
              }
            >
              {item.label}
            </NavLink>
          ))}
        </nav>

        <div className="hidden md:block">
          <WhatsAppButton className="!py-2 !px-5 text-sm">Order</WhatsAppButton>
        </div>

        <button
          className="md:hidden rounded-full bg-pure/15 p-3"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          <span className="block h-0.5 w-5 bg-pure mb-1" />
          <span className="block h-0.5 w-5 bg-pure mb-1" />
          <span className="block h-0.5 w-5 bg-pure" />
        </button>
      </div>

      {open && (
        <div className="container-page md:hidden">
          <div className="mt-3 rounded-[32px] bg-ink p-5 text-pure">
            <div className="flex flex-col gap-1">
              {nav.map((item) => (
                <NavLink
                  key={item.to}
                  to={item.to}
                  end
                  onClick={() => setOpen(false)}
                  className={({ isActive }) =>
                    isActive
                      ? "rounded-[40px] bg-orange px-4 py-3 text-base"
                      : "rounded-[40px] px-4 py-3 text-base hover:bg-pure/10"
                  }
                >
                  {item.label}
                </NavLink>
              ))}
              <WhatsAppButton className="mt-3 justify-center">Order via WhatsApp</WhatsAppButton>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
