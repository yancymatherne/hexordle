<script lang="ts">
	import Header from '$lib/header/Header.svelte';
	import { initializeGame, settings } from '../stores';
	import { onMount } from 'svelte';
	import '../app.css';

	onMount(() => initializeGame());

	$: dark = $settings.dark;
</script>

<div class="body" class:dark>
	<Header />

	<main>
		<slot />
	</main>
</div>

<style>
	main {
		flex: 1;
		display: flex;
		flex-direction: column;
		padding: 1rem 0.5rem;
		width: 100%;
		max-width: 480px;
		margin: 0 auto;
		box-sizing: border-box;
		max-height: 80vh; /* account for browser bar in mobile */
	}
</style>
