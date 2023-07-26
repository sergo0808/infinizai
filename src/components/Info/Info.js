import React from "react";
import InfoStyles from "./Info.module.css";
import SocialLinks from "../SocialLinks/SocialLinks";
import fire from "../Image/fire.svg";
import solders from "../Image/solders.jpg";
import Header from "../Header/Header";

const Info = () => {
  return (
    <section className={InfoStyles.info}>
      <Header />
      <div className={InfoStyles.group_promo}>
        <SocialLinks />
        <div className={InfoStyles.container}>
          <figure className={InfoStyles.promo}>
            <img src={fire} alt="fire" />
            <p className={InfoStyles.text}>FUTURE OF eSPORTS</p>
          </figure>
          <div className={InfoStyles.info_group}>
            <h2 className={InfoStyles.info_title}>Unleash the Next Generation of Gaming</h2>
          </div>
          <p className={InfoStyles.info_subtitle}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Felis, nec donec in morbi
            pulvinar. Enim non pulvinar neque.
          </p>
          <div className={InfoStyles.group_buttons}>
            <button className={InfoStyles.button_explorer}>Explore More</button>
            <button className={InfoStyles.button_view}>View our team</button>
          </div>
        </div>
        <img src={solders} alt="plaer" className={InfoStyles.img_solders} />
      </div>
    </section>
  );
};

export default Info;
