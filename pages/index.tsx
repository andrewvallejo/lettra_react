import Head from "next/head";

import Editor from "../components/Editor";
import { Logo } from "../components/Logo";
import Nav from "../components/Nav";
import styles from "../styles/Home.module.scss";

import type { NextPage } from 'next'
const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Lettra</title>
        <meta name="description" content="Cover Letter Time Saver" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta name="language" content="en" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
      </Head>
        <Nav>
          <Logo />
        </Nav>
        <main className={styles.main}>
          <Editor/>
        </main>
    </>
  )
}

export default Home

