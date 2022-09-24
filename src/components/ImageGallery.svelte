<script>
	export let data;
	let images = data.images
</script>

<div class="container">
	<main id={data.id}>
		{#each images as image}
			<div class="h{image.height} w{image.width}"><img src={image.src} alt={image.alt} /></div>
		{/each}
	</main>
</div>

<style>
	img {
		max-width: 100%;
		height: auto;
		border-radius: 10px;
	}
	.container {
		width: 90vw;
		margin: auto;
		padding: 2em;
	}
	main {
		display: inline-grid;
		margin: auto 0;
		grid-template-columns: repeat(6, auto);
		grid-template-rows: repeat(auto, auto);
		gap: 10px;
		grid-auto-flow: row dense;
	}
	@media (max-width: 768px) {
		main {
			grid-template-columns: repeat(4, auto);
		}
		img {
			border-radius: 6px;
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