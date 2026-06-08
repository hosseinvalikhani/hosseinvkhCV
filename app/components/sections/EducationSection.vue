<template>
  <section
    id="education"
    class="py-16 px-4 max-w-4xl mx-auto"
  >
    <SectionTitle
      title="Education & Growth"
      comment="credentials_and_learning"
    />

    <div class="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
      <!-- Left side: Education -->
      <div class="md:col-span-6 w-full space-y-4">
        <h3
          class="font-mono text-xs sm:text-sm text-brand-accent-amber select-none"
        >
          // academic_history
        </h3>

        <div class="terminal-card p-6 flex flex-col gap-2 font-mono">
          <div class="flex justify-between items-start gap-2">
            <h4 class="text-base font-bold text-brand-text-primary">
              B.Sc. in Software Engineering
            </h4>
            <span
              class="text-xs text-brand-accent-green bg-brand-accent-green/5 border border-brand-accent-green/20 px-2 py-0.5 rounded shrink-0"
            >
              2016 - 2020
            </span>
          </div>

          <div class="text-xs sm:text-sm text-brand-accent-cyan-bright">
            University of Tehran
          </div>

          <p class="text-xs text-[#8b949e] font-sans mt-3 leading-relaxed">
            Acquired core software engineering fundamentals, including advanced
            data structures, algorithm analysis, system architecture,
            object-oriented systems, database theory, and web application
            design.
          </p>
        </div>
      </div>

      <!-- Right side: Currently Learning Tracker -->
      <div class="md:col-span-6 w-full space-y-4 font-mono">
        <h3
          class="font-mono text-xs sm:text-sm text-brand-accent-amber select-none"
        >
          // currently_learning
        </h3>

        <div
          class="border border-brand-border bg-brand-surface p-6 rounded-lg flex flex-col gap-5"
        >
          <!-- Text descriptor -->
          <div
            class="text-xs sm:text-sm text-brand-text-primary flex items-center gap-2"
          >
            <span class="text-brand-accent-cyan-bright font-bold">>></span>
            <span>Refining my stack with system-level concepts:</span>
          </div>

          <!-- Progress Loading bar -->
          <div class="space-y-3 font-mono text-xs">
            <div
              v-for="item in learningItems"
              :key="item.name"
              class="space-y-1"
            >
              <div
                class="flex justify-between text-xs font-bold text-[#8b949e]"
              >
                <span>{{ item.name }}</span>
                <span class="text-brand-accent-green"
                  >{{ item.percentage }}%</span
                >
              </div>
              <div
                class="w-full bg-[#11151c] border border-brand-border rounded h-3 overflow-hidden p-0.5"
              >
                <div
                  class="bg-brand-accent-green h-full rounded-sm transition-all duration-[1500ms]"
                  :style="{ width: item.percentage + '%' }"
                ></div>
              </div>
            </div>
          </div>

          <!-- Small terminal status -->
          <div
            class="text-[11px] text-[#8b949e] flex items-center gap-1.5 pt-2 border-t border-brand-border select-none"
          >
            <span class="text-brand-accent-green animate-pulse">➤</span>
            <span>learning_daemon running (pid: 4092)</span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import SectionTitle from "~/components/ui/SectionTitle.vue";

const learningItems = [
  { name: "Rust / WebAssembly", percentage: 75 },
  { name: "Golang Backend API", percentage: 60 },
  { name: "Docker & K8s Containerization", percentage: 55 },
];
</script>
