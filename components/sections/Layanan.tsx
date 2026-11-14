import { Reveal } from "@/components/motion/Reveal";
import { ArrowCircle } from "@/components/ui/ArrowCircle";
import { cn } from "@/lib/cn";
import { SERVICES, waLink } from "@/lib/content";
import { ServiceArt, ServiceIcon } from "./ServiceArt";

export function Layanan() {
  return (
    <section id="layanan" className="overflow-hidden bg-mist pb-10 pt-6 min-[1025px]:pb-0">
      <div className="wrap flex flex-wrap items-end justify-between gap-7 pb-8 min-[701px]:pb-12 min-[1025px]:pb-16">
        <Reveal>
          <h2 className="disp t-h2s text-text">
            Kami kerjakan.
            <br />
            <span className="text-fog">Anda tumbuh.</span>
          </h2>
        </Reveal>
        <Reveal delay={0.15} className="mb-2">
          <a href="#harga" aria-label="Lihat paket harga" className="hov inline-flex">
            <ArrowCircle tone="dark" size={58} icon={22} dir="right" />
          </a>
        </Reveal>
      </div>

      <div className="wrap flex flex-wrap items-stretch gap-5 min-[1025px]:items-end">
        {SERVICES.map((service, i) => (
          <Reveal key={service.key} delay={i * 0.1} y={60} className="flex flex-[1_1_250px] flex-col min-[1025px]:justify-end">
            <article
              className={cn(
                "hov group flex flex-1 flex-col gap-4 rounded-[22px] px-6 pb-7 pt-[26px] text-white transition-transform duration-500 ease-out hover:-translate-y-2 min-[1025px]:flex-none min-[1025px]:rounded-b-none",
                service.cls,
              )}
            >
              <div className="flex items-center gap-3">
                <span className="circ-btn ct-light h-[46px] w-[46px]" aria-hidden="true">
                  <ServiceIcon name={service.key} />
                </span>
                <h3 className="disp text-[17px] tracking-[-0.01em]">
                  {service.title[0]}
                  <br />
                  {service.title[1]}
                </h3>
              </div>
              <p className="text-sm leading-[1.55] text-dim">{service.text}</p>
              <div className="mt-auto origin-bottom transition-transform duration-500 ease-out group-hover:scale-[1.06]">
                <ServiceArt name={service.key} />
              </div>
              <div className="flex justify-end">
                <a
                  href={waLink(`Halo Codexas, saya ingin konsultasi tentang ${service.name}`)}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Konsultasi ${service.name} via WhatsApp`}
                  className="inline-flex"
                >
                  <ArrowCircle tone="light" size={46} icon={18} />
                </a>
              </div>
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
