<script>
	import '../../app.css';
	import MetaTags from '$lib/components/MetaTags.svelte';
	import { page } from '$app/stores';

	let mobileMenuOpen = false;

	function toggleMobileMenu() {
		mobileMenuOpen = !mobileMenuOpen;
	}

	function closeMobileMenu() {
		mobileMenuOpen = false;
	}

	// Get the current route for meta tags
	$: route = $page.url.pathname;
</script>

<!-- Fun style-specific meta tags -->
<MetaTags style="fun" route={route} />

<div class="min-h-screen bg-gradient-to-b from-purple-50 to-pink-50 font-comic-sans">
	<header class="py-4 px-6 bg-gradient-to-r from-purple-500 via-pink-400 to-yellow-400 shadow-lg">
		<div class="max-w-6xl mx-auto">
			<div class="flex justify-between items-center">
				<a href="/fun" class="text-3xl font-bold text-white hover:scale-105 transition duration-300 flex items-center">
					<span class="text-yellow-300 mr-2">✨</span> Elmira's Playhouse <span class="text-yellow-300 ml-2">✨</span>
				</a>

				<!-- Mobile burger button -->
				<button
					class="burger-button"
					on:click={toggleMobileMenu}
					aria-label="Toggle navigation menu"
				>
					<div class="burger-line {mobileMenuOpen ? 'line1-active' : ''}"></div>
					<div class="burger-line {mobileMenuOpen ? 'line2-active' : ''}"></div>
					<div class="burger-line {mobileMenuOpen ? 'line3-active' : ''}"></div>
				</button>

				<!-- Desktop Navigation -->
				<nav class="hidden md:block">
					<ul class="flex space-x-6">
						<li><a href="/fun" class="nav-link bg-yellow-400">Home</a></li>
						<li><a href="/fun/about" class="nav-link bg-pink-400">About Me</a></li>
						<li><a href="/fun/rates" class="nav-link bg-blue-400">Playtime Rates</a></li>
						<li><a href="/fun/contact" class="nav-link bg-purple-400">Say Hello!</a></li>
					</ul>
				</nav>
			</div>

			<!-- Mobile Navigation Menu -->
		</div>
		<div class="mobile-menu-container {mobileMenuOpen ? 'mobile-menu-open' : ''}">
			<nav>
				<ul class="mobile-nav-list">
					<li><a href="/fun" class="mobile-nav-link bg-yellow-400" on:click={closeMobileMenu}>Home</a></li>
					<li><a href="/fun/about" class="mobile-nav-link bg-pink-400" on:click={closeMobileMenu}>About Me</a></li>
					<li><a href="/fun/rates" class="mobile-nav-link bg-blue-400" on:click={closeMobileMenu}>Playtime Rates</a></li>
					<li><a href="/fun/contact" class="mobile-nav-link bg-purple-400" on:click={closeMobileMenu}>Say Hello!</a></li>
				</ul>
			</nav>
		</div>
	</header>

	<main class="py-6">
		<slot />
	</main>

	<footer class="bg-purple-600 text-white py-6 mt-12">
		<div class="max-w-4xl mx-auto text-center px-4">
			<p class="text-lg">© 2025 Elmira's Playhouse - Where Fun Never Ends!</p>
			<div class="mt-4 flex justify-center space-x-4">
				<a href="/fun/contact" class="text-yellow-300 hover:text-yellow-100">Contact</a>
				<span class="text-purple-300">|</span>
				<a href="/fun/rates" class="text-yellow-300 hover:text-yellow-100">Rates</a>
			</div>
		</div>
	</footer>
</div>

<style>
	:global(body) {
		margin: 0;
		padding: 0;
		font-family: 'Comic Sans MS', 'Chalkboard SE', 'Comic Neue', sans-serif;
		overflow-x: hidden;
	}

	.nav-link {
		display: inline-block;
		padding: 0.5rem 1rem;
		border-radius: 9999px;
		color: #4c1d95;
		font-weight: bold;
		transition: all 0.3s;
		text-decoration: none;
		font-size: 0.9rem;
		box-shadow: 0 2px 4px rgba(0,0,0,0.1);
	}

	.nav-link:hover {
		transform: scale(1.1) rotate(-2deg);
		box-shadow: 0 4px 8px rgba(0,0,0,0.15);
	}

	/* Burger button styles */
	.burger-button {
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		width: 2.5rem;
		height: 2rem;
		background: transparent;
		border: none;
		cursor: pointer;
		padding: 0;
		z-index: 20;
	}

	.burger-line {
		width: 100%;
		height: 0.35rem;
		background: white;
		border-radius: 0.5rem;
		transition: all 0.3s ease;
		position: relative;
	}

	.burger-line:nth-child(1) {
		background: #FFEB3B; /* Yellow */
	}

	.burger-line:nth-child(2) {
		background: #FF4081; /* Pink */
	}

	.burger-line:nth-child(3) {
		background: #9C27B0; /* Purple */
	}

	/* Burger animation */
	.line1-active {
		transform: translateY(0.8rem) rotate(45deg);
	}

	.line2-active {
		opacity: 0;
		transform: translateX(-2rem);
	}

	.line3-active {
		transform: translateY(-0.8rem) rotate(-45deg);
	}

	/* Mobile menu styles */
	.mobile-menu-container {
		position: fixed;
		top: 6.5rem; /* Adjust based on your header height */
		left: 0;
		right: 0;
		background: linear-gradient(135deg, #9C27B0, #FF4081, #FFEB3B);
		padding: 0;
		max-height: 0;
		overflow: hidden;
		transition: all 0.4s ease;
		z-index: 50;
		box-shadow: 0 4px 12px rgba(0,0,0,0.1);
		opacity: 0;
		visibility: hidden;
	}

	.mobile-menu-open {
		max-height: calc(100vh - 4.5rem);
		padding: 1.5rem;
		opacity: 1;
		visibility: visible;
	}

	.mobile-nav-list {
		display: flex;
		flex-direction: column;
		gap: 1rem;
		list-style: none;
		padding: 0;
		margin: 0;
	}

	.mobile-nav-link {
		display: block;
		padding: 1rem;
		border-radius: 1rem;
		color: #4c1d95;
		font-weight: bold;
		text-decoration: none;
		text-align: center;
		font-size: 1.2rem;
		box-shadow: 0 4px 8px rgba(0,0,0,0.15);
		transition: all 0.3s;
	}

	.mobile-nav-link:active {
		transform: scale(0.95);
	}

	@media (min-width: 768px) {
		.nav-link {
			font-size: 1.1rem;
			padding: 0.75rem 1.5rem;
		}

		.burger-button {
			display: none;
		}

		.mobile-menu-container {
			display: none;
		}
	}
</style>
