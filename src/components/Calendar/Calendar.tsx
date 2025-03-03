import { useEffect, useRef, useState } from "react";
import MonthDays from "../MonthDays/MonthDays";
import WeekDays from "../WeekDays/WeekDays";
import styles from "./calendar.module.css";
import Month from "../Month/Month";
import DayInfo from "../DayInfo/DayInfo";
import { IMonthDays } from "../../interfaces/interfaces";
import CreateNote from "../CreateNote/CreateNote";

export default function Calendar() {
  const currentDate = new Date();
  const [currentYear, setCurrentYear] = useState(currentDate.getFullYear());
  const [currentMonth, setCurrentMonth] = useState(currentDate.getMonth());
  const [daysArray, setDaysArray] = useState<IMonthDays[]>([]);
  const [currentDay, setCurrentDay] = useState<number | null>(null);
  const [openModal, setOpenModal] = useState(false);

  const date = new Date(currentYear, currentMonth + 1, 0);

  useEffect(() => {
    const days = [...Array(date.getDate())].map((_, i) => {
      return {
        day: i + 1,
        title: "",
        click: false,
        year: currentYear,
        month: currentMonth,
      };
    });
    setDaysArray(days);
  }, [currentMonth]);

  return (
    <div className={styles.calendar}>
      <CreateNote
        openModal={openModal}
        setOpenModal={setOpenModal}
        currentDay={currentDay}
        daysArray={daysArray}
        setDaysArray={setDaysArray}
      />

      <Month
        currentMonth={currentMonth}
        setCurrentMonth={setCurrentMonth}
        currentYear={currentYear}
        setCurrentYear={setCurrentYear}
      />

      <div className={styles.row}>
        <DayInfo
          currentDay={currentDay}
          currentMonth={currentMonth}
          daysArray={daysArray}
          setOpenModal={setOpenModal}
        />
        {/* <div className={styles.info}></div> */}
        <div className={styles.wrapper}>
          <WeekDays />

          <MonthDays
            daysArray={daysArray}
            currentDate={currentDate}
            currentDay={currentDay}
            setCurrentDay={setCurrentDay}
            currentMonth={currentMonth}
            setDaysArray={setDaysArray}
            currentYear={currentYear}
          />
        </div>
      </div>
    </div>
  );
}
