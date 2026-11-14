export const SITE = {
  name: "Codexas",
  url: "https://codexas.vercel.app",
  phone: "+62 878 2206 5257",
  wa: "6287822065257",
  email: "codexas.dev@gmail.com",
  location: "Aceh, Indonesia",
  tagline: "Wujudkan Bisnis Digital Anda",
  description:
    "Codexas adalah studio software yang membangun website, landing page, aplikasi full stack, dan sistem alur kerja untuk bisnis Anda. Konsultasi pertama gratis.",
} as const;

export function waLink(text?: string) {
  const base = `https://wa.me/${SITE.wa}`;
  return text ? `${base}?text=${encodeURIComponent(text)}` : base;
}

export const NAV = [
  { href: "#layanan", label: "Layanan" },
  { href: "#keunggulan", label: "Keunggulan" },
  { href: "#proses", label: "Proses" },
  { href: "#harga", label: "Harga" },
  { href: "#faq", label: "FAQ" },
] as const;

export const HERO_CHIPS = ["Website", "Landing Page", "Full Stack", "Workflow"] as const;

export const TILES = [
  {
    no: "01",
    title: ["Harga", "transparan"],
    text: "Penawaran jelas sejak awal, tanpa biaya tersembunyi.",
    tile: "bg-navy text-white",
    overlay: "bg-royal",
    noCls: "text-sky group-hover:text-white",
    textCls: "text-dim group-hover:text-white",
  },
  {
    no: "02",
    title: ["Teknologi", "modern"],
    text: "Dibangun dengan React, Next.js, dan infrastruktur cloud terkini.",
    tile: "bg-royal text-white",
    overlay: "bg-navy",
    noCls: "text-[#dce4ff] group-hover:text-sky",
    textCls: "text-[#e4eaff] group-hover:text-dim",
  },
  {
    no: "03",
    title: ["Komunikasi", "langsung"],
    text: "Konsultasi dan update progres langsung via WhatsApp.",
    tile: "bg-white text-text border border-[#d3d8e4]",
    overlay: "bg-navy",
    noCls: "text-royal group-hover:text-sky",
    textCls: "text-slate group-hover:text-dim",
  },
  {
    no: "04",
    title: ["Garansi", "revisi"],
    text: "Setiap paket termasuk masa revisi setelah serah terima.",
    tile: "bg-navy text-white",
    overlay: "bg-royal",
    noCls: "text-sky group-hover:text-white",
    textCls: "text-dim group-hover:text-white",
  },
] as const;

export const SERVICES = [
  {
    key: "website",
    title: ["Website", "Development"],
    name: "Website Development",
    text: "Website company profile yang cepat, responsif, dan mudah dikelola untuk membangun kredibilitas bisnis.",
    cls: "min-[1025px]:min-h-[440px] bg-[linear-gradient(180deg,#0f1d4a_0%,#070d1f_100%)]",
  },
  {
    key: "landing",
    title: ["Landing", "Page"],
    name: "Landing Page",
    text: "Halaman promosi satu fokus yang dirancang untuk mengubah pengunjung menjadi pelanggan.",
    cls: "min-[1025px]:min-h-[500px] bg-[linear-gradient(180deg,#14245c_0%,#070d1f_100%)]",
  },
  {
    key: "fullstack",
    title: ["Full Stack", "Application"],
    name: "Full Stack Application",
    text: "Aplikasi web custom lengkap dengan database, dashboard admin, dan autentikasi.",
    cls: "min-[1025px]:min-h-[440px] bg-[linear-gradient(180deg,#0f1d4a_0%,#070d1f_100%)]",
  },
  {
    key: "workflow",
    title: ["System", "Workflow"],
    name: "System Workflow",
    text: "Otomasi dan perancangan alur kerja agar proses operasional bisnis berjalan rapi dan efisien.",
    cls: "min-[1025px]:min-h-[470px] bg-[linear-gradient(180deg,#14245c_0%,#070d1f_100%)]",
  },
] as const;

export const PROCESS = [
  {
    no: "01",
    title: ["Konsultasi", "gratis"],
    text: "Ceritakan kebutuhan bisnis Anda via WhatsApp. Kami bantu merumuskan solusinya.",
  },
  {
    no: "02",
    title: ["Desain &", "penawaran"],
    text: "Kami susun rancangan, timeline, dan penawaran harga yang transparan.",
  },
  {
    no: "03",
    title: ["Development"],
    text: "Pengerjaan dimulai dengan update progres berkala sampai siap diuji.",
  },
  {
    no: "04",
    title: ["Launching &", "support"],
    text: "Project online dan diserahterimakan, lengkap dengan masa support.",
  },
] as const;

