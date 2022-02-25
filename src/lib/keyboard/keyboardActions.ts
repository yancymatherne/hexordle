import { gameState } from "../../stores";

export const handleKey = (key: string) => {
    if (key.length === 1 && 'a' <= key && key <= 'z') {
        gameState.addLetter(key);
    } else if (key === 'enter') {
        gameState.submitGuess();
    } else if (key === 'backspace' || key === 'delete') {
        gameState.removeLetter();
    }
}
