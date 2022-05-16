import { useEffect, useState } from "react";

import { useEditorContext } from "../../context/wordiablesContext";
import { wordiableRegex } from "../../lib/editor";
import styles from "../../styles/editor.module.scss";
import Wordiable from "./Wordiable";

export default function LiveEditor (){
	const { textContext, wordiablesContext } = useEditorContext();

	useEffect(
		() => {
			if (textContext) {
				textContext.trim().split(" ").map((word, index) => {
					if (word === " ") <span key={index}>&nbsp;</span>;
					if (word.match(wordiableRegex)) {
						return <Wordiable>{word + " "}</Wordiable>;
					} else {
						return word + " ";
					}
				});
			}
		},
		[ textContext ]
	);

	return (
		<article className={styles.liveEditor}>
			<p>
				{textContext &&
					textContext.trim().split(" ").map((word, index) => {
						if (word === " ") <span key={index}>&nbsp;</span>;
						if (wordiablesContext.includes(word)) {
							return <Wordiable>{word}</Wordiable>;
						} else {
							return word + " ";
						}
					})}
			</p>
		</article>
	);
}
