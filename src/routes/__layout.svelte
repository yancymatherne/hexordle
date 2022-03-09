<script lang="ts">
	import Header from '$lib/header/Header.svelte';
	import { initializeGame, settings } from '../stores';
	import { onMount } from 'svelte';
	import '../app.css';

	onMount(() => {
		console.log('Mounting.');
		initializeGame();
	})

	$: dark = $settings.dark;
</script>

<div class="body" class:dark>
	<Header />

	<main>
		<slot />
	</main>

	<footer>
	</footer>
</div>

<style>
	main {
		flex: 1;
		display: flex;
		flex-direction: column;
		padding: 1rem;
		width: 100%;
		max-width: 480px;
		margin: 0 auto;
		box-sizing: border-box;
		height: 80vh;
	}

	footer {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		padding: 40px;
	}

	footer a {
		font-weight: bold;
	}

	@media (min-width: 480px) {
		footer {
			padding: 40px 0;
		}
	}
</style>
