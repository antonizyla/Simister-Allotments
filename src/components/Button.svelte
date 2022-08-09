<script>
	export let style = 'primary';
	export let flat = false;
</script>

<button class={style} class:flat on:click>
	<slot />
</button>

<style>
	button {
		border: 1;
		border-radius: 6px;
		cursor: pointer;
		padding: 12px 20px;
		font-weight: bold;
		box-shadow: 1px 2px 3px rgba(0, 0, 0, 0.2);
		width: fit-content;
	}

	.primary {
		background: var(--accent-color);
		color: white;
	}

	.secondary {
		background: white;
		color: var(--secondary-text);
		border: 2px solid var(--text-color);
	}

	.flat {
		box-shadow: none;
	}

	button:hover {
		transform: scale(1.05);
		transition: all 0.5s;
	}
</style>
