<script setup>
const features = [
  'AI-generated docs in minutes',
  'Confidence scoring built in',
  'Enterprise-grade compliance',
]
</script>

<template>
  <section class="hero-grid relative overflow-hidden">
    <SiteHeader />

    <!-- Floating document decorations (desktop only) -->
    <div class="pointer-events-none absolute inset-0 mx-auto hidden max-w-[1920px] 2xl:block">
      <img src="/hero/doc-l1.png" alt="" class="absolute left-[40px] top-[300px] w-[272px]" />
      <img src="/hero/card-l2.png" alt="" class="absolute -left-[22px] top-[520px] w-[206px] drop-shadow-xl" />
      <img src="/hero/doc-r1.png" alt="" class="absolute right-[50px] top-[270px] w-[300px]" />
      <img src="/hero/doc-r2.png" alt="" class="absolute -right-[20px] top-[560px] w-[262px]" />
    </div>

    <!-- Hero content -->
    <div class="wrap relative z-10 flex min-h-[560px] flex-col items-center justify-center pb-20 pt-28 text-center sm:min-h-[680px] sm:pt-32 2xl:min-h-[1080px] 2xl:py-0">
      <div class="flex max-w-[1255px] flex-col items-center gap-10">
        <div class="flex flex-col items-center gap-4">
          <h1
            class="font-display text-[34px] font-bold leading-[1.12] text-indigo sm:text-[48px] sm:leading-[1.12] 2xl:text-[64px] 2xl:leading-[72px]"
          >
            <span class="italic">Documentation</span> that
            <span class="text-accent">builds</span> itself,
            <span class="text-accent">improves</span> itself, and proves its
            <span class="text-accent">value</span>
          </h1>
          <p
            class="max-w-[640px] font-display text-base font-semibold leading-snug text-body sm:text-xl 2xl:max-w-[1260px] 2xl:text-2xl 2xl:leading-[1.2]"
          >
            AI-native platform that generates documentation from code, scores
            quality in real-time, routes low confidence content to expert
            review, and delivers measurable ROI for enterprise teams.
          </p>
        </div>

        <!-- Actions: buttons + feature checks (grouped like Figma) -->
        <div class="flex flex-col items-center gap-8">
        <!-- CTAs -->
        <div class="flex flex-col items-center gap-4 sm:flex-row">
          <a
            href="#pricing"
            class="rounded-lg bg-indigo px-7 py-3.5 font-sans text-lg font-semibold text-white transition-colors hover:bg-indigo/90"
          >
            Book a Demo
          </a>
          <a
            href="#"
            class="inline-flex items-center gap-2 rounded-lg border border-line bg-white px-7 py-3.5 font-sans text-lg font-semibold text-indigo transition-colors hover:bg-tint-indigo"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <path d="m22 2-7 20-4-9-9-4Z" />
              <path d="M22 2 11 13" />
            </svg>
            Join Enterprise Waitlist
          </a>
        </div>

        <!-- Feature checks -->
        <ul class="flex flex-col items-center gap-3 sm:flex-row sm:gap-8">
          <li
            v-for="f in features"
            :key="f"
            class="flex items-center gap-2 font-sans text-lg font-medium text-indigo 2xl:text-xl"
          >
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" class="shrink-0">
              <circle cx="12" cy="12" r="10" fill="#EEFAEC" />
              <path d="m8 12 2.5 2.5L16 9" stroke="#008236" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
            </svg>
            {{ f }}
          </li>
        </ul>
        </div>
      </div>
    </div>
  </section>
</template>
