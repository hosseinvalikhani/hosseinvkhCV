<template>
  <header
    class="sticky top-0 z-50 w-full border-b border-brand-border bg-[#0d1117]/80 backdrop-blur-md font-mono transition-all duration-300"
  >
    <div class="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
      <!-- Terminal Prompt Branding -->
      <a
        href="#hero"
        class="flex items-center gap-1 text-sm sm:text-base font-bold text-brand-text-primary group"
      >
        <span class="text-brand-accent-green">~/hosseinv</span>
        <span class="text-brand-text-secondary">$</span>
        <span
          class="inline-block w-2.5 h-4.5 bg-brand-accent-green ml-1 animate-cursor-blink group-hover:bg-brand-accent-cyan-bright"
        ></span>
      </a>

      <!-- Desktop Navigation -->
      <nav class="hidden md:flex items-center gap-6 text-xs lg:text-sm">
        <a
          v-for="item in navLinks"
          :key="item.href"
          :href="item.href"
          class="relative text-brand-text-secondary hover:text-brand-accent-green transition-all duration-200 py-1 group"
        >
          <span
            class="text-brand-accent-green select-none opacity-0 group-hover:opacity-100 transition-opacity absolute -left-3.5 top-[5px] text-[10px]"
            ><</span
          >
          {{ item.name }}
          <span
            class="text-brand-accent-green select-none opacity-0 group-hover:opacity-100 transition-opacity absolute -right-3.5 top-[5px] text-[10px]"
            >/></span
          >
        </a>
      </nav>

      <!-- Action Button / Get Resume -->
      <div class="hidden md:block">
        <a
          href="/resume.pdf"
          download
          class="px-3.5 py-1.5 rounded border border-brand-accent-cyan-bright/30 text-xs text-brand-accent-cyan-bright bg-brand-accent-cyan-bright/5 hover:bg-brand-accent-cyan-bright/10 hover:border-brand-accent-cyan-bright/60 transition-all select-none"
        >
          cat resume.pdf
        </a>
      </div>

      <!-- Mobile Menu Button (Hamburger) -->
      <button
        @click="isOpen = !isOpen"
        class="block md:hidden text-[#8b949e] hover:text-brand-text-primary focus:outline-none"
        aria-label="Toggle Menu"
      >
        <svg
          class="h-6 w-6 fill-current"
          viewBox="0 0 24 24"
        >
          <path
            v-if="isOpen"
            fill-rule="evenodd"
            d="M18.278 16.864a1 1 0 0 1-1.414 1.414l-4.829-4.83-4.828 4.83a1 1 0 0 1-1.414-1.414l4.83-4.83-4.83-4.829a1 1 0 1 1 1.414-1.414l4.828 4.83 4.829-4.83a1 1 0 1 1 1.414 1.414l-4.83 4.83 4.83 4.829z"
          />
          <path
            v-else
            fill-rule="evenodd"
            d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"
          />
        </svg>
      </button>
    </div>

    <!-- Mobile Navigation Overlay -->
    <div
      v-if="isOpen"
      class="md:hidden border-b border-brand-border bg-brand-surface py-4 px-4 space-y-3"
    >
      <nav class="flex flex-col gap-3 text-sm">
        <a
          v-for="item in navLinks"
          :key="item.href"
          :href="item.href"
          @click="isOpen = false"
          class="text-brand-text-secondary hover:text-brand-accent-green transition-colors py-1 block"
        >
          <span class="text-brand-accent-green mr-1">></span> {{ item.name }}
        </a>
      </nav>
      <div class="pt-2 border-t border-brand-border">
        <a
          href="/resume.pdf"
          download
          @click="isOpen = false"
          class="inline-block w-full text-center px-4 py-2 rounded border border-brand-accent-cyan-bright/30 text-xs text-brand-accent-cyan-bright bg-brand-accent-cyan-bright/5 hover:bg-brand-accent-cyan-bright/10 active:border-brand-accent-cyan-bright transition-all"
        >
          cat resume.pdf
        </a>
      </div>
    </div>
  </header>
</template>

<script setup lang="ts">
import { ref } from "vue";

const isOpen = ref(false);

const navLinks = [
  { name: "hero", href: "#hero" },
  { name: "about", href: "#about" },
  { name: "what-i-do", href: "#what-i-do" },
  { name: "skills", href: "#skills" },
  { name: "experience", href: "#experience" },
  { name: "achievements", href: "#achievements" },
  { name: "education", href: "#education" },
  { name: "contact", href: "#contact" },
];
</script>
