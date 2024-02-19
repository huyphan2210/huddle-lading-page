import { FC } from "react";
import "./HeroSection.scss";
import logo from "../../../../assets/images/logo.svg";

const HeroSection: FC = () => {
  return (
    <>
      <div className="header">
        <img src={logo} alt="Logo" title="Logo" />
        <button type="button">Try for free</button>
      </div>
    </>
  );
};

export default HeroSection;
