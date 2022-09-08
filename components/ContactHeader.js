import Image from "next/image";
import styles from "../styles/Contact.module.css";
const ContactHeader = () => {
  return (
    <div className={styles.contactheader}>
      <div className={styles.contactheaderchildone}>
        <Image
          src="/img/contact.png"
          alt="Vercel Logo"
          width={300}
          height={430}
        />
      </div>
      <div className={styles.contactheaderchildtwo}>
        <div>
          <ul>
            <li>
              <h5>TELEPHONE</h5>
              <a href="tel:263712000894">263 (0) 712000894</a>
            </li>

            <li>
              <h5>EMAIL </h5>
              <a href="mailto:info@lingfieldadventschools.org">
                info@lingfieldadventschools.org
              </a>
            </li>
          </ul>
        </div>
        <div>
          <ul>
            <li>
              <h5>ADDRESS </h5>
              No 22 Lingfield Road, Gweru <br />
              Zimbabwe.
            </li>
          </ul>
        </div>
        <div className={styles.contactheaderchildtwoinnerthree}>
          <ul>
            <li>
              <h5>
                FOLLOW US ON <br /> SOCIAL MEDIA{" "}
              </h5>

              <li className={styles.footersocialicons}>
                <a
                  target="_blank"
                  rel="noreferrer"
                  href="https://www.facebook.com/LingfieldAdventSchools"
                >
                  <i className="fa-brands fa-facebook"></i>{" "}
                </a>
                <a
                  target="_blank"
                  rel="noreferrer"
                  href="https://www.instagram.com/lingfieldadventschools/"
                >
                  {" "}
                  <i className="fa-brands fa-instagram"></i>
                </a>
                <a
                  target="_blank"
                  rel="noreferrer"
                  href="https://www.youtube.com/channel/UCTjUjCCkAHMI7rOonVrzATA"
                >
                  <i className="fa-brands fa-youtube"></i>
                </a>
                <a
                  target="_blank"
                  rel="noreferrer"
                  href="https://www.tiktok.com/@lingfieldadventschools"
                >
                  <i className="fa-brands fa-tiktok"></i>
                </a>
              </li>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ContactHeader;
