<script lang="ts">
	import { guesses } from '../stores';
    import Guess from '$lib/guess/Guess.svelte';

    const handleKeydown = (event: KeyboardEvent) => {
        const key = event.key.toLowerCase();

        if (key.length === 1 && 'a' <= key && key <= 'z') {
            guesses.addLetter(key);
        }
	};
</script>

<svelte:window on:keydown={handleKeydown}/>

{#each $guesses as guess}
    <Guess {guess} />
{/each}