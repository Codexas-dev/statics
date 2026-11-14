import { Reveal } from "@/components/motion/Reveal";
import { PROCESS } from "@/lib/content";

export function Proses() {
  return (
    <section id="proses" className="sec-pad bg-white">
      <div className="wrap flex flex-wrap gap-x-20 gap-y-14">
        <div className="flex flex-[1_1_340px] flex-col gap-[22px]">
          <Reveal>
            <span className="text-[12.5px] font-medium uppercase tracking-[0.1em] text-royal">Cara kerja</span>
          </Reveal>
          <Reveal delay={0.08}>
            <h2 className="disp t-h2s text-text">
              Empat
              <br />
              langkah
              <br />
              <span className="text-fog">
                menuju
                <br />
                launching.
              </span>
            </h2>
          </Reveal>
        </div>

        <ol className="m-0 flex min-w-0 flex-[2_1_560px] list-none flex-col border-b border-line p-0">
          {PROCESS.map((step, i) => {
            const [first, second] = step.title as readonly string[];
            return (
            <li key={step.no}>
              <Reveal delay={i * 0.07}>
                <div className="group relative border-t border-line py-[34px]">
                  <span
                    aria-hidden="true"
                    className="absolute -top-px left-0 h-px w-full origin-left scale-x-0 bg-royal transition-transform duration-[600ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-x-100"
                  />
                  <div className="flex flex-wrap items-baseline gap-x-8 gap-y-3.5 transition-transform duration-500 ease-out group-hover:translate-x-2">
                    <span className="basis-[52px] text-sm font-medium tracking-[0.1em] text-royal">{step.no}</span>
                    <h3 className="disp t-row flex-[1_1_230px]">
                      {first}
                      {second && (
                        <>
                          <br />
                          {second}
                        </>
                      )}
                    </h3>
                    <p className="flex-[1.2_1_260px] text-[15.5px] leading-[1.6] text-slate">{step.text}</p>
                  </div>
                </div>
              </Reveal>
            </li>
            );
          })}
        </ol>
      </div>
    </section>
  );
}
