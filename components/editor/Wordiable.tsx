import { useEditorContext } from "../../context/wordiablesContext";
import styles from "../../styles/editor.module.scss";

export default function Wordiable ({ children }: { children: React.ReactNode }){
	const { textContext, setTextContext, setWordiablesContext } = useEditorContext();

	// handleClick to change word variable to another word
	const handleClick = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
		e.preventDefault();
		const word = e.currentTarget.innerText;
		const newText = textContext.replace(word, word.replace(/\w/gi, "Text In"));
		setTextContext(newText);
		setWordiablesContext([]);
	};

	return (
		<form>
			<button className={styles.one} onClick={handleClick}>
				{`${children} `}
			</button>
			<input type='text' name='word' />
		</form>
	);
}
