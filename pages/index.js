import Head from "next/head";
import { UserButton, useUser } from "@clerk/clerk-react";
import styles from "../styles/Home.module.css";

export default function Home() {
  const { publicMetadata } = useUser();
  return (
    <div className={styles.container}>
      <Head>
        <title>Demo with TikTok Handle</title>
      </Head>
      <header className={styles.header}>
        <UserButton />
      </header>
      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome, {publicMetadata.tikTokHandle}!
        </h1>

        <p className={styles.description}>
          This demo is built entirely with Next.js and Clerk. The TikTok handle
          is stored in the metadata on Clerk&apos;s user object.
        </p>
      </main>
    </div>
  );
}
