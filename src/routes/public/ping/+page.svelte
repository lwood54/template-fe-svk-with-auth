<script lang="ts">
  let { data } = $props();

  $effect(() => {
    console.log('ping DATA ????', data);
  });
</script>

{#if data.data?.message}
  <div class="message">
    {data.data.message}
  </div>
{/if}

{#if data.error}
  <div class="error">
    {data.error}
  </div>
{/if}
