import { MAX_GUESSES, WORD_LENGTH } from './lib/guess/constants';
import { GameStatus, type GameState, type Stats } from './types/guess.types';
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

const initialStats: Stats = {
    gamesPlayed: 0,
    gamesWon: 0,
    currentStreak: 0,
    maxStreak: 0,
    guessDistribution: {
        1: 0,
        2: 0,
        3: 0,
        4: 0,
        5: 0,
        6: 0
    }
};

const createGameState = () => {
    const { subscribe, update } = localStore('hexordle-game-state', initialGameState);

    return {
        subscribe,
        update,
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
        })
    };
};

export const gameState = createGameState();

export const isStillPlaying = ($gameState?: GameState): boolean => $gameState && $gameState.status === GameStatus.INCOMPLETE;

const createStats = () => {
    const { subscribe, update } = localStore('hexordle-stats', initialStats);

    return {
        subscribe,
        addWin: (guessNumber: number) => update($stats => ({
            ...$stats,
            gamesWon: $stats.gamesWon + 1,
            gamesPlayed: $stats.gamesPlayed + 1,
            currentStreak: $stats.currentStreak + 1,
            maxStreak: Math.max($stats.maxStreak, $stats.currentStreak + 1),
            guessDistribution: {
                ...$stats.guessDistribution,
                [guessNumber]: $stats.guessDistribution[guessNumber] + 1
            }
        })),
        addLoss: () => update($stats => ({
            ...$stats,
            gamesPlayed: $stats.gamesPlayed + 1,
            currentStreak: 0
        }))
    };
};

export const stats = createStats();

export const submitGuess = () => {
    let { currentGuess, evaluations, guesses, status } = get(gameState);

    if (guesses.length < MAX_GUESSES && currentGuess.length === WORD_LENGTH) {
        const target = get(todaysWord);

        guesses = [...guesses, currentGuess];
        evaluations = [...evaluations, evaluateWord(currentGuess, target)];

        if (target === currentGuess) {
            status = GameStatus.WIN;
            stats.addWin(guesses.length);
        } else if (guesses.length === MAX_GUESSES) {
            status = GameStatus.LOSS;
            stats.addLoss();
        }

        currentGuess = '';
    }

    gameState.update($gameState => ({
        ...$gameState,
        status,
        currentGuess,
        guesses,
        evaluations
    }));
}
