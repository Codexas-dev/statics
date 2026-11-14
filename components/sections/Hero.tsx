import Image from "next/image";
import { Reveal } from "@/components/motion/Reveal";
import { ArrowCircle } from "@/components/ui/ArrowCircle";
import { HERO_CHIPS, waLink } from "@/lib/content";
import { Navbar } from "./Navbar";
import { Skyline } from "./Skyline";

export function Hero() {
  return (
    <section
      id="beranda"
      className="relative flex flex-col justify-between overflow-hidden bg-ink px-5 pb-7 pt-[max(20px,env(safe-area-inset-top))] min-[701px]:px-8 min-[701px]:pb-9 min-[701px]:pt-[max(24px,env(safe-area-inset-top))] min-[1025px]:min-h-[800px] min-[1025px]:px-10 min-[1025px]:pb-10 min-[1025px]:pt-[26px]"
    >
      <Skyline />

      {/* logo besar, hanya desktop */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-[340px] hidden w-[270px] -translate-x-1/2 min-[1025px]:block"
      >
        <Reveal scale={0.85} y={20} delay={0.3}>
          <Image
            src="/logo-mark.webp"
            alt=""
            width={540}
            height={540}
            priority
            className="h-auto w-full drop-shadow-[0_34px_60px_rgba(0,0,0,0.5)]"
          />
        </Reveal>
      </div>

      <Reveal y={-18}>
        <div className="relative z-[6]">
          <Navbar />
        </div>
      </Reveal>

      <div className="relative z-[2] mt-10 flex flex-col gap-7 min-[701px]:mt-12 min-[701px]:flex-row min-[701px]:items-start min-[701px]:justify-between min-[701px]:gap-10 min-[1025px]:mt-14">
        <div className="flex flex-col gap-[22px]">
          <Reveal delay={0.05}>
            <h1 className="disp t-hero text-white">
              Wujudkan
              <br />
              Bisnis Digital
              <br />
              Anda.
            </h1>
          </Reveal>
          <Reveal delay={0.15} x={-24} y={0}>
            <div className="h-[3px] w-16 bg-[#4f6bff]" />
          </Reveal>
          <Reveal delay={0.22}>
            <p className="max-w-[290px] text-[15px] leading-[1.55] text-dim">
              Website, landing page, aplikasi full stack, dan sistem alur kerja untuk bisnis Anda.
            </p>
          </Reveal>
        </div>

        <div className="flex flex-col items-start gap-7 min-[701px]:items-end min-[701px]:text-right">
          <Reveal delay={0.12}>
            <p className="disp t-hero text-white">
              Studio
              <br />
              Software
              <br />
              Modern
            </p>
          </Reveal>
          <Reveal delay={0.3}>
            <a href="#layanan" aria-label="Lihat layanan Codexas" className="hov inline-flex">
              <ArrowCircle tone="light" size={54} icon={20} />
            </a>
          </Reveal>
        </div>
      </div>

      <div className="relative z-[2] mt-9 flex flex-wrap items-end justify-between gap-7 min-[701px]:mt-12 min-[1025px]:mt-[60px]">
        <div className="flex w-full flex-wrap gap-3.5 min-[701px]:w-auto">
          <Reveal delay={0.1} className="flex-[1_1_150px] min-[701px]:flex-none">
            <div className="flex h-[140px] flex-col justify-between rounded-2xl bg-white px-[18px] py-4 transition-transform duration-500 hover:-translate-y-1.5 min-[701px]:w-[190px]">
              <span className="text-[13px] leading-[1.3] text-slate">Layanan inti</span>
              <span className="disp text-[58px] tracking-[-0.04em] text-text">04</span>
            </div>
          </Reveal>
          <Reveal delay={0.18} className="flex-[1_1_150px] min-[701px]:flex-none">
            <a
              href={waLink("Halo Codexas, saya ingin konsultasi gratis")}
              target="_blank"
              rel="noopener noreferrer"
              className="hov group flex h-[140px] flex-col justify-between rounded-2xl bg-royal px-[18px] py-4 text-white transition-[transform,background-color] duration-500 hover:-translate-y-1.5 hover:bg-royal-hi min-[701px]:w-[210px]"
            >
              <span className="flex items-start justify-between gap-2.5">
                <span className="text-base font-medium leading-[1.2]">
                  Konsultasi
                  <br />
                  gratis
                </span>
                <svg
                  aria-hidden="true"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.6"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="transition-transform duration-500 group-hover:translate-x-1 group-hover:-translate-y-1"
                >
                  <line x1="7" y1="17" x2="17" y2="7" />
                  <polyline points="8 7 17 7 17 16" />
                </svg>
              </span>
              <span className="text-[13px] leading-[1.35] text-[#dce4ff]">
                Ceritakan kebutuhan bisnis Anda lewat WhatsApp.
              </span>
            </a>
          </Reveal>
        </div>

        <div className="flex flex-wrap gap-2.5 min-[701px]:justify-end">
          {HERO_CHIPS.map((chip, i) => (
            <Reveal key={chip} delay={0.2 + i * 0.06} y={20}>
              <a href="#layanan" className="btn btn-line chip">
                {chip}
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
