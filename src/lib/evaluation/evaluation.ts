import { Evaluation } from "../../types/guess.types";

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
