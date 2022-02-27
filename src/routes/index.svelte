<script lang="ts">
	import { gameState, isStillPlaying } from '../stores';
    import { MAX_GUESSES } from '$lib/guess/constants';
    import Guess from '$lib/guess/Guess.svelte';
    import { GameStatus } from '../types/guess.types';
    import Keyboard from '$lib/keyboard/Keyboard.svelte';
    import { handleKey } from '$lib/keyboard/keyboardActions';
    import { getBlocks, winMessage } from '$lib/evaluation/evaluation';
    import { Share2Icon } from 'svelte-feather-icons';

    $: currentGuessLength = isStillPlaying($gameState) ? 1 : 0;
    $: futureGuesses = Array(Math.max(0, MAX_GUESSES - currentGuessLength - $gameState.guesses.length)).fill('');

    const handleKeydown = (event: KeyboardEvent) => {
        const key = event.key.toLowerCase();
        console.log(event);

        handleKey(key);
	};

    const handleShare = async () => {
        const data = {
            text: `Hexordle ${$gameState.guesses.length}/${MAX_GUESSES}\n${getBlocks($gameState.evaluations)}`
        };

        if (navigator && navigator.share) {
            await navigator.share(data);
        } else if (navigator && navigator.clipboard) {
            await navigator.clipboard.writeText(data.text);
        }
    }
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

<div class="game-status">
    {#if $gameState.status === GameStatus.WIN}
        {winMessage[$gameState.guesses.length]}
    {:else if $gameState.status === GameStatus.LOSE}
        Dude, that sucks!
    {/if}
    {#if !isStillPlaying($gameState)}
        <button on:click={handleShare}>Share <Share2Icon size="1x" /></button>
    {/if}
</div>

<Keyboard />

<style>
    .game-status {
        text-align: center;
        padding: 10px;
        min-height: 40px;
    }

    button {
        background-color: green;
        color: white;
        border: none;
        border-radius: 4px;
        padding: 10px;
        display: inline-flex;
        align-items: center;
        column-gap: 5px;
    }
</style>
