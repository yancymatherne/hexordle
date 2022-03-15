import { get } from 'svelte/store';
import { gameState, submitGuess, isStillPlaying } from '../../stores';

export const handleKey = (key: string) => {
	if (isStillPlaying(get(gameState))) {
		if (key.length === 1 && 'a' <= key && key <= 'z') {
			gameState.addLetter(key);
		} else if (key === 'enter') {
			submitGuess();
		} else if (key === 'backspace' || key === 'delete') {
			gameState.removeLetter();
		}
	}
};
