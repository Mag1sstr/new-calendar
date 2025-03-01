import { monthNames } from "../../constants/constants";
import { IMonthDays } from "../../interfaces/interfaces";
import styles from "./MonthDays.module.css";

interface IProps {
  daysArray: IMonthDays[];
  currentDate: Date;
  currentDay: number;
  setCurrentDay: (day: number) => void;
  currentMonth: number;
}

export default function MonthDays({
  daysArray,
  currentDate,
  setCurrentDay,
  currentDay,
  currentMonth,
}: IProps) {
  return (
    <div className={styles.month__days}>
      {daysArray.map((item, i) => {
        return (
          <div
            key={item.day}
            onClick={() => {
              setCurrentDay(item.day);
            }}
            className={`${styles.days} ${
              currentDate.getDate() === item.day &&
              currentDate.getMonth() === currentMonth &&
              styles.current
            } ${
              currentDay === item.day &&
              currentDate.getDate() !== item.day &&
              styles.clicked
            }`}
          >
            <p className={styles.numeric}>{item.day}</p>
          </div>
        );
      })}
    </div>
  );
}
