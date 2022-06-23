import React from "react";
import styles from "./PowerfulTools.module.scss";
import PhoneImage from "../assets/images/phone2.png";
import { BoldTitle } from "./ReusableCode";
import CheckText from "./CheckText";
import NotificationsIcon from "@mui/icons-material/Notifications";
import EmailIcon from "@mui/icons-material/Email";
import VideoCameraBackIcon from "@mui/icons-material/VideoCameraBack";
import Rotate from "react-reveal/Rotate";

function PowerfulTools(props) {
  return (
    <div className={styles.main}>
      <Rotate bottom left>
        <div className={styles.phoneImage}>
          <img src={PhoneImage} alt="Phone Image" />
        </div>
      </Rotate>
      <Rotate bottom right>
        <div className={styles.information}>
          <BoldTitle primary size={5}>
            Work Faster with powerful tools.
          </BoldTitle>
          <ul className={styles.text}>
            <CheckText text="Combined with a handful of model sentence structures looks reasonable" />
            <CheckText text="Contrary to popular belief, Lorem ipsum is not simply random text" />
            <CheckText text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam vitae est arcu. Nam et augue magna." />
            <CheckText text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam vitae est arcu. Nam et augue magna." />
            <CheckText text="All the lorem Ipsum generators on the Internet tend to repeat necessary" />
          </ul>

          <ul className={styles.icons}>
            <li>
              <NotificationsIcon />
            </li>
            <li>
              <EmailIcon />
            </li>
            <li>
              <VideoCameraBackIcon />
            </li>
          </ul>
        </div>
      </Rotate>
    </div>
  );
}

export default PowerfulTools;
