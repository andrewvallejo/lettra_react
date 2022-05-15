import styles from "../styles/editor.module.scss";

export const wordiableRegex = /\B\\[^,.?!;:|\\n]*\\/gi;

export const stringToJSX = (text: string, wordiables: string[]) => {
	return text.trim().split(" ").map((word, index) => {
		if (word.match(/\n*/gi)) {
		}

		if (word === " ") {
			return <span key={index}>&nbsp;</span>;
		}

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
