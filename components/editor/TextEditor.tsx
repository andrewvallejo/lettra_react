import "normalize.css/normalize.css";

import { useEffect } from "react";

import { useEditorContext } from "../../context/wordiablesContext";
import { wordiableRegex } from "../../lib/editor";
import styles from "../../styles/editor.module.scss";
import LiveEditor from "./LiveEditor";

export default function TextEditor (){
	const { textContext, setTextContext, setWordiablesContext } = useEditorContext();

	useEffect(() => {
		const wordiables: RegExpMatchArray | null = textContext.match(wordiableRegex);
		if (wordiables) {
			setWordiablesContext(wordiables);
		}
	});

	return (
		<article className={styles.editor}>
			<textarea
				id='textEditor'
				name='textEditor'
				value={textContext}
				className={styles.textEditor}
				placeholder='Paste your cover letter here'
				onChange={(e) => setTextContext(e.target.value)}
			/>
			<LiveEditor />
		</article>
	);
}
