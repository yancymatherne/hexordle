<script lang="ts">
import { stats } from "../../stores";

$: winPercentage = Math.trunc(($stats.gamesPlayed ? $stats.gamesWon / $stats.gamesPlayed : 0) * 100);
</script>

<div class="stats">
    <div>Games Won</div><div>{$stats.gamesWon}</div>
    <div>Games Played</div><div>{$stats.gamesPlayed}</div>
    <div>Win Percentage</div><div>{winPercentage}%</div>
    <div>Current Streak</div><div>{$stats.currentStreak}</div>
    <div>Max Streak</div><div>{$stats.maxStreak}</div>
</div>

<style>
    .stats {
        display: grid;
        grid-template-columns: auto 20%;
    }
</style>