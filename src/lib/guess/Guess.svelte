<script>
	export let index = -1;
	import { guesses } from '../../stores';
    import GuessLetter from '$lib/guess/GuessLetter.svelte';
    const guess = index >= 0 ? $guesses[index] : { word: '', submitted: false, valid: false };
    const letters = guess.word.split('');
</script>

<div class="guess">
    {#each letters as letter, position}
        <GuessLetter {letter} {position} />
    {/each}
</div>

<style>
    .guess {
        display: flex;
        justify-content: center;
    }
</style>