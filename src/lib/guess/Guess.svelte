<script lang="ts">
    import GuessLetter from '$lib/guess/GuessLetter.svelte';
    import { guesses } from '../../stores';
    import type { Guess } from 'src/types/guess.types';
    import { WORD_LENGTH } from './constants';

    export let guess: Guess = guesses.createGuess();
    $: ({ word, submitted } = guess);

    $: letters = word.padEnd(WORD_LENGTH, ' ').split('');
    console.log(letters);
</script>

<div class="guess">
    {#each letters as letter, position}
        <GuessLetter {letter} {position} {submitted} />
    {/each}
</div>

<style>
    .guess {
        display: flex;
        justify-content: center;
    }
</style>