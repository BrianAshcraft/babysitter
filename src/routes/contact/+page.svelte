<script lang="ts">
  export let data: { success?: boolean };
</script>

<section class="py-20 bg-white">
  <div class="max-w-lg mx-auto px-4">
    <h2 class="text-4xl font-bold mb-6 text-center">Contact Elmira</h2>

    {#if data?.success}
      <div class="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded mb-6">
        Thank you for your message! I'll get back to you soon.
      </div>
    {/if}

    <form method="post" class="space-y-4">
      <div>
        <label for="name" class="block text-gray-700 font-medium mb-1">Name</label>
        <input id="name" name="name" type="text" required class="w-full border rounded px-3 py-2" />
      </div>
      <div>
        <label for="email" class="block text-gray-700 font-medium mb-1">Email</label>
        <input id="email" name="email" type="email" required class="w-full border rounded px-3 py-2" />
      </div>
      <div>
        <label for="message" class="block text-gray-700 font-medium mb-1">Message</label>
        <textarea id="message" name="message" rows="5" required class="w-full border rounded px-3 py-2"></textarea>
      </div>
      <button type="submit" class="w-full bg-indigo-600 text-white px-6 py-3 rounded hover:bg-indigo-700">Send Message</button>
    </form>
  </div>
</section>
