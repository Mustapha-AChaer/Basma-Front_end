import { Button, TextField } from "@mui/material";
import React from "react";
import { BoldTitle } from "./ReusableCode";
import styles from "./Subscribe.module.scss";

function Subscribe(props) {
  return (
    <div className={styles.main}>
      <BoldTitle primary size={3}>
        Subscribe to get updates
      </BoldTitle>
      <h3>By subscribing you will get newsleter, promotions adisicing elit.</h3>
      <TextField
        id="filled-basic"
        label="Enter your email"
        variant="outlined"
        className={styles.input}
      />
      <Button variant="contained" className={styles.button}>
        Subscribe
      </Button>
    </div>
  );
}

export default Subscribe;
