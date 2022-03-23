<template>
  <component :is="layout">
    <slot />
  </component>
</template>

<script>
export default {
  name: 'AppLayout',
  data () {
    return {
      layout: 'div'
    }
  },
  watch: {
    $route: {
      immediate: true,
      async handler (route) {
        const component = await import(`@/layouts/${route.meta.layout}.vue`)
        this.layout = component.default
      }
    }
  }
}
</script>
