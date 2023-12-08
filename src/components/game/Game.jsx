/* eslint-disable react/prop-types */
import styles from "./Game.module.css";
export const Game = ({ text }) => {
  return (
    <div className={styles.sign}>
      <button className={styles.btn}>{text}</button>
    </div>
  );
};
