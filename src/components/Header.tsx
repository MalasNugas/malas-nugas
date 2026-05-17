import { Link } from "@tanstack/react-router";
import { WhatsAppButton } from "./WhatsAppButton";
import { useState } from "react";

const nav = [
  { to: "/", label: "Beranda" },
  { to: "/services", label: "Layanan" },
  { to: "/portfolio", label: "Portfolio" },
  { to: "/demos", label: "Live Demo" },
  { to: "/contact", label: "Kontak" },
] as const;

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="container-page pt-6">
      <div className="flex items-center justify-between gap-4 rounded-[40px] bg-ash px-5 py-3">
        <Link to="/" className="flex items-center gap-2" onClick={() => setOpen(false)}>
          <span className="grid h-9 w-9 place-items-center rounded-[14px] bg-orange text-pure font-display text-xl">
            M
          </span>
          <span className="font-display text-2xl tracking-wide">Malas Nugas</span>
        </Link>

        <nav className="hidden items-center gap-1 md:flex">
          {nav.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              className="rounded-[40px] px-4 py-2 text-sm hover:bg-canvas"
              activeProps={{ className: "bg-ink text-pure rounded-[40px] px-4 py-2 text-sm" }}
              activeOptions={{ exact: true }}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden md:block">
          <WhatsAppButton className="!py-2 !px-5 text-sm">Order</WhatsAppButton>
        </div>

        <button
          className="md:hidden rounded-full bg-ink p-3 text-pure"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          <span className="block h-0.5 w-5 bg-pure mb-1" />
          <span className="block h-0.5 w-5 bg-pure mb-1" />
          <span className="block h-0.5 w-5 bg-pure" />
        </button>
      </div>

      {open && (
        <div className="mt-3 rounded-[40px] bg-ash p-5 md:hidden">
          <div className="flex flex-col gap-1">
            {nav.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                onClick={() => setOpen(false)}
                className="rounded-[40px] px-4 py-3 text-base hover:bg-canvas"
                activeProps={{ className: "bg-ink text-pure rounded-[40px] px-4 py-3 text-base" }}
                activeOptions={{ exact: true }}
              >
                {item.label}
              </Link>
            ))}
            <WhatsAppButton className="mt-3 justify-center">Order via WhatsApp</WhatsAppButton>
          </div>
        </div>
      )}
    </header>
  );
}
