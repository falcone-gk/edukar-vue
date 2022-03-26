<template>
  <HeaderNav/>
  <div class="container" :class="mq">
      <slot />
  </div>
</template>

<script>

import HeaderNav from '@/components/Header'

export default {
  inject: ['mq'],
  name: 'ForumAppLayout',
  components: {
    HeaderNav
  }
}
</script>

<style>
.container {
  display: flex;
  gap: 1em;
  padding: 0 15px;
  margin-top: 1em;
  margin-right: auto;
  margin-left: auto;
}
.container.xs { padding: 0 5px }
.container.smMinus { flex-direction: column }
.container.smPlus { width: 560px }
.container.mdPlus { width: 750px }
.container.lgPlus { width: 970px }
.container.xlPlus { width: 1170px }
main {
  flex: 2 1 0;
}
aside {
  flex: 1 1 0;
}
nav {
  display: flex;
  align-items: center;
  background-color: var(--background-theme);
  padding: 0 4em;
  height: 66.8px;
  gap: 2em;
}
.logo img {
  height: 50px;
  width: 50px;
  border-radius: 50%;
}
.search-bar {
  display: flex;
  flex: 1 0 auto;
}
.search-form {
  position: relative;
  flex: .5 0 auto;
  min-width: 135px;
  height: 40px;
  border-radius: 40px;
  box-shadow: 0 6px 8px rgba(0, 0, 0, 0.15);
  background: #fff;
}
.fa-search {
  position: absolute;
  top: 12px;
  left: 10px
}
.search-input {
  position: absolute;
  top: 10px;
  left: 38px;
  font-size: 14px;
  background: none;
  color: #5a6674;
  width: calc(100% - 50px);
  height: 20px;
  border: none;
  appearance: none;
  outline: none;
  transition: all .8s ease;
}
</style>
