import styles from "../../styles/editor.module.scss";
import { IWord } from "../../types";

export const updateWordIndices = (value: string): IWord[] => {
	const words = value.trim().split(" ").filter((word) => word.length);
	const wordiables: IWord[] = [];

	words.forEach((word, index) => {
		const newWord: IWord = {
			string: word,
			index: index,
			tagged: false
		};

		checkForSlash(newWord);
		wordiables.push(newWord);
	});

	return wordiables;
};

const checkForSlash = (word: any) => {
	if (word.string.includes("\\")) {
		word.tagged = true;
	}
	return word;
};

export const stringToElement = (string: IWord[]) => {
	return string.map((word, index) => {
		return (
			<span key={index} className={word.tagged ? styles.text : ""}>
				{" "}
				{word.string}
			</span>
		);
	});
};
