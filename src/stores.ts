import { readable, writable } from 'svelte/store'
import { localStore } from './localStore.js'
import type { Guess } from './types/guess.types.js';

export const guesses = writable<Guess[]>([{
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
}]);

export const todaysWord = readable('bandit');
