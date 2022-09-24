<script>
	import { object_without_properties } from "svelte/internal";



	let currentYear = new Date().getFullYear();

	// import {contents} from '../lib/contents.js'

	export let data

	let links = data.navigation.links.concat(data.footer.links)
	 let disclaimer = data.footer.disclaimer

	

</script>

<footer>
	<div class="links">
		{#each links as link}
			{#if link.type === 'external'}
				<a href={link.href} target="_balnk">{link.label}</a>
			{:else}
				<a href={link.href}>{link.label}</a>
			{/if}
		{/each}
	</div>
	<div class="info">
		<p>{disclaimer.text} © {currentYear}</p>
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
