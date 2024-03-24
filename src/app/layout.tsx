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
  title: "DADC Clinic | Klinik Dokter Gigi Terbaik di Madiun",
  description:
    "DADC Clinic merupakan salah satu klinik gigi terbaik di Madiun dengan dokter gigi terpercaya.",
  keywords: [
    "klinik gigi madiun",
    "dokter gigi madiun",
    "klinik gigi",
    "dokter gigi",
    "klinik",
    "dokter",
    "gigi",
    "madiun",
    "dentist",
    "clinic",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Dentist",
    name: "Klinik Dokter Gigi DADC Madiun",
    address: {
      "@type": "PostalAddress",
      streetAddress:
        "Jl. Thamrin No.34, Klegen, Kec. Madiun, Kota Madiun, Jawa Timur 63117",
      addressLocality: "Madiun",
      addressRegion: "Jawa Timur",
      postalCode: "63117",
      addressCountry: "ID",
    },
    telephone: "6287715995964",
    logo: "https://dadc-clinic.com/favicon.ico",
    description:
      "DADC Clinic merupakan salah satu terbaik di Madiun dengan dokter gigi terpercaya.",
    sameAs: ["https://www.instagram.com/dadc.clinic/"],
  };

  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(structuredData),
          }}
        ></script>
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Klinik Gigi DADC Madiun" />
        <meta
          property="og:description"
          content="DADC Clinic merupakan salah satu klinik gigi terbaik di Madiun dengan dokter gigi terpercaya."
        />
        <meta property="og:url" content="https://www.dadc-clinic.com/" />
        <link rel="canonical" href="https://www.dadc-clinic.com" />
      </head>
      <body className={cocogoosePro.className}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
