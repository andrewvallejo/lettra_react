import { SetStateAction, useEffect, useRef, useState } from "react";

import styles from "../../styles/editor.module.scss";
import { IWord } from "../../types";
import { UseWordiablesContext } from "../context/wordiablesContext";
import { stringToElement, updateWordIndices } from "../lib/editor";

export default function Editor (){
	const [ wordiablesState, setWordiablesState ] = Object.values(UseWordiablesContext());
	const [ words, setWords ] = useState<IWord[]>([]);
	const [ textUI, setTextUI ] = useState<string>("");
	const { wordiables } = wordiablesState;

	const editorRef = useRef<HTMLTextAreaElement>(null);

	useEffect(
		() => {
			!textUI && (setTextUI(""), setWords([]));
		},
		[ textUI ]
	);

	const handleChange = (event: { target: { value: SetStateAction<string> } }) => {
		const { value } = event.target as HTMLTextAreaElement;
		const lastChar = value[value.length - 1];
		const charMarkers = [ ".", "?", "!", ",", ";", ":", " " ];

		if (charMarkers.includes(lastChar)) {
			setWords(updateWordIndices(value, wordiables.length));
			// Need to first iterate through words to find tagged words.
			words.forEach((word) => {
				if (word.isWordiable && !wordiablesState.wordiables.includes(word.string)) {
					setWordiablesState({ ...wordiablesState, wordiables: [ ...wordiables, word.string ] });
				}
			});
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
					ref={editorRef}
					value={textUI}
					id='textEditor'
					name='textEditor'
					className={styles.textEditor}
					placeholder='Paste your cover letter here'
					onChange={handleChange}
				/>

				<div className={styles.liveEditor}>{stringToElement(words, wordiables)}</div>
			</div>
		</section>
	);
}
