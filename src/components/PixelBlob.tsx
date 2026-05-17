interface Props {
  className?: string;
  variant?: "orange" | "violet" | "duo";
}

/**
 * Decorative two-tone pixelated blob (Caldera style).
 * Built from a grid of squares for that arcade/pixel feel.
 */
export function PixelBlob({ className, variant = "duo" }: Props) {
  // 12x8 grid mask. 1 = orange, 2 = violet, 0 = empty.
  const grid: number[][] = [
    [0, 0, 0, 1, 1, 1, 1, 1, 0, 0, 0, 0],
    [0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0],
    [0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0],
    [0, 1, 1, 1, 2, 2, 2, 2, 1, 1, 1, 1],
    [1, 1, 1, 2, 2, 2, 2, 2, 2, 1, 1, 1],
    [0, 1, 1, 2, 2, 2, 2, 2, 2, 2, 1, 1],
    [0, 0, 1, 1, 2, 2, 2, 2, 2, 2, 2, 0],
    [0, 0, 0, 1, 1, 1, 2, 2, 2, 2, 0, 0],
  ];

  const colorFor = (v: number) => {
    if (v === 0) return "transparent";
    if (variant === "orange") return v ? "#fc5000" : "transparent";
    if (variant === "violet") return v ? "#524ae9" : "transparent";
    return v === 1 ? "#fc5000" : "#524ae9";
  };

  const cell = 32;
  const cols = grid[0].length;
  const rows = grid.length;

  return (
    <svg
      viewBox={`0 0 ${cols * cell} ${rows * cell}`}
      className={className}
      aria-hidden="true"
    >
      {grid.map((row, y) =>
        row.map((v, x) =>
          v === 0 ? null : (
            <rect
              key={`${x}-${y}`}
              x={x * cell}
              y={y * cell}
              width={cell}
              height={cell}
              fill={colorFor(v)}
            />
          )
        )
      )}
    </svg>
  );
}
