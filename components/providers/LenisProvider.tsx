"use client";

import { useEffect, useRef, type ReactNode } from "react";
import { ReactLenis, type LenisRef } from "lenis/react";
import { cancelFrame, frame, useReducedMotion } from "framer-motion";

/**
 * Lenis smooth scroll untuk seluruh halaman.
 * Loop animasinya digerakkan oleh frame loop Framer Motion agar keduanya sinkron.
 * Dimatikan otomatis bila pengguna memilih "reduce motion".
 */
export function LenisProvider({ children }: { children: ReactNode }) {
  const lenisRef = useRef<LenisRef>(null);
  const reduce = useReducedMotion();

  useEffect(() => {
    function update(data: { timestamp: number }) {
      lenisRef.current?.lenis?.raf(data.timestamp);
    }
    frame.update(update, true);
    return () => cancelFrame(update);
  }, []);

  if (reduce) return <>{children}</>;

  return (
    <ReactLenis root ref={lenisRef} options={{ autoRaf: false, lerp: 0.09, anchors: true }}>
      {children}
    </ReactLenis>
  );
}
