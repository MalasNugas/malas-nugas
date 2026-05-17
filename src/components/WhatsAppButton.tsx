import { cn } from "@/lib/utils";

const WA_NUMBER = "6285738748543";

type Variant = "primary" | "ghost" | "ink";

interface Props {
  message?: string;
  variant?: Variant;
  className?: string;
  children?: React.ReactNode;
}

export function buildWaHref(message?: string) {
  const text = message ?? "Halo Malas Nugas, saya mau order jasa joki.";
  return `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(text)}`;
}

export function WhatsAppButton({
  message,
  variant = "primary",
  className,
  children = "Order via WhatsApp",
}: Props) {
  const styles: Record<Variant, string> = {
    primary: "bg-orange text-pure hover:bg-ink",
    ghost: "bg-transparent text-ink border-2 border-ink hover:bg-ink hover:text-pure",
    ink: "bg-ink text-pure hover:bg-orange",
  };

  return (
    <a
      href={buildWaHref(message)}
      target="_blank"
      rel="noopener noreferrer"
      className={cn("btn-pill text-base", styles[variant], className)}
    >
      <svg
        viewBox="0 0 24 24"
        className="h-5 w-5 fill-current"
        aria-hidden="true"
      >
        <path d="M17.5 14.4c-.3-.2-1.7-.9-2-1-.3-.1-.5-.2-.7.2-.2.3-.8 1-1 1.2-.2.2-.4.2-.7 0-1.8-.9-3-1.6-4.2-3.6-.3-.5.3-.5.9-1.6.1-.2 0-.4 0-.6-.1-.2-.7-1.6-.9-2.2-.2-.6-.5-.5-.7-.5h-.6c-.2 0-.6.1-.9.4-.3.3-1.2 1.1-1.2 2.7s1.2 3.1 1.3 3.3c.2.2 2.4 3.7 5.9 5.2.8.4 1.5.6 2 .7.8.3 1.6.2 2.2.1.7-.1 2-.8 2.3-1.6.3-.8.3-1.5.2-1.6-.1-.1-.3-.2-.6-.3zM12 2C6.5 2 2 6.5 2 12c0 1.9.5 3.7 1.5 5.3L2 22l4.8-1.5c1.5.8 3.3 1.3 5.2 1.3 5.5 0 10-4.5 10-10S17.5 2 12 2z" />
      </svg>
      {children}
    </a>
  );
}
