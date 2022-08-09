<script lang="ts">
	import { closeModal } from 'svelte-modals';
	import { allowedCookies } from './stores.js';
	import Button from './Button.svelte';

	export let isOpen;

	let prompt = {
		title: 'This Site Uses Cookies',
		message:
			"This site uses non essential cookies to improve the user experiences (remebering preferences) and for analytics purposes. Please allow or reject cookies, If you don't explicitly allow cookies it will be assumed you clicked reject. ",
		acceptButtonText: 'Allow All Cookies',
		declineButtonText: 'Reject All Cookies'
	};

	function cookiesAllowed() {
		closeModal();
		console.log($allowedCookies);
		$allowedCookies = 'true';
		console.log($allowedCookies);
	}

	function disallowedCookies() {
		closeModal();
		console.log($allowedCookies);
		$allowedCookies = 'false';
		console.log($allowedCookies);
	}
</script>

{#if isOpen}
	<div role="dialog" class="modal">
		<div class="contents">
			<h2>{prompt.title}</h2>
			<p>
				{prompt.message} <a on:click={closeModal} href="/cookies">Click here to find out More about how we use cookies</a>
			</p>
			<div class="actions">
				<Button on:click={cookiesAllowed}>{prompt.acceptButtonText}</Button>
				<Button on:click={disallowedCookies}>{prompt.declineButtonText}</Button>
			</div>
		</div>
	</div>
{/if}

<style>
	.modal {
		position: fixed;
		top: 0;
		bottom: 0;
		right: 0;
		left: 0;
		display: flex;
		justify-content: center;
		align-items: center;

		/* allow click-through to backdrop */
		pointer-events: none;
	}

	.contents {
		min-width: 240px;
		border-radius: 6px;
		padding: 16px;
		background: white;
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		pointer-events: auto;
	}

	h2 {
		text-align: center;
		font-size: 24px;
	}

	p {
		text-align: center;
		margin-top: 16px;
		word-wrap: normal;
	}

	.actions {
		margin-top: 32px;
		display: flex;
		justify-content: center;
		gap: 2em;
		padding: 1em;
	}
</style>
