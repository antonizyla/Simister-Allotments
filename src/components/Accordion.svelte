<script lang="ts">
	import Icon from '@iconify/svelte';

	let max_open_accordions = 3; //set to 0 to have no limit on open
	let accoridon_queue = [];

	export let items;

	// let items = [
	// 	{
	// 		Id: '0',
	// 		title: '1. What are the typical yearly costs for a plot?',
	// 		content: 'lorem ipsum',
	// 		open: true
	// 	},
	// 	{
	// 		Id: '1',
	// 		title: 'What size is a typical plot?',
	// 		content: 'lorem ipsum2 lorme ipsum',
	// 		open: false
	// 	},
	// 	{
	// 		Id: '2',
	// 		title: 'What size is a typical plot?',
	// 		content: 'lorem ipsum2 lorme ipsum',
	// 		open: false
	// 	},
	// 	{
	// 		Id: '3',
	// 		title: 'What size is a typical plot?',
	// 		content: 'lorem ipsum2 lorme ipsum',
	// 		open: false
	// 	},
	// 	{
	// 		Id: '4',
	// 		title: 'What size is a typical plot?',
	// 		content: 'lorem ipsum2 lorme ipsum',
	// 		open: false
	// 	}
	// ];

	items.forEach((element) => {
		if (element.open) {
			accoridon_queue.push(element.Id);
			console.log(accoridon_queue);
		}
	});

	function toggleAccordion(itemId) {
		let index = items
			.map(function (o) {
				return o.Id;
			})
			.indexOf(itemId);
		items[index].open = !items[index].open;
		//accoridon_queue.splice(accoridon_queue.findIndex(itemId), 1);
		if (max_open_accordions != 0 && items[index].open === true) {
			accoridon_queue.push(itemId);
			if (accoridon_queue.length > max_open_accordions) {
				toggleAccordion(accoridon_queue[0]);
				accoridon_queue.shift();
			}
		}
		console.log(accoridon_queue);
	}
</script>

<section>
	{#each items as item}
		{#if item.open}
			<div class="title">
				<button on:click={() => toggleAccordion(item.Id)}>
					<Icon icon="mdi:menu-up" width="3em" height="3em" />
				</button>
				<h3>{item.title}</h3>
			</div>
			<p>{item.content}</p>
		{:else}
			<div class="title">
				<button on:click={() => toggleAccordion(item.Id)}>
					<Icon icon="mdi:menu-down" width="3em" height="3em" />
				</button>
				<h3>{item.title}</h3>
			</div>
		{/if}
	{/each}
</section>

<style>
	.title {
		display: flex;
		flex-direction: row;
		gap: 1em;
		align-items: center;
		padding-bottom: 1em;
		border-bottom: 2px solid lightgray;
	}

	section {
		display: flex;
		flex-direction: column;
		gap: 2em;
		padding-left: 2em;
		padding-right: 2em;
	}
</style>
