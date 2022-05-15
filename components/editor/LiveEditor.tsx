import styles from "../../styles/editor.module.scss";

export default function LiveEditor ({ children }: { children: React.ReactNode }){
	return <article className={styles.liveEditor}>{<p>{children}</p>}</article>;
}
