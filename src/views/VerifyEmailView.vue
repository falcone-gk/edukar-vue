<template>
  <p>{{ message }}</p>
</template>

<script setup>
import axios from 'axios'
import { ref, defineProps } from 'vue'
import { useRoute } from 'vue-router'

const message = ref('')
const props = defineProps(['layoutName'])
const route = useRoute()
const token = route.params.token

const verifyToken = (token) => {
  const getUrl = '/api/account/email/' + token
  axios
    .get(getUrl)
    .then(response => {
      message.value = response.data
    })
}
verifyToken(token)
</script>
