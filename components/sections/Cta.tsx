import { Magnetic } from "@/components/motion/Magnetic";
import { Reveal } from "@/components/motion/Reveal";
import { SITE, waLink } from "@/lib/content";

export function Cta() {
  return (
    <section className="bg-white px-3 min-[701px]:px-4 min-[1025px]:px-6">
      <div className="relative flex flex-col items-start gap-9 overflow-hidden rounded-[28px] bg-ink px-6 py-14 text-white min-[701px]:rounded-[36px] min-[701px]:px-10 min-[701px]:py-20 min-[1025px]:rounded-[40px] min-[1025px]:px-14 min-[1025px]:py-[110px]">
        <Reveal x={40} y={0} scale={0.8} className="absolute right-14 top-14 hidden min-[701px]:block">
          <div aria-hidden="true" className="flex">
            <div className="h-[74px] w-[74px] rounded-full bg-royal" />
            <div className="-ml-10 h-[74px] w-[74px] rounded-full bg-royal/75" />
          </div>
        </Reveal>

        <Reveal>
          <span className="text-[12.5px] font-medium uppercase tracking-[0.1em] text-sky">Konsultasi gratis</span>
        </Reveal>
        <Reveal delay={0.08}>
          <h2 className="disp t-cta max-w-[1000px]">
            Siap mewujudkan
            <br />
            <span className="text-fog">bisnis digital Anda?</span>
          </h2>
        </Reveal>
        <Reveal delay={0.16}>
          <p className="max-w-[460px] text-[16.5px] leading-[1.6] text-dim">
            Ceritakan kebutuhan Anda. Konsultasi pertama gratis dan tanpa komitmen.
          </p>
        </Reveal>
        <Reveal delay={0.24}>
          <div className="flex flex-wrap gap-3.5">
            <Magnetic strength={0.2}>
              <a href={waLink()} target="_blank" rel="noopener noreferrer" className="btn btn-royal">
                Chat via WhatsApp
              </a>
            </Magnetic>
            <Magnetic strength={0.2}>
              <a href={`mailto:${SITE.email}`} className="btn btn-line">
                Kirim email
              </a>
            </Magnetic>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
