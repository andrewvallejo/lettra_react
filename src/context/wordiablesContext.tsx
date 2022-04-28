import { createContext, useContext, useMemo, useState } from "react";

import { IWordiables } from "../../types";
import { wordiables } from "./wordiables";

type WordiablesContextProviderProps = {
	children: React.ReactNode;
};

const WordiablesContext = createContext<IWordiables>(wordiables);

export function WordiablesWrapper ({ children }: WordiablesContextProviderProps){
	const [ wordiablesState, setWordiablesState ] = useState<IWordiables>(wordiables);

	const contextValue: any = useMemo(
		() => {
			return [ wordiablesState, setWordiablesState ];
		},
		[ wordiablesState, setWordiablesState ]
	);

	return <WordiablesContext.Provider value={contextValue}>{children}</WordiablesContext.Provider>;
}

export function useWordiablesContext (){
	return useContext(WordiablesContext);
}
