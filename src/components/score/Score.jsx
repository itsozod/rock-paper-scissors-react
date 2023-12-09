/* eslint-disable react/prop-types */
import styles from "./Score.module.css";
export const Score = ({ playerScore, computerScore }) => {
  return (
    <div className={styles.scoreContainer}>
      <p className={styles.playerScore}>{playerScore}</p>
      <p className={styles.computerScore}>{computerScore}</p>
    </div>
  );
};
