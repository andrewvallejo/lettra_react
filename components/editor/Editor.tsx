import styles from "../../styles/editor.module.scss";
import LiveEditor from "./LiveEditor";
import TextEditor from "./TextEditor";

export default function Editor ({ children }: { children: React.ReactNode }){
	return (
		<section className={styles.container}>
			<h1 className={styles.heading}>Lettra</h1>
			<TextEditor>
				<LiveEditor>{children}</LiveEditor>
			</TextEditor>
		</section>
	);
}
