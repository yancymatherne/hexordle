<script lang="ts">
	import { scale } from 'svelte/transition';
	import { circOut } from 'svelte/easing';
    import { Evaluation } from '../../types/guess.types';

    export let letter = '';
    export let evaluation = '';
    export let submitted = false;
    export let disabled = false;

    $: match = evaluation === Evaluation.CORRECT;
    $: misplaced = evaluation === Evaluation.MISPLACED;
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