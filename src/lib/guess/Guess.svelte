<script lang="ts">
    import GuessLetter from '$lib/guess/GuessLetter.svelte';
    import type { Guess } from 'src/types/guess.types';

    export let guess: Guess = { word: '', submitted: false, valid: false };
    $: ({ word, submitted } = guess);

    $: letters = word.padEnd(6, ' ').split('');
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