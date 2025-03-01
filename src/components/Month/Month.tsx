import { monthNames } from "../../constants/constants";
import backImage from "../../images/arrowLeft.png";
import nextImage from "../../images/arrowRight.png";

import styles from "./Month.module.css";

interface IProps {
  currentMonth: number;
}

export default function Month({ currentMonth }: IProps) {
  return (
    <div className={styles.month}>
      <div className={styles.row}>
        <img className={styles.image} src={backImage} alt="backImage" />
        <h1 className={styles.month}>{monthNames[currentMonth]}</h1>
        <img className={styles.image} src={nextImage} alt="nextImage" />
      </div>
    </div>
  );
}
