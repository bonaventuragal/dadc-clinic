"use client";

import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import HeroDesktop1 from "../../../../../public/images/hero-desktop-1.png";
import HeroDesktop2 from "../../../../../public/images/hero-desktop-2.png";
import HeroDesktop3 from "../../../../../public/images/hero-desktop-3.png";
import HeroMobile1 from "../../../../../public/images/hero-mobile-1.png";
import HeroMobile2 from "../../../../../public/images/hero-mobile-2.png";
import HeroMobile3 from "../../../../../public/images/hero-mobile-3.png";
import Logo from "../../../../../public/images/logo-2.svg";
import Image, { StaticImageData } from "next/image";
import { useWindowSize } from "@uidotdev/usehooks";

export const HeroSection = () => {
  const { width } = useWindowSize();
  const mobileHero = [HeroMobile1, HeroMobile2, HeroMobile3];
  const desktopHero = [HeroDesktop1, HeroDesktop2, HeroDesktop3];
  const heroInfo = [
    {
      alt: "DADC Clinic",
      tagline1: "we want to see your",
      tagline2: "Bright Smile",
    },
    {
      alt: "DADC Clinic",
      tagline1: "your teeth are",
      tagline2: "More Valuable",
      tagline3: "than diamond for us",
    },
    {
      alt: "DADC Clinic",
      tagline1: "we treat your beautiful smile",
      tagline2: "with Heart",
    },
  ];

  const renderCarouselItem = (items: StaticImageData[]) => {
    return items.map((item, index) => {
      const { alt, tagline1, tagline2, tagline3 } = heroInfo[index];

      return (
        <div className="relative" key={index}>
          <Image src={item} alt={alt} />
          <div className="absolute z-10 top-0 left-0 w-full h-full flex flex-col justify-center items-center gap-1 lg:gap-4">
            <Image
              src={Logo}
              alt=""
              className="!w-6 !h-6 md:!w-10 md:!h-10 lg:!w-12 lg:!h-12"
            />
            <span className="text-white font-semilight lg:text-lg">
              {tagline1}
            </span>
            <span className="text-white italic text-4xl md:text-5xl lg:text-6xl">
              {tagline2}
            </span>
            {tagline3 && (
              <span className="text-white font-semilight lg:text-lg">
                {tagline3}
              </span>
            )}
          </div>
        </div>
      );
    });
  };

  return (
    <section>
      <Carousel
        swipeable
        emulateTouch
        infiniteLoop
        showArrows={false}
        showStatus={false}
        showThumbs={false}
        autoPlay
        interval={3000}
        renderIndicator={(_clickHandler, isSelected) => {
          return (
            <li
              className={`!h-2 !opacity-100 !shadow-none md:!mb-12 xl:!mb-28 !mx-1 !cursor-default dot ${
                isSelected
                  ? "!bg-bold-green !rounded-full !w-2"
                  : "!bg-ash-white/50 !rounded-xl !w-6"
              }`}
            />
          );
        }}
      >
        {renderCarouselItem(width && width <= 768 ? mobileHero : desktopHero)}
      </Carousel>
    </section>
  );
};
