"use client";

import { createContext, useContext, useMemo, useState, type ReactNode } from "react";

type SplashState = {
  /** true setelah splash selesai; konten baru boleh memulai animasi entrance */
  ready: boolean;
  setReady: (value: boolean) => void;
};

const SplashContext = createContext<SplashState>({ ready: true, setReady: () => {} });

export function SplashProvider({ children }: { children: ReactNode }) {
  const [ready, setReady] = useState(false);
  const value = useMemo(() => ({ ready, setReady }), [ready]);
  return <SplashContext.Provider value={value}>{children}</SplashContext.Provider>;
}

export function useSplash() {
  return useContext(SplashContext);
}
