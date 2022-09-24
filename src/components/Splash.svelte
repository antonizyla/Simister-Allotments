<script lang="ts">
	import Nav from './Nav.svelte';
	import Icon from '@iconify/svelte';

	export let data;

</script>

<section>
	<div class="nav">
		<Nav data={data}/>
	</div>
	<div class="text">
		<h1>{data.centre.title}</h1>
		<p>{data.centre.subtitle}
		</p>
	</div>
	<div class="cta">
		<p>{data.cta.text}</p>
		<a href={data.cta.href}>
			<Icon height="4em" icon={data.cta.icon} width="3em" />
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
		color: var(--secondary-color);
	}
</style>
