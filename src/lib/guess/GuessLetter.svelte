<script lang="ts">
    export let letter = '';
    export let position = -1;
    export let submitted = false;

    import { todaysWord } from '../../stores';

    $: match = submitted && letter === $todaysWord[position];
    $: misplaced = submitted && !match && $todaysWord.includes(letter);
</script>

<div class="guess-letter" class:match class:misplaced class:submitted>
    {letter}
</div>

<style>
    .guess-letter {
        display: inline-flex;
        align-items: center;
        justify-content: center;
        text-align: center;
        text-transform: uppercase;
        margin: 5px;
        padding: 5px;
        width: 15px;
        height: 20px;
        border: 3px solid black;
    }
    .submitted {
        background-color: lightgray;
    }
    .submitted.match {
        background-color: lightgreen;
    }
    .submitted.misplaced {
        background-color: yellow;
    }
</style>