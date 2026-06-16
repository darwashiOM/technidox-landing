<script setup>
const metrics = [
  { label: 'Time Saved', value: '847h', delta: '23% this month', up: true, icon: 'clock' },
  { label: 'Productivity Gain', value: '+34%', delta: '12% vs baseline', up: true, icon: 'trend' },
  { label: 'Support Tickets', value: '-42%', delta: '156 tickets/month', up: false, icon: 'ticket' },
  { label: 'Onboarding Speed', value: '3.2d', delta: '64% faster', up: false, icon: 'zap' },
]
</script>

<template>
  <section class="bg-white section-y">
    <div class="wrap flex flex-col items-center gap-14">
      <SectionHeading
        eyebrow="ROI & Analytics"
        title="Enterprise-Grade ROI And Analytics"
        subtitle="The first documentation platform with measurable business impact. Track time saved, productivity gains, and documentation health in real-time."
      />

      <!-- Dashboard card -->
      <div
        class="w-full overflow-hidden rounded-2xl p-6 sm:p-8"
        style="background-image: linear-gradient(135deg, #42389e 0%, #1b1640 55%, #161232 100%)"
      >
        <!-- Card header -->
        <div class="mb-6 flex items-center justify-between gap-4">
          <div>
            <h3 class="font-display text-xl font-normal text-white 2xl:text-[28px]">
              Executive ROI Dashboard
            </h3>
            <p class="font-sans text-sm text-slate-label 2xl:text-lg">
              Real-time documentation impact metrics
            </p>
          </div>
          <span
            class="flex shrink-0 items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1.5 font-sans text-xs font-semibold text-[#66DB3A] 2xl:text-sm"
          >
            <span class="h-2 w-2 rounded-full bg-[#66DB3A]" />
            Live Data
          </span>
        </div>

        <!-- Top metric tiles -->
        <div class="grid grid-cols-2 gap-3 lg:grid-cols-4 2xl:gap-4">
          <div
            v-for="m in metrics"
            :key="m.label"
            class="rounded-xl border border-white/5 bg-white/5 p-4 2xl:p-5"
          >
            <div class="mb-3 text-[#A9A4D9]">
              <svg v-if="m.icon === 'clock'" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><circle cx="12" cy="12" r="9" /><path d="M12 7v5l3 2" stroke-linecap="round" /></svg>
              <svg v-else-if="m.icon === 'trend'" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="m3 17 6-6 4 4 8-8" /><path d="M17 7h4v4" /></svg>
              <svg v-else-if="m.icon === 'ticket'" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linejoin="round"><path d="M3 9a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2 2 2 0 0 0 0 4 2 2 0 0 1-2 2H5a2 2 0 0 1-2-2 2 2 0 0 0 0-4Z" /></svg>
              <svg v-else width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M13 2 3 14h9l-1 8 10-12h-9l1-8Z" /></svg>
            </div>
            <p class="font-sans text-sm text-[#AEADAD] 2xl:text-lg">{{ m.label }}</p>
            <p class="mt-1 font-display text-2xl font-bold text-white 2xl:text-[32px]">{{ m.value }}</p>
            <p class="mt-2 flex items-center gap-1 font-sans text-xs text-[#66DB3A] 2xl:text-base">
              <span>{{ m.up ? '↑' : '↓' }}</span>{{ m.delta }}
            </p>
          </div>
        </div>

        <!-- Bottom tiles -->
        <div class="mt-3 grid gap-3 lg:grid-cols-3 2xl:mt-4 2xl:gap-4">
          <div class="rounded-xl border border-white/5 bg-white/5 p-4 2xl:p-5">
            <div class="flex items-center justify-between">
              <p class="font-sans text-sm text-[#AEADAD] 2xl:text-lg">Documentation Health</p>
            </div>
            <p class="mt-1 font-display text-2xl font-bold text-white 2xl:text-[32px]">
              94<span class="text-base text-[#AEADAD] 2xl:text-lg">/100</span>
            </p>
            <div class="mt-3 h-2 w-full overflow-hidden rounded-full bg-white/10">
              <div
                class="h-full w-[94%] rounded-full"
                style="background-image: linear-gradient(to right, #66db3a, #3bb6e8)"
              />
            </div>
          </div>

          <div class="rounded-xl border border-white/5 bg-white/5 p-4 2xl:p-5">
            <div class="flex items-center justify-between">
              <p class="font-sans text-sm text-[#AEADAD] 2xl:text-lg">Support Tickets</p>
              <span class="rounded-full bg-[#66DB3A]/20 px-2 py-0.5 font-sans text-xs font-semibold text-[#66DB3A]">ISO/SOC2</span>
            </div>
            <p class="mt-1 font-display text-2xl font-bold text-white 2xl:text-[32px]">98%</p>
            <p class="mt-2 font-sans text-xs text-slate-label 2xl:text-sm">Audit ready</p>
          </div>

          <div class="rounded-xl border border-white/5 bg-white/5 p-4 2xl:p-5">
            <p class="font-sans text-sm text-[#AEADAD] 2xl:text-lg">Active Contributors</p>
            <p class="mt-1 font-display text-2xl font-bold text-white 2xl:text-[32px]">143</p>
            <div class="mt-3 flex items-center gap-1">
              <span v-for="i in 5" :key="i" class="h-4 w-4 rounded-full border border-[#161232] bg-[#66DB3A]" :class="{ '-ml-2': i > 1 }" />
              <span class="ml-2 font-sans text-xs text-slate-label">+8</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
