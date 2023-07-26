import React from "react";
import NewsStyle from "./News.module.css";
import fire from "../Image/fire.svg";
import controlle from "../Image/controller.jpg";
import plaer from "../Image/plaer.jpg";
import alesports from "../Image/alesports.jpg";
import keybord from "../Image/keyboard.jpg";
import headphones from "../Image/headphones.jpg";

const News = () => {
  return (
    <section className={NewsStyle.news}>
      <div className={NewsStyle.group_acrticle}>
        <figure className={NewsStyle.promo}>
          <img src={fire} alt="fire" />
          <p className={NewsStyle.text}>FUTURE OF eSPORTS</p>
        </figure>
        <div className={NewsStyle.container}>
          <h2 className={NewsStyle.title}>Latest News & Articles</h2>
          <button className={NewsStyle.button_readme}>Read More</button>
        </div>
        <ul className={NewsStyle.grid_container}>
          <li className={NewsStyle.big_container}>
            <img src={controlle} alt="controlle" />
            <p className={NewsStyle.text_data_big}>April 2, 2021</p>
            <p className={NewsStyle.text_title_big}>
              Esports Group teams up with the Indianapolis Colts
            </p>
          </li>
          <li className={NewsStyle.small_conteiner}>
            <img src={plaer} alt="plaer" className={NewsStyle.image} />
            <p className={NewsStyle.text_data}>April 2, 2021</p>
            <p className={NewsStyle.text_title}>NAVI reveals s1mple fifth anniversary</p>
          </li>
          <li className={NewsStyle.small_conteiner}>
            <img src={alesports} alt="alesports" className={NewsStyle.image} />
            <p className={NewsStyle.text_data}>April 2, 2021</p>
            <p className={NewsStyle.text_title}>A1esports Shares new picture</p>
          </li>
          <li className={NewsStyle.small_conteiner}>
            <img src={keybord} alt="keybord" className={NewsStyle.image} />
            <p className={NewsStyle.text_data}>April 2, 2021</p>
            <p className={NewsStyle.text_title}>T1 unveil partnership with Razer</p>
          </li>
          <li className={NewsStyle.small_conteiner}>
            <img src={headphones} alt="headphones" className={NewsStyle.image} />
            <p className={NewsStyle.text_data}>April 2, 2021</p>
            <p className={NewsStyle.text_title}>RX secures content partnership with</p>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default News;
