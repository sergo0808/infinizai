import React from "react";
import ContactStyles from "./ContactUs.module.css";
import basket from "../Image/basket.svg";

const ContactUs = () => {
  return (
    <div className={ContactStyles.container}>
      <img src={basket} alt="basket" className={ContactStyles.basket} />
      <div className={ContactStyles.count}>0</div>
      <button className={ContactStyles.button_us}>Contact Us</button>
    </div>
  );
};

export default ContactUs;
