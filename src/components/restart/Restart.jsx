import styles from "./Restart.module.css";
// eslint-disable-next-line react/prop-types
export const Restart = ({ onClick }) => {
  return (
    <div className={styles.restartContainer}>
      <button onClick={onClick} className={styles.restartBtn}>
        Restart
      </button>
    </div>
  );
};
