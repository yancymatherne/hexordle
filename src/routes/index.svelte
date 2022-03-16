<script lang="ts">
	import { alerts, gameState, isStillPlaying } from '../stores';
	import { MAX_GUESSES } from '$lib/guess/constants';
	import Alerts from '$lib/alerts/Alerts.svelte';
	import { GameStatus } from '../types/guess.types';
	import Keyboard from '$lib/keyboard/Keyboard.svelte';
	import { handleKey } from '$lib/keyboard/keyboardActions';
	import { getBlocks, winMessage } from '$lib/functions/evaluation';
	import { Share2Icon } from 'svelte-feather-icons';
	import GameBoard from '$lib/guess/GameBoard.svelte';

	const handleKeydown = (event: KeyboardEvent) => {
		const key = event.key.toLowerCase();

		if (!event.ctrlKey && !event.metaKey && !event.altKey) {
			handleKey(key);
		}
	};

	const handleShare = async () => {
		const data = {
			text: `Hexordle ${$gameState.guesses.length}/${MAX_GUESSES}\n${getBlocks(
				$gameState.evaluations
			)}`
		};

		if (navigator && navigator.share) {
			await navigator.share(data);
		} else if (navigator && navigator.clipboard) {
			await navigator.clipboard.writeText(data.text);
			alerts.add('Copied to clipboard.');
		}
	};
</script>

<svelte:window on:keydown={handleKeydown} />

<Alerts />

<GameBoard />

<div class="bottom-section">
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
		flex: 0;
		color: var(--text-color);
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
		cursor: pointer;
	}
</style>
