<script lang="ts">
	import { Input } from '$lib/components/ui/input/index.js';
	import { Label } from '$lib/components/ui/label/index.js';
	import FormCard from '$lib/components/custom/FormCard/form-card.svelte';
	import { HTTP_METHODS } from '$lib/constants/root';
	import { superForm } from 'sveltekit-superforms/client';
	import type { PageData } from './$types';
	import * as Form from '$lib/components/ui/form';
	// export let data: PageData;
	const { data } = $props();
	console.info('DATA ????', data);
	const form = superForm(data.form, {
		customValidity: false
	});
	const { delayed, enhance, errors: formErrors, form: formData } = form;
</script>

<form action="?/login" method={HTTP_METHODS.POST} id="login" use:enhance novalidate>
	<FormCard title="Login" cancelLabel="Cancel" submitLabel="Login" isSubmitting={$delayed}>
		<Form.Field {form} name="email">
			<Form.Control let:attrs>
				<Label for="email">Email</Label>
				<Input
					errors={$formErrors.email}
					{...attrs}
					type="email"
					bind:value={$formData.email}
					placeholder="Email"
				/>
			</Form.Control>
			<Form.FieldErrors />
		</Form.Field>
		<Form.Field {form} name="password">
			<Form.Control let:attrs>
				<Label for="password">Password</Label>
				<Input
					errors={$formErrors.password}
					{...attrs}
					type="password"
					bind:value={$formData.password}
					placeholder="Password"
				/>
			</Form.Control>
			<!-- <Form.Description>This is your public display name.</Form.Description> -->
			<Form.FieldErrors />
		</Form.Field>
		<!-- <Form.Button>Submit</Form.Button> -->

		<!-- <form action="?/login" method={HTTP_METHODS.POST} id="login" use:enhance novalidate>
		<div class="grid w-full items-center gap-4">
			<div class="flex flex-col space-y-1.5">
				<Label for="email">Email</Label>
				<Input id="email" type="email" bind:val={$sForm.email} placeholder="Email" />
			</div>
			<div class="flex flex-col space-y-1.5">
				<Label for="password">Password</Label>
				<Input id="password" type="password" placeholder="Password" />
			</div>
			<div class="flex flex-col space-y-1.5">
				<Label for="framework">Framework</Label>
				<Select.Root>
					<Select.Trigger id="framework">
						<Select.Value placeholder="Select" />
					</Select.Trigger>
					<Select.Content>
						{#each frameworks as framework}
							<Select.Item value={framework.value} label={framework.label}
								>{framework.label}</Select.Item
							>
						{/each}
					</Select.Content>
				</Select.Root>
			</div>
		</div>
	</form> -->
	</FormCard>
</form>
<!-- {#snippet footerNode()}
	<div>hello footer</div>
{/snippet} -->
