<script lang="ts">
	import { gameState, isStillPlaying } from '../stores';
    import { MAX_GUESSES } from '$lib/guess/constants';
    import Guess from '$lib/guess/Guess.svelte';

    $: currentGuessLength = isStillPlaying($gameState) ? 1 : 0;
    $: futureGuesses = Array(Math.max(0, MAX_GUESSES - currentGuessLength - $gameState.guesses.length)).fill('');

    const handleKeydown = (event: KeyboardEvent) => {
        const key = event.key.toLowerCase();
        console.log(event);

        if (key.length === 1 && 'a' <= key && key <= 'z') {
            gameState.addLetter(key);
        } else if (key === 'enter') {
            gameState.submitGuess();
        } else if (key === 'backspace' || key === 'delete') {
            gameState.removeLetter();
        }
	};
</script>

<svelte:window on:keydown={handleKeydown}/>

{#each $gameState.guesses as guess}
    <Guess {guess} submitted />
{/each}

{#if $gameState.guesses.length < MAX_GUESSES && isStillPlaying($gameState)}
    <Guess guess={$gameState.currentGuess} />
{/if}

{#each futureGuesses as guess}
    <Guess {guess} disabled />
{/each}

{#if $gameState.status === 'win'}
    Yay! 
{:else if $gameState.status === 'lose'}
    Aww!
{/if}