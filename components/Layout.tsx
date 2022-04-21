import styles from '../styles/Home.module.scss'
import Head from 'next/head'

export default function Layout ({children}: {children: any}){
	return (
		<div className={styles.container}>
			<Head>
				<title>Lettra</title>
				<meta name='description' content='Cover Letter Time Saver' />
				<link rel='icon' href='/favicon.ico' />
				<link rel='apple-touch-icon' sizes='180x180' href='/apple-touch-icon.png' />
				<link rel='icon' type='image/png' sizes='32x32' href='/favicon-32x32.png' />
				<link rel='icon' type='image/png' sizes='16x16' href='/favicon-16x16.png' />
				<link rel='manifest' href='/site.webmanifest' />
			</Head>
			<main className={styles.main}>{children}</main>
		</div>
	)
}
