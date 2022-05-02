import { createContext, useContext, useMemo, useState } from "react";

type WordiablesContextProviderProps = {
	children: React.ReactNode;
};

const wordiables: object[] = [];

const WordiablesContext = createContext([]);

export function WordiablesWrapper ({ children }: WordiablesContextProviderProps){
	const [ wordiablesState, setWordiablesState ] = useState<object[]>(wordiables);

	const contextValue: any = useMemo(
		() => {
			return [ wordiablesState, setWordiablesState ];
		},
		[ wordiablesState, setWordiablesState ]
	);

	return <WordiablesContext.Provider value={contextValue}>{children}</WordiablesContext.Provider>;
}

export function UseWordiablesContext (){
	return useContext(WordiablesContext);
}
