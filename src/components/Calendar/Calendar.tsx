import { useState } from "react";
import MonthDays from "../MonthDays/MonthDays";
import WeekDays from "../WeekDays/WeekDays";
import styles from "./calendar.module.css";
import Month from "../Month/Month";

export default function Calendar() {
  const currentDate = new Date();
  const [currentYear, setCurrentYear] = useState(currentDate.getFullYear());
  const [currentMonth, setCurrentMonth] = useState(currentDate.getMonth());

  let date = new Date(currentYear, currentMonth + 1, 0);

  return (
    <div className={styles.calendar}>
      <Month
        currentMonth={currentMonth}
        setCurrentMonth={setCurrentMonth}
        currentYear={currentYear}
        setCurrentYear={setCurrentYear}
      />
      {/* <h1 className={styles.month}>{monthNames[currentMonth]}</h1> */}
      <div className={styles.row}>
        <div className={styles.info}></div>
        <div className={styles.wrapper}>
          <WeekDays />

          <MonthDays daysCount={date.getDate()} currentDate={currentDate} />
        </div>
      </div>
    </div>
  );
}
