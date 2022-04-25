import {SetStateAction, useEffect, useState} from 'react'
import {getWord, getLastWord} from '../lib/editor'

import styles from '../styles/editor.module.scss'

export default function Editor (){
	const [text, setText] = useState('')
	const [words, setWords] = useState<object[]>([])
	const [textUI, setTextUI] = useState('')
	const [currentWord, setCurrentWord] = useState('')

	useEffect(
		() => {
			const indices = words.length
			const word = currentWord.split(' ').join('')

			const newWord = {
				string: word,
				index: indices + 1
			}

			if (currentWord) {
				setWords([...words, newWord])
				setText(textUI)
				setCurrentWord('')
			}
		},
		[textUI, words, currentWord]
	)

	const handleChange = (event: {target: {value: SetStateAction<string>}}) => {
		const char = event.target.value as string
		const currChar = char[char.length - 1]
		const space = ' '
		if (currChar === space) {
			setCurrentWord(textUI.split(' ').filter((char: string) => !text.split(' ').includes(char)).join(''))
		}

		setTextUI(char)
	}

	return (
		<section className={styles.container}>
			<header>
				<h1 className={styles.heading}>Lettra</h1>
			</header>
			<div className={styles.editor}>
				<textarea
					id='textEditor'
					name='textEditor'
					className={styles.textEditor}
					placeholder='Paste your cover letter here'
					value={textUI}
					onChange={handleChange}
				/>
			</div>
		</section>
	)
}

/*
			- textUI
	X			- User's input updates *textUI, which is also the value that displays the on DOM
	X		- If there is a space, then add last word of the string to *text
					- Last word should be then turned into an object with string/index number
			-Iterate through words & Iterate through Text
				- Check to see if string and index match
				- If index match, and string doesnt: replace with new string
				- If string matches, but index doesn't
						- Reset all of strings indices going from 0 UP
					- If both don't match, then check if the last word index is one less than the text
					- If it is one less, add new word to the end of array
					- If index is more than one off, then
							- Reset all of strings indices going from 0 UP
	*/

// const formWord = (letters: string) => {
// 	const indices = words.length
// 	const word = letters.split(' ').join('')

// 	return {
// 		string: word,
// 		index: indices + 1
// 	}
