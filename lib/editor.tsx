import styles from "../styles/editor.module.scss";

export const parseText = (text: string) => {
	const words = text.split(" ");
	const phrase = words.reduce((phrase, word) => {
		return `${phrase} ${word}`;
	}, "");
	return <p className={styles.text}>{phrase}</p>;
};
