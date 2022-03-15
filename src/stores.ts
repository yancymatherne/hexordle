import { MAX_GUESSES, WORD_LENGTH } from './lib/guess/constants';
import { GameStatus, type GameState, type Alert, type Settings, type Stats } from './types/guess.types';
import { get, readable, writable } from 'svelte/store';
import { localStore } from './localStore';
import { evaluateWord } from './lib/functions/evaluation';
import { getTodaysWord, getTodaysWordIndex, isValidWord } from './lib/functions/word';
import { getColumnScores } from './lib/functions/stats';

const createAlertsStore = () => {
	const { subscribe, update } = writable<Alert[]>([]);
    let messageCounter = 0;

	return {
		subscribe,
		add: (message: string) => {
			update($alerts => [...$alerts, { id: messageCounter++, message }]);

			setTimeout(() => update($alerts => $alerts.slice(1)), 1500);
		}
	};
};

export const alerts = createAlertsStore();

export const todaysWord = readable(getTodaysWord());

const initialGameState: GameState = {
	day: -1,
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
	},
	columnDistribution: {
		1: 0,
		2: 0,
		3: 0,
		4: 0,
		5: 0,
		6: 0
	}
};

const createGameState = () => {
	const { subscribe, set, update } = localStore('hexordle-game-state', initialGameState);

	return {
		subscribe,
		update,
		addLetter: (letter: string) =>
			update(($gameState) => {
				let { currentGuess } = $gameState;

				if (currentGuess.length < 6) {
					currentGuess = currentGuess + letter;
				}

				return {
					...$gameState,
					currentGuess
				};
			}),
		removeLetter: () =>
			update(($gameState) => {
				return {
					...$gameState,
					currentGuess: $gameState.currentGuess.slice(0, -1)
				};
			}),
		initialize: (day: number) =>
			set({
				...initialGameState,
				day
			}),
		clear: () =>
			update(($gameState) => {
				return {
					...$gameState,
					currentGuess: ''
				};
			})
	};
};

export const gameState = createGameState();

export const isStillPlaying = ($gameState?: GameState): boolean =>
	$gameState && $gameState.status === GameStatus.INCOMPLETE;

const getColumnDistribution = (evaluations: string[], columnDistribution) =>
	getColumnScores(evaluations).reduce((acc, value, cIndex) => {
		const column = cIndex + 1;
		acc[column] = value + columnDistribution[column];
		return acc;
	}, {});

const createStats = () => {
	const { subscribe, update } = localStore('hexordle-stats', initialStats);

	return {
		subscribe,
		addWin: (guessNumber: number, evaluations: string[]) =>
			update(($stats) => ({
				...$stats,
				gamesWon: $stats.gamesWon + 1,
				gamesPlayed: $stats.gamesPlayed + 1,
				currentStreak: $stats.currentStreak + 1,
				maxStreak: Math.max($stats.maxStreak, $stats.currentStreak + 1),
				guessDistribution: {
					...$stats.guessDistribution,
					[guessNumber]: $stats.guessDistribution[guessNumber] + 1
				},
				columnDistribution: getColumnDistribution(evaluations, $stats.columnDistribution)
			})),
		addLoss: (evaluations: string[]) =>
			update(($stats) => ({
				...$stats,
				gamesPlayed: $stats.gamesPlayed + 1,
				currentStreak: 0,
				columnDistribution: getColumnDistribution(evaluations, $stats.columnDistribution)
			}))
	};
};

export const stats = createStats();

export const submitGuess = () => {
	let { currentGuess, evaluations, guesses, status } = get(gameState);

	if (currentGuess.length === WORD_LENGTH) {
		if (isValidWord(currentGuess)) {
			const target = get(todaysWord);

			guesses = [...guesses, currentGuess];
			evaluations = [...evaluations, evaluateWord(currentGuess, target)];

			if (target === currentGuess) {
				status = GameStatus.WIN;
				stats.addWin(guesses.length, evaluations);
			} else if (guesses.length === MAX_GUESSES) {
				status = GameStatus.LOSS;
				stats.addLoss(evaluations);
			}

			currentGuess = '';

			gameState.update(($gameState) => ({
				...$gameState,
				status,
				currentGuess,
				guesses,
				evaluations
			}));
		} else {
			alerts.add('Invalid word.');
		}
	}
};

export const initializeGame = () => {
	const todaysIndex = getTodaysWordIndex();
	let { day, evaluations, status } = get(gameState);

	if (day !== todaysIndex) {
		if (status === GameStatus.INCOMPLETE && day !== initialGameState.day) {
			// A previous day's unfinished game is still loaded.
			stats.addLoss(evaluations);
		}

		// Load up a new game for today.
		gameState.initialize(todaysIndex);
	}
};

const initialSettings = {
	dark: true
};

const createSettings = () => {
	const { subscribe, update } = localStore('hexordle-settings', initialSettings);

	return {
		subscribe,
		update: (newSettings: Partial<Settings>) =>
			update(($settings) => ({
				...$settings,
				...newSettings
			}))
	};
};

export const settings = createSettings();
