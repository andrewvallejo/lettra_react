import styles from "../styles/editor.module.scss";

export const wordiableRegex = /.?^\\.[^,.?!;:|\\n]*\\$/gi;

export const stringToJSX = (text: string, wordiables: string[]) => {
	return text.split(" ").map((word, index) => {
		const wordiable = word.match(wordiableRegex);
		if (wordiable) {
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
