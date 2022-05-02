import styles from "../../styles/editor.module.scss";

export default function LiveEditor ({ children }: { children: any }){
	return (
		<div className={styles.liveEditor}>
			<p>{children}</p>
		</div>
	);
}
