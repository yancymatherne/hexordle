import { MAX_GUESSES, WORD_LENGTH } from '$lib/guess/constants.js';
import { get, readable, writable } from 'svelte/store'
import { localStore } from './localStore.js'

export const todaysWord = readable('bandit');

const createCurrentGuess = () => {
    const { subscribe, set, update } = writable<string>('');

    return {
        subscribe,
        addLetter: (letter: string) => update(guess => {
            if (guess.length < 6) {
                return guess + letter;
            }

            return guess;
        }),
        removeLetter: () => update(guess => {
            return guess.slice(0, -1);
        }),
        clear: () => set('')
    }
};

export const currentGuess = createCurrentGuess();

const createGuesses = () => {
    const { subscribe, update } = writable<string[]>([]);

    return {
        subscribe,
        submitGuess: () => update(g => {
            const word = get(currentGuess);

            if (g.length < MAX_GUESSES && word.length === WORD_LENGTH) {
                currentGuess.clear();
                return [...g, word];
            }

            return g;
        })
    }
};

export const guesses = createGuesses();
