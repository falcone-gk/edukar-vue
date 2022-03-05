<template>
  <router-link :class="'animated-link' + ' ' + extra_class"
  :to="link_to"
  :style="cssProps"
  > {{ value }} </router-link>
</template>

<script>
export default {
  name: 'AnimatedLink',
  props: {
    value: { type: String },
    color: { type: String },
    link_to: { type: String, default: '#' },
    extra_class: { type: String, default: '' }
  },
  computed: {
    cssProps () {
      return {
        '--link-color': this.color
      }
    }
  }
}
</script>

<style>
.animated-link {
  position: relative;
  color: var(--link-color);
  text-decoration: none;
}
.animated-link:hover {
  color: var(--link-color)
}
.animated-link::before {
  content: "";
  position: absolute;
  display: block;
  width: 100%;
  height: 2px;
  bottom: 0;
  left: 0;
  background-color: var(--link-color);
  transform: scaleX(0);
  transition: transform 0.3s ease;
}
.animated-link:hover::before {
  transform: scaleX(1);
}
</style>
