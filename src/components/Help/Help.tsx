import styles from "./Help.module.css";
import helpImage from "../../images/help.png";

interface IProps {
  setOpenHelp: (b: boolean) => void;
}

export default function Help({ setOpenHelp }: IProps) {
  function handleClick() {
    setOpenHelp(true);
  }

  return (
    <img
      onClick={handleClick}
      className={styles.image}
      src={helpImage}
      alt="Help"
    />
  );
}
