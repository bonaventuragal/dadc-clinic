import Image from "next/image";
import logo from "../../../public/images/logo.svg";
import { HiOutlinePhone } from "react-icons/hi";

export const Navbar = () => {
  return (
    <header className="flex py-2 px-6 lg:px-32 w-full bg-ash-white items-center justify-between">
      <div className="flex gap-2 justify-center">
        <Image src={logo} alt="DADC Logo" />
        <div className="flex flex-col text-black justify-center leading-none text-lg">
          <span>DADC</span>
          <span>CLINIC</span>
        </div>
      </div>

      <nav className="bg-black/10 p-3 rounded-xl cursor-pointer">
        <button className="flex justify-center items-center gap-2">
          <HiOutlinePhone size={24} color="#668F6F" strokeWidth={2.2} />
          <span className="flex flex-col lg:flex-row lg:gap-1 justify-center items-start text-ash-green leading-none text-xs lg:text-sm">
            <span>Kontak </span>
            <span>Kami</span>
          </span>
        </button>
      </nav>
    </header>
  );
};
