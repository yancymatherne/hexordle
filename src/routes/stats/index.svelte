<script lang="ts">
	import {
		getColumnAverages,
		getColumnDistributionMatrix,
		getGuessesDistributionMatrix,
		getNormalizedGuessDistribution
	} from '$lib/functions/stats';
	import { WORD_LENGTH } from '$lib/guess/constants';
	import Guess from '$lib/guess/Guess.svelte';
	import ToggleButton from '$lib/toggle/ToggleButton.svelte';
	import { stats } from '../../stores';

	$: winPercentage = Math.trunc(
		($stats.gamesPlayed ? $stats.gamesWon / $stats.gamesPlayed : 0) * 100
	);
	$: columnAverages = getColumnAverages($stats.columnDistribution, $stats.gamesPlayed);
	$: normalizedGuesses = getNormalizedGuessDistribution($stats.guessDistribution);
	$: matrix =
		active === 'Column'
			? getColumnDistributionMatrix(columnAverages)
			: getGuessesDistributionMatrix(normalizedGuesses);

	const getText = (index: number, active: string) => {
		if (active === 'Column') {
			return columnAverages.map((column) => (index === column - 1 ? column : ' ')).join('');
		} else {
			return new Array(WORD_LENGTH)
				.fill(' ')
				.map((_, i) =>
					(i && i + 1) === normalizedGuesses[index] ? $stats.guessDistribution[index + 1] : ' '
				)
				.join('');
		}
	};

	const buttons = ['Column', 'Guess'];

	let active = buttons[0];

	const onClick = (label: string) => {
		active = label;
	};
</script>

<div class="game-board">
	{#each matrix as evaluation, index}
		<Guess guess={getText(index, active)} {evaluation} submitted />
	{/each}
</div>

<div class="bottom-section">
	<div class="description">
		{#if active === 'Column'}
			Average number of guesses to find each column.
		{:else}
			Number of guesses to find each solution.
		{/if}
		<ToggleButton {buttons} {active} {onClick} />
	</div>

	<div class="stats">
		<div>Games Won</div>
		<div class="right">{$stats.gamesWon}</div>
		<div>Games Played</div>
		<div class="right">{$stats.gamesPlayed}</div>
		<div>Win Percentage</div>
		<div class="right">{winPercentage}%</div>
		<div>Current Streak</div>
		<div class="right">{$stats.currentStreak}</div>
		<div>Max Streak</div>
		<div class="right">{$stats.maxStreak}</div>
	</div>
</div>

<style>
	.stats {
		display: grid;
		grid-template-columns: auto 20%;
	}
	.bottom-section {
		justify-content: start;
		padding: 0 5vw;
	}
	.description {
		text-align: center;
		padding: 0.5em 0 2em 0;
	}
	.right {
		justify-self: end;
	}
</style>
