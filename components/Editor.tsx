import "normalize.css/normalize.css";

import { useMemo, useState } from "react";

import styles from "../styles/editor.module.scss";
import LiveEditor from "./LiveEditor";

export default function Editor (){
	const [ text, setText ] = useState("");

	return (
		<section className={styles.container}>
			<header>
				<h1 className={styles.heading}>Lettra</h1>
			</header>
			<div className={styles.editor}>
				<textarea
					id='textEditor'
					name='textEditor'
					value={text}
					className={styles.textEditor}
					placeholder='Paste your cover letter here'
					onChange={(e) => setText(e.target.value)}
				/>
				<LiveEditor text={useMemo(() => text, [ text ])} />
			</div>
		</section>
	);
}
//2808 ms  Total <- without memoization
