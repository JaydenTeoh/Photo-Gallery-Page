import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Picture Gallery</title>
        <meta name="description" content="Picture Gallery" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
    </div>
  );
}
