import { useEditorContext } from "../../context/wordiablesContext";
import styles from "../../styles/editor.module.scss";

export default function Wordiable ({ children }: { children: any }){
	const { textContext, setTextContext, setWordiablesContext } = useEditorContext();

	const handleClick = (event: { target: { value: any } }) => {
		const word = event.target.value;
		const newText = textContext.replace(children, word);
		if (newText !== textContext) {
			setTextContext(newText);
			setWordiablesContext([]);
		}
	};

	return (
		<span className={styles.editorForm}>
			<button className={styles.wordiableButton}>{`${children} `}</button>
			<input
				id='wordiableInput'
				type='text'
				name='word'
				className={styles.wordiableInput}
				defaultValue={children}
				onChange={handleClick}
			/>
		</span>
	);
}
