import { FC } from "react";
import "./Footer.scss";
import footerLogo from "../../assets/images/logo-cyan.svg";

const Footer: FC = () => {
  return (
    <footer className="footer">
      <div className="footer__logo">
        <img src={footerLogo} loading="lazy" title="Footer Logo"/>
      </div>
      <div className="footer__content"></div>
      <div className="footer__copyright"></div>
    </footer>
  );
};

export default Footer;
