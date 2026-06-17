// $asset(path) — prefix a public asset path with the app baseURL.
//
// Nuxt automatically prepends baseURL to STATIC `<img src="/...">` attributes,
// but NOT to dynamic `:src` bindings or inline style `url('/...')`. Those break
// when the site is served from a subpath (e.g. GitHub Pages /technidox-landing/),
// so wrap them: `:src="$asset(icon)"` / `url('${$asset('/bg.png')}')`.
export default defineNuxtPlugin(() => {
  const base = useRuntimeConfig().app.baseURL || '/'
  const join = (path) => base.replace(/\/+$/, '') + '/' + String(path).replace(/^\/+/, '')
  return { provide: { asset: join } }
})
