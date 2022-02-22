<script lang="ts">
	import { guesses } from '../stores';
    import Guess from '$lib/guess/Guess.svelte';

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

{#each $guesses as guess}
    <Guess {guess} />
{/each}