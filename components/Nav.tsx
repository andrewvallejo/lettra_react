import styles from '../styles/nav.module.css'

export default function Nav ({children}: {children: any}){
	return <div className={styles.nav}>{children}</div>
}
