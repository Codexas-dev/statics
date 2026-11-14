import { Cta } from "@/components/sections/Cta";
import { Faq } from "@/components/sections/Faq";
import { Footer } from "@/components/sections/Footer";
import { Harga } from "@/components/sections/Harga";
import { Hero } from "@/components/sections/Hero";
import { Keunggulan } from "@/components/sections/Keunggulan";
import { Layanan } from "@/components/sections/Layanan";
import { Proses } from "@/components/sections/Proses";
import { Statement } from "@/components/sections/Statement";
import { Testimoni } from "@/components/sections/Testimoni";

export default function Home() {
  return (
    <>
      <main id="main" className="overflow-x-clip">
        <Hero />
        <Statement />
        <Keunggulan />
        <Layanan />
        <Proses />
        <Harga />
        <Testimoni />
        <Faq />
        <Cta />
      </main>
      <Footer />
    </>
  );
}
