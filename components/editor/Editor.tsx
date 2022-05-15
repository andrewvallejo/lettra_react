import { useEffect, useMemo, useState } from "react";

import { UseWordiablesContext } from "../../context/wordiablesContext";
import { stringToJSX } from "../../lib/editor";
import styles from "../../styles/editor.module.scss";
import LiveEditor from "./LiveEditor";
import TextEditor from "./TextEditor";

export default function Editor (){
	const { wordiablesContext, textContext } = UseWordiablesContext();

	return (
		<section className={styles.container}>
			<h1 className={styles.heading}>Lettra</h1>
			<TextEditor>
				<LiveEditor>{stringToJSX(textContext, wordiablesContext)}</LiveEditor>
			</TextEditor>
		</section>
	);
}
