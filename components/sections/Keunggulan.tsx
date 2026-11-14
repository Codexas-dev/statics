import { Reveal } from "@/components/motion/Reveal";
import { cn } from "@/lib/cn";
import { TILES } from "@/lib/content";

export function Keunggulan() {
  return (
    <section
      id="keunggulan"
      className="bg-mist pb-14 pt-10 min-[701px]:pb-[72px] min-[701px]:pt-14 min-[1025px]:pb-24 min-[1025px]:pt-[72px]"
    >
      <div className="wrap flex flex-wrap items-center gap-x-12 gap-y-8">
        <Reveal className="min-[1025px]:basis-[150px]">
          <h2 className="text-[17px] font-medium uppercase leading-[1.3] tracking-[0.02em] text-royal underline underline-offset-[5px]">
            Keunggulan
            <br />
            kami
          </h2>
        </Reveal>

        <div className="flex min-w-0 flex-[1_1_640px] flex-wrap gap-5">
          {TILES.map((tile, i) => (
            <Reveal key={tile.no} delay={i * 0.08} className="flex-[1_1_210px]">
              <div
                className={cn(
                  "group relative flex min-h-[220px] flex-col justify-between overflow-hidden rounded-[22px] p-6 transition-transform duration-500 ease-out hover:-translate-y-1.5 hover:text-white min-[701px]:min-h-[300px]",
                  tile.tile,
                )}
              >
                <span
                  aria-hidden="true"
                  className={cn(
                    "pointer-events-none absolute inset-0 translate-y-full transition-transform duration-[600ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:translate-y-0",
                    tile.overlay,
                  )}
                />
                <span
                  className={cn(
                    "relative text-[13px] font-medium tracking-[0.1em] transition-colors duration-500",
                    tile.noCls,
                  )}
                >
                  {tile.no}
                </span>
                <div className="relative flex flex-col gap-2.5">
                  <h3 className="disp text-[25px]">
                    {tile.title[0]}
                    <br />
                    {tile.title[1]}
                  </h3>
                  <p className={cn("text-sm leading-[1.5] transition-colors duration-500", tile.textCls)}>
                    {tile.text}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
