<script setup>
const steps = [
  { n: '1', color: 'text-indigo', bg: 'bg-indigo/10', title: 'AI generates documentation', sub: 'From codebase analysis', status: 'check' },
  { n: '2', color: 'text-accent', bg: 'bg-accent/10', title: 'Quality scoring & routing', sub: 'Confidence: 72% - Review needed', status: 'review' },
  { n: '3', color: 'text-[#3F9220]', bg: 'bg-[#3F9220]/10', title: 'Community review', sub: '3 contributors validated', status: 'check' },
  { check: true, title: 'Published & improving', sub: 'AI learns from feedback', status: 'star' },
]
</script>

<template>
  <div class="rounded-2xl border border-line bg-white p-6 shadow-[0_0_20px_10px_rgba(0,0,0,0.05)] 2xl:p-8">
    <div class="flex flex-col gap-5 2xl:gap-6">
      <div
        v-for="step in steps"
        :key="step.title"
        class="flex items-center gap-4 rounded-lg bg-tint-step px-5 py-5 2xl:px-6 2xl:py-6"
      >
        <!-- Left badge -->
        <div
          v-if="step.check"
          class="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#24BD2E]"
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
            <path d="m6 12 4 4 8-8" stroke="white" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" />
          </svg>
        </div>
        <div
          v-else
          class="flex h-10 w-10 shrink-0 items-center justify-center rounded-full font-sans text-base font-bold"
          :class="[step.bg, step.color]"
        >
          {{ step.n }}
        </div>

        <!-- Middle -->
        <div class="flex flex-1 flex-col gap-0.5">
          <p class="font-display text-lg font-semibold text-ink 2xl:text-xl">
            {{ step.title }}
          </p>
          <p class="font-sans text-sm font-normal text-muted 2xl:text-base">
            {{ step.sub }}
          </p>
        </div>

        <!-- Right status -->
        <span
          v-if="step.status === 'review'"
          class="rounded-full bg-accent/10 px-3 py-1 font-sans text-xs font-semibold text-accent"
        >
          Review
        </span>
        <svg
          v-else-if="step.status === 'check'"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          class="shrink-0"
        >
          <circle cx="12" cy="12" r="10" fill="#3F9220" fill-opacity="0.12" />
          <path d="m8 12 2.5 2.5L16 9" stroke="#3F9220" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
        </svg>
        <img v-else src="/icons/cm-step-star.svg" alt="" class="h-6 w-6 shrink-0" />
      </div>
    </div>
  </div>
</template>
