import { FC } from "react";
import "./Footer.scss";
import footerLogo from "../../assets/images/logo-cyan.svg";
import locationImg from "../../assets/images/icon-location.svg";
import phoneImg from "../../assets/images/icon-phone.svg";
import emailImg from "../../assets/images/icon-email.svg";

const Footer: FC = () => {
  return (
    <footer className="footer">
      <div className="footer__logo">
        <img src={footerLogo} loading="lazy" title="Footer Logo" />
      </div>
      <div className="footer__content">
        <div className="footer__content__info">
          <div className="footer__content__info__detail">
            <img src={locationImg} loading="lazy" title="Location" />
            <text>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua
            </text>
          </div>
          <div className="footer__content__info__detail">
            <img src={phoneImg} loading="lazy" title="Location" />
            <text>+1-543-123-4567</text>
          </div>
          <div className="footer__content__info__detail">
            <img src={emailImg} loading="lazy" title="Location" />
            <text>example@huddle.com</text>
          </div>
        </div>
        <div className="footer__content__navigation">
          <a href="/">About Us</a>
          <a href="/">What We Do</a>
          <a href="/">FAQ</a>
          <a href="/">Career</a>
          <a href="/">Blog</a>
          <a href="/">Contact Us</a>
        </div>
      </div>
      <div className="footer__copyright"></div>
    </footer>
  );
};

export default Footer;
