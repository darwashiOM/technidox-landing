<script setup>
const { open } = useDemoModal()
const columns = [
  { heading: 'Company', links: ['About Us', 'Careers', 'Blog', 'Partnerships'] },
  { heading: 'Resources', links: ['Help Center', 'Fees & Limits', 'System Status'] },
  { heading: 'Legal & Compliance', links: ['Terms of Service', 'Privacy Policy', 'Risk Disclosure', 'Cookie Policy'] },
]
const socials = [
  { icon: '/icons/linkedin.svg', label: 'LinkedIn' },
  { icon: '/icons/facebook.svg', label: 'Facebook' },
  { icon: '/icons/instagram.svg', label: 'Instagram' },
]
</script>

<template>
  <footer class="relative">
    <!-- White region with overlapping CTA card -->
    <div class="bg-white pt-16 2xl:pt-[120px]">
      <div class="wrap">
        <div
          v-reveal
          class="relative z-10 mx-auto -mb-28 max-w-[1255px] overflow-hidden rounded-3xl bg-indigo px-6 py-16 text-center sm:px-12 2xl:-mb-48 2xl:py-[92px]"
        >
          <!-- Decorative ring (clipped top-right) -->
          <div class="pointer-events-none absolute -top-[130px] right-[80px] h-[281px] w-[281px] rounded-full border-[52px] border-[#FAFAFA]/20" />

          <div class="relative mx-auto flex max-w-[987px] flex-col items-center gap-7">
            <h2 class="font-sora text-3xl font-bold leading-tight text-[#FAFAFA] sm:text-4xl 2xl:text-5xl">
              Scale Your Documentation With Confidence.
            </h2>
            <p class="font-sora text-base font-semibold leading-relaxed text-[#E5E5E5] sm:text-lg 2xl:text-[22px]">
              Join engineering teams that have eliminated documentation debt,
              onboarded developers faster, and built a community of
              contributors, all with measurable ROI.
            </p>
            <button
              type="button"
              class="rounded-xl bg-white px-6 py-3 font-sans text-lg font-semibold text-[#5E17EB] transition-transform hover:scale-[1.02]"
              @click="open('demo')"
            >
              Book a Demo Today
            </button>
          </div>
        </div>
      </div>
    </div>

    <!-- Lavender columns region -->
    <div class="bg-tint-lav pb-14 pt-40 2xl:pb-[80px] 2xl:pt-[330px]">
      <div class="wrap flex flex-col gap-12 lg:flex-row lg:justify-between lg:gap-8">
        <!-- Logo + blurb + socials -->
        <div class="flex max-w-sm flex-col gap-5">
          <img src="/logo.png" alt="TechniDox" class="h-10 w-auto self-start" />
          <p class="font-sans text-base leading-relaxed text-[#201F1F] 2xl:text-lg">
            AI-native documentation infrastructure for engineering teams that
            demand quality, speed, and measurable impact.
          </p>
          <div class="flex gap-3">
            <a
              v-for="s in socials"
              :key="s.label"
              href="#"
              :aria-label="s.label"
              class="transition-opacity hover:opacity-70"
            >
              <img :src="$asset(s.icon)" :alt="s.label" class="h-8 w-8" />
            </a>
          </div>
        </div>

        <!-- Link columns -->
        <div class="grid grid-cols-2 gap-10 sm:grid-cols-3 lg:gap-20">
          <div v-for="col in columns" :key="col.heading" class="flex flex-col gap-4">
            <h3 class="font-sora text-lg font-semibold text-[#201F1F] 2xl:text-[22px]">
              {{ col.heading }}
            </h3>
            <ul class="flex flex-col gap-3">
              <li v-for="link in col.links" :key="link">
                <a
                  href="#"
                  class="font-sans text-sm text-body transition-colors hover:text-indigo 2xl:text-base"
                >
                  {{ link }}
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>
