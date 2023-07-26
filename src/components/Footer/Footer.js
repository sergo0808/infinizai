import React from "react";
import FooterStyles from "./Footer.module.css";
import logo from "../Image/logo.svg";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className={FooterStyles.footer}>
      <div className={FooterStyles.container}>
        <div className={FooterStyles.group_info}>
          <img src={logo} alt="logo" className={FooterStyles.logo} />
          <p className={FooterStyles.text}>
            Lorem ipsum dolor amet, consectetur adipiscing elit. Eget nisl nunc quam ac sed turpis
            volutpat. Cursus sed massa non .
          </p>
        </div>
        <div className={FooterStyles.menu_info}>
          <ul className={FooterStyles.links}>
            <li>
              <p className={FooterStyles.menu_title}>Menu Items</p>
            </li>
            <li>
              <Link className={FooterStyles.link}>About</Link>
            </li>
            <li>
              <Link className={FooterStyles.link}>Blog</Link>
            </li>
            <li>
              <Link className={FooterStyles.link}>Shop</Link>
            </li>
            <li>
              <Link className={FooterStyles.link}>Contact us</Link>
            </li>
          </ul>
        </div>
        <ul className={FooterStyles.menu_other}>
          <li className={FooterStyles.links}>
            <p className={FooterStyles.menu_title}>Other Pages</p>
          </li>
          <li>
            <Link className={FooterStyles.link}>Styleguide</Link>
          </li>
          <li>
            <Link className={FooterStyles.link}>Changelog</Link>
          </li>
          <li>
            <Link className={FooterStyles.link}>licenses</Link>
          </li>
          <li>
            <Link className={FooterStyles.link}>Team</Link>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
