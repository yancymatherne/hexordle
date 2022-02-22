<script lang="ts">
    import GuessLetter from '$lib/guess/GuessLetter.svelte';
    import { WORD_LENGTH } from './constants';

    export let guess: string = '';
    export let submitted = false;

    $: letters = Array.from(guess.padEnd(WORD_LENGTH, ' '));
    console.log(letters);
</script>

<div class="guess">
    {#each letters as letter, position}
        <GuessLetter {letter} {position} {submitted} />
    {/each}
</div>

<style>
    .guess {
        display: flex;
        justify-content: center;
    }
</style>