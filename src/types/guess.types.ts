export interface Guess {
    word: string;
    submitted: boolean;
    valid: boolean;
};

export enum GameStatus {
    INCOMPLETE = 'incomplete',
    WIN = 'win',
    LOSS = 'loss'
}

export enum Evaluation {
    ABSENT = '-',
    CORRECT = 'c',
    MISPLACED = 'm'
}

export interface GameState {
    day: number;
    status: GameStatus;
    currentGuess: string;
    guesses: string[];
    evaluations: string[];
}

export interface Stats {
    gamesPlayed: number;
    gamesWon: number;
    currentStreak: number;
    maxStreak: number;
    guessDistribution: {
        1: number;
        2: number;
        3: number;
        4: number;
        5: number;
        6: number;
    };
}