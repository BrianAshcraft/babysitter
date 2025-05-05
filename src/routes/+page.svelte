<script lang="ts">
	import { goto } from '$app/navigation';

	function navigateTo(path: string) {
		goto(path);
	}
</script>

<main>
	<h1>Welcome</h1>
	<div class="button-container">
		<button class="fun-btn" on:click={() => navigateTo('/fun')}>Fun</button>
		<button class="professional-btn" on:click={() => navigateTo('/professional')}
			>Professional</button
		>
	</div>
	<br />
	<br />
	<br />
	<p>
		<a
			href="https://www.flaticon.com/free-icons/mother"
			class="text-xs"
			target="_blank"
			title="mother icons">(favicon Mother icons created by Freepik - Flaticon)</a
		>
	</p>
</main>

<style>
	main {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		height: 100vh;
		text-align: center;
		padding: 0 1rem;
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
</style>
