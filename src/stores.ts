import { readable, writable } from 'svelte/store'
import { localStore } from './localStore.js'
import type { Guess } from './types/guess.types.js';

export const todaysWord = readable('bandit');

const createGuess = () => ({
    word: '',
    submitted: false,
    valid: true
});

const createGuesses = () => {
    const { subscribe, update } = writable<Guess[]>([createGuess()]);

    return {
        subscribe,
        addLetter: (letter: string) => update(g => {
            let lastGuess = g.pop();

            if (!lastGuess.submitted && lastGuess.word.length < 6) {
                lastGuess = {
                    ...lastGuess,
                    word: lastGuess.word + letter
                }
            }

            return [...g, lastGuess];
        }),
        submitGuess: () => update(g => {
            let lastGuess = g.pop();

            if (!lastGuess.submitted && lastGuess.word.length === 6) {
                lastGuess = {
                    ...lastGuess,
                    submitted: true
                }

                const next = { word: '', submitted: false, valid: true };

                return [...g, lastGuess, next];
            }

            return [...g, lastGuess];
        }),
        removeLetter: () => update(g => {
            let lastGuess = g.pop();

            if (!lastGuess.submitted) {
                lastGuess = {
                    ...lastGuess,
                    word: lastGuess.word.slice(0, -1)
                }
            }

            return [...g, lastGuess];
        }),
        createGuess
    }
};

export const guesses = createGuesses();
