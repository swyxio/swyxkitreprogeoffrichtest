<script>
	import '../tailwind.css';
	import 'prismjs/themes/prism-tomorrow.css';
</script>

<nav>
	<a href="/">Home</a>
	<a href="/md">mdsvex page</a>
</nav>

<slot />

<style>
	nav {
		display: flex;
		gap: 1rem;
	}
</style>
