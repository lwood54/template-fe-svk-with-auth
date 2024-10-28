<script lang="ts">
  import * as Avatar from '$lib/components/ui/avatar';
  import { Button } from '$lib/components/ui/button';
  import { user } from '$lib/store/user.svelte';
  import UserRound from 'lucide-svelte/icons/user-round';
  import DarkToggle from '../DarkToggle/darkToggle.svelte';
  import * as Drawer from '$lib/components/ui/drawer';
  import { ScrollArea } from '$lib/components/ui/scroll-area';
  import { LogOut, X } from 'lucide-svelte';

  let open = $state(false);
</script>

<Drawer.Root bind:open direction="right">
  <div class="flex items-center justify-between p-4 border-b border-gray-200">
    <div class="flex items-center gap-2">
      <Button href="/" variant="link">Home</Button>
      <Button href="/a" variant="link">A</Button>
      <Button href="/b" variant="link">B</Button>
      <Button href="/public/c" variant="link">C</Button>
    </div>
    <div class="flex items-center gap-2">
      {#if !user.isLoggedIn}
        <Button href="/login" variant="link" size="icon">Login</Button>
      {:else}
        <Drawer.Trigger asChild>
          <Button onclick={() => (open = true)} variant="ghost" size="icon">
            <Avatar.Root>
              <Avatar.Fallback>
                <UserRound class="text-green-500" />
              </Avatar.Fallback>
            </Avatar.Root>
          </Button>
        </Drawer.Trigger>
      {/if}
    </div>
  </div>
  <Drawer.Content class="h-screen top-0 right-0 left-auto mt-0 w-[50%] rounded-none">
    <ScrollArea class="h-screen">
      <div class="mx-auto w-full p-4">
        <!-- <Drawer.Header> -->
        <div class="flex justify-between items-center border-b border-gray-200 pb-4">
          <Button
            onclick={() => {
              user.isLoggedIn = false;
              open = false;
            }}
            href="/logout"
            data-sveltekit-preload-data="off"
            variant="ghost"
            size="icon"
          >
            <LogOut class="pointer-events-none" />
          </Button>
          <div class="flex justify-end gap-4">
            <DarkToggle />
            <Drawer.Close asChild let:builder>
              <Button builders={[builder]}>
                <X />
              </Button>
            </Drawer.Close>
          </div>
        </div>
        <Drawer.Title class="text-lg font-semibold pt-4">Profile</Drawer.Title>
        <div class="text-sm text-gray-500">{user.email}</div>
        {#if user.firstName || user.lastName}
          <div class="text-sm text-gray-500">
            {`${user.firstName ?? ''} ${user.lastName ?? ''}`}
          </div>
        {/if}
      </div>
    </ScrollArea>
    <Drawer.Footer class="pt-2">
      <Button variant="outline">Save</Button>
      <Drawer.Close asChild let:builder>
        <Button variant="outline" builders={[builder]}>Cancel</Button>
      </Drawer.Close>
    </Drawer.Footer>
  </Drawer.Content>
</Drawer.Root>
