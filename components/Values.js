import Image from "next/image";
import styles from "../styles/Values.module.css";
const Values = () => {
  return (
    <div className={styles.Values}>
      <div className={styles.valueschildone}>
        <div className={styles.valueschildoneinnerone}>
          <h3>Academic Excellence</h3>
          <p>
            High Expectations deliver <br /> outstanding results
          </p>
        </div>

        <div className={styles.valueschildoneinnertwo}>
          <h3>Leader of Character</h3>
          <p>
            Mission challenges all to be <br /> peacemakers, changemakers.
          </p>
        </div>
      </div>

      <div className={styles.valueschildtwo}>
        <Image
          src="/img/logo.png"
          alt="Lingfield Advent School Soccer"
          width={250}
          height={250}
        />
      </div>

      <div className={styles.valueschildthree}>
        <div className={styles.valueschildthreeinnerone}>
          <h3>Spiritual Growth</h3>
          <p>
            Inclusive community fosters <br /> values &amp; guides <br /> faith
            formation.
          </p>
        </div>

        <div className={styles.valueschildthreeinnertwo}>
          <h3>
            Physical &amp; Social-Emotional <br /> Wellness
          </h3>
          <p>
            Vibrant community of high <br /> engaged students.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Values;
