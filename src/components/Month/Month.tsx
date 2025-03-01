import { monthNames } from "../../constants/constants";
import backImage from "../../images/arrowLeft.png";
import nextImage from "../../images/arrowRight.png";

import styles from "./Month.module.css";

interface IProps {
  currentMonth: number;
  setCurrentMonth: (i: number) => void;
  currentYear: number;
  setCurrentYear: (year: number) => void;
}

export default function Month({
  currentMonth,
  setCurrentMonth,
  currentYear,
  setCurrentYear,
}: IProps) {
  function previosMonth() {
    if (currentMonth > 0) {
      setCurrentMonth(currentMonth - 1);
    } else {
      setCurrentMonth(11);
      setCurrentYear(currentYear - 1);
    }
  }
  function nextMonth() {
    if (currentMonth < 11) {
      setCurrentMonth(currentMonth + 1);
    } else {
      setCurrentMonth(0);
      setCurrentYear(currentYear + 1);
    }
  }
  //   console.log(currentMonth);

  return (
    <div className={styles.month}>
      <div className={styles.row}>
        <img
          onClick={previosMonth}
          className={styles.image}
          src={backImage}
          alt="backImage"
        />
        <div className={styles.date}>
          <p className={styles.month}>{monthNames[currentMonth]}</p>
          <p className={styles.month}>{currentYear}</p>
        </div>
        <img
          onClick={nextMonth}
          className={styles.image}
          src={nextImage}
          alt="nextImage"
        />
      </div>
    </div>
  );
}
