<script lang="ts">
	import { goto } from '$app/navigation';
	import { onMount } from 'svelte';

	function navigateTo(path: string) {
		goto(path);
	}

	let isVisible = false;

	onMount(() => {
		isVisible = true;
	});
</script>

<main>
	<section class="welcome-section">
		<h1>Welcome</h1>
		<div class="button-container">
			<button class="fun-btn" on:click={() => navigateTo('/fun')}>Fun</button>
			<button class="professional-btn" on:click={() => navigateTo('/professional')}
				>Professional</button
			>
		</div>
	</section>

	<p class="attribution">
		<a
			href="https://www.flaticon.com/free-icons/mother"
			class="text-xs"
			target="_blank"
			title="mother icons">(favicon Mother icon created by Freepik - Flaticon)</a
		>
	</p>
</main>

<style>
	main {
		display: flex;
		flex-direction: column;
		align-items: center;
		text-align: center;
		padding: 2rem 1rem;
		min-height: 100vh;
		overflow-x: hidden;
	}

	.welcome-section {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		min-height: 50vh;
		width: 100%;
		margin-bottom: 2rem;
	}

	h1 {
		margin-bottom: 2rem;
		font-size: 2.5rem;
		color: #333;
	}

	.button-container {
		display: flex;
		gap: 1.5rem;
		justify-content: center;
		flex-wrap: wrap;
	}

	button {
		padding: 0.8rem 1.5rem;
		font-size: 1.2rem;
		border: none;
		border-radius: 8px;
		cursor: pointer;
		transition:
			transform 0.2s,
			box-shadow 0.2s;
		font-weight: 600;
	}

	button:hover {
		transform: translateY(-3px);
		box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
	}

	button:active {
		transform: translateY(-1px);
	}

	.fun-btn {
		background-color: #ff6b6b;
		color: white;
	}

	.professional-btn {
		background-color: #4a90e2;
		color: white;
	}

	/* Activities Section Styles */
	.activities-section {
		width: 100%;
		max-width: 1200px;
		margin: 2rem auto;
		padding: 2rem 1rem;
		border-radius: 20px;
		background: linear-gradient(
			135deg,
			rgba(255, 156, 215, 0.15) 0%,
			rgba(179, 136, 255, 0.15) 50%,
			rgba(142, 209, 252, 0.15) 100%
		);
		box-shadow: 0 10px 25px rgba(124, 58, 237, 0.2);
	}

	.activities-container {
		width: 100%;
	}

	.activities-header {
		text-align: center;
		margin-bottom: 2.5rem;
	}

	.activities-header h2 {
		font-size: 2.5rem;
		font-weight: 800;
		color: #5b21b6;
		margin-bottom: 0.5rem;
		font-family: 'Comic Sans MS', cursive, sans-serif;
	}

	.activities-subtitle {
		font-size: 1.2rem;
		color: #be185d;
		font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
	}

	.activities-grid {
		display: grid;
		grid-template-columns: repeat(1, 1fr);
		gap: 1.5rem;
		margin-bottom: 2rem;
	}

	@media (min-width: 640px) {
		.activities-grid {
			grid-template-columns: repeat(2, 1fr);
		}
	}

	@media (min-width: 1024px) {
		.activities-grid {
			grid-template-columns: repeat(3, 1fr);
		}
	}

	.activity-card {
		padding: 1.5rem;
		border-radius: 15px;
		transition: all 0.3s ease;
		text-align: center;
		box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
	}

	.activity-card:hover {
		transform: translateY(-8px);
		box-shadow: 0 15px 30px rgba(0, 0, 0, 0.15);
	}

	.bg-yellow {
		background-color: #fff8e1;
		border: 2px solid #ffd54f;
	}

	.bg-blue {
		background-color: #e3f2fd;
		border: 2px solid #90caf9;
	}

	.bg-green {
		background-color: #e8f5e9;
		border: 2px solid #a5d6a7;
	}

	.activity-icon {
		font-size: 3rem;
		margin-bottom: 1rem;
	}

	.activity-card h3 {
		font-size: 1.5rem;
		font-weight: 700;
		color: #6d28d9;
		margin-bottom: 0.75rem;
	}

	.activity-card p {
		font-size: 1rem;
		line-height: 1.5;
		color: #4b5563;
	}

	.learn-more-container {
		text-align: center;
		margin-top: 2rem;
	}

	.learn-more-btn {
		display: inline-block;
		background: linear-gradient(135deg, #8b5cf6 0%, #6d28d9 100%);
		color: white;
		font-size: 1.1rem;
		font-weight: 700;
		padding: 0.75rem 1.5rem;
		border-radius: 50px;
		text-decoration: none;
		box-shadow: 0 5px 15px rgba(124, 58, 237, 0.3);
		transition: all 0.3s ease;
	}

	.learn-more-btn:hover {
		transform: translateY(-3px);
		box-shadow: 0 8px 20px rgba(124, 58, 237, 0.4);
	}

	.attribution {
		margin-top: 2rem;
		font-size: 0.75rem;
		color: #6b7280;
	}

	/* Animation styles */
	.fade-in {
		opacity: 0;
		transform: translateY(20px);
		transition:
			opacity 0.8s ease,
			transform 0.8s ease;
	}

	.visible {
		opacity: 1;
		transform: translateY(0);
	}
</style>
