<template>
  <section
    id="skills"
    class="py-16 px-4 max-w-4xl mx-auto"
  >
    <SectionTitle
      title="Skills & Technologies"
      comment="environment_variables"
    />

    <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
      <div
        v-for="category in skillCategories"
        :key="category.title"
        class="rounded-lg border border-brand-border bg-brand-surface/50 p-6 flex flex-col gap-4 font-mono hover:border-brand-accent-green/30 transition-all duration-300"
      >
        <!-- Category header -->
        <div class="flex items-center gap-2 border-b border-brand-border pb-3">
          <span class="text-brand-accent-green font-bold">#</span>
          <span
            class="text-xs sm:text-sm font-bold text-brand-text-primary uppercase tracking-wider"
          >
            {{ category.title }}
          </span>
        </div>

        <!-- Skills grid -->
        <div class="flex flex-wrap gap-2.5">
          <SkillBadge
            v-for="skill in category.skills"
            :key="skill"
            :name="skill"
          />
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import SectionTitle from "~/components/ui/SectionTitle.vue";
import SkillBadge from "~/components/ui/SkillBadge.vue";

const skillCategories = [
  {
    title: "frontend_core",
    skills: [
      "Vue 3",
      "Nuxt 4 / 3",
      "TypeScript",
      "JavaScript",
      "Pinia",
      "Vue Router",
      "REST APIs",
      "RxJS",
    ],
  },
  {
    title: "styling_layout",
    skills: [
      "Tailwind v4",
      "CSS Grid / Flex",
      "SASS / SCSS",
      "PostCSS",
      "Responsive Web",
      "HTML5 Semantics",
      "SVG Vector",
    ],
  },
  {
    title: "tooling_workflow",
    skills: [
      "Git / GitHub",
      "Vite",
      "ESLint / Prettier",
      "Vitest",
      "Nuxt DevTools",
      "CI/CD Pipelines",
      "Bash Scripting",
      "Linux Sys",
    ],
  },
];
</script>
