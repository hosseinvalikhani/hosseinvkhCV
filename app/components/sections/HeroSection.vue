<template>
  <section
    id="hero"
    class="min-h-[calc(100vh-64px)] flex items-center justify-center py-16 px-4 relative overflow-hidden"
  >
    <!-- Grid decorative background overlay -->
    <div
      class="absolute inset-0 opacity-[0.03] pointer-events-none select-none"
      style="
        background-image: radial-gradient(
          var(--color-brand-border) 1px,
          transparent 1px
        );
        background-size: 16px 16px;
      "
    ></div>

    <div class="max-w-4xl w-full flex flex-col gap-10 relative z-10">
      <!-- Terminal Welcome tag -->
      <div
        class="inline-flex self-start px-2 py-1 bg-brand-accent-green/5 border border-brand-accent-green/20 rounded font-mono text-xs text-brand-accent-green"
      >
        <span class="animate-pulse mr-1.5">•</span> session_started: system
        initialized
      </div>

      <!-- Main Headline + Typing -->
      <div class="space-y-4">
        <h1
          class="text-3xl sm:text-5xl md:text-6xl font-extrabold tracking-tight font-sans"
        >
          Hi, I'm
          <span
            class="bg-gradient-to-r from-brand-accent-green via-brand-accent-cyan-bright to-brand-accent-cyan-bright bg-clip-text text-transparent"
            >Hossein Vakh</span
          >
        </h1>

        <!-- Typing effect text -->
        <div
          class="font-mono text-lg sm:text-2xl md:text-3xl text-brand-text-secondary h-12 flex items-center"
        >
          <span class="text-brand-accent-green mr-2 select-none">></span>
          <span>{{ displayText }}</span>
          <span
            class="inline-block w-2.5 h-6 sm:h-8 bg-brand-accent-green ml-1"
            :class="{ 'animate-cursor-blink': isBlinking }"
          ></span>
        </div>
      </div>

      <!-- Short hook bio -->
      <p
        class="text-sm sm:text-base md:text-lg text-[#8b949e] max-w-2xl leading-relaxed"
      >
        I engineer sleek, developer-friendly, and high-performance user
        interfaces. Specialized in the
        <span class="text-brand-text-primary font-bold">Vue / Nuxt</span>
        ecosystem and
        <span class="text-brand-text-primary font-bold">TypeScript</span>.
        Focused on code cleanliness, optimized SSR/SSG architectures, and
        beautiful developer ergonomics.
      </p>

      <!-- Terminal Command CLI CTA Buttons -->
      <div
        class="flex flex-wrap items-center gap-4 text-xs sm:text-sm font-mono"
      >
        <a
          href="#contact"
          class="flex items-center gap-2 px-5 py-3 rounded bg-brand-accent-green/10 border border-brand-accent-green text-brand-accent-green font-bold hover:bg-brand-accent-green hover:text-brand-bg transition-all duration-300"
        >
          <span>npm run contact-me</span>
        </a>
        <a
          href="#experience"
          class="flex items-center gap-2 px-5 py-3 rounded bg-brand-surface border border-brand-border text-brand-text-primary hover:border-brand-accent-cyan-bright hover:bg-[#11151c] transition-all duration-300"
        >
          <span>git checkout experience</span>
        </a>
      </div>

      <!-- Live Terminal Info Stats -->
      <div class="mt-4 grid grid-cols-2 md:grid-cols-4 gap-4">
        <div
          v-for="stat in stats"
          :key="stat.label"
          class="border border-brand-border bg-brand-surface/40 p-4 rounded font-mono"
        >
          <div class="text-brand-accent-cyan-bright text-xs select-none">
            // {{ stat.label }}
          </div>
          <div
            class="text-xl sm:text-2xl font-bold mt-1 text-brand-text-primary"
          >
            {{ stat.value }}
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { useTypingEffect } from "~/composables/useTypingEffect";

const phrases = [
  "Senior Frontend Engineer",
  "Nuxt & Vue.js Specialist",
  "TypeScript Enthusiast",
  "Web Performance Optimizer",
];

const { displayText, isBlinking } = useTypingEffect(phrases, 100, 50, 2000);

const stats = [
  { label: "exp_years", value: "6+" },
  { label: "lines_of_code", value: "450k+" },
  { label: "solved_issues", value: "1,200+" },
  { label: "coffee_brewed", value: "1.8k+" },
];
</script>
