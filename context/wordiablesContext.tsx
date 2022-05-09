import { createContext, useContext, useMemo, useState } from "react";

type WordiablesContextProviderProps = {
	children: React.ReactNode;
};

const WordiablesContext = createContext<{
	textContext: string;
	wordiablesContext: string[];
	setWordiablesContext: React.Dispatch<React.SetStateAction<string[]>>;
	setTextContext: React.Dispatch<React.SetStateAction<string>>;
}>({
	textContext: "",
	wordiablesContext: [],
	setWordiablesContext: () => {},
	setTextContext: () => {}
});

export const WordiablesWrapper = ({ children }: WordiablesContextProviderProps) => {
	const [ wordiablesContext, setWordiablesContext ] = useState<string[]>([]);
	const [ textContext, setTextContext ] = useState<string>("");
	const context = useMemo(() => ({ textContext, wordiablesContext, setWordiablesContext, setTextContext }), [
		textContext,
		wordiablesContext,
		setWordiablesContext,
		setTextContext
	]);
	return <WordiablesContext.Provider value={context}>{children}</WordiablesContext.Provider>;
};

export const UseWordiablesContext = () => {
	return useContext(WordiablesContext);
};
