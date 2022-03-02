<script lang="ts">
import { getColumnDistributionMatrix } from "$lib/evaluation/evaluation";
import Guess from "$lib/guess/Guess.svelte";

import { stats } from "../../stores";

$: winPercentage = Math.trunc(($stats.gamesPlayed ? $stats.gamesWon / $stats.gamesPlayed : 0) * 100);
$: columnMatrix = getColumnDistributionMatrix($stats.columnDistribution, $stats.gamesPlayed);
</script>

<div class="stats">
    <div>Games Won</div><div>{$stats.gamesWon}</div>
    <div>Games Played</div><div>{$stats.gamesPlayed}</div>
    <div>Win Percentage</div><div>{winPercentage}%</div>
    <div>Current Streak</div><div>{$stats.currentStreak}</div>
    <div>Max Streak</div><div>{$stats.maxStreak}</div>
</div>

{#each columnMatrix as evaluation, index}
    <Guess guess="" {evaluation} submitted />
{/each}

<style>
    .stats {
        display: grid;
        grid-template-columns: auto 20%;
    }
</style>