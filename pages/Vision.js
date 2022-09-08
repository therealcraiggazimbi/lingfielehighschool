import Location from "../components/Location";
import Head from "next/head";
import styles from "../styles/About.module.css";
import Hero from "../components/Hero";
import Link from "next/link";
const Vision = () => {
  return (
    <>
      <Head>
        <title>Lingfield Advent Schools - Our Vision | About Us </title>
        <meta
          name="description"
          content="Welcome to Lingfield Advent High Day and Boarding School. We are an English Christian School based in Gweru. We are a registered Cambridge and ZIMSEC Examination Centre offering Ordinary Level &amp; Advanced Level Studies. We are driven by the desire to provide excellent services as we let our corporate social responsibility take precedence over anything else."
        />

        <meta
          name="keywords"
          content="Lingfield Advent School , Private School, Sabbath School, Christian School"
        />
        <link rel="icon" href="/favicon.ico" />
        {/* <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.1/css/all.min.css"
          integrity="sha512-KfkfwYDsLkIlwQp6LFnl8zNdLGxu9YAA1QvwINks4PhcElQSvqcyVLLD9aMhXd13uQjoXtEKNosOWaZqXgel0g=="
          crossorigin="anonymous"
          referrerpolicy="no-referrer"
        /> */}
      </Head>
      <Hero />
      <Location home="Home" page="About us" subpage="Vision" />

      <main className={styles.main}>
        <div>
          <h2 className={styles.heading2}>Vision</h2>

          <p>To be the leader in the provision of a first-class education</p>

          <h2 className={styles.heading2}>Mission Statement</h2>

          <p>
            To care for our students &amp; educate them in accordance with
            clearly stated Christian Values and bring out the best potential in
            every child &amp; guide them to take the next step in their lives
            with confidence. Conviction &amp; Consideration for others as well
            as to develop socially acceptable hard-working students through the
            teaching of good manners (Hunhu/Ubuntu).
          </p>

          <h2 className={styles.heading2}>Core Values</h2>

          <p>
            Our core values are to uphold and teach Christian values to
            students, teachers and non-teaching staff. Development of global
            citizens through high quality and internationally diverse learning
            environment.
          </p>

          <h2 className={styles.heading2}>Motto</h2>

          <p>We educate the hands , heart and the head</p>
        </div>

        <div>
          <div className={styles.subNav}>
            <div>
              <div>ABOUT US</div>
              <div>
                <hr />
              </div>
            </div>
            <Link href="./Welcome">
              <div>Welcome Message</div>
            </Link>

            <Link href="./Vision">
              <div className={styles.active}>Our Vision</div>
            </Link>

            <Link href="/ComingSoon">
              <div>Primary School</div>
            </Link>

            <Link href="/ComingSoon">
              <div>High School</div>
            </Link>

            <Link href="/ComingSoon">
              <div>Careers</div>
            </Link>
          </div>
        </div>
      </main>
    </>
  );
};

export default Vision;
