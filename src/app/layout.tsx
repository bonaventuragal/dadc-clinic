import type { Metadata } from "next";
import "./globals.css";
import localFont from "next/font/local";
import { Navbar } from "@/components";

const cocogoosePro = localFont({
  src: [
    {
      path: "../../public/font/cocogoose-pro/Thin.otf",
      weight: "100",
      style: "normal",
    },
    {
      path: "../../public/font/cocogoose-pro/ThinItalic.otf",
      weight: "100",
      style: "italic",
    },
    {
      path: "../../public/font/cocogoose-pro/UltraLight.otf",
      weight: "200",
      style: "normal",
    },
    {
      path: "../../public/font/cocogoose-pro/UltraLightItalic.otf",
      weight: "200",
      style: "italic",
    },
    {
      path: "../../public/font/cocogoose-pro/Light.otf",
      weight: "300",
      style: "normal",
    },
    {
      path: "../../public/font/cocogoose-pro/LightItalic.otf",
      weight: "300",
      style: "italic",
    },
    {
      path: "../../public/font/cocogoose-pro/Light.otf",
      weight: "300",
      style: "normal",
    },
    {
      path: "../../public/font/cocogoose-pro/LightItalic.otf",
      weight: "300",
      style: "italic",
    },
    {
      path: "../../public/font/cocogoose-pro/SemiLight.otf",
      weight: "350",
      style: "normal",
    },
    {
      path: "../../public/font/cocogoose-pro/SemiLightItalic.otf",
      weight: "350",
      style: "italic",
    },
    {
      path: "../../public/font/cocogoose-pro/Regular.otf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../public/font/cocogoose-pro/Italic.otf",
      weight: "400",
      style: "italic",
    },
  ],
  variable: "--font-cocogoose-pro",
});

export const metadata: Metadata = {
  title: "DADC Clinic",
  description: "Klinik Dokter Gigi DADC Madiun",
  keywords: ["klinik", "gigi", "madiun", "klinik gigi madiun", "klinik gigi"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Klinik Gigi",
    name: "DADC Clinic",
    address: {
      "@type": "PostalAddress",
      streetAddress:
        "Jl. Thamrin No.34, Klegen, Kec. Madiun, Kota Madiun, Jawa Timur 63117",
      addressLocality: "Madiun",
      addressRegion: "Jawa Barat",
      postalCode: "63117",
      addressCountry: "ID",
    },
    telephone: "087715995964",
  };

  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(structuredData),
          }}
        ></script>
      </head>
      <body className={cocogoosePro.className}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
