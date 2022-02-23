import { MAX_GUESSES, WORD_LENGTH } from '$lib/guess/constants.js';
import type { GameState } from '$types/guess.types.js';
import { get, readable } from 'svelte/store'
import { localStore } from './localStore.js'

export const todaysWord = readable('bandit');

const initialGameState: GameState = {
    day: 0,
    status: 'incomplete',
    guesses: [],
    currentGuess: ''
};

const createGameState = () => {
    const { subscribe, update } = localStore('hexordle-game-state', initialGameState);

    return {
        subscribe,
        addLetter: (letter: string) => update($gameState => {
            let { currentGuess } = $gameState;

            if (currentGuess.length < 6) {
                currentGuess = currentGuess + letter;
            }

            return {
                ...$gameState,
                currentGuess
            };
        }),
        removeLetter: () => update($gameState => {
            return {
                ...$gameState,
                currentGuess: $gameState.currentGuess.slice(0, -1)
            };
        }),
        clear: () => update($gameState => {
            return {
                ...$gameState,
                currentGuess: ''
            };
        }),
        submitGuess: () => update($gameState => {
            let { currentGuess, guesses, status } = $gameState;

            if (guesses.length < MAX_GUESSES && currentGuess.length === WORD_LENGTH) {
                guesses = [...guesses, currentGuess];

                if (get(todaysWord) === currentGuess) {
                    status = 'win';
                } else if (guesses.length === MAX_GUESSES) {
                    status = 'lose';
                }

                currentGuess = '';
            }

            return {
                ...$gameState,
                currentGuess,
                guesses,
                status
            };
        })
    };
};

export const gameState = createGameState();

export const isStillPlaying = ($gameState?: GameState): boolean => $gameState && $gameState.status === 'incomplete';
