import React from "react";
import styles from "./BasmaCodeChallenge.module.scss";
import Card from "./Card";
import { BoldTitle, TitleUnderline } from "./ReusableCode";
function BasmaCodeChallenge(props) {
  return (
    <div className={styles.main}>
      <BoldTitle primary size={3.2}>
        BASMA code Challenge
      </BoldTitle>
      <TitleUnderline />
      <h4>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam vitae
        est arcu. Nam et augue magna. consectetur adipiscing elit.
      </h4>
      <div className={styles.cards}>
        <Card subscription="Basic" image="basic" price="49" />
        <Card subscription="Pro" image="pro" price="129" />
      </div>
      <h5>
        Not sure what to choose? <span>Contact us</span>
      </h5>
    </div>
  );
}

export default BasmaCodeChallenge;
