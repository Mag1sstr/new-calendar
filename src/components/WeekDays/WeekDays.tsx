import { weekDays } from "../../constants/constants";
import styles from "./WeekDays.module.css";

export default function WeekDays() {
  return (
    <div className={styles.week}>
      {weekDays.map((day) => (
        <div key={day} className={styles.week__day}>
          {day}
        </div>
      ))}
    </div>
  );
}
