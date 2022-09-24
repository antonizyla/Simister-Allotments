<script lang="ts">
	import Icon from '@iconify/svelte';

	export let dark = false;

	let mobileNavOpened = false;
	if (mobileNavOpened) {
		document.body.style.overflow = 'hidden';
	}

	function toggleMobileNav() {
		mobileNavOpened = !mobileNavOpened;
	}

	export let data;
	let navItems = data
</script>

<nav class:dropdown-opened={mobileNavOpened} class:dark>
	<a class="logo" href={navItems.logo_link.href}>{navItems.logo_link.label}</a>
	<div class="dropdown-link-container">
		{#each navItems.links as item}
		<a on:click={toggleMobileNav} href={item.href}>{item.label}</a>
		{/each}
	</div>
	<button aria-hidden="true" class="mobile-dropdown-toggle" on:click={toggleMobileNav}>
		{#if mobileNavOpened === true}
			<Icon icon="ic:outline-close-fullscreen" width="3em" height="3em" />
		{:else}
			<Icon icon="bi:list" width="3em" height="3em" />
		{/if}
	</button>
</nav>


<style>

	.dark a {
		color: var(--text-color);
	}
	.dark .mobile-dropdown-toggle {
		color: var(--text-color);
	}

	nav {
		padding-top: 2em;
		max-width: 1200px;
		display: flex;
		padding-left: 2em;
		padding-right: 2em;
		align-items: center;
		margin: auto;
		padding-bottom: 2em;
	}

	a {
		color: var(--heading-color);
	}

	.logo {
		margin-right: auto;
	}

	.dropdown-link-container > a {
		margin-left: 20px;
	}

	.mobile-dropdown-toggle {
		display: none;
		margin-right: 0;
		margin-top: -1em;
	}

	@media (max-width: 768px) {
		.logo{
			z-index: 21;
			color: var(--heading-color);
		}
		.mobile-dropdown-toggle {
			z-index: 20;
			color: var(--heading-color);
		}

		.mobile-dropdown-toggle {
			display: initial;
			z-index: 20;
		}

		.dropdown-link-container {
			position: fixed;
			top: 0;
			left: 0;
			right: 0;
			height: 100vh;
			height: -webkit-fill-available;

			display: flex;
			flex-direction: column;
			justify-content: center;
			align-items: flex-end;

			margin: 0;
			padding-left: 7vw;
			padding-right: 7vw;

			background: var(--secondary-color);
			z-index: 20;

			opacity: 0;
			transform: translateY(-100%);
			transition: transform 0.2s, opacity 0.2s;
		}

		nav.dropdown-opened > .dropdown-link-container {
			opacity: 1;
			transform: translateY(0);
			padding-bottom: 1em;
			z-index: 20;
		}

		a {
			padding-bottom: 1em;
			color: var(--accent-color);
			z-index: 20;
		}
	}
</style>
