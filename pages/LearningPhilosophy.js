import Location from "../components/Location";
import { useState } from "react";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/About.module.css";
import Hero from "../components/Hero";
import Link from "next/link";
const LearningPhilosophy = () => {
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
      <Hero />
      <Location home="Home" page="Academics" subpage="LearningPhilosophy" />

      <main className={styles.main}>
        <div>
          <h2 className={styles.heading2}>Spiritual Life (Church)</h2>

          <p>
            Lingfield Advent High School offers both academic &amp; spiritual
            education. We have a resident Chaplin from the Seventh Day Adventist
            Church. Students do Progressive classes once every week. Students
            are inducted into various church clubs based on their age
            (Pathfinders, Youths, Senior Youths, Ambassadors &amp; Master
            Guides). Additionally, church services are done three-time weekly.
            Wednesday &amp; Friday evening prayer meetings from 18.00hrs to
            18.30hrs Saturday is Sabbath Church Day &amp; church attendance is
            from 09.00hrs to 12.00 noon &amp; 14.00hrs to 16.30hrs.
          </p>

          <h2 className={styles.heading2}>Calender &amp; Terms</h2>

          <p>
            Our school calendar terms from January to December with three terms.
            We have one exeat weekend in the middle of each school term coupled
            with the end of month parents' visitations.
          </p>

          <h2 className={styles.heading2}>
            Form 1 - 4 Students - What Parents Should Expect
          </h2>
          <p>
            <ul>
              <li>
                Proficiency in the English Language - Lingfield is an English
                Speaking environment.
              </li>
              <li>Proficiency in French,as an additional language.</li>
              <li>
                Students are allowed to pursue studies in indigenous languages.
              </li>
              <li>
                High quality educational standards under the tutorship of mature
                &amp; experienced teachers.
              </li>

              <li>Proficiency in the usage of digital technology systems.</li>
              <li>
                Exposure to short-term courses like Basic First Aid, Secretarial
                Studies &amp; Motor Vehicle Driving.
              </li>

              <li>
                Modern library facilities with a wide range of Cambridge &amp;
                ZIMSEC refrence books.
              </li>

              <li>
                State of the art combined science laboratory fully equipped with
                relevant apparatus &amp; chemicals.
              </li>

              <li>
                State of the art sporting facilities covering a wide range of
                sporting disciplines.
              </li>
            </ul>
          </p>

          <div className={styles.mobile}>
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
              <div className={styles.controlls} onClick={increment}>
                <i className="fa-solid fa-angle-right"></i>
              </div>
            </div>

            <h2 className={styles.heading2}>Form 1 &amp; 2</h2>

            <p>
              <ul>
                <li>Combined Sciences</li>
                <li>Geography</li>
                <li>Mathematics</li>
                <li>English Language</li>
                <li>History</li>
                <li>Technical Graphics</li>
                <li>French</li>
                <li>Geography</li>
                <li>Accounts</li>
                <li>Computer Studies</li>
                <li>Agricultural Technology</li>
                <li>Building Technology</li>
                <li>Shona / Ndebele</li>
              </ul>
            </p>

            <h2 className={styles.heading2}>Form 3 &amp; 4</h2>

            <p>
              <ul>
                <li>Combined Sciences</li>
                <li>Geography</li>
                <li>Mathematics</li>
                <li>English Language</li>
                <li>History</li>
                <li>Technical Graphics</li>
                <li>French</li>
                <li>Geography</li>
                <li>Accounts</li>
                <li>Computer Studies</li>
                <li>Agricultural Technology</li>
                <li>Building Technology</li>
                <li>Shona / Ndebele</li>
                <li>Biology</li>
                <li>Physics</li>
                <li>Chemistry</li>
              </ul>
            </p>

            <h2 className={styles.heading2}>Lower 6</h2>
            <p>
              <h2>Commercials</h2>
              <ul>
                <li>Accounts</li>
                <li>Economics</li>
                <li>Business Studies</li>

                <h2>Arts</h2>
                <li>History</li>

                <li>Divinity</li>
                <li>English Literature</li>

                <li>Geography</li>

                <h2>Sciences</h2>

                <li>Biology.</li>

                <li>Chemistry</li>
                <li>Physics</li>
                <li>Mathematics</li>
              </ul>
            </p>

            <h2>Upper 6</h2>
            <p>
              <h2>Commercials</h2>
              <ul>
                <li>Accounts</li>
                <li>Economics</li>
                <li>Business Studies</li>
              </ul>

              <h2>Arts</h2>
              <ul>
                <li>History</li>
                <li>Divinity</li>
                <li>English Literature</li>
                <li>Geography</li>
              </ul>
            </p>
          </div>
        </div>
        <div>
          <div className={styles.subNav}>
            <div>
              <div>ACADEMICS</div>
              <div>
                <hr />
              </div>
            </div>
            <Link href="/LearningPhilosophy">
              <div className={styles.active}>Learning Philosophy</div>
            </Link>

            <Link href="/Curriculum">
              <div>Curriculum</div>
            </Link>

            <Link href="/Sports">
              <div>Sports</div>
            </Link>
            <Link href="/Clubs">
              <div>Clubs</div>
            </Link>
          </div>
        </div>
      </main>
    </>
  );
};

export default LearningPhilosophy;
