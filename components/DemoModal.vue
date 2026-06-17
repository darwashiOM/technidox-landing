<script setup>
import { ref, computed, watch, onMounted, onBeforeUnmount } from 'vue'

const { isOpen, variant, close } = useDemoModal()

const configs = {
  demo: {
    title: 'Book a Demo',
    subtitle: "See TechniDox in action — tell us a bit about you and we'll set up a personalized walkthrough.",
    cta: 'Book a Demo',
  },
  start: {
    title: 'Get Started',
    subtitle: 'Create your TechniDox workspace in minutes. Tell us where to send your invite.',
    cta: 'Get Started',
  },
  waitlist: {
    title: 'Join the Enterprise Waitlist',
    subtitle: 'Be the first to know when enterprise access opens up.',
    cta: 'Join Waitlist',
  },
}
const cfg = computed(() => configs[variant.value] || configs.demo)

const form = ref({ name: '', email: '', company: '' })
const submitted = ref(false)

// Fake submit — no network call, just show the confirmation.
const submit = () => {
  submitted.value = true
}

const firstName = computed(() => form.value.name.trim().split(' ')[0])

watch(isOpen, (v) => {
  if (v) {
    submitted.value = false
    form.value = { name: '', email: '', company: '' }
  }
  if (process.client) {
    document.body.style.overflow = v ? 'hidden' : ''
  }
})

const onKey = (e) => {
  if (e.key === 'Escape') close()
}
onMounted(() => window.addEventListener('keydown', onKey))
onBeforeUnmount(() => {
  window.removeEventListener('keydown', onKey)
  if (process.client) document.body.style.overflow = ''
})
</script>

<template>
  <Teleport to="body">
    <transition
      enter-active-class="transition duration-200 ease-out"
      enter-from-class="opacity-0"
      enter-to-class="opacity-100"
      leave-active-class="transition duration-150 ease-in"
      leave-from-class="opacity-100"
      leave-to-class="opacity-0"
    >
      <div v-if="isOpen" class="fixed inset-0 z-[100] flex items-center justify-center p-4">
        <!-- backdrop -->
        <div class="absolute inset-0 bg-ink/60 backdrop-blur-sm" @click="close" />

        <!-- dialog -->
        <div
          class="relative w-full max-w-md rounded-2xl bg-white p-8 shadow-2xl"
          role="dialog"
          aria-modal="true"
        >
          <button
            type="button"
            aria-label="Close"
            class="absolute right-4 top-4 flex h-9 w-9 items-center justify-center rounded-lg text-muted transition-colors hover:bg-tint-step hover:text-ink"
            @click="close"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round">
              <line x1="6" y1="6" x2="18" y2="18" /><line x1="18" y1="6" x2="6" y2="18" />
            </svg>
          </button>

          <!-- form state -->
          <div v-if="!submitted">
            <h3 class="font-display text-2xl font-bold text-indigo">{{ cfg.title }}</h3>
            <p class="mt-2 font-sans text-sm leading-relaxed text-body">{{ cfg.subtitle }}</p>

            <form class="mt-6 flex flex-col gap-4" @submit.prevent="submit">
              <input
                v-model="form.name"
                type="text"
                required
                placeholder="Full name"
                class="w-full rounded-lg border border-line px-4 py-3 font-sans text-base text-ink outline-none transition-colors placeholder:text-muted focus:border-indigo focus:ring-2 focus:ring-indigo/20"
              />
              <input
                v-model="form.email"
                type="email"
                required
                placeholder="Work email"
                class="w-full rounded-lg border border-line px-4 py-3 font-sans text-base text-ink outline-none transition-colors placeholder:text-muted focus:border-indigo focus:ring-2 focus:ring-indigo/20"
              />
              <input
                v-model="form.company"
                type="text"
                placeholder="Company (optional)"
                class="w-full rounded-lg border border-line px-4 py-3 font-sans text-base text-ink outline-none transition-colors placeholder:text-muted focus:border-indigo focus:ring-2 focus:ring-indigo/20"
              />
              <button
                type="submit"
                class="mt-2 rounded-lg bg-indigo py-3 font-sans text-base font-semibold text-white transition-colors hover:bg-indigo/90"
              >
                {{ cfg.cta }}
              </button>
            </form>
          </div>

          <!-- success state -->
          <div v-else class="flex flex-col items-center gap-4 py-4 text-center">
            <div class="flex h-16 w-16 items-center justify-center rounded-full bg-[#EEFAEC]">
              <svg width="34" height="34" viewBox="0 0 24 24" fill="none">
                <path d="m5 12 4.5 4.5L19 7" stroke="#24BD2E" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" />
              </svg>
            </div>
            <h3 class="font-display text-2xl font-bold text-indigo">
              Thanks<span v-if="firstName">, {{ firstName }}</span>!
            </h3>
            <p class="font-sans text-base leading-relaxed text-body">
              Someone from our team will reach out to you shortly.
            </p>
            <button
              type="button"
              class="mt-2 rounded-lg bg-indigo px-8 py-3 font-sans text-base font-semibold text-white transition-colors hover:bg-indigo/90"
              @click="close"
            >
              Done
            </button>
          </div>
        </div>
      </div>
    </transition>
  </Teleport>
</template>
