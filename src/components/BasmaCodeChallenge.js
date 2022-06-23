import React from "react";
import styles from "./BasmaCodeChallenge.module.scss";
import Card from "./Card";
import { BoldTitle, TitleUnderline } from "./ReusableCode";
import Slide from "react-reveal/Slide";
import Flip from "react-reveal/Flip";
function BasmaCodeChallenge(props) {
  return (
    <div className={styles.main}>
      <Slide left>
        <BoldTitle primary size={3.2}>
          BASMA code Challenge
        </BoldTitle>
        <TitleUnderline />
        <h4>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam vitae
          est arcu. Nam et augue magna. consectetur adipiscing elit.
        </h4>
      </Slide>
      <div className={styles.cards}>
        <Flip top>
          <Card subscription="Basic" image="basic" price="49" />
          <Card subscription="Pro" image="pro" price="129" />
        </Flip>
      </div>
      <h5>
        Not sure what to choose? <span>Contact us</span>
      </h5>
    </div>
  );
}

export default BasmaCodeChallenge;
