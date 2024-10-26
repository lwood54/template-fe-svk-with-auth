<script lang="ts">
	import type { HTMLInputAttributes } from 'svelte/elements';
	import type { InputEvents } from './index.js';
	import { cn } from '$lib/utils.js';

	let {
		readonly = undefined,
		customClass = undefined,
		errors = undefined,
		value = $bindable(undefined),
		...restProps
	} = $props<
		{
			customClass?: string;
			errors?: string[];
			readonly?: boolean;
			value?: string;
		} & Partial<HTMLInputAttributes> &
			Partial<InputEvents>
	>();

	let errorClass = $derived(errors ? 'border-red-500' : '');
</script>

<input
	class={cn(
		'border-input bg-background ring-offset-background placeholder:text-muted-foreground focus-visible:ring-ring flex h-10 w-full rounded-md border px-3 py-2 text-sm file:border-0 file:bg-transparent file:text-sm file:font-medium focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50',
		customClass,
		errorClass
	)}
	bind:value
	{readonly}
	{...restProps}
/>
