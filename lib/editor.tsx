import styles from "../styles/editor.module.scss";

export const wordiableRegex = /.?\\.[^,.?!;:|\\n]*\\/gi;

export const stringToJSX = (text: string, wordiables: string[]) => {
	return text.split(" ").map((word, index) => {
		if (word.match(wordiableRegex)) {
			return (
				<span className={styles.one} key={index}>
					{word + " "}
				</span>
			);
		} else {
			return word + " ";
		}
	});
};
