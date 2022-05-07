import { useEffect, useState } from "react";

import { UseWordiablesContext } from "../context/wordiablesContext";
import { checkWordiableStatus, parseText } from "../lib/editor";
import styles from "../styles/editor.module.scss";

export default function LiveEditor ({ text }: { text: any }){
	const { wordiablesContext, setWordiablesContext } = UseWordiablesContext();

	useEffect(
		() => {
			if (text) {
				const liveWordiables: string[] = [];

				text.split(" ").forEach((word: string) => {
					const isWordiable: boolean = checkWordiableStatus(word);
					if (isWordiable && !liveWordiables.includes(word)) {
						liveWordiables.push(word);
					} else if (!isWordiable && liveWordiables.includes(word)) {
						liveWordiables.splice(liveWordiables.indexOf(word), 1);
					}

					setWordiablesContext(liveWordiables);
				});
			}
		},
		[ text, wordiablesContext, setWordiablesContext ]
	);

	return <div className={styles.liveEditor}>{parseText(text, wordiablesContext)}</div>;
}
