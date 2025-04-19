<script>
	import '../app.css';
</script>

<nav class="bg-indigo-600 text-white p-4">
	<ul class="flex space-x-4 max-w-4xl mx-auto">
		<li><a href="/" class="hover:underline">Home</a></li>
		<li><a href="/about" class="hover:underline">About</a></li>
		<li><a href="/services" class="hover:underline">Services</a></li>
		<li><a href="/rates" class="hover:underline">Rates</a></li>
		<li><a href="/contact" class="hover:underline">Contact</a></li>
	</ul>
</nav>

<slot />
