import React from "react";
import SocialLinksStyles from "./SocialLinks.module.css";
import { Link } from "react-router-dom";
const SocialLinks = () => {
  return (
    <div className={SocialLinksStyles.container}>
      <Link href="https://www.facebook.com" className={SocialLinksStyles.link}>
        Facebook
      </Link>
      <Link href="https://www.instagram.com" className={SocialLinksStyles.link}>
        Instagram
      </Link>
      <Link href="https://www.twitch.tv" className={SocialLinksStyles.link}>
        Twitch
      </Link>
    </div>
  );
};

export default SocialLinks;
