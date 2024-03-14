import { AboutUsSection } from "./sections/AboutUsSection";
import { HeroSection } from "./sections/HeroSection";

export const LandingModule = () => {
  return (
    <main className="flex flex-col bg-ash-white">
      <HeroSection />
      <AboutUsSection />
    </main>
  );
};
