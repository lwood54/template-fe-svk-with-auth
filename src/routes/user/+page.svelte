<!-- <script lang="ts">
</script>

<main>
	<h1 class="text-2xl font-bold">User Profile</h1>
</main> -->

<script lang="ts">
  import * as Drawer from '$lib/components/ui/drawer/index.js';
  import { Button } from '$lib/components/ui/button/index.js';
  import { ScrollArea } from '$lib/components/ui/scroll-area';

  let open = $state(false);
</script>

<Drawer.Drawer bind:open direction="right">
  <Drawer.Trigger asChild>
    <Button onclick={() => (open = true)} variant="outline">Open Drawer</Button>
  </Drawer.Trigger>
  <Drawer.Content class="h-screen top-0 right-0 left-auto mt-0 w-[500px] rounded-none">
    <ScrollArea class="h-screen">
      <div class="mx-auto w-full p-5">
        <Drawer.Header>
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
          <div class="bg-muted flex items-center justify-center rounded-lg h-32">
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
          </div>
        </div>
      </div>
    </ScrollArea>
  </Drawer.Content>
</Drawer.Drawer>
<!-- <Drawer.Root bind:open direction="right" snapPoints={[0.5]}>
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
</Drawer.Root> -->
