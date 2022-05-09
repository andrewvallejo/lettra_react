import "normalize.css/normalize.css";

import { useMemo, useState } from "react";

import { UseWordiablesContext } from "../context/wordiablesContext";
import styles from "../styles/editor.module.scss";

export default function TextEditor ({ children }: { children: React.ReactNode }){
	const { textContext, setTextContext } = UseWordiablesContext();

	return (
		<article className={styles.editor}>
			<textarea
				id='textEditor'
				name='textEditor'
				value={textContext}
				className={styles.textEditor}
				placeholder='Paste your cover letter here'
				onChange={(e) => setTextContext(e.target.value)}
			/>
			{children}
		</article>
	);
}
//2808 ms  Total <- without memoization
