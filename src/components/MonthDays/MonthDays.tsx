import { monthNames } from "../../constants/constants";
import { IMonthDays } from "../../interfaces/interfaces";
import styles from "./MonthDays.module.css";
import noteImage from "../../images/noteIcon.png";
import { DragEvent, DragEventHandler, useState } from "react";

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
  const [currentItem, setCurrentItem] = useState<IMonthDays | null>(null);

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
  function hansleDragStart(item: IMonthDays) {
    setCurrentItem(item);
    console.log(item);
  }
  function handleDragOver(event: DragEvent) {
    event.preventDefault();
    (event.currentTarget as HTMLElement).classList.add(styles.drag__over);
  }
  function handleDragLeave(event: DragEvent) {
    (event.currentTarget as HTMLElement).classList.remove(styles.drag__over);
  }
  function handleDrop(event: DragEvent, item: IMonthDays) {
    event.preventDefault();
    const newArr = daysArray.map((el) => {
      if (el.day === currentItem!.day) {
        return {
          ...item,
        };
      }
      if (item.day === el.day) {
        return {
          ...currentItem!,
        };
      }
      return el;
    });
    setDaysArray(newArr);
    console.log(item);
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
            draggable
            onDragStart={() => hansleDragStart(item)}
            onDragOver={handleDragOver}
            onDragLeave={handleDragLeave}
            onDrop={(event) => handleDrop(event, item)}
            // onDragEnd={() => handleDrop(item)}
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
