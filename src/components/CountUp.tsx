import { useEffect, useRef, useState } from "react";
import { useInView } from "framer-motion";

export function CountUp({ value, duration = 1400 }: { value: string; duration?: number }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const num = parseFloat(value.replace(/[^\d.]/g, ""));
  const suffix = value.replace(/[\d.,]/g, "");
  const [n, setN] = useState(0);

  useEffect(() => {
    if (!inView || isNaN(num)) return;
    let raf = 0;
    const start = performance.now();
    const tick = (t: number) => {
      const p = Math.min((t - start) / duration, 1);
      setN(Math.round(num * (1 - Math.pow(1 - p, 3))));
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [inView, num, duration]);

  if (isNaN(num)) return <span ref={ref}>{value}</span>;
  return (
    <span ref={ref}>
      {n}
      {suffix}
    </span>
  );
}
