<template>
  <div class="center-div">
    <div class="login-logo">
      <img src="@/assets/edukar_logo.jpg" alt="logo">
    </div>
    <div class="form-login">
      <form>
        <input-form
        type="text"
        label="Username o email"
        v-model:inputValue="username"
        />
        <input-form
        type="password"
        label="Contraseña"
        v-model:inputValue="password"
        />
        <p v-if="error" class="error-msg">El nombre de usuario o contraseña son incorrectos!</p>
        <input @click.prevent="login" type="submit" class="btn-edukar login-submit" value="Iniciar sesión">
      </form>
    </div>
  </div>
</template>

<script setup>
import { ref, defineProps } from 'vue'
import { useStore } from 'vuex'
import { useRouter } from 'vue-router'
import axios from 'axios'
import InputForm from '@/components/custom_elements/InputForm'

const store = useStore()
const router = useRouter()

const username = ref('')
const password = ref('')
const error = ref(false)

const props = defineProps(['layoutName'])

const login = function () {
  const form = {
    username: username.value,
    password: password.value
  }
  axios
    .post('api/account/login', form)
    .then(response => {
      localStorage.setItem('token', response.data.token)
      const data = {
        username: form.username,
        auth: true
      }
      store.commit('setUserAuth', data)
      error.value = false
      router.push('/')
    })
    .catch(() => {
      error.value = true
    })
}
</script>

<style>
.center-div {
  position: absolute;
  top:0;
  bottom: 0;
  left: 0;
  right: 0;
  margin: auto;
  max-width: 320px;
  height: fit-content;
  background-color: var(--background-theme);
  box-shadow: var(--box-shadow);
  border-radius: 5px;
}
.div-header {
  display: flex;
}
.login-logo {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 1.5em 0;
}
.login-logo img {
  border-radius: 50%;
  width: 25%;
}
.form-login {
  padding: 2em .5em 2em .5em;
  margin: 1em;
}
.form-login form {
  display: flex;
  flex-direction: column;
}
.login-submit {
  margin: 2em 5em 0 5em;
}
.btn-edukar {
  background-color: #FFFFFF;
  border: 0;
  border-radius: .5rem;
  box-sizing: border-box;
  color: #111827;
  font-family: "Inter var",ui-sans-serif,system-ui,-apple-system,system-ui,"Segoe UI",Roboto,"Helvetica Neue",Arial,"Noto Sans",sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji";
  font-size: .875rem;
  font-weight: 600;
  line-height: 1.25rem;
  padding: .75rem 1rem;
  text-align: center;
  text-decoration: none #D1D5DB solid;
  text-decoration-thickness: auto;
  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06);
  cursor: pointer;
  touch-action: manipulation;
}
.btn-edukar:hover {
  background-color: rgb(249,250,251);
}

.btn-edukar:focus {
  outline: 2px solid transparent;
  outline-offset: 2px;
}

.btn-edukar:focus-visible {
  box-shadow: none;
}
.error-msg {
  color: rgb(245, 125, 125);
  font-size: 12px;
}
</style>
