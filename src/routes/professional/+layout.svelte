<script>
	import MetaTags from '$lib/components/MetaTags.svelte';
	import { page } from '$app/stores';

	// Get the current route for meta tags
	$: route = $page.url.pathname;
</script>

<!-- Professional style-specific meta tags -->
<MetaTags style="professional" route={route} />

<main>
	<slot />
</main>
