import React from "react";
import { BoldTitle, ColoredButton } from "./ReusableCode";
import styles from "./SharePhotos.module.scss";
import ThumbImage from "../assets/images/thumb-2.png";
import OpacityIcon from "@mui/icons-material/Opacity";
import FormatPaintIcon from "@mui/icons-material/FormatPaint";
import ReorderIcon from "@mui/icons-material/Reorder";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import Zoom from "react-reveal/Zoom";
function SharePhotos(props) {
  return (
    <div className={styles.main}>
      <Zoom>
        <div className={styles.information}>
          <BoldTitle primary size={4}>
            Share your photos with friends easily
          </BoldTitle>
          <ul>
            <li>
              <div className={styles.iconDiv}>
                <ReorderIcon className={styles.icon} />
              </div>
              <h3>
                Vivamus tempor finibus neque quis ultrices. In tincidunt, tortor
                et mattis pharetra, lorem massa porttitor est, nec lobortis
                mauris felis a quam
              </h3>
            </li>
            <li>
              <div className={styles.iconDiv}>
                <FormatPaintIcon className={styles.icon} />
              </div>

              <h3>
                Vivamus tempor finibus neque quis ultrices. In tincidunt, tortor
                et mattis pharetra, lorem massa porttitor est, nec lobortis
                mauris felis a quam
              </h3>
            </li>
            <li>
              <div className={styles.iconDiv}>
                <OpacityIcon className={styles.icon} />
              </div>

              <h3>
                Vivamus tempor finibus neque quis ultrices. In tincidunt, tortor
                et mattis pharetra, lorem massa porttitor est, nec lobortis
                mauris felis a quam
              </h3>
            </li>
            <li>
              <div className={styles.iconDiv}>
                <ShoppingCartIcon className={styles.icon} />
              </div>
              <h3>
                Vivamus tempor finibus neque quis ultrices. In tincidunt, tortor
                et mattis pharetra, lorem massa porttitor est, nec lobortis
                mauris felis a quam
              </h3>
            </li>
          </ul>
          <ColoredButton height={3} width={9} padding={1} size={1}>
            Learn More
          </ColoredButton>
        </div>
        <div className={styles.imageContainer}>
          <img src={ThumbImage} alt="Phone Image" />
        </div>
      </Zoom>
    </div>
  );
}

export default SharePhotos;
