<script lang="ts">
	import * as Avatar from '$lib/components/ui/avatar';
	import { Button } from '$lib/components/ui/button';
	import DarkToggle from '../DarkToggle/darkToggle.svelte';
</script>

<div class="flex items-center justify-between p-4 border-b border-gray-200">
	<div class="flex items-center gap-2">
		<Button href="/" variant="link">Home</Button>
		<Button href="/login" variant="link">Login</Button>
	</div>
	<div class="flex items-center gap-2">
		<Button href="/user" variant="ghost" size="icon">
			<Avatar.Root>
				<!-- <Avatar.Image src="https://github.com/shadcn.png" alt="@shadcn" /> -->
				<!-- TODO: use caplitalized first 2 letters of users email -->
				<Avatar.Fallback>
					<p class="text-primary">ME</p>
				</Avatar.Fallback>
			</Avatar.Root>
		</Button>
		<DarkToggle />
	</div>
</div>
