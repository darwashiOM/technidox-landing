<script setup>
const cards = [
  {
    dark: false,
    icon: '/icons/tm-opensource.svg',
    iconBg: 'bg-[#F2F1FF]',
    eyebrow: 'Open Source Teams',
    title: 'Ship docs as fast as you ship code',
    desc: 'Democratize contributions with micro-tasks, voice input, and mentorship matching. Keep your community engaged with gamification that makes documentation feel like progress, not chores.',
    features: ['78% less burden on maintainers', 'Non-technical contributors via micro-tasks', 'Gamified streaks keep contributors returning'],
  },
  {
    dark: false,
    icon: '/icons/tm-eng.svg',
    iconBg: 'bg-accent/10',
    eyebrow: 'Engineering Enablement',
    title: 'Onboard developers 2.3x faster',
    desc: 'Connect your CI/CD pipeline to TechniDox and auto-generate docs on every merge. Quality gates catch regressions before they reach production. Developers self-serve answers instead of interrupting colleagues.',
    features: ['CI/CD quality gates prevent doc regressions', 'Auto-generated docs on every merge', '34% fewer "how do I..." interruptions'],
  },
  {
    dark: false,
    icon: '/icons/tm-platform.svg',
    iconBg: 'bg-[#24BD2E]/10',
    eyebrow: 'Platform Teams',
    title: 'Documentation that scales with your APIs',
    desc: 'Generate API reference docs, SDK guides, and integration playbooks automatically from your codebase. Keep them in sync with confidence scoring that flags drift before your customers notice.',
    features: ['Auto-synced API reference on every deploy', 'Multi-format export: OpenAPI, MDX, HTML', 'Confidence alerts flag doc drift in real time'],
  },
  {
    dark: true,
    icon: '/icons/tm-enterprise.svg',
    iconBg: 'bg-[#F2F1FF]',
    eyebrow: 'Enterprise Documentation',
    title: 'Documentation your auditors will approve',
    desc: 'Meet ISO, SOC2, and internal compliance requirements with automated audit trails, version control, and executive dashboards. Show documentation ROI to the C-suite with numbers that matter.',
    features: ['ISO 27001 & SOC2 compliance reporting', 'Full audit trail for every doc change', 'Executive ROI dashboards out of the box'],
  },
]
</script>

<template>
  <section class="bg-white section-y">
    <div class="wrap flex flex-col items-center gap-16">
      <SectionHeading
        v-reveal
        eyebrow="Use Cases"
        title="Built For Every Team That Ships Code."
        subtitle="Whether you're a solo OSS maintainer or a 10,000-person enterprise, TechniDox adapts to how your team creates and maintains documentation."
        subtitle-max="900px"
      />

      <div class="grid w-full gap-6 lg:grid-cols-2">
        <article
          v-for="(card, i) in cards"
          :key="card.title"
          v-reveal="i * 90"
          class="flex flex-col gap-5 rounded-2xl p-8 shadow-[0_0_20px_10px_rgba(0,0,0,0.05)]"
          :class="card.dark ? 'border border-white/10 bg-indigo' : 'border border-[#868585]/40 bg-white'"
        >
          <div class="flex items-center gap-4">
            <div
              class="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl"
              :class="card.iconBg"
            >
              <img :src="card.icon" alt="" class="h-6 w-6" />
            </div>
            <span
              class="font-sans text-xs font-semibold uppercase tracking-wide 2xl:text-sm"
              :class="card.dark ? 'text-[#EBEBEB]' : 'text-ink'"
            >
              {{ card.eyebrow }}
            </span>
          </div>

          <h3
            class="font-display text-2xl font-normal 2xl:text-[28px]"
            :class="card.dark ? 'text-white' : 'text-ink'"
          >
            {{ card.title }}
          </h3>
          <p
            class="font-sans text-base font-normal leading-relaxed 2xl:text-lg"
            :class="card.dark ? 'text-[#EBEBEB]' : 'text-muted'"
          >
            {{ card.desc }}
          </p>

          <ul class="mt-1 flex flex-col gap-3">
            <li
              v-for="f in card.features"
              :key="f"
              class="flex items-center gap-3 font-sans text-base font-normal 2xl:text-lg"
              :class="card.dark ? 'text-[#EBEBEB]' : 'text-muted'"
            >
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" class="shrink-0">
                <circle cx="10" cy="10" r="8.2" :stroke="card.dark ? '#FFFFFF' : '#42389E'" stroke-width="1.6" />
                <path d="m6.4 10.2 2.3 2.3 4.9-5" :stroke="card.dark ? '#FFFFFF' : '#42389E'" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" />
              </svg>
              {{ f }}
            </li>
          </ul>
        </article>
      </div>
    </div>
  </section>
</template>
