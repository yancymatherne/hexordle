<script lang="ts">
	import GuessLetter from '$lib/guess/GuessLetter.svelte';
	import { WORD_LENGTH } from './constants';

	export let guess = '';
	export let evaluation = '';
	export let submitted = false;
	export let disabled = false;

	$: letters = Array.from(guess.padEnd(WORD_LENGTH, ' '));
</script>

{#each letters as letter, position}
	<GuessLetter {letter} evaluation={evaluation[position]} {submitted} {disabled} />
{/each}
