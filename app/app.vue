<template>
  <div class="min-h-screen flex flex-col bg-brand-bg scroll-smooth">
    <TheHeader />
    <main class="flex-grow">
      <NuxtPage />
    </main>
    <TheFooter />
  </div>
</template>

<script setup lang="ts">
import TheHeader from "~/components/layout/TheHeader.vue";
import TheFooter from "~/components/layout/TheFooter.vue";

// Configure site SEO, title and metadata globally
useHead({
  title: "Hossein Vakh | Senior Frontend Developer & Nuxt Specialist",
  meta: [
    {
      name: "description",
      content:
        "Personal CV and engineering portfolio of Hossein Vakh. Specialized in Vue.js, Nuxt, TypeScript, and high-performance Web application architectures.",
    },
    { name: "viewport", content: "width=device-width, initial-scale=1" },
    { name: "theme-color", content: "#0d1117" },
    // Open Graph
    {
      property: "og:title",
      content: "Hossein Vakh | Senior Frontend Developer",
    },
    {
      property: "og:description",
      content:
        "Developer terminal inspired personal website built with Nuxt, Tailwind CSS v4 and strict TypeScript.",
    },
    { property: "og:type", content: "website" },
    { property: "og:site_name", content: "Hossein Vakh Portfolio" },
  ],
  htmlAttrs: {
    lang: "en",
  },
});
</script>
