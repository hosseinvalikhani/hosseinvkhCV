<template>
  <footer
    class="border-t border-brand-border bg-[#090d13] py-12 px-4 font-mono text-xs text-[#8b949e]"
  >
    <div
      class="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6"
    >
      <!-- Left side: Copyright & Status -->
      <div class="space-y-2 text-center md:text-left">
        <div>
          &copy; {{ new Date().getFullYear() }} Hossein Vakh. All rights
          reserved.
        </div>
        <div class="flex items-center justify-center md:justify-start gap-2">
          <span
            class="inline-block w-2.5 h-2.5 rounded-full bg-brand-accent-green animate-pulse"
          ></span>
          <span
            >System Status:
            <span class="text-brand-accent-green font-bold"
              >OPERATIONAL</span
            ></span
          >
        </div>
      </div>

      <!-- Center side: Shell Branch info -->
      <div class="flex items-center gap-4 select-none">
        <div
          class="px-2.5 py-1 rounded bg-brand-surface border border-brand-border flex items-center gap-1.5"
        >
          <span class="text-brand-accent-green">git</span>
          <span class="text-brand-accent-amber">branch</span>
          <span class="text-[#58a6ff]">::</span>
          <span class="text-brand-text-primary text-[11px] font-bold"
            >master*</span
          >
        </div>
        <div
          class="px-2.5 py-1 rounded bg-brand-surface border border-brand-border flex items-center gap-1.5"
        >
          <span class="text-brand-accent-green">sys</span>
          <span class="text-[#58a6ff]">::</span>
          <span class="text-brand-text-primary text-[11px] font-bold"
            >Nuxt v4.x</span
          >
        </div>
      </div>

      <!-- Right side: Social Prompts -->
      <div class="flex items-center gap-5">
        <a
          href="https://github.com/hosseinvkhdev"
          target="_blank"
          rel="noopener noreferrer"
          class="hover:text-brand-accent-green transition-colors flex items-center gap-1"
        >
          <span>github</span>
        </a>
        <span class="text-brand-border">|</span>
        <a
          href="https://linkedin.com/in/hossein-vakh"
          target="_blank"
          rel="noopener noreferrer"
          class="hover:text-brand-accent-cyan-bright transition-colors flex items-center gap-1"
        >
          <span>linkedin</span>
        </a>
        <span class="text-brand-border">|</span>
        <a
          href="mailto:hosseinvkhdev@gmail.com"
          class="hover:text-brand-accent-amber transition-colors flex items-center gap-1"
        >
          <span>email</span>
        </a>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
// Minimal setup
</script>
