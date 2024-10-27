<script lang="ts">
  import * as Avatar from '$lib/components/ui/avatar';
  import { Button } from '$lib/components/ui/button';
  import { user } from '$lib/store/user.svelte';
  import UserRound from 'lucide-svelte/icons/user-round';
  import DarkToggle from '../DarkToggle/darkToggle.svelte';
  import * as Drawer from '$lib/components/ui/drawer';
  import { ScrollArea } from '$lib/components/ui/scroll-area';
  import { LogOut, X } from 'lucide-svelte';
  import { goto } from '$app/navigation';

  let open = $state(false);
</script>

<Drawer.Root bind:open direction="right">
  <div class="flex items-center justify-between p-4 border-b border-gray-200">
    <div class="flex items-center gap-2">
      <Button href="/" variant="link">Home</Button>
      <Button href="/a" variant="link">A</Button>
      <Button href="/b" variant="link">B</Button>
      <Button href="/c" variant="link">C</Button>
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
      <div class="mx-auto w-full p-5">
        <Drawer.Header>
          <div class="flex justify-between items-center">
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
          <Drawer.Title>Theme Color Options</Drawer.Title>
          <Drawer.Description>
            * Selected option will be applied to all layout elements (navbar, toolbar, etc.). You
            can also create your own theme options and color schemes.
          </Drawer.Description>
        </Drawer.Header>
        <div class="p-4 pb-0 space-y-4">
          <div class="bg-muted flex items-center justify-center rounded-lg h-32">
            <p>Image 1</p>
          </div>
          <div class="bg-muted flex items-center justify-center rounded-lg h-32">
            <p>Image 2</p>
          </div>
          <!-- <div class="bg-muted flex items-center justify-center rounded-lg h-32">
            <p>Image 3</p>
          </div>
          <div class="bg-muted flex items-center justify-center rounded-lg h-32">
            <p>Image 4</p>
          </div>
          <div class="bg-muted flex items-center justify-center rounded-lg h-32">
            <p>Image 4</p>
          </div>
          <div class="bg-muted flex items-center justify-center rounded-lg h-32">
            <p>Image 5</p>
          </div>
          <div class="bg-muted flex items-center justify-center rounded-lg h-32">
            <p>Image 6</p>
          </div>
          <div class="bg-muted flex items-center justify-center rounded-lg h-32">
            <p>Image 7</p>
          </div>
          <div class="bg-muted flex items-center justify-center rounded-lg h-32">
            <p>Image 8</p>
          </div>
          <div class="bg-muted flex items-center justify-center rounded-lg h-32">
            <p>Image 9</p>
          </div>
          <div class="bg-muted flex items-center justify-center rounded-lg h-32">
            <p>Image 10</p>
          </div>
          <div class="bg-muted flex items-center justify-center rounded-lg h-32">
            <p>Image 11</p>
          </div> -->
        </div>
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

<!-- <Drawer.Root bind:open direction="right">
  <div class="flex items-center justify-between p-4 border-b border-gray-200">
    <div class="flex items-center gap-2">
      <Button href="/" variant="link">Home</Button>
      <Button href="/a" variant="link">A</Button>
      <Button href="/b" variant="link">B</Button>
      <Button href="/c" variant="link">C</Button>
    </div>
    <div class="flex items-center gap-2">
      <DarkToggle />
      {#if !user.isLoggedIn}
        <Button href="/login" variant="ghost" size="icon">Login</Button>
      {:else}
        <Drawer.Trigger asChild let:builder>
          <Button builders={[builder]} variant="ghost" size="icon">
            <Avatar.Root>
              <Avatar.Fallback>
                <UserRound />
              </Avatar.Fallback>
            </Avatar.Root>
          </Button>
        </Drawer.Trigger>
      {/if}
    </div>
  </div>
  <Drawer.Portal>
    <Drawer.Content class="">
      <div class="text-left h-screen w-fit">
        <Drawer.Title>Edit profile</Drawer.Title>
        <Drawer.Description>
          Make changes to your profile here. Click save when you're done.
        </Drawer.Description>
      </div>
      <Drawer.Footer class="pt-2">
        <Button variant="outline">Save</Button>
        <Drawer.Close asChild let:builder>
          <Button variant="outline" builders={[builder]}>Cancel</Button>
        </Drawer.Close>
      </Drawer.Footer>
    </Drawer.Content>
  </Drawer.Portal>
</Drawer.Root> -->
