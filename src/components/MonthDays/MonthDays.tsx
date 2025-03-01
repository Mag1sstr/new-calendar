import styles from "./MonthDays.module.css";

interface IProps {
  daysCount: number;
  currentDate: Date;
}

export default function MonthDays({ daysCount, currentDate }: IProps) {
  return (
    <div className={styles.month__days}>
      {[...Array(daysCount)].map((_, i) => {
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
  );
}
