import styles from "../styles/Intro.module.css";
import Link from "next/link";
import Image from "next/image";

const Intro = () => {
  let str =
    "Welcome to Lingfield Advent Day and Boarding, Primary and High School. Lingfield Advent Schools is an English Christian School based in Gweru. It is a registered Cambridge and Zimsec centre School offering Day and Boarding School enrollments from ECD A – Grade 7 and High School from Form 0ne to Form Six. We are driven by the desire to provide excellent services as we let our co-operate social responsibility takes precedence over anything else. Our core values and mission statement explicitly dictate our drive toward our pursuit of excellence. We are offering a well-researched curriculum which includes French, Music, Swimming and Aerobics. We also offer short courses like Basic medical Aid Training, secretarial and driving courses.";
  str = str.substring(0, 230);
  return (
    <div className={styles.Intro} id="intro">
      <div className={styles.Introchildone}>
        <Image
          src="/img/Intro.png"
          alt="Lingfield Advent School Soccer"
          width={400}
          height={550}
        />
      </div>
      <div className={styles.Introchildtwo}>
        <h2>
          WELCOME TO <br /> LINGFIELD ADVENT SCHOOLS!
        </h2>

        <p>{str} ...</p>

        <div className={styles.Introbtns}>
          <Link href="/Welcome">
            <a className={styles.btnPrimary}>LEARN MORE</a>
          </Link>

          <a
            href="https://docs.google.com/forms/d/e/1FAIpQLSfEc2SjfZNHIkccTHfh4V7OH6NNI_ft_8De0_djlsIjMOa_ug/viewform?usp=pp_url"
            target="_blank"
            rel="noreferrer"
            className={styles.btnSecondary}
          >
            ENROLL TODAY
          </a>
        </div>
      </div>
    </div>
  );
};

export default Intro;
