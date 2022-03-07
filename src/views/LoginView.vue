<template>
  <div class="center-div">
    <div class="div-header">
      <button class="login-btn">Login</button>
      <button class="signup-btn">Signup</button>
    </div>
    <div class="form-login">
      <form>
        <InputForm
        type="text"
        label="Username o email"
        />
        <InputForm
        type="password"
        label="Contraseña"
        />
        <input type="submit" class="btn-edukar login-submit" value="Iniciar sesión">
      </form>
    </div>
  </div>
</template>

<script>
import InputForm from '@/components/custom_elements/InputForm'

export default {
  name: 'LoginView',
  components: { InputForm }
}
</script>

<style scoped>
.center-div {
  position: absolute;
  top:0;
  bottom: 0;
  left: 0;
  right: 0;
  margin: auto;
  max-width: 320px;
  height: fit-content;
  box-shadow: var(--box-shadow);
  border-radius: 5px;
}
.div-header {
  display: flex;
}
.login-btn, .signup-btn {
  flex-grow: 1;
  height: 50px;
  background-color: white;
  border: 1px solid rgb(148, 155, 156);
  cursor: pointer;
  overflow: hidden;
  outline: none;
}
.form-login {
  padding: .5em;
}
.form-login form {
  display: flex;
  flex-direction: column;
  gap: 1em;
}
.login-submit {
  margin: 0 5em;
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
</style>
