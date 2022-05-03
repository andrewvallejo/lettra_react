import { useEffect, useState } from "react";

import { UseWordiablesContext } from "../context/wordiablesContext";
import { parseText, searchForWordiables } from "../lib/editor";
import styles from "../styles/editor.module.scss";

export default function LiveEditor ({ text }: { text: any }){
	const { wordiables, setWordiables } = UseWordiablesContext();

	useEffect(
		() => {
			if (text) {
				text.split(" ").forEach((word: string) => {
					const isWordiable: boolean = searchForWordiables(word);
					if (isWordiable && !wordiables.includes(word)) {
						setWordiables([ ...wordiables, word ]);
					}
				});
			}
		},
		[ text, setWordiables, wordiables ]
	);

	return <div className={styles.liveEditor}>{parseText(text)}</div>;
}
