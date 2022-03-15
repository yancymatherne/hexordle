<script lang="ts">
	import { fade } from 'svelte/transition';
	import { alerts } from '../../stores';
</script>

{#if $alerts.length > 0}
	<div class="container">
		{#each $alerts as { id, message } (id)}
			<div class="message" in:fade={{ duration: 500 }} out:fade={{ duration: 1000 }}>{message}</div>
		{/each}
	</div>
{/if}

<style>
	.container {
		position: fixed;
		top: 10vh;
		left: 0;
		width: 100%;
		z-index: 1000;
		display: flex;
		flex-direction: column;
		align-items: center;
	}
	.message {
		background-color: aliceblue;
		color: var(--game-board-color);
		padding: 1em;
		border-radius: 4px;
		margin-bottom: 1em;
	}
</style>
