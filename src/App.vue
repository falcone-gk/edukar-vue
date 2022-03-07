<template>
  <HeaderNav/>
  <div class="container" :class="mq">
    <router-view></router-view>
  </div>
</template>

<script>

import HeaderNav from '@/components/Header'

export default {
  inject: ['mq'],
  components: {
    HeaderNav
  }
}
</script>

<style>
:root {
  --box-shadow: 0 0 4px 4px rgba(0, 0, 0, 0.2);;
  --background-theme: #45526E;
  --input-color: #18e0d0;
}
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: 'Work Sans', sans-serif;
}
h1, h2, h3, h4, h5, h6 {
  font-weight: 500;
}
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
  padding: .4em 4em;
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
