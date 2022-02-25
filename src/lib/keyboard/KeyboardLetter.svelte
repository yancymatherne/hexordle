<script lang="ts">
    import { Evaluation } from "../../types/guess.types";
    import { handleKey } from "./keyboardActions";

    export let letter: string;
    export let evaluation = '';


    $: match = evaluation === Evaluation.CORRECT;
    $: misplaced = evaluation === Evaluation.MISPLACED;
    $: absent = evaluation === Evaluation.ABSENT;

    const handle = () => handleKey(letter);
</script>

<button on:click={handle} class:match class:misplaced class:absent>{letter}</button>

<style>
    * {
        display: inline-flex;
        align-items: center;
        justify-content: center;
        text-align: center;
        text-transform: uppercase;
        margin: 3px;
        padding: 5px;
        min-width: 30px;
        height: 40px;
        background-color: lightgray;
        border: none;
        border-radius: 4px;
        /* flex: 1; */
    }
    .match {
        background-color: lightgreen;
    }
    .misplaced {
        background-color: yellow;
    }
    .absent {
        background-color: darkgrey;
    }
</style>