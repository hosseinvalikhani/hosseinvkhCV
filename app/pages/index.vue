<template>
  <div class="space-y-8 sm:space-y-12">
    <!-- Hero section -->
    <HeroSection />

    <!-- About section -->
    <AboutSection />

    <!-- Services Section -->
    <ServicesSection />

    <!-- Skills Section -->
    <SkillsSection />

    <!-- Experience Section -->
    <ExperienceSection />

    <!-- Achievements Section -->
    <AchievementsSection />

    <!-- Education Section -->
    <EducationSection />

    <!-- Contact Section -->
    <ContactSection />
  </div>
</template>

<script setup lang="ts">
import HeroSection from "~/components/sections/HeroSection.vue";
import AboutSection from "~/components/sections/AboutSection.vue";
import ServicesSection from "~/components/sections/ServicesSection.vue";
import SkillsSection from "~/components/sections/SkillsSection.vue";
import ExperienceSection from "~/components/sections/ExperienceSection.vue";
import AchievementsSection from "~/components/sections/AchievementsSection.vue";
import EducationSection from "~/components/sections/EducationSection.vue";
import ContactSection from "~/components/sections/ContactSection.vue";
</script>
