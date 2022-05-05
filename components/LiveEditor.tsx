import { useEffect, useState } from "react";

import { UseWordiablesContext } from "../context/wordiablesContext";
import { checkWordiableStatus, parseText } from "../lib/editor";
import styles from "../styles/editor.module.scss";

export default function LiveEditor ({ text }: { text: any }){
	const [ wordiables, setWordiables ] = useState<string[]>([]);
	const { wordiablesContext, setWordiablesContext } = UseWordiablesContext();

	useEffect(
		() => {
			if (text) {
				text.split(" ").forEach((word: string) => {
					const isWordiable: boolean = checkWordiableStatus(word);
					if (isWordiable && !wordiablesContext.includes(word)) {
						setWordiablesContext([ ...wordiablesContext, word ]);
					}
				});
			}
		},
		[ text, wordiablesContext, setWordiablesContext ]
	);

	return <div className={styles.liveEditor}>{parseText(text, wordiablesContext)}</div>;
}