export const PRICING = [
  {
    name: ["Landing", "Page"],
    label: "Landing Page",
    blurb: "Satu halaman fokus untuk promosi produk atau jasa.",
    price: "Rp 750rb",
    highlight: false,
    features: [
      "1 halaman promosi responsif",
      "Copywriting dasar",
      "Integrasi tombol WhatsApp",
      "Pengerjaan 3–5 hari kerja",
      "Gratis revisi 2x",
    ],
  },
  {
    name: ["Website", "Bisnis"],
    label: "Website Bisnis",
    blurb: "Website company profile lengkap dengan desain custom.",
    price: "Rp 2,5jt",
    highlight: true,
    features: [
      "Hingga 6 halaman, desain custom",
      "SEO dasar dan kecepatan optimal",
      "Bantuan setup domain dan hosting",
      "Pengerjaan 1–2 minggu",
      "Gratis revisi 3x",
    ],
  },
  {
    name: ["Aplikasi", "Full Stack"],
    label: "Aplikasi Full Stack",
    blurb: "Aplikasi custom dengan database dan dashboard admin.",
    price: "Rp 7,5jt",
    highlight: false,
    features: [
      "Fitur custom sesuai kebutuhan",
      "Database dan dashboard admin",
      "Autentikasi dan manajemen pengguna",
      "Deployment dan training penggunaan",
      "Support 1 bulan setelah launching",
    ],
  },
] as const;

// Placeholder: ganti dengan testimoni klien asli sebelum dipakai publik.
export const TESTIMONIALS_A = [
  {
    quote: "“Prosesnya cepat dan komunikatif. Website kami jadi terlihat jauh lebih profesional.”",
    role: "Pemilik UMKM Kuliner",
  },
  {
    quote: "“Landing page-nya langsung membuat promosi produk kami lebih mudah dipercaya.”",
    role: "Pemilik Toko Online",
  },
  {
    quote: "“Sistem yang dibuat merapikan alur kerja tim kami sehari-hari.”",
    role: "Travel dan Tour",
  },
  {
    quote: "“Hasil sesuai brief, revisi ditanggapi dengan sabar dan cepat.”",
    role: "Lembaga Pendidikan",
  },
] as const;

export const TESTIMONIALS_B = [
  {
    quote: "“Dari konsultasi sampai launching semuanya jelas dan terarah.”",
    role: "Jasa Fotografi",
  },
  {
    quote: "“Harga masuk akal untuk kualitas yang didapat. Sangat direkomendasikan.”",
    role: "Founder Startup",
  },
  {
    quote: "“Dashboard adminnya memudahkan kami mengelola data tanpa ribet.”",
    role: "Koperasi Simpan Pinjam",
  },
  {
    quote: "“Respons cepat setiap kali kami butuh bantuan setelah website jadi.”",
    role: "Klinik Kesehatan",
  },
] as const;

export const FAQS = [
  {
    q: "Berapa lama pengerjaan project?",
    a: "Landing page 3–5 hari kerja, website bisnis 1–2 minggu, dan aplikasi full stack menyesuaikan kompleksitas fitur. Timeline pasti kami sampaikan di tahap penawaran.",
  },
  {
    q: "Bagaimana sistem pembayarannya?",
    a: "Pembayaran dibagi dua tahap: DP di awal sebelum pengerjaan dan pelunasan saat project selesai, sebelum serah terima. Skema lain bisa kita diskusikan saat konsultasi.",
  },
  {
    q: "Apakah bisa revisi setelah project jadi?",
    a: "Bisa. Setiap paket sudah termasuk jumlah revisi tertentu (2x untuk landing page, 3x untuk website bisnis). Revisi tambahan dibahas terpisah dan transparan.",
  },
  {
    q: "Apakah harga sudah termasuk domain dan hosting?",
    a: "Biaya domain dan hosting dibayar terpisah sesuai penyedia yang dipilih. Kami membantu setup dan merekomendasikan opsi yang hemat untuk kebutuhan Anda.",
  },
  {
    q: "Bagaimana cara memulai?",
    a: "Klik tombol konsultasi gratis, ceritakan kebutuhan bisnis Anda lewat WhatsApp, lalu kami kirimkan rancangan dan penawaran harga.",
  },
] as const;
