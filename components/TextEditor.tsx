import "normalize.css/normalize.css";

import { useEffect, useMemo, useState } from "react";

import { UseWordiablesContext } from "../context/wordiablesContext";
import styles from "../styles/editor.module.scss";

export default function TextEditor ({ children }: { children: React.ReactNode }){
	const { textContext, setTextContext, setWordiablesContext, wordiablesContext } = UseWordiablesContext();
	// const regex = /\\([A-Z])\w+\\/;

	useEffect(
		() => {
			textContext.split(" ").forEach((word: string) => {
				const regex = /\\([A-Z])\w+\\\n/gi;
				const regex2 = /\n\\([A-Z])\w+\\/gi;
				const match = regex.exec(word);
				const match2 = regex2.exec(word);
				if (match) {
					// sp;loce the \n from the end of the word
					const wordWithoutLastTwoCharacters = word.trim();
					// add a space after the word with a \n
					const wordWithSpace = `${wordWithoutLastTwoCharacters} \n`;
					setTextContext(textContext.replace(word, wordWithSpace));
				}
				if (match2) {
					const wordWithoutFirstTwoCharacters = word.trim();
					const wordWithSpace = `\n ${wordWithoutFirstTwoCharacters}`;
					setTextContext(textContext.replace(word, wordWithSpace));
				}
			});
		},
		[ setTextContext, textContext ]
	);

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
			{children}
		</article>
	);
}
