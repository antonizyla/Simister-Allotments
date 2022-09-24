<script>
	export let data;
	let images = data.images

</script>

	<div class="container" id={data.id}>
		{#each images as image}
			<div class="grid-item h{image.height} w{image.width}"><img class="image" src={image.src} loading="lazy" alt={image.alt} /></div>
		{/each}
	</div>

<style>

	.image {
		padding-bottom: 0;
		margin: 0;
		width: 100%;
		border-radius: 0.5em;
		height: 100%;
	}

	.container {
		display: grid;
		grid-template-columns: repeat(6, auto);
		grid-auto-flow: row dense;
		width: 88vw;
		margin: auto;
		padding: 2em;
		gap: 1em;
	}

	@media (max-width: 768px) {
		.container {
			grid-template-columns: repeat(4, auto);
		}
	}

	.h2 {
		grid-row: span 2;
	}
	.h1 {
		grid-row: span 1;
	}
	.h3 {
		grid-row: span 3;
	}
	.h4 {
		grid-row: span 4;
	}
	.h5 {
		grid-row: span 5;
	}
	.h6 {
		grid-row: span 6;
	}
	.w1 {
		grid-row: span 1;
	}
	.w2 {
		grid-column: span 2;
	}
	.w3 {
		grid-column: span 3;
	}
	.w4 {
		grid-column: span 4;
	}
	.w5 {
		grid-column: span 5;
	}
	.w6 {
		grid-column: span 6;
	}
</style>