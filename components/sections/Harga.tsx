import { Reveal } from "@/components/motion/Reveal";
import { cn } from "@/lib/cn";
import { PRICING, waLink } from "@/lib/content";

export function Harga() {
  const last = PRICING.length - 1;

  return (
    <section id="harga" className="sec-pad bg-ink text-white">
      <div className="wrap flex flex-col gap-12 min-[1025px]:gap-[72px]">
        <div className="flex flex-wrap items-end justify-between gap-7">
          <Reveal>
            <h2 className="disp t-h2">
              Paket
              <br />
              harga
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="max-w-[360px] text-base leading-[1.6] text-dim">
              Titik awal, bukan harga mati. Kebutuhan tiap bisnis berbeda, jadi konsultasikan dulu secara gratis.
            </p>
          </Reveal>
        </div>

        <div className="flex flex-col">
          {PRICING.map((tier, i) => (
            <Reveal key={tier.label} delay={i * 0.08}>
              <div
                className={cn(
                  "group relative",
                  tier.highlight
                    ? "-mx-5 rounded-[26px] bg-royal px-5 py-8 transition-transform duration-500 ease-out hover:scale-[1.012] min-[701px]:-mx-8 min-[701px]:px-8 min-[701px]:py-10 min-[1025px]:-mx-10 min-[1025px]:px-10 min-[1025px]:py-11"
                    : cn(
                        "py-11",
                        i === 0 && "border-t border-white/15",
                        i === last && "border-b border-white/15",
                      ),
                )}
              >
                {!tier.highlight && (
                  <span
                    aria-hidden="true"
                    className="absolute bottom-0 left-0 h-px w-full origin-left scale-x-0 bg-sky transition-transform duration-[600ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-x-100"
                  />
                )}
                <div
                  className={cn(
                    "flex flex-wrap items-center gap-x-12 gap-y-7",
                    !tier.highlight && "transition-transform duration-500 ease-out group-hover:translate-x-2",
                  )}
                >
                  <div className="flex flex-[1_1_260px] flex-col gap-3">
                    <h3 className="disp text-[34px]">
                      {tier.name[0]}
                      <br />
                      {tier.name[1]}
                    </h3>
                    <p className={cn("text-[14.5px] leading-[1.5]", tier.highlight ? "text-[#e4eaff]" : "text-dim")}>
                      {tier.blurb}
                    </p>
                  </div>

                  <ul
                    className={cn(
                      "m-0 flex flex-[1.5_1_320px] list-none flex-col gap-[9px] p-0 text-[14.5px] leading-[1.45]",
                      tier.highlight ? "text-white" : "text-[#dce4ff]",
                    )}
                  >
                    {tier.features.map((feature) => (
                      <li key={feature}>— {feature}</li>
                    ))}
                  </ul>

                  <div className="flex flex-[1_1_230px] flex-col items-start gap-[18px]">
                    <div className="flex flex-col gap-1">
                      <span
                        className={cn(
                          "text-[12.5px] uppercase tracking-[0.08em]",
                          tier.highlight ? "text-[#dce4ff]" : "text-sky",
                        )}
                      >
                        Mulai dari
                      </span>
                      <span className="disp t-price">{tier.price}</span>
                    </div>
                    <a
                      href={waLink(`Halo Codexas, saya tertarik dengan paket ${tier.label}`)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={cn("btn", tier.highlight ? "btn-white" : "btn-line")}
                    >
                      Konsultasikan
                    </a>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
