import Image from "next/image";
import AboutUsLogo from "../../../../../public/images/about-us-logo.svg";
import { IoLogoInstagram, IoLogoWhatsapp } from "react-icons/io5";
import { AboutItem } from "./AboutItem";

export const AboutUsSection = () => {
  return (
    <section className="bg-ash-white flex flex-col lg:flex-row lg:justify-between gap-5 px-7 lg:px-32 pb-3 lg:pb-20 lg:pt-12">
      <div className="flex flex-col gap-3 lg:w-1/2">
        <div className="flex items-center gap-2">
          <Image
            src={AboutUsLogo}
            alt="About Us Logo"
            className="w-10 h-10 lg:w-12 lg:h-12"
          />
          <span className="text-ash-green lg:text-2xl">Tentang Kami</span>
        </div>
        <p className="text-black/50 font-light leading-4 text-xs lg:text-lg">
          DADC Clinic adalah lorem ipsum sir dolot amit sir dolot amit. lorem
          ipsum sir dolot amit sir dolot amit. lorem ipsum sir dolot amit sir
          dolot amit.
        </p>
      </div>

      <div className="flex flex-col gap-3">
        <AboutItem
          title="Seputar Layanan"
          content="@dadc.clinic"
          href="https://instagram.com/dadc.clinic"
          icon={
            <IoLogoInstagram
              color="#00000080"
              className="w-4 h-4 lg:w-7 lg:h-7"
            />
          }
        />
        <AboutItem
          title="More Info / Reservasi"
          content="(+62) 877 1599 5964"
          href="https://wa.me/087715995964"
          icon={
            <IoLogoWhatsapp
              color="#00000080"
              className="w-4 h-4 lg:w-7 lg:h-7"
            />
          }
        />
      </div>
    </section>
  );
};
