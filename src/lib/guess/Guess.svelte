<script lang="ts">
    import { crossfade } from 'svelte/transition';
	import { quintOut } from 'svelte/easing';
    import GuessLetter from '$lib/guess/GuessLetter.svelte';
    import { WORD_LENGTH } from './constants';

    export let guess: string = '';
    export let submitted = false;
    export let disabled = false;

    $: letters = Array.from(guess.padEnd(WORD_LENGTH, ' '));
    console.log(letters);

    const [send, receive] = crossfade({
		duration:1500,
		easing: quintOut
	});
</script>

<div class="guess" in:send={{key: guess}} out:receive={{key: guess}}>
    {#each letters as letter, position}
        <GuessLetter {letter} {position} {submitted} {disabled} />
    {/each}
</div>

<style>
    .guess {
        display: flex;
        justify-content: center;
    }
</style>