<template>
  <section class="bg-white pb-16 sm:pb-20 2xl:pb-[120px]">
    <div class="wrap grid items-center gap-12 lg:grid-cols-[0.85fr_1.6fr] 2xl:gap-20">
      <!-- Left heading -->
      <div v-reveal class="flex flex-col gap-4">
        <h2 class="font-display text-[32px] font-bold leading-tight text-indigo 2xl:text-[48px] 2xl:leading-[1.1]">
          AI-Powered Features
        </h2>
        <p class="font-display text-lg font-semibold leading-snug text-body 2xl:text-2xl">
          TechniDox leverages advanced machine learning to automate the tedious
          parts of documentation.
        </p>
      </div>

      <!-- Right: two cards -->
      <div v-reveal="120" class="grid gap-6 sm:grid-cols-2">
        <article class="rounded-2xl border border-line bg-white p-7 shadow-[0_0_20px_10px_rgba(0,0,0,0.05)]">
          <div class="flex items-center gap-4">
            <div class="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-indigo/10">
              <img src="/icons/af-clarity.svg" alt="" class="h-6 w-6" />
            </div>
            <h3 class="font-display text-2xl font-normal text-ink 2xl:text-[28px]">Clarity Engine</h3>
          </div>
          <p class="mt-5 font-sans text-base leading-relaxed text-muted 2xl:text-lg">
            Automatically analyzes your text for readability, technical accuracy,
            and tone consistency.
          </p>
        </article>

        <article class="rounded-2xl bg-indigo p-7 shadow-[0_0_20px_10px_rgba(0,0,0,0.05)]">
          <div class="flex items-center gap-4">
            <div class="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-white">
              <img src="/icons/af-sync.svg" alt="" class="h-6 w-6" />
            </div>
            <h3 class="font-display text-2xl font-normal text-white 2xl:text-[28px]">Smart Sync</h3>
          </div>
          <p class="mt-5 font-sans text-base leading-relaxed text-[#EBEBEB] 2xl:text-lg">
            Keeps your docs in sync with your codebase by automatically detecting
            changes in GitHub repositories.
          </p>
        </article>
      </div>
    </div>
  </section>
</template>
