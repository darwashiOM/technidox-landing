<script setup>
const metrics = [
  { label: 'Time Saved', value: '847h', delta: '23% this month', up: true, icon: '/icons/ent-time.svg' },
  { label: 'Productivity Gain', value: '+34%', delta: '12% vs baseline', up: true, icon: '/icons/ent-prod.svg' },
  { label: 'Support Tickets', value: '-42%', delta: '156 tickets/month', up: false, icon: '/icons/ent-ticket.svg' },
  { label: 'Onboarding Speed', value: '3.2d', delta: '64% faster', up: false, icon: '/icons/ent-onboard.svg' },
]
</script>

<template>
  <section class="bg-white section-y">
    <div class="wrap flex flex-col items-center gap-14">
      <SectionHeading
        v-reveal
        eyebrow="ROI & Analytics"
        title="Enterprise-Grade ROI And Analytics"
        subtitle="The first documentation platform with measurable business impact. Track time saved, productivity gains, and documentation health in real-time."
      />

      <!-- Dashboard card -->
      <div
        v-reveal="100"
        class="w-full overflow-hidden rounded-2xl bg-cover bg-center p-6 sm:p-8"
        style="background-color: #15112e; background-image: linear-gradient(150deg, rgba(56, 48, 132, 0.88) 0%, rgba(21, 17, 46, 0.94) 100%), url('/enterprise-bg.jpg')"
      >
        <!-- Card header -->
        <div class="mb-8 flex items-center justify-between gap-4 2xl:mb-14">
          <div>
            <h3 class="font-display text-xl font-normal text-white 2xl:text-[28px]">
              Executive ROI Dashboard
            </h3>
            <p class="font-sans text-sm text-slate-label 2xl:text-lg">
              Real-time documentation impact metrics
            </p>
          </div>
          <span
            class="flex shrink-0 items-center gap-2 rounded-xl border border-[#66DB3A]/30 bg-[#66DB3A]/20 px-3 py-1.5 font-sans text-xs font-semibold text-[#66DB3A] 2xl:text-sm"
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
            class="rounded-lg border border-[#868585]/50 bg-white/[0.04] p-5 2xl:p-7"
          >
            <div class="flex items-center gap-2.5">
              <img :src="m.icon" alt="" class="h-5 w-5" />
              <p class="font-sans text-sm text-[#AEADAD] 2xl:text-lg">{{ m.label }}</p>
            </div>
            <p class="mt-3 font-display text-2xl font-bold text-white 2xl:text-[32px]">{{ m.value }}</p>
            <p class="mt-2 flex items-center gap-1 font-sans text-xs text-[#66DB3A] 2xl:text-base">
              <span>{{ m.up ? '↑' : '↓' }}</span>{{ m.delta }}
            </p>
          </div>
        </div>

        <!-- Bottom tiles -->
        <div class="mt-3 grid gap-3 lg:grid-cols-3 2xl:mt-4 2xl:gap-4">
          <div class="rounded-lg border border-[#868585]/50 bg-white/[0.04] p-5 2xl:p-7">
            <div class="flex items-start justify-between">
              <p class="font-sans text-sm text-[#AEADAD] 2xl:text-lg">Documentation Health</p>
              <img src="/icons/ent-health.svg" alt="" class="h-5 w-5" />
            </div>
            <p class="mt-2 font-display text-2xl font-bold text-white 2xl:text-[32px]">
              94<span class="text-base text-[#AEADAD] 2xl:text-lg">/100</span>
            </p>
            <div class="mt-4 h-2 w-full overflow-hidden rounded-full bg-white/10">
              <div
                class="h-full w-[94%] rounded-full"
                style="background-image: linear-gradient(to right, #66db3a, #3bb6e8)"
              />
            </div>
          </div>

          <div class="rounded-lg border border-[#868585]/50 bg-white/[0.04] p-5 2xl:p-7">
            <div class="flex items-start justify-between">
              <p class="font-sans text-sm text-[#AEADAD] 2xl:text-lg">Support Tickets</p>
              <img src="/icons/ent-support.svg" alt="" class="h-5 w-5" />
            </div>
            <p class="mt-2 flex items-end gap-2">
              <span class="font-display text-2xl font-bold leading-none text-white 2xl:text-[32px]">98%</span>
              <span class="font-sans text-[11px] font-bold leading-[1.1] text-[#66DB3A] 2xl:text-xs">ISO/<br />SOC2</span>
            </p>
            <p class="mt-2 flex items-center gap-1.5 font-sans text-xs text-[#AEADAD] 2xl:text-sm">
              <svg width="14" height="14" viewBox="0 0 20 20" fill="none"><circle cx="10" cy="10" r="8.2" stroke="#66DB3A" stroke-width="1.6" /><path d="m6.4 10.2 2.3 2.3 4.9-5" stroke="#66DB3A" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" /></svg>
              Audit ready
            </p>
          </div>

          <div class="rounded-lg border border-[#868585]/50 bg-white/[0.04] p-5 2xl:p-7">
            <div class="flex items-start justify-between">
              <p class="font-sans text-sm text-[#AEADAD] 2xl:text-lg">Active Contributors</p>
              <img src="/icons/ent-contributors.svg" alt="" class="h-5 w-5" />
            </div>
            <p class="mt-2 font-display text-2xl font-bold text-white 2xl:text-[32px]">143</p>
            <div class="mt-3 flex items-center">
              <span
                v-for="i in 5"
                :key="i"
                class="h-5 w-5 rounded-full border-2 border-[#1b1740] bg-[#66DB3A]"
                :class="{ '-ml-2': i > 1 }"
              />
              <span class="-ml-2 flex h-5 items-center justify-center rounded-full border-2 border-[#1b1740] bg-[#3a3470] px-1.5 font-sans text-[10px] font-semibold text-white">
                +8
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
