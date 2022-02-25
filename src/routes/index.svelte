<script lang="ts">
	import { gameState, isStillPlaying } from '../stores';
    import { MAX_GUESSES } from '$lib/guess/constants';
    import Guess from '$lib/guess/Guess.svelte';
    import { GameStatus } from '../types/guess.types';
    import Keyboard from '$lib/keyboard/Keyboard.svelte';
    import { handleKey } from '$lib/keyboard/keyboardActions';

    $: currentGuessLength = isStillPlaying($gameState) ? 1 : 0;
    $: futureGuesses = Array(Math.max(0, MAX_GUESSES - currentGuessLength - $gameState.guesses.length)).fill('');

    const handleKeydown = (event: KeyboardEvent) => {
        const key = event.key.toLowerCase();
        console.log(event);

        handleKey(key);
	};
</script>

<svelte:window on:keydown={handleKeydown}/>

{#each $gameState.guesses as guess, index}
    <Guess {guess} evaluation={$gameState.evaluations[index]} submitted />
{/each}

{#if $gameState.guesses.length < MAX_GUESSES && isStillPlaying($gameState)}
    <Guess guess={$gameState.currentGuess} />
{/if}

{#each futureGuesses as guess}
    <Guess {guess} disabled />
{/each}

{#if $gameState.status === GameStatus.WIN}
    Yay! 
{:else if $gameState.status === GameStatus.LOSE}
    Aww!
{/if}

<Keyboard />
