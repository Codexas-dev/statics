import { Reveal } from "@/components/motion/Reveal";
import { ArrowCircle } from "@/components/ui/ArrowCircle";
import { SITE, waLink } from "@/lib/content";

const LINKS = [
  { href: "#layanan", label: "Layanan" },
  { href: "#proses", label: "Proses" },
  { href: "#harga", label: "Harga" },
  { href: "#faq", label: "FAQ" },
] as const;

export function Footer() {
  return (
    <footer className="bg-white px-3 pt-3 min-[701px]:px-4 min-[701px]:pt-4 min-[1025px]:px-6 min-[1025px]:pt-6">
      <div className="group/foot relative flex flex-col overflow-hidden rounded-[32px] bg-paper min-[701px]:rounded-[40px] min-[1025px]:rounded-[56px]">
        <div className="flex flex-wrap justify-between gap-x-14 gap-y-8 px-6 pb-7 pt-9 min-[701px]:gap-y-9 min-[701px]:px-10 min-[701px]:pb-10 min-[701px]:pt-12 min-[1025px]:gap-x-[72px] min-[1025px]:gap-y-10 min-[1025px]:px-16 min-[1025px]:pb-14 min-[1025px]:pt-[60px]">
          <Reveal className="flex-[1_1_100%] min-[701px]:flex-[1_1_280px] min-[701px]:max-w-[360px]">
            <p className="text-[21px] font-medium leading-[1.25] tracking-[-0.015em] text-text min-[701px]:text-[25px]">
              Codexas membangun website, landing page, dan aplikasi untuk bisnis yang ingin tumbuh secara digital.
            </p>
          </Reveal>

          <Reveal delay={0.08}>
            <nav aria-label="Tautan footer" className="flex flex-col gap-3.5">
              <span className="text-[15px] font-medium text-text">Jelajahi</span>
              {LINKS.map((link) => (
                <a key={link.href} href={link.href} className="ulink self-start">
                  {link.label}
                </a>
              ))}
            </nav>
          </Reveal>

          <Reveal delay={0.16}>
            <div className="flex flex-col items-start gap-3">
              <span className="text-[15px] font-medium text-text">Hubungi kami</span>
              <a href={waLink()} target="_blank" rel="noopener noreferrer" className="chip-l">
                WhatsApp {SITE.phone}
              </a>
              <a href={`mailto:${SITE.email}`} className="chip-l">
                {SITE.email}
              </a>
              <a href={SITE.url} className="chip-l">
                codexas.vercel.app
              </a>
            </div>
          </Reveal>

          <Reveal delay={0.24} className="min-[701px]:flex-[0_1_280px]">
            <div className="flex flex-col gap-[22px]">
              <a
                href={waLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="hov flex flex-col gap-1.5"
              >
                <span className="flex items-center gap-3 text-[25px] font-medium tracking-[-0.015em] text-royal">
                  Hubungi Codexas
                  <ArrowCircle tone="royal" size={32} icon={15} />
                </span>
                <span className="text-sm text-slate">Konsultasi gratis</span>
              </a>
              <div className="h-px bg-[#dfe2ea]" />
              <a href="#layanan" className="hov flex flex-col gap-1.5">
                <span className="flex items-center gap-3 text-[25px] font-medium tracking-[-0.015em] text-text">
                  Lihat layanan
                  <ArrowCircle tone="black" size={32} icon={15} />
                </span>
                <span className="text-sm text-slate">Website, landing page, aplikasi</span>
              </a>
            </div>
          </Reveal>
        </div>

        <Reveal y={80}>
          <svg
            viewBox="0 0 1000 190"
            role="img"
            aria-label="Codexas"
            preserveAspectRatio="xMidYMax meet"
            className="block h-auto w-full fill-text transition-colors duration-700 group-hover/foot:fill-royal"
          >
            <text
              x="16"
              y="235"
              textLength="968"
              lengthAdjust="spacingAndGlyphs"
              fontWeight={800}
              fontSize={282}
              style={{ fontFamily: "var(--font-inter-tight), system-ui, sans-serif" }}
            >
              codexas
            </text>
          </svg>
        </Reveal>
      </div>

      <div className="wrap flex flex-wrap justify-between gap-3 pb-[max(24px,env(safe-area-inset-bottom))] pt-5 text-[12.5px] text-slate min-[701px]:pb-[max(32px,env(safe-area-inset-bottom))] min-[701px]:pt-7">
        <span>Codexas ©2026</span>
        <span>{SITE.location}</span>
      </div>
    </footer>
  );
}
