<template>
  <div class="mb-10 font-mono">
    <!-- Comment descriptor -->
    <div class="text-brand-accent-amber text-xs sm:text-sm mb-1 select-none">
      // {{ comment || "segment" }}
    </div>
    <!-- Terminal prompt command header -->
    <div
      class="flex items-center text-lg sm:text-2xl font-bold text-brand-text-primary"
    >
      <span class="text-brand-accent-green mr-2 select-none">~ $</span>
      <h2 class="relative group">
        {{ title }}
        <span class="text-brand-accent-green font-normal">()</span>
        <span
          class="inline-block w-2 h-4 sm:h-5 bg-brand-accent-green ml-2 align-middle animate-pulse"
        ></span>
      </h2>
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  title: string;
  comment?: string;
}>();
</script>
