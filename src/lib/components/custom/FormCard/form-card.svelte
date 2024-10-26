<script lang="ts">
	import * as Card from '$lib/components/ui/card/index.js';
	import { Button } from '$lib/components/ui/button/index.js';
	import type { Snippet } from 'svelte';
	import { LoaderPinwheel } from 'lucide-svelte';

	const {
		cancelLabel,
		children,
		description,
		footerNode,
		isSubmitting = false,
		submitLabel,
		title
	}: {
		cancelLabel: string;
		children: Snippet;
		description?: string;
		footerNode?: Snippet;
		isSubmitting?: boolean;
		submitLabel: string;
		title: string;
	} = $props();
</script>

<Card.Root class="w-[350px]">
	<Card.Header>
		<Card.Title>{title}</Card.Title>
		<Card.Description>{description}</Card.Description>
	</Card.Header>
	<Card.Content>
		{@render children?.()}
	</Card.Content>
	<Card.Footer class="flex justify-between">
		{#if footerNode}
			{@render footerNode()}
		{:else}
			<Button disabled={isSubmitting} variant="outline">{cancelLabel}</Button>
			<Button disabled={isSubmitting} type="submit">
				{#if isSubmitting}
					<LoaderPinwheel class="animate-spin" />
				{:else}
					{submitLabel}
				{/if}
			</Button>
		{/if}
	</Card.Footer>
</Card.Root>
