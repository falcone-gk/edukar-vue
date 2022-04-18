<template>
  <header>
    <nav>
      <div class="logo">
        <img src="@/assets/edukar_logo.jpg" alt="logo">
      </div>
      <div class="search-bar mobile-search">
        <form class="search-form mobile-form">
          <font-awesome-icon icon="search" />
          <input type="search" class="search-input mobile-input" placeholder="Buscar...">
        </form>
      </div>
      <div class="menu-bar mobile-menu-bar">
        <button @click="toggleMenuBar">
          <font-awesome-icon icon="bars" />
        </button>
      </div>
      <div class="mobile-links-list">
        <ul class="mobile-nav-list">
          <li class="mobile-nav-list-item">
            <a class="mobile-nav-list-item-link" href="https://aedukar.blogspot.com/" target="_blank">Blog</a>
          </li>
          <li class="mobile-nav-list-item">
            <router-link :to="{ name: 'forum' }" class="mobile-nav-list-item-link">Forum</router-link>
          </li>
          <li v-if="!store.getters.isAuthenticated" class="mobile-nav-list-item">
            <router-link :to="{ name: 'login' }" class="mobile-nav-list-item-link">Login</router-link>
          </li>
          <li v-if="!store.getters.isAuthenticated" class="mobile-nav-list-item">
            <router-link :to="{ name: 'register' }" class="mobile-nav-list-item-link">Registrarse</router-link>
          </li>
          <li v-if="store.getters.isAuthenticated" class="mobile-nav-list-item user-mobile-item">
            <div @click="toggleList" >
              <a class="mobile-nav-list-item-link" href="#">{{ store.getters.getUsername }}</a>
              <font-awesome-icon icon="caret-down" />
            </div>
            <ul class="dropdown-mobile">
              <li>
                <font-awesome-icon icon="id-badge" />
                <a href="#">Perfil</a>
              </li>
              <li>
                <font-awesome-icon icon="bell" />
                <a href="#">Notificaciones</a>
              </li>
              <li>
                <font-awesome-icon icon="sign-out-alt" />
                <a href="#">Cerrar Sesión</a>
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </nav>
  </header>
</template>

<script setup>
import { useStore } from 'vuex'

const store = useStore()
const toggleMenuBar = function () {
  const menuBar = [...document.getElementsByClassName('mobile-links-list')][0]
  menuBar.classList.toggle('mobile-links-list-shown')
}
const toggleList = function () {
  const dropdown = [...document.getElementsByClassName('dropdown-mobile')][0]
  dropdown.classList.toggle('show')
}

</script>

<style scoped>
nav {
  position: relative;
  padding: .4em 1em;
  z-index: 999;
}
.mobile-form {
  flex: 1 0 auto;
}
.mobile-form:focus-within {
  border: 2px solid rgb(0, 162, 255);
}
.mobile-menu-bar button {
  background-color: transparent;
  background-repeat: no-repeat;
  border: none;
  cursor: pointer;
  overflow: hidden;
  outline: none;
}
.fa-bars {
  color: white;
}
.mobile-links-list {
  transform: scale(1, 0);
  position: absolute;
  top: 100%;
  left: 0;
  width: 100vw;
  background-color: #45526E;
  transform-origin: top;
  transition: all .3s ease-in-out;
}
.mobile-links-list-shown {
  transform: scale(1, 1)
}
.mobile-nav-list {
  list-style-type: none;
  cursor: pointer;
  padding: 0;
}
.mobile-nav-list-item, .user-mobile-item div {
  display: flex;
  align-items: center;
  position: relative;
  width: 100vw;
  height: 4em;
}
.user-mobile-item {
  display: block;
}
.user-mobile-item div svg{
  position: absolute;
  right: 10px;
  color: white
}
.dropdown-mobile {
  background-color: var(--background-theme);
  transform: scale(1, 0);
  transform-origin: top;
  transition: all .3s ease-in-out;
}
.dropdown-mobile li {
  display: flex;
  align-items: center;
  gap: 5px;
  padding-left: 1em;
  height: 40px;
  border-top: 1px solid rgb(59, 65, 73);
}
.dropdown-mobile * {
  color: white;
  font-size: 14px;
}
.dropdown-mobile a{
  text-decoration: none
}
.mobile-nav-list-item::before {
  content: "";
  position: absolute;
  top: 0;
  width: 100vw;
  height: 2px;
  background-color: white;
}
.mobile-nav-list-item-link {
  display: flex;
  margin: 0 auto;
  color: white;
  text-decoration: none;
  align-items: center;
  justify-content: center;
  height: 100%;
  width: 100%;
}
.show {
  transform: scale(1, 1)
}
</style>
