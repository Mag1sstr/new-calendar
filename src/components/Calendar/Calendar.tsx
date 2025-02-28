import styles from "./calendar.module.css";

const weekDays = ["ПН", "ВТ", "СР", "ЧТ", "ПТ", "СБ", "ВС"];

export default function Calendar() {
  return (
    <div className={styles.calendar}>
      <h1 className={styles.month}>Январь</h1>
      <div className={styles.row}>
        <div className={styles.info}></div>
        <div className={styles.wrapper}>
          {weekDays.map((day) => (
            <div className={styles.week__day}>{day}</div>
          ))}
          {[...Array(35)].map((_, i) => {
            return <div key={i} className={styles.days}></div>;
          })}
        </div>
      </div>
    </div>
  );
}
