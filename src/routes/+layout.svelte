<script>
	import '../app.css';
</script>

<div class="min-h-screen bg-gradient-to-b from-purple-50 to-pink-50 font-comic-sans">
	<header class="py-4 px-6 bg-gradient-to-r from-purple-500 via-pink-400 to-yellow-400 shadow-lg">
		<div class="max-w-6xl mx-auto">
			<div class="flex justify-between items-center">
				<a href="/" class="text-3xl font-bold text-white hover:scale-105 transition duration-300 flex items-center">
					<span class="text-yellow-300 mr-2">✨</span> Elmira's Playhouse <span class="text-yellow-300 ml-2">✨</span>
				</a>
				<nav>
					<ul class="flex space-x-1 md:space-x-6">
						<li><a href="/" class="nav-link bg-yellow-400">Home</a></li>
						<li><a href="/about" class="nav-link bg-pink-400">About Me</a></li>
						<li><a href="/services" class="nav-link bg-green-400">Fun Activities</a></li>
						<li><a href="/rates" class="nav-link bg-blue-400">Playtime Rates</a></li>
						<li><a href="/contact" class="nav-link bg-purple-400">Say Hello!</a></li>
					</ul>
				</nav>
			</div>
		</div>
	</header>

	<main class="py-6">
		<slot />
	</main>

	<footer class="bg-purple-600 text-white py-6 mt-12">
		<div class="max-w-4xl mx-auto text-center px-4">
			<p class="text-lg">© 2025 Elmira's Playhouse - Where Fun Never Ends!</p>
			<div class="mt-4 flex justify-center space-x-4">
				<a href="/contact" class="text-yellow-300 hover:text-yellow-100">Contact</a>
				<span class="text-purple-300">|</span>
				<a href="/services" class="text-yellow-300 hover:text-yellow-100">Activities</a>
				<span class="text-purple-300">|</span>
				<a href="/rates" class="text-yellow-300 hover:text-yellow-100">Rates</a>
			</div>
		</div>
	</footer>
</div>

<style>
	:global(body) {
		margin: 0;
		padding: 0;
		font-family: 'Comic Sans MS', 'Chalkboard SE', 'Comic Neue', sans-serif;
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
	
	@media (min-width: 768px) {
		.nav-link {
			font-size: 1.1rem;
			padding: 0.75rem 1.5rem;
		}
	}
</style>
