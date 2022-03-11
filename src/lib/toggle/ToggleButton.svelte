<script lang="ts">
	export let buttons = [];
	export let active = '';
	export let onClick = (label: string) => {};
</script>

<div>
	{#each buttons as label}
		<button class:active={active === label} on:click={() => onClick(label)}>{label}</button>
	{/each}
</div>

<style>
	button {
		padding: 0.5em 1em;
		border-radius: 0;
		background-color: transparent;
		color: var(--text-color);
		cursor: pointer;
		border: 2px var(--submitted-color) solid;
		border-left: none;
	}
	button.active {
		background-color: var(--disabled-color);
		color: var(--text-color-light);
	}

	div {
		padding: 1em 0;
		text-align: center;
	}
	div :first-child {
		border-top-left-radius: 10px;
		border-bottom-left-radius: 10px;
		border-left: 2px var(--submitted-color) solid;
	}
	div :last-child {
		border-top-right-radius: 10px;
		border-bottom-right-radius: 10px;
	}
</style>
