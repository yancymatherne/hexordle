import { MAX_GUESSES, WORD_LENGTH } from "$lib/guess/constants";
import { Evaluation } from "../../types/guess.types";
import dictionary from "../data/guessList.json";
import { DateTime } from "luxon";
import solutionList from "../data/solutionList.json";

export const evaluateWord = (word: string, target: string) => {
    const letterCounts = target.split('')
        .reduce((counts, letter) => ({
            ...counts,
            [letter]: counts[letter] === undefined ? 1 : counts[letter] + 1
        }), {});

    const matched = word.split('')
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
    return evaluations.map(evaluation =>
        evaluation.split('').map(letter => mapEvaluationToBlock[letter]).join('')
    ).join('\n');
};

/**
 * Get the first correct guess for each column from a single game's evaluations.
 */
export const getColumnScores = (evaluations: string[]) => {
    return evaluations.reduce((acc, guess, index) => {
        guess.split('').forEach((letterEval, columnIndex) => {
            if (letterEval === Evaluation.CORRECT) {
                acc[columnIndex] = Math.min(index + 1, acc[columnIndex]);
            }
        });

        return acc;
    }, new Array(WORD_LENGTH).fill(MAX_GUESSES + 1));
};

/**
 * Get the average number of guesses to find the solution for each column.
 */
export const getColumnAverages = (columnDistribution, gamesPlayed: number): number[] =>
    Object.values(columnDistribution)
        .map((total: number) => Math.round(gamesPlayed ? total / gamesPlayed : MAX_GUESSES + 1));

/**
 * Get the colored grid for showing the column distribution graph.
 */
export const getColumnDistributionMatrix = (columnAverages: number[]) => {
    const matrix = [];

    for (let i = 1; i <= MAX_GUESSES; i++) {
        matrix.push(columnAverages.map(avg => i >= avg ? Evaluation.CORRECT : Evaluation.ABSENT).join(''));
    }

    return matrix;
};

/**
 * Normalize the guess distribution to on a scale of 0 to WORD_LENGTH with the largest guess distribution
 * set to WORD_LENGTH.
 */
export const getNormalizedGuessDistribution = (guessDistribution): number[] => {
    const guesses: number[] = Object.values(guessDistribution);
    const max = Math.max(...guesses);

    return guesses.map(guess => {
        const percentageOfMax = max ? guess / max : 0;
        return Math.round(percentageOfMax * WORD_LENGTH);
    });
}

/**
 * Get the colored grid for showing the guess distribution graph.
 */
export const getGuessesDistributionMatrix = (normalizedGuessDistribution: number[]) => 
    normalizedGuessDistribution.map(normalized => {
        let graph = ''

        for (let i = 1; i <= WORD_LENGTH; i++) {
            graph += i <= normalized ? Evaluation.CORRECT : Evaluation.ABSENT;
        }

        return graph;
    });

/**
 * Check that the given word is valid.
 */
export const isValidWord = (word: string) => dictionary.includes(word);

/**
 * Get the index for the solution by the given date.
 *
 * @param date defaults to today
 * @returns index of the solutionList
 */
export const getTodaysWordIndex = (date = DateTime.local()) =>
    DateTime.fromISO(date.toISODate(), { zone: 'utc' }).toSeconds() % solutionList.length;

/**
 * Get the solution word by the given date.
 * @param date defaults to today
 * @returns word from the solutionList
 */
export const getTodaysWord = (date = DateTime.local()) =>
    solutionList[getTodaysWordIndex(date)];
