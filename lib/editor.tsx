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
