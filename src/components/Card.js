import React from "react";
import styles from "./Card.module.scss";
import BasicBike from "../assets/images/bike.png";
import ProBike from "../assets/images/motorbike.png";
import { ColoredButton } from "./ReusableCode";
const ProServices = [
  "10GB Linux Web Space",
  "50 MySQL Databases",
  "Emails",
  "Daily Backups",
];
const BasicServices = [
  "5GB Linux Web Space",
  "5 MySQL Databases",
  "24/7 Tech Support",
  "Daily Backups",
];
function Card(props) {
  return (
    <div className={styles.main}>
      {props.image === "pro" && <img src={ProBike} alt="Pro Bike" />}
      {props.image === "basic" && <img src={BasicBike} alt="Basic Bike" />}
      <h2>{props.subscription}</h2>
      <h3>
        $<h1>{props.price}</h1>
      </h3>
      <ul>
        {props.image === "pro" &&
          ProServices.map((service) => <li>{service}</li>)}
        {props.image === "basic" &&
          BasicServices.map((service) => <li>{service}</li>)}
      </ul>
      <ColoredButton height={3} width={8} size={1} className={styles.button}>
        Sign Up
      </ColoredButton>
    </div>
  );
}

export default Card;
