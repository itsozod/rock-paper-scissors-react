/* eslint-disable react/prop-types */
import styles from "./Game.module.css";
export const Game = ({ text, onClick, disabled }) => {
  return (
    <div className={styles.sign}>
      <button disabled={disabled} onClick={onClick} className={styles.btn}>
        {text}
      </button>
    </div>
  );
};
