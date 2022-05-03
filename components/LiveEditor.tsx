import { useEffect, useState } from "react";

import { UseWordiablesContext } from "../context/wordiablesContext";
import { parseText } from "../lib/editor";
import styles from "../styles/editor.module.scss";

export default function LiveEditor ({ children }: { children: any }){
	const [ wordiablesState, setWordiablesState ] = Object.values(UseWordiablesContext());

	return <div className={styles.liveEditor}>{parseText(children)}</div>;
}
