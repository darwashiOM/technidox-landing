<script setup>
const features = [
  {
    icon: '/icons/cm-gamepad.svg',
    bg: 'bg-indigo/10',
    title: 'Gamified Contributions',
    desc: 'Streak tracking, impact badges, and achievement systems that reward quality contributions and retain community members.',
  },
  {
    icon: '/icons/cm-puzzle.svg',
    bg: 'bg-accent/10',
    title: 'Micro-Contribution Architecture',
    desc: 'Complex tasks broken into 5-10 minute contributions, making open source accessible to everyone regardless of time or expertise.',
  },
  {
    icon: '/icons/cm-mentor.svg',
    bg: 'bg-[#3F9220]/10',
    title: 'Mentorship Matching',
    desc: 'AI-powered pairing of experienced contributors with newcomers, fostering knowledge transfer and building stronger communities.',
  },
  {
    icon: '/icons/cm-shield.svg',
    bg: 'bg-indigo/10',
    title: 'Peer Validation Network',
    desc: 'Accept, edit, and reject workflows that improve AI models over time through community-driven quality signals.',
  },
]

const steps = [
  { n: '1', color: 'text-indigo', bg: 'bg-indigo/10', title: 'AI generates documentation', sub: 'From codebase analysis', status: 'check' },
  { n: '2', color: 'text-accent', bg: 'bg-accent/10', title: 'Quality scoring & routing', sub: 'Confidence: 72% - Review needed', status: 'review' },
  { n: '3', color: 'text-[#3F9220]', bg: 'bg-[#3F9220]/10', title: 'Community review', sub: '3 contributors validated', status: 'check' },
  { check: true, title: 'Published & improving', sub: 'AI learns from feedback', status: 'star' },
]
</script>

<template>
  <section class="bg-white section-y">
    <div class="wrap flex flex-col items-center gap-16">
      <SectionHeading
        eyebrow="AI-Native Documentation Engine"
        title="Community-Driven Improvement At Scale"
        subtitle="Democratize documentation contributions with gamified workflows, micro-tasks, mentorship matching, and peer validation systems that keep contributors engaged long-term."
      />

      <div class="grid w-full items-center gap-12 lg:grid-cols-2 lg:gap-20 2xl:gap-[100px]">
        <!-- Left: feature list -->
        <div class="flex flex-col gap-8">
          <div v-for="f in features" :key="f.title" class="flex gap-4">
            <div
              class="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl"
              :class="f.bg"
            >
              <img :src="f.icon" alt="" class="h-6 w-6" />
            </div>
            <div class="flex flex-col gap-1.5">
              <h3 class="font-display text-lg font-semibold text-ink 2xl:text-xl">
                {{ f.title }}
              </h3>
              <p class="font-sans text-base font-normal leading-relaxed text-muted 2xl:text-lg">
                {{ f.desc }}
              </p>
            </div>
          </div>
        </div>

        <!-- Right: process card -->
        <div class="rounded-2xl border border-line bg-white p-6 shadow-sm 2xl:p-8">
          <div class="flex flex-col gap-4">
            <div
              v-for="step in steps"
              :key="step.title"
              class="flex items-center gap-4 rounded-lg bg-tint-step px-5 py-4"
            >
              <!-- Left badge -->
              <div
                v-if="step.check"
                class="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#24BD2E]"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                  <path d="m6 12 4 4 8-8" stroke="white" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" />
                </svg>
              </div>
              <div
                v-else
                class="flex h-8 w-8 shrink-0 items-center justify-center rounded-full font-sans text-sm font-bold"
                :class="[step.bg, step.color]"
              >
                {{ step.n }}
              </div>

              <!-- Middle -->
              <div class="flex flex-1 flex-col">
                <p class="font-display text-base font-semibold text-ink 2xl:text-lg">
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
                width="22"
                height="22"
                viewBox="0 0 24 24"
                fill="none"
                class="shrink-0"
              >
                <circle cx="12" cy="12" r="10" fill="#3F9220" fill-opacity="0.12" />
                <path d="m8 12 2.5 2.5L16 9" stroke="#3F9220" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
              </svg>
              <img v-else src="/icons/cm-step-star.svg" alt="" class="h-5 w-5 shrink-0" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
