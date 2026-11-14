"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { useLenis } from "lenis/react";
import { useSplash } from "./SplashProvider";

const LETTERS = "CODEXAS".split("");
const SHOW_MS = 2000;
const SHOW_MS_REDUCED = 700;

/**
 * Splash screen: tampil setiap halaman dimuat pertama kali dan setiap reload
 * (komponen ini ikut ter-mount ulang pada hard load, jadi tidak perlu storage).
 */
export function Splash() {
  const reduce = useReducedMotion();
  const lenis = useLenis();
  const { setReady } = useSplash();
  const [show, setShow] = useState(true);

  useEffect(() => {
    const timer = window.setTimeout(() => setShow(false), reduce ? SHOW_MS_REDUCED : SHOW_MS);
    return () => window.clearTimeout(timer);
  }, [reduce]);

  useEffect(() => {
    const root = document.documentElement;
    if (show) {
      root.classList.add("is-splash");
      lenis?.stop();
    } else {
      root.classList.remove("is-splash");
      lenis?.start();
      setReady(true);
    }
  }, [show, lenis, setReady]);

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          key="splash"
          role="status"
          aria-label="Memuat Codexas"
          className="splash-root fixed inset-0 z-[100] flex flex-col items-center justify-center bg-ink"
          initial={{ y: 0 }}
          exit={{ y: "-100%", transition: { duration: reduce ? 0.2 : 0.9, ease: [0.76, 0, 0.24, 1] } }}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 12 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          >
            <Image
              src="/logo-mark.png"
              alt=""
              width={88}
              height={88}
              priority
              className="h-[72px] w-[72px] min-[701px]:h-[88px] min-[701px]:w-[88px]"
            />
          </motion.div>

          <div
            aria-hidden="true"
            className="mt-6 flex overflow-hidden text-[22px] font-bold tracking-[0.28em] text-white min-[701px]:text-[28px]"
          >
            {LETTERS.map((letter, i) => (
              <motion.span
                key={`${letter}-${i}`}
                className="inline-block"
                initial={{ y: "110%", opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.35 + i * 0.07, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              >
                {letter}
              </motion.span>
            ))}
          </div>

          <div className="mt-8 h-px w-40 overflow-hidden bg-white/15 min-[701px]:w-56">
            <motion.div
              className="h-full origin-left bg-sky"
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: (reduce ? SHOW_MS_REDUCED : SHOW_MS) / 1000 - 0.2, ease: [0.65, 0, 0.35, 1] }}
            />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
