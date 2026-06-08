<template>
  <span
    class="inline-flex items-center gap-1 px-2.5 py-1 rounded bg-[#161b22] border border-brand-border text-xs sm:text-sm font-mono text-brand-text-primary hover:border-brand-accent-green hover:text-brand-accent-green hover:scale-105 transition-all duration-200 select-none cursor-default group"
  >
    <span
      class="text-[#8b949e] group-hover:text-brand-accent-green transition-colors"
      ><</span
    >
    <span class="font-medium px-0.5">{{ name }}</span>
    <span
      class="text-[#8b949e] group-hover:text-brand-accent-green transition-colors"
      >/></span
    >
  </span>
</template>

<script setup lang="ts">
defineProps<{
  name: string;
}>();
</script>
