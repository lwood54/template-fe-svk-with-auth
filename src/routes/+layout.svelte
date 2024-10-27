<script lang="ts">
  import { PUBLIC_ENV } from '$env/static/public';
  import Header from '$lib/components/custom/Header/header.svelte';
  import '../app.css';
  import { ModeWatcher } from 'mode-watcher';
  import type { PageData } from './$types';
  import { user } from '$lib/store/user.svelte';

  let { children, data } = $props<{ data: PageData }>();

  $effect(() => {
    user.isLoggedIn = data.isLoggedIn;
    console.log(PUBLIC_ENV);
  });
</script>

<ModeWatcher />
<Header />
{@render children()}
