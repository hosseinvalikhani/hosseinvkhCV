<template>
  <section
    id="experience"
    class="py-16 px-4 max-w-4xl mx-auto"
  >
    <SectionTitle
      title="Work Experience"
      comment="git_log"
    />

    <!-- Vertical Timeline container -->
    <div class="border-l border-brand-border ml-1.5 sm:ml-2 pl-2">
      <TimelineItem
        v-for="job in experiences"
        :key="job.company"
        :role="job.role"
        :company="job.company"
        :period="job.period"
        :location="job.location"
        :highlights="job.highlights"
      />
    </div>
  </section>
</template>

<script setup lang="ts">
import SectionTitle from "~/components/ui/SectionTitle.vue";
import TimelineItem from "~/components/ui/TimelineItem.vue";

const experiences = [
  {
    role: "Senior Frontend Team Lead",
    company: "GenTech Solutions",
    period: "2023 - Present",
    location: "Tehran, IR",
    highlights: [
      "Spearheaded complete migration of legacy corporate console dashboard to Nuxt 3, yielding a 42% decrease in initial load latency and sub-second average TTFB.",
      "Managed, coached, and mentored a team of 4 frontend engineers, introducing standard coding guidelines, pull-request verification scripts, and standard TypeScript interfaces.",
      "Designed and implemented a private corporate UI component registry based on Tailwind CSS v4 and Vue 3 composables, speeding up developers' scaffolding workflows by 35%.",
      "Optimized bundlers configurations, dynamic bundle splittings, and SSR page pre-render rules, saving several megabytes in build script packages.",
    ],
  },
  {
    role: "Frontend Developer",
    company: "Novin Digital",
    period: "2020 - 2023",
    location: "Tehran, IR",
    highlights: [
      "Designed and spearheaded complex dashboards, e-commerce stores, and high-frequency analytical interfaces with responsive charts and live terminal widgets.",
      "Initiated search engine optimization (SEO) efforts and Core Web Vitals profiling, reducing the Cumulative Layout Shift (CLS) of critical home and target content pages from 0.24 score to 0.02.",
      "Wrote strict TypeScript contracts and Vue Router navigation hooks to handle multi-tier roles-based page access checks safely on client devices.",
      "Integrated various REST APIs, structured global state stores using Pinia / Vuex, and engineered auto-reconnect WebSocket connections for real-time order alerts.",
    ],
  },
];
</script>
