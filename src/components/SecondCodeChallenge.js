import React from "react";
import Challenge from "./Challenge";
import { BoldTitle } from "./ReusableCode";
import styles from "./SecondCodeChallenge.module.scss";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import Slide from "react-reveal/Slide";
function SecondCodeChallenge(props) {
  return (
    <div className={styles.main}>
      <Slide left>
        <BoldTitle size={3.7}>Code Challenge</BoldTitle>
        <h4>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam vitae
          est arcu. Nam et augue magna. Nunc malesuada enim a nibh imperdiet,
          lobortis dapibus mi tincidunt. Admore text in fdjii sjla
        </h4>
        <div className={styles.steps}>
          <Challenge
            icon="download"
            title="Install the App"
            desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam vitae
        est arcu. Nam et augue magna."
            secondary
          />
          <ArrowForwardIosIcon className={styles.icon} />
          <Challenge
            icon="settingImage"
            title="Setup your profile"
            desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam vitae
        est arcu. Nam et augue magna."
            secondary
          />
          <ArrowForwardIosIcon className={styles.icon} />

          <Challenge
            icon="app"
            title="Enjoy the features"
            desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam vitae
        est arcu. Nam et augue magna."
            secondary
          />
        </div>
      </Slide>
    </div>
  );
}

export default SecondCodeChallenge;
