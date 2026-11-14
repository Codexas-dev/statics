import { Reveal } from "@/components/motion/Reveal";

export function Statement() {
  return (
    <section className="bg-mist pt-10 min-[701px]:pt-14 min-[1025px]:pt-[72px]">
      <div className="wrap">
        <div className="flex items-start justify-between gap-6">
          <Reveal x={-20} y={0}>
            <svg
              aria-hidden="true"
              width="50"
              height="50"
              viewBox="0 0 48 48"
              fill="none"
              stroke="#2447E0"
              strokeWidth="6"
            >
              <line x1="24" y1="2" x2="24" y2="46" />
              <line x1="4.95" y1="13" x2="43.05" y2="35" />
              <line x1="4.95" y1="35" x2="43.05" y2="13" />
            </svg>
          </Reveal>
          <Reveal x={20} y={0}>
            <p className="text-right text-[12.5px] font-medium uppercase leading-[1.35] tracking-[0.06em] text-text">
              Membangun
              <br />
              langkah berikutnya
            </p>
          </Reveal>
        </div>

        <div className="mt-6 flex flex-col gap-1.5 min-[1025px]:ml-[200px]">
          <Reveal>
            <p className="disp t-stmt text-text">Desain.</p>
          </Reveal>
          <div className="flex flex-wrap items-center gap-7">
            <Reveal delay={0.1}>
              <p className="disp t-stmt text-text">Bangun.</p>
            </Reveal>
            <Reveal delay={0.3} x={-40} y={0}>
              <div
                aria-hidden="true"
                className="relative h-[62px] w-[112px] origin-left scale-[0.65] min-[701px]:scale-100"
              >
                <div className="absolute left-0 top-0 h-[62px] w-[62px] rounded-full bg-royal" />
                <div className="absolute left-9 top-0 h-[62px] w-[62px] rounded-full bg-royal/80" />
              </div>
            </Reveal>
          </div>
          <Reveal delay={0.2}>
            <p className="disp t-stmt text-fog">Luncurkan.</p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
