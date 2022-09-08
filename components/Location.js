import styles from "../styles/Location.module.css";
import Head from "next/head";
import Link from "next/link";
const Location = ({ home, page, subpage }) => {
  return (
    <>
      <Head>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
        {/* <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.1/css/all.min.css"
          integrity="sha512-KfkfwYDsLkIlwQp6LFnl8zNdLGxu9YAA1QvwINks4PhcElQSvqcyVLLD9aMhXd13uQjoXtEKNosOWaZqXgel0g=="
          crossorigin="anonymous"
          referrerpolicy="no-referrer"
        /> */}
      </Head>
      <div className={styles.Location}>
        <div>
          {home}{" "}
          <i
            className="fa-solid fa-angle-right"
            style={{ paddingTop: "2px", color: "#707070" }}
          ></i>
        </div>

        <div>
          <div>
            {" "}
            {page}{" "}
            <i
              className="fa-solid fa-angle-right"
              style={{ paddingTop: "2px", color: "#707070" }}
            ></i>
          </div>
        </div>
        <div className={styles.active}> {subpage}</div>
      </div>
    </>
  );
};

export default Location;
