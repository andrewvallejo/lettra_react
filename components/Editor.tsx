import styles from '../styles/editor.module.css'

export default function Editor ({children}: {children: any}){
	return <div className={styles.container}>{children}</div>
}
