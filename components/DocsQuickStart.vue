<script setup>
import { ref } from 'vue'

// Step 1 is from Figma; steps 2–3 continue the onboarding flow.
const steps = [
  {
    title: 'Set up your workspace',
    items: [
      'Create an account or sign in with your enterprise credentials.',
      'Initialize your first project from the dashboard.',
      'Invite team members and set their permissions.',
      '(Optional) Connect your GitHub repository for automatic sync.',
    ],
  },
  {
    title: 'Generate your first docs',
    items: [
      'Point TechniDox at your codebase or import existing docs.',
      'Let the AI generate structured documentation automatically.',
      'Review confidence scores and quality suggestions.',
      'Route low-confidence sections to expert reviewers.',
    ],
  },
  {
    title: 'Review & publish',
    items: [
      'Collaborate with your team on edits and approvals.',
      'Track documentation health on the live dashboard.',
      'Publish to your portal or export to any format.',
      'Enable auto-sync to keep docs current on every merge.',
    ],
  },
]

const current = ref(0)
const prev = () => (current.value = (current.value - 1 + steps.length) % steps.length)
const next = () => (current.value = (current.value + 1) % steps.length)
</script>

<template>
  <section class="bg-white pb-16 sm:pb-20 2xl:pb-[120px]">
    <div class="wrap">
      <div
        v-reveal
        class="overflow-hidden rounded-3xl px-5 py-10 sm:px-10 2xl:py-14"
        style="background-color: #15112e; background-image: linear-gradient(150deg, rgba(56, 48, 132, 0.88) 0%, rgba(21, 17, 46, 0.94) 100%), url('/enterprise-bg.jpg'); background-size: cover; background-position: center"
      >
        <h2 class="text-center font-display text-3xl font-bold text-white 2xl:text-5xl">
          Quick Start Guide
        </h2>

        <!-- pagination dots -->
        <div class="mt-5 flex justify-center gap-2">
          <button
            v-for="(s, i) in steps"
            :key="i"
            type="button"
            :aria-label="`Go to step ${i + 1}`"
            class="h-2 rounded-full transition-all"
            :class="i === current ? 'w-6 bg-white' : 'w-2 bg-white/30 hover:bg-white/50'"
            @click="current = i"
          />
        </div>

        <!-- carousel -->
        <div class="mx-auto mt-8 flex max-w-[900px] items-center gap-3 sm:gap-5">
          <button
            type="button"
            aria-label="Previous step"
            class="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-white/15 text-white transition-colors hover:bg-white/10"
            @click="prev"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="m15 18-6-6 6-6" /></svg>
          </button>

          <div class="flex-1 rounded-2xl border border-white/10 bg-white/5 p-6 2xl:p-8">
            <div class="flex items-start justify-between gap-4">
              <h3 class="font-display text-xl font-normal text-white 2xl:text-[28px]">
                {{ steps[current].title }}
              </h3>
              <span class="shrink-0 rounded-full bg-accent/15 px-3 py-1 font-mont text-xs font-semibold text-accent 2xl:text-sm">
                Step {{ current + 1 }}
              </span>
            </div>
            <ol class="mt-5 flex flex-col gap-2.5">
              <li
                v-for="(item, idx) in steps[current].items"
                :key="idx"
                class="flex gap-2 font-sans text-sm leading-relaxed text-[#D7D6D6] 2xl:text-base"
              >
                <span class="shrink-0 font-semibold text-white/70">{{ idx + 1 }}.</span>
                <span>{{ item }}</span>
              </li>
            </ol>
          </div>

          <button
            type="button"
            aria-label="Next step"
            class="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-white/15 text-white transition-colors hover:bg-white/10"
            @click="next"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="m9 18 6-6-6-6" /></svg>
          </button>
        </div>
      </div>
    </div>
  </section>
</template>
