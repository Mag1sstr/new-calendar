import { useState } from "react";
import { monthNames } from "../../constants/constants";
import { IMonthDays } from "../../interfaces/interfaces";
import styles from "./DayInfo.module.css";

interface IProps {
  currentDay: number | null;
  currentMonth: number;
  daysArray: IMonthDays[];
  setOpenModal: (b: boolean) => void;
  setDaysArray: (arr: IMonthDays[]) => void;
}

export default function DayInfo({
  currentDay,
  currentMonth,
  setOpenModal,
  daysArray,
  setDaysArray,
}: IProps) {
  const [openEdit, setOpenEdit] = useState(false);
  const [editValue, setEditValue] = useState("");
  function create() {
    setOpenModal(true);
  }
  function editNote() {
    const newArr = [...daysArray];
    newArr[currentDay! - 1].title = editValue;
    setDaysArray(newArr);
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
            <div
              onClick={() => {
                setOpenEdit(!openEdit);
                setEditValue(daysArray[currentDay - 1].title);
              }}
              className={styles.note}
            >
              {openEdit ? (
                <div className={styles.edit}>
                  <input
                    onClick={(e) => e.stopPropagation()}
                    value={editValue}
                    onChange={(e) => setEditValue(e.target.value)}
                    type="text"
                  />
                  <button onClick={editNote}>Save</button>
                </div>
              ) : (
                <p>{daysArray[currentDay - 1].title}</p>
              )}
            </div>
          )}
        </div>
      )}
    </>
  );
}
