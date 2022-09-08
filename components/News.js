import styles from "../styles/NewsSection.module.css";
import Link from "next/link";
const News = () => {
  return (
    <div className={styles.news}>
      <div className={styles.newschildone}>
        <div>
          <h2>NEWS &amp; EVENTS</h2>
        </div>

        <div>
          <hr />
        </div>
      </div>

      <div className={styles.newschildtwo}>
        <div>
          <div className={styles.card}>
            <div className={styles.cardheader}></div>
            <div className={styles.cardbody}>
              <h3>
                Truly As Fabulous as Aladdin's Ring It Was! - (Mukudzeyi Gumbo)
              </h3>
              <p>
                It was a day when we the children of the rich lands of Africa,
                which our ancestors fought for; joined together as one in [...]
              </p>

              <div className={styles.moreBtn}>
                <Link href="/news/truly-as-fabulous-as-aladdins-ring-it-was">
                  <a className={styles.btnPrimary}>Read More</a>
                </Link>
              </div>
            </div>
          </div>

          <div className={styles.newscontrollers}>
            <div className={styles.controllsbtn}>
              <Link href="/News">
                <a className={styles.btnPrimary}>VIEW ALL NEWS ARTICLES</a>
              </Link>
            </div>
            {/* <div className={styles.controllsbtns}>
              <div className={styles.controlls}>
                <i className="fa-solid fa-angle-left"></i>
              </div>
              <div className={styles.controlls}>
                <i className="fa-solid fa-angle-right"></i>
              </div>
            </div> */}
          </div>
        </div>
        <div className="events-list">
          <div className={styles.newscontrollers}>
            <div className={styles.controllsbtn}>
              <Link href="/News">
                <a className={styles.btnSecondary}>VIEW ALL UPCOMING EVENTS</a>
              </Link>
            </div>
            {/* <div className={styles.controllsbtns}>
              <div className={styles.controlls}>
                <i className="fa-solid fa-angle-left"></i>
              </div>
              <div className={styles.controlls}>
                <i className="fa-solid fa-angle-right"></i>
              </div>
            </div> */}
          </div>

          <div className={styles.eventslistchildtwo}>
            <div className={styles.eventcard}>
              <div className={styles.date}>
                July <br /> 04
              </div>

              <div className={styles.details}>
                <h4> Parents Consultation Day</h4>
              </div>

              {/* <div className={styles.detailsBtn}>
                <a className={styles.btnExtra}>View Details</a>
              </div> */}
            </div>

            <div className={styles.eventcard}>
              <div className={styles.date}>
                July <br /> 29
              </div>

              <div className={styles.details}>
                <h4>Form 1 2023 Entrance Test</h4>
              </div>

              {/* <div className={styles.detailsBtn}>
                <a className={styles.btnExtra}>View Details</a>
              </div> */}
            </div>

            <div className={styles.eventcard}>
              <div className={styles.date}>
                August <br /> 08
              </div>

              <div className={styles.details}>
                <h4>Educational Tours </h4>
              </div>

              {/* <div className={styles.detailsBtn}>
                <a className={styles.btnExtra}>View Details</a>
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default News;
