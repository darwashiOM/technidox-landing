<script setup>
const features = [
  'AI-Powered Writing Assistant',
  'Real-time Health Analysis',
  'Enterprise Security',
  'Cross-Team Collaboration',
]
</script>

<template>
  <section class="bg-white section-y">
    <div class="wrap flex flex-col items-center gap-16">
      <SectionHeading v-reveal title="TechniDox Overview" />

      <div class="grid w-full items-center gap-12 lg:grid-cols-2 lg:gap-20 2xl:gap-[100px]">
        <!-- Left: intro + feature checks -->
        <div v-reveal class="flex flex-col gap-6">
          <p class="font-sans text-base leading-relaxed text-muted 2xl:text-lg">
            TechniDox is an enterprise-grade knowledge infrastructure platform
            designed to transform how teams create, manage, and scale their
            documentation.
          </p>
          <p class="font-sans text-base leading-relaxed text-muted 2xl:text-lg">
            By combining AI-powered insights with collaborative workflows,
            TechniDox ensures your organizational knowledge is always accurate,
            accessible, and up-to-date.
          </p>
          <ul class="flex flex-col gap-4 pt-2">
            <li
              v-for="f in features"
              :key="f"
              class="flex items-center gap-3 font-sans text-base text-muted 2xl:text-lg"
            >
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" class="shrink-0">
                <circle cx="10" cy="10" r="8.2" stroke="#42389E" stroke-width="1.6" />
                <path d="m6.4 10.2 2.3 2.3 4.9-5" stroke="#42389E" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" />
              </svg>
              {{ f }}
            </li>
          </ul>
        </div>

        <!-- Right: process flow card -->
        <ProcessFlowCard v-reveal="120" />
      </div>
    </div>
  </section>
</template>
