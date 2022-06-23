import React from "react";
import styles from "./MainFrame.module.scss";
import phoneImage from "../assets/images/thumb-1.png";
import { BoldTitle, ColoredButton } from "./ReusableCode";
import Fade from "react-reveal/Fade";
function MainFrame(props) {
  return (
    <div className={styles.mainframe}>
      <Fade right>
        <div className={styles.nav}>
          <ul>
            <li>Home</li>
            <li>Features</li>
            <li>Pages</li>
            <li>Screenshots</li>
            <li>Pricing</li>
            <li>Contact</li>
          </ul>
        </div>
      </Fade>

      <div className={styles.info}>
        <Fade left>
          <div className={styles.title}>
            <BoldTitle primary size={5.5} margin={5}>
              Creative way to Showcase your App
            </BoldTitle>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
              vitae est arcu. Nam et augue magna. Nunc malesuada enim a nibh
              imperdiet, lobortis dapibus mi tincidunt. Nullam ipsum tortor,
              fringilla vulputate auctor ac, scelerisque eget quam. Nulla sed
              urna nec massa vehicula ullamcorper. Aenean id massa ac mi
              vehicula consectetur sit amet id eros. Nam iaculis at libero id
              congue. Fusce vehicula lacus vel tortor malesuada commodo.
              Maecenas erat nibh, commodo a gravida quis, tempus nec nibh.
            </p>
            <ColoredButton size={1.3} padding={0.5} height={3.5} width={10}>
              Get Started
            </ColoredButton>
          </div>
        </Fade>
        <Fade right>
          <div className={styles.image}>
            <img src={phoneImage} alt="Phone Logo" />
          </div>
        </Fade>
      </div>
    </div>
  );
}

export default MainFrame;
