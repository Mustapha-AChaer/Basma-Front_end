import React from "react";
import { BoldTitle, TitleUnderline } from "./ReusableCode";
import styles from "./StayTuned.module.scss";
import { ReactComponent as HomeImage } from "../assets/images/form-house.svg";
import { ReactComponent as MailImage } from "../assets/images/form-mail.svg";
import { ReactComponent as PhoneImage } from "../assets/images/form-phone.svg";
import { Button, TextField } from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
function StayTuned(props) {
  return (
    <div className={styles.main}>
      <BoldTitle primary>Stay Tuned</BoldTitle>
      <TitleUnderline />
      <h3>
        Nunc dapibus dui libero, non finibus leo dictum eu. Morbi lobortis, eros
        sed aliquam ultricies, sem odio sodales nunc, in rhoncus est lorem sit
        amet erat
      </h3>
      <div className={styles.infoForm}>
        <div className={styles.info}>
          <h3>
            Nunc dapibus dui libero, non finibus leo dictum eu. Morbi lobortis,
            eros sed aliquam ultricies, sem odio sodales nunc, in rhoncus est
            lorem sit amet erat
          </h3>
          <ul>
            <li>
              <HomeImage className={styles.icon} />
              Nunc dapibus dui libero, non finibus leo dictum eu. Morbi lobortis
            </li>
            <li>
              <PhoneImage className={styles.icon} />
              +971 78897310
            </li>
            <li>
              <MailImage className={styles.icon} />
              mustapha.abouchaer@gmail.com
            </li>
          </ul>
        </div>
        <div className={styles.form}>
          <TextField
            fullWidth
            label="Name"
            id="fullWidth"
            className={styles.inputField}
          />
          <TextField
            fullWidth
            label="Email"
            id="fullWidth"
            className={styles.inputField}
          />
          <TextField
            fullWidth
            label="Subject"
            id="fullWidth"
            className={styles.inputField}
          />
          <TextField
            fullWidth
            label="Message"
            id="fullWidth"
            className={styles.inputField}
            multiline
            rows={5}
          />
          <Button variant="contained" className={styles.button}>
            <SendIcon style={{ marginRight: "10" }} /> Send Message
          </Button>
        </div>
      </div>
    </div>
  );
}

export default StayTuned;
