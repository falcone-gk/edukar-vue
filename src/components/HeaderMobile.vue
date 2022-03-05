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
            <a class="mobile-nav-list-item-link" href="#"> Blog</a>
          </li>
          <li class="mobile-nav-list-item">
            <a class="mobile-nav-list-item-link" href="#"> Forum</a>
          </li>
          <li class="mobile-nav-list-item">
            <a class="mobile-nav-list-item-link" href="#"> Login</a>
          </li>
          <li class="mobile-nav-list-item">
            <a class="mobile-nav-list-item-link" href="#"> Registrarse</a>
          </li>
        </ul>
      </div>
    </nav>
  </header>
</template>

<script>
export default {
  name: 'HeaderMobile',
  methods: {
    toggleMenuBar () {
      const menuBar = [...document.getElementsByClassName('mobile-links-list')][0]
      menuBar.classList.toggle('mobile-links-list-shown')
    }
  }
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
  padding: 0;
}
.mobile-nav-list-item {
  display: flex;
  position: relative;
  width: 100vw;
  padding: 10px 0;
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
  margin: 0 auto;
  color: white;
  text-decoration: none;
}
</style>
