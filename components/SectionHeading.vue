<script setup>
defineProps({
  eyebrow: { type: String, default: '' },
  title: { type: String, required: true },
  subtitle: { type: String, default: '' },
})
</script>

<template>
  <div class="mx-auto flex max-w-[1000px] flex-col items-center gap-4 text-center">
    <p
      v-if="eyebrow"
      class="font-mont text-base font-semibold uppercase tracking-wide text-accent"
    >
      {{ eyebrow }}
    </p>
    <h2
      class="font-display text-[30px] font-bold leading-[1.15] text-indigo sm:text-[40px] 2xl:text-[48px] 2xl:leading-[56px]"
    >
      {{ title }}
    </h2>
    <p
      v-if="subtitle"
      class="font-display text-lg font-semibold leading-snug text-body sm:text-xl 2xl:text-2xl"
    >
      {{ subtitle }}
    </p>
  </div>
</template>
