/* eslint-disable react/prop-types */
import styles from "./Result.module.css";

export const Result = ({ result }) => {
  return (
    <div className={styles.resultContainer}>
      <p className={styles.result}>{result}</p>
    </div>
  );
};
