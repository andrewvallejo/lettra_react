import styles from "../../styles/editor.module.scss";

export default function LiveEditor ({ children }: { children: any }){
	return <p className={styles.liveEditor}>{children}</p>;
}
