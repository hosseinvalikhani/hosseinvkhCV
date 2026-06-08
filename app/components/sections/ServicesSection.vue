<template>
  <section
    id="what-i-do"
    class="py-16 px-4 max-w-4xl mx-auto animate-fade-in"
  >
    <SectionTitle
      title="What I Do"
      comment="services"
    />

    <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
      <div
        v-for="service in services"
        :key="service.title"
        class="terminal-card p-6 flex flex-col gap-4 group"
      >
        <!-- Header with brackets and Custom SVGs -->
        <div class="flex items-center justify-between">
          <span
            class="text-[#8b949e] select-none font-mono text-sm group-hover:text-brand-accent-green transition-colors duration-200"
          >
            { {{ service.code }} }
          </span>
          <div
            class="text-brand-accent-green w-8 h-8 flex items-center justify-center bg-brand-bg md:bg-[#161b22] border border-brand-border rounded p-1.5"
            v-html="service.icon"
          ></div>
        </div>

        <h3
          class="text-lg font-bold font-mono text-brand-text-primary group-hover:text-brand-accent-green transition-colors duration-200"
        >
          {{ service.title }}
        </h3>

        <p class="text-xs sm:text-sm text-[#8b949e] leading-relaxed">
          {{ service.description }}
        </p>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import SectionTitle from "~/components/ui/SectionTitle.vue";

const services = [
  {
    code: "01",
    title: "Sleek Frontend Architecture",
    description:
      "Crafting highly scalable folder structures, modular design patterns, state management models, and robust component hierarchies in Vue 3 and Nuxt. Enterprise grade code built to scale.",
    icon: `<svg class="w-5 h-5" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"></path></svg>`,
  },
  {
    code: "02",
    title: "SEO & Speed Optimization",
    description:
      "Drastically reducing TTFB and bundle sizes. Implementing perfect SEO practices, semantic structures, SSR, pre-rendering, and asset caching to secure 95+ Core Web Vitals scores.",
    icon: `<svg class="w-5 h-5" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg>`,
  },
  {
    code: "03",
    title: "Responsive Tailwind Engineering",
    description:
      "Turning complex graphics designs into pixel-perfect custom interfaces. Fluent in custom Tailwind theme customization, v4 configuration, mobile-first utility classes, and custom animation design.",
    icon: `<svg class="w-5 h-5" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M4 5a1 1 0 011-1h14a1 1 0 011 1v12a1 1 0 01-1 1H5a1 1 0 01-1-1V5z M4 13h16"></path></svg>`,
  },
  {
    code: "04",
    title: "Strict TypeScript Integration",
    description:
      "Establishing compile-time type safety across API clients, Pinia states, custom composables, and Vue props. Minimizing runtime exceptions and making refactoring a bulletproof breeze.",
    icon: `<svg class="w-5 h-5" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path></svg>`,
  },
];
</script>
