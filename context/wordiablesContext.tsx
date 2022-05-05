import { createContext, useContext, useMemo, useState } from "react";

type WordiablesContextProviderProps = {
	children: React.ReactNode;
};

const WordiablesContext = createContext<{
	wordiablesContext: string[];
	setWordiablesContext: React.Dispatch<React.SetStateAction<string[]>>;
}>({
	wordiablesContext: [],
	setWordiablesContext: () => {}
});

export const WordiablesWrapper = ({ children }: WordiablesContextProviderProps) => {
	const [ wordiablesContext, setWordiablesContext ] = useState<string[]>([]);

	return (
		<WordiablesContext.Provider value={{ wordiablesContext, setWordiablesContext }}>
			{children}
		</WordiablesContext.Provider>
	);
};

export const UseWordiablesContext = () => {
	const context = useContext(WordiablesContext);

	return useMemo(() => context, [ context ]);
};
