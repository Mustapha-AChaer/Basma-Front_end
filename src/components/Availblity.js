import React from "react";
import styles from "./Availblity.module.scss";
import { BoldTitle } from "./ReusableCode";
import AndroidPlayStore from "../assets/images/google-play.png";
import AppleAppStore from "../assets/images/app-store.png";
function Availblity(props) {
  return (
    <div className={styles.main}>
      <BoldTitle size={3}>BASMA is available for all devices</BoldTitle>
      <h3>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc dapibus
        dui libero, non finibus leo dictum eu. Morbi lobortis, eros sed aliquam
        ultricies, sem odio sodales nunc, in rhoncus est lorem sit amet erat.
        Suspendisse sit amet enim nisl. Donec eu nisi a lectus ultrices
        malesuada in in orci. Ut velit arcu.
      </h3>
      <div className={styles.images}>
        <img src={AndroidPlayStore} alt="Android Play Store" />
        <img src={AppleAppStore} alt="App Store" />
      </div>
      <h3>
        <em>* Availblity on Iphone, Ipad and all android devices </em>
      </h3>
    </div>
  );
}

export default Availblity;
