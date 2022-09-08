import styles from "../styles/Coming.module.css";
const ComingSoon = () => {
  return (
    <div className={styles.coming}>
      <div className={styles.ghost}>
        <div className={styles.face}>
          <div className={styles.eyes}>
            <span></span>
            <span></span>
          </div>
          <div className={styles.mouth}></div>
        </div>

        <div className={styles.hands}>
          <span></span>
          <span></span>
        </div>

        <div className={styles.feet}>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </div>
  );
};

export default ComingSoon;
