import type { ReactNode } from "react";
import type { Metadata, Viewport } from "next";
import { Inter_Tight } from "next/font/google";
import "lenis/dist/lenis.css";
import "./globals.css";
import { LenisProvider } from "@/components/providers/LenisProvider";
import { ServiceWorkerRegister } from "@/components/providers/ServiceWorkerRegister";
import { Splash } from "@/components/providers/Splash";
import { SplashProvider } from "@/components/providers/SplashProvider";
import { SITE } from "@/lib/content";

const interTight = Inter_Tight({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-inter-tight",
  display: "swap",
});

const TITLE = `${SITE.name} — ${SITE.tagline}`;

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: { default: TITLE, template: `%s | ${SITE.name}` },
  description: SITE.description,
  applicationName: SITE.name,
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "id_ID",
    url: SITE.url,
    siteName: SITE.name,
    title: TITLE,
    description: SITE.description,
    images: [{ url: "/og-banner.jpeg", alt: `${SITE.name} — ${SITE.tagline}` }],
  },
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: SITE.description,
    images: ["/og-banner.jpeg"],
  },
  appleWebApp: { capable: true, title: SITE.name, statusBarStyle: "black-translucent" },
};

export const viewport: Viewport = {
  themeColor: "#060B1C",
  viewportFit: "cover",
  width: "device-width",
  initialScale: 1,
};

const JSON_LD = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: SITE.name,
  url: SITE.url,
  email: SITE.email,
  telephone: SITE.phone,
  description: SITE.description,
  areaServed: "ID",
  address: { "@type": "PostalAddress", addressRegion: "Aceh", addressCountry: "ID" },
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="id" className={interTight.variable}>
      <body>
        <noscript>
          <style>{`.splash-root{display:none!important}[data-rv],.sk{opacity:1!important;transform:none!important}`}</style>
        </noscript>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(JSON_LD) }}
        />
        <SplashProvider>
          <LenisProvider>
            <Splash />
            <a
              href="#main"
              className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[110] focus:rounded-full focus:bg-white focus:px-4 focus:py-2 focus:text-sm focus:font-semibold focus:text-text"
            >
              Lewati ke konten
            </a>
            {children}
          </LenisProvider>
        </SplashProvider>
        <ServiceWorkerRegister />
      </body>
    </html>
  );
}
