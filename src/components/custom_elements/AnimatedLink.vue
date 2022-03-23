<template>
  <a :class="'animated-link' + ' ' + extra_class"
  @click.prevent="pushTo"
  :style="cssProps"
  > {{ value }} </a>
</template>

<script>
export default {
  name: 'AnimatedLink',
  props: {
    value: { type: String },
    color: { type: String },
    link_to: { type: [String, Object], default: '#' },
    extra_class: { type: String, default: '' }
  },
  methods: {
    pushTo () {
      if (typeof this.link_to === 'string') {
        window.open(this.link_to, '_blank')
      } else {
        this.$router.push(this.link_to)
      }
    }
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
  cursor: pointer;
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
  bottom: -5px;
  left: 0;
  background-color: var(--link-color);
  transform: scaleX(0);
  transition: transform 0.3s ease;
}
.animated-link:hover::before {
  transform: scaleX(1);
}
</style>
