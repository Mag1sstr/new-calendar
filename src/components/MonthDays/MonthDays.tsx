import { monthNames } from "../../constants/constants";
import { IMonthDays } from "../../interfaces/interfaces";
import styles from "./MonthDays.module.css";

interface IProps {
  daysArray: IMonthDays[];
  currentDate: Date;
  currentDay: number;
  setCurrentDay: (day: number) => void;
  currentMonth: number;
  setDaysArray: (arr: IMonthDays[]) => void;
}

export default function MonthDays({
  daysArray,
  currentDate,
  setCurrentDay,
  currentDay,
  currentMonth,
  setDaysArray,
}: IProps) {
  function dayClick(item: IMonthDays) {
    setCurrentDay(item.day);
    const copy = daysArray.map((el) => {
      if (item.day === el.day) {
        return {
          ...el,
          click: !el.click,
        };
      }
      return el;
    });
    setDaysArray(copy);
  }
  return (
    <div className={styles.month__days}>
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
          </div>
        );
      })}
    </div>
  );
}
