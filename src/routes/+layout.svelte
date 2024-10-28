<script lang="ts">
  import Nav from '$lib/components/custom/Nav/nav.svelte';
  import '../app.css';
  import { ModeWatcher } from 'mode-watcher';
  import { user } from '$lib/store/user.svelte';
  let { children, data } = $props();

  $effect(() => {
    user.isLoggedIn = data.isLoggedIn;
    user.email = data.user?.email;
    user.firstName = data.user?.firstName;
    user.lastName = data.user?.lastName;
  });
</script>

<ModeWatcher />
<Nav />
{@render children()}
