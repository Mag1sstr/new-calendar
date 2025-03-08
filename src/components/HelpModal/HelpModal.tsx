import { MouseEvent } from "react";
import styles from "./HelpModal.module.css";

interface IProps {
  openHelp: boolean;
  setOpenHelp: (b: boolean) => void;
}

export default function HelpModal({ openHelp, setOpenHelp }: IProps) {
  function closeModal() {
    setOpenHelp(false);
  }
  function cancelEventBubbling(event: MouseEvent<HTMLDivElement>) {
    event.stopPropagation();
  }
  return (
    <div
      onClick={closeModal}
      className={`${styles.modal} ${openHelp && styles.open}`}
    >
      <div onClick={cancelEventBubbling} className={styles.inner}>
        <h3 className={styles.title}>Краткая инструкция</h3>
      </div>
    </div>
  );
}
