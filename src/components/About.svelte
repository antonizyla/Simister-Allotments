<script lang="ts">
	import Accordion from './Accordion.svelte';
	import Grid from 'svelte-grid-responsive';

	import { text } from 'svelte/internal';

	export let data;


</script>

<main id="about">
	<Grid container gutter={12}>
		<Grid lg={2.5} md={2} />
		<Grid lg={3.5} md={5} sm={12}>
			<div class="acc">
				<Accordion items={data.faq}/>
			</div>
		</Grid>
		<Grid lg={3.5} md={5} sm={12}>
			<section>
				<h2>{data.text.title}</h2>
				<p>{data.text.subtext}</p>
			</section>
		</Grid>
		<Grid lg={2.5} md={2} />
	</Grid>
</main>

<style>
	section {
		display: flex;
		flex-direction: column;
		justify-content: center;
		height: 100%;
		gap: 1.5em;
		padding: 1em 2em 2em 2em;
		height: 100%;
	}

	main {
		padding-top: 2em;
		padding-bottom: 3em;
		display: flex;
		flex-direction: row;
	}

	.acc {
		padding-bottom: 2em;
		height: 100%;
		padding: 2em 0 2em 0;
	}
</style>
