<template>
  <header>
    <nav>
      <div class="logo">
        <img src="@/assets/edukar_logo.jpg" alt="logo">
      </div>
      <div class="search-bar">
        <form class="search-form">
          <font-awesome-icon icon="search" />
          <input type="search" class="search-input" placeholder="Buscar...">
        </form>
      </div>
      <div class="menu-bar">
        <button @click="toggleMenuBar">
          <font-awesome-icon icon="bars" />
        </button>
      </div>
      <div class="links-list">
        <ul class="nav-list">
          <li class="nav-list-item">
            <a class="nav-list-item-link" href="#"> Blog</a>
          </li>
          <li class="nav-list-item">
            <a class="nav-list-item-link" href="#"> Forum</a>
          </li>
          <li class="nav-list-item">
            <a class="nav-list-item-link" href="#"> Login</a>
          </li>
          <li class="nav-list-item">
            <a class="nav-list-item-link" href="#"> Registrarse</a>
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
      const menuBar = [...document.getElementsByClassName('links-list')][0]
      menuBar.classList.toggle('links-list-shown')
    }
  }
}
</script>

<style scoped>
nav {
  position: relative;
  padding: .4em 1em;
}
.search-form {
  flex: 1 0 auto;
}
.search-form:focus-within {
  border: 2px solid rgb(0, 162, 255);
}
.menu-bar button {
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
.links-list {
  transform: scale(1, 0);
  position: absolute;
  top: 100%;
  left: 0;
  width: 100vw;
  background-color: #45526E;
  transform-origin: top;
  transition: all .3s ease-in-out;
}
.links-list-shown {
  transform: scale(1, 1)
}
.nav-list {
  list-style-type: none;
  padding: 0;
}
.nav-list-item {
  display: flex;
  position: relative;
  width: 100vw;
  padding: 10px 0;
}
.nav-list-item::before {
  content: "";
  position: absolute;
  top: 0;
  width: 100vw;
  height: 2px;
  background-color: white;
}
.nav-list-item-link {
  margin: 0 auto;
  color: white;
  text-decoration: none;
}
</style>
