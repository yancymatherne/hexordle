<script lang="ts">
    export let letter = '';
    export let position = -1;
    export let submitted = false;
    export let disabled = false;

    import { todaysWord } from '../../stores';
	import { scale } from 'svelte/transition';
	import { circOut } from 'svelte/easing';

    $: match = submitted && letter === $todaysWord[position];
    $: misplaced = submitted && !match && $todaysWord.includes(letter);
</script>

{#key letter}
<div class="guess-letter" class:match class:misplaced class:submitted class:disabled
    in:scale="{{duration: 750, opacity: 0, start: 0, easing: circOut}}">
    {letter}
</div>
{/key}

<style>
    .guess-letter {
        display: inline-flex;
        align-items: center;
        justify-content: center;
        text-align: center;
        text-transform: uppercase;
        margin: 3px;
        padding: 5px;
        width: 15px;
        height: 20px;
        border: 2px solid black;
    }
    .submitted {
        background-color: darkgray;
        border-color: black;
    }
    .disabled {
        background-color: lightgray;
        border-color: darkgray;
    }
    .submitted.match {
        background-color: lightgreen;
    }
    .submitted.misplaced {
        background-color: yellow;
    }
</style>