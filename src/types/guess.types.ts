export interface Guess {
    word: string;
    submitted: boolean;
    valid: boolean;
};

export interface GameState {
    day: number;
    status: 'incomplete' | 'win' | 'lose';
    guesses: string[];
    currentGuess: string;
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