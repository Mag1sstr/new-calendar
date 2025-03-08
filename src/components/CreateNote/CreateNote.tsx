import { useState } from "react";
import styles from "./CreateNote.module.css";
import { IMonthDays } from "../../interfaces/interfaces";
import { useSave } from "../../contexts/SaveContext";

interface IProps {
  openModal: boolean;
  setOpenModal: (b: boolean) => void;
  currentDay: number | null;
  setDaysArray: (arr: IMonthDays[]) => void;
  daysArray: IMonthDays[];
}

export default function CreateNote({
  openModal,
  setOpenModal,
  currentDay,
  daysArray,
  setDaysArray,
}: IProps) {
  const [value, setValue] = useState("");
  const { saved, setSaved } = useSave();

  function createNote() {
    const newArr = daysArray.map((el) => {
      if (el.day === currentDay) {
        return {
          ...el,
          title: value,
        };
      }
      return el;
    });

    const findSave = saved.find(
      (c) =>
        c.month === daysArray[currentDay! - 1].month &&
        c.year === daysArray[currentDay! - 1].year
    );
    if (findSave) {
      const replaceSave = saved.map((el) => {
        if (
          el.month === daysArray[currentDay! - 1].month &&
          el.year === daysArray[currentDay! - 1].year
        ) {
          return {
            ...el,
            saved: newArr,
          };
        }
        return el;
      });
      setSaved(replaceSave);
    } else {
      const copySaved = [...saved];
      copySaved.push({
        year: daysArray[currentDay! - 1].year,
        month: daysArray[currentDay! - 1].month,
        saved: newArr,
      });

      setSaved(copySaved);
    }
    // console.log(findSave);

    setDaysArray(newArr);
    setOpenModal(false);
    setValue("");
  }

  // console.log(saved);

  return (
    <div
      onClick={() => {
        setOpenModal(false);
      }}
      className={`${styles.modal} ${openModal && styles.open}`}
    >
      <div onClick={(e) => e.stopPropagation()} className={styles.inner}>
        <textarea
          value={value}
          onChange={(e) => setValue(e.target.value)}
          className={styles.text}
          placeholder="Напишите заметку..."
        ></textarea>
        <div className={styles.end}>
          <button onClick={createNote} className={styles.btn}>
            Создать
          </button>
        </div>
      </div>
    </div>
  );
}
