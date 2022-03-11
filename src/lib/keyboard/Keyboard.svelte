<script lang="ts">
    import { evaluateKeyboardLetter } from "../functions/evaluation";
    import { gameState } from "../../stores";
    import KeyboardLetter from "./KeyboardLetter.svelte";

    const keyboard = [
        ['q','w','e','r','t','y','u','i','o','p'],
        ['a','s','d','f','g','h','j','k','l'],
        ['delete','z','x','c','v','b','n','m','enter']
    ];

    $: letterEvaluation = $gameState.guesses.reduce((acc, guess, guessIndex) => {
        guess.split('').forEach((letter, letterIndex) => {
            const letterEvaluation = $gameState.evaluations[guessIndex][letterIndex];

            acc[letter] = evaluateKeyboardLetter(letterEvaluation, acc[letter]);
        });

        return acc;
    }, {});
</script>

<div class="keyboard">
    {#each keyboard as row}
        <div class="keyboard-row">
            {#each row as letter}
                <KeyboardLetter {letter} evaluation={letterEvaluation[letter]} />
            {/each}
        </div>
    {/each}
</div>

<style>
    .keyboard {
        flex: 0;
    }

    .keyboard-row {
        display: flex;
        justify-content: center;
    }
</style>