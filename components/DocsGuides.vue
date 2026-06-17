<script setup>
const cards = [
  { dark: false, icon: '/icons/dg-getting-started.svg', title: 'Getting Started', desc: 'Learn the basics and set up your account in minutes.', items: ['Quick Start Guide', 'Account Setup', 'Creating Your First Doc', 'Project Organization'] },
  { dark: false, icon: '/icons/dg-core.svg', title: 'Core Features', desc: 'Master the fundamental tools for documentation management.', items: ['Document Editor', 'Version Control', 'Templates Library', 'Search & Navigation'] },
  { dark: false, icon: '/icons/dg-ai.svg', title: 'AI Capabilities', desc: 'Harness the power of AI to automate and improve your docs.', items: ['AI Writing Assistant', 'Health Analysis', 'Automated Summaries', 'Smart Suggestions'] },
  { dark: false, icon: '/icons/dg-collab.svg', title: 'Collaboration', desc: 'Work together effectively with your team.', items: ['Sharing & Permissions', 'Comments & Feedback', 'Mentorship System', 'Community Hub'] },
  { dark: false, icon: '/icons/dg-integrations.svg', title: 'Integrations', desc: 'Connect TechniDox with your existing workflow.', items: ['GitHub Sync', 'API Access', 'Webhook Setup', 'Slack Integration'] },
  { dark: true, icon: '/icons/dg-enterprise.svg', title: 'Enterprise', desc: 'Advanced tools for large organizations.', items: ['Team Management', 'Company Analytics', 'SSO & Security', 'Billing & Usage'] },
]
</script>

<template>
  <section class="bg-white section-y">
    <div class="wrap flex flex-col items-center gap-16">
      <SectionHeading
        v-reveal
        title="Documentation & Guides"
        subtitle="Everything you need to know about building, managing, and scaling your knowledge base with TechniDox."
        subtitle-max="760px"
      />

      <div class="grid w-full gap-6 md:grid-cols-2 lg:grid-cols-3">
        <article
          v-for="(card, i) in cards"
          :key="card.title"
          v-reveal="(i % 3) * 90"
          class="flex flex-col gap-4 rounded-2xl p-6 shadow-[0_0_20px_10px_rgba(0,0,0,0.05)]"
          :class="card.dark ? 'border border-white/10 bg-indigo' : 'border border-[#868585]/40 bg-white'"
        >
          <div
            class="flex h-14 w-14 items-center justify-center rounded-2xl"
            :class="card.dark ? 'bg-white/10' : 'bg-[#EAE9F5]'"
          >
            <img :src="$asset(card.icon)" alt="" class="h-6 w-6" :class="{ 'brightness-0 invert': card.dark }" />
          </div>

          <h3
            class="font-display text-2xl font-normal 2xl:text-[28px]"
            :class="card.dark ? 'text-white' : 'text-ink'"
          >
            {{ card.title }}
          </h3>
          <p
            class="font-sans text-base font-normal leading-relaxed 2xl:text-lg"
            :class="card.dark ? 'text-[#F5F4F4]' : 'text-muted'"
          >
            {{ card.desc }}
          </p>

          <ul class="mt-1 flex flex-col gap-3">
            <li
              v-for="item in card.items"
              :key="item"
              class="flex items-center gap-3 font-sans text-base font-normal 2xl:text-lg"
              :class="card.dark ? 'text-[#EBEBEB]' : 'text-muted'"
            >
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" class="shrink-0">
                <circle cx="10" cy="10" r="8.2" :stroke="card.dark ? '#FFFFFF' : '#24BD2E'" stroke-width="1.6" />
                <path d="m6.4 10.2 2.3 2.3 4.9-5" :stroke="card.dark ? '#FFFFFF' : '#24BD2E'" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" />
              </svg>
              {{ item }}
            </li>
          </ul>
        </article>
      </div>
    </div>
  </section>
</template>
