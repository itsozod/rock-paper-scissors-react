import styles from "./Loader.module.css";
export const Loader = () => {
  return (
    <div className={styles.loaderContainer}>
      <img className={styles.loader} src="public/rps.gif" alt="Coffee" />
      <h3>Loading...</h3>
    </div>
  );
};
