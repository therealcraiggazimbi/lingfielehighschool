import Location from "../components/Location";
import { useState } from "react";
import Head from "next/head";
import styles from "../styles/About.module.css";
import Hero from "../components/Hero";
import Link from "next/link";
import Image from "next/image";

const Admissions = () => {
  let sports = [
    "Birth Certificate",
    "Academic results from the previous term",
    "For transferes - Transfer letter/ Testimonial",
    "Parent's / Guardian's national identity card",
    "Full fess for tuition, levies & uniforms",
    "Parent's residential address & phone contacts.",
    "Valid medical aid card.",
    "Laptop / iPad",
    "Supplementary hardcopy textbooks for the curriculum being undertaken",
    "Sports equipment for sporting disciplines like tennis and hockey",
    "Bible & SDA Hymnal",
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
      <Location home="Home" page="Admissions" subpage="Applications" />

      <main className={styles.main}>
        <div>
          <h2 className={styles.heading2}>
            Application Process for High School Students
          </h2>

          <p>
            Form 1 intake: The process begins in July of the preceding year.A
            prescribed entrance fee is paid followed by the writing of the
            entrance tests that include English Language, General Science &amp;
            Mathematics. The papers are 30 minutes long with 15-minute breaks in
            between. Test results are announced within the week and successful
            candidates are announced.
          </p>

          <p style={{ marginBottom: "20px" }}>
            A deposit administration fee is then paid as a guarantee for the
            form 1 place the following year. Form 2, 3, &amp; 5 students
            transferring from other schools should bring along a valid transfer
            letter/testimonial &amp; academic results from the previous school
            term supported by the payment of the full school fees. No transfers
            are accepted in form 4 &amp; upper 6 which are examination classes.
          </p>

          <div className={styles.mobile}>
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
                          src="/svg/cert.svg"
                          alt="Lingfield Advent School Tennis"
                          width={250}
                          height={250}
                        />
                      );

                      break;

                    case 1:
                      return (
                        <Image
                          src="/svg/certs.svg"
                          alt="Lingfield Advent School Soccer"
                          width={250}
                          height={250}
                        />
                      );
                      break;

                    case 2:
                      return (
                        <Image
                          src="/svg/cert.svg"
                          alt="Lingfield Advent School Soccer"
                          width={250}
                          height={250}
                        />
                      );
                      break;

                    case 3:
                      return (
                        <Image
                          src="/svg/id.svg"
                          alt="Lingfield Advent School Soccer"
                          width={250}
                          height={250}
                        />
                      );
                      break;

                    case 4:
                      return (
                        <Image
                          src="/svg/cash.svg"
                          alt="Lingfield Advent School Soccer"
                          width={220}
                          height={250}
                        />
                      );
                      break;

                    case 5:
                      return (
                        <Image
                          src="/svg/address.svg"
                          alt="Lingfield Advent School "
                          width={250}
                          height={250}
                        />
                      );
                      break;

                    case 6:
                      return (
                        <Image
                          src="/svg/meds.svg"
                          alt="Lingfield Advent School Soccer"
                          width={250}
                          height={250}
                        />
                      );
                      break;

                    case 7:
                      return (
                        <Image
                          src="/svg/laptop.svg"
                          alt="Lingfield Advent School Soccer"
                          width={250}
                          height={250}
                        />
                      );
                      break;

                    case 8:
                      return (
                        <Image
                          src="/svg/books.svg"
                          alt="Lingfield Advent School Soccer"
                          width={250}
                          height={250}
                        />
                      );
                      break;

                    case 9:
                      return (
                        <Image
                          src="/svg/sports.svg"
                          alt="Lingfield Advent School Soccer"
                          width={250}
                          height={250}
                        />
                      );
                      break;
                    case 10:
                      return (
                        <Image
                          src="/svg/bible.svg"
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
          </div>

          <div className={styles.btnContainer}>
            <a
              href="https://docs.google.com/forms/d/e/1FAIpQLSfEc2SjfZNHIkccTHfh4V7OH6NNI_ft_8De0_djlsIjMOa_ug/viewform?usp=pp_url"
              target="_blank"
              rel="noreferrer"
              className={styles.btnPrimary}
            >
              Apply Now
            </a>
          </div>
        </div>

        <div>
          <div className={styles.subNav}>
            <div>
              <div>ADMISSIONS</div>
              <div>
                <hr />
              </div>
            </div>

            <Link href="/Admissions">
              <div className={styles.active}>Applications</div>
            </Link>

            <Link href="/Requirements">
              <div>Requirements</div>
            </Link>
            <Link href="/ComingSoon">
              <div>ECD Entry</div>
            </Link>

            <Link href="/ComingSoon">
              <div>Primary School Entry</div>
            </Link>
            <Link href="/ComingSoon">
              <div>Form 1 - 3 Entry</div>
            </Link>
            <Link href="/ComingSoon">
              <div>Lower Six Entry</div>
            </Link>
          </div>
        </div>
      </main>
    </>
  );
};

export default Admissions;
