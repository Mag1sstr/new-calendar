import { DragEvent, useEffect, useState } from "react";
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
  const [timerId, setTimerId] = useState<number | null>(null);
  useEffect(() => {
    setTimerId(null);
  }, [currentMonth]);
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

  function handlePreviosMonth(e: DragEvent) {
    e.preventDefault();
    if (!timerId) {
      setTimerId(
        setTimeout(() => {
          setCurrentMonth(currentMonth - 1);
        }, 1000)
      );
    }
  }
  function handleNextMonth(e: DragEvent) {
    e.preventDefault();
    if (!timerId) {
      setTimerId(
        setTimeout(() => {
          setCurrentMonth(currentMonth + 1);
        }, 1000)
      );
    }
  }

  function clearTimeout() {
    clearTimeout(timerId!);

    setTimerId(null);
  }
  // console.log(timer);

  // document.onkeydown = (e) => {
  //   if (e.key === "ArrowLeft" && currentMonth > 0) {
  //     setCurrentMonth(currentMonth - 1);
  //   } else {
  //     setCurrentMonth(11);
  //     setCurrentYear(currentYear - 1);
  //   }

  //   if (e.key === "ArrowRight" && currentMonth < 11) {
  //     setCurrentMonth(currentMonth + 1);
  //   } else {
  //     setCurrentMonth(0);
  //     setCurrentYear(currentYear + 1);
  //   }
  // };

  return (
    <div className={styles.month}>
      <div className={styles.row}>
        <img
          onDragOver={handlePreviosMonth}
          onDragLeave={clearTimeout}
          onDragEnd={clearTimeout}
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
          onDragOver={handleNextMonth}
          onDragLeave={clearTimeout}
          onDragEnd={clearTimeout}
          onClick={nextMonth}
          className={styles.image}
          src={nextImage}
          alt="nextImage"
        />
      </div>
    </div>
  );
}
