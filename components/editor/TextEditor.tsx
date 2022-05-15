import "normalize.css/normalize.css";

import { useEffect, useMemo, useState } from "react";

import { UseWordiablesContext } from "../../context/wordiablesContext";
import { wordiableRegex } from "../../lib/editor";
import styles from "../../styles/editor.module.scss";

export default function TextEditor ({ children }: { children: React.ReactNode }){
	const { textContext, setTextContext, setWordiablesContext, wordiablesContext } = UseWordiablesContext();

	useEffect(() => {
		const wordiables = textContext.match(wordiableRegex);
		if (wordiables) {
			setWordiablesContext(wordiables);
		}
	});

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
