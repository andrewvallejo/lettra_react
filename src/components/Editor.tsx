import { SetStateAction, useEffect, useState } from "react";

import styles from "../../styles/editor.module.scss";
import { IWord } from "../../types";

export default function Editor (){
	// TS BUG: both items in array are throwing off tslinter
	// TS Report: Type 'object' is not an array type.ts(2461)
	// const [wordiablesState, setWordiablesState] = useWordiablesContext();

	const [ text, setText ] = useState<string>("");
	const [ words, setWords ] = useState<object[]>([]);
	const [ textUI, setTextUI ] = useState<string>("");
	const [ currentWord, setCurrentWord ] = useState<string>("");

	useEffect(
		() => {
			const indices: number = words.length;
			const word: string = currentWord.split(" ").join("");

			const newWord: IWord = {
				string: word,
				index: indices
			};

			if (currentWord) {
				setWords([ ...words, newWord ]);
				setText(textUI);
				setCurrentWord("");
			}
		},
		[ textUI, words, currentWord ]
	);

	const handleChange = (event: { target: { value: SetStateAction<string> } }) => {
		const char = event.target.value as string;
		const currChar = char[char.length - 1];
		const space = " ";
		if (currChar === space) {
			setCurrentWord(textUI.split(" ").filter((char: string) => !text.split(" ").includes(char)).join(""));
		}

		setTextUI(char);
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
