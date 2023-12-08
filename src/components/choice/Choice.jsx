/* eslint-disable react/prop-types */
import styles from "./Choice.module.css";
export const Choice = ({ player, computer }) => {
  return (
    <div className={styles.choiceContainer}>
      <p className={styles.playerChoice}>Player: ?{player}</p>
      <p className={styles.computerChoice}>Computer: ?{computer}</p>
    </div>
  );
};
