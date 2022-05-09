import { useEffect, useMemo, useState } from "react";

import { UseWordiablesContext } from "../context/wordiablesContext";
import { checkWordiableStatus, parseText } from "../lib/editor";
import styles from "../styles/editor.module.scss";
import LiveEditor from "./LiveEditor";
import TextEditor from "./TextEditor";

export default function Editor (){
	const { wordiablesContext, setWordiablesContext, textContext } = UseWordiablesContext();

	useEffect(
		() => {
			const liveWordiables: string[] = [];
			textContext.split(" ").forEach((word: string) => {
				const isWordiable: boolean = checkWordiableStatus(word);
				if (isWordiable && !liveWordiables.includes(word)) {
					liveWordiables.push(word);
				} else if (!isWordiable && liveWordiables.includes(word)) {
					liveWordiables.splice(liveWordiables.indexOf(word), 1);
				}
				setWordiablesContext(liveWordiables);
			});
		},
		[ textContext, wordiablesContext, setWordiablesContext ]
	);

	return (
		<section className={styles.container}>
			<h1 className={styles.heading}>Lettra</h1>
			<TextEditor>
				<LiveEditor>{parseText(textContext, wordiablesContext)}</LiveEditor>
			</TextEditor>
		</section>
	);
}
