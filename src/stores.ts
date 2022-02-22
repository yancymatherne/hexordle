import { readable, writable } from 'svelte/store'
import { localStore } from './localStore.js'
import type { Guess } from './types/guess.types.js';

const createGuesses = () => {
    const { subscribe, update } = writable<Guess[]>([{
        word: 'needed',
        submitted: true,
        valid: true
    }, {
        word: 'wonder',
        submitted: true,
        valid: true
    }, {
        word: 'wander',
        submitted: true,
        valid: true
    }, {
        word: 'tan',
        submitted: false,
        valid: true
    }]);

    return {
        subscribe,
        addLetter: (letter: string) => 
            update(g => {
                let lastGuess = g.pop();

                if (!lastGuess.submitted && lastGuess.word.length < 6) {
                    lastGuess = {
                        ...lastGuess,
                        word: lastGuess.word + letter
                    }
                }

                return [...g, lastGuess];
            })
        ,
        submitGuess: () => {
            // todo
        }
    }
};

export const guesses = createGuesses();

export const todaysWord = readable('bandit');
