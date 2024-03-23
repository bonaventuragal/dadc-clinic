import Image from "next/image";
import logo from "../../../public/images/logo.svg";
import { HiOutlinePhone } from "react-icons/hi";

export const Navbar = () => {
  return (
    <header className="flex py-2 px-6 lg:px-32 w-full bg-ash-white items-center justify-between">
      <div className="flex gap-2 justify-center">
        <Image src={logo} alt="DADC Clinic" />
        <h1 className="flex flex-col text-black justify-center leading-none text-lg">
          <span>DADC</span>
          <span>CLINIC</span>
        </h1>
      </div>

      <nav className="bg-black/10 p-3 rounded-xl">
        <a
          className="flex justify-center items-center gap-2"
          href="https://wa.me/6287715995964"
          target="_blank"
        >
          <HiOutlinePhone size={24} color="#668F6F" strokeWidth={2.2} />
          <span className="flex flex-col lg:flex-row lg:gap-1 justify-center items-start text-ash-green leading-none text-xs lg:text-sm">
            <span>Kontak </span>
            <span>Kami</span>
          </span>
        </a>
      </nav>
    </header>
  );
};
