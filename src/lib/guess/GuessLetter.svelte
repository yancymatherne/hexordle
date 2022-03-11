<script lang="ts">
	import { scale } from 'svelte/transition';
	import { circOut } from 'svelte/easing';
	import { Evaluation } from '../../types/guess.types';

	export let letter = '';
	export let evaluation = '';
	export let submitted = false;
	export let disabled = false;

	$: match = evaluation === Evaluation.CORRECT;
	$: misplaced = evaluation === Evaluation.MISPLACED;
</script>

{#key letter}
	<div
		class="guess-letter"
		class:match
		class:misplaced
		class:submitted
		class:disabled
		in:scale={{ duration: 750, opacity: 0, start: 0, easing: circOut }}
	>
		{letter}
	</div>
{/key}

<style>
	.guess-letter {
		display: inline-flex;
		align-items: center;
		justify-content: center;
		text-align: center;
		text-transform: uppercase;
		padding: 5px;
		min-width: 15px;
		min-height: 24px;
		background-color: var(--current-color);
		font-weight: bold;
		color: var(--game-board-color);
	}
	.submitted {
		background-color: var(--submitted-color);
	}
	.disabled {
		background-color: var(--disabled-color);
		border-color: var(--disabled-border-color);
	}
	.submitted.match {
		background-color: var(--match-color);
	}
	.submitted.misplaced {
		background-color: var(--misplaced-color);
	}
</style>
