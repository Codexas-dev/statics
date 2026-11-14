<p align="center">
  <img src="public/og-banner.jpeg" alt="Codexas" width="100%" />
</p>

# Codexas

Landing page Codexas, studio software untuk website, landing page, aplikasi full stack, dan sistem workflow.
Live: https://codexas.vercel.app

## Stack

- Next.js 15 (App Router) + React 19 + TypeScript
- Tailwind CSS v4
- Framer Motion (entrance dan exit animation, splash, menu, FAQ)
- Lenis (smooth scroll, digerakkan oleh frame loop Framer Motion)
- PWA: web manifest, ikon, dan service worker offline

## Menjalankan

```bash
npm install
npm run dev        # http://localhost:3000
npm run build
npm run start
npm run typecheck
```

Butuh Node.js 20.9 atau lebih baru. Service worker hanya aktif pada build production.

## Struktur

```
app/                 layout, page, manifest, globals.css
components/
  providers/         Lenis, Splash, SplashProvider, ServiceWorkerRegister
  motion/            Reveal (entrance + exit), Magnetic
  ui/                ArrowCircle
  sections/          Hero, Statement, Keunggulan, Layanan, Proses, Harga, Testimoni, Faq, Cta, Footer
lib/content.ts       seluruh teks, harga, kontak, FAQ
public/              logo, ikon PWA, og-banner, sw.js, offline.html
```

## Mengubah konten

Semua teks, harga, kontak, dan FAQ ada di `lib/content.ts`.

Perlu dikonfirmasi sebelum dipakai publik:

- Testimoni masih contoh (`TESTIMONIALS_A` dan `TESTIMONIALS_B`, nama "Nama Klien").
- Jawaban FAQ tentang sistem pembayaran (DP dan pelunasan) dan domain/hosting.
- Harga paket adalah titik awal yang bisa disesuaikan.

## Catatan teknis

- Splash screen tampil setiap halaman dimuat atau di-reload.
- Animasi mengikuti `prefers-reduced-motion`; efek hover hanya aktif di perangkat dengan hover.
- Mengubah `public/sw.js`: naikkan `VERSION` agar cache lama dibersihkan.
