import React from "react";
import styles from "./Challenge.module.scss";
import { BoldTitle } from "./ReusableCode";
import SettingsIcon from "@mui/icons-material/Settings";
import TouchAppIcon from "@mui/icons-material/TouchApp";
import CheckBoxOutlineBlankIcon from "@mui/icons-material/CheckBoxOutlineBlank";
import LanguageIcon from "@mui/icons-material/Language";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import FingerprintIcon from "@mui/icons-material/Fingerprint";
import DownloadApp from "../assets/images/download.png";
import App from "../assets/images/app.png";
import SettingsImage from "../assets/images/settings.png";
function Challenge(props) {
  return (
    <div className={styles.main}>
      {props.icon === "location" && <LocationOnIcon className={styles.icon} />}
      {props.icon === "language" && <LanguageIcon className={styles.icon} />}
      {props.icon === "settings" && <SettingsIcon className={styles.icon} />}
      {props.icon === "box" && (
        <CheckBoxOutlineBlankIcon className={styles.icon} />
      )}
      {props.icon === "touch" && <TouchAppIcon className={styles.icon} />}
      {props.icon === "fingerprint" && (
        <FingerprintIcon className={styles.icon} />
      )}
      {props.icon === "download" && (
        <img src={DownloadApp} alt="Download app" />
      )}
      {props.icon === "app" && <img src={App} alt="app" />}
      {props.icon === "settingImage" && (
        <img src={SettingsImage} alt="Settings Image" />
      )}

      {props.secondary && <BoldTitle size={1.5}>{props.title}</BoldTitle>}
      {!props.secondary && (
        <BoldTitle size={1.5} primary>
          {props.title}
        </BoldTitle>
      )}

      <h4>{props.desc}</h4>
    </div>
  );
}

export default Challenge;
