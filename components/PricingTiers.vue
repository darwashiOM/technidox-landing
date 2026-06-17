<script setup>
const { open } = useDemoModal()
const tiers = [
  {
    name: 'Standard', icon: 'sprout', highlight: false,
    price: { currency: '$', amount: '499', period: '/month' },
    features: ['AI Documentation Assistant', 'Team Collaboration', 'Basic Analytics', '5GB Storage', 'Email Support', 'Standard Templates', 'Public API Access'],
  },
  {
    name: 'Enhanced', icon: 'zap', highlight: true, popular: true,
    price: { currency: '$', amount: '1,499', period: '/month', accent: true },
    features: ['Everything in Starter', 'Advanced AI Features', 'SSO Integration', 'Advanced Analytics', '50GB Storage', 'Priority Support', 'Custom Branding'],
  },
  {
    name: 'Enterprise', icon: 'building', highlight: false,
    contact: 'Contact Us',
    features: ['Everything in Growth', 'Custom Integration', 'Dedicated Support', 'Custom AI Training', 'Unlimited Storage', '24/7 Premium Support', 'SLA Guarantee'],
  },
]
</script>

<template>
  <section
    class="section-y"
    style="background-color: #15112e; background-image: linear-gradient(150deg, rgba(56, 48, 132, 0.9) 0%, rgba(18, 15, 40, 0.95) 100%), url('/enterprise-bg.jpg'); background-size: cover; background-position: center"
  >
    <div class="wrap flex flex-col items-center gap-12">
      <h2 v-reveal class="text-center font-display text-3xl font-bold text-white 2xl:text-[40px]">
        Plans Built For Every Stage Of Growth
      </h2>

      <div class="grid w-full gap-6 lg:grid-cols-3 lg:items-start">
        <article
          v-for="(tier, i) in tiers"
          :key="tier.name"
          v-reveal="i * 100"
          class="relative flex flex-col gap-6 rounded-2xl p-8"
          :class="tier.highlight ? 'bg-indigo shadow-[0_20px_50px_-10px_rgba(66,56,158,0.6)] lg:-mt-4 lg:pb-12 lg:pt-12' : 'border border-white/10 bg-white/[0.04]'"
        >
          <span
            v-if="tier.popular"
            class="absolute right-6 top-6 rounded-full bg-accent/20 px-3 py-1 font-sans text-xs font-bold text-accent"
          >
            Popular
          </span>

          <!-- tier name + icon -->
          <div class="flex items-center gap-2 text-accent">
            <svg v-if="tier.icon === 'sprout'" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#24BD2E" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M7 20h10M12 20V8M12 8a4 4 0 0 0-4-4H5v1a4 4 0 0 0 4 4h3Zm0 0a4 4 0 0 1 4-4h3v1a4 4 0 0 1-4 4h-3Z" /></svg>
            <svg v-else-if="tier.icon === 'zap'" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#F9A71E" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M13 2 3 14h9l-1 8 10-12h-9l1-8Z" /></svg>
            <svg v-else width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#9B93E0" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M3 21h18M6 21V7l6-4 6 4v14M10 9h.01M14 9h.01M10 13h.01M14 13h.01" /></svg>
            <h3 class="font-display text-xl font-bold text-white">{{ tier.name }}</h3>
          </div>

          <!-- price -->
          <div v-if="tier.price" class="flex items-baseline gap-1" :class="tier.price.accent ? 'text-accent' : 'text-[#F5F4F4]'">
            <span class="font-display text-xl font-semibold">{{ tier.price.currency }}</span>
            <span class="font-display text-4xl font-bold 2xl:text-[40px]">{{ tier.price.amount }}</span>
            <span class="font-sans text-lg font-normal">{{ tier.price.period }}</span>
          </div>
          <div v-else class="font-display text-4xl font-bold text-[#F5F4F4] 2xl:text-[40px]">
            {{ tier.contact }}
          </div>

          <!-- features -->
          <ul class="flex flex-col gap-3.5">
            <li
              v-for="f in tier.features"
              :key="f"
              class="flex items-center gap-3 font-sans text-base text-[#D7D6D6] 2xl:text-lg"
            >
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" class="shrink-0">
                <circle cx="10" cy="10" r="8.2" stroke="#24BD2E" stroke-width="1.6" />
                <path d="m6.4 10.2 2.3 2.3 4.9-5" stroke="#24BD2E" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" />
              </svg>
              {{ f }}
            </li>
          </ul>

          <!-- CTA -->
          <button
            type="button"
            class="mt-auto rounded-lg py-3 text-center font-sans text-lg font-semibold transition-colors"
            :class="tier.highlight ? 'bg-white text-indigo hover:bg-white/90' : 'border border-white/15 text-[#D7D6D6] hover:bg-white/5'"
            @click="open('start')"
          >
            Get Started
          </button>
        </article>
      </div>
    </div>
  </section>
</template>
