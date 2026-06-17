// v-reveal: fades + slides an element up when it scrolls into view.
// Usage: v-reveal  or  v-reveal="120"  (ms stagger delay)
export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.directive('reveal', {
    mounted(el, binding) {
      if (typeof IntersectionObserver === 'undefined') return
      el.classList.add('reveal')
      const delay = Number(binding.value) || 0
      if (delay) el.style.transitionDelay = `${delay}ms`

      const obs = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              el.classList.add('is-visible')
              obs.unobserve(el)
            }
          })
        },
        { threshold: 0.12, rootMargin: '0px 0px -8% 0px' }
      )
      obs.observe(el)
    },
  })
})
