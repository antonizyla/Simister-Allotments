<script>
	import Grid from 'svelte-grid-responsive';

	let currentYear = new Date().getFullYear();

	let footer = [
		{ text: 'Home', href: '/', external: false },
		{ text: 'Contact', href: '#contact', external: false },
		{ text: 'How we use Cookies', href: '/cookies', external: false },
		{ text: 'Github', href: 'https://www.github.com/antonizyla', external: true }
	];
</script>

<footer>
	<div class="links">
		{#each footer as link}
			{#if link.external}
				<a href={link.href} target="_balnk">{link.text}</a>
			{:else}
				<a href={link.href}>{link.text}</a>
			{/if}
		{/each}
	</div>
	<div class="info">
		<p>Site Developed And Designed By Antoni Zyla © {currentYear}</p>
	</div>
</footer>

<style>
	.info {
		display: flex;
		flex-direction: row;
		justify-content: center;
		padding: 2em;
		width: 80vw;
		margin: auto;
		border-top: 2px solid lightgray;
	}
	.links {
		margin: auto;
		max-width: 80vw;
		padding: 2em;
		display: flex;
		flex-direction: row;
		flex-wrap: wrap;
		gap: 2em;
		justify-content: center;
	}
</style>
