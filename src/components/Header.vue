<template>
  <HeaderMobile v-if="mq.smMinus" />
  <header v-if="mq.mdPlus">
    <nav>
      <div class="logo">
        <img src="@/assets/edukar_logo.jpg" alt="logo">
      </div>
      <div class="search-bar">
        <form class="search-form animated-form">
          <font-awesome-icon icon="search" />
          <input type="search" class="search-input" placeholder="Buscar...">
        </form>
      </div>
      <div class="links-list">
        <ul class="nav-list">
          <li class="nav-list-item">
            <animated-link
            value="Blog"
            color="white"
            extra_class="nav-list-item-link"/>
          </li>
          <li class="nav-list-item">
            <animated-link
            value="Forum"
            color="white"
            :link_to="{ name: 'forum' }"
            extra_class="nav-list-item-link"/>
          </li>
          <li v-if="!store.getters.isAuthenticated" class="nav-list-item">
            <animated-link
            value="Login"
            color="white"
            :link_to="{ name: 'login' }"
            extra_class="nav-list-item-link"/>
          </li>
          <li v-if="!store.getters.isAuthenticated" class="nav-list-item">
            <animated-link
            value="Registrarse"
            color="white"
            :link_to="{ name: 'register' }"
            extra_class="nav-list-item-link"/>
          </li>
          <li v-if="store.getters.isAuthenticated" class="nav-list-item user-item">
            <div @click="toggleList">
              <a>{{ store.getters.getUsername }}</a>
              <font-awesome-icon icon="caret-down" />
            </div>
            <ul class="dropdown">
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
import { inject } from 'vue'
import { useStore } from 'vuex'
import HeaderMobile from '@/components/HeaderMobile'
import AnimatedLink from '@/components/custom_elements/AnimatedLink'

const mq = inject('mq')
const store = useStore()

const toggleList = function () {
  const dropdown = [...document.getElementsByClassName('dropdown')][0]
  dropdown.classList.toggle('show')
}

</script>

<style>
.animated-form {
  transition: all .4s ease-in-out;
}
.animated-form:hover {
  flex-grow: .75;
}
.links-list {
  height: 100%;
}
.nav-list {
  list-style-type: none;
  padding: 0;
  height: 100%;
}
.nav-list-item {
  display: inline-flex;
  align-items: center;
  height: 100%;
  padding: 0 1em;
}
.nav-list-item:hover {
  background-color: rgb(50, 51, 66);
}
.user-item {
  position: relative;
  color: white;
  cursor: pointer;
}
.user-item a {
  margin-right: 5px;
}
.dropdown {
  position: absolute;
  right: 0;
  top: 100%;
  list-style-type: none;
  background-color: var(--background-theme);
  transform: scale(1, 0);
  transform-origin: top;
  transition: all .3s ease-in-out;
}
.show {
  transform: scale(1, 1)
}
.dropdown li {
  display: flex;
  gap: .5em;
  padding: 1em 1em;
}
.dropdown li:hover {
  background-color: rgb(141, 194, 243);
}
.dropdown a {
  text-decoration: none;
  color: white;
  font-size: 14px;
}
.dropdown svg {
  color: white;
}
</style>
