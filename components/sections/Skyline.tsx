"use client";

import { motion, useReducedMotion } from "framer-motion";
import { useSplash } from "@/components/providers/SplashProvider";

// [left %, width %, tinggi px]
const BARS: ReadonlyArray<readonly [number, number, number]> = [
  [0, 9, 360],
  [9, 6, 470],
  [15, 8, 300],
  [23, 7, 420],
  [30, 10, 540],
  [40, 6, 340],
  [46, 9, 450],
  [55, 7, 380],
  [62, 10, 520],
  [72, 6, 330],
  [78, 8, 460],
  [86, 6, 360],
  [92, 8, 430],
];

/** Siluet bar di dasar hero; tumbuh dari bawah setelah splash selesai. */
export function Skyline() {
  const reduce = useReducedMotion();
  const { ready } = useSplash();

  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 opacity-50 min-[1025px]:opacity-100"
    >
      {BARS.map(([left, width, height], i) => (
        <motion.div
          key={i}
          className="sk"
          style={{ left: `${left}%`, width: `${width}%`, height }}
          initial={{ scaleY: reduce ? 1 : 0, opacity: 0 }}
          animate={ready ? { scaleY: 1, opacity: 1 } : { scaleY: reduce ? 1 : 0, opacity: 0 }}
          transition={{ duration: 1.1, delay: reduce ? 0 : 0.1 + i * 0.06, ease: [0.22, 1, 0.36, 1] }}
        />
      ))}
    </div>
  );
}
