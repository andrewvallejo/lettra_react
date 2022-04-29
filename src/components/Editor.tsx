import { SetStateAction, useEffect, useState } from "react";

import styles from "../../styles/editor.module.scss";
import { updateWordIndices } from "../lib/editor";

export default function Editor (){
	// TS BUG: both items in array are throwing off tslinter
	// TS Report: Type 'object' is not an array type.ts(2461)
	// const [wordiablesState, setWordiablesState] = useWordiablesContext();

	const [ text, setText ] = useState<string>("");
	const [ words, setWords ] = useState<object[]>([]);
	const [ textUI, setTextUI ] = useState<string>("");
	const [ currentWord, setCurrentWord ] = useState<string>("");

	const handleChange = (event: { target: { value: SetStateAction<string> } }) => {
		const { value } = event.target as HTMLTextAreaElement;
		const lastChar = value[value.length - 1];
		const charMarkers = [ ".", "?", "!", ",", ";", ":", " " ];

		if (charMarkers.includes(lastChar)) {
			const updatedWords = updateWordIndices(value);
			setWords(updatedWords);
		}

		setTextUI(value);
	};

	return (
		<section className={styles.container}>
			<header>
				<h1 className={styles.heading}>Lettra</h1>
			</header>
			<div className={styles.editor}>
				<textarea
					id='textEditor'
					name='textEditor'
					className={styles.textEditor}
					placeholder='Paste your cover letter here'
					value={textUI}
					onChange={handleChange}
				/>
			</div>
		</section>
	);
}
