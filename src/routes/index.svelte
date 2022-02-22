<script lang="ts">
	import { guesses } from '../stores';
    import Guess from '$lib/guess/Guess.svelte';
    import { MAX_GUESSES } from '$lib/guess/constants';

    $: allGuesses = Array.from({...$guesses, length: MAX_GUESSES})
        .fill(guesses.createGuess(), $guesses.length);

    $: console.log(allGuesses);

    const handleKeydown = (event: KeyboardEvent) => {
        const key = event.key.toLowerCase();
        console.log(event);

        if (key.length === 1 && 'a' <= key && key <= 'z') {
            guesses.addLetter(key);
        } else if (key === 'enter') {
            guesses.submitGuess();
        } else if (key === 'backspace' || key === 'delete') {
            guesses.removeLetter();
        }
	};
</script>

<svelte:window on:keydown={handleKeydown}/>

{#each allGuesses as guess}
    <Guess {guess} />
{/each}