import React, { createContext, useContext, useMemo, useState } from "react";

const EditorContext = createContext<{
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

export const WordiablesWrapper = ({ children }: { children: React.ReactNode }) => {
	const [ wordiablesContext, setWordiablesContext ] = useState<string[]>([]);
	const [ textContext, setTextContext ] = useState<string>("");
	const context = useMemo(() => ({ textContext, wordiablesContext, setWordiablesContext, setTextContext }), [
		textContext,
		wordiablesContext,
		setWordiablesContext,
		setTextContext
	]);
	return <EditorContext.Provider value={context}>{children}</EditorContext.Provider>;
};

export const useEditorContext = () => {
	return useContext(EditorContext);
};
