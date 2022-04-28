import {createContext, useContext, useMemo, useState} from 'react';
import {IWordiables} from '../../types';
import {wordiables} from './wordiables';

type WordiablesContextProviderProps = {
	children: React.ReactNode;
};

const WordiablesContext = createContext<IWordiables>(wordiables);

export function WordiablesWrapper ({children}: WordiablesContextProviderProps){
	const [wordiablesState, setWordiablesState] = useState<IWordiables>(wordiables);

	// Any is currently being used to type contextValue,
	// but you should try to look for a better solution
	const contextValue: any = useMemo(
		() => {
			return [wordiablesState, setWordiablesState];
		},
		[wordiablesState, setWordiablesState]
	);

	// TS BUG: both items in array are throwing off tslinter (temp fix on line 16 w/ 'any')
	return <WordiablesContext.Provider value={contextValue}>{children}</WordiablesContext.Provider>;
}

export function useWordiablesContext (){
	return useContext(WordiablesContext);
}
