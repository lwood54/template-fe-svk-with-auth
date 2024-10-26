<script lang="ts">
	import Header from '$lib/components/custom/Header/header.svelte';
	import '../app.css';
	import { ModeWatcher } from 'mode-watcher';
	import type { PageData } from './$types';

	let { children, data } = $props<{ data: PageData }>();
	const { isLoggedIn } = data;

	console.info('isLoggedIn [layout page]', isLoggedIn);
</script>

<ModeWatcher />
<Header {isLoggedIn} />
{@render children()}
