<template>
  <section
    id="about"
    class="py-16 px-4 max-w-4xl mx-auto"
  >
    <SectionTitle
      title="About Me"
      comment="whoami"
    />

    <div class="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
      <!-- Profile Description -->
      <div
        class="md:col-span-7 space-y-4 text-sm sm:text-base leading-relaxed text-[#8b949e]"
      >
        <p>
          I am a professional, results-oriented software engineer based in
          Tehran, with a deep expertise in crafting interactive, lightning-fast
          digital experiences. My specialization revolves around core web
          standards, TypeScript, and the robust Vue.js & Nuxt ecosystem.
        </p>
        <p>
          Throughout my career, I've served in scaling technical products,
          migrating complex codebases from outdated frameworks to modern SSR/SSG
          systems, and leading frontend engineering initiatives. I find pure joy
          in optimizing runtime performance and designing bulletproof
          typescripts contracts for codebases.
        </p>
        <p class="font-mono text-xs sm:text-sm text-brand-accent-green">
          <span class="text-brand-text-secondary">// Fun fact:</span> I'm a
          terminal purist. Whenever possible, I choose keyboard-driven
          navigation, Neovim bindings, and script my workflows in Bash!
        </p>
      </div>

      <!-- Interactive CodeBlock representation -->
      <div class="md:col-span-5 w-full">
        <CodeBlock fileName="developer.json">
          <pre class="text-[#e6edf3] font-mono text-xs sm:text-sm select-all">
<span class="text-brand-accent-green">{</span>
  <span class="text-[#e6edf3]">"name"</span>: <span class="text-brand-accent-cyan-bright">"Hossein Vakh"</span>,
  <span class="text-[#e6edf3]">"role"</span>: <span class="text-brand-accent-cyan-bright">"Senior Frontend Engineer"</span>,
  <span class="text-[#e6edf3]">"location"</span>: <span class="text-brand-accent-cyan-bright">"Tehran, IR"</span>,
  <span class="text-[#e6edf3]">"core_focus"</span>: <span class="text-brand-accent-cyan-bright">"Vue / Nuxt / TS"</span>,
  <span class="text-[#e6edf3]">"passions"</span>: <span class="text-brand-accent-amber">[</span>
    <span class="text-brand-accent-cyan-bright">"Performance Optimization"</span>,
    <span class="text-brand-accent-cyan-bright">"Strict Type Safety"</span>,
    <span class="text-brand-accent-cyan-bright">"Developer Ergonomics"</span>
  <span class="text-brand-accent-amber">]</span>,
  <span class="text-[#e6edf3]">"operating_system"</span>: <span class="text-brand-accent-cyan-bright">"Linux / Win"</span>
<span class="text-brand-accent-green">}</span></pre>
        </CodeBlock>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import SectionTitle from "~/components/ui/SectionTitle.vue";
import CodeBlock from "~/components/ui/CodeBlock.vue";
</script>
