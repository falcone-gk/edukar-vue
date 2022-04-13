<template>
  <div class="center_div">
    <div class="signup-header">
      <img src="@/assets/edukar_logo.jpg" alt="logo">
      <h1>Registrarse</h1>
    </div>
    <div class="message">
      <strong>Importante:</strong>
      <p>No está permitido ningún tipo de publicidad en el foro, ni en las publicaciones
        ni en las imágenes de perfil. Si se observa algún tipo de publicidad se procederá
        a banear la cuenta.</p>
        <br>
      <strong>Nota:</strong>
      <p>El nombre de usuario solo permite el uso de letras y números.</p>
      <div class="notation">
        <strong>Los campos con '*' son obligatorios</strong>
      </div>
    </div>
    <form class="form-section">
      <div class="group_inputs" :class="mq">
        <InputForm
        type="text"
        label="Nombre de usuario*"
        v-model="state.username"
        :error="v.username.$errors[0]"/>
        <InputForm
        type="email"
        label="Email*"
        v-model="state.email"
        :error="v.email.$errors[0]"/>
      </div>
      <div class="group_inputs" :class="mq">
        <InputForm
        type="text"
        label="Nombres*"
        v-model="state.firstname"
        :error="v.firstname.$errors[0]"/>
        <InputForm
        type="text"
        label="Apellidos*"
        v-model="state.lastname"
        :error="v.lastname.$errors[0]"/>
      </div>
      <InputForm
      type="password"
      label="Contraseña*"
      v-model="state.password.password"
      :error="v.password.password.$errors[0]"/>
      <InputForm
      type="password"
      label="Confirmar contraseña*"
      v-model="state.password.confirm"
      :error="v.password.confirm.$errors[0]"/>
      <textarea name="about_me" id="about_me" rows="10" placeholder="Sobre mi"></textarea>
      <InputForm
      type="file"
      label="Imagen de perfil"/>
      <input @click.prevent="submitForm" type="submit" class="btn-edukar register-submit" value="Registrarse">
    </form>
  </div>
</template>

<script setup>

import { reactive, computed, inject } from 'vue'
import useValidate from '@vuelidate/core'
import { required, email, sameAs } from '@vuelidate/validators'
import InputForm from '@/components/custom_elements/InputForm'

const mq = inject('mq')
const state = reactive({
  username: '',
  email: '',
  firstname: '',
  lastname: '',
  password: {
    password: '',
    confirm: ''
  }
})

const rules = computed(() => {
  return {
    username: { required },
    email: { required, email },
    firstname: { required },
    lastname: { required },
    password: {
      password: { required },
      confirm: { required, sameAs: sameAs(state.password.password) }
    }
  }
})

const v = useValidate(rules, state)
const submitForm = () => {
  v.value.$validate()
  if (!v.value.$error) {
    alert('Form success')
  } else {
    alert('Form errors')
  }
}
</script>

<style>
.signup-header h1, .message * {
  color: rgb(226, 233, 236);
}
.center_div {
  background-color: var(--background-theme);
  padding: 2em;
  max-width: 600px;
  margin: 0 auto;
  margin-bottom: 1em;
  border-radius: 5px;
}
.signup-header {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 1em;
}
.signup-header img {
  border-radius: 50%;
  width: 20%;
}
.notation {
  text-align: center;
  margin-top: 12px;
  font-size: 12px;
}
.form-section {
  display: flex;
  flex-direction: column;
  margin: 2em 0 2em 0;
}
.group_inputs {
  display: flex;
}
.group_inputs * {
  flex: .5 0 auto
}
.group_inputs.smPlus {gap: 1em}
.group_inputs.xs { flex-direction: column;}
.form-section textarea {
  padding: .5em;
  margin: 1em 0;
  border-radius: 5px;
}
.register-submit {
  margin: 2em 5em 0 5em;
}
</style>
