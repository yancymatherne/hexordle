import { MAX_GUESSES, WORD_LENGTH } from "../guess/constants";
import { Evaluation } from "../../types/guess.types";

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