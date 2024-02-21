import { FC } from "react";
import "./HeroSection.scss";
import logo from "../../../../assets/images/logo.svg";
import mockup from "../../../../assets/images/illustration-mockups.svg";

const HeroSection: FC = () => {
  return (
    <section className="hero-section">
      <div className="hero-section__header">
        <img src={logo} alt="Logo" loading="lazy" title="Logo" />
        <button type="button">Try It Free</button>
      </div>
      <div className="hero-section__content">
        <div className="hero-section__content__text">
          <h1>Build The Community Your Fans Will Love</h1>
          <p>
            Huddle re-imagines the way we build communities. You have a voice, but
            so does your audience. Create connections with your users as you
            engage in genuine discussion.
          </p>
          <button type="button">Get Started For Free</button>
        </div>
        <div className="hero-section__content__image">
        <img src={mockup} title="illustration" loading="lazy"/>
      </div>
      </div>
    </section>
  );
};

export default HeroSection;
