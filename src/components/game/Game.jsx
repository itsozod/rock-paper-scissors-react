/* eslint-disable react/prop-types */
import styles from "./Game.module.css";
export const Game = ({ text, onClick }) => {
  return (
    <div className={styles.sign}>
      <button onClick={onClick} className={styles.btn}>{text}</button>
    </div>
  );
};
