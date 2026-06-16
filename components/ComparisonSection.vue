<script setup>
const rows = [
  { cap: 'AI-native architecture', td: true, trad: false },
  { cap: 'Confidence scoring per doc', td: true, trad: false },
  { cap: 'Multi-dimensional quality assessment', td: true, trad: false },
  { cap: 'Human-in-the-loop review workflows', td: true, trad: false },
  { cap: 'Gamified community contributions', td: true, trad: false },
  { cap: 'Real-time ROI dashboard', td: true, trad: false },
  { cap: 'ISO / SOC2 compliance reporting', td: true, trad: false },
  { cap: 'CI/CD quality gate integration', td: true, trad: false },
  { cap: 'Basic markdown editing', td: true, trad: true },
  { cap: 'Team collaboration', td: true, trad: true },
]
</script>

<template>
  <section class="bg-white section-y">
    <div class="wrap flex flex-col items-center gap-16">
      <SectionHeading
        eyebrow="Why TechniDox"
        title="Not Just Another Documentation Tool"
        subtitle="Traditional tools give you a place to write. TechniDox gives you a system that generates, scores, validates, and continuously improves documentation, automatically."
      />

      <div class="w-full overflow-x-auto">
        <table class="w-full min-w-[640px] border-separate border-spacing-0 overflow-hidden rounded-2xl border border-line">
          <thead>
            <tr class="bg-indigo text-white">
              <th class="px-6 py-5 text-left font-display text-lg font-bold 2xl:text-[28px]">
                Capability
              </th>
              <th class="border-l border-white/15 px-6 py-5 text-center font-display text-lg font-bold 2xl:text-[28px]">
                TechniDox
              </th>
              <th class="border-l border-white/15 px-6 py-5 text-center font-display text-lg font-bold 2xl:text-[28px]">
                Traditional Documentation
              </th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(row, i) in rows" :key="row.cap" :class="i < rows.length ? 'border-line' : ''">
              <td class="border-t border-line px-6 py-4 font-sans text-base text-ink 2xl:text-lg">
                {{ row.cap }}
              </td>
              <td class="border-l border-t border-line px-6 py-4 text-center">
                <img v-if="row.td" src="/icons/cmp-check.svg" alt="Yes" class="mx-auto h-6 w-6" />
                <img v-else src="/icons/cmp-dash.svg" alt="No" class="mx-auto h-6 w-6" />
              </td>
              <td class="border-l border-t border-line px-6 py-4 text-center">
                <img v-if="row.trad" src="/icons/cmp-check.svg" alt="Yes" class="mx-auto h-6 w-6" />
                <img v-else src="/icons/cmp-dash.svg" alt="No" class="mx-auto h-6 w-6" />
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </section>
</template>
