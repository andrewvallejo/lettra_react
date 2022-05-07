import styles from "../styles/editor.module.scss";

export const parseText = (text: string, wordiables: string[]) => {
	const words = text.split(" ");
	const elements = convertStringToHTML(words, wordiables);

	return <p>{elements}</p>;
};

const convertStringToHTML = (words: string[], wordiables: string[]) => {
	const wordiablesClasses = [ "one", "two", "three", "four", "five", "six", "seven" ];
	const elements = words.map((word, index) => {
		if (word === "") {
			return <span key={index}>&nbsp;</span>;
		}
		if (wordiables.includes(word)) {
			return (
				<span key={index} className={styles[wordiablesClasses[wordiables.indexOf(word)]]}>
					{`${word} `}
				</span>
			);
		} else {
			return `${word} `;
		}
	});

	return elements;
};

export const checkWordiableStatus = (text: string): boolean => {
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
