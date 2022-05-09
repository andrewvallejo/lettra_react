import styles from "../styles/editor.module.scss";
import LiveEditor from "./LiveEditor";
import TextEditor from "./TextEditor";

export default function Editor (){
	return (
		<section className={styles.container}>
			<header>
				<h1 className={styles.heading}>Lettra</h1>
			</header>
			<main className={styles.editor}>
				<TextEditor>
					<LiveEditor />
				</TextEditor>
			</main>
		</section>
	);
}
