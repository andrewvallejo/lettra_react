import { createContext, useContext, useMemo, useState } from "react";

type WordiablesContextProviderProps = {
	children: React.ReactNode;
};

const WordiablesContext = createContext<{
	wordiables: string[];
	setWordiables: React.Dispatch<React.SetStateAction<string[]>>;
}>({
	wordiables: [],
	setWordiables: () => {}
});

export const WordiablesWrapper = ({ children }: WordiablesContextProviderProps) => {
	const [ wordiables, setWordiables ] = useState<string[]>([]);

	return <WordiablesContext.Provider value={{ wordiables, setWordiables }}>{children}</WordiablesContext.Provider>;
};

export const UseWordiablesContext = () => {
	const context = useContext(WordiablesContext);

	return useMemo(() => context, [ context ]);
};
