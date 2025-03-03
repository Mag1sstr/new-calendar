import { monthNames } from "../../constants/constants";
import { IMonthDays } from "../../interfaces/interfaces";
import styles from "./DayInfo.module.css";

interface IProps {
  currentDay: number | null;
  currentMonth: number;
  daysArray: IMonthDays[];
  setOpenModal: (b: boolean) => void;
}

export default function DayInfo({
  currentDay,
  currentMonth,
  setOpenModal,
  daysArray,
}: IProps) {
  function create() {
    setOpenModal(true);
  }

  return (
    <>
      {currentDay && (
        <div className={styles.info}>
          <h3 className={styles.title}>
            {daysArray[currentDay - 1].day} число | {monthNames[currentMonth]}
          </h3>
          {!daysArray[currentDay - 1].title ? (
            <div className={styles.no}>
              <p>Нет заметок</p>
              <button onClick={create} className={styles.btn}>
                Создать
              </button>
            </div>
          ) : (
            <div className={styles.note}>
              <p>{daysArray[currentDay - 1].title}</p>
            </div>
          )}
        </div>
      )}
    </>
  );
}
