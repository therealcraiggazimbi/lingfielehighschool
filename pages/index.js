import Head from "next/head";
import Image from "next/image";
import Intro from "../components/Intro";
import Jumbtron from "../components/Jumbtron";
import LAS from "../components/LAS";
import News from "../components/News";
import Stats from "../components/Stats";
import Values from "../components/Values";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Lingfield Advent Schools - Home </title>
        <meta
          name="description"
          content="Welcome to Lingfield Advent High Day and Boarding School. We are an English Christian School based in Gweru. We are a registered Cambridge and ZIMSEC Examination Centre offering Ordinary Level &amp; Advanced Level Studies. We are driven by the desire to provide excellent services as we let our corporate social responsibility take precedence over anything else."
        />
        <meta
          name="keywords"
          content="Lingfield Advent School , Private School, Sabbath School, Christian School"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Jumbtron />
      <Intro />
      <Values />
      <Stats />
      <News />
      <LAS />
    </div>
  );
}
