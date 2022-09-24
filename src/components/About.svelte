<script lang="ts">
	import Accordion from './Accordion.svelte';
	import Grid from 'svelte-grid-responsive';

	import { text } from 'svelte/internal';

	export let data;


</script>

<main id="about">
	<Grid container columns={12} gutter={12}>
		<Grid lg={1} md={0} sm={0}/>
		<Grid lg={5} md={6} sm={12}>
			<div class="acc">
				<Accordion items={data.faq}/>
			</div>
		</Grid>
		<Grid lg={5} md={6} sm={12}>
			<section>
				<h2>{data.text.title}</h2>
				<p>{data.text.subtext}</p>
			</section>
		</Grid>
		<Grid lg={1} md={0} sm={0}/>
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
		padding: 3em 2em 3em 2em;
		display: flex;
		flex-direction: row;
	}

	.acc {
		padding-bottom: 2em;
		height: 100%;
		padding: 2em 0 2em 0;
	}
</style>
