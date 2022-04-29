import { SetStateAction, useEffect, useState } from "react";

import styles from "../../styles/editor.module.scss";
import { IWord } from "../../types";
import { useWordiablesContext } from "../context/wordiablesContext";
import { updateWordIndices } from "../lib/editor";

export default function Editor (){
	const [ wordiablesState, setWordiablesState ] = Object.values(useWordiablesContext());

	const [ text, setText ] = useState<string>("");
	const [ words, setWords ] = useState<IWord[]>([]);
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
		if (words.length > 0) {
			words.forEach((word) => {
				if (word.tagged === true) {
					console.log(word);
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
