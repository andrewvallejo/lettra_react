import { useContext } from "react";

import styles from "../../styles/editor.module.scss";
import { IWord } from "../../types";

const getWordiableClass = (wordPlacement: number) => {
	switch (wordPlacement) {
		case 0:
			return "wordiableOne";
		case 1:
			return "wordiableTwo";
		case 2:
			return "wordiableThree";
		case 3:
			return "wordiableFour";
		case 4:
			return "wordiableFive";
		case 5:
			return "wordiableSix";
		case 6:
			return "wordiableSeven";
		default:
			return "";
	}
};

export const updateWordIndices = (value: string, totalWordiables: number): IWord[] => {
	console.log(totalWordiables);
	const words = value.trim().split(" ").filter((word) => word.length);
	const wordiables: IWord[] = [];

	words.forEach((word, index) => {
		const newWord: IWord = {
			string: word,
			index: index,
			isWordiable: false,
			wordiableIndex: totalWordiables,
			class: getWordiableClass(totalWordiables)
		};

		checkForSlash(newWord);
		wordiables.push(newWord);
	});

	return wordiables;
};

const checkForSlash = (word: any) => {
	if (word.string.includes("\\")) {
		word.isWordiable = true;
	}
	return word;
};

export const stringToElement = (string: IWord[], wordiables: IWord[]) => {
	return string.map((word, index) => {
		if (wordiables) {
			word.class = styles.wordiables;
		}
		return (
			<span key={index} className={word.isWordiable ? `style.${word.class}` : ""}>
				{" "}
				{word.string}
			</span>
		);
	});
};
