import { MAX_GUESSES } from '$lib/guess/constants';
import { Evaluation, GameStatus, type GameState } from '../../types/guess.types';

export const evaluateWord = (word: string, target: string) => {
	const letterCounts = target.split('').reduce(
		(counts, letter) => ({
			...counts,
			[letter]: counts[letter] === undefined ? 1 : counts[letter] + 1
		}),
		{}
	);

	const matched = word
		.split('')
		.map((letter, i) => {
			if (letter === target[i]) {
				letterCounts[letter]--;
				return Evaluation.CORRECT;
			}

			return Evaluation.ABSENT;
		})
		.map((evaluation, i) => {
			const letter = word[i];
			if (evaluation === Evaluation.CORRECT) {
				return evaluation;
			}

			if (letterCounts[letter]) {
				letterCounts[letter]--;
				return Evaluation.MISPLACED;
			}

			return Evaluation.ABSENT;
		});

	return matched.join('');
};

export const evaluateKeyboardLetter = (next: string, previous = '') => {
	if (next === Evaluation.CORRECT) {
		return Evaluation.CORRECT;
	} else if (next === Evaluation.MISPLACED) {
		if (previous !== Evaluation.CORRECT) {
			return Evaluation.MISPLACED;
		}
	} else if (next === Evaluation.ABSENT) {
		if (previous !== Evaluation.CORRECT && previous !== Evaluation.MISPLACED) {
			return Evaluation.ABSENT;
		}
	}

	return previous;
};

export const winMessage = {
	1: 'Flawless Victory!',
	2: 'Very nice!',
	3: 'Good job.',
	4: 'Adequately won.',
	5: '#winning',
	6: 'Winning is winning.'
};

const mapEvaluationToBlock = {
	[Evaluation.CORRECT]: '\uD83D\uDFE9',
	[Evaluation.MISPLACED]: '\uD83D\uDFE8',
	[Evaluation.ABSENT]: '\u2B1C' // black -> '\u2B1B'
};

/**
 * Gets a unicode emoji view of the board for sharing.
 */
export const getBlocks = (evaluations: string[]) => {
	return evaluations
		.map((evaluation) =>
			evaluation
				.split('')
				.map((letter) => mapEvaluationToBlock[letter])
				.join('')
		)
		.join('\n');
};

export const getShareMessage = ($gameState: GameState) => {
	const numberOfGuesses =
		$gameState && $gameState.status === GameStatus.LOSS ? 'X' : $gameState.guesses.length;

	return `Hexordle ${$gameState.day} ${numberOfGuesses}/${MAX_GUESSES}\n${getBlocks(
		$gameState.evaluations
	)}`;
};
