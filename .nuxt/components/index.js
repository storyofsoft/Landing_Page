export { default as Carousel } from '../..\\components\\Carousel.vue'
export { default as Footbar } from '../..\\components\\Footbar.vue'
export { default as Main } from '../..\\components\\Main.vue'
export { default as Navbar } from '../..\\components\\Navbar.vue'
export { default as NuxtLogo } from '../..\\components\\NuxtLogo.vue'
export { default as SlideNav } from '../..\\components\\SlideNav.vue'
export { default as Sticky } from '../..\\components\\Sticky.vue'
export { default as Title } from '../..\\components\\Title.vue'

// nuxt/nuxt.js#8607
function wrapFunctional(options) {
  if (!options || !options.functional) {
    return options
  }

  const propKeys = Array.isArray(options.props) ? options.props : Object.keys(options.props || {})

  return {
    render(h) {
      const attrs = {}
      const props = {}

      for (const key in this.$attrs) {
        if (propKeys.includes(key)) {
          props[key] = this.$attrs[key]
        } else {
          attrs[key] = this.$attrs[key]
        }
      }

      return h(options, {
        on: this.$listeners,
        attrs,
        props,
        scopedSlots: this.$scopedSlots,
      }, this.$slots.default)
    }
  }
}
