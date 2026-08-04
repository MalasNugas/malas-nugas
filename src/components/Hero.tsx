import { motion } from "framer-motion";
import type { ReactNode } from "react";
import { PixelBlob } from "./PixelBlob";

interface Props {
  eyebrow?: string;
  lines: string[];
  accent?: string;
  subtitle?: string;
  children?: ReactNode;
  full?: boolean;
  scrollHint?: boolean;
}

export function Hero({
  eyebrow,
  lines,
  accent,
  subtitle,
  children,
  full = false,
  scrollHint = false,
}: Props) {
  return (
    <section
      className={`hero-bleed relative isolate flex flex-col justify-center overflow-hidden text-pure ${
        full ? "min-h-screen pt-32 pb-24" : "min-h-[70vh] pt-36 pb-20"
      }`}
    >
      <div className="hero-gradient absolute inset-0 -z-20" />
      <div className="hero-grid absolute inset-0 -z-10 opacity-[0.15]" />

      <motion.div
        className="pointer-events-none absolute -right-20 top-10 -z-10 opacity-60"
        animate={{ y: [0, -28, 0], rotate: [0, 4, 0] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
      >
        <PixelBlob className="h-[420px] w-[420px]" variant="violet" />
      </motion.div>
      <motion.div
        className="pointer-events-none absolute -bottom-24 -left-24 -z-10 opacity-50"
        animate={{ y: [0, 24, 0], rotate: [0, -5, 0] }}
        transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
      >
        <PixelBlob className="h-[320px] w-[320px]" variant="orange" />
      </motion.div>

      <div className="container-page relative">
        {eyebrow && (
          <motion.span
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-block rounded-full border border-pure/40 px-4 py-1 text-xs uppercase tracking-[0.25em]"
          >
            {eyebrow}
          </motion.span>
        )}

        <h1 className="mt-6 font-display leading-[0.86] text-[18vw] md:text-[13vw] xl:text-[170px]">
          {lines.map((line, i) => (
            <span key={line + i} className="block overflow-hidden">
              <motion.span
                className="block"
                initial={{ y: "110%" }}
                animate={{ y: 0 }}
                transition={{
                  duration: 0.9,
                  delay: 0.1 + i * 0.11,
                  ease: [0.22, 1, 0.36, 1],
                }}
              >
                {line}
                {i === lines.length - 1 && accent && (
                  <span className="text-glare">{accent}</span>
                )}
              </motion.span>
            </span>
          ))}
        </h1>

        {subtitle && (
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.45 }}
            className="mt-8 max-w-xl text-base md:text-lg opacity-90"
          >
            {subtitle}
          </motion.p>
        )}

        {children && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.6 }}
            className="mt-10 flex flex-wrap gap-3"
          >
            {children}
          </motion.div>
        )}
      </div>

      {scrollHint && (
        <motion.div
          className="container-page relative mt-16 text-xs uppercase tracking-[0.3em] opacity-70"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          ↓ Scroll
        </motion.div>
      )}
    </section>
  );
}
