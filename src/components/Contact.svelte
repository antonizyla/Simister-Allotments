<script lang="ts">
	import Button from './Button.svelte';

	import { openModal } from 'svelte-modals';
	import Modal from './Modal.svelte';
	
	export let data;

	let alerts = data.alerts;
	let fields = data.form.fields;

	let valid_form = false;
	$: valid_form = fields[0].valid && fields[1].valid && fields[2].valid;
	let nameIndex = fields
		.map(function (o) {
			return o.name;
		})
		.indexOf('fullname');
	let emailIndex = fields
		.map(function (o) {
			return o.name;
		})
		.indexOf('email');
	let msgIndex = fields
		.map(function (o) {
			return o.name;
		})
		.indexOf('message');

	function validate_name(name) {
		name.length > 2 ? (fields[nameIndex].valid = true) : (fields[nameIndex].valid = false);
	}

	const emailRegEx = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
	function validate_email(email) {
		emailRegEx.test(email) ? (fields[emailIndex].valid = true) : (fields[emailIndex].valid = false);
	}

	function validate_content(message) {
		message.length > 20 ? (fields[msgIndex].valid = true) : (fields[msgIndex].valid = false);
	}

	$: validate_name(fields[nameIndex].input);
	$: validate_email(fields[emailIndex].input);
	$: validate_content(fields[msgIndex].input);

	function onSubmit(e) {
		console.log(valid_form)
		if (valid_form) {
			const formData = new FormData(e.target);
			const data = {};
			for (let field of formData) {
				const [key, value] = field;
				data[key] = value;
			}
            openModal(Modal, { title: alerts.succeeded.title, message: alerts.succeeded.message });
			console.log(data);
		} else {
			openModal(Modal, { title: alerts.failed.title, message: alerts.failed.message });
			console.log('Invalid Form Submission. Try again.');
		}
		clearForm();
	}

	function clearForm() {
		console.log(fields);
		fields.forEach((element) => {
			element.input = '';
		});
	}
</script>

<form on:submit|preventDefault={onSubmit} id="contact">
	{#each fields as field}
		<div>
			<div class="label">
				<p>{field.label}</p>
				{#if field.required}
					<p style="color: var(--accent-color);">&nbsp*</p>
				{/if}
			</div>
			{#if field.type === 'text'}
				<input
					type="text"
					label={field.label}
					placeholder={field.placeholder}
					name={field.name}
					required={field.required}
					bind:value={field.input}
					class:valid={field.valid}
					class:invalid={field.input.length > 0 && !field.valid}
				/>
			{:else if field.type === 'textarea'}
				<textarea
					name={field.name}
					id={field.label}
					cols="30"
					rows="10"
					placeholder={field.placeholder}
					class:valid={field.valid}
					class:invalid={field.input.length > 0 && !field.valid}
					bind:value={field.input}
				/>
			{/if}
			{#if !field.valid && field.input.length > 0}
				<div class="criteria">{field.validation}</div>
			{/if}
		</div>
	{/each}
	<div class="btn">
		<Button>Submit</Button>
	</div>
</form>

<style>
	.btn {
		margin: auto;
	}

	form {
		display: flex;
		flex-direction: column;
		gap: 2em;
	}

	input {
		height: 2em;
		background-color: #ececec;
		border-radius: 7px;
		padding: 10px;
		margin-top: 6px;
		border: 2px solid lightgrey;
		width: 100%;
	}

	textarea {
		resize: vertical;
		border: 2px solid lightgrey;
		border-radius: 7px;
		background-color: #ececec;
		height: 8em;
		padding: 10px;
		margin-top: 6px;
		width: 100%;
	}

	.criteria {
		font-size: smaller;
		text-align: center;
		color: var(--accent-color);
	}

	.label {
		display: flex;
	}

	.valid {
		border-color: green;
	}

	.invalid {
		border-color: var(--accent-color);
	}
</style>
