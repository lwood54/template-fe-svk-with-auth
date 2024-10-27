<script lang="ts">
  import { Input } from '$lib/components/ui/input/index.js';
  import { Label } from '$lib/components/ui/label/index.js';
  import FormCard from '$lib/components/custom/FormCard/form-card.svelte';
  import { HTTP_METHODS } from '$lib/constants/root';
  import { superForm } from 'sveltekit-superforms/client';
  import * as Form from '$lib/components/ui/form';

  const { data } = $props();

  const form = superForm(data.form, {
    customValidity: false
  });
  const { delayed, enhance, errors: formErrors, form: formData } = form;
</script>

<!-- <div class="flex justify-center items-center h-screen"> -->

<!-- <div class="flex justify-center items-center h-screen -mt-[25vh]"> -->
<div class="flex justify-center h-full mt-16">
  <form action="?/login" method={HTTP_METHODS.POST} id="login" use:enhance novalidate>
    <FormCard title="Login" cancelLabel="Cancel" submitLabel="Login" isSubmitting={$delayed}>
      <Form.Field {form} name="email">
        <Form.Control let:attrs>
          <Label for="email">Email</Label>
          <Input
            errors={$formErrors.email}
            {...attrs}
            type="email"
            bind:value={$formData.email}
            placeholder="Email"
          />
        </Form.Control>
        <Form.FieldErrors />
      </Form.Field>
      <Form.Field {form} name="password">
        <Form.Control let:attrs>
          <Label for="password">Password</Label>
          <Input
            errors={$formErrors.password}
            {...attrs}
            type="password"
            bind:value={$formData.password}
            placeholder="Password"
          />
        </Form.Control>
        <Form.FieldErrors />
      </Form.Field>
    </FormCard>
  </form>
</div>
