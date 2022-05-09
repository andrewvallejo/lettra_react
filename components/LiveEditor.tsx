import styles from "../styles/editor.module.scss";

export default function LiveEditor ({ children }: { children: any }){
	return <article className={styles.liveEditor}>{children}</article>;
}
