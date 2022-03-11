<script lang="ts">
	import { Evaluation } from '../../types/guess.types';
	import { handleKey } from './keyboardActions';

	export let letter: string;
	export let evaluation = '';

	$: wideButton = letter === 'enter' || letter === 'delete';
	$: match = evaluation === Evaluation.CORRECT;
	$: misplaced = evaluation === Evaluation.MISPLACED;
	$: absent = evaluation === Evaluation.ABSENT;

	let renderedLetter = letter;
	$: if (letter === 'enter') {
		renderedLetter = '\u23CE';
	} else if (letter === 'delete') {
		renderedLetter = '\u232B';
	} else {
		renderedLetter = letter;
	}

	const handle = () => handleKey(letter);
</script>

<button on:click={handle} class:wideButton class:match class:misplaced class:absent
	>{renderedLetter}</button
>

<style>
	* {
		display: inline-flex;
		align-items: center;
		justify-content: center;
		text-align: center;
		text-transform: uppercase;
		margin: 3px;
		padding: 5px;
		min-width: 30px;
		height: 40px;
		background-color: var(--disabled-color);
		border: none;
		border-radius: 4px;
		cursor: pointer;
		/* flex: 1; */
	}
	.wideButton {
		min-width: 45px;
		/* flex: 1.5; */
	}
	.match {
		background-color: var(--match-color);
	}
	.misplaced {
		background-color: var(--misplaced-color);
	}
	.absent {
		background-color: var(--submitted-color);
	}
</style>
