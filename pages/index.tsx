import type { NextPage } from 'next'
import Head from 'next/head'

import styles from '../styles/Home.module.scss'
import Editor from '../components/Editor'
import Nav from '../components/Nav'
import Layout from '../components/Layout'
import { Logo } from '../components/logo'


const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Lettra</title>
        <meta name="description" content="Cover Letter Time Saver" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
      </Head>
      <Layout>
        <Nav>
          <Logo />
        </Nav>
        <Editor/>
      </Layout>
    </div>
  )
}

export default Home
