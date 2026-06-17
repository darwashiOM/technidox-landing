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
</script>

<template>
  <section class="bg-white section-y">
    <div class="wrap flex flex-col items-center gap-16">
      <SectionHeading
        v-reveal
        eyebrow="AI-Native Documentation Engine"
        title="Community-Driven Improvement At Scale"
        subtitle="Democratize documentation contributions with gamified workflows, micro-tasks, mentorship matching, and peer validation systems that keep contributors engaged long-term."
      />

      <div class="grid w-full items-center gap-12 lg:grid-cols-[0.8fr_1fr] lg:gap-16 2xl:gap-24">
        <!-- Left: feature list -->
        <div v-reveal class="flex flex-col gap-8">
          <div v-for="f in features" :key="f.title" class="flex gap-4">
            <div
              class="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl"
              :class="f.bg"
            >
              <img :src="$asset(f.icon)" alt="" class="h-6 w-6" />
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
        <ProcessFlowCard v-reveal="120" />
      </div>
    </div>
  </section>
</template>
