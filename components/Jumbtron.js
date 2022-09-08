import styles from "../styles/Jumbtron.module.css";
const Jumbtron = () => {
  return (
    <div className={styles.Hero}>
      <div className={styles.Herochildone}>
        <h1>
          Lingfield Advent Schools are driven by the desire to provide excellent
          services to all students within our care.
        </h1>
      </div>
      <div></div>
      <div className={styles.Herochildthree}>
        <a href="#into">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width={30}
            height={251.484}
            viewBox="0 0 57 251.484"
          >
            <g
              id="Group_30"
              data-name="Group 30"
              transform="translate(-1835 -759)"
            >
              <text
                id="scroll"
                transform="translate(1871 812) rotate(-90)"
                fill="#e4e4e4"
                fontSize={30}
                fontFamily="Tungsten-Book, Tungsten"
                letterSpacing="0.06em"
              >
                <tspan x="0" y="0">
                  scroll
                </tspan>
              </text>
              <g id="Group_29" data-name="Group 29" transform="translate(0 20)">
                <g
                  id="Rectangle_34"
                  data-name="Rectangle 34"
                  transform="translate(1850 836)"
                  fill="none"
                  stroke="#e4e4e4"
                  strokeWidth={2}
                >
                  <rect width="27" height="48" rx="13.5" stroke="none" />
                  <rect
                    x="1"
                    y="1"
                    width="25"
                    height="46"
                    rx="12.5"
                    fill="none"
                  />
                </g>
                <line
                  id="Line_7"
                  data-name="Line 7"
                  y2="5"
                  transform="translate(1863.5 842.5)"
                  fill="none"
                  stroke="#e4e4e4"
                  strokeWidth={3}
                />
              </g>
              <g
                id="Group_28"
                data-name="Group 28"
                transform="translate(3605 8967.272) rotate(-180)"
              >
                <rect
                  id="Rectangle_31"
                  data-name="Rectangle 31"
                  width="27.449"
                  height="12.271"
                  rx="5"
                  transform="translate(1713 7985.637) rotate(-47)"
                  fill="#fff"
                />
                <rect
                  id="Rectangle_32"
                  data-name="Rectangle 32"
                  width="11.625"
                  height="51.991"
                  rx="5"
                  transform="translate(1735.728 7978.493)"
                  fill="#fff"
                />
                <rect
                  id="Rectangle_33"
                  data-name="Rectangle 33"
                  width="38.428"
                  height="12.271"
                  rx="5"
                  transform="translate(1761.323 7992.638) rotate(-135)"
                  fill="#fff"
                />
              </g>
            </g>
          </svg>
        </a>
      </div>
    </div>
  );
};

export default Jumbtron;
