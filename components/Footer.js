import styles from "../styles/Footer.module.css";
import Link from "next/link";
import Image from "next/image";

const Footer = () => {
  return (
    <div className={styles.footer}>
      <div className={styles.footerInner}>
        <div className={styles.footerchildone}>
          <h2>
            LINGFIELD <br />
            <span className={styles.footersubheader}>ADVENT SCHOOLS</span>
          </h2>
        </div>
        <div className={styles.footerchildtwo}>
          <h4>GET IN TOUCH</h4>
          <ul>
            <li>
              <h4>Telephone: </h4>
              <a href="tel:263712000894">263 (0) 712000894</a>
            </li>

            <li>
              <h4>Enquiries: </h4>
              <a href="mailto:info@lingfieldadventschools.org">
                info@lingfieldadventschools.org
              </a>
            </li>

            <li>
              <h4>Address: </h4>
              No 22 Lingfield Road, Gweru <br />
              Zimbabwe.
            </li>

            <li>
              <a
                className={styles.directions}
                href="https://goo.gl/maps/yivdzFamAv1ZSe9v6"
                target="_blank"
                rel="noreferrer"
              >
                <div>Get directions</div>

                <div>
                  <Image
                    src="/img/location.png"
                    alt="Lingfield Advent Schools Location"
                    width={15}
                    height={15}
                  />
                </div>
              </a>
            </li>
          </ul>
        </div>
        <div className={styles.footerchildthree}>
          <h4>USEFUL LINKS</h4>
          <ul>
            <Link href="/Admissions">
              <li className={styles.footerlink}>Applications</li>
            </Link>

            <Link href="/News">
              <li className={styles.footerlink}>News &amp; Events</li>
            </Link>

            <Link href="/Policies">
              <li className={styles.footerlink}>School Policies</li>
            </Link>
            <li>
              <h4>CONNECT &amp; SHARE </h4>

              <li className={styles.footersocialicons}>
                <a
                  target="_blank"
                  rel="noreferrer"
                  href="https://www.facebook.com/LingfieldAdventSchools"
                >
                  <i
                    className="fa-brands fa-facebook"
                    style={{ color: "white" }}
                  ></i>{" "}
                </a>
                <a
                  target="_blank"
                  rel="noreferrer"
                  href="https://www.instagram.com/lingfieldadventschools/"
                >
                  {" "}
                  <i
                    className="fa-brands fa-instagram"
                    style={{ color: "white" }}
                  ></i>
                </a>
                <a href="https://www.youtube.com/channel/UCTjUjCCkAHMI7rOonVrzATA">
                  <i
                    className="fa-brands fa-youtube"
                    style={{ color: "white" }}
                  ></i>
                </a>
                <a href="https://www.tiktok.com/@lingfieldadventschools">
                  <i
                    className="fa-brands fa-tiktok"
                    style={{ color: "white" }}
                  ></i>
                </a>
              </li>
            </li>
          </ul>
        </div>
        <div className={styles.footerchildfour}></div>

        <div className={styles.footerchildfive}>
          <span> &copy; Lingfield Advent Schools 2022</span> <br />
          <span>
            Designed &amp; Developed by
            <a
              target="_blank"
              rel="noreferrer"
              href="https://www.fructox.com"
              style={{ color: "white" }}
            >
              {" "}
              Fructox Inc.
            </a>
          </span>
        </div>
        <div className={styles.footerchildsix}>
          <ul>
            <Link href="/Policies">
              <li>Privacy</li>
            </Link>
            <Link href="/Policies">
              <li>Cookie Policy</li>
            </Link>
            <Link href="/Policies">
              <li>School Policy</li>
            </Link>
          </ul>
        </div>
        <div className={styles.footerchildseven}>
          <ul>
            <Link href="/Policies">
              <li>Accessibility</li>
            </Link>

            <Link href="/Policies">
              <li>Sitemap</li>
            </Link>
          </ul>
        </div>
        <div className={styles.footerchildeight}>
          <a href="#nav">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width={120}
              height={260}
              viewBox="0 0 176.51 228.212"
            >
              <g
                id="Group_25"
                data-name="Group 25"
                transform="translate(-1713 -7956.788)"
              >
                <rect
                  id="Rectangle_31"
                  data-name="Rectangle 31"
                  width={85}
                  height={38}
                  rx="10"
                  transform="translate(1713 8046.125) rotate(-47)"
                  fill="#fff"
                />
                <rect
                  id="Rectangle_32"
                  data-name="Rectangle 32"
                  width={36}
                  height={161}
                  rx="9"
                  transform="translate(1783.381 8024)"
                  fill="#fff"
                />
                <rect
                  id="Rectangle_33"
                  data-name="Rectangle 33"
                  width={119}
                  height={38}
                  rx={10}
                  transform="translate(1862.64 8067.804) rotate(-135)"
                  fill="#fff"
                />
              </g>
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
