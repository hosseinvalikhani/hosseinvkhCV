<template>
  <div
    class="relative pl-6 sm:pl-8 pb-10 border-l border-brand-border last:pb-0 last:border-l-0 font-mono group"
  >
    <!-- Timeline Dot -->
    <div
      class="absolute -left-[5px] top-1.5 w-2.5 h-2.5 rounded-full bg-brand-border group-hover:bg-brand-accent-green border border-brand-bg transition-colors duration-300"
    ></div>
    <div
      class="absolute -left-[9px] top-[1px] w-4.5 h-4.5 rounded-full bg-brand-accent-green/10 border border-brand-bg opacity-0 group-hover:opacity-100 transition-opacity duration-300"
    ></div>

    <div>
      <!-- Title & Time -->
      <div
        class="flex flex-col sm:flex-row sm:items-start md:items-center justify-between gap-1 mb-2"
      >
        <h3
          class="text-base sm:text-lg font-bold text-brand-text-primary group-hover:text-brand-accent-green transition-colors duration-200"
        >
          {{ role }}
        </h3>
        <span
          class="text-xs text-brand-accent-green bg-brand-accent-green/5 border border-brand-accent-green/20 px-2 py-0.5 rounded self-start sm:self-center"
        >
          {{ period }}
        </span>
      </div>

      <!-- Company info -->
      <div class="text-xs sm:text-sm text-brand-accent-cyan-bright mb-3">
        @ {{ company }}
        <span
          v-if="location"
          class="text-[#8b949e]"
          >({{ location }})</span
        >
      </div>

      <!-- Highlights list -->
      <ul class="space-y-2 mt-2 font-sans text-xs sm:text-sm text-[#8b949e]">
        <li
          v-for="(highlight, idx) in highlights"
          :key="idx"
          class="flex gap-2 items-start"
        >
          <span
            class="text-brand-accent-green select-none font-mono font-bold mt-0.5"
            >></span
          >
          <span>{{ highlight }}</span>
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  role: string;
  company: string;
  period: string;
  location?: string;
  highlights: string[];
}>();
</script>
