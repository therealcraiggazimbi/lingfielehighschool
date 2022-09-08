import Location from "../components/Location";
import Head from "next/head";
import styles from "../styles/About.module.css";
import Hero from "../components/Hero";
import Link from "next/link";
const Curriculum = () => {
  return (
    <>
      <Hero />
      <Location home="Home" page="Academics" subpage="Curriculum" />

      <main className={styles.main}>
        <div>
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
        <div>
          <div className={styles.subNav}>
            <div>
              <div>ACADEMICS</div>
              <div>
                <hr />
              </div>
            </div>
            <Link href="/LearningPhilosophy">
              <div>Learning Philosophy</div>
            </Link>

            <Link href="/Curriculum">
              <div className={styles.active}>Curriculum</div>
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

export default Curriculum;
