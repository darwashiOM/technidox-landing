<script setup>
const cards = [
  {
    tint: 'bg-tint-indigo',
    iconBg: 'bg-indigo',
    icon: '/icons/ai-gen.svg',
    title: 'AI Documentation Generator',
    desc: 'Automatically converts codebases into comprehensive documentation with parameter extraction, usage examples, and multi-format export. Reduce documentation time from hours to minutes.',
    features: ['Intelligent code analysis', 'Multi-language support', 'Export to any format'],
  },
  {
    tint: 'bg-tint-orange',
    iconBg: 'bg-accent',
    icon: '/icons/ai-score.svg',
    title: 'Documentation Quality Scorer',
    desc: 'Advanced scoring system analyzing readability, inclusivity, structure, and technical accuracy with actionable improvement recommendations and real-time quality assessment.',
    features: ['Multi-dimensional scoring', 'Confidence indicators', 'Actionable recommendations'],
  },
  {
    tint: 'bg-tint-green',
    iconBg: 'bg-success',
    icon: '/icons/ai-review.svg',
    title: 'Human-in-the-Loop Review',
    desc: 'Sophisticated workflow where low-confidence content automatically routes to expert reviewers. Build trust with AI-human collaboration and community validation.',
    features: ['Smart routing system', 'Expert reviewer network', 'Quality assurance workflow'],
  },
]
</script>

<template>
  <section class="bg-white section-y">
    <div class="wrap flex flex-col items-center gap-16">
      <SectionHeading
        eyebrow="AI-Native Documentation Engine"
        title="AI-Native Documentation Engine"
        subtitle="Three revolutionary AI engines working together to transform how teams create, validate, and scale technical documentation."
      />

      <div class="grid w-full gap-8 lg:grid-cols-3">
        <article
          v-for="card in cards"
          :key="card.title"
          class="flex flex-col gap-8 rounded-2xl p-8"
          :class="card.tint"
        >
          <div
            class="flex h-14 w-14 items-center justify-center rounded-2xl"
            :class="card.iconBg"
          >
            <img :src="card.icon" alt="" class="h-7 w-7" />
          </div>

          <div class="flex flex-col gap-4">
            <h3 class="font-display text-2xl font-normal text-ink 2xl:text-[28px]">
              {{ card.title }}
            </h3>
            <p class="font-sans text-base font-normal leading-relaxed text-muted 2xl:text-lg">
              {{ card.desc }}
            </p>
            <ul class="flex flex-col gap-3 pt-2">
              <li
                v-for="f in card.features"
                :key="f"
                class="flex items-center gap-3 font-sans text-base font-normal text-muted 2xl:text-lg"
              >
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" class="shrink-0">
                  <circle cx="10" cy="10" r="8.2" stroke="#24BD2E" stroke-width="1.6" />
                  <path d="m6.4 10.2 2.3 2.3 4.9-5" stroke="#24BD2E" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" />
                </svg>
                {{ f }}
              </li>
            </ul>
          </div>
        </article>
      </div>
    </div>
  </section>
</template>
