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
      <!-- lines doc sits behind, peeking out bottom-left -->
      <img src="/hero/card-l2.png" alt="" class="absolute -left-[22px] top-[464px] w-[275px]" />
      <!-- front document with the Send button (must stay on top so the button shows) -->
      <img src="/hero/doc-l1.png" alt="" class="absolute left-[15px] top-[224px] w-[325px]" />
      <img src="/hero/doc-r1.png" alt="" class="absolute right-[43px] top-[215px] w-[346px]" />
      <img src="/hero/doc-r2.png" alt="" class="absolute -right-[95px] top-[490px] w-[345px]" />
    </div>

    <!-- Hero content -->
    <div class="wrap relative z-10 flex min-h-[560px] flex-col items-center justify-center pb-20 pt-28 text-center sm:min-h-[680px] sm:pt-32 2xl:min-h-[1080px] 2xl:py-0">
      <div class="flex max-w-[1255px] flex-col items-center gap-10">
        <div class="flex flex-col items-center gap-4">
          <h1
            class="font-display text-[34px] font-bold leading-[1.12] text-body sm:text-[48px] sm:leading-[1.12] 2xl:text-[64px] 2xl:leading-[72px]"
          >
            <span class="italic text-indigo">Documentation</span> that
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
            class="inline-flex items-center gap-2 rounded-lg bg-indigo px-7 py-3.5 font-sans text-lg font-semibold text-white shadow-[0_12px_24px_-6px_rgba(66,56,158,0.45)] transition-all hover:bg-indigo/90 hover:shadow-[0_14px_28px_-6px_rgba(66,56,158,0.55)]"
          >
            Book a Demo
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round">
              <path d="m9 18 6-6-6-6" />
            </svg>
          </a>
          <a
            href="#"
            class="rounded-lg border border-indigo bg-transparent px-7 py-3.5 font-sans text-lg font-semibold text-indigo transition-colors hover:bg-indigo/5"
          >
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
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" class="shrink-0">
              <circle cx="10" cy="10" r="8.2" stroke="#24BD2E" stroke-width="1.6" />
              <path d="m6.4 10.2 2.3 2.3 4.9-5" stroke="#24BD2E" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" />
            </svg>
            {{ f }}
          </li>
        </ul>
        </div>
      </div>
    </div>
  </section>
</template>
