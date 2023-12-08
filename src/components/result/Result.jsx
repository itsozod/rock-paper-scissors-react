/* eslint-disable react/prop-types */
import styles from "./Result.module.css";

export const Result = ({ result }) => {
  return (
    <div className={styles.resultContainer}>
      <p className={styles.result}>Result: ?{result}</p>
    </div>
  );
};
