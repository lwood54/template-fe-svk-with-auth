<!-- <script lang="ts">
</script>

<main>
	<h1 class="text-2xl font-bold">User Profile</h1>
</main> -->

<script lang="ts">
	import * as Drawer from '$lib/components/ui/drawer/index.js';
	import { Button } from '$lib/components/ui/button/index.js';

	let open = $state(false);
</script>

<Drawer.Root bind:open direction="right" snapPoints={[0.5]}>
	<Drawer.Trigger asChild let:builder>
		<Button variant="outline" builders={[builder]}>Edit Profile</Button>
	</Drawer.Trigger>
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
</Drawer.Root>
