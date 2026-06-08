<template>
  <section
    id="achievements"
    class="py-16 px-4 max-w-4xl mx-auto"
  >
    <SectionTitle
      title="Key Achievements"
      comment="metrics_analytics"
    />

    <div class="grid grid-cols-1 md:grid-cols-3 gap-6 font-mono">
      <div
        v-for="ach in achievements"
        :key="ach.metric"
        class="terminal-card p-6 flex flex-col justify-between border-t-2"
        :class="ach.colorBorderClass"
      >
        <!-- Metric display -->
        <div class="space-y-2">
          <!-- Brackets comment label -->
          <div class="text-[#8b949e] text-xs">// {{ ach.label }}</div>
          <!-- Highlighted metric -->
          <div
            class="text-3xl sm:text-4xl font-extrabold"
            :class="ach.colorTextClass"
          >
            {{ ach.metric }}
          </div>
        </div>

        <!-- Description -->
        <p
          class="text-xs sm:text-sm text-[#8b949e] leading-relaxed mt-4 font-sans"
        >
          {{ ach.description }}
        </p>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import SectionTitle from "~/components/ui/SectionTitle.vue";

const achievements = [
  {
    label: "load_time_optimization",
    metric: "-42% Latency",
    description:
      "Successfully replaced slow React/legacy page assets with server-side rendered (SSR) Nuxt routes, driving loading speed down and securing sub-second TTFB on slow connections.",
    colorTextClass: "text-brand-accent-green",
    colorBorderClass: "hover:border-brand-accent-green",
  },
  {
    label: "scaffolding_acceleration",
    metric: "+35% Velocity",
    description:
      "Engineered an in-house registry of bespoke structural elements and hooks styled with Tailwind CSS v4, empowering team developers to deploy standard forms and modules faster.",
    colorTextClass: "text-brand-accent-cyan-bright",
    colorBorderClass: "hover:border-brand-accent-cyan-bright",
  },
  {
    label: "quality_assurance",
    metric: "98% Coverage",
    description:
      "Implemented thorough automated units, hooks, and integration test suites utilizing Vitest and Vue Test Utils, mitigating regression errors and improving staging velocity.",
    colorTextClass: "text-brand-accent-amber",
    colorBorderClass: "hover:border-brand-accent-amber",
  },
];
</script>
