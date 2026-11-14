"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Reveal } from "@/components/motion/Reveal";
import { FAQS } from "@/lib/content";

export function Faq() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="faq" className="sec-pad bg-white">
      <div className="wrap flex flex-wrap gap-x-20 gap-y-12">
        <div className="flex flex-[1_1_340px] flex-col gap-[22px]">
          <Reveal>
            <span className="text-[12.5px] font-medium uppercase tracking-[0.1em] text-royal">FAQ</span>
          </Reveal>
          <Reveal delay={0.08}>
            <h2 className="disp t-h2s text-text">
              Pertanyaan
              <br />
              <span className="text-fog">umum.</span>
            </h2>
          </Reveal>
        </div>

        <div className="flex min-w-0 flex-[2_1_560px] flex-col border-b border-line">
          {FAQS.map((item, i) => {
            const isOpen = open === i;
            const panelId = `faq-panel-${i}`;
            const buttonId = `faq-button-${i}`;
            return (
              <Reveal key={item.q} delay={i * 0.06}>
                <div className="group relative border-t border-line">
                  <span
                    aria-hidden="true"
                    className="absolute -top-px left-0 h-px w-full origin-left scale-x-0 bg-royal transition-transform duration-[600ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-x-100"
                  />
                  <h3 className="m-0">
                    <button
                      id={buttonId}
                      type="button"
                      aria-expanded={isOpen}
                      aria-controls={panelId}
                      onClick={() => setOpen(isOpen ? null : i)}
                      className="flex w-full cursor-pointer items-center justify-between gap-4 border-0 bg-transparent py-[22px] text-left text-text transition-colors duration-300 hover:text-royal min-[701px]:gap-6 min-[701px]:py-7"
                    >
                      <span className="flex items-baseline gap-[22px] transition-transform duration-500 ease-out group-hover:translate-x-1.5">
                        <span className="text-sm font-medium tracking-[0.1em] text-royal">
                          {String(i + 1).padStart(2, "0")}
                        </span>
                        <span className="text-[19px] font-medium leading-[1.25] tracking-[-0.01em] min-[701px]:text-2xl">
                          {item.q}
                        </span>
                      </span>
                      <motion.svg
                        aria-hidden="true"
                        width="22"
                        height="22"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.8"
                        strokeLinecap="round"
                        className="shrink-0"
                        animate={{ rotate: isOpen ? 180 : 0 }}
                        transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                      >
                        <line x1="5" y1="12" x2="19" y2="12" />
                        <motion.line
                          x1="12"
                          y1="5"
                          x2="12"
                          y2="19"
                          animate={{ opacity: isOpen ? 0 : 1 }}
                          transition={{ duration: 0.25 }}
                        />
                      </motion.svg>
                    </button>
                  </h3>
                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        id={panelId}
                        role="region"
                        aria-labelledby={buttonId}
                        key="panel"
                        className="overflow-hidden"
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
                      >
                        <p className="max-w-[640px] pb-[30px] text-[15px] leading-[1.65] text-slate min-[701px]:pl-11 min-[701px]:text-base">
                          {item.a}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
