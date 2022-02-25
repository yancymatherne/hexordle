import { MAX_GUESSES, WORD_LENGTH } from './lib/guess/constants';
import { GameStatus, type GameState } from './types/guess.types';
import { get, readable } from 'svelte/store'
import { localStore } from './localStore'
import { evaluateWord } from './lib/evaluation/evaluation';

export const todaysWord = readable('bandit');

const initialGameState: GameState = {
    day: 0,
    status: GameStatus.INCOMPLETE,
    currentGuess: '',
    guesses: [],
    evaluations: []
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
            let { currentGuess, evaluations, guesses, status } = $gameState;

            if (guesses.length < MAX_GUESSES && currentGuess.length === WORD_LENGTH) {
                const target = get(todaysWord);

                guesses = [...guesses, currentGuess];
                evaluations = [...evaluations, evaluateWord(currentGuess, target)];

                if (target === currentGuess) {
                    status = GameStatus.WIN;
                } else if (guesses.length === MAX_GUESSES) {
                    status = GameStatus.LOSE;
                }

                currentGuess = '';
            }

            return {
                ...$gameState,
                status,
                currentGuess,
                guesses,
                evaluations
            };
        })
    };
};

export const gameState = createGameState();

export const isStillPlaying = ($gameState?: GameState): boolean => $gameState && $gameState.status === GameStatus.INCOMPLETE;
