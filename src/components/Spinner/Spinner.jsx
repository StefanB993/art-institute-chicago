import styles from "./Spinner.module.scss";
function Spinner() {
  return (
    <div className={styles.loader}>
      <span className={styles.loader__item}></span>
    </div>
  );
}

export default Spinner;
