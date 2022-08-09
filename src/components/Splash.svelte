<script lang="ts">
	import Nav from './Nav.svelte';
	import Icon from '@iconify/svelte';
</script>

<section>
	<div class="nav">
		<Nav />
	</div>
	<div class="text">
		<h1>Simister Allotments</h1>
		<p>
			Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat quasi quaerat provident
			expedita! Aspernatur delectus distinctio ducimus quis expedita, ipsa rem magni, odio, laborum
			consequuntur cum eveniet quo quae. Beatae.
		</p>
	</div>
	<div class="cta">
		<p>Find out more</p>
		<a href="#contact">
			<Icon height="4em" icon="bi:arrow-down" width="3em" />
		</a>
	</div>
</section>

<style>
	section {
		display: flex;
		flex-direction: column;
		height: 100vh;
		justify-content: space-between;
		background-image: url('images/3.JPG');
		background-position: center;
		background-size: cover;
	}

	.text {
		text-align: center;
		max-width: 1200px;
		margin-left: auto;
		margin-right: auto;
		padding-left: 2em;
		padding-right: 2em;
	}

	h1 {
		padding-bottom: 0.5em;
	}

	.cta {
		text-align: center;
		padding-bottom: 5vh;
	}

	p {
		color: white;
	}

	a {
		color: var(--heading-color);
	}
</style>
