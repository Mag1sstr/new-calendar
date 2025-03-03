import { monthNames } from "../../constants/constants";
import { IMonthDays } from "../../interfaces/interfaces";
import styles from "./MonthDays.module.css";
import noteImage from "../../images/noteIcon.png";

interface IProps {
  daysArray: IMonthDays[];
  currentDate: Date;
  currentDay: number | null;
  setCurrentDay: (day: number) => void;
  currentMonth: number;
  setDaysArray: (arr: IMonthDays[]) => void;
  currentYear: number;
}

export default function MonthDays({
  daysArray,
  currentDate,
  setCurrentDay,
  currentDay,
  currentMonth,
  setDaysArray,
  currentYear,
}: IProps) {
  function getStartWeekDay(date: Date) {
    if (date.getDay() === 0) {
      return 6;
    }
    return date.getDay() - 1;
  }

  function dayClick(item: IMonthDays) {
    setCurrentDay(item.day);
    const copy = daysArray.map((el) => {
      if (el.click) {
        return {
          ...el,
          click: false,
        };
      }
      if (item.day === el.day) {
        return {
          ...el,
          click: true,
        };
      }
      return el;
    });
    setDaysArray(copy);
  }
  return (
    <div className={styles.month__days}>
      {[...Array(getStartWeekDay(new Date(currentYear, currentMonth, 1)))].map(
        (_, i) => (
          <div key={i} className={styles.days}></div>
        )
      )}
      {daysArray.map((item) => {
        return (
          <div
            key={item.day}
            onClick={() => dayClick(item)}
            className={`${styles.days} ${
              currentDate.getDate() === item.day &&
              currentDate.getMonth() === currentMonth &&
              styles.current
            } ${item.click && styles.clicked}`}
          >
            <p className={styles.numeric}>{item.day}</p>
            {item.title && (
              <img className={styles.image} src={noteImage} alt="noteImage" />
            )}
          </div>
        );
      })}
    </div>
  );
}
