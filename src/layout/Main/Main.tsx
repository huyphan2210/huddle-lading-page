import { FC } from "react";
import "./Main.scss";
import HeroSection from "./components/HeroSection/HeroSection";
import FeatureSection from "./components/FeatureSection/FeatureSection";
import CTASection from "./components/CTASection/CTASection";

const Main: FC = () => {
  return (
    <main>
      <HeroSection />
      <FeatureSection />
      <CTASection />
    </main>
  );
};

export default Main;
