<script lang="ts">
	import Accordion from './Accordion.svelte';
	import Grid from 'svelte-grid-responsive';
</script>

<main id="about">
	<Grid container gutter={12}>
		<Grid lg={2.5} md={2} />
		<Grid lg={3.5} md={5} sm={12}>
			<div class="acc">
				<Accordion />
			</div>
		</Grid>
		<Grid lg={3.5} md={5} sm={12}>
			<section>
				<h2>About Us</h2>
				<p>
					Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est nesciunt totam similique
					blanditiis tempora necessitatibus nisi doloribus numquam cupiditate labore. Beatae vero
					quidem neque rerum recusandae, blanditiis repudiandae quo voluptatibus?.
				</p>
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
