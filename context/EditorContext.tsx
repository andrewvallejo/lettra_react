import {createContext, useContext, useMemo, useState} from 'react'

const EditorContext = createContext({})

const wordiables = {
	one: {},
	two: {},
	three: {},
	four: {},
	five: {},
	six: {},
	seven: {}
}

export function EditorWrapper ({children}: any){
	const [editorState, setEditorState] = useState(wordiables)

	const contextValue = useMemo(
		() => {
			return [editorState, setEditorState]
		},
		[editorState, setEditorState]
	)

	return <EditorContext.Provider value={contextValue}>{children}</EditorContext.Provider>
}

export function useEditorContext (){
	return useContext(EditorContext)
}
