<template>
  <HeaderNav/>
  <HelloWorld/>
</template>

<script>

import HeaderNav from '@/components/Header'
import HelloWorld from '@/components/HelloWorld'

export default {
  components: {
    HeaderNav,
    HelloWorld
  }
}
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: 'Work Sans', sans-serif;
}
nav {
  display: flex;
  align-items: center;
  background-color: #45526E;
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
  transition: all .8s ease-in-out;
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
