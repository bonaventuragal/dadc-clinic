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
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-14T5DS6GXJ"
        ></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
        
          gtag('config', 'G-14T5DS6GXJ');`,
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
