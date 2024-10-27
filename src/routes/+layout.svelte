<script lang="ts">
	import Header from '$lib/components/custom/Header/header.svelte';
	import '../app.css';
	import { ModeWatcher } from 'mode-watcher';
	import type { PageData } from './$types';
	import { user } from '$lib/store/user.svelte';

	let { children, data } = $props<{ data: PageData }>();

	$effect(() => {
		user.isLoggedIn = data.isLoggedIn;
	});
</script>

<ModeWatcher />
<Header />
{@render children()}
