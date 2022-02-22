<script lang="ts">
	import { guesses, currentGuess } from '../stores';
    import { MAX_GUESSES } from '$lib/guess/constants';
    import Guess from '$lib/guess/Guess.svelte';

    $: futureGuesses = Array(Math.max(0, MAX_GUESSES - 1 - $guesses.length)).fill('');

    const handleKeydown = (event: KeyboardEvent) => {
        const key = event.key.toLowerCase();
        console.log(event);

        if (key.length === 1 && 'a' <= key && key <= 'z') {
            currentGuess.addLetter(key);
        } else if (key === 'enter') {
            guesses.submitGuess();
        } else if (key === 'backspace' || key === 'delete') {
            currentGuess.removeLetter();
        }
	};
</script>

<svelte:window on:keydown={handleKeydown}/>

{#each $guesses as guess}
    <Guess {guess} submitted />
{/each}

{#if $guesses.length < MAX_GUESSES}
    <Guess guess={$currentGuess} />
{/if}

{#each futureGuesses as guess}
    <Guess {guess} />
{/each}