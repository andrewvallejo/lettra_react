import { useEffect, useState } from "react";

import { UseWordiablesContext } from "../../context/wordiablesContext";
import styles from "../../styles/editor.module.scss";

export default function LiveEditor ({ children }: { children: any }){
	const [ wordiablesState, setWordiablesState ] = Object.values(UseWordiablesContext());

	const parseText = (text: string) => {
		const words = text.split(" ");
		const phrase = words.reduce((phrase, word) => {
			return `${phrase} ${word}`;
		}, "");
		return <p className={styles.text}>{phrase}</p>;
	};
	return <div className={styles.liveEditor}>{parseText(children)}</div>;
}
