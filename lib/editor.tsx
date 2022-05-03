import styles from "../styles/editor.module.scss";

export const parseText = (text: string) => {
	const words = text.split(" ");
	return convertStringToHTML(words);
};

const convertStringToHTML = (words: string[]) => {
	const text = words.reduce((phrase, word) => {
		return `${phrase} ${word}`;
	}, "");
	return <p className={styles.text}>{text}</p>;
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
