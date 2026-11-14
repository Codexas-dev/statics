import { Reveal } from "@/components/motion/Reveal";
import { TESTIMONIALS_A, TESTIMONIALS_B } from "@/lib/content";

type Item = { readonly quote: string; readonly role: string };

function Card({ item }: { item: Item }) {
  return (
    <figure className="mr-5 flex min-h-[190px] w-[300px] shrink-0 flex-col justify-between gap-7 rounded-[18px] border border-[#d3d8e4] bg-white p-[22px] transition-[transform,border-color,box-shadow] duration-500 hover:-translate-y-1.5 hover:border-royal hover:shadow-[0_18px_40px_rgba(36,71,224,0.14)] min-[701px]:min-h-[210px] min-[701px]:w-[400px] min-[701px]:p-7">
      <blockquote className="text-base font-medium leading-[1.45] text-text min-[701px]:text-lg">
        {item.quote}
      </blockquote>
      <figcaption className="flex flex-col gap-[3px] border-t border-[#e3e6ee] pt-4">
        <span className="text-sm font-semibold text-text">Nama Klien</span>
        <span className="text-[13px] text-slate">{item.role}</span>
      </figcaption>
    </figure>
  );
}

function Row({ items, dir }: { items: readonly Item[]; dir: "right" | "left" }) {
  // Satu "setengah" track harus lebih lebar dari layar, jadi daftar digandakan dulu.
  const half = [...items, ...items];
  return (
    <div className="marquee py-2">
      <div className="mfade mfade-l" />
      <div className="mfade mfade-r" />
      <div className={dir === "right" ? "mtrack mtrack-r" : "mtrack mtrack-l"}>
        <div className="flex">
          {half.map((item, i) => (
            <Card key={`a-${i}`} item={item} />
          ))}
        </div>
        <div className="flex" aria-hidden="true">
          {half.map((item, i) => (
            <Card key={`b-${i}`} item={item} />
          ))}
        </div>
      </div>
    </div>
  );
}

export function Testimoni() {
  return (
    <section id="testimoni" className="overflow-hidden bg-mist py-[72px] min-[701px]:py-24 min-[1025px]:py-[120px]">
      <div className="wrap flex flex-wrap items-end justify-between gap-6 pb-9 min-[701px]:pb-12 min-[1025px]:pb-16">
        <Reveal>
          <h2 className="disp t-h2 text-text">
            Kata
            <br />
            <span className="text-fog">klien.</span>
          </h2>
        </Reveal>
        <Reveal delay={0.1}>
          <p className="max-w-[340px] text-[13.5px] leading-[1.55] text-slate">
            Kartu di bawah masih contoh tampilan. Isi dan nama klien akan diganti dengan testimoni asli.
          </p>
        </Reveal>
      </div>

      <div className="flex flex-col gap-3">
        <Reveal y={40}>
          <Row items={TESTIMONIALS_A} dir="right" />
        </Reveal>
        <Reveal y={40} delay={0.12}>
          <Row items={TESTIMONIALS_B} dir="left" />
        </Reveal>
      </div>
    </section>
  );
}
