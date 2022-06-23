import React from "react";
import { ReactComponent as Check } from "../assets/images/check.svg";
import styles from "./CheckText.module.scss";
function CheckText(props) {
  return (
    <li className={styles.main}>
      <Check className={styles.check} />
      <h4>{props.text}</h4>
    </li>
  );
}

export default CheckText;
