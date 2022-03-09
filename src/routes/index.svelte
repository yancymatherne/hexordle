<script lang="ts">
	import { errorMessage, gameState, isStillPlaying } from '../stores';
    import { MAX_GUESSES } from '$lib/guess/constants';
    import Error from '$lib/error/Error.svelte';
    import { GameStatus } from '../types/guess.types';
    import Keyboard from '$lib/keyboard/Keyboard.svelte';
    import { handleKey } from '$lib/keyboard/keyboardActions';
    import { getBlocks, winMessage } from '$lib/evaluation/evaluation';
    import { Share2Icon } from 'svelte-feather-icons';
    import GameBoard from '$lib/guess/GameBoard.svelte';


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
            errorMessage.set('Copied to clipboard.');
        }
    }
</script>

<svelte:window on:keydown={handleKeydown}/>

<Error />

<GameBoard />

<div class="everything-else">
    <div class="game-status">
        {#if $gameState.status === GameStatus.WIN}
            {winMessage[$gameState.guesses.length]}
        {:else if $gameState.status === GameStatus.LOSS}
            Dude, that sucks!
        {/if}
        {#if !isStillPlaying($gameState)}
            <button on:click={handleShare}>Share <Share2Icon size="1x" /></button>
        {/if}
    </div>

    <Keyboard />
</div>

<style>
    .game-status {
        text-align: center;
        padding: 10px;
        min-height: 40px;
    }

    button {
        background-color: green;
        color: var(--pure-white);
        border: none;
        border-radius: 4px;
        padding: 10px;
        display: inline-flex;
        align-items: center;
        column-gap: 5px;
    }

    .game-status {
        flex: 0;
        color: var(--text-color);
    }
</style>
