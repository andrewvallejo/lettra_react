import { useEditorContext } from "../../context/wordiablesContext";
import { stringToJSX } from "../../lib/editor";
import styles from "../../styles/editor.module.scss";
import LiveEditor from "./LiveEditor";
import TextEditor from "./TextEditor";

export default function Editor (){
	const { wordiablesContext, textContext } = useEditorContext();

	return (
		<section className={styles.container}>
			<h1 className={styles.heading}>Lettra</h1>
			<TextEditor>
				<LiveEditor>{stringToJSX(textContext, wordiablesContext)}</LiveEditor>
			</TextEditor>
		</section>
	);
}
