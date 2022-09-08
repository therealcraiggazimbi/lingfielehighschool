import { useState } from "react";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/About.module.css";
import Hero from "../components/Hero";
import Location from "../components/Location";
import Link from "next/link";

const Sports = () => {
  let sports = [
    "Tennis",
    "Soccer",
    "Cricket",
    "VolleyBall",
    "NetBall",
    "Basketball",
    "Hockey",
    "HandBall",
  ];

  const increment = () => {
    setIndex(index + 1);
    if (index >= sports.length - 1) {
      setIndex(0);
    }
  };

  const decrement = () => {
    setIndex(index - 1);
    if (index <= sports.length - 1) {
      setIndex(0);
    }
  };

  const [index, setIndex] = useState(0);

  return (
    <>
      <Head>
        <title>Lingfield Advent Schools - Sports | Academics </title>
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
      <Location home="Home" page="Academics" subpage="Sports" />

      <main className={styles.main}>
        <div>
          <h2 className={styles.heading2}>Sports</h2>
          <div className={styles.carousel}>
            <div>
              <div className={styles.controlls} onClick={decrement}>
                <i className="fa-solid fa-angle-left"></i>
              </div>
            </div>
            <div>
              <h1>{sports[index]}</h1>
              {(() => {
                switch (index) {
                  case 0:
                    return (
                      <Image
                        src="/svg/tennis.svg"
                        alt="Lingfield Advent School Tennis"
                        width={250}
                        height={250}
                      />
                    );

                    break;

                  case 1:
                    return (
                      <Image
                        src="/svg/soccer.svg"
                        alt="Lingfield Advent School Soccer"
                        width={250}
                        height={250}
                      />
                    );
                    break;

                  case 2:
                    return (
                      <Image
                        src="/img/cricket.jpg"
                        alt="Lingfield Advent School Soccer"
                        width={250}
                        height={250}
                      />
                    );
                    break;

                  case 3:
                    return (
                      <Image
                        src="/svg/volleyball.svg"
                        alt="Lingfield Advent School Soccer"
                        width={250}
                        height={250}
                      />
                    );
                    break;

                  case 4:
                    return (
                      <Image
                        src="/img/netball.jpg"
                        alt="Lingfield Advent School Soccer"
                        width={220}
                        height={250}
                      />
                    );
                    break;

                  case 5:
                    return (
                      <Image
                        src="/svg/basketball.svg"
                        alt="Lingfield Advent School Soccer"
                        width={250}
                        height={250}
                      />
                    );
                    break;

                  case 6:
                    return (
                      <Image
                        src="/svg/hockey.svg"
                        alt="Lingfield Advent School Soccer"
                        width={250}
                        height={250}
                      />
                    );
                    break;

                  case 7:
                    return (
                      <Image
                        src="/svg/hand.svg"
                        alt="Lingfield Advent School Soccer"
                        width={250}
                        height={250}
                      />
                    );
                    break;
                }
              })()}
            </div>
            <div>
              <div className={styles.controlls} onClick={increment}>
                <i className="fa-solid fa-angle-right"></i>
              </div>
            </div>
          </div>

          <h2 className={styles.heading2}>What Can A Student Expect? </h2>
          <p>
            <ul>
              <li>Participation in at least one or two clubs</li>
              <li>Participation in at least two sporting disciplines</li>
              <li>
                Competitive sporting competitions at school, inter-school,
                provincial, national &amp; international levels
              </li>
              <li>
                Merit awards for outstanding performance in sporting &amp; club
                activities
              </li>

              <li>
                Professional coaching from mature &amp; experienced certified
                trainers.
              </li>
              <li>State of the art sporting facilities &amp; equipment</li>
            </ul>
          </p>
        </div>
        <div>
          <div className={styles.subNav}>
            <div>
              <div>ACADEMICS</div>
              <div>
                <hr />
              </div>
            </div>
            <Link href="./LearningPhilosophy">
              <div>LearningPhilosophy</div>
            </Link>

            <Link href="./Curriculum">
              <div>Curriculum</div>
            </Link>

            <Link href="./Sports">
              <div className={styles.active}>Sports</div>
            </Link>
            <Link href="./Clubs">
              <div>Clubs</div>
            </Link>
          </div>
        </div>
      </main>
    </>
  );
};

export default Sports;
