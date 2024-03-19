import Image from "next/image";
import AboutUsLogo from "../../../../../public/images/about-us-logo.svg";
import { IoLogoInstagram, IoLogoWhatsapp } from "react-icons/io5";
import { AboutItem } from "./AboutItem";

export const AboutUsSection = () => {
  return (
    <section className="bg-ash-white flex flex-col lg:flex-row lg:justify-between gap-5 px-7 lg:px-32 pb-3 md:pb-20 lg:pt-12">
      <div className="flex flex-col gap-3 lg:w-1/2">
        <div className="flex items-center gap-2">
          <Image
            src={AboutUsLogo}
            alt="About Us Logo"
            className="w-10 h-10 lg:w-12 lg:h-12"
          />
          <span className="text-ash-green lg:text-2xl">Tentang Kami</span>
        </div>
        <p className="text-black/50 font-light leading-4 text-xs lg:text-lg lg:w-4/5">
          DADC Clinic merupakan salah satu <strong>klinik gigi terbaik</strong>{" "}
          di Madiun dengan komitmen untuk senantiasa memberikan pelayanan dan
          perawatan dibidang gigi dan mulut yang terbaik dan berkualitas.
          Didukung dengan{" "}
          <strong>
            alat- alat yang <em>up to date</em>
          </strong>{" "}
          dan <strong>dokter gigi serta staff yang berpengalaman</strong> dan
          bertanggung jawab. Kami berharap kehadiran kami menjadi solusi dari
          permasalahan kesehatan gigi dan mulut masyarakat.
        </p>
      </div>

      <div className="flex flex-col gap-3 lg:w-2/5">
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
          href="https://wa.me/6287715995964"
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
