import React from "react";
import Challenge from "./Challenge";
import styles from "./CodeChallenge.module.scss";
import { BoldTitle, TitleUnderline } from "./ReusableCode";

function CodeChallenge(props) {
  return (
    <div className={styles.mainCodeChallenge}>
      <BoldTitle primary size={3} className={styles.title}>
        Code Challenge
      </BoldTitle>
      <TitleUnderline />
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam vitae
        est arcu. Nam et augue magna. Nunc malesuada enim a nibh imperdiet,
        lobortis dapibus mi tincidunt. Admore text in fdjii sjla
      </p>
      <div className={styles.challenges}>
        <Challenge
          icon="touch"
          title="Fully Functional"
          desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam vitae est arcu."
        />
        <Challenge
          icon="fingerprint"
          title="Fully Functional"
          desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam vitae est arcu. "
        />
        <Challenge
          icon="box"
          title="Fully Functional"
          desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam vitae est arcu. "
        />
        <Challenge
          icon="location"
          title="Location Tracking"
          desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam vitae est arcu. "
        />
        <Challenge
          icon="settings"
          title="Powerful Settings"
          desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam vitae est arcu. "
        />
        <Challenge
          icon="language"
          title="Multiple Language"
          desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam vitae est arcu."
        />
      </div>
    </div>
  );
}

export default CodeChallenge;
