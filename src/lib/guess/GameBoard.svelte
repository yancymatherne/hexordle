<script lang="ts">
	import { gameState, isStillPlaying } from '../../stores';
    import { MAX_GUESSES } from '$lib/guess/constants';
    import Guess from '$lib/guess/Guess.svelte';

    $: currentGuessLength = isStillPlaying($gameState) ? 1 : 0;
    $: futureGuesses = Array(Math.max(0, MAX_GUESSES - currentGuessLength - $gameState.guesses.length)).fill('');
</script>

<div class="game-board">
    {#each $gameState.guesses as guess, index}
        <Guess {guess} evaluation={$gameState.evaluations[index]} submitted />
    {/each}

    {#if $gameState.guesses.length < MAX_GUESSES && isStillPlaying($gameState)}
        <Guess guess={$gameState.currentGuess} />
    {/if}

    {#each futureGuesses as guess}
        <Guess {guess} disabled />
    {/each}
</div>


<style>
    .game-board {
        flex: 1;
        display: grid;
        grid-template-columns: repeat(6, 1fr);
        padding: 0 5vw;
        column-gap: 5px;
        row-gap: 5px;
    }
</style>