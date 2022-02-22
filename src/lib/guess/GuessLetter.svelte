<script lang="ts">
    export let letter = '';
    export let position = -1;

    import { todaysWord } from '../../stores';

    const match = letter === $todaysWord[position];
    const misplaced = !match && $todaysWord.includes(letter);
</script>

<div class="guess-letter" class:match class:misplaced>
    {letter}
</div>

<style>
    .guess-letter {
        text-align: center;
        text-transform: uppercase;
        margin: 5px;
        padding: 5px;
        width: 15px;
        border: 3px solid black;
    }
    .match {
        background-color: lightgreen;
    }
    .misplaced {
        background-color: yellow;
    }
</style>