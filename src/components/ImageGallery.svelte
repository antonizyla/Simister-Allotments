<script>
	let images = [
		{
			src: '/images/1.JPG',
			alt: 'Image of Entrance to the allotment.',
			width: '2',
			height: '1'
		},
		{
			src: '/images/2.JPG',
			alt: 'View of plot to the right of the gate.',
			width: '2',
			height: '1'
		},
		{
			src: '/images/3.JPG',
			alt: "Image of Raspberries on Someone's Plot.",
			width: '4',
			height: '2'
		},
		{
			src: '/images/4.JPG',
			alt: 'View of plot towards the middle left of the allotment.',
			width: '2',
			height: '1'
		},
		{
			src: '/images/5.JPG',
			alt: 'View of the middle left side of the allotment from the central road.',
			width: '2',
			height: '1'
		},
		{
			src: '/images/17.JPG',
			alt: "View of Flowers on somone's plot.",
			width: '2',
			height: '1'
		},

		{
			src: '/images/7.JPG',
			alt: 'View of another plot of the allotment.',
			width: '2',
			height: '1'
		},
		{
			src: '/images/Sitemap43.png',
			alt: 'Ariel Overview of the allotment',
			width: '4',
			height: '2'
		},
		{
			src: '/images/8.JPG',
			alt: 'Another View of the allotment.',
			width: '2',
			height: '1'
		}
	];
</script>

<div class="container">
	<main id="gallery">
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
