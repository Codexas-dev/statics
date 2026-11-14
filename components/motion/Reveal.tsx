"use client";

import { useEffect, useMemo, useRef, useState, type ReactNode } from "react";
import { motion, useReducedMotion, type Variants } from "framer-motion";
import { useSplash } from "@/components/providers/SplashProvider";

type Phase = "below" | "in" | "above";

type RevealProps = {
  children: ReactNode;
  className?: string;
  /** detik */
  delay?: number;
  y?: number;
  x?: number;
  scale?: number;
};

const EASE = [0.22, 1, 0.36, 1] as const;

/**
 * Entrance saat blok masuk viewport dan exit saat keluar (ke atas maupun ke bawah).
 * Animasi baru dimulai setelah splash selesai.
 */
export function Reveal({ children, className, delay = 0, y = 36, x = 0, scale = 1 }: RevealProps) {
  const reduce = useReducedMotion();
  const { ready } = useSplash();
  const ref = useRef<HTMLDivElement>(null);
  const [phase, setPhase] = useState<Phase>("below");

  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setPhase("in");
        else setPhase(entry.boundingClientRect.top < 0 ? "above" : "below");
      },
      { rootMargin: "0px 0px -8% 0px", threshold: 0 },
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  const variants = useMemo<Variants>(() => {
    const dy = reduce ? 0 : y;
    const dx = reduce ? 0 : x;
    const sc = reduce ? 1 : scale;
    return {
      below: { opacity: 0, y: dy, x: dx, scale: sc, transition: { duration: 0.5, ease: EASE } },
      above: { opacity: 0, y: -dy * 0.5, x: -dx * 0.5, scale: sc, transition: { duration: 0.5, ease: EASE } },
      in: { opacity: 1, y: 0, x: 0, scale: 1, transition: { duration: 0.85, delay, ease: EASE } },
    };
  }, [reduce, y, x, scale, delay]);

  return (
    <motion.div
      ref={ref}
      data-rv=""
      className={className}
      variants={variants}
      initial="below"
      animate={ready ? phase : "below"}
    >
      {children}
    </motion.div>
  );
}
