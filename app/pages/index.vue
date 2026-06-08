<template>
  <section
    class="flex flex-col items-center justify-center min-h-screen bg-gray-50 p-8"
  >
    <h1 class="text-4xl font-extrabold text-gray-800 mb-4">Welcome to My CV</h1>
    <p class="text-lg text-gray-600 mb-6 max-w-2xl text-center">
      This is the home page of my personal CV website built with Nuxt 4 and
      Tailwind CSS.
    </p>
    <a
      href="/about"
      class="px-6 py-3 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
    >
      Learn More About Me
    </a>
  </section>
</template>

<script setup lang="ts">
// No additional script needed for the static home page.
</script>

<style scoped>
/* Additional component‑scoped styles can be added here if needed */
</style>
