import styles from "../styles/BlogCard.module.css";
import Link from "next/link";

const BlogCard = ({
  title,
  author,
  coverPhoto,
  datePublished,
  slug,
  content,
}) => {
  const previewData = content.substr(0, 150) + " [...]";
  return (
    <Link href={"/news/" + slug}>
      <div className={styles.card}>
        <div className={styles.cardheader}>
          <img src={coverPhoto.url} alt="Lingfield Advent Schools" />
        </div>
        <div className={styles.cardbody}>
          <h2>{title}</h2>

          <div className={styles.authtext}>
            <div>
              <i
                className="fa-solid fa-user"
                style={{ paddingRight: "5px", color: "#437f97" }}
              ></i>
              <h4>Published By {author.name}</h4>
            </div>
            <div>
              <i
                className="fa-solid fa-calendar-days"
                style={{ paddingRight: "5px", color: "#437f97" }}
              ></i>
              <h4 className={styles.date}>{datePublished}</h4>
            </div>
          </div>
          <p dangerouslySetInnerHTML={{ __html: previewData }}></p>
        </div>
      </div>
    </Link>
  );
};

export default BlogCard;
