import styles from "../../styles/editor.module.scss";
import TextEditor from "./TextEditor";

export default function Editor (){
	return (
		<section className={styles.container}>
			<h1 className={styles.heading}>Lettra</h1>
			<TextEditor />
		</section>
	);
}
