<script>
	import Nav from '../components/Nav.svelte';

	import Button from '../components/Button.svelte';

	import { allowedCookies } from '../components/stores.js';

	import Modal from '../components/Modal.svelte';
    import {openModal} from 'svelte-modals';

	function openMod(){
		openModal(Modal, { title:'Thank you', message: 'Your Preferences have been updated'})
	}

	function allowCookies(){
		$allowedCookies = 'true'
		openMod();
	}

	function disallowCookies(){
		$allowedCookies = 'false'
		openMod()
	}
</script>

<main>
	<Nav dark={true} />

	<div class="center">
		<h1>How we use Cookies</h1>

		<div class="text">
			<p>
				Cookies are a way of saving data relating to you in your web browser for example your login
				details or preferred colour scheme. Cookies can be used to keep track of things like this as
				well as be used for analytics purposes like measuring how long poeple spend on a page or if
				they are a real user, this data can be used to improve the site.
			</p>
			<br />
			<p>
				If you selected to reject cookies we don't store any information about you exluding the
				fact you clicked to not collect cookies. You can change your preference below
			</p>
		</div>
		<div class="buttons">
			{#if $allowedCookies === 'true'}
				<Button on:click={disallowCookies}>Reject All Cookies</Button>
			{/if}
			<Button on:click={allowCookies}>Allow All Cookies</Button>
		</div>

        <Button style={'secondary'}>Get Back to the home Page</Button>
	</div>
</main>

<style>
	h1 {
		text-align: center;
		color: var(--secondary-heading-color);
	}
	.center {
		max-width: 80vw;
		padding: 2em;
		margin: auto;
		display: flex;
		flex-direction: column;
		gap: 2em;
	}
    .buttons{
        display: flex;
        flex-direction: row;
        justify-content: center;
        margin: auto;
        width: fit-content;
        gap: 2em;
        padding: 2em;
    }
</style>
