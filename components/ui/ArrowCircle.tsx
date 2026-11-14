import { cn } from "@/lib/cn";

type ArrowCircleProps = {
  tone: "light" | "dark" | "royal" | "black";
  /** diameter lingkaran (px) */
  size?: number;
  /** ukuran ikon (px) */
  icon?: number;
  dir?: "up-right" | "right";
  className?: string;
};

function Glyph({ dir }: { dir: "up-right" | "right" }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.7"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      {dir === "right" ? (
        <>
          <line x1="4" y1="12" x2="20" y2="12" />
          <polyline points="13 5 20 12 13 19" />
        </>
      ) : (
        <>
          <line x1="7" y1="17" x2="17" y2="7" />
          <polyline points="8 7 17 7 17 16" />
        </>
      )}
    </svg>
  );
}

/** Lingkaran dengan panah ganda: panah lama keluar, panah baru masuk saat hover (lihat globals.css). */
export function ArrowCircle({ tone, size = 54, icon = 20, dir = "up-right", className }: ArrowCircleProps) {
  return (
    <span
      aria-hidden="true"
      className={cn("circ-btn", `ct-${tone}`, className)}
      style={{ width: size, height: size, fontSize: icon }}
    >
      <span className={cn("arr", dir === "right" && "arr-r")}>
        <Glyph dir={dir} />
        <Glyph dir={dir} />
      </span>
    </span>
  );
}
