import { AboutUsSection } from "./sections/AboutUsSection";
import { HeroSection } from "./sections/HeroSection";
import { LocationSection } from "./sections/LocationSection";

export const LandingModule = () => {
  return (
    <main className="flex flex-col bg-ash-white">
      <HeroSection />
      <AboutUsSection />
      <LocationSection />
    </main>
  );
};
