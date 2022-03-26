<template>
  <component :is="layout">
    <router-view v-model:layoutName="layout"></router-view>
  </component>
</template>

<script setup>

import { markRaw } from 'vue'
import { useStore } from 'vuex'
import ForumAppLayout from '@/layouts/ForumAppLayout'

// Verifying if there is no username value in store and if not
// Get the username using the token if it is in local storage.
function getUsername () {
  const store = useStore()
  if (localStorage.getItem('token') && !store.state.username) {
    store.dispatch('getUsernameByToken')
  }
}
getUsername() // <-- Running command before app creation.

const layout = markRaw(ForumAppLayout)

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
</style>
