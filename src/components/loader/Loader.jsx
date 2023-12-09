import styles from "./Loader.module.css";
export const Loader = () => {
  return (
    <div className={styles.loaderContainer}>
      <img className={styles.loader} src="rps.gif" alt="Scissors" />
      <h3>Loading...</h3>
    </div>
  );
};
