<script lang="ts">
	import { guesses } from '../stores';
    import Guess from '$lib/guess/Guess.svelte';
</script>

{#each $guesses as guess, index}
    <Guess {index} />
{/each}