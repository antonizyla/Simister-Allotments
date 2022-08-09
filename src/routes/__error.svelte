<script context="module">
	export function load({ error, status }) {
		return {
			props: {
				title: `${status}: ${error.message}`
			}
		};
	}
</script>

<script>
	import Nav from '../components/Nav.svelte';
	export let title;
    import Button from '../components/Button.svelte'
    import { goto } from '$app/navigation';
</script>

<Nav dark />
<section>    
    <h1>An error occured</h1>
    <h2>{title}</h2>
    <p>Please Try Again or navigate to a Valid Page</p>
    <Button on:click={() => goto(`/`)} flat style={'secondary'}>Get Back to Home</Button>
</section>



<style>
	h1 {
		color: var(--text-color);
	}
    section{
        display: flex;
        flex-direction: column;
        text-align: center;
        gap: 2em;
        padding: 2em;
        width: fit-content;
        margin: auto;
    }
    
</style>
