import styles from "./calendar.module.css";

const weekDays = ["ПН", "ВТ", "СР", "ЧТ", "ПТ", "СБ", "ВС"];

export default function Calendar() {
  const currentDate = new Date();
  let date = new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 0);
  return (
    <div className={styles.calendar}>
      <h1 className={styles.month}>Январь</h1>
      <div className={styles.row}>
        <div className={styles.info}></div>
        <div className={styles.wrapper}>
          <div className={styles.week}>
            {weekDays.map((day) => (
              <div className={styles.week__day}>{day}</div>
            ))}
          </div>
          <div className={styles.month__days}>
            {[...Array(date.getDate())].map((_, i) => {
              return (
                <div
                  key={i}
                  className={`${styles.days} ${
                    currentDate.getDate() === i + 1 && styles.current
                  }`}
                >
                  <p className={styles.numeric}>{i + 1}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
