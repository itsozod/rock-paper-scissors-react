import styles from "./Info.module.css";
export const Info = () => {
  return (
    <div className={styles.info_container}>
      <h1 className={styles.info_title}>Man vs Computer</h1>
      <h2 className={styles.info_subtitle}>Choose your weapon</h2>
    </div>
  );
};
