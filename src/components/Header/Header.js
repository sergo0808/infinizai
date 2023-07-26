import React from "react";
import HeaderStyles from "./Header.module.css";
import logo from "../Image/logo.svg";
import Navigation from "../Navigation/Navigation";
import ContactUs from "../ContactUs/ContactUs";

const Header = () => {
  return (
    <header className={HeaderStyles.header}>
      <img src={logo} alt="logo" className={HeaderStyles.logo} />
      <Navigation />
      <ContactUs />
    </header>
  );
};

export default Header;
