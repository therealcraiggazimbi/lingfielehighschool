import styles from "../styles/Navigation.module.css";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

const Navbar = () => {
  const [menu, setMenu] = useState();
  const [drop, setdrop] = useState();
  const [mobiledrop, setmobiledrop] = useState(0);

  const openMobile = () => {
    if (mobiledrop == 1) {
      setmobiledrop((mobiledrop = 0));
    } else {
      setmobiledrop((mobiledrop = 1));
    }
  };

  const closeMobile = () => {
    setmobiledrop((mobiledrop = 0));
  };
  const close = () => {
    setdrop((drop = 0));
  };

  const dropZero = () => {
    setMenu((menu = 0));
    setdrop((drop = 1));
  };

  const dropOne = () => {
    setMenu((menu = 1));
    setdrop((drop = 1));
  };

  const dropTwo = () => {
    setMenu((menu = 2));
    setdrop((drop = 1));
  };

  return (
    <>
      <div className={styles.navigation}>
        <Link href="/">
          <Image
            src="/img/navlogo.png"
            alt="Lingfield Advent School Soccer"
            width={248}
            height={70}
            onClick={close}
          />
        </Link>

        <ul>
          <li onClick={dropZero}>ABOUT US</li>
          <li onClick={dropOne}>ACADEMICS</li>
          <li onClick={dropTwo}>ADMISSIONS</li>
          <Link href="/News">
            <li onClick={close}>NEWS &amp; EVENTS</li>
          </Link>

          <Link href="/Contact">
            <li onClick={close}>CONTACT US</li>
          </Link>
        </ul>
        <li className={styles.mobile} onClick={openMobile}>
          <i className="fa-solid fa-bars"></i>
        </li>
      </div>

      {(() => {
        switch (drop) {
          case 1:
            return (
              <div className={styles.dropdown}>
                {(() => {
                  switch (menu) {
                    case 0:
                      return (
                        <ul>
                          <Link href="/Welcome">
                            <li onClick={close}>Welcome Message</li>
                          </Link>

                          <Link href="/Vision">
                            <li onClick={close}>Our Vision</li>
                          </Link>

                          <Link href="/ComingSoon">
                            <li onClick={close}>Primary School</li>
                          </Link>

                          <Link href="/ComingSoon">
                            <li onClick={close}>High School</li>
                          </Link>
                          <Link href="/ComingSoon">
                            <li onClick={close}>Careers</li>
                          </Link>
                        </ul>
                      );

                      break;

                    case 1:
                      return (
                        <ul>
                          <Link href="/LearningPhilosophy">
                            <li onClick={close}>Learning Philosophy</li>
                          </Link>

                          <Link href="/Curriculum">
                            <li onClick={close}>Curriculum</li>
                          </Link>

                          <Link href="/Sports">
                            <li onClick={close}>Sports</li>
                          </Link>
                          <Link href="/Clubs">
                            <li onClick={close}>Clubs</li>
                          </Link>
                        </ul>
                      );
                      break;

                    case 2:
                      return (
                        <ul>
                          <Link href="/Admissions">
                            <li onClick={close}>Applications</li>
                          </Link>
                          <Link href="/Requirements">
                            <li onClick={close}>Requirements</li>
                          </Link>

                          <Link href="/ComingSoon">
                            <li onClick={close}>ECD Entry</li>
                          </Link>
                          <Link href="/ComingSoon">
                            <li onClick={close}>Primary School Entry</li>
                          </Link>

                          <Link href="/ComingSoon">
                            <li onClick={close}>Form 1 - 3 Entry</li>
                          </Link>

                          <Link href="/ComingSoon">
                            <li onClick={close}>Lower Six Entry</li>
                          </Link>
                        </ul>
                      );
                      break;
                  }
                })()}

                <div>
                  <Image
                    src="/svg/nav.svg"
                    alt="Lingfield Advent School Soccer"
                    width={200}
                    height={200}
                  />
                  <hr style={{ color: "#fd151b" }} />
                  <br />
                  <hr style={{ color: "#437f97" }} />
                  <br />
                  <hr style={{ color: "#fd151b" }} />
                </div>
              </div>
            );

            break;

          default:
            return <div></div>;
            break;
        }
      })()}
      <div className={styles.ribbon}></div>
      {(() => {
        switch (mobiledrop) {
          case 1:
            return (
              <div className={styles.mobileDrop}>
                <ul>
                  <Link href="/Welcome">
                    <li onClick={closeMobile}>ABOUT US</li>
                  </Link>

                  <Link href="/LearningPhilosophy">
                    <li onClick={closeMobile}>ACADEMICS</li>
                  </Link>

                  <Link href="/Admissions">
                    <li onClick={closeMobile}>ADMISSIONS</li>
                  </Link>

                  <Link href="/News">
                    <li onClick={closeMobile}>NEWS &amp; EVENTS</li>
                  </Link>

                  <Link href="/Contact">
                    <li onClick={closeMobile}>CONTACT US</li>
                  </Link>
                </ul>
              </div>
            );
            break;

          default:
            break;
        }
      })()}
    </>
  );
};

export default Navbar;
