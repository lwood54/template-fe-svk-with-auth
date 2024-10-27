<script lang="ts">
	import * as Avatar from '$lib/components/ui/avatar';
	import { Button } from '$lib/components/ui/button';
	import { user } from '$lib/store/user.svelte';
	import UserRound from 'lucide-svelte/icons/user-round';
	import DarkToggle from '../DarkToggle/darkToggle.svelte';
	import * as Drawer from '$lib/components/ui/drawer';

	let open = $state(false);
</script>

<Drawer.Root bind:open direction="right" snapPoints={[0.5]}>
	<div class="flex items-center justify-between p-4 border-b border-gray-200">
		<div class="flex items-center gap-2">
			<Button href="/" variant="link">Home</Button>
			<Button href="/a" variant="link">A</Button>
			<Button href="/b" variant="link">B</Button>
			<Button href="/c" variant="link">C</Button>
		</div>
		<div class="flex items-center gap-2">
			<DarkToggle />
			{#if user.isLoggedIn}
				<Drawer.Trigger asChild let:builder>
					<!-- <Button variant="outline" builders={[builder]}>Edit Profile</Button> -->
					<Button builders={[builder]} variant="ghost" size="icon">
						<Avatar.Root>
							<!-- <Avatar.Image src="https://github.com/shadcn.png" alt="@shadcn" /> -->
							<!-- TODO: use caplitalized first 2 letters of users email -->
							<Avatar.Fallback>
								<UserRound />
							</Avatar.Fallback>
						</Avatar.Root>
					</Button>
				</Drawer.Trigger>
			{:else}
				<Button href="/login" variant="ghost" size="icon">Login</Button>
			{/if}
		</div>

		<Drawer.Content>
			<div class="text-left h-screen w-fit">
				<Drawer.Title>Edit profile</Drawer.Title>
				<Drawer.Description>
					Make changes to your profile here. Click save when you're done.
				</Drawer.Description>
				<Drawer.Footer class="pt-2">
					<Button variant="outline">Save</Button>
					<Drawer.Close asChild let:builder>
						<Button variant="outline" builders={[builder]}>Cancel</Button>
					</Drawer.Close>
				</Drawer.Footer>
			</div>
		</Drawer.Content>
	</div>
</Drawer.Root>
