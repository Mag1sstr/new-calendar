import { monthNames } from "../../constants/constants";
import styles from "./DayInfo.module.css";

interface IProps {
  currentDay: number;
  currentMonth: number;
}

export default function DayInfo({ currentDay, currentMonth }: IProps) {
  return (
    <div className={styles.info}>
      <h3 className={styles.title}>
        {currentDay} число | {monthNames[currentMonth]}
      </h3>
    </div>
  );
}
