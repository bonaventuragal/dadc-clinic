import Image from "next/image";
import DecorationLogo from "../../../../../public/images/logo-decoration.svg";
import MapsLogo from "../../../../../public/images/maps-logo.svg";
import LocationLogo from "../../../../../public/images/location-logo.svg";
import LocationImage from "../../../../../public/images/location.png";
import { PiArrowLineUpRight } from "react-icons/pi";

export const LocationSection = () => {
  return (
    <section className="flex flex-col bg-ash-green">
      <div className="flex flex-col-reverse h-10 md:h-28 relative">
        <div className="w-1/2 h-1/3 bg-gradient-to-r from-ash-white to-ash-green" />
        <div className="absolute h-2/3 w-1/2">
          <Image
            src={DecorationLogo}
            alt=""
            fill
            style={{
              right: "50%",
            }}
          />
        </div>
      </div>

      <div className="flex gap-4 lg:gap-28 px-4 pt-3 pb-7 lg:px-32 lg:pt-0 lg:pb-20">
        <div className="flex flex-col justify-center w-1/2 gap-3">
          <div className="flex items-center gap-3">
            <Image
              src={LocationLogo}
              alt=""
              className="w-10 h-10 lg:w-12 lg:h-12"
            />
            <span className="lg:text-3xl">Lokasi Kami</span>
          </div>
          <span className="font-light text-xs lg:text-xl text-ash-white">
            Jl. Thamrin No.34, Klegen, Kec. Madiun, Kota Madiun, Jawa Timur
            63117
          </span>

          <a
            className="p-2 lg:p-4 flex justify-between items-center bg-black/10 border-2 border-white/20"
            href="https://maps.app.goo.gl/wJWU2rUeQuB6su5BA"
            target="_blank"
          >
            <div className="flex items-center gap-2 lg:gap-4">
              <Image src={MapsLogo} alt="" className="lg:w-7 lg:h-7" />
              <span className="font-semilight text-[10px] lg:text-lg">
                Lihat Peta
              </span>
            </div>
            <PiArrowLineUpRight
              strokeWidth={4}
              className="w-4 h-4 lg:w-6 lg:h-6"
            />
          </a>
        </div>

        <div className="w-1/2">
          <Image
            src={LocationImage}
            alt="Clinic Location"
            className="w-full h-full"
          />
        </div>
      </div>
    </section>
  );
};
