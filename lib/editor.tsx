import styles from "../styles/editor.module.scss";

export const parseText = (text: string, wordiables: string[]) => {
	const words = text.split(" ");
	const elements = convertStringToHTML(words, wordiables);
	console.log("👾: parseText -> elements", elements);
	return elements;
};

const convertStringToHTML = (words: string[], wordiables: string[]) => {
	return words.map((word: string) => {
		const isWordiable = wordiables.includes(word);

		return isWordiable ? (
			<span className={styles.wordiable} key={word}>
				{`${word} `}
			</span>
		) : (
			`${word} `
		);
	});
};

export const searchForWordiables = (text: string): boolean => {
	const isWordiable = searchForBackslashes(text);
	if (isWordiable) {
		return true;
	}
	return false;
};

const searchForBackslashes = (text: string) => {
	const hasBackslash = text.startsWith("\\");
	const hasBackslashBehind = text.endsWith("\\");
	if (hasBackslash && hasBackslashBehind && text.length > 1) {
		return true;
	}
	return false;
};

export const trim = (text: string) => text.replace(/  +/g, " ");
