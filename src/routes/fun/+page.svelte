<script>
	import { onMount } from 'svelte';

	let isVisible = false;
	let currentImageIndex = 0;
	const totalImages = 5;

	// Define image paths
	const heroImages = [
		'/images/funhero/hero1.jpg',
		'/images/funhero/hero2.jpg',
		'/images/funhero/hero3.jpg',
		'/images/funhero/hero4.jpg',
		'/images/funhero/hero5.jpg'
	];

	// Preload images
	const imageObjects = [];

	onMount(() => {
		isVisible = true;

		// Preload images
		heroImages.forEach((src) => {
			const img = new Image();
			img.src = src;
			imageObjects.push(img);
		});

		// Set up image rotation for hero images
		const interval = setInterval(() => {
			currentImageIndex = (currentImageIndex + 1) % totalImages;
		}, 5000);

		return () => clearInterval(interval);
	});
</script>

<section class="hero-section">
	<div class="hero-image-container">
		{#each heroImages as src, i}
			<img
				{src}
				alt="Children having fun"
				class="hero-image {i === currentImageIndex ? 'active' : ''}"
			/>
		{/each}
		<div class="hero-overlay"></div>
	</div>

	<div class="hero-content">
		<h1 class="floating">Elmira's Playhouse!</h1>
		<p class="subtitle">Where imagination comes to life and fun never ends!</p>
		<div class="button-container">
			<a href="/fun/about" class="fun-button meet-button">Meet Elmira</a>
		</div>
	</div>
</section>

<div class="content-section">
	<div class="card-container">
		<div class="card welcome-card fade-in" class:visible={isVisible}>
			<h2 class="card-title welcome-title">Welcome Friends!</h2>
			<p class="card-text">
				Step into Elmira's magical playhouse where every day is an adventure! We sing, dance, create
				art, tell stories, and make memories that last forever!
			</p>
		</div>
		<div class="card fun-card fade-in" class:visible={isVisible} style="transition-delay: 0.2s;">
			<h2 class="card-title fun-title">Fun Guaranteed!</h2>
			<p class="card-text">
				At Elmira's Playhouse, we believe in learning through play! Our activities are designed to
				spark creativity, build confidence, and develop important skills - all while having tons of
				fun!
			</p>
		</div>
	</div>

	<div class="activities-section fade-in" class:visible={isVisible} style="transition-delay: 0.3s;">
		<h2 class="section-title activities-title">Magical Playhouse Activities!</h2>
		<p class="section-subtitle">Every day is an adventure at Elmira's Playhouse!</p>

		<div class="activities-grid">
			<div class="activity-card yellow-card">
				<div class="activity-icon">🎨</div>
				<h3 class="activity-title">Creative Art Studio</h3>
				<p class="activity-text">Finger painting, collages, clay modeling, and more! We'll create masterpieces while developing fine motor skills and expressing ourselves!</p>
			</div>
			
			<div class="activity-card blue-card">
				<div class="activity-icon">📚</div>
				<h3 class="activity-title">Storytime Magic</h3>
				<p class="activity-text">Interactive storytelling with funny voices, puppets, and props! We'll journey through magical worlds and spark imagination!</p>
			</div>
			
			<div class="activity-card green-card">
				<div class="activity-icon">🌿</div>
				<h3 class="activity-title">Nature Explorers</h3>
				<p class="activity-text">Outdoor adventures, scavenger hunts, and nature crafts! We'll discover the wonders of the natural world together!</p>
			</div>

			<div class="activity-card pink-card">
				<div class="activity-icon">🎵</div>
				<h3 class="activity-title">Music & Movement</h3>
				<p class="activity-text">Dance parties, musical games, and sing-alongs! We'll shake, wiggle, and groove while developing coordination and rhythm!</p>
			</div>
			
			<div class="activity-card purple-card">
				<div class="activity-icon">🧩</div>
				<h3 class="activity-title">Brain Boosters</h3>
				<p class="activity-text">Fun puzzles, games, and activities that strengthen problem-solving skills and critical thinking while having a blast!</p>
			</div>
			
			<div class="activity-card red-card">
				<div class="activity-icon">🍎</div>
				<h3 class="activity-title">Snack Adventures</h3>
				<p class="activity-text">Creating fun, healthy snacks together! We'll learn about nutrition while making delicious treats that fuel our playtime!</p>
			</div>
		</div>
	</div>

	<div class="cta-section fade-in" class:visible={isVisible} style="transition-delay: 0.5s;">
		<h2 class="cta-title">Come Play With Us!</h2>
		<div class="cta-button-container">
			<a href="/fun/contact" class="book-button">Book Your Playdate!</a>
		</div>
	</div>
</div>

<style>
	.hero-section {
		padding: 3rem 1.5rem;
		margin: 1.5rem 1rem;
		border-radius: 20px;
		box-shadow: 0 10px 25px rgba(124, 58, 237, 0.2);
		position: relative;
		overflow: hidden;
	}

	.hero-image-container {
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		z-index: 0;
		overflow: hidden;
		border-radius: 20px;
	}

	.hero-image {
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		object-fit: cover;
		opacity: 0;
		transition: opacity 1.5s ease-in-out;
	}

	.hero-image.active {
		opacity: 1;
	}

	.hero-overlay {
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		background: linear-gradient(
			135deg,
			rgba(255, 156, 215, 0.85) 0%,
			rgba(179, 136, 255, 0.85) 50%,
			rgba(142, 209, 252, 0.85) 100%
		);
		z-index: 1;
	}

	.hero-section::before {
		content: '';
		position: absolute;
		top: -50px;
		left: -50px;
		width: 100px;
		height: 100px;
		border-radius: 50%;
		background: rgba(255, 255, 255, 0.2);
		z-index: 3;
	}

	.hero-section::after {
		content: '';
		position: absolute;
		bottom: -30px;
		right: -30px;
		width: 80px;
		height: 80px;
		border-radius: 50%;
		background: rgba(255, 255, 255, 0.15);
		z-index: 3;
	}

	.hero-content {
		position: relative;
		z-index: 2;
		max-width: 800px;
		margin: 0 auto;
		text-align: center;
	}

	h1 {
		font-size: 3.5rem;
		font-weight: 800;
		margin-bottom: 1rem;
		color: #5b21b6;
		text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.1);
		font-family: 'Comic Sans MS', cursive, sans-serif;
		letter-spacing: -0.5px;
	}

	.subtitle {
		font-size: 1.5rem;
		margin-bottom: 2rem;
		color: #be185d;
		font-weight: 600;
		font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
	}

	.button-container {
		display: flex;
		justify-content: center;
		gap: 1.5rem;
		flex-wrap: wrap;
	}

	.fun-button {
		display: inline-block;
		padding: 0.75rem 1.5rem;
		border-radius: 30px;
		font-weight: bold;
		text-decoration: none;
		transition: all 0.3s ease;
		position: relative;
		overflow: hidden;
		z-index: 1;
		box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
	}

	.fun-button::before {
		content: '';
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		background: rgba(255, 255, 255, 0.1);
		z-index: -1;
		transform: translateY(100%);
		transition: transform 0.3s ease;
	}

	.fun-button:hover {
		transform: translateY(-5px);
		box-shadow: 0 7px 20px rgba(0, 0, 0, 0.15);
	}

	.fun-button:hover::before {
		transform: translateY(0);
	}

	.meet-button {
		background-color: #fbbf24;
		color: #4c1d95;
	}

	.content-section {
		max-width: 1000px;
		margin: 0 auto;
		padding: 2rem 1rem;
	}

	.card-container {
		display: grid;
		grid-template-columns: 1fr;
		gap: 2rem;
		margin-bottom: 3rem;
	}

	@media (min-width: 768px) {
		.card-container {
			grid-template-columns: 1fr 1fr;
		}
	}

	.card {
		padding: 2rem;
		border-radius: 15px;
		transition: all 0.3s ease;
		position: relative;
		overflow: hidden;
	}

	.card:hover {
		transform: translateY(-8px);
		box-shadow: 0 15px 30px rgba(0, 0, 0, 0.1);
	}

	.card::before {
		content: '';
		position: absolute;
		top: -10px;
		left: -10px;
		width: 40px;
		height: 40px;
		border-radius: 50%;
		opacity: 0.5;
		transition: all 0.3s ease;
	}

	.card:hover::before {
		transform: scale(3);
		opacity: 0.1;
	}

	.welcome-card {
		background-color: #fce7f3;
		box-shadow: 0 5px 15px rgba(219, 39, 119, 0.1);
	}

	.welcome-card::before {
		background-color: #f472b6;
	}

	.fun-card {
		background-color: #e0f2fe;
		box-shadow: 0 5px 15px rgba(59, 130, 246, 0.1);
	}

	.fun-card::before {
		background-color: #60a5fa;
	}

	.card-title {
		font-size: 2rem;
		font-weight: 700;
		margin-bottom: 1rem;
		text-align: center;
		position: relative;
		display: inline-block;
		left: 50%;
		transform: translateX(-50%);
	}

	.welcome-title {
		color: #db2777;
	}

	.fun-title {
		color: #2563eb;
	}

	.card-text {
		font-size: 1.1rem;
		line-height: 1.6;
		color: #6d28d9;
		text-align: center;
	}

	/* Activities Section Styles */
	.activities-section {
		margin-top: 3rem;
		margin-bottom: 3rem;
		text-align: center;
	}

	.section-title {
		font-size: 2.5rem;
		font-weight: 800;
		margin-bottom: 0.5rem;
		color: #7c3aed;
		position: relative;
		display: inline-block;
	}

	.activities-title {
		color: #7c3aed;
	}

	.section-title::after {
		content: '';
		position: absolute;
		bottom: -10px;
		left: 50%;
		transform: translateX(-50%);
		width: 80px;
		height: 3px;
		background: linear-gradient(90deg, #d946ef, #8b5cf6);
		border-radius: 3px;
	}

	.section-subtitle {
		font-size: 1.2rem;
		color: #be185d;
		margin-bottom: 2.5rem;
		margin-top: 1.5rem;
	}

	.activities-grid {
		display: grid;
		grid-template-columns: 1fr;
		gap: 1.5rem;
		margin: 0 auto;
		max-width: 1200px;
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
		box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
	}

	.activity-card:hover {
		transform: translateY(-8px);
		box-shadow: 0 15px 30px rgba(0, 0, 0, 0.15);
	}

	.yellow-card {
		background-color: #fff8e1;
		border: 2px solid #ffd54f;
	}

	.blue-card {
		background-color: #e3f2fd;
		border: 2px solid #90caf9;
	}

	.green-card {
		background-color: #e8f5e9;
		border: 2px solid #a5d6a7;
	}

	.pink-card {
		background-color: #fce4ec;
		border: 2px solid #f48fb1;
	}

	.purple-card {
		background-color: #f3e5f5;
		border: 2px solid #ce93d8;
	}

	.red-card {
		background-color: #ffebee;
		border: 2px solid #ef9a9a;
	}

	.activity-icon {
		font-size: 3rem;
		margin-bottom: 1rem;
	}

	.activity-title {
		font-size: 1.5rem;
		font-weight: 700;
		color: #6d28d9;
		margin-bottom: 0.75rem;
	}

	.activity-text {
		font-size: 1rem;
		line-height: 1.5;
		color: #4b5563;
	}

	.cta-section {
		text-align: center;
		margin-top: 3rem;
		padding: 2rem;
		position: relative;
	}

	.cta-title {
		font-size: 2.5rem;
		font-weight: 800;
		color: #7c3aed;
		margin-bottom: 1rem;
		position: relative;
		display: inline-block;
	}

	.cta-button-container {
		margin-top: 1.5rem;
	}

	.cta-title::after {
		content: '';
		position: absolute;
		bottom: -10px;
		left: 50%;
		transform: translateX(-50%);
		width: 80px;
		height: 3px;
		background: linear-gradient(90deg, #d946ef, #8b5cf6);
		border-radius: 3px;
	}

	.book-button {
		display: inline-block;
		background: linear-gradient(135deg, #8b5cf6 0%, #6d28d9 100%);
		color: white;
		font-size: 1.25rem;
		font-weight: 700;
		padding: 1rem 2rem;
		border-radius: 50px;
		text-decoration: none;
		box-shadow: 0 10px 25px rgba(124, 58, 237, 0.3);
		transition: all 0.3s ease;
		position: relative;
		overflow: hidden;
	}

	.book-button::before {
		content: '';
		position: absolute;
		top: 0;
		left: -100%;
		width: 100%;
		height: 100%;
		background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent);
		transition: all 0.5s ease;
	}

	.book-button:hover {
		transform: translateY(-5px);
		box-shadow: 0 15px 30px rgba(124, 58, 237, 0.4);
	}

	.book-button:hover::before {
		left: 100%;
	}

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

	@keyframes float {
		0% {
			transform: translateY(0px);
		}
		50% {
			transform: translateY(-10px);
		}
		100% {
			transform: translateY(0px);
		}
	}

	.floating {
		animation: float 4s ease-in-out infinite;
	}
</style>
