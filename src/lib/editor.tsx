// This will run every time a new word is added to state in order to detect any words changes

// If there are any changes in the word state then this will run to update all of the words to the correct indices

export const updateWordIndices = (value: string): object[] => {
	const words = value.trim().split(" ").filter((word) => word.length);
	const wordiables: object[] = [];

	words.forEach((word, index) => {
		const newWord = {
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
