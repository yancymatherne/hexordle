<script lang="ts">
import { getColumnAverages, getColumnDistributionMatrix } from "$lib/evaluation/evaluation";
import Guess from "$lib/guess/Guess.svelte";
import { stats } from "../../stores";

$: winPercentage = Math.trunc(($stats.gamesPlayed ? $stats.gamesWon / $stats.gamesPlayed : 0) * 100);
$: averages = getColumnAverages($stats.columnDistribution, $stats.gamesPlayed);
$: columnMatrix = getColumnDistributionMatrix(averages);

const getGuess = (index: number) => averages.map(column => (index === column - 1) ? column : ' ').join('');
</script>

<div class="game-board">
    {#each columnMatrix as evaluation, index}
        <Guess guess={getGuess(index)} {evaluation} submitted />
    {/each}
</div>


<div class="everything-else">
    <div class="description">
        Average number of guesses to find each column.
    </div>

    <div class="stats">
        <div>Games Won</div><div class="right">{$stats.gamesWon}</div>
        <div>Games Played</div><div class="right">{$stats.gamesPlayed}</div>
        <div>Win Percentage</div><div class="right">{winPercentage}%</div>
        <div>Current Streak</div><div class="right">{$stats.currentStreak}</div>
        <div>Max Streak</div><div class="right">{$stats.maxStreak}</div>
    </div>
</div>

<style>
    .stats {
        display: grid;
        grid-template-columns: auto 20%;
    }
    .everything-else {
        justify-content: start;
        padding: 0 5vw;
    }
    .description {
        text-align: center;
        padding: 1em 0 2em 0;
    }
    .right {
        justify-self: end;
    }
</style>