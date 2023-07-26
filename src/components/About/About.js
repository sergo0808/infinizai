import React from "react";
import AboutStyle from "./About.module.css";
import solder from "../Image/solder.svg";
import fire from "../Image/fire.svg";
import s1 from "../Image/s1.jpg";
import s2 from "../Image/s2.jpg";
import s3 from "../Image/s3.jpg";

const About = () => {
  return (
    <section className={AboutStyle.about}>
      <img src={solder} alt="solder" className={AboutStyle.img_solder} />
      <div className={AboutStyle.container}>
        <figure className={AboutStyle.promo}>
          <img src={fire} alt="fire" />
          <p className={AboutStyle.text}>FUTURE OF eSPORTS</p>
        </figure>
        <h2 className={AboutStyle.about_title}>Customize your Own Character</h2>
        <p className={AboutStyle.about_subtitle}>
          Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque
          laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi
          architecto beatae.
        </p>
        <ul className={AboutStyle.pictures}>
          <li>
            <img src={s1} className={AboutStyle.picture} alt="picture1" />
          </li>
          <li>
            <img src={s2} className={AboutStyle.picture} alt="picture2" />
          </li>
          <li>
            <img src={s3} className={AboutStyle.picture} alt="picture3" />
          </li>
        </ul>
      </div>
    </section>
  );
};

export default About;
