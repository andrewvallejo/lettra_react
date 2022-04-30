import { wordiables } from "./src/context/wordiables";

export interface IWord {
	string: string;
	index: number;
	isWordiable: boolean;
	wordiableIndex: number;
	class: string;
}

export interface IWordiables {
	wordiables: IWord[];
	one: IWord;
	two: IWord;
	three: IWord;
	four: IWord;
	five: IWord;
	six: IWord;
	seven: IWord;
}
