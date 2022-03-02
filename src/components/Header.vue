<template>
  <header>
    <nav>
      <div class="logo">
        <img src="@/assets/logo.png" alt="logo">
      </div>
      <div class="search-bar">
        <form class="search-form">
          <font-awesome-icon icon="search" />
          <input type="search" class="search-input" placeholder="Buscar...">
        </form>
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
  name: 'HeaderNav'
}
</script>

<style scoped>
nav {
  display: flex;
  align-items: center;
  background-color: #45526E;
  padding: .4em 4em;
  gap: 2em;
}
.logo img {
  height: 50px;
  width: 50px;
  border-radius: 50%;
}
.search-bar {
  display: flex;
  flex: 1 0 auto;
}
.search-form {
  position: relative;
  flex: .5 0 auto;
  min-width: 135px;
  height: 40px;
  border-radius: 40px;
  box-shadow: 0 6px 8px rgba(0, 0, 0, 0.15);
  background: #fff;
  transition: all .8s ease-in-out;
}
.search-form:hover {
  flex-grow: .75;
}
.fa-search {
  position: absolute;
  top: 12px;
  left: 10px
}
.search-input {
  position: absolute;
  top: 10px;
  left: 38px;
  font-size: 14px;
  background: none;
  color: #5a6674;
  width: calc(100% - 50px);
  height: 20px;
  border: none;
  appearance: none;
  outline: none;
  transition: all .8s ease;
}
.nav-list {
  list-style-type: none;
  padding: 0;
}
.nav-list-item {
  display: inline-block;
  margin: 0 1em;
  color: white;
}
.nav-list-item-link {
  position: relative;
  color: white;
  text-decoration: none;
}
.nav-list-item-link:hover {
  color: white;
}
.nav-list-item-link::before {
  content: "";
  position: absolute;
  display: block;
  width: 100%;
  height: 2px;
  bottom: 0;
  left: 0;
  background-color: white;
  transform: scaleX(0);
  transition: transform 0.3s ease;
}
.nav-list-item-link:hover::before {
  transform: scaleX(1);
}

</style>
