interface Props {
  items: string[];
  className?: string;
  reverse?: boolean;
  speed?: number;
}

export function Marquee({ items, className = "", reverse, speed = 30 }: Props) {
  const row = [...items, ...items];
  return (
    <div className={`marquee overflow-hidden py-5 ${className}`}>
      <div
        className="marquee-track font-display text-4xl md:text-6xl"
        style={{
          animationDuration: `${speed}s`,
          animationDirection: reverse ? "reverse" : "normal",
        }}
      >
        {row.concat(row).map((t, i) => (
          <span key={i} className="mx-6 inline-flex items-center gap-6">
            {t}
            <span className="text-orange">●</span>
          </span>
        ))}
      </div>
    </div>
  );
}
