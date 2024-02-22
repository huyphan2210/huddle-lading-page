import { FC } from "react";
import "./Main.scss";
import HeroSection from "./components/HeroSection/HeroSection";
import FeatureSection from "./components/FeatureSection/FeatureSection";

const Main: FC = () => {
  return (
    <main>
      <HeroSection />
      <FeatureSection />
    </main>
  );
};

export default Main;
