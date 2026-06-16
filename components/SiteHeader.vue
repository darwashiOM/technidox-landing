<script setup>
import { ref } from 'vue'

const open = ref(false)
const links = [
  { label: 'Home', href: '#', active: true },
  { label: 'About Us', href: '#' },
  { label: 'Docs', href: '#' },
  { label: 'Pricing', href: '#pricing' },
]
</script>

<template>
  <header class="absolute inset-x-0 top-0 z-30">
    <div class="wrap flex items-center justify-between py-6 2xl:py-8">
      <!-- Logo -->
      <a href="#" class="shrink-0" aria-label="TechniDox home">
        <img src="/logo.png" alt="TechniDox" class="h-9 w-auto 2xl:h-10" />
      </a>

      <!-- Desktop nav -->
      <nav class="hidden items-center gap-8 lg:flex">
        <a
          v-for="link in links"
          :key="link.label"
          :href="link.href"
          class="font-display text-lg text-indigo transition-opacity hover:opacity-70 2xl:text-xl"
          :class="link.active ? 'font-semibold' : 'font-normal'"
        >
          {{ link.label }}
        </a>
      </nav>

      <div class="flex items-center gap-3">
        <a
          href="#pricing"
          class="hidden rounded-lg bg-indigo px-6 py-3 font-sans text-base font-semibold text-white transition-colors hover:bg-indigo/90 lg:inline-block 2xl:text-lg"
        >
          Get Started
        </a>

        <!-- Mobile menu toggle (interactive element) -->
        <button
          type="button"
          class="inline-flex h-11 w-11 items-center justify-center rounded-lg text-indigo lg:hidden"
          :aria-expanded="open"
          aria-label="Toggle navigation menu"
          @click="open = !open"
        >
          <svg
            v-if="!open"
            xmlns="http://www.w3.org/2000/svg"
            width="26"
            height="26"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
          >
            <line x1="3" y1="6" x2="21" y2="6" />
            <line x1="3" y1="12" x2="21" y2="12" />
            <line x1="3" y1="18" x2="21" y2="18" />
          </svg>
          <svg
            v-else
            xmlns="http://www.w3.org/2000/svg"
            width="26"
            height="26"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
          >
            <line x1="6" y1="6" x2="18" y2="18" />
            <line x1="18" y1="6" x2="6" y2="18" />
          </svg>
        </button>
      </div>
    </div>

    <!-- Mobile menu panel -->
    <transition
      enter-active-class="transition duration-200 ease-out"
      enter-from-class="-translate-y-2 opacity-0"
      enter-to-class="translate-y-0 opacity-100"
      leave-active-class="transition duration-150 ease-in"
      leave-from-class="translate-y-0 opacity-100"
      leave-to-class="-translate-y-2 opacity-0"
    >
      <div v-if="open" class="lg:hidden">
        <nav class="wrap flex flex-col gap-1 pb-4">
          <a
            v-for="link in links"
            :key="link.label"
            :href="link.href"
            class="rounded-lg px-3 py-3 font-display text-lg text-indigo hover:bg-tint-indigo"
            :class="link.active ? 'font-semibold' : 'font-normal'"
            @click="open = false"
          >
            {{ link.label }}
          </a>
          <a
            href="#pricing"
            class="mt-2 rounded-lg bg-indigo px-6 py-3 text-center font-sans text-base font-semibold text-white"
            @click="open = false"
          >
            Get Started
          </a>
        </nav>
      </div>
    </transition>
  </header>
</template>
