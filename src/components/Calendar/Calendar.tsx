import { useState } from "react";
import MonthDays from "../MonthDays/MonthDays";
import WeekDays from "../WeekDays/WeekDays";
import styles from "./calendar.module.css";
import Month from "../Month/Month";
import DayInfo from "../DayInfo/DayInfo";

export default function Calendar() {
  const currentDate = new Date();
  const [currentYear, setCurrentYear] = useState(currentDate.getFullYear());
  const [currentMonth, setCurrentMonth] = useState(currentDate.getMonth());
  const [currentDay, setCurrentDay] = useState(currentDate.getDate());

  let date = new Date(currentYear, currentMonth + 1, 0);
  const daysArray = [...Array(date.getDate())].map((_, i) => {
    return {
      day: i + 1,
      title: "",
      click: false,
    };
  });

  return (
    <div className={styles.calendar}>
      <Month
        currentMonth={currentMonth}
        setCurrentMonth={setCurrentMonth}
        currentYear={currentYear}
        setCurrentYear={setCurrentYear}
      />

      <div className={styles.row}>
        <DayInfo currentDay={currentDay} currentMonth={currentMonth} />
        {/* <div className={styles.info}></div> */}
        <div className={styles.wrapper}>
          <WeekDays />

          <MonthDays
            daysArray={daysArray}
            currentDate={currentDate}
            currentDay={currentDay}
            setCurrentDay={setCurrentDay}
            currentMonth={currentMonth}
          />
        </div>
      </div>
    </div>
  );
}
