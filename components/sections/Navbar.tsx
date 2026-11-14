"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { Magnetic } from "@/components/motion/Magnetic";
import { NAV, waLink } from "@/lib/content";

const PHONE_PATH =
  "M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z";

function PhoneIcon() {
  return (
    <svg
      aria-hidden="true"
      width="17"
      height="17"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d={PHONE_PATH} />
    </svg>
  );
}

export function Navbar() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <header className="relative z-[6] flex items-center gap-x-9 gap-y-5">
      <a href="#beranda" className="inline-flex items-center gap-3" onClick={() => setOpen(false)}>
        <Image src="/logo-mark.png" alt="" width={36} height={36} className="h-9 w-9" priority />
        <span className="text-[20px] font-bold tracking-[0.02em] text-white">CODEXAS</span>
      </a>

      {/* desktop */}
      <nav
        aria-label="Navigasi utama"
        className="ml-auto hidden items-center gap-x-8 min-[821px]:flex"
      >
        {NAV.map((item) => (
          <a key={item.href} href={item.href} className="navl">
            {item.label}
          </a>
        ))}
        <Magnetic strength={0.3}>
          <a
            href={waLink()}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Hubungi via WhatsApp"
            className="circ-btn ct-light h-[42px] w-[42px]"
          >
            <PhoneIcon />
          </a>
        </Magnetic>
      </nav>

      {/* tablet / mobile */}
      <div className="ml-auto flex items-center gap-2.5 min-[821px]:hidden">
        <a
          href={waLink()}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Hubungi via WhatsApp"
          className="circ-btn ct-light h-11 w-11"
        >
          <PhoneIcon />
        </a>
        <button
          type="button"
          aria-label={open ? "Tutup menu" : "Buka menu"}
          aria-expanded={open}
          aria-controls="mnav"
          onClick={() => setOpen((value) => !value)}
          className="circ-btn ct-light h-11 w-11 cursor-pointer bg-transparent p-0"
        >
          <svg
            aria-hidden="true"
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
          >
            {open ? (
              <>
                <line x1="6" y1="6" x2="18" y2="18" />
                <line x1="18" y1="6" x2="6" y2="18" />
              </>
            ) : (
              <>
                <line x1="4" y1="8" x2="20" y2="8" />
                <line x1="4" y1="16" x2="20" y2="16" />
              </>
            )}
          </svg>
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.nav
            id="mnav"
            key="mnav"
            aria-label="Menu seluler"
            className="absolute left-0 right-0 top-full z-[8] mt-3 flex flex-col rounded-[20px] border border-white/15 bg-navy p-2.5 min-[821px]:hidden"
            initial={{ opacity: 0, y: -14, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1, transition: { duration: 0.35, ease: [0.22, 1, 0.36, 1] } }}
            exit={{ opacity: 0, y: -10, scale: 0.98, transition: { duration: 0.22 } }}
          >
            {NAV.map((item, i) => (
              <motion.a
                key={item.href}
                href={item.href}
                className="mlink"
                onClick={() => setOpen(false)}
                initial={{ opacity: 0, x: -12 }}
                animate={{ opacity: 1, x: 0, transition: { delay: 0.05 + i * 0.05, duration: 0.35 } }}
                exit={{ opacity: 0, transition: { duration: 0.15 } }}
              >
                {item.label}
              </motion.a>
            ))}
            <a
              href={waLink()}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setOpen(false)}
              className="btn btn-royal mt-2"
            >
              Konsultasi gratis
            </a>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}
