import styles from "../styles/Stats.module.css";
const Stats = () => {
  return (
    <div className={styles.stats}>
      <div>
        <p>
          <span className={styles.counter}>349 +</span> <br />
          <span>
            PRIMARY SCHOOL <br />
            STUDENTS
          </span>
        </p>
      </div>
      <div>
        <p>
          <span className={styles.counter}>456 +</span> <br />
          <span>
            HIGH SCHOOL <br />
            STUDENTS
          </span>
        </p>
      </div>

      <div>
        <p>
          <span className={styles.counter}>20 +</span> <br />
          <span>
            SUBJECTS <br />
            COVERED
          </span>
        </p>
      </div>

      <div>
        <p>
          <span className={styles.counter}>1000 +</span> <br />
          <span>
            HAPPY <br />
            PARENTS
          </span>
        </p>
      </div>
      <div></div>
      <div></div>
    </div>
  );
};
export default Stats;
