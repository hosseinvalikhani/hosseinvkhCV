<template>
  <div
    class="rounded-lg border border-brand-border bg-brand-surface overflow-hidden shadow-2xl font-mono"
  >
    <!-- Top Bar -->
    <div
      class="flex items-center justify-between px-4 py-2.5 bg-[#11151c] border-b border-brand-border select-none"
    >
      <!-- Decorator Circles / Mac style buttons -->
      <div class="flex items-center gap-1.5">
        <span class="w-3 h-3 rounded-full bg-[#ff5f56]" />
        <span class="w-3 h-3 rounded-full bg-[#ffbd2e]" />
        <span class="w-3 h-3 rounded-full bg-[#27c93f]" />
      </div>

      <!-- File Tab Title -->
      <div
        v-if="fileName"
        class="text-xs text-brand-text-secondary flex items-center gap-1.5 px-3 py-1 bg-brand-surface border-t border-x border-brand-border rounded-t-md -mb-[11px] h-[28px] mt-[1px]"
      >
        <span class="text-brand-accent-cyan-bright">{ }</span>
        <span>{{ fileName }}</span>
      </div>

      <!-- Tech status -->
      <div class="text-xs text-brand-accent-green">UTF-8</div>
    </div>

    <!-- Inner Content -->
    <div
      class="p-4 sm:p-6 overflow-x-auto text-xs sm:text-sm md:text-base leading-relaxed text-brand-text-primary"
    >
      <slot />
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  fileName?: string;
}>();
</script>
