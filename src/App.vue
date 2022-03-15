<template>
  <AppLayout>
    <router-view></router-view>
  </AppLayout>
</template>

<script>

import AppLayout from '@/layouts/AppLayout.vue'

export default {
  components: { AppLayout }
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
</style>
